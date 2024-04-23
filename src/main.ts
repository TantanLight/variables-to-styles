import { once, showUI } from '@create-figma-plugin/utilities';

import { ApplyVariablesHandler, CloseHandler } from './types';

async function fetchCollections() {
  const localCollections = await figma.variables.getLocalVariableCollectionsAsync();
  const libraryCollections = await figma.teamLibrary.getAvailableLibraryVariableCollectionsAsync();

  const allCollections = [
    ...localCollections.map(collection => ({ name: collection.name, key: collection.id })),
    ...libraryCollections.map(collection => ({ name: collection.name, key: collection.key })),
  ];
  console.log(localCollections, "local\n" , libraryCollections, "library")

  figma.ui.postMessage({ type: 'COLLECTIONS_FETCHED', collections: allCollections });
}

async function getVariablesFromLocalCollection(collectionId: string): Promise<Variable[]> {
  const collection = await figma.variables.getVariableCollectionByIdAsync(collectionId);
  if (!collection) {
    return [];
  }

  const localVariables = await figma.variables.getLocalVariablesAsync();
  return localVariables.filter(variable => variable.variableCollectionId === collectionId);
}

async function getVariablesFromLibrary(libraryCollectionKey: string): Promise<LibraryVariable[]> {
  try {
    const localCollections = await figma.variables.getLocalVariableCollectionsAsync();
    const localCollection = localCollections.find(collection => collection.name === libraryCollectionKey);

    if (localCollection) {
      const variables = await getVariablesFromLocalCollection(localCollection.id);
      return variables.map(variable => ({
        name: variable.name,
        key: variable.key,
        resolvedType: variable.resolvedType
      }));
    } else {
      const libraryCollections = await figma.teamLibrary.getAvailableLibraryVariableCollectionsAsync();
      const lib = libraryCollections.map(collection => ({ name: collection.name, key: collection.key }))
      const lib_key = lib.find(collection => collection.name === libraryCollectionKey);
      if (!lib_key || lib_key.key === undefined) {
        console.error('Library collection key is undefined');
        figma.notify('Selected library collection is not available.');
        return [];
      }
      const variables = await figma.teamLibrary.getVariablesInLibraryCollectionAsync(lib_key.key);
      return variables;
    }
  } catch (error) {
    console.error('Error retrieving variables from library:', error);
    figma.notify('An error occurred while retrieving variables from the library.');
    return [];
  }
}


async function applyVariablesToStyles(variables: LibraryVariable[], colorStyles: PaintStyle[]) {
  let scannedVariables = 0;
  let matchedStyles = 0;

  try {
    for (const style of colorStyles) {
      console.clear()

      const matchingVariable: LibraryVariable | undefined = variables.find(variable => variable.name === style.name);
      console.log(variables, "variables\n", style.name)
      if (matchingVariable) {
        const variable = await figma.variables.importVariableByKeyAsync(matchingVariable.key);
        scannedVariables++;

        const paintsCopy = JSON.parse(JSON.stringify(style.paints)) as Paint[];
        if (paintsCopy[0].type === 'SOLID') {
          paintsCopy[0] = figma.variables.setBoundVariableForPaint(paintsCopy[0] as SolidPaint, 'color', variable);
          style.paints = paintsCopy;
          matchedStyles++;
        }
      }
    }
  } catch (error) {
    console.error('Error applying variables to styles:', error);
  }

  return { scannedVariables, matchedStyles };
}

async function initialize(libraryCollectionKey: string) {
  try {
    const libraryVariables = await getVariablesFromLibrary(libraryCollectionKey);
    if (libraryVariables.length === 0) {
      figma.notify('No variables found in the library collection.');
      figma.closePlugin();
      return;
    }

    const colorStyles = await figma.getLocalPaintStylesAsync();
    const { scannedVariables, matchedStyles } = await applyVariablesToStyles(libraryVariables, colorStyles);

    figma.notify(`Scanned ${scannedVariables} variables. Applied to ${matchedStyles} matching styles.`);
  } catch (error) {
    figma.notify('An error occurred while applying variables to styles.');
    console.error('Error:', error);
  } finally {
    figma.closePlugin();
  }
}

export default function () {

  fetchCollections();

  once<ApplyVariablesHandler>('APPLY_VARIABLES', async function ({ collectionKey }) {
    figma.notify('Doing Magic 🪄✨ - might take a minute depending on the amount of variables.')
    await initialize(collectionKey);
  });

  once<CloseHandler>('CLOSE', function () {
    figma.closePlugin();
  });

  showUI({
    height: 300,
    width: 240,
  });
}