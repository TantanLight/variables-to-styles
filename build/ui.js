(() => {
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a3, b2) => {
    for (var prop in b2 || (b2 = {}))
      if (__hasOwnProp.call(b2, prop))
        __defNormalProp(a3, prop, b2[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b2)) {
        if (__propIsEnum.call(b2, prop))
          __defNormalProp(a3, prop, b2[prop]);
      }
    return a3;
  };
  var __spreadProps = (a3, b2) => __defProps(a3, __getOwnPropDescs(b2));
  var __objRest = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
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

  // node_modules/preact/dist/preact.module.js
  function d(n2, l3) {
    for (var u3 in l3)
      n2[u3] = l3[u3];
    return n2;
  }
  function _(n2) {
    var l3 = n2.parentNode;
    l3 && l3.removeChild(n2);
  }
  function g(l3, u3, t3) {
    var i3, o3, r3, f3 = {};
    for (r3 in u3)
      "key" == r3 ? i3 = u3[r3] : "ref" == r3 ? o3 = u3[r3] : f3[r3] = u3[r3];
    if (arguments.length > 2 && (f3.children = arguments.length > 3 ? n.call(arguments, 2) : t3), "function" == typeof l3 && null != l3.defaultProps)
      for (r3 in l3.defaultProps)
        void 0 === f3[r3] && (f3[r3] = l3.defaultProps[r3]);
    return b(l3, f3, i3, o3, null);
  }
  function b(n2, t3, i3, o3, r3) {
    var f3 = { type: n2, props: t3, key: i3, ref: o3, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: null == r3 ? ++u : r3, __i: -1, __u: 0 };
    return null == r3 && null != l.vnode && l.vnode(f3), f3;
  }
  function w(n2) {
    return n2.children;
  }
  function k(n2, l3) {
    this.props = n2, this.context = l3;
  }
  function x(n2, l3) {
    if (null == l3)
      return n2.__ ? x(n2.__, n2.__i + 1) : null;
    for (var u3; l3 < n2.__k.length; l3++)
      if (null != (u3 = n2.__k[l3]) && null != u3.__e)
        return u3.__e;
    return "function" == typeof n2.type ? x(n2) : null;
  }
  function C(n2) {
    var l3, u3;
    if (null != (n2 = n2.__) && null != n2.__c) {
      for (n2.__e = n2.__c.base = null, l3 = 0; l3 < n2.__k.length; l3++)
        if (null != (u3 = n2.__k[l3]) && null != u3.__e) {
          n2.__e = n2.__c.base = u3.__e;
          break;
        }
      return C(n2);
    }
  }
  function P(n2) {
    (!n2.__d && (n2.__d = true) && i.push(n2) && !S.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || r)(S);
  }
  function S() {
    var n2, u3, t3, o3, r3, e3, c3, s3;
    for (i.sort(f); n2 = i.shift(); )
      n2.__d && (u3 = i.length, o3 = void 0, e3 = (r3 = (t3 = n2).__v).__e, c3 = [], s3 = [], t3.__P && ((o3 = d({}, r3)).__v = r3.__v + 1, l.vnode && l.vnode(o3), O(t3.__P, o3, r3, t3.__n, void 0 !== t3.__P.ownerSVGElement, 32 & r3.__u ? [e3] : null, c3, null == e3 ? x(r3) : e3, !!(32 & r3.__u), s3), o3.__v = r3.__v, o3.__.__k[o3.__i] = o3, j(c3, o3, s3), o3.__e != e3 && C(o3)), i.length > u3 && i.sort(f));
    S.__r = 0;
  }
  function $(n2, l3, u3, t3, i3, o3, r3, f3, e3, c3, s3) {
    var a3, p3, y3, d3, _3, g3 = t3 && t3.__k || v, b2 = l3.length;
    for (u3.__d = e3, I(u3, l3, g3), e3 = u3.__d, a3 = 0; a3 < b2; a3++)
      null != (y3 = u3.__k[a3]) && "boolean" != typeof y3 && "function" != typeof y3 && (p3 = -1 === y3.__i ? h : g3[y3.__i] || h, y3.__i = a3, O(n2, y3, p3, i3, o3, r3, f3, e3, c3, s3), d3 = y3.__e, y3.ref && p3.ref != y3.ref && (p3.ref && N(p3.ref, null, y3), s3.push(y3.ref, y3.__c || d3, y3)), null == _3 && null != d3 && (_3 = d3), 65536 & y3.__u || p3.__k === y3.__k ? (e3 && !e3.isConnected && (e3 = x(p3)), e3 = H(y3, e3, n2)) : "function" == typeof y3.type && void 0 !== y3.__d ? e3 = y3.__d : d3 && (e3 = d3.nextSibling), y3.__d = void 0, y3.__u &= -196609);
    u3.__d = e3, u3.__e = _3;
  }
  function I(n2, l3, u3) {
    var t3, i3, o3, r3, f3, e3 = l3.length, c3 = u3.length, s3 = c3, a3 = 0;
    for (n2.__k = [], t3 = 0; t3 < e3; t3++)
      r3 = t3 + a3, null != (i3 = n2.__k[t3] = null == (i3 = l3[t3]) || "boolean" == typeof i3 || "function" == typeof i3 ? null : "string" == typeof i3 || "number" == typeof i3 || "bigint" == typeof i3 || i3.constructor == String ? b(null, i3, null, null, null) : y(i3) ? b(w, { children: i3 }, null, null, null) : void 0 === i3.constructor && i3.__b > 0 ? b(i3.type, i3.props, i3.key, i3.ref ? i3.ref : null, i3.__v) : i3) ? (i3.__ = n2, i3.__b = n2.__b + 1, f3 = A(i3, u3, r3, s3), i3.__i = f3, o3 = null, -1 !== f3 && (s3--, (o3 = u3[f3]) && (o3.__u |= 131072)), null == o3 || null === o3.__v ? (-1 == f3 && a3--, "function" != typeof i3.type && (i3.__u |= 65536)) : f3 !== r3 && (f3 === r3 + 1 ? a3++ : f3 > r3 ? s3 > e3 - r3 ? a3 += f3 - r3 : a3-- : f3 < r3 ? f3 == r3 - 1 && (a3 = f3 - r3) : a3 = 0, f3 !== t3 + a3 && (i3.__u |= 65536))) : (o3 = u3[r3]) && null == o3.key && o3.__e && 0 == (131072 & o3.__u) && (o3.__e == n2.__d && (n2.__d = x(o3)), q(o3, o3, false), u3[r3] = null, s3--);
    if (s3)
      for (t3 = 0; t3 < c3; t3++)
        null != (o3 = u3[t3]) && 0 == (131072 & o3.__u) && (o3.__e == n2.__d && (n2.__d = x(o3)), q(o3, o3));
  }
  function H(n2, l3, u3) {
    var t3, i3;
    if ("function" == typeof n2.type) {
      for (t3 = n2.__k, i3 = 0; t3 && i3 < t3.length; i3++)
        t3[i3] && (t3[i3].__ = n2, l3 = H(t3[i3], l3, u3));
      return l3;
    }
    n2.__e != l3 && (u3.insertBefore(n2.__e, l3 || null), l3 = n2.__e);
    do {
      l3 = l3 && l3.nextSibling;
    } while (null != l3 && 8 === l3.nodeType);
    return l3;
  }
  function T(n2, l3) {
    return l3 = l3 || [], null == n2 || "boolean" == typeof n2 || (y(n2) ? n2.some(function(n3) {
      T(n3, l3);
    }) : l3.push(n2)), l3;
  }
  function A(n2, l3, u3, t3) {
    var i3 = n2.key, o3 = n2.type, r3 = u3 - 1, f3 = u3 + 1, e3 = l3[u3];
    if (null === e3 || e3 && i3 == e3.key && o3 === e3.type && 0 == (131072 & e3.__u))
      return u3;
    if (t3 > (null != e3 && 0 == (131072 & e3.__u) ? 1 : 0))
      for (; r3 >= 0 || f3 < l3.length; ) {
        if (r3 >= 0) {
          if ((e3 = l3[r3]) && 0 == (131072 & e3.__u) && i3 == e3.key && o3 === e3.type)
            return r3;
          r3--;
        }
        if (f3 < l3.length) {
          if ((e3 = l3[f3]) && 0 == (131072 & e3.__u) && i3 == e3.key && o3 === e3.type)
            return f3;
          f3++;
        }
      }
    return -1;
  }
  function F(n2, l3, u3) {
    "-" === l3[0] ? n2.setProperty(l3, null == u3 ? "" : u3) : n2[l3] = null == u3 ? "" : "number" != typeof u3 || p.test(l3) ? u3 : u3 + "px";
  }
  function L(n2, l3, u3, t3, i3) {
    var o3;
    n:
      if ("style" === l3)
        if ("string" == typeof u3)
          n2.style.cssText = u3;
        else {
          if ("string" == typeof t3 && (n2.style.cssText = t3 = ""), t3)
            for (l3 in t3)
              u3 && l3 in u3 || F(n2.style, l3, "");
          if (u3)
            for (l3 in u3)
              t3 && u3[l3] === t3[l3] || F(n2.style, l3, u3[l3]);
        }
      else if ("o" === l3[0] && "n" === l3[1])
        o3 = l3 !== (l3 = l3.replace(/(PointerCapture)$|Capture$/i, "$1")), l3 = l3.toLowerCase() in n2 || "onFocusOut" === l3 || "onFocusIn" === l3 ? l3.toLowerCase().slice(2) : l3.slice(2), n2.l || (n2.l = {}), n2.l[l3 + o3] = u3, u3 ? t3 ? u3.u = t3.u : (u3.u = e, n2.addEventListener(l3, o3 ? s : c, o3)) : n2.removeEventListener(l3, o3 ? s : c, o3);
      else {
        if (i3)
          l3 = l3.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if ("width" != l3 && "height" != l3 && "href" != l3 && "list" != l3 && "form" != l3 && "tabIndex" != l3 && "download" != l3 && "rowSpan" != l3 && "colSpan" != l3 && "role" != l3 && l3 in n2)
          try {
            n2[l3] = null == u3 ? "" : u3;
            break n;
          } catch (n3) {
          }
        "function" == typeof u3 || (null == u3 || false === u3 && "-" !== l3[4] ? n2.removeAttribute(l3) : n2.setAttribute(l3, u3));
      }
  }
  function M(n2) {
    return function(u3) {
      if (this.l) {
        var t3 = this.l[u3.type + n2];
        if (null == u3.t)
          u3.t = e++;
        else if (u3.t < t3.u)
          return;
        return t3(l.event ? l.event(u3) : u3);
      }
    };
  }
  function O(n2, u3, t3, i3, o3, r3, f3, e3, c3, s3) {
    var a3, h3, v3, p3, _3, g3, b2, m3, x4, C4, P4, S3, I3, H3, T4, A3 = u3.type;
    if (void 0 !== u3.constructor)
      return null;
    128 & t3.__u && (c3 = !!(32 & t3.__u), r3 = [e3 = u3.__e = t3.__e]), (a3 = l.__b) && a3(u3);
    n:
      if ("function" == typeof A3)
        try {
          if (m3 = u3.props, x4 = (a3 = A3.contextType) && i3[a3.__c], C4 = a3 ? x4 ? x4.props.value : a3.__ : i3, t3.__c ? b2 = (h3 = u3.__c = t3.__c).__ = h3.__E : ("prototype" in A3 && A3.prototype.render ? u3.__c = h3 = new A3(m3, C4) : (u3.__c = h3 = new k(m3, C4), h3.constructor = A3, h3.render = B), x4 && x4.sub(h3), h3.props = m3, h3.state || (h3.state = {}), h3.context = C4, h3.__n = i3, v3 = h3.__d = true, h3.__h = [], h3._sb = []), null == h3.__s && (h3.__s = h3.state), null != A3.getDerivedStateFromProps && (h3.__s == h3.state && (h3.__s = d({}, h3.__s)), d(h3.__s, A3.getDerivedStateFromProps(m3, h3.__s))), p3 = h3.props, _3 = h3.state, h3.__v = u3, v3)
            null == A3.getDerivedStateFromProps && null != h3.componentWillMount && h3.componentWillMount(), null != h3.componentDidMount && h3.__h.push(h3.componentDidMount);
          else {
            if (null == A3.getDerivedStateFromProps && m3 !== p3 && null != h3.componentWillReceiveProps && h3.componentWillReceiveProps(m3, C4), !h3.__e && (null != h3.shouldComponentUpdate && false === h3.shouldComponentUpdate(m3, h3.__s, C4) || u3.__v === t3.__v)) {
              for (u3.__v !== t3.__v && (h3.props = m3, h3.state = h3.__s, h3.__d = false), u3.__e = t3.__e, u3.__k = t3.__k, u3.__k.forEach(function(n3) {
                n3 && (n3.__ = u3);
              }), P4 = 0; P4 < h3._sb.length; P4++)
                h3.__h.push(h3._sb[P4]);
              h3._sb = [], h3.__h.length && f3.push(h3);
              break n;
            }
            null != h3.componentWillUpdate && h3.componentWillUpdate(m3, h3.__s, C4), null != h3.componentDidUpdate && h3.__h.push(function() {
              h3.componentDidUpdate(p3, _3, g3);
            });
          }
          if (h3.context = C4, h3.props = m3, h3.__P = n2, h3.__e = false, S3 = l.__r, I3 = 0, "prototype" in A3 && A3.prototype.render) {
            for (h3.state = h3.__s, h3.__d = false, S3 && S3(u3), a3 = h3.render(h3.props, h3.state, h3.context), H3 = 0; H3 < h3._sb.length; H3++)
              h3.__h.push(h3._sb[H3]);
            h3._sb = [];
          } else
            do {
              h3.__d = false, S3 && S3(u3), a3 = h3.render(h3.props, h3.state, h3.context), h3.state = h3.__s;
            } while (h3.__d && ++I3 < 25);
          h3.state = h3.__s, null != h3.getChildContext && (i3 = d(d({}, i3), h3.getChildContext())), v3 || null == h3.getSnapshotBeforeUpdate || (g3 = h3.getSnapshotBeforeUpdate(p3, _3)), $(n2, y(T4 = null != a3 && a3.type === w && null == a3.key ? a3.props.children : a3) ? T4 : [T4], u3, t3, i3, o3, r3, f3, e3, c3, s3), h3.base = u3.__e, u3.__u &= -161, h3.__h.length && f3.push(h3), b2 && (h3.__E = h3.__ = null);
        } catch (n3) {
          u3.__v = null, c3 || null != r3 ? (u3.__e = e3, u3.__u |= c3 ? 160 : 32, r3[r3.indexOf(e3)] = null) : (u3.__e = t3.__e, u3.__k = t3.__k), l.__e(n3, u3, t3);
        }
      else
        null == r3 && u3.__v === t3.__v ? (u3.__k = t3.__k, u3.__e = t3.__e) : u3.__e = z(t3.__e, u3, t3, i3, o3, r3, f3, c3, s3);
    (a3 = l.diffed) && a3(u3);
  }
  function j(n2, u3, t3) {
    u3.__d = void 0;
    for (var i3 = 0; i3 < t3.length; i3++)
      N(t3[i3], t3[++i3], t3[++i3]);
    l.__c && l.__c(u3, n2), n2.some(function(u4) {
      try {
        n2 = u4.__h, u4.__h = [], n2.some(function(n3) {
          n3.call(u4);
        });
      } catch (n3) {
        l.__e(n3, u4.__v);
      }
    });
  }
  function z(l3, u3, t3, i3, o3, r3, f3, e3, c3) {
    var s3, a3, v3, p3, d3, g3, b2, m3 = t3.props, w3 = u3.props, k3 = u3.type;
    if ("svg" === k3 && (o3 = true), null != r3) {
      for (s3 = 0; s3 < r3.length; s3++)
        if ((d3 = r3[s3]) && "setAttribute" in d3 == !!k3 && (k3 ? d3.localName === k3 : 3 === d3.nodeType)) {
          l3 = d3, r3[s3] = null;
          break;
        }
    }
    if (null == l3) {
      if (null === k3)
        return document.createTextNode(w3);
      l3 = o3 ? document.createElementNS("http://www.w3.org/2000/svg", k3) : document.createElement(k3, w3.is && w3), r3 = null, e3 = false;
    }
    if (null === k3)
      m3 === w3 || e3 && l3.data === w3 || (l3.data = w3);
    else {
      if (r3 = r3 && n.call(l3.childNodes), m3 = t3.props || h, !e3 && null != r3)
        for (m3 = {}, s3 = 0; s3 < l3.attributes.length; s3++)
          m3[(d3 = l3.attributes[s3]).name] = d3.value;
      for (s3 in m3)
        d3 = m3[s3], "children" == s3 || ("dangerouslySetInnerHTML" == s3 ? v3 = d3 : "key" === s3 || s3 in w3 || L(l3, s3, null, d3, o3));
      for (s3 in w3)
        d3 = w3[s3], "children" == s3 ? p3 = d3 : "dangerouslySetInnerHTML" == s3 ? a3 = d3 : "value" == s3 ? g3 = d3 : "checked" == s3 ? b2 = d3 : "key" === s3 || e3 && "function" != typeof d3 || m3[s3] === d3 || L(l3, s3, d3, m3[s3], o3);
      if (a3)
        e3 || v3 && (a3.__html === v3.__html || a3.__html === l3.innerHTML) || (l3.innerHTML = a3.__html), u3.__k = [];
      else if (v3 && (l3.innerHTML = ""), $(l3, y(p3) ? p3 : [p3], u3, t3, i3, o3 && "foreignObject" !== k3, r3, f3, r3 ? r3[0] : t3.__k && x(t3, 0), e3, c3), null != r3)
        for (s3 = r3.length; s3--; )
          null != r3[s3] && _(r3[s3]);
      e3 || (s3 = "value", void 0 !== g3 && (g3 !== l3[s3] || "progress" === k3 && !g3 || "option" === k3 && g3 !== m3[s3]) && L(l3, s3, g3, m3[s3], false), s3 = "checked", void 0 !== b2 && b2 !== l3[s3] && L(l3, s3, b2, m3[s3], false));
    }
    return l3;
  }
  function N(n2, u3, t3) {
    try {
      "function" == typeof n2 ? n2(u3) : n2.current = u3;
    } catch (n3) {
      l.__e(n3, t3);
    }
  }
  function q(n2, u3, t3) {
    var i3, o3;
    if (l.unmount && l.unmount(n2), (i3 = n2.ref) && (i3.current && i3.current !== n2.__e || N(i3, null, u3)), null != (i3 = n2.__c)) {
      if (i3.componentWillUnmount)
        try {
          i3.componentWillUnmount();
        } catch (n3) {
          l.__e(n3, u3);
        }
      i3.base = i3.__P = null;
    }
    if (i3 = n2.__k)
      for (o3 = 0; o3 < i3.length; o3++)
        i3[o3] && q(i3[o3], u3, t3 || "function" != typeof n2.type);
    t3 || null == n2.__e || _(n2.__e), n2.__c = n2.__ = n2.__e = n2.__d = void 0;
  }
  function B(n2, l3, u3) {
    return this.constructor(n2, u3);
  }
  function D(u3, t3, i3) {
    var o3, r3, f3, e3;
    l.__ && l.__(u3, t3), r3 = (o3 = "function" == typeof i3) ? null : i3 && i3.__k || t3.__k, f3 = [], e3 = [], O(t3, u3 = (!o3 && i3 || t3).__k = g(w, null, [u3]), r3 || h, h, void 0 !== t3.ownerSVGElement, !o3 && i3 ? [i3] : r3 ? null : t3.firstChild ? n.call(t3.childNodes) : null, f3, !o3 && i3 ? i3 : r3 ? r3.__e : t3.firstChild, o3, e3), j(f3, u3, e3);
  }
  var n, l, u, t, i, o, r, f, e, c, s, a, h, v, p, y;
  var init_preact_module = __esm({
    "node_modules/preact/dist/preact.module.js"() {
      h = {};
      v = [];
      p = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
      y = Array.isArray;
      n = v.slice, l = { __e: function(n2, l3, u3, t3) {
        for (var i3, o3, r3; l3 = l3.__; )
          if ((i3 = l3.__c) && !i3.__)
            try {
              if ((o3 = i3.constructor) && null != o3.getDerivedStateFromError && (i3.setState(o3.getDerivedStateFromError(n2)), r3 = i3.__d), null != i3.componentDidCatch && (i3.componentDidCatch(n2, t3 || {}), r3 = i3.__d), r3)
                return i3.__E = i3;
            } catch (l4) {
              n2 = l4;
            }
        throw n2;
      } }, u = 0, t = function(n2) {
        return null != n2 && null == n2.constructor;
      }, k.prototype.setState = function(n2, l3) {
        var u3;
        u3 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = d({}, this.state), "function" == typeof n2 && (n2 = n2(d({}, u3), this.props)), n2 && d(u3, n2), null != n2 && this.__v && (l3 && this._sb.push(l3), P(this));
      }, k.prototype.forceUpdate = function(n2) {
        this.__v && (this.__e = true, n2 && this.__h.push(n2), P(this));
      }, k.prototype.render = w, i = [], r = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, f = function(n2, l3) {
        return n2.__v.__b - l3.__v.__b;
      }, S.__r = 0, e = 0, c = M(false), s = M(true), a = 0;
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/utilities/create-class-name.js
  function createClassName(classNames) {
    return classNames.filter(function(className) {
      return className !== null;
    }).join(" ");
  }
  var init_create_class_name = __esm({
    "node_modules/@create-figma-plugin/ui/lib/utilities/create-class-name.js"() {
    }
  });

  // node_modules/preact/hooks/dist/hooks.module.js
  function h2(n2, t3) {
    e2.__h && e2.__h(r2, n2, o2 || t3), o2 = 0;
    var u3 = r2.__H || (r2.__H = { __: [], __h: [] });
    return n2 >= u3.__.length && u3.__.push({ __V: c2 }), u3.__[n2];
  }
  function p2(n2) {
    return o2 = 1, y2(D2, n2);
  }
  function y2(n2, u3, i3) {
    var o3 = h2(t2++, 2);
    if (o3.t = n2, !o3.__c && (o3.__ = [i3 ? i3(u3) : D2(void 0, u3), function(n3) {
      var t3 = o3.__N ? o3.__N[0] : o3.__[0], r3 = o3.t(t3, n3);
      t3 !== r3 && (o3.__N = [r3, o3.__[1]], o3.__c.setState({}));
    }], o3.__c = r2, !r2.u)) {
      var f3 = function(n3, t3, r3) {
        if (!o3.__c.__H)
          return true;
        var u4 = o3.__c.__H.__.filter(function(n4) {
          return !!n4.__c;
        });
        if (u4.every(function(n4) {
          return !n4.__N;
        }))
          return !c3 || c3.call(this, n3, t3, r3);
        var i4 = false;
        return u4.forEach(function(n4) {
          if (n4.__N) {
            var t4 = n4.__[0];
            n4.__ = n4.__N, n4.__N = void 0, t4 !== n4.__[0] && (i4 = true);
          }
        }), !(!i4 && o3.__c.props === n3) && (!c3 || c3.call(this, n3, t3, r3));
      };
      r2.u = true;
      var c3 = r2.shouldComponentUpdate, e3 = r2.componentWillUpdate;
      r2.componentWillUpdate = function(n3, t3, r3) {
        if (this.__e) {
          var u4 = c3;
          c3 = void 0, f3(n3, t3, r3), c3 = u4;
        }
        e3 && e3.call(this, n3, t3, r3);
      }, r2.shouldComponentUpdate = f3;
    }
    return o3.__N || o3.__;
  }
  function _2(n2, u3) {
    var i3 = h2(t2++, 3);
    !e2.__s && C2(i3.__H, u3) && (i3.__ = n2, i3.i = u3, r2.__H.__h.push(i3));
  }
  function F2(n2) {
    return o2 = 5, q2(function() {
      return { current: n2 };
    }, []);
  }
  function q2(n2, r3) {
    var u3 = h2(t2++, 7);
    return C2(u3.__H, r3) ? (u3.__V = n2(), u3.i = r3, u3.__h = n2, u3.__V) : u3.__;
  }
  function x2(n2, t3) {
    return o2 = 8, q2(function() {
      return n2;
    }, t3);
  }
  function j2() {
    for (var n2; n2 = f2.shift(); )
      if (n2.__P && n2.__H)
        try {
          n2.__H.__h.forEach(z2), n2.__H.__h.forEach(B2), n2.__H.__h = [];
        } catch (t3) {
          n2.__H.__h = [], e2.__e(t3, n2.__v);
        }
  }
  function w2(n2) {
    var t3, r3 = function() {
      clearTimeout(u3), k2 && cancelAnimationFrame(t3), setTimeout(n2);
    }, u3 = setTimeout(r3, 100);
    k2 && (t3 = requestAnimationFrame(r3));
  }
  function z2(n2) {
    var t3 = r2, u3 = n2.__c;
    "function" == typeof u3 && (n2.__c = void 0, u3()), r2 = t3;
  }
  function B2(n2) {
    var t3 = r2;
    n2.__c = n2.__(), r2 = t3;
  }
  function C2(n2, t3) {
    return !n2 || n2.length !== t3.length || t3.some(function(t4, r3) {
      return t4 !== n2[r3];
    });
  }
  function D2(n2, t3) {
    return "function" == typeof t3 ? t3(n2) : t3;
  }
  var t2, r2, u2, i2, o2, f2, c2, e2, a2, v2, l2, m, s2, d2, k2;
  var init_hooks_module = __esm({
    "node_modules/preact/hooks/dist/hooks.module.js"() {
      init_preact_module();
      o2 = 0;
      f2 = [];
      c2 = [];
      e2 = l;
      a2 = e2.__b;
      v2 = e2.__r;
      l2 = e2.diffed;
      m = e2.__c;
      s2 = e2.unmount;
      d2 = e2.__;
      e2.__b = function(n2) {
        r2 = null, a2 && a2(n2);
      }, e2.__ = function(n2, t3) {
        n2 && t3.__k && t3.__k.__m && (n2.__m = t3.__k.__m), d2 && d2(n2, t3);
      }, e2.__r = function(n2) {
        v2 && v2(n2), t2 = 0;
        var i3 = (r2 = n2.__c).__H;
        i3 && (u2 === r2 ? (i3.__h = [], r2.__h = [], i3.__.forEach(function(n3) {
          n3.__N && (n3.__ = n3.__N), n3.__V = c2, n3.__N = n3.i = void 0;
        })) : (i3.__h.forEach(z2), i3.__h.forEach(B2), i3.__h = [], t2 = 0)), u2 = r2;
      }, e2.diffed = function(n2) {
        l2 && l2(n2);
        var t3 = n2.__c;
        t3 && t3.__H && (t3.__H.__h.length && (1 !== f2.push(t3) && i2 === e2.requestAnimationFrame || ((i2 = e2.requestAnimationFrame) || w2)(j2)), t3.__H.__.forEach(function(n3) {
          n3.i && (n3.__H = n3.i), n3.__V !== c2 && (n3.__ = n3.__V), n3.i = void 0, n3.__V = c2;
        })), u2 = r2 = null;
      }, e2.__c = function(n2, t3) {
        t3.some(function(n3) {
          try {
            n3.__h.forEach(z2), n3.__h = n3.__h.filter(function(n4) {
              return !n4.__ || B2(n4);
            });
          } catch (r3) {
            t3.some(function(n4) {
              n4.__h && (n4.__h = []);
            }), t3 = [], e2.__e(r3, n3.__v);
          }
        }), m && m(n2, t3);
      }, e2.unmount = function(n2) {
        s2 && s2(n2);
        var t3, r3 = n2.__c;
        r3 && r3.__H && (r3.__H.__.forEach(function(n3) {
          try {
            z2(n3);
          } catch (n4) {
            t3 = n4;
          }
        }), r3.__H = void 0, t3 && e2.__e(t3, r3.__v));
      };
      k2 = "function" == typeof requestAnimationFrame;
    }
  });

  // node_modules/preact/compat/dist/compat.module.js
  function S2(n2, t3) {
    for (var e3 in t3)
      n2[e3] = t3[e3];
    return n2;
  }
  function C3(n2, t3) {
    for (var e3 in n2)
      if ("__source" !== e3 && !(e3 in t3))
        return true;
    for (var r3 in t3)
      if ("__source" !== r3 && n2[r3] !== t3[r3])
        return true;
    return false;
  }
  function E2(n2, t3) {
    this.props = n2, this.context = t3;
  }
  function N2(n2) {
    function t3(t4) {
      var e3 = S2({}, t4);
      return delete e3.ref, n2(e3, t4.ref || null);
    }
    return t3.$$typeof = R, t3.render = t3, t3.prototype.isReactComponent = t3.__f = true, t3.displayName = "ForwardRef(" + (n2.displayName || n2.name) + ")", t3;
  }
  function T3(n2, t3, e3) {
    return n2 && (n2.__c && n2.__c.__H && (n2.__c.__H.__.forEach(function(n3) {
      "function" == typeof n3.__c && n3.__c();
    }), n2.__c.__H = null), null != (n2 = S2({}, n2)).__c && (n2.__c.__P === e3 && (n2.__c.__P = t3), n2.__c = null), n2.__k = n2.__k && n2.__k.map(function(n3) {
      return T3(n3, t3, e3);
    })), n2;
  }
  function F3(n2, t3, e3) {
    return n2 && e3 && (n2.__v = null, n2.__k = n2.__k && n2.__k.map(function(n3) {
      return F3(n3, t3, e3);
    }), n2.__c && n2.__c.__P === t3 && (n2.__e && e3.appendChild(n2.__e), n2.__c.__e = true, n2.__c.__P = e3)), n2;
  }
  function I2() {
    this.__u = 0, this.t = null, this.__b = null;
  }
  function L2(n2) {
    var t3 = n2.__.__c;
    return t3 && t3.__a && t3.__a(n2);
  }
  function D3() {
    this.u = null, this.o = null;
  }
  function W(n2) {
    return this.getChildContext = function() {
      return n2.context;
    }, n2.children;
  }
  function P3(n2) {
    var e3 = this, r3 = n2.i;
    e3.componentWillUnmount = function() {
      D(null, e3.l), e3.l = null, e3.i = null;
    }, e3.i && e3.i !== r3 && e3.componentWillUnmount(), e3.l || (e3.i = r3, e3.l = { nodeType: 1, parentNode: r3, childNodes: [], appendChild: function(n3) {
      this.childNodes.push(n3), e3.i.appendChild(n3);
    }, insertBefore: function(n3, t3) {
      this.childNodes.push(n3), e3.i.appendChild(n3);
    }, removeChild: function(n3) {
      this.childNodes.splice(this.childNodes.indexOf(n3) >>> 1, 1), e3.i.removeChild(n3);
    } }), D(g(W, { context: e3.context }, n2.__v), e3.l);
  }
  function j3(n2, e3) {
    var r3 = g(P3, { __v: n2, i: e3 });
    return r3.containerInfo = e3, r3;
  }
  function K() {
  }
  function Q() {
    return this.cancelBubble;
  }
  function X() {
    return this.defaultPrevented;
  }
  var x3, R, M2, O2, V2, z3, B3, H2, Z, Y, $2, J2, nn, tn, en, rn, un;
  var init_compat_module = __esm({
    "node_modules/preact/compat/dist/compat.module.js"() {
      init_preact_module();
      init_preact_module();
      init_hooks_module();
      init_hooks_module();
      (E2.prototype = new k()).isPureReactComponent = true, E2.prototype.shouldComponentUpdate = function(n2, t3) {
        return C3(this.props, n2) || C3(this.state, t3);
      };
      x3 = l.__b;
      l.__b = function(n2) {
        n2.type && n2.type.__f && n2.ref && (n2.props.ref = n2.ref, n2.ref = null), x3 && x3(n2);
      };
      R = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;
      M2 = l.__e;
      l.__e = function(n2, t3, e3, r3) {
        if (n2.then) {
          for (var u3, o3 = t3; o3 = o3.__; )
            if ((u3 = o3.__c) && u3.__c)
              return null == t3.__e && (t3.__e = e3.__e, t3.__k = e3.__k), u3.__c(n2, t3);
        }
        M2(n2, t3, e3, r3);
      };
      O2 = l.unmount;
      l.unmount = function(n2) {
        var t3 = n2.__c;
        t3 && t3.__R && t3.__R(), t3 && 32 & n2.__u && (n2.type = null), O2 && O2(n2);
      }, (I2.prototype = new k()).__c = function(n2, t3) {
        var e3 = t3.__c, r3 = this;
        null == r3.t && (r3.t = []), r3.t.push(e3);
        var u3 = L2(r3.__v), o3 = false, i3 = function() {
          o3 || (o3 = true, e3.__R = null, u3 ? u3(l3) : l3());
        };
        e3.__R = i3;
        var l3 = function() {
          if (!--r3.__u) {
            if (r3.state.__a) {
              var n3 = r3.state.__a;
              r3.__v.__k[0] = F3(n3, n3.__c.__P, n3.__c.__O);
            }
            var t4;
            for (r3.setState({ __a: r3.__b = null }); t4 = r3.t.pop(); )
              t4.forceUpdate();
          }
        };
        r3.__u++ || 32 & t3.__u || r3.setState({ __a: r3.__b = r3.__v.__k[0] }), n2.then(i3, i3);
      }, I2.prototype.componentWillUnmount = function() {
        this.t = [];
      }, I2.prototype.render = function(n2, e3) {
        if (this.__b) {
          if (this.__v.__k) {
            var r3 = document.createElement("div"), o3 = this.__v.__k[0].__c;
            this.__v.__k[0] = T3(this.__b, r3, o3.__O = o3.__P);
          }
          this.__b = null;
        }
        var i3 = e3.__a && g(w, null, n2.fallback);
        return i3 && (i3.__u &= -33), [g(w, null, e3.__a ? null : n2.children), i3];
      };
      V2 = function(n2, t3, e3) {
        if (++e3[1] === e3[0] && n2.o.delete(t3), n2.props.revealOrder && ("t" !== n2.props.revealOrder[0] || !n2.o.size))
          for (e3 = n2.u; e3; ) {
            for (; e3.length > 3; )
              e3.pop()();
            if (e3[1] < e3[0])
              break;
            n2.u = e3 = e3[2];
          }
      };
      (D3.prototype = new k()).__a = function(n2) {
        var t3 = this, e3 = L2(t3.__v), r3 = t3.o.get(n2);
        return r3[0]++, function(u3) {
          var o3 = function() {
            t3.props.revealOrder ? (r3.push(u3), V2(t3, n2, r3)) : u3();
          };
          e3 ? e3(o3) : o3();
        };
      }, D3.prototype.render = function(n2) {
        this.u = null, this.o = /* @__PURE__ */ new Map();
        var t3 = T(n2.children);
        n2.revealOrder && "b" === n2.revealOrder[0] && t3.reverse();
        for (var e3 = t3.length; e3--; )
          this.o.set(t3[e3], this.u = [1, 0, this.u]);
        return n2.children;
      }, D3.prototype.componentDidUpdate = D3.prototype.componentDidMount = function() {
        var n2 = this;
        this.o.forEach(function(t3, e3) {
          V2(n2, e3, t3);
        });
      };
      z3 = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;
      B3 = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
      H2 = /^on(Ani|Tra|Tou|BeforeInp|Compo)/;
      Z = /[A-Z0-9]/g;
      Y = "undefined" != typeof document;
      $2 = function(n2) {
        return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/ : /fil|che|ra/).test(n2);
      };
      k.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t3) {
        Object.defineProperty(k.prototype, t3, { configurable: true, get: function() {
          return this["UNSAFE_" + t3];
        }, set: function(n2) {
          Object.defineProperty(this, t3, { configurable: true, writable: true, value: n2 });
        } });
      });
      J2 = l.event;
      l.event = function(n2) {
        return J2 && (n2 = J2(n2)), n2.persist = K, n2.isPropagationStopped = Q, n2.isDefaultPrevented = X, n2.nativeEvent = n2;
      };
      tn = { enumerable: false, configurable: true, get: function() {
        return this.class;
      } };
      en = l.vnode;
      l.vnode = function(n2) {
        "string" == typeof n2.type && function(n3) {
          var t3 = n3.props, e3 = n3.type, u3 = {};
          for (var o3 in t3) {
            var i3 = t3[o3];
            if (!("value" === o3 && "defaultValue" in t3 && null == i3 || Y && "children" === o3 && "noscript" === e3 || "class" === o3 || "className" === o3)) {
              var l3 = o3.toLowerCase();
              "defaultValue" === o3 && "value" in t3 && null == t3.value ? o3 = "value" : "download" === o3 && true === i3 ? i3 = "" : "translate" === l3 && "no" === i3 ? i3 = false : "ondoubleclick" === l3 ? o3 = "ondblclick" : "onchange" !== l3 || "input" !== e3 && "textarea" !== e3 || $2(t3.type) ? "onfocus" === l3 ? o3 = "onfocusin" : "onblur" === l3 ? o3 = "onfocusout" : H2.test(o3) ? o3 = l3 : -1 === e3.indexOf("-") && B3.test(o3) ? o3 = o3.replace(Z, "-$&").toLowerCase() : null === i3 && (i3 = void 0) : l3 = o3 = "oninput", "oninput" === l3 && u3[o3 = l3] && (o3 = "oninputCapture"), u3[o3] = i3;
            }
          }
          "select" == e3 && u3.multiple && Array.isArray(u3.value) && (u3.value = T(t3.children).forEach(function(n4) {
            n4.props.selected = -1 != u3.value.indexOf(n4.props.value);
          })), "select" == e3 && null != u3.defaultValue && (u3.value = T(t3.children).forEach(function(n4) {
            n4.props.selected = u3.multiple ? -1 != u3.defaultValue.indexOf(n4.props.value) : u3.defaultValue == n4.props.value;
          })), t3.class && !t3.className ? (u3.class = t3.class, Object.defineProperty(u3, "className", tn)) : (t3.className && !t3.class || t3.class && t3.className) && (u3.class = u3.className = t3.className), n3.props = u3;
        }(n2), n2.$$typeof = z3, en && en(n2);
      };
      rn = l.__r;
      l.__r = function(n2) {
        rn && rn(n2), nn = n2.__c;
      };
      un = l.diffed;
      l.diffed = function(n2) {
        un && un(n2);
        var t3 = n2.props, e3 = n2.__e;
        null != e3 && "textarea" === n2.type && "value" in t3 && t3.value !== e3.value && (e3.value = null == t3.value ? "" : t3.value), nn = null;
      };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/utilities/create-component.js
  function createComponent(fn) {
    return N2(fn);
  }
  var init_create_component = __esm({
    "node_modules/@create-figma-plugin/ui/lib/utilities/create-component.js"() {
      init_compat_module();
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/utilities/no-op.js
  function noop() {
  }
  var init_no_op = __esm({
    "node_modules/@create-figma-plugin/ui/lib/utilities/no-op.js"() {
    }
  });

  // ../../../../../../../private/var/folders/fk/rr41696x339229f5gspy9m900000gp/T/0aacee7a-f458-45fd-b885-01e9d69acdd0/loading-indicator.module.js
  var loading_indicator_module_default;
  var init_loading_indicator_module = __esm({
    "../../../../../../../private/var/folders/fk/rr41696x339229f5gspy9m900000gp/T/0aacee7a-f458-45fd-b885-01e9d69acdd0/loading-indicator.module.js"() {
      if (document.getElementById("29e1a4194f") === null) {
        const element = document.createElement("style");
        element.id = "29e1a4194f";
        element.textContent = `._loadingIndicator_pl5c3_1 {
  position: relative;
  width: 16px;
  height: 16px;
  margin: 0 auto;
}

._svg_pl5c3_8 {
  position: absolute;
  top: 0;
  left: 0;
  width: 16px;
  height: 16px;
  animation: _rotating_pl5c3_1 0.5s linear infinite;
  fill: currentColor;
}

@keyframes _rotating_pl5c3_1 {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy9sb2FkaW5nLWluZGljYXRvci9sb2FkaW5nLWluZGljYXRvci5tb2R1bGUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0VBQ1osaURBQXdDO0VBQ3hDLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFO0lBQ0UsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRiIsImZpbGUiOiJub2RlX21vZHVsZXMvQGNyZWF0ZS1maWdtYS1wbHVnaW4vdWkvbGliL2NvbXBvbmVudHMvbG9hZGluZy1pbmRpY2F0b3IvbG9hZGluZy1pbmRpY2F0b3IubW9kdWxlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2FkaW5nSW5kaWNhdG9yIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLnN2ZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBhbmltYXRpb246IHJvdGF0aW5nIDAuNXMgbGluZWFyIGluZmluaXRlO1xuICBmaWxsOiBjdXJyZW50Q29sb3I7XG59XG5cbkBrZXlmcmFtZXMgcm90YXRpbmcge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuIl19 */`;
        document.head.append(element);
      }
      loading_indicator_module_default = { "loadingIndicator": "_loadingIndicator_pl5c3_1", "svg": "_svg_pl5c3_8", "rotating": "_rotating_pl5c3_1" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/loading-indicator/loading-indicator.js
  var LoadingIndicator;
  var init_loading_indicator = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/loading-indicator/loading-indicator.js"() {
      init_preact_module();
      init_create_component();
      init_loading_indicator_module();
      LoadingIndicator = createComponent(function(_a, ref) {
        var _b = _a, { color } = _b, rest = __objRest(_b, ["color"]);
        return g(
          "div",
          __spreadProps(__spreadValues({}, rest), { ref, class: loading_indicator_module_default.loadingIndicator }),
          g(
            "svg",
            { class: loading_indicator_module_default.svg, style: typeof color === "undefined" ? void 0 : {
              fill: `var(--figma-color-icon-${color})`
            } },
            g("path", { d: "M8 15C11.866 15 15 11.866 15 8C15 6.7865 14.6912 5.64511 14.1479 4.65013L15.0263 4.17174C15.6471 5.30882 16 6.6132 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 5.54138 1.10909 3.34181 2.85426 1.8743L3.47761 2.65678C1.96204 3.94081 1 5.85806 1 8C1 11.866 4.13401 15 8 15Z" })
          )
        );
      });
    }
  });

  // ../../../../../../../private/var/folders/fk/rr41696x339229f5gspy9m900000gp/T/d22755f2-ad5d-4dd9-85ce-c521d8886f2a/button.module.js
  var button_module_default;
  var init_button_module = __esm({
    "../../../../../../../private/var/folders/fk/rr41696x339229f5gspy9m900000gp/T/d22755f2-ad5d-4dd9-85ce-c521d8886f2a/button.module.js"() {
      if (document.getElementById("45ed3aa8c1") === null) {
        const element = document.createElement("style");
        element.id = "45ed3aa8c1";
        element.textContent = `._button_5fxgc_1 {
  position: relative;
  z-index: var(--z-index-1);
  display: inline-block;
}

._fullWidth_5fxgc_7 {
  display: block;
}

._button_5fxgc_1 button {
  display: inline-block;
  height: 32px;
  border-radius: var(--border-radius-6);
}

._disabled_5fxgc_17 button {
  cursor: not-allowed;
}

._fullWidth_5fxgc_7 button {
  display: block;
  overflow: hidden;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
}

._default_5fxgc_29 button {
  padding: 0 14px;
  border: 2px solid transparent;
  background-color: var(--figma-color-bg-brand);
  color: var(--figma-color-text-onbrand);
  line-height: 28px;
}
._default_5fxgc_29:not(._disabled_5fxgc_17) button:focus {
  border-color: var(--figma-color-border-brand-strong);
}
._default_5fxgc_29._disabled_5fxgc_17 button {
  background-color: var(--figma-color-bg-disabled);
  color: var(--figma-color-text-ondisabled);
}

._default_5fxgc_29._danger_5fxgc_44 button {
  background-color: var(--figma-color-bg-danger);
  color: var(--figma-color-text-ondanger);
}
._default_5fxgc_29._danger_5fxgc_44:not(._disabled_5fxgc_17) button:focus {
  border-color: var(--figma-color-border-danger-strong);
}
._default_5fxgc_29._danger_5fxgc_44._disabled_5fxgc_17 button {
  background-color: var(--figma-color-bg-disabled);
  color: var(--figma-color-text-ondisabled);
}

._secondary_5fxgc_56 button {
  padding: 0 15px;
  border: 1px solid var(--figma-color-border-strong);
  background-color: transparent;
  color: var(--figma-color-text);
  line-height: 30px;
}
._secondary_5fxgc_56:not(._disabled_5fxgc_17) button:focus {
  padding: 0 14px;
  border-width: 2px;
  border-color: var(--figma-color-border-brand-strong);
  line-height: 28px;
}
._secondary_5fxgc_56._disabled_5fxgc_17 button {
  border-color: var(--figma-color-border-disabled-strong);
  color: var(--figma-color-text-disabled);
}

._secondary_5fxgc_56._danger_5fxgc_44 button {
  border-color: var(--figma-color-border-danger-strong);
  color: var(--figma-color-text-danger);
}
._secondary_5fxgc_56._danger_5fxgc_44:not(._disabled_5fxgc_17) button:focus {
  border-color: var(--figma-color-border-danger-strong);
}
._secondary_5fxgc_56._danger_5fxgc_44._disabled_5fxgc_17 button {
  border-color: var(--figma-color-border-disabled-strong);
  color: var(--figma-color-text-disabled);
}

._loadingIndicator_5fxgc_86 {
  position: absolute;
  top: 50%;
  left: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
}

._default_5fxgc_29 ._loadingIndicator_5fxgc_86 {
  color: var(--figma-color-icon-onbrand);
}
._default_5fxgc_29._disabled_5fxgc_17 ._loadingIndicator_5fxgc_86 {
  color: var(--figma-color-icon-ondisabled);
}

._default_5fxgc_29._danger_5fxgc_44 ._loadingIndicator_5fxgc_86 {
  color: var(--figma-color-icon-ondanger);
}
._default_5fxgc_29._danger_5fxgc_44._disabled_5fxgc_17 ._loadingIndicator_5fxgc_86 {
  color: var(--figma-color-icon-ondisabled);
}

._secondary_5fxgc_56 ._loadingIndicator_5fxgc_86 {
  color: var(--figma-color-text);
}
._secondary_5fxgc_56._disabled_5fxgc_17 ._loadingIndicator_5fxgc_86 {
  color: var(--figma-color-text-disabled);
}

._secondary_5fxgc_56._danger_5fxgc_44 ._loadingIndicator_5fxgc_86 {
  color: var(--figma-color-text-danger);
}
._secondary_5fxgc_56._danger_5fxgc_44._disabled_5fxgc_17 ._loadingIndicator_5fxgc_86 {
  color: var(--figma-color-text-disabled);
}

._children_5fxgc_122 {
  display: inline;
}
._loading_5fxgc_86 ._children_5fxgc_122 {
  visibility: hidden;
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLm1vZHVsZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLDZDQUE2QztFQUM3QyxzQ0FBc0M7RUFDdEMsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxvREFBb0Q7QUFDdEQ7QUFDQTtFQUNFLGdEQUFnRDtFQUNoRCx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSw4Q0FBOEM7RUFDOUMsdUNBQXVDO0FBQ3pDO0FBQ0E7RUFDRSxxREFBcUQ7QUFDdkQ7QUFDQTtFQUNFLGdEQUFnRDtFQUNoRCx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0RBQWtEO0VBQ2xELDZCQUE2QjtFQUM3Qiw4QkFBOEI7RUFDOUIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG9EQUFvRDtFQUNwRCxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLHVEQUF1RDtFQUN2RCx1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxxREFBcUQ7RUFDckQscUNBQXFDO0FBQ3ZDO0FBQ0E7RUFDRSxxREFBcUQ7QUFDdkQ7QUFDQTtFQUNFLHVEQUF1RDtFQUN2RCx1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxvQkFBb0I7RUFDcEIsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0Usc0NBQXNDO0FBQ3hDO0FBQ0E7RUFDRSx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSx1Q0FBdUM7QUFDekM7QUFDQTtFQUNFLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0UscUNBQXFDO0FBQ3ZDO0FBQ0E7RUFDRSx1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoibm9kZV9tb2R1bGVzL0BjcmVhdGUtZmlnbWEtcGx1Z2luL3VpL2xpYi9jb21wb25lbnRzL2J1dHRvbi9idXR0b24ubW9kdWxlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IHZhcigtLXotaW5kZXgtMSk7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmZ1bGxXaWR0aCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uYnV0dG9uIGJ1dHRvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAzMnB4O1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzLTYpO1xufVxuXG4uZGlzYWJsZWQgYnV0dG9uIHtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuLmZ1bGxXaWR0aCBidXR0b24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uZGVmYXVsdCBidXR0b24ge1xuICBwYWRkaW5nOiAwIDE0cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci1iZy1icmFuZCk7XG4gIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci10ZXh0LW9uYnJhbmQpO1xuICBsaW5lLWhlaWdodDogMjhweDtcbn1cbi5kZWZhdWx0Om5vdCguZGlzYWJsZWQpIGJ1dHRvbjpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYm9yZGVyLWJyYW5kLXN0cm9uZyk7XG59XG4uZGVmYXVsdC5kaXNhYmxlZCBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci1iZy1kaXNhYmxlZCk7XG4gIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci10ZXh0LW9uZGlzYWJsZWQpO1xufVxuXG4uZGVmYXVsdC5kYW5nZXIgYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYmctZGFuZ2VyKTtcbiAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLXRleHQtb25kYW5nZXIpO1xufVxuLmRlZmF1bHQuZGFuZ2VyOm5vdCguZGlzYWJsZWQpIGJ1dHRvbjpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYm9yZGVyLWRhbmdlci1zdHJvbmcpO1xufVxuLmRlZmF1bHQuZGFuZ2VyLmRpc2FibGVkIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWJnLWRpc2FibGVkKTtcbiAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLXRleHQtb25kaXNhYmxlZCk7XG59XG5cbi5zZWNvbmRhcnkgYnV0dG9uIHtcbiAgcGFkZGluZzogMCAxNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1maWdtYS1jb2xvci1ib3JkZXItc3Ryb25nKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci10ZXh0KTtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG59XG4uc2Vjb25kYXJ5Om5vdCguZGlzYWJsZWQpIGJ1dHRvbjpmb2N1cyB7XG4gIHBhZGRpbmc6IDAgMTRweDtcbiAgYm9yZGVyLXdpZHRoOiAycHg7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYm9yZGVyLWJyYW5kLXN0cm9uZyk7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xufVxuLnNlY29uZGFyeS5kaXNhYmxlZCBidXR0b24ge1xuICBib3JkZXItY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWJvcmRlci1kaXNhYmxlZC1zdHJvbmcpO1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItdGV4dC1kaXNhYmxlZCk7XG59XG5cbi5zZWNvbmRhcnkuZGFuZ2VyIGJ1dHRvbiB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYm9yZGVyLWRhbmdlci1zdHJvbmcpO1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItdGV4dC1kYW5nZXIpO1xufVxuLnNlY29uZGFyeS5kYW5nZXI6bm90KC5kaXNhYmxlZCkgYnV0dG9uOmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci1ib3JkZXItZGFuZ2VyLXN0cm9uZyk7XG59XG4uc2Vjb25kYXJ5LmRhbmdlci5kaXNhYmxlZCBidXR0b24ge1xuICBib3JkZXItY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWJvcmRlci1kaXNhYmxlZC1zdHJvbmcpO1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItdGV4dC1kaXNhYmxlZCk7XG59XG5cbi5sb2FkaW5nSW5kaWNhdG9yIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbi5kZWZhdWx0IC5sb2FkaW5nSW5kaWNhdG9yIHtcbiAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWljb24tb25icmFuZCk7XG59XG4uZGVmYXVsdC5kaXNhYmxlZCAubG9hZGluZ0luZGljYXRvciB7XG4gIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci1pY29uLW9uZGlzYWJsZWQpO1xufVxuXG4uZGVmYXVsdC5kYW5nZXIgLmxvYWRpbmdJbmRpY2F0b3Ige1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItaWNvbi1vbmRhbmdlcik7XG59XG4uZGVmYXVsdC5kYW5nZXIuZGlzYWJsZWQgLmxvYWRpbmdJbmRpY2F0b3Ige1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItaWNvbi1vbmRpc2FibGVkKTtcbn1cblxuLnNlY29uZGFyeSAubG9hZGluZ0luZGljYXRvciB7XG4gIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci10ZXh0KTtcbn1cbi5zZWNvbmRhcnkuZGlzYWJsZWQgLmxvYWRpbmdJbmRpY2F0b3Ige1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItdGV4dC1kaXNhYmxlZCk7XG59XG5cbi5zZWNvbmRhcnkuZGFuZ2VyIC5sb2FkaW5nSW5kaWNhdG9yIHtcbiAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLXRleHQtZGFuZ2VyKTtcbn1cbi5zZWNvbmRhcnkuZGFuZ2VyLmRpc2FibGVkIC5sb2FkaW5nSW5kaWNhdG9yIHtcbiAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLXRleHQtZGlzYWJsZWQpO1xufVxuXG4uY2hpbGRyZW4ge1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG4ubG9hZGluZyAuY2hpbGRyZW4ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG4iXX0= */`;
        document.head.append(element);
      }
      button_module_default = { "button": "_button_5fxgc_1", "fullWidth": "_fullWidth_5fxgc_7", "disabled": "_disabled_5fxgc_17", "default": "_default_5fxgc_29", "danger": "_danger_5fxgc_44", "secondary": "_secondary_5fxgc_56", "loadingIndicator": "_loadingIndicator_5fxgc_86", "children": "_children_5fxgc_122", "loading": "_loading_5fxgc_86" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/button/button.js
  var Button;
  var init_button = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/button/button.js"() {
      init_preact_module();
      init_hooks_module();
      init_create_class_name();
      init_create_component();
      init_no_op();
      init_loading_indicator();
      init_button_module();
      Button = createComponent(function(_a, ref) {
        var _b = _a, { children, danger = false, disabled = false, fullWidth = false, loading = false, onClick = noop, onKeyDown = noop, propagateEscapeKeyDown = true, secondary = false } = _b, rest = __objRest(_b, ["children", "danger", "disabled", "fullWidth", "loading", "onClick", "onKeyDown", "propagateEscapeKeyDown", "secondary"]);
        const handleKeyDown = x2(function(event) {
          onKeyDown(event);
          if (event.key === "Escape") {
            if (propagateEscapeKeyDown === false) {
              event.stopPropagation();
            }
            event.currentTarget.blur();
          }
        }, [onKeyDown, propagateEscapeKeyDown]);
        return g(
          "div",
          { class: createClassName([
            button_module_default.button,
            secondary === true ? button_module_default.secondary : button_module_default.default,
            danger === true ? button_module_default.danger : null,
            fullWidth === true ? button_module_default.fullWidth : null,
            disabled === true ? button_module_default.disabled : null,
            loading === true ? button_module_default.loading : null
          ]) },
          loading === true ? g(
            "div",
            { class: button_module_default.loadingIndicator },
            g(LoadingIndicator, null)
          ) : null,
          g(
            "button",
            __spreadProps(__spreadValues({}, rest), { ref, disabled: disabled === true, onClick: loading === true ? void 0 : onClick, onKeyDown: handleKeyDown, tabIndex: 0 }),
            g("div", { class: button_module_default.children }, children)
          )
        );
      });
    }
  });

  // ../../../../../../../private/var/folders/fk/rr41696x339229f5gspy9m900000gp/T/d5a51c62-d77c-4ee8-b485-b54b93630117/icon.module.js
  var icon_module_default;
  var init_icon_module = __esm({
    "../../../../../../../private/var/folders/fk/rr41696x339229f5gspy9m900000gp/T/d5a51c62-d77c-4ee8-b485-b54b93630117/icon.module.js"() {
      if (document.getElementById("0aeb394b8d") === null) {
        const element = document.createElement("style");
        element.id = "0aeb394b8d";
        element.textContent = `._icon_13804_1 {
  fill: currentColor;
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvaWNvbnMvaWNvbi5tb2R1bGUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwiZmlsZSI6Im5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvaWNvbnMvaWNvbi5tb2R1bGUuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljb24ge1xuICBmaWxsOiBjdXJyZW50Q29sb3I7XG59XG4iXX0= */`;
        document.head.append(element);
      }
      icon_module_default = { "icon": "_icon_13804_1" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/icons/create-icon.js
  function createIcon(path, options) {
    const { width, height } = options;
    return createComponent(function(_a) {
      var _b = _a, { color } = _b, rest = __objRest(_b, ["color"]);
      return g(
        "svg",
        __spreadProps(__spreadValues({}, rest), { class: icon_module_default.icon, height, style: {
          fill: typeof color === "undefined" ? "currentColor" : `var(--figma-color-icon-${color})`
        }, width, xmlns: "http://www.w3.org/2000/svg" }),
        g("path", { "clip-rule": "evenodd", d: path, "fill-rule": "evenodd" })
      );
    });
  }
  var init_create_icon = __esm({
    "node_modules/@create-figma-plugin/ui/lib/icons/create-icon.js"() {
      init_preact_module();
      init_create_component();
      init_icon_module();
    }
  });

  // ../../../../../../../private/var/folders/fk/rr41696x339229f5gspy9m900000gp/T/a7ea4a16-c424-4589-b5cd-e403501175fb/menu.module.js
  var menu_module_default;
  var init_menu_module = __esm({
    "../../../../../../../private/var/folders/fk/rr41696x339229f5gspy9m900000gp/T/a7ea4a16-c424-4589-b5cd-e403501175fb/menu.module.js"() {
      if (document.getElementById("98877293f7") === null) {
        const element = document.createElement("style");
        element.id = "98877293f7";
        element.textContent = `._menu_c5se2_1 {
  position: absolute;
  z-index: var(--z-index-2);
  left: 0;
  min-width: 100%;
  padding: var(--space-extra-small) 0;
  border-radius: var(--border-radius-2);
  background-color: #1e1e1e; /* FIXME */
  box-shadow: var(--box-shadow-menu);
  color: rgba(255, 255, 255, 1); /* FIXME */
  font-size: var(--font-size-12);
  overflow-y: auto;
}
._menu_c5se2_1::-webkit-scrollbar {
  display: none;
}
._menu_c5se2_1:empty {
  display: none;
}

._hidden_c5se2_21 {
  position: fixed;
  pointer-events: none;
  visibility: hidden;
}

@media screen and (-webkit-min-device-pixel-ratio: 1.5),
  screen and (min-resolution: 1.5dppx) {
  ._menu_c5se2_1 {
    -webkit-font-smoothing: antialiased;
  }
}

._optionHeader_c5se2_34,
._optionValue_c5se2_35 {
  overflow: hidden;
  padding: 4px var(--space-medium) 4px 32px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

._optionHeader_c5se2_34 {
  color: rgba(255, 255, 255, 0.7); /* FIXME */
  font-size: var(--font-size-12);
}

._optionValue_c5se2_35 {
  position: relative;
}
._optionValueSelected_c5se2_50 {
  background-color: var(--figma-color-bg-brand);
}
._optionValueDisabled_c5se2_53 {
  color: rgba(255, 255, 255, 0.4); /* FIXME */
}

._optionSeparator_c5se2_57 {
  width: 100%;
  height: 1px;
  margin: var(--space-extra-small) 0;
  background-color: #444444; /* FIXME */
}

._input_c5se2_64 {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
}

._checkIcon_c5se2_75 {
  position: absolute;
  top: 5px;
  left: var(--space-extra-small);
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY3NzL21lbnUubW9kdWxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsT0FBTztFQUNQLGVBQWU7RUFDZixtQ0FBbUM7RUFDbkMscUNBQXFDO0VBQ3JDLHlCQUF5QixFQUFFLFVBQVU7RUFDckMsa0NBQWtDO0VBQ2xDLDZCQUE2QixFQUFFLFVBQVU7RUFDekMsOEJBQThCO0VBQzlCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRTtJQUNFLG1DQUFtQztFQUNyQztBQUNGOztBQUVBOztFQUVFLGdCQUFnQjtFQUNoQix5Q0FBeUM7RUFDekMsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLCtCQUErQixFQUFFLFVBQVU7RUFDM0MsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSw2Q0FBNkM7QUFDL0M7QUFDQTtFQUNFLCtCQUErQixFQUFFLFVBQVU7QUFDN0M7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGtDQUFrQztFQUNsQyx5QkFBeUIsRUFBRSxVQUFVO0FBQ3ZDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixRQUFRO0VBQ1IsU0FBUztFQUNULE9BQU87RUFDUCxjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsOEJBQThCO0FBQ2hDIiwiZmlsZSI6Im5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY3NzL21lbnUubW9kdWxlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW51IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiB2YXIoLS16LWluZGV4LTIpO1xuICBsZWZ0OiAwO1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IHZhcigtLXNwYWNlLWV4dHJhLXNtYWxsKSAwO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzLTIpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWUxZTFlOyAvKiBGSVhNRSAqL1xuICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93LW1lbnUpO1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTsgLyogRklYTUUgKi9cbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtMTIpO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuLm1lbnU6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5tZW51OmVtcHR5IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmhpZGRlbiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMS41KSxcbiAgc2NyZWVuIGFuZCAobWluLXJlc29sdXRpb246IDEuNWRwcHgpIHtcbiAgLm1lbnUge1xuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICB9XG59XG5cbi5vcHRpb25IZWFkZXIsXG4ub3B0aW9uVmFsdWUge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiA0cHggdmFyKC0tc3BhY2UtbWVkaXVtKSA0cHggMzJweDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5vcHRpb25IZWFkZXIge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpOyAvKiBGSVhNRSAqL1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS0xMik7XG59XG5cbi5vcHRpb25WYWx1ZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5vcHRpb25WYWx1ZVNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYmctYnJhbmQpO1xufVxuLm9wdGlvblZhbHVlRGlzYWJsZWQge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpOyAvKiBGSVhNRSAqL1xufVxuXG4ub3B0aW9uU2VwYXJhdG9yIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMXB4O1xuICBtYXJnaW46IHZhcigtLXNwYWNlLWV4dHJhLXNtYWxsKSAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0NDQ0OyAvKiBGSVhNRSAqL1xufVxuXG4uaW5wdXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jaGVja0ljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNXB4O1xuICBsZWZ0OiB2YXIoLS1zcGFjZS1leHRyYS1zbWFsbCk7XG59XG4iXX0= */`;
        document.head.append(element);
      }
      menu_module_default = { "menu": "_menu_c5se2_1", "hidden": "_hidden_c5se2_21", "optionHeader": "_optionHeader_c5se2_34", "optionValue": "_optionValue_c5se2_35", "optionValueSelected": "_optionValueSelected_c5se2_50", "optionValueDisabled": "_optionValueDisabled_c5se2_53", "optionSeparator": "_optionSeparator_c5se2_57", "input": "_input_c5se2_64", "checkIcon": "_checkIcon_c5se2_75" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/utilities/get-current-from-ref.js
  function getCurrentFromRef(ref) {
    if (ref.current === null) {
      throw new Error("`ref.current` is `undefined`");
    }
    return ref.current;
  }
  var init_get_current_from_ref = __esm({
    "node_modules/@create-figma-plugin/ui/lib/utilities/get-current-from-ref.js"() {
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/hooks/use-mouse-down-outside.js
  function useMouseDownOutside(options) {
    const { ref, onMouseDownOutside } = options;
    _2(function() {
      function handleBlur() {
        onMouseDownOutside();
      }
      function handleMouseDown(event) {
        const element = getCurrentFromRef(ref);
        if (element === event.target || element.contains(event.target)) {
          return;
        }
        onMouseDownOutside();
      }
      window.addEventListener("blur", handleBlur);
      window.addEventListener("mousedown", handleMouseDown);
      return function() {
        window.removeEventListener("blur", handleBlur);
        window.removeEventListener("mousedown", handleMouseDown);
      };
    }, [ref, onMouseDownOutside]);
  }
  var init_use_mouse_down_outside = __esm({
    "node_modules/@create-figma-plugin/ui/lib/hooks/use-mouse-down-outside.js"() {
      init_hooks_module();
      init_get_current_from_ref();
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/hooks/use-scrollable-menu.js
  function useScrollableMenu(options) {
    const { itemIdDataAttributeName, menuElementRef, selectedId, setSelectedId } = options;
    const getItemElements = x2(function() {
      return Array.from(getCurrentFromRef(menuElementRef).querySelectorAll(`[${itemIdDataAttributeName}]`)).filter(function(element) {
        return element.hasAttribute("disabled") === false;
      });
    }, [itemIdDataAttributeName, menuElementRef]);
    const findIndexByItemId = x2(function(id) {
      if (id === null) {
        return -1;
      }
      const index = getItemElements().findIndex(function(element) {
        return element.getAttribute(itemIdDataAttributeName) === id;
      });
      if (index === -1) {
        throw new Error("`index` is `-1`");
      }
      return index;
    }, [getItemElements, itemIdDataAttributeName]);
    const updateScrollPosition = x2(function(id) {
      const itemElements = getItemElements();
      const index = findIndexByItemId(id);
      const selectedElement = itemElements[index];
      const selectedElementOffsetTop = selectedElement.getBoundingClientRect().top;
      const menuElement = getCurrentFromRef(menuElementRef);
      const menuElementOffsetTop = menuElement.getBoundingClientRect().top;
      if (selectedElementOffsetTop < menuElementOffsetTop) {
        selectedElement.scrollIntoView();
        return;
      }
      const offsetBottom = selectedElementOffsetTop + selectedElement.offsetHeight;
      if (offsetBottom > menuElementOffsetTop + menuElement.offsetHeight) {
        selectedElement.scrollIntoView();
      }
    }, [findIndexByItemId, getItemElements, menuElementRef]);
    const handleScrollableMenuKeyDown = x2(function(event) {
      const key = event.key;
      if (key === "ArrowDown" || key === "ArrowUp") {
        const itemElements = getItemElements();
        const index = findIndexByItemId(selectedId);
        let newIndex;
        if (key === "ArrowDown") {
          newIndex = index === -1 || index === itemElements.length - 1 ? 0 : index + 1;
        } else {
          newIndex = index === -1 || index === 0 ? itemElements.length - 1 : index - 1;
        }
        const selectedElement = itemElements[newIndex];
        const newSelectedId = selectedElement.getAttribute(itemIdDataAttributeName);
        setSelectedId(newSelectedId);
        updateScrollPosition(newSelectedId);
      }
    }, [
      getItemElements,
      findIndexByItemId,
      itemIdDataAttributeName,
      setSelectedId,
      selectedId,
      updateScrollPosition
    ]);
    const handleScrollableMenuItemMouseMove = x2(function(event) {
      const id = event.currentTarget.getAttribute(itemIdDataAttributeName);
      if (id !== selectedId) {
        setSelectedId(id);
      }
    }, [itemIdDataAttributeName, selectedId, setSelectedId]);
    return {
      handleScrollableMenuItemMouseMove,
      handleScrollableMenuKeyDown
    };
  }
  var init_use_scrollable_menu = __esm({
    "node_modules/@create-figma-plugin/ui/lib/hooks/use-scrollable-menu.js"() {
      init_hooks_module();
      init_get_current_from_ref();
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/icons/icon-8/icon-control-chevron-down-8.js
  var IconControlChevronDown8;
  var init_icon_control_chevron_down_8 = __esm({
    "node_modules/@create-figma-plugin/ui/lib/icons/icon-8/icon-control-chevron-down-8.js"() {
      init_create_icon();
      IconControlChevronDown8 = createIcon("m3.64641 6.35352-3-3 .70711-.70711 2.64644 2.64645 2.64645-2.64645.70711.70711-3 3-.35356.35355z", { height: 8, width: 8 });
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/icons/icon-16/icon-menu-checkmark-checked-16.js
  var IconMenuCheckmarkChecked16;
  var init_icon_menu_checkmark_checked_16 = __esm({
    "node_modules/@create-figma-plugin/ui/lib/icons/icon-16/icon-menu-checkmark-checked-16.js"() {
      init_create_icon();
      IconMenuCheckmarkChecked16 = createIcon("M13.2069 5.20724 7.70688 10.7072l-.70711.7072-.70711-.7072-3-2.99996 1.41422-1.41421 2.29289 2.29289 4.79293-4.79289z", { height: 16, width: 16 });
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/utilities/private/constants.js
  var INVALID_ID, VIEWPORT_MARGIN, ITEM_ID_DATA_ATTRIBUTE_NAME;
  var init_constants = __esm({
    "node_modules/@create-figma-plugin/ui/lib/utilities/private/constants.js"() {
      INVALID_ID = null;
      VIEWPORT_MARGIN = 12;
      ITEM_ID_DATA_ATTRIBUTE_NAME = "data-item-id";
    }
  });

  // ../../../../../../../private/var/folders/fk/rr41696x339229f5gspy9m900000gp/T/d3c4ff18-ff63-40a6-b373-ccf3d581fceb/dropdown.module.js
  var dropdown_module_default;
  var init_dropdown_module = __esm({
    "../../../../../../../private/var/folders/fk/rr41696x339229f5gspy9m900000gp/T/d3c4ff18-ff63-40a6-b373-ccf3d581fceb/dropdown.module.js"() {
      if (document.getElementById("11c0557bc7") === null) {
        const element = document.createElement("style");
        element.id = "11c0557bc7";
        element.textContent = `._dropdown_l9ibg_1 {
  position: relative;
  z-index: var(--z-index-1);
  display: flex;
  width: 100%;
  min-width: 0; /* See https://css-tricks.com/flexbox-truncated-text/ */
  height: 28px;
  align-items: center;
  padding-left: var(--space-extra-small);
  color: var(--figma-color-text);
}
._dropdown_l9ibg_1:not(._disabled_l9ibg_12):focus-within {
  z-index: var(--z-index-2); /* stack \`.dropdown\` over its sibling elements */
  outline: 0;
}

._menu_l9ibg_17 {
  position: fixed;
}

._disabled_l9ibg_12 {
  cursor: not-allowed;
}

._icon_l9ibg_25 {
  position: absolute;
  top: 14px;
  left: 16px;
  color: var(--figma-color-icon-secondary);
  text-align: center;
  transform: translate(-50%, -50%);
}
._disabled_l9ibg_12 ._icon_l9ibg_25 {
  color: var(--figma-color-icon-disabled);
}

._empty_l9ibg_37 {
  flex-grow: 1;
}

._value_l9ibg_41 {
  overflow: hidden;
  margin-right: 6px;
  text-overflow: ellipsis;
  white-space: nowrap;
}
._dropdown_l9ibg_1:not(._disabled_l9ibg_12):hover ._value_l9ibg_41,
._dropdown_l9ibg_1:not(._disabled_l9ibg_12):focus ._value_l9ibg_41,
._dropdown_l9ibg_1:not(._disabled_l9ibg_12):focus-within ._value_l9ibg_41 {
  flex-grow: 1;
}
._disabled_l9ibg_12 ._value_l9ibg_41 {
  color: var(--figma-color-text-disabled);
}
._hasIcon_l9ibg_55 ._value_l9ibg_41 {
  padding-left: var(--space-extra-large);
}

._placeholder_l9ibg_59 {
  color: var(--figma-color-text-tertiary);
}

._chevronIcon_l9ibg_63 {
  margin-right: var(--space-extra-small);
  color: var(--figma-color-icon-secondary);
}
._dropdown_l9ibg_1:not(._disabled_l9ibg_12):hover ._chevronIcon_l9ibg_63 {
  color: var(--figma-color-icon);
}
._disabled_l9ibg_12 ._chevronIcon_l9ibg_63 {
  color: var(--figma-color-icon-disabled);
}

._border_l9ibg_74 {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: var(--border-radius-2);
}
._hasBorder_l9ibg_83 ._border_l9ibg_74,
._dropdown_l9ibg_1:not(._disabled_l9ibg_12):not(:focus):hover ._border_l9ibg_74 {
  border-color: var(--figma-color-border);
}
._dropdown_l9ibg_1:focus ._border_l9ibg_74 {
  top: -1px;
  bottom: -1px;
  border-width: 2px;
  border-color: var(--figma-color-border-brand-strong);
}

._underline_l9ibg_94 {
  position: absolute;
  right: var(--space-extra-small);
  bottom: 0;
  left: var(--space-extra-small);
  height: 1px;
  background-color: var(--figma-color-border);
}
._dropdown_l9ibg_1:not(._disabled_l9ibg_12):hover ._underline_l9ibg_94,
._dropdown_l9ibg_1:not(._disabled_l9ibg_12):focus ._underline_l9ibg_94 {
  background-color: transparent;
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy9kcm9wZG93bi9kcm9wZG93bi5tb2R1bGUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsV0FBVztFQUNYLFlBQVksRUFBRSx1REFBdUQ7RUFDckUsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixzQ0FBc0M7RUFDdEMsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSx5QkFBeUIsRUFBRSxnREFBZ0Q7RUFDM0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLHdDQUF3QztFQUN4QyxrQkFBa0I7RUFDbEIsZ0NBQWdDO0FBQ2xDO0FBQ0E7RUFDRSx1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7QUFDQTs7O0VBR0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSx1Q0FBdUM7QUFDekM7QUFDQTtFQUNFLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLHNDQUFzQztFQUN0Qyx3Q0FBd0M7QUFDMUM7QUFDQTtFQUNFLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixRQUFRO0VBQ1IsU0FBUztFQUNULE9BQU87RUFDUCw2QkFBNkI7RUFDN0IscUNBQXFDO0FBQ3ZDO0FBQ0E7O0VBRUUsdUNBQXVDO0FBQ3pDO0FBQ0E7RUFDRSxTQUFTO0VBQ1QsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixvREFBb0Q7QUFDdEQ7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsK0JBQStCO0VBQy9CLFNBQVM7RUFDVCw4QkFBOEI7RUFDOUIsV0FBVztFQUNYLDJDQUEyQztBQUM3QztBQUNBOztFQUVFLDZCQUE2QjtBQUMvQiIsImZpbGUiOiJub2RlX21vZHVsZXMvQGNyZWF0ZS1maWdtYS1wbHVnaW4vdWkvbGliL2NvbXBvbmVudHMvZHJvcGRvd24vZHJvcGRvd24ubW9kdWxlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kcm9wZG93biB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogdmFyKC0tei1pbmRleC0xKTtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi13aWR0aDogMDsgLyogU2VlIGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vZmxleGJveC10cnVuY2F0ZWQtdGV4dC8gKi9cbiAgaGVpZ2h0OiAyOHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IHZhcigtLXNwYWNlLWV4dHJhLXNtYWxsKTtcbiAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLXRleHQpO1xufVxuLmRyb3Bkb3duOm5vdCguZGlzYWJsZWQpOmZvY3VzLXdpdGhpbiB7XG4gIHotaW5kZXg6IHZhcigtLXotaW5kZXgtMik7IC8qIHN0YWNrIGAuZHJvcGRvd25gIG92ZXIgaXRzIHNpYmxpbmcgZWxlbWVudHMgKi9cbiAgb3V0bGluZTogMDtcbn1cblxuLm1lbnUge1xuICBwb3NpdGlvbjogZml4ZWQ7XG59XG5cbi5kaXNhYmxlZCB7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi5pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE0cHg7XG4gIGxlZnQ6IDE2cHg7XG4gIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci1pY29uLXNlY29uZGFyeSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG4uZGlzYWJsZWQgLmljb24ge1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItaWNvbi1kaXNhYmxlZCk7XG59XG5cbi5lbXB0eSB7XG4gIGZsZXgtZ3JvdzogMTtcbn1cblxuLnZhbHVlIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luLXJpZ2h0OiA2cHg7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLmRyb3Bkb3duOm5vdCguZGlzYWJsZWQpOmhvdmVyIC52YWx1ZSxcbi5kcm9wZG93bjpub3QoLmRpc2FibGVkKTpmb2N1cyAudmFsdWUsXG4uZHJvcGRvd246bm90KC5kaXNhYmxlZCk6Zm9jdXMtd2l0aGluIC52YWx1ZSB7XG4gIGZsZXgtZ3JvdzogMTtcbn1cbi5kaXNhYmxlZCAudmFsdWUge1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItdGV4dC1kaXNhYmxlZCk7XG59XG4uaGFzSWNvbiAudmFsdWUge1xuICBwYWRkaW5nLWxlZnQ6IHZhcigtLXNwYWNlLWV4dHJhLWxhcmdlKTtcbn1cblxuLnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLXRleHQtdGVydGlhcnkpO1xufVxuXG4uY2hldnJvbkljb24ge1xuICBtYXJnaW4tcmlnaHQ6IHZhcigtLXNwYWNlLWV4dHJhLXNtYWxsKTtcbiAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWljb24tc2Vjb25kYXJ5KTtcbn1cbi5kcm9wZG93bjpub3QoLmRpc2FibGVkKTpob3ZlciAuY2hldnJvbkljb24ge1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItaWNvbik7XG59XG4uZGlzYWJsZWQgLmNoZXZyb25JY29uIHtcbiAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWljb24tZGlzYWJsZWQpO1xufVxuXG4uYm9yZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzLTIpO1xufVxuLmhhc0JvcmRlciAuYm9yZGVyLFxuLmRyb3Bkb3duOm5vdCguZGlzYWJsZWQpOm5vdCg6Zm9jdXMpOmhvdmVyIC5ib3JkZXIge1xuICBib3JkZXItY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWJvcmRlcik7XG59XG4uZHJvcGRvd246Zm9jdXMgLmJvcmRlciB7XG4gIHRvcDogLTFweDtcbiAgYm90dG9tOiAtMXB4O1xuICBib3JkZXItd2lkdGg6IDJweDtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci1ib3JkZXItYnJhbmQtc3Ryb25nKTtcbn1cblxuLnVuZGVybGluZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IHZhcigtLXNwYWNlLWV4dHJhLXNtYWxsKTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiB2YXIoLS1zcGFjZS1leHRyYS1zbWFsbCk7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci1ib3JkZXIpO1xufVxuLmRyb3Bkb3duOm5vdCguZGlzYWJsZWQpOmhvdmVyIC51bmRlcmxpbmUsXG4uZHJvcGRvd246bm90KC5kaXNhYmxlZCk6Zm9jdXMgLnVuZGVybGluZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuIl19 */`;
        document.head.append(element);
      }
      dropdown_module_default = { "dropdown": "_dropdown_l9ibg_1", "disabled": "_disabled_l9ibg_12", "menu": "_menu_l9ibg_17", "icon": "_icon_l9ibg_25", "empty": "_empty_l9ibg_37", "value": "_value_l9ibg_41", "hasIcon": "_hasIcon_l9ibg_55", "placeholder": "_placeholder_l9ibg_59", "chevronIcon": "_chevronIcon_l9ibg_63", "border": "_border_l9ibg_74", "hasBorder": "_hasBorder_l9ibg_83", "underline": "_underline_l9ibg_94" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/dropdown/private/update-menu-element-layout.js
  function updateMenuElementLayout(rootElement, menuElement, selectedId) {
    const rootElementBoundingClientRect = rootElement.getBoundingClientRect();
    const rootWidth = rootElement.offsetWidth;
    const rootHeight = rootElement.offsetHeight;
    const rootLeft = rootElementBoundingClientRect.left;
    const rootTop = rootElementBoundingClientRect.top;
    menuElement.style.minWidth = `${rootWidth}px`;
    const menuElementMaxWidth = window.innerWidth - 2 * VIEWPORT_MARGIN;
    menuElement.style.maxWidth = `${menuElementMaxWidth}px`;
    const menuElementMaxHeight = window.innerHeight - 2 * VIEWPORT_MARGIN;
    menuElement.style.maxHeight = `${menuElementMaxHeight}px`;
    const menuWidth = menuElement.offsetWidth;
    const menuHeight = menuElement.offsetHeight;
    const menuScrollHeight = menuElement.scrollHeight;
    const menuPaddingTop = parseInt(window.getComputedStyle(menuElement).paddingTop, 10);
    const labelElement = getSelectedLabelElement(menuElement, selectedId);
    const left = computeLeft({
      menuWidth,
      rootLeft
    });
    menuElement.style.left = `${left}px`;
    const top = computeTop({
      menuHeight,
      rootTop,
      selectedTop: labelElement.offsetTop
    });
    menuElement.style.top = `${top}px`;
    const isScrollable = menuScrollHeight > menuHeight;
    if (isScrollable === false) {
      return;
    }
    menuElement.scrollTop = computeScrollTop({
      menuHeight,
      menuPaddingTop,
      menuScrollHeight,
      rootHeight,
      rootTop,
      selectedTop: labelElement.offsetTop
    });
  }
  function getSelectedLabelElement(menuElement, selectedId) {
    const inputElement = menuElement.querySelector(selectedId === INVALID_ID ? `[${ITEM_ID_DATA_ATTRIBUTE_NAME}]` : `[${ITEM_ID_DATA_ATTRIBUTE_NAME}='${selectedId}']`);
    if (inputElement === null) {
      throw new Error("`inputElement` is `null`");
    }
    const labelElement = inputElement.parentElement;
    if (labelElement === null) {
      throw new Error("`labelElement` is `null`");
    }
    return labelElement;
  }
  function computeLeft(options) {
    const { menuWidth, rootLeft } = options;
    if (rootLeft <= VIEWPORT_MARGIN) {
      return VIEWPORT_MARGIN;
    }
    const viewportWidth = window.innerWidth;
    if (rootLeft + menuWidth > viewportWidth - VIEWPORT_MARGIN) {
      return viewportWidth - VIEWPORT_MARGIN - menuWidth;
    }
    return rootLeft;
  }
  function computeTop(options) {
    const { menuHeight, rootTop, selectedTop } = options;
    const viewportHeight = window.innerHeight;
    if (rootTop <= VIEWPORT_MARGIN || menuHeight === viewportHeight - 2 * VIEWPORT_MARGIN) {
      return VIEWPORT_MARGIN;
    }
    const top = rootTop - selectedTop;
    const minimumTop = VIEWPORT_MARGIN;
    const maximumTop = viewportHeight - VIEWPORT_MARGIN - menuHeight;
    return restrictToRange(top, minimumTop, maximumTop);
  }
  function computeScrollTop(options) {
    const { menuHeight, menuPaddingTop, menuScrollHeight, rootHeight, rootTop, selectedTop } = options;
    const restrictedRootTop = restrictToRange(rootTop, VIEWPORT_MARGIN, window.innerHeight - VIEWPORT_MARGIN - rootHeight + menuPaddingTop / 2);
    const scrollTop = selectedTop - (restrictedRootTop - VIEWPORT_MARGIN);
    const minimumScrollTop = 0;
    const maximumScrollTop = menuScrollHeight - menuHeight;
    return restrictToRange(scrollTop, minimumScrollTop, maximumScrollTop);
  }
  function restrictToRange(number, minimum, maximum) {
    return Math.min(Math.max(number, minimum), maximum);
  }
  var init_update_menu_element_layout = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/dropdown/private/update-menu-element-layout.js"() {
      init_constants();
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/dropdown/dropdown.js
  function getDropdownOptionValue(option) {
    if (typeof option !== "string") {
      if ("text" in option) {
        return option.text;
      }
      if ("value" in option) {
        return option.value;
      }
    }
    throw new Error("Invariant violation");
  }
  function findOptionIndexByValue(options, value) {
    if (value === null) {
      return -1;
    }
    let index = 0;
    for (const option of options) {
      if (typeof option !== "string" && "value" in option && option.value === value) {
        return index;
      }
      index += 1;
    }
    return -1;
  }
  var Dropdown;
  var init_dropdown = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/dropdown/dropdown.js"() {
      init_preact_module();
      init_compat_module();
      init_hooks_module();
      init_menu_module();
      init_use_mouse_down_outside();
      init_use_scrollable_menu();
      init_icon_control_chevron_down_8();
      init_icon_menu_checkmark_checked_16();
      init_create_class_name();
      init_create_component();
      init_get_current_from_ref();
      init_no_op();
      init_constants();
      init_dropdown_module();
      init_update_menu_element_layout();
      Dropdown = createComponent(function(_a, ref) {
        var _b = _a, { disabled = false, icon, onChange = noop, onKeyDown = noop, onMouseDown = noop, onValueChange = noop, options, placeholder, propagateEscapeKeyDown = true, value, variant } = _b, rest = __objRest(_b, ["disabled", "icon", "onChange", "onKeyDown", "onMouseDown", "onValueChange", "options", "placeholder", "propagateEscapeKeyDown", "value", "variant"]);
        if (typeof icon === "string" && icon.length !== 1) {
          throw new Error(`String \`icon\` must be a single character: "${icon}"`);
        }
        const rootElementRef = F2(null);
        const menuElementRef = F2(null);
        const [isMenuVisible, setIsMenuVisible] = p2(false);
        const index = findOptionIndexByValue(options, value);
        if (value !== null && index === -1) {
          throw new Error(`Invalid \`value\`: ${value}`);
        }
        const [selectedId, setSelectedId] = p2(index === -1 ? INVALID_ID : `${index}`);
        const children = typeof options[index] === "undefined" ? "" : getDropdownOptionValue(options[index]);
        const { handleScrollableMenuKeyDown, handleScrollableMenuItemMouseMove } = useScrollableMenu({
          itemIdDataAttributeName: ITEM_ID_DATA_ATTRIBUTE_NAME,
          menuElementRef,
          selectedId,
          setSelectedId
        });
        const triggerRootBlur = x2(function() {
          getCurrentFromRef(rootElementRef).blur();
        }, []);
        const triggerRootFocus = x2(function() {
          getCurrentFromRef(rootElementRef).focus();
        }, []);
        const triggerMenuUpdateLayout = x2(function(selectedId2) {
          const rootElement = getCurrentFromRef(rootElementRef);
          const menuElement = getCurrentFromRef(menuElementRef);
          updateMenuElementLayout(rootElement, menuElement, selectedId2);
        }, []);
        const triggerMenuHide = x2(function() {
          setIsMenuVisible(false);
          setSelectedId(INVALID_ID);
        }, []);
        const triggerMenuShow = x2(function() {
          if (isMenuVisible === true) {
            return;
          }
          setIsMenuVisible(true);
          if (value === null) {
            triggerMenuUpdateLayout(selectedId);
            return;
          }
          const index2 = findOptionIndexByValue(options, value);
          if (index2 === -1) {
            throw new Error(`Invalid \`value\`: ${value}`);
          }
          const newSelectedId = `${index2}`;
          setSelectedId(newSelectedId);
          triggerMenuUpdateLayout(newSelectedId);
        }, [isMenuVisible, options, selectedId, triggerMenuUpdateLayout, value]);
        const handleRootKeyDown = x2(function(event) {
          onKeyDown(event);
          const key = event.key;
          if (key === "ArrowUp" || key === "ArrowDown") {
            event.preventDefault();
            if (isMenuVisible === false) {
              triggerMenuShow();
              return;
            }
            handleScrollableMenuKeyDown(event);
            return;
          }
          if (key === "Escape") {
            event.preventDefault();
            if (propagateEscapeKeyDown === false) {
              event.stopPropagation();
            }
            if (isMenuVisible === true) {
              triggerMenuHide();
              return;
            }
            triggerRootBlur();
            return;
          }
          if (key === "Enter") {
            event.preventDefault();
            if (isMenuVisible === false) {
              triggerMenuShow();
              return;
            }
            if (selectedId !== INVALID_ID) {
              const selectedElement = getCurrentFromRef(menuElementRef).querySelector(`[${ITEM_ID_DATA_ATTRIBUTE_NAME}='${selectedId}']`);
              if (selectedElement === null) {
                throw new Error("`selectedElement` is `null`");
              }
              selectedElement.checked = true;
              const changeEvent = new window.Event("change", {
                bubbles: true,
                cancelable: true
              });
              selectedElement.dispatchEvent(changeEvent);
            }
            triggerMenuHide();
            return;
          }
          if (key === "Tab") {
            triggerMenuHide();
            return;
          }
        }, [
          handleScrollableMenuKeyDown,
          isMenuVisible,
          onKeyDown,
          propagateEscapeKeyDown,
          selectedId,
          triggerMenuHide,
          triggerMenuShow,
          triggerRootBlur
        ]);
        const handleRootMouseDown = x2(function(event) {
          onMouseDown(event);
          if (isMenuVisible === false) {
            triggerMenuShow();
          }
        }, [isMenuVisible, onMouseDown, triggerMenuShow]);
        const handleMenuMouseDown = x2(function(event) {
          event.stopPropagation();
        }, []);
        const handleOptionChange = x2(function(event) {
          onChange(event);
          const id = event.currentTarget.getAttribute(ITEM_ID_DATA_ATTRIBUTE_NAME);
          if (id === null) {
            throw new Error("`id` is `null`");
          }
          const optionValue = options[parseInt(id, 10)];
          const newValue = optionValue.value;
          onValueChange(newValue);
          triggerRootFocus();
          triggerMenuHide();
        }, [onChange, onValueChange, options, triggerMenuHide, triggerRootFocus]);
        const handleSelectedOptionClick = x2(function() {
          triggerRootFocus();
          triggerMenuHide();
        }, [triggerMenuHide, triggerRootFocus]);
        const handleMouseDownOutside = x2(function() {
          if (isMenuVisible === false) {
            return;
          }
          triggerMenuHide();
          triggerRootBlur();
        }, [isMenuVisible, triggerRootBlur, triggerMenuHide]);
        useMouseDownOutside({
          onMouseDownOutside: handleMouseDownOutside,
          ref: rootElementRef
        });
        _2(function() {
          function handleWindowScroll() {
            if (isMenuVisible === false) {
              return;
            }
            triggerRootFocus();
            triggerMenuHide();
          }
          window.addEventListener("scroll", handleWindowScroll);
          return function() {
            window.removeEventListener("scroll", handleWindowScroll);
          };
        }, [isMenuVisible, triggerMenuHide, triggerRootFocus]);
        const refCallback = x2(function(rootElement) {
          rootElementRef.current = rootElement;
          if (ref === null) {
            return;
          }
          if (typeof ref === "function") {
            ref(rootElement);
            return;
          }
          ref.current = rootElement;
        }, [ref, rootElementRef]);
        return g(
          "div",
          __spreadProps(__spreadValues({}, rest), { ref: refCallback, class: createClassName([
            dropdown_module_default.dropdown,
            variant === "border" ? dropdown_module_default.hasBorder : null,
            typeof icon !== "undefined" ? dropdown_module_default.hasIcon : null,
            disabled === true ? dropdown_module_default.disabled : null
          ]), onKeyDown: disabled === true ? void 0 : handleRootKeyDown, onMouseDown: handleRootMouseDown, tabIndex: 0 }),
          typeof icon === "undefined" ? null : g("div", { class: dropdown_module_default.icon }, icon),
          value === null ? typeof placeholder === "undefined" ? g("div", { class: dropdown_module_default.empty }) : g("div", { class: createClassName([
            dropdown_module_default.value,
            dropdown_module_default.placeholder
          ]) }, placeholder) : g("div", { class: dropdown_module_default.value }, children),
          g(
            "div",
            { class: dropdown_module_default.chevronIcon },
            g(IconControlChevronDown8, null)
          ),
          variant === "underline" ? g("div", { class: dropdown_module_default.underline }) : null,
          g("div", { class: dropdown_module_default.border }),
          j3(g("div", { ref: menuElementRef, class: createClassName([
            menu_module_default.menu,
            dropdown_module_default.menu,
            disabled === true || isMenuVisible === false ? menu_module_default.hidden : null
          ]), onMouseDown: handleMenuMouseDown }, options.map(function(option, index2) {
            if (typeof option === "string") {
              return g("hr", { key: index2, class: menu_module_default.optionSeparator });
            }
            if ("header" in option) {
              return g("h1", { key: index2, class: menu_module_default.optionHeader }, option.header);
            }
            return g(
              "label",
              { key: index2, class: createClassName([
                menu_module_default.optionValue,
                option.disabled === true ? menu_module_default.optionValueDisabled : null,
                option.disabled !== true && `${index2}` === selectedId ? menu_module_default.optionValueSelected : null
              ]) },
              g("input", { checked: value === option.value, class: menu_module_default.input, disabled: option.disabled === true, onChange: value === option.value ? void 0 : handleOptionChange, onClick: value === option.value ? handleSelectedOptionClick : void 0, onMouseMove: handleScrollableMenuItemMouseMove, tabIndex: -1, type: "radio", value: `${option.value}`, [ITEM_ID_DATA_ATTRIBUTE_NAME]: `${index2}` }),
              option.value === value ? g(
                "div",
                { class: menu_module_default.checkIcon },
                g(IconMenuCheckmarkChecked16, null)
              ) : null,
              typeof option.text === "undefined" ? option.value : option.text
            );
          })), document.body)
        );
      });
    }
  });

  // ../../../../../../../private/var/folders/fk/rr41696x339229f5gspy9m900000gp/T/fb07f782-877e-4041-a24e-8cb081af268d/text.module.js
  var text_module_default;
  var init_text_module = __esm({
    "../../../../../../../private/var/folders/fk/rr41696x339229f5gspy9m900000gp/T/fb07f782-877e-4041-a24e-8cb081af268d/text.module.js"() {
      if (document.getElementById("8125731ef7") === null) {
        const element = document.createElement("style");
        element.id = "8125731ef7";
        element.textContent = `._text_mh6mm_1 {
  padding-top: 1px;
  color: var(--figma-color-text);
  pointer-events: none;
  transform: translateY(4px);
}
._text_mh6mm_1:before {
  display: block;
  height: 0;
  margin-top: -9px;
  content: '';
  pointer-events: none;
}

._numeric_mh6mm_15 {
  font-variant-numeric: tabular-nums;
}

._left_mh6mm_19 {
  text-align: left;
}
._center_mh6mm_22 {
  text-align: center;
}
._right_mh6mm_25 {
  text-align: right;
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy90ZXh0L3RleHQubW9kdWxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQiw4QkFBOEI7RUFDOUIsb0JBQW9CO0VBQ3BCLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UsY0FBYztFQUNkLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoibm9kZV9tb2R1bGVzL0BjcmVhdGUtZmlnbWEtcGx1Z2luL3VpL2xpYi9jb21wb25lbnRzL3RleHQvdGV4dC5tb2R1bGUuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQge1xuICBwYWRkaW5nLXRvcDogMXB4O1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItdGV4dCk7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KTtcbn1cbi50ZXh0OmJlZm9yZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDA7XG4gIG1hcmdpbi10b3A6IC05cHg7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLm51bWVyaWMge1xuICBmb250LXZhcmlhbnQtbnVtZXJpYzogdGFidWxhci1udW1zO1xufVxuXG4ubGVmdCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4iXX0= */`;
        document.head.append(element);
      }
      text_module_default = { "text": "_text_mh6mm_1", "numeric": "_numeric_mh6mm_15", "left": "_left_mh6mm_19", "center": "_center_mh6mm_22", "right": "_right_mh6mm_25" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/text/text.js
  var Text;
  var init_text = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/text/text.js"() {
      init_preact_module();
      init_create_class_name();
      init_create_component();
      init_text_module();
      Text = createComponent(function(_a) {
        var _b = _a, { align = "left", children, numeric = false } = _b, rest = __objRest(_b, ["align", "children", "numeric"]);
        return g("div", __spreadProps(__spreadValues({}, rest), { class: createClassName([
          text_module_default.text,
          text_module_default[align],
          numeric === true ? text_module_default.numeric : null
        ]) }), children);
      });
    }
  });

  // node_modules/@create-figma-plugin/utilities/lib/events.js
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
  var eventHandlers, emit;
  var init_events = __esm({
    "node_modules/@create-figma-plugin/utilities/lib/events.js"() {
      eventHandlers = {};
      emit = typeof window === "undefined" ? function(name, ...args) {
        figma.ui.postMessage([name, ...args]);
      } : function(name, ...args) {
        window.parent.postMessage({
          pluginMessage: [name, ...args]
        }, "*");
      };
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

  // node_modules/@create-figma-plugin/utilities/lib/index.js
  var init_lib = __esm({
    "node_modules/@create-figma-plugin/utilities/lib/index.js"() {
      init_events();
    }
  });

  // ../../../../../../../private/var/folders/fk/rr41696x339229f5gspy9m900000gp/T/f594b278-0a3b-4fc4-af0e-acc9ad2c6af7/container.module.js
  var container_module_default;
  var init_container_module = __esm({
    "../../../../../../../private/var/folders/fk/rr41696x339229f5gspy9m900000gp/T/f594b278-0a3b-4fc4-af0e-acc9ad2c6af7/container.module.js"() {
      if (document.getElementById("d43fe8f8bc") === null) {
        const element = document.createElement("style");
        element.id = "d43fe8f8bc";
        element.textContent = `._extraSmall_1oe77_1 {
  padding: 0 var(--space-extra-small);
}
._small_1oe77_4 {
  padding: 0 var(--space-small);
}
._medium_1oe77_7 {
  padding: 0 var(--space-medium);
}
._large_1oe77_10 {
  padding: 0 var(--space-large);
}
._extraLarge_1oe77_13 {
  padding: 0 var(--space-extra-large);
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvbGF5b3V0L2NvbnRhaW5lci9jb250YWluZXIubW9kdWxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1DQUFtQztBQUNyQztBQUNBO0VBQ0UsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0UsbUNBQW1DO0FBQ3JDIiwiZmlsZSI6Im5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvbGF5b3V0L2NvbnRhaW5lci9jb250YWluZXIubW9kdWxlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leHRyYVNtYWxsIHtcbiAgcGFkZGluZzogMCB2YXIoLS1zcGFjZS1leHRyYS1zbWFsbCk7XG59XG4uc21hbGwge1xuICBwYWRkaW5nOiAwIHZhcigtLXNwYWNlLXNtYWxsKTtcbn1cbi5tZWRpdW0ge1xuICBwYWRkaW5nOiAwIHZhcigtLXNwYWNlLW1lZGl1bSk7XG59XG4ubGFyZ2Uge1xuICBwYWRkaW5nOiAwIHZhcigtLXNwYWNlLWxhcmdlKTtcbn1cbi5leHRyYUxhcmdlIHtcbiAgcGFkZGluZzogMCB2YXIoLS1zcGFjZS1leHRyYS1sYXJnZSk7XG59XG4iXX0= */`;
        document.head.append(element);
      }
      container_module_default = { "extraSmall": "_extraSmall_1oe77_1", "small": "_small_1oe77_4", "medium": "_medium_1oe77_7", "large": "_large_1oe77_10", "extraLarge": "_extraLarge_1oe77_13" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/layout/container/container.js
  var Container;
  var init_container = __esm({
    "node_modules/@create-figma-plugin/ui/lib/layout/container/container.js"() {
      init_preact_module();
      init_create_component();
      init_container_module();
      Container = createComponent(function(_a, ref) {
        var _b = _a, { space } = _b, rest = __objRest(_b, ["space"]);
        return g("div", __spreadProps(__spreadValues({}, rest), { ref, class: container_module_default[space] }));
      });
    }
  });

  // ../../../../../../../private/var/folders/fk/rr41696x339229f5gspy9m900000gp/T/de259dc5-a54e-44b3-91ce-ceebc19b61f6/vertical-space.module.js
  var vertical_space_module_default;
  var init_vertical_space_module = __esm({
    "../../../../../../../private/var/folders/fk/rr41696x339229f5gspy9m900000gp/T/de259dc5-a54e-44b3-91ce-ceebc19b61f6/vertical-space.module.js"() {
      if (document.getElementById("12b0dddfb1") === null) {
        const element = document.createElement("style");
        element.id = "12b0dddfb1";
        element.textContent = `._extraSmall_zc4n0_1 {
  height: var(--space-extra-small);
}
._small_zc4n0_4 {
  height: var(--space-small);
}
._medium_zc4n0_7 {
  height: var(--space-medium);
}
._large_zc4n0_10 {
  height: var(--space-large);
}
._extraLarge_zc4n0_13 {
  height: var(--space-extra-large);
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvbGF5b3V0L3ZlcnRpY2FsLXNwYWNlL3ZlcnRpY2FsLXNwYWNlLm1vZHVsZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQ0FBZ0M7QUFDbEM7QUFDQTtFQUNFLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSwwQkFBMEI7QUFDNUI7QUFDQTtFQUNFLGdDQUFnQztBQUNsQyIsImZpbGUiOiJub2RlX21vZHVsZXMvQGNyZWF0ZS1maWdtYS1wbHVnaW4vdWkvbGliL2xheW91dC92ZXJ0aWNhbC1zcGFjZS92ZXJ0aWNhbC1zcGFjZS5tb2R1bGUuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4dHJhU21hbGwge1xuICBoZWlnaHQ6IHZhcigtLXNwYWNlLWV4dHJhLXNtYWxsKTtcbn1cbi5zbWFsbCB7XG4gIGhlaWdodDogdmFyKC0tc3BhY2Utc21hbGwpO1xufVxuLm1lZGl1bSB7XG4gIGhlaWdodDogdmFyKC0tc3BhY2UtbWVkaXVtKTtcbn1cbi5sYXJnZSB7XG4gIGhlaWdodDogdmFyKC0tc3BhY2UtbGFyZ2UpO1xufVxuLmV4dHJhTGFyZ2Uge1xuICBoZWlnaHQ6IHZhcigtLXNwYWNlLWV4dHJhLWxhcmdlKTtcbn1cbiJdfQ== */`;
        document.head.append(element);
      }
      vertical_space_module_default = { "extraSmall": "_extraSmall_zc4n0_1", "small": "_small_zc4n0_4", "medium": "_medium_zc4n0_7", "large": "_large_zc4n0_10", "extraLarge": "_extraLarge_zc4n0_13" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/layout/vertical-space/vertical-space.js
  var VerticalSpace;
  var init_vertical_space = __esm({
    "node_modules/@create-figma-plugin/ui/lib/layout/vertical-space/vertical-space.js"() {
      init_preact_module();
      init_create_component();
      init_vertical_space_module();
      VerticalSpace = createComponent(function(_a, ref) {
        var _b = _a, { space } = _b, rest = __objRest(_b, ["space"]);
        return g("div", __spreadProps(__spreadValues({}, rest), { ref, class: vertical_space_module_default[space] }));
      });
    }
  });

  // ../../../../../../../private/var/folders/fk/rr41696x339229f5gspy9m900000gp/T/1f42f0b7-03ab-41da-afbf-891af2bad206/base.js
  var init_base = __esm({
    "../../../../../../../private/var/folders/fk/rr41696x339229f5gspy9m900000gp/T/1f42f0b7-03ab-41da-afbf-891af2bad206/base.js"() {
      if (document.getElementById("5232053306") === null) {
        const element = document.createElement("style");
        element.id = "5232053306";
        element.innerHTML = `:root {
  --border-radius-2: 2px;
  --border-radius-6: 6px;
  --box-shadow: var(--box-shadow-menu);
  --box-shadow-menu: 0 5px 17px rgba(0, 0, 0, 0.2),
    0 2px 7px rgba(0, 0, 0, 0.15), inset 0 0 0 0.5px #000000,
    0 0 0 0.5px rgba(0, 0, 0, 0.1);
  --box-shadow-modal: 0 2px 14px rgba(0, 0, 0, 0.15),
    0 0 0 0.5px rgba(0, 0, 0, 0.2);
  --font-family: 'Inter', 'Helvetica', sans-serif;
  --font-family-code: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono',
    'Courier New', monospace;
  --font-size-11: 11px;
  --font-size-12: 12px;
  --font-weight-regular: 400;
  --font-weight-bold: 600;
  --line-height-16: 16px;
  --opacity-30: 0.3;
  --space-extra-small: 8px;
  --space-small: 12px;
  --space-medium: 16px;
  --space-large: 20px;
  --space-extra-large: 24px;
  --z-index-1: 1;
  --z-index-2: 2;
}

.figma-dark {
  color-scheme: dark;
}

* {
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: currentColor;
}

body {
  margin: 0;
  background-color: var(--figma-color-bg);
  color: var(--figma-color-text);
  font-family: var(--font-family);
  font-size: var(--font-size-11);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-16);
}

div,
span {
  cursor: default;
  user-select: none;
}

h1,
h2,
h3 {
  margin: 0;
  font-weight: inherit;
}

button {
  padding: 0;
  border: 0;
  -webkit-appearance: none;
  background-color: transparent;
  font: inherit;
  outline: 0;
}

hr {
  border: 0;
  margin: 0;
}

label {
  display: block;
}

input,
textarea {
  padding: 0;
  border: 0;
  margin: 0;
  -webkit-appearance: none;
  cursor: default;
  font: inherit;
  outline: 0;
}

svg {
  display: block;
}

::selection {
  background-color: var(--figma-color-bg-onselected);
}
`;
        document.head.prepend(element);
      }
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/utilities/render.js
  function render(Plugin2) {
    return function(rootNode2, props) {
      D(g(Plugin2, __spreadValues({}, props)), rootNode2);
    };
  }
  var init_render = __esm({
    "node_modules/@create-figma-plugin/ui/lib/utilities/render.js"() {
      init_base();
      init_preact_module();
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/index.js
  var init_lib2 = __esm({
    "node_modules/@create-figma-plugin/ui/lib/index.js"() {
      init_button();
      init_dropdown();
      init_text();
      init_container();
      init_vertical_space();
      init_render();
    }
  });

  // src/ui.tsx
  var ui_exports = {};
  __export(ui_exports, {
    default: () => ui_default
  });
  function Plugin() {
    const [collections, setCollections] = p2([]);
    const [selectedCollectionKey, setSelectedCollectionKey] = p2("");
    const [isLoading, setIsLoading] = p2(true);
    _2(() => {
      const handleMessage = (event) => {
        if (event.data.pluginMessage && event.data.pluginMessage.type === "COLLECTIONS_FETCHED") {
          setCollections(event.data.pluginMessage.collections);
          setIsLoading(false);
        }
      };
      window.addEventListener("message", handleMessage);
      return () => {
        window.removeEventListener("message", handleMessage);
      };
    }, []);
    const handleApplyVariablesClick = x2(() => {
      if (selectedCollectionKey) {
        console.log(selectedCollectionKey);
        emit("APPLY_VARIABLES", { collectionKey: selectedCollectionKey });
      }
    }, [selectedCollectionKey]);
    const handleCloseButtonClick = x2(function() {
      emit("CLOSE");
    }, []);
    return /* @__PURE__ */ g(Container, { space: "medium" }, isLoading ? /* @__PURE__ */ g(Text, null, "Loading collections...") : g(
      "div",
      null,
      /* @__PURE__ */ g(VerticalSpace, { space: "large" }),
      /* @__PURE__ */ g(Text, null, "Select a Variable Collection:"),
      /* @__PURE__ */ g(VerticalSpace, { space: "small" }),
      /* @__PURE__ */ g(
        Dropdown,
        {
          variant: "border",
          options: collections.map((collection) => ({ value: collection.name })),
          onValueChange: setSelectedCollectionKey,
          value: selectedCollectionKey || null
        }
      ),
      /* @__PURE__ */ g(VerticalSpace, { space: "extraLarge" }),
      /* @__PURE__ */ g(Button, { fullWidth: true, onClick: handleApplyVariablesClick }, "Apply Variables"),
      /* @__PURE__ */ g(VerticalSpace, { space: "small" }),
      /* @__PURE__ */ g(Button, { fullWidth: true, onClick: handleCloseButtonClick, secondary: true }, "Close"),
      /* @__PURE__ */ g(VerticalSpace, { space: "small" })
    ));
  }
  var ui_default;
  var init_ui = __esm({
    "src/ui.tsx"() {
      "use strict";
      init_lib2();
      init_lib();
      init_preact_module();
      init_hooks_module();
      ui_default = render(Plugin);
    }
  });

  // <stdin>
  var rootNode = document.getElementById("create-figma-plugin");
  var modules = { "src/main.ts--default": (init_ui(), __toCommonJS(ui_exports))["default"] };
  var commandId = __FIGMA_COMMAND__ === "" ? "src/main.ts--default" : __FIGMA_COMMAND__;
  if (typeof modules[commandId] === "undefined") {
    throw new Error(
      "No UI defined for command `" + commandId + "`"
    );
  }
  modules[commandId](rootNode, __SHOW_UI_DATA__);
})();
