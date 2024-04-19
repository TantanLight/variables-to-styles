var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/@create-figma-plugin/utilities/lib/events.js
function on(name, handler) {
  const id = `${currentId}`;
  currentId += 1;
  eventHandlers[id] = { handler, name };
  return function() {
    delete eventHandlers[id];
  };
}
function once(name, handler) {
  let done = false;
  return on(name, function(...args) {
    if (done === true) {
      return;
    }
    done = true;
    handler(...args);
  });
}
function invokeEventHandler(name, args) {
  let invoked = false;
  for (const id in eventHandlers) {
    if (eventHandlers[id].name === name) {
      eventHandlers[id].handler.apply(null, args);
      invoked = true;
    }
  }
  if (invoked === false) {
    throw new Error(`No event handler with name \`${name}\``);
  }
}
var eventHandlers, currentId;
var init_events = __esm({
  "node_modules/@create-figma-plugin/utilities/lib/events.js"() {
    eventHandlers = {};
    currentId = 0;
    if (typeof window === "undefined") {
      figma.ui.onmessage = function(args) {
        if (!Array.isArray(args)) {
          return;
        }
        const [name, ...rest] = args;
        if (typeof name !== "string") {
          return;
        }
        invokeEventHandler(name, rest);
      };
    } else {
      window.onmessage = function(event) {
        if (typeof event.data.pluginMessage === "undefined") {
          return;
        }
        const args = event.data.pluginMessage;
        if (!Array.isArray(args)) {
          return;
        }
        const [name, ...rest] = event.data.pluginMessage;
        if (typeof name !== "string") {
          return;
        }
        invokeEventHandler(name, rest);
      };
    }
  }
});

// node_modules/@create-figma-plugin/utilities/lib/ui.js
function showUI(options, data) {
  if (typeof __html__ === "undefined") {
    throw new Error("No UI defined");
  }
  const html = `<div id="create-figma-plugin"></div><script>document.body.classList.add('theme-${figma.editorType}');const __FIGMA_COMMAND__='${typeof figma.command === "undefined" ? "" : figma.command}';const __SHOW_UI_DATA__=${JSON.stringify(typeof data === "undefined" ? {} : data)};${__html__}</script>`;
  figma.showUI(html, __spreadProps(__spreadValues({}, options), {
    themeColors: typeof options.themeColors === "undefined" ? true : options.themeColors
  }));
}
var init_ui = __esm({
  "node_modules/@create-figma-plugin/utilities/lib/ui.js"() {
  }
});

// node_modules/@create-figma-plugin/utilities/lib/index.js
var init_lib = __esm({
  "node_modules/@create-figma-plugin/utilities/lib/index.js"() {
    init_events();
    init_ui();
  }
});

// src/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => main_default
});
async function fetchCollections() {
  const localCollections = await figma.variables.getLocalVariableCollectionsAsync();
  const libraryCollections = await figma.teamLibrary.getAvailableLibraryVariableCollectionsAsync();
  const allCollections = [
    ...localCollections.map((collection) => ({ name: collection.name, key: collection.id })),
    ...libraryCollections.map((collection) => ({ name: collection.name, key: collection.key }))
  ];
  console.log(allCollections);
  figma.ui.postMessage({ type: "COLLECTIONS_FETCHED", collections: allCollections });
}
async function getVariablesFromLocalCollection(collectionId) {
  const collection = await figma.variables.getVariableCollectionByIdAsync(collectionId);
  if (!collection) {
    return [];
  }
  const localVariables = await figma.variables.getLocalVariablesAsync();
  return localVariables.filter((variable) => variable.variableCollectionId === collectionId);
}
async function getVariablesFromLibrary(libraryCollectionKey) {
  try {
    const localCollections = await figma.variables.getLocalVariableCollectionsAsync();
    const localCollection = localCollections.find((collection) => collection.name === libraryCollectionKey);
    if (localCollection) {
      const variables = await getVariablesFromLocalCollection(localCollection.id);
      return variables.map((variable) => ({
        name: variable.name,
        key: variable.key,
        resolvedType: variable.resolvedType
      }));
    } else {
      const variables = await figma.teamLibrary.getVariablesInLibraryCollectionAsync(libraryCollectionKey);
      return variables;
    }
  } catch (error) {
    console.error("Error retrieving variables from library:", error);
    figma.notify("An error occurred while retrieving variables from the library.");
    return [];
  }
}
async function applyVariablesToStyles(variables, colorStyles) {
  let scannedVariables = 0;
  let matchedStyles = 0;
  try {
    for (const style of colorStyles) {
      console.clear();
      const matchingVariable = variables.find((variable) => variable.name === style.name);
      if (matchingVariable) {
        const variable = await figma.variables.importVariableByKeyAsync(matchingVariable.key);
        scannedVariables++;
        const paintsCopy = JSON.parse(JSON.stringify(style.paints));
        if (paintsCopy[0].type === "SOLID") {
          paintsCopy[0] = figma.variables.setBoundVariableForPaint(paintsCopy[0], "color", variable);
          style.paints = paintsCopy;
          matchedStyles++;
        }
      }
    }
  } catch (error) {
    console.error("Error applying variables to styles:", error);
  }
  return { scannedVariables, matchedStyles };
}
async function initialize(libraryCollectionKey) {
  try {
    const libraryVariables = await getVariablesFromLibrary(libraryCollectionKey);
    if (libraryVariables.length === 0) {
      figma.notify("No variables found in the library collection.");
      figma.closePlugin();
      return;
    }
    const colorStyles = await figma.getLocalPaintStylesAsync();
    const { scannedVariables, matchedStyles } = await applyVariablesToStyles(libraryVariables, colorStyles);
    figma.notify(`Scanned ${scannedVariables} variables. Applied to ${matchedStyles} matching styles.`);
  } catch (error) {
    figma.notify("An error occurred while applying variables to styles.");
    console.error("Error:", error);
  } finally {
    figma.closePlugin();
  }
}
function main_default() {
  fetchCollections();
  once("APPLY_VARIABLES", async function({ collectionKey }) {
    figma.notify("Doing Magic \u{1FA84}\u2728 - might take a minute depending on the amount of variables.");
    await initialize(collectionKey);
  });
  once("CLOSE", function() {
    figma.closePlugin();
  });
  showUI({
    height: 300,
    width: 240
  });
}
var init_main = __esm({
  "src/main.ts"() {
    "use strict";
    init_lib();
  }
});

// <stdin>
var modules = { "src/main.ts--default": (init_main(), __toCommonJS(main_exports))["default"] };
var commandId = true ? "src/main.ts--default" : figma.command;
modules[commandId]();
