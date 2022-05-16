"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

(function () {
  'use strict';

  var react = {
    exports: {}
  };
  var react_production_min = {};
  /*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  */

  var getOwnPropertySymbols = Object.getOwnPropertySymbols;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var propIsEnumerable = Object.prototype.propertyIsEnumerable;

  function toObject(val) {
    if (val === null || val === undefined) {
      throw new TypeError('Object.assign cannot be called with null or undefined');
    }

    return Object(val);
  }

  function shouldUseNative() {
    try {
      if (!Object.assign) {
        return false;
      }

      var test1 = new String('abc');
      test1[5] = 'de';

      if (Object.getOwnPropertyNames(test1)[0] === '5') {
        return false;
      }

      var test2 = {};

      for (var i = 0; i < 10; i++) {
        test2['_' + String.fromCharCode(i)] = i;
      }

      var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
        return test2[n];
      });

      if (order2.join('') !== '0123456789') {
        return false;
      }

      var test3 = {};
      'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
        test3[letter] = letter;
      });

      if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
        return false;
      }

      return true;
    } catch (err) {
      return false;
    }
  }

  var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
    var from;
    var to = toObject(target);
    var symbols;

    for (var s = 1; s < arguments.length; s++) {
      from = Object(arguments[s]);

      for (var key in from) {
        if (hasOwnProperty.call(from, key)) {
          to[key] = from[key];
        }
      }

      if (getOwnPropertySymbols) {
        symbols = getOwnPropertySymbols(from);

        for (var i = 0; i < symbols.length; i++) {
          if (propIsEnumerable.call(from, symbols[i])) {
            to[symbols[i]] = from[symbols[i]];
          }
        }
      }
    }

    return to;
  };
  /** @license React v17.0.2
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var l = objectAssign,
      n = 60103,
      p = 60106;
  react_production_min.Fragment = 60107;
  react_production_min.StrictMode = 60108;
  react_production_min.Profiler = 60114;
  var q = 60109,
      r$1 = 60110,
      t = 60112;
  react_production_min.Suspense = 60113;
  var u = 60115,
      v = 60116;

  if ("function" === typeof Symbol && Symbol["for"]) {
    var w = Symbol["for"];
    n = w("react.element");
    p = w("react.portal");
    react_production_min.Fragment = w("react.fragment");
    react_production_min.StrictMode = w("react.strict_mode");
    react_production_min.Profiler = w("react.profiler");
    q = w("react.provider");
    r$1 = w("react.context");
    t = w("react.forward_ref");
    react_production_min.Suspense = w("react.suspense");
    u = w("react.memo");
    v = w("react.lazy");
  }

  var x = "function" === typeof Symbol && Symbol.iterator;

  function y$1(a) {
    if (null === a || "object" !== _typeof(a)) return null;
    a = x && a[x] || a["@@iterator"];
    return "function" === typeof a ? a : null;
  }

  function z(a) {
    for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) {
      b += "&args[]=" + encodeURIComponent(arguments[c]);
    }

    return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }

  var A = {
    isMounted: function isMounted() {
      return !1;
    },
    enqueueForceUpdate: function enqueueForceUpdate() {},
    enqueueReplaceState: function enqueueReplaceState() {},
    enqueueSetState: function enqueueSetState() {}
  },
      B$1 = {};

  function C(a, b, c) {
    this.props = a;
    this.context = b;
    this.refs = B$1;
    this.updater = c || A;
  }

  C.prototype.isReactComponent = {};

  C.prototype.setState = function (a, b) {
    if ("object" !== _typeof(a) && "function" !== typeof a && null != a) throw Error(z(85));
    this.updater.enqueueSetState(this, a, b, "setState");
  };

  C.prototype.forceUpdate = function (a) {
    this.updater.enqueueForceUpdate(this, a, "forceUpdate");
  };

  function D$1() {}

  D$1.prototype = C.prototype;

  function E$1(a, b, c) {
    this.props = a;
    this.context = b;
    this.refs = B$1;
    this.updater = c || A;
  }

  var F$1 = E$1.prototype = new D$1();
  F$1.constructor = E$1;
  l(F$1, C.prototype);
  F$1.isPureReactComponent = !0;
  var G$1 = {
    current: null
  },
      H$1 = Object.prototype.hasOwnProperty,
      I$1 = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
  };

  function J(a, b, c) {
    var e,
        d = {},
        k = null,
        h = null;
    if (null != b) for (e in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b) {
      H$1.call(b, e) && !I$1.hasOwnProperty(e) && (d[e] = b[e]);
    }
    var g = arguments.length - 2;
    if (1 === g) d.children = c;else if (1 < g) {
      for (var f = Array(g), m = 0; m < g; m++) {
        f[m] = arguments[m + 2];
      }

      d.children = f;
    }
    if (a && a.defaultProps) for (e in g = a.defaultProps, g) {
      void 0 === d[e] && (d[e] = g[e]);
    }
    return {
      $$typeof: n,
      type: a,
      key: k,
      ref: h,
      props: d,
      _owner: G$1.current
    };
  }

  function K(a, b) {
    return {
      $$typeof: n,
      type: a.type,
      key: b,
      ref: a.ref,
      props: a.props,
      _owner: a._owner
    };
  }

  function L(a) {
    return "object" === _typeof(a) && null !== a && a.$$typeof === n;
  }

  function escape(a) {
    var b = {
      "=": "=0",
      ":": "=2"
    };
    return "$" + a.replace(/[=:]/g, function (a) {
      return b[a];
    });
  }

  var M$1 = /\/+/g;

  function N$1(a, b) {
    return "object" === _typeof(a) && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
  }

  function O$1(a, b, c, e, d) {
    var k = _typeof(a);

    if ("undefined" === k || "boolean" === k) a = null;
    var h = !1;
    if (null === a) h = !0;else switch (k) {
      case "string":
      case "number":
        h = !0;
        break;

      case "object":
        switch (a.$$typeof) {
          case n:
          case p:
            h = !0;
        }

    }
    if (h) return h = a, d = d(h), a = "" === e ? "." + N$1(h, 0) : e, Array.isArray(d) ? (c = "", null != a && (c = a.replace(M$1, "$&/") + "/"), O$1(d, b, c, "", function (a) {
      return a;
    })) : null != d && (L(d) && (d = K(d, c + (!d.key || h && h.key === d.key ? "" : ("" + d.key).replace(M$1, "$&/") + "/") + a)), b.push(d)), 1;
    h = 0;
    e = "" === e ? "." : e + ":";
    if (Array.isArray(a)) for (var g = 0; g < a.length; g++) {
      k = a[g];
      var f = e + N$1(k, g);
      h += O$1(k, b, c, f, d);
    } else if (f = y$1(a), "function" === typeof f) for (a = f.call(a), g = 0; !(k = a.next()).done;) {
      k = k.value, f = e + N$1(k, g++), h += O$1(k, b, c, f, d);
    } else if ("object" === k) throw b = "" + a, Error(z(31, "[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b));
    return h;
  }

  function P$1(a, b, c) {
    if (null == a) return a;
    var e = [],
        d = 0;
    O$1(a, e, "", "", function (a) {
      return b.call(c, a, d++);
    });
    return e;
  }

  function Q(a) {
    if (-1 === a._status) {
      var b = a._result;
      b = b();
      a._status = 0;
      a._result = b;
      b.then(function (b) {
        0 === a._status && (b = b["default"], a._status = 1, a._result = b);
      }, function (b) {
        0 === a._status && (a._status = 2, a._result = b);
      });
    }

    if (1 === a._status) return a._result;
    throw a._result;
  }

  var R$1 = {
    current: null
  };

  function S$1() {
    var a = R$1.current;
    if (null === a) throw Error(z(321));
    return a;
  }

  var T$1 = {
    ReactCurrentDispatcher: R$1,
    ReactCurrentBatchConfig: {
      transition: 0
    },
    ReactCurrentOwner: G$1,
    IsSomeRendererActing: {
      current: !1
    },
    assign: l
  };
  react_production_min.Children = {
    map: P$1,
    forEach: function forEach(a, b, c) {
      P$1(a, function () {
        b.apply(this, arguments);
      }, c);
    },
    count: function count(a) {
      var b = 0;
      P$1(a, function () {
        b++;
      });
      return b;
    },
    toArray: function toArray(a) {
      return P$1(a, function (a) {
        return a;
      }) || [];
    },
    only: function only(a) {
      if (!L(a)) throw Error(z(143));
      return a;
    }
  };
  react_production_min.Component = C;
  react_production_min.PureComponent = E$1;
  react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T$1;

  react_production_min.cloneElement = function (a, b, c) {
    if (null === a || void 0 === a) throw Error(z(267, a));
    var e = l({}, a.props),
        d = a.key,
        k = a.ref,
        h = a._owner;

    if (null != b) {
      void 0 !== b.ref && (k = b.ref, h = G$1.current);
      void 0 !== b.key && (d = "" + b.key);
      if (a.type && a.type.defaultProps) var g = a.type.defaultProps;

      for (f in b) {
        H$1.call(b, f) && !I$1.hasOwnProperty(f) && (e[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
      }
    }

    var f = arguments.length - 2;
    if (1 === f) e.children = c;else if (1 < f) {
      g = Array(f);

      for (var m = 0; m < f; m++) {
        g[m] = arguments[m + 2];
      }

      e.children = g;
    }
    return {
      $$typeof: n,
      type: a.type,
      key: d,
      ref: k,
      props: e,
      _owner: h
    };
  };

  react_production_min.createContext = function (a, b) {
    void 0 === b && (b = null);
    a = {
      $$typeof: r$1,
      _calculateChangedBits: b,
      _currentValue: a,
      _currentValue2: a,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    };
    a.Provider = {
      $$typeof: q,
      _context: a
    };
    return a.Consumer = a;
  };

  react_production_min.createElement = J;

  react_production_min.createFactory = function (a) {
    var b = J.bind(null, a);
    b.type = a;
    return b;
  };

  react_production_min.createRef = function () {
    return {
      current: null
    };
  };

  react_production_min.forwardRef = function (a) {
    return {
      $$typeof: t,
      render: a
    };
  };

  react_production_min.isValidElement = L;

  react_production_min.lazy = function (a) {
    return {
      $$typeof: v,
      _payload: {
        _status: -1,
        _result: a
      },
      _init: Q
    };
  };

  react_production_min.memo = function (a, b) {
    return {
      $$typeof: u,
      type: a,
      compare: void 0 === b ? null : b
    };
  };

  react_production_min.useCallback = function (a, b) {
    return S$1().useCallback(a, b);
  };

  react_production_min.useContext = function (a, b) {
    return S$1().useContext(a, b);
  };

  react_production_min.useDebugValue = function () {};

  react_production_min.useEffect = function (a, b) {
    return S$1().useEffect(a, b);
  };

  react_production_min.useImperativeHandle = function (a, b, c) {
    return S$1().useImperativeHandle(a, b, c);
  };

  react_production_min.useLayoutEffect = function (a, b) {
    return S$1().useLayoutEffect(a, b);
  };

  react_production_min.useMemo = function (a, b) {
    return S$1().useMemo(a, b);
  };

  react_production_min.useReducer = function (a, b, c) {
    return S$1().useReducer(a, b, c);
  };

  react_production_min.useRef = function (a) {
    return S$1().useRef(a);
  };

  react_production_min.useState = function (a) {
    return S$1().useState(a);
  };

  react_production_min.version = "17.0.2";
  {
    react.exports = react_production_min;
  }
  var React = react.exports;
  var reactDom = {
    exports: {}
  };
  var reactDom_production_min = {};
  var scheduler = {
    exports: {}
  };
  var scheduler_production_min = {};
  /** @license React v0.20.2
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  (function (exports) {
    var _f, g, h, k;

    if ("object" === (typeof performance === "undefined" ? "undefined" : _typeof(performance)) && "function" === typeof performance.now) {
      var l = performance;

      exports.unstable_now = function () {
        return l.now();
      };
    } else {
      var p = Date,
          q = p.now();

      exports.unstable_now = function () {
        return p.now() - q;
      };
    }

    if ("undefined" === typeof window || "function" !== typeof MessageChannel) {
      var t = null,
          u = null,
          w = function w() {
        if (null !== t) try {
          var a = exports.unstable_now();
          t(!0, a);
          t = null;
        } catch (b) {
          throw setTimeout(w, 0), b;
        }
      };

      _f = function f(a) {
        null !== t ? setTimeout(_f, 0, a) : (t = a, setTimeout(w, 0));
      };

      g = function g(a, b) {
        u = setTimeout(a, b);
      };

      h = function h() {
        clearTimeout(u);
      };

      exports.unstable_shouldYield = function () {
        return !1;
      };

      k = exports.unstable_forceFrameRate = function () {};
    } else {
      var x = window.setTimeout,
          y = window.clearTimeout;

      if ("undefined" !== typeof console) {
        var z = window.cancelAnimationFrame;
        "function" !== typeof window.requestAnimationFrame && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
        "function" !== typeof z && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
      }

      var A = !1,
          B = null,
          C = -1,
          D = 5,
          E = 0;

      exports.unstable_shouldYield = function () {
        return exports.unstable_now() >= E;
      };

      k = function k() {};

      exports.unstable_forceFrameRate = function (a) {
        0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : D = 0 < a ? Math.floor(1E3 / a) : 5;
      };

      var F = new MessageChannel(),
          G = F.port2;

      F.port1.onmessage = function () {
        if (null !== B) {
          var a = exports.unstable_now();
          E = a + D;

          try {
            B(!0, a) ? G.postMessage(null) : (A = !1, B = null);
          } catch (b) {
            throw G.postMessage(null), b;
          }
        } else A = !1;
      };

      _f = function _f(a) {
        B = a;
        A || (A = !0, G.postMessage(null));
      };

      g = function g(a, b) {
        C = x(function () {
          a(exports.unstable_now());
        }, b);
      };

      h = function h() {
        y(C);
        C = -1;
      };
    }

    function H(a, b) {
      var c = a.length;
      a.push(b);

      a: for (;;) {
        var d = c - 1 >>> 1,
            e = a[d];
        if (void 0 !== e && 0 < I(e, b)) a[d] = b, a[c] = e, c = d;else break a;
      }
    }

    function J(a) {
      a = a[0];
      return void 0 === a ? null : a;
    }

    function K(a) {
      var b = a[0];

      if (void 0 !== b) {
        var c = a.pop();

        if (c !== b) {
          a[0] = c;

          a: for (var d = 0, e = a.length; d < e;) {
            var m = 2 * (d + 1) - 1,
                n = a[m],
                v = m + 1,
                r = a[v];
            if (void 0 !== n && 0 > I(n, c)) void 0 !== r && 0 > I(r, n) ? (a[d] = r, a[v] = c, d = v) : (a[d] = n, a[m] = c, d = m);else if (void 0 !== r && 0 > I(r, c)) a[d] = r, a[v] = c, d = v;else break a;
          }
        }

        return b;
      }

      return null;
    }

    function I(a, b) {
      var c = a.sortIndex - b.sortIndex;
      return 0 !== c ? c : a.id - b.id;
    }

    var L = [],
        M = [],
        N = 1,
        O = null,
        P = 3,
        Q = !1,
        R = !1,
        S = !1;

    function T(a) {
      for (var b = J(M); null !== b;) {
        if (null === b.callback) K(M);else if (b.startTime <= a) K(M), b.sortIndex = b.expirationTime, H(L, b);else break;
        b = J(M);
      }
    }

    function U(a) {
      S = !1;
      T(a);
      if (!R) if (null !== J(L)) R = !0, _f(V);else {
        var b = J(M);
        null !== b && g(U, b.startTime - a);
      }
    }

    function V(a, b) {
      R = !1;
      S && (S = !1, h());
      Q = !0;
      var c = P;

      try {
        T(b);

        for (O = J(L); null !== O && (!(O.expirationTime > b) || a && !exports.unstable_shouldYield());) {
          var d = O.callback;

          if ("function" === typeof d) {
            O.callback = null;
            P = O.priorityLevel;
            var e = d(O.expirationTime <= b);
            b = exports.unstable_now();
            "function" === typeof e ? O.callback = e : O === J(L) && K(L);
            T(b);
          } else K(L);

          O = J(L);
        }

        if (null !== O) var m = !0;else {
          var n = J(M);
          null !== n && g(U, n.startTime - b);
          m = !1;
        }
        return m;
      } finally {
        O = null, P = c, Q = !1;
      }
    }

    var W = k;
    exports.unstable_IdlePriority = 5;
    exports.unstable_ImmediatePriority = 1;
    exports.unstable_LowPriority = 4;
    exports.unstable_NormalPriority = 3;
    exports.unstable_Profiling = null;
    exports.unstable_UserBlockingPriority = 2;

    exports.unstable_cancelCallback = function (a) {
      a.callback = null;
    };

    exports.unstable_continueExecution = function () {
      R || Q || (R = !0, _f(V));
    };

    exports.unstable_getCurrentPriorityLevel = function () {
      return P;
    };

    exports.unstable_getFirstCallbackNode = function () {
      return J(L);
    };

    exports.unstable_next = function (a) {
      switch (P) {
        case 1:
        case 2:
        case 3:
          var b = 3;
          break;

        default:
          b = P;
      }

      var c = P;
      P = b;

      try {
        return a();
      } finally {
        P = c;
      }
    };

    exports.unstable_pauseExecution = function () {};

    exports.unstable_requestPaint = W;

    exports.unstable_runWithPriority = function (a, b) {
      switch (a) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;

        default:
          a = 3;
      }

      var c = P;
      P = a;

      try {
        return b();
      } finally {
        P = c;
      }
    };

    exports.unstable_scheduleCallback = function (a, b, c) {
      var d = exports.unstable_now();
      "object" === _typeof(c) && null !== c ? (c = c.delay, c = "number" === typeof c && 0 < c ? d + c : d) : c = d;

      switch (a) {
        case 1:
          var e = -1;
          break;

        case 2:
          e = 250;
          break;

        case 5:
          e = 1073741823;
          break;

        case 4:
          e = 1E4;
          break;

        default:
          e = 5E3;
      }

      e = c + e;
      a = {
        id: N++,
        callback: b,
        priorityLevel: a,
        startTime: c,
        expirationTime: e,
        sortIndex: -1
      };
      c > d ? (a.sortIndex = c, H(M, a), null === J(L) && a === J(M) && (S ? h() : S = !0, g(U, c - d))) : (a.sortIndex = e, H(L, a), R || Q || (R = !0, _f(V)));
      return a;
    };

    exports.unstable_wrapCallback = function (a) {
      var b = P;
      return function () {
        var c = P;
        P = b;

        try {
          return a.apply(this, arguments);
        } finally {
          P = c;
        }
      };
    };
  })(scheduler_production_min);

  {
    scheduler.exports = scheduler_production_min;
  }
  /** @license React v17.0.2
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var aa = react.exports,
      m = objectAssign,
      r = scheduler.exports;

  function y(a) {
    for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) {
      b += "&args[]=" + encodeURIComponent(arguments[c]);
    }

    return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }

  if (!aa) throw Error(y(227));
  var ba = new Set(),
      ca = {};

  function da(a, b) {
    ea(a, b);
    ea(a + "Capture", b);
  }

  function ea(a, b) {
    ca[a] = b;

    for (a = 0; a < b.length; a++) {
      ba.add(b[a]);
    }
  }

  var fa = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement),
      ha = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
      ia = Object.prototype.hasOwnProperty,
      ja = {},
      ka = {};

  function la(a) {
    if (ia.call(ka, a)) return !0;
    if (ia.call(ja, a)) return !1;
    if (ha.test(a)) return ka[a] = !0;
    ja[a] = !0;
    return !1;
  }

  function ma(a, b, c, d) {
    if (null !== c && 0 === c.type) return !1;

    switch (_typeof(b)) {
      case "function":
      case "symbol":
        return !0;

      case "boolean":
        if (d) return !1;
        if (null !== c) return !c.acceptsBooleans;
        a = a.toLowerCase().slice(0, 5);
        return "data-" !== a && "aria-" !== a;

      default:
        return !1;
    }
  }

  function na(a, b, c, d) {
    if (null === b || "undefined" === typeof b || ma(a, b, c, d)) return !0;
    if (d) return !1;
    if (null !== c) switch (c.type) {
      case 3:
        return !b;

      case 4:
        return !1 === b;

      case 5:
        return isNaN(b);

      case 6:
        return isNaN(b) || 1 > b;
    }
    return !1;
  }

  function B(a, b, c, d, e, f, g) {
    this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
    this.attributeName = d;
    this.attributeNamespace = e;
    this.mustUseProperty = c;
    this.propertyName = a;
    this.type = b;
    this.sanitizeURL = f;
    this.removeEmptyString = g;
  }

  var D = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (a) {
    D[a] = new B(a, 0, !1, a, null, !1, !1);
  });
  [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function (a) {
    var b = a[0];
    D[b] = new B(b, 1, !1, a[1], null, !1, !1);
  });
  ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (a) {
    D[a] = new B(a, 2, !1, a.toLowerCase(), null, !1, !1);
  });
  ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (a) {
    D[a] = new B(a, 2, !1, a, null, !1, !1);
  });
  "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (a) {
    D[a] = new B(a, 3, !1, a.toLowerCase(), null, !1, !1);
  });
  ["checked", "multiple", "muted", "selected"].forEach(function (a) {
    D[a] = new B(a, 3, !0, a, null, !1, !1);
  });
  ["capture", "download"].forEach(function (a) {
    D[a] = new B(a, 4, !1, a, null, !1, !1);
  });
  ["cols", "rows", "size", "span"].forEach(function (a) {
    D[a] = new B(a, 6, !1, a, null, !1, !1);
  });
  ["rowSpan", "start"].forEach(function (a) {
    D[a] = new B(a, 5, !1, a.toLowerCase(), null, !1, !1);
  });
  var oa = /[\-:]([a-z])/g;

  function pa(a) {
    return a[1].toUpperCase();
  }

  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (a) {
    var b = a.replace(oa, pa);
    D[b] = new B(b, 1, !1, a, null, !1, !1);
  });
  "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (a) {
    var b = a.replace(oa, pa);
    D[b] = new B(b, 1, !1, a, "http://www.w3.org/1999/xlink", !1, !1);
  });
  ["xml:base", "xml:lang", "xml:space"].forEach(function (a) {
    var b = a.replace(oa, pa);
    D[b] = new B(b, 1, !1, a, "http://www.w3.org/XML/1998/namespace", !1, !1);
  });
  ["tabIndex", "crossOrigin"].forEach(function (a) {
    D[a] = new B(a, 1, !1, a.toLowerCase(), null, !1, !1);
  });
  D.xlinkHref = new B("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
  ["src", "href", "action", "formAction"].forEach(function (a) {
    D[a] = new B(a, 1, !1, a.toLowerCase(), null, !0, !0);
  });

  function qa(a, b, c, d) {
    var e = D.hasOwnProperty(b) ? D[b] : null;
    var f = null !== e ? 0 === e.type : d ? !1 : !(2 < b.length) || "o" !== b[0] && "O" !== b[0] || "n" !== b[1] && "N" !== b[1] ? !1 : !0;
    f || (na(b, c, e, d) && (c = null), d || null === e ? la(b) && (null === c ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = null === c ? 3 === e.type ? !1 : "" : c : (b = e.attributeName, d = e.attributeNamespace, null === c ? a.removeAttribute(b) : (e = e.type, c = 3 === e || 4 === e && !0 === c ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c))));
  }

  var ra = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
      sa = 60103,
      ta = 60106,
      ua = 60107,
      wa = 60108,
      xa = 60114,
      ya = 60109,
      za = 60110,
      Aa = 60112,
      Ba = 60113,
      Ca = 60120,
      Da = 60115,
      Ea = 60116,
      Fa = 60121,
      Ga = 60128,
      Ha = 60129,
      Ia = 60130,
      Ja = 60131;

  if ("function" === typeof Symbol && Symbol["for"]) {
    var E = Symbol["for"];
    sa = E("react.element");
    ta = E("react.portal");
    ua = E("react.fragment");
    wa = E("react.strict_mode");
    xa = E("react.profiler");
    ya = E("react.provider");
    za = E("react.context");
    Aa = E("react.forward_ref");
    Ba = E("react.suspense");
    Ca = E("react.suspense_list");
    Da = E("react.memo");
    Ea = E("react.lazy");
    Fa = E("react.block");
    E("react.scope");
    Ga = E("react.opaque.id");
    Ha = E("react.debug_trace_mode");
    Ia = E("react.offscreen");
    Ja = E("react.legacy_hidden");
  }

  var Ka = "function" === typeof Symbol && Symbol.iterator;

  function La(a) {
    if (null === a || "object" !== _typeof(a)) return null;
    a = Ka && a[Ka] || a["@@iterator"];
    return "function" === typeof a ? a : null;
  }

  var Ma;

  function Na(a) {
    if (void 0 === Ma) try {
      throw Error();
    } catch (c) {
      var b = c.stack.trim().match(/\n( *(at )?)/);
      Ma = b && b[1] || "";
    }
    return "\n" + Ma + a;
  }

  var Oa = !1;

  function Pa(a, b) {
    if (!a || Oa) return "";
    Oa = !0;
    var c = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;

    try {
      if (b) {
        if (b = function b() {
          throw Error();
        }, Object.defineProperty(b.prototype, "props", {
          set: function set() {
            throw Error();
          }
        }), "object" === (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && Reflect.construct) {
          try {
            Reflect.construct(b, []);
          } catch (k) {
            var d = k;
          }

          Reflect.construct(a, [], b);
        } else {
          try {
            b.call();
          } catch (k) {
            d = k;
          }

          a.call(b.prototype);
        }
      } else {
        try {
          throw Error();
        } catch (k) {
          d = k;
        }

        a();
      }
    } catch (k) {
      if (k && d && "string" === typeof k.stack) {
        for (var e = k.stack.split("\n"), f = d.stack.split("\n"), g = e.length - 1, h = f.length - 1; 1 <= g && 0 <= h && e[g] !== f[h];) {
          h--;
        }

        for (; 1 <= g && 0 <= h; g--, h--) {
          if (e[g] !== f[h]) {
            if (1 !== g || 1 !== h) {
              do {
                if (g--, h--, 0 > h || e[g] !== f[h]) return "\n" + e[g].replace(" at new ", " at ");
              } while (1 <= g && 0 <= h);
            }

            break;
          }
        }
      }
    } finally {
      Oa = !1, Error.prepareStackTrace = c;
    }

    return (a = a ? a.displayName || a.name : "") ? Na(a) : "";
  }

  function Qa(a) {
    switch (a.tag) {
      case 5:
        return Na(a.type);

      case 16:
        return Na("Lazy");

      case 13:
        return Na("Suspense");

      case 19:
        return Na("SuspenseList");

      case 0:
      case 2:
      case 15:
        return a = Pa(a.type, !1), a;

      case 11:
        return a = Pa(a.type.render, !1), a;

      case 22:
        return a = Pa(a.type._render, !1), a;

      case 1:
        return a = Pa(a.type, !0), a;

      default:
        return "";
    }
  }

  function Ra(a) {
    if (null == a) return null;
    if ("function" === typeof a) return a.displayName || a.name || null;
    if ("string" === typeof a) return a;

    switch (a) {
      case ua:
        return "Fragment";

      case ta:
        return "Portal";

      case xa:
        return "Profiler";

      case wa:
        return "StrictMode";

      case Ba:
        return "Suspense";

      case Ca:
        return "SuspenseList";
    }

    if ("object" === _typeof(a)) switch (a.$$typeof) {
      case za:
        return (a.displayName || "Context") + ".Consumer";

      case ya:
        return (a._context.displayName || "Context") + ".Provider";

      case Aa:
        var b = a.render;
        b = b.displayName || b.name || "";
        return a.displayName || ("" !== b ? "ForwardRef(" + b + ")" : "ForwardRef");

      case Da:
        return Ra(a.type);

      case Fa:
        return Ra(a._render);

      case Ea:
        b = a._payload;
        a = a._init;

        try {
          return Ra(a(b));
        } catch (c) {}

    }
    return null;
  }

  function Sa(a) {
    switch (_typeof(a)) {
      case "boolean":
      case "number":
      case "object":
      case "string":
      case "undefined":
        return a;

      default:
        return "";
    }
  }

  function Ta(a) {
    var b = a.type;
    return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b || "radio" === b);
  }

  function Ua(a) {
    var b = Ta(a) ? "checked" : "value",
        c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b),
        d = "" + a[b];

    if (!a.hasOwnProperty(b) && "undefined" !== typeof c && "function" === typeof c.get && "function" === typeof c.set) {
      var e = c.get,
          f = c.set;
      Object.defineProperty(a, b, {
        configurable: !0,
        get: function get() {
          return e.call(this);
        },
        set: function set(a) {
          d = "" + a;
          f.call(this, a);
        }
      });
      Object.defineProperty(a, b, {
        enumerable: c.enumerable
      });
      return {
        getValue: function getValue() {
          return d;
        },
        setValue: function setValue(a) {
          d = "" + a;
        },
        stopTracking: function stopTracking() {
          a._valueTracker = null;
          delete a[b];
        }
      };
    }
  }

  function Va(a) {
    a._valueTracker || (a._valueTracker = Ua(a));
  }

  function Wa(a) {
    if (!a) return !1;
    var b = a._valueTracker;
    if (!b) return !0;
    var c = b.getValue();
    var d = "";
    a && (d = Ta(a) ? a.checked ? "true" : "false" : a.value);
    a = d;
    return a !== c ? (b.setValue(a), !0) : !1;
  }

  function Xa(a) {
    a = a || ("undefined" !== typeof document ? document : void 0);
    if ("undefined" === typeof a) return null;

    try {
      return a.activeElement || a.body;
    } catch (b) {
      return a.body;
    }
  }

  function Ya(a, b) {
    var c = b.checked;
    return m({}, b, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: null != c ? c : a._wrapperState.initialChecked
    });
  }

  function Za(a, b) {
    var c = null == b.defaultValue ? "" : b.defaultValue,
        d = null != b.checked ? b.checked : b.defaultChecked;
    c = Sa(null != b.value ? b.value : c);
    a._wrapperState = {
      initialChecked: d,
      initialValue: c,
      controlled: "checkbox" === b.type || "radio" === b.type ? null != b.checked : null != b.value
    };
  }

  function $a(a, b) {
    b = b.checked;
    null != b && qa(a, "checked", b, !1);
  }

  function ab(a, b) {
    $a(a, b);
    var c = Sa(b.value),
        d = b.type;
    if (null != c) {
      if ("number" === d) {
        if (0 === c && "" === a.value || a.value != c) a.value = "" + c;
      } else a.value !== "" + c && (a.value = "" + c);
    } else if ("submit" === d || "reset" === d) {
      a.removeAttribute("value");
      return;
    }
    b.hasOwnProperty("value") ? bb(a, b.type, c) : b.hasOwnProperty("defaultValue") && bb(a, b.type, Sa(b.defaultValue));
    null == b.checked && null != b.defaultChecked && (a.defaultChecked = !!b.defaultChecked);
  }

  function cb(a, b, c) {
    if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
      var d = b.type;
      if (!("submit" !== d && "reset" !== d || void 0 !== b.value && null !== b.value)) return;
      b = "" + a._wrapperState.initialValue;
      c || b === a.value || (a.value = b);
      a.defaultValue = b;
    }

    c = a.name;
    "" !== c && (a.name = "");
    a.defaultChecked = !!a._wrapperState.initialChecked;
    "" !== c && (a.name = c);
  }

  function bb(a, b, c) {
    if ("number" !== b || Xa(a.ownerDocument) !== a) null == c ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
  }

  function db(a) {
    var b = "";
    aa.Children.forEach(a, function (a) {
      null != a && (b += a);
    });
    return b;
  }

  function eb(a, b) {
    a = m({
      children: void 0
    }, b);
    if (b = db(b.children)) a.children = b;
    return a;
  }

  function fb(a, b, c, d) {
    a = a.options;

    if (b) {
      b = {};

      for (var e = 0; e < c.length; e++) {
        b["$" + c[e]] = !0;
      }

      for (c = 0; c < a.length; c++) {
        e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = !0);
      }
    } else {
      c = "" + Sa(c);
      b = null;

      for (e = 0; e < a.length; e++) {
        if (a[e].value === c) {
          a[e].selected = !0;
          d && (a[e].defaultSelected = !0);
          return;
        }

        null !== b || a[e].disabled || (b = a[e]);
      }

      null !== b && (b.selected = !0);
    }
  }

  function gb(a, b) {
    if (null != b.dangerouslySetInnerHTML) throw Error(y(91));
    return m({}, b, {
      value: void 0,
      defaultValue: void 0,
      children: "" + a._wrapperState.initialValue
    });
  }

  function hb(a, b) {
    var c = b.value;

    if (null == c) {
      c = b.children;
      b = b.defaultValue;

      if (null != c) {
        if (null != b) throw Error(y(92));

        if (Array.isArray(c)) {
          if (!(1 >= c.length)) throw Error(y(93));
          c = c[0];
        }

        b = c;
      }

      null == b && (b = "");
      c = b;
    }

    a._wrapperState = {
      initialValue: Sa(c)
    };
  }

  function ib(a, b) {
    var c = Sa(b.value),
        d = Sa(b.defaultValue);
    null != c && (c = "" + c, c !== a.value && (a.value = c), null == b.defaultValue && a.defaultValue !== c && (a.defaultValue = c));
    null != d && (a.defaultValue = "" + d);
  }

  function jb(a) {
    var b = a.textContent;
    b === a._wrapperState.initialValue && "" !== b && null !== b && (a.value = b);
  }

  var kb = {
    html: "http://www.w3.org/1999/xhtml",
    mathml: "http://www.w3.org/1998/Math/MathML",
    svg: "http://www.w3.org/2000/svg"
  };

  function lb(a) {
    switch (a) {
      case "svg":
        return "http://www.w3.org/2000/svg";

      case "math":
        return "http://www.w3.org/1998/Math/MathML";

      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }

  function mb(a, b) {
    return null == a || "http://www.w3.org/1999/xhtml" === a ? lb(b) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : a;
  }

  var nb,
      ob = function (a) {
    return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function (b, c, d, e) {
      MSApp.execUnsafeLocalFunction(function () {
        return a(b, c, d, e);
      });
    } : a;
  }(function (a, b) {
    if (a.namespaceURI !== kb.svg || "innerHTML" in a) a.innerHTML = b;else {
      nb = nb || document.createElement("div");
      nb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";

      for (b = nb.firstChild; a.firstChild;) {
        a.removeChild(a.firstChild);
      }

      for (; b.firstChild;) {
        a.appendChild(b.firstChild);
      }
    }
  });

  function pb(a, b) {
    if (b) {
      var c = a.firstChild;

      if (c && c === a.lastChild && 3 === c.nodeType) {
        c.nodeValue = b;
        return;
      }
    }

    a.textContent = b;
  }

  var qb = {
    animationIterationCount: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  },
      rb = ["Webkit", "ms", "Moz", "O"];
  Object.keys(qb).forEach(function (a) {
    rb.forEach(function (b) {
      b = b + a.charAt(0).toUpperCase() + a.substring(1);
      qb[b] = qb[a];
    });
  });

  function sb(a, b, c) {
    return null == b || "boolean" === typeof b || "" === b ? "" : c || "number" !== typeof b || 0 === b || qb.hasOwnProperty(a) && qb[a] ? ("" + b).trim() : b + "px";
  }

  function tb(a, b) {
    a = a.style;

    for (var c in b) {
      if (b.hasOwnProperty(c)) {
        var d = 0 === c.indexOf("--"),
            e = sb(c, b[c], d);
        "float" === c && (c = "cssFloat");
        d ? a.setProperty(c, e) : a[c] = e;
      }
    }
  }

  var ub = m({
    menuitem: !0
  }, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
  });

  function vb(a, b) {
    if (b) {
      if (ub[a] && (null != b.children || null != b.dangerouslySetInnerHTML)) throw Error(y(137, a));

      if (null != b.dangerouslySetInnerHTML) {
        if (null != b.children) throw Error(y(60));
        if (!("object" === _typeof(b.dangerouslySetInnerHTML) && "__html" in b.dangerouslySetInnerHTML)) throw Error(y(61));
      }

      if (null != b.style && "object" !== _typeof(b.style)) throw Error(y(62));
    }
  }

  function wb(a, b) {
    if (-1 === a.indexOf("-")) return "string" === typeof b.is;

    switch (a) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;

      default:
        return !0;
    }
  }

  function xb(a) {
    a = a.target || a.srcElement || window;
    a.correspondingUseElement && (a = a.correspondingUseElement);
    return 3 === a.nodeType ? a.parentNode : a;
  }

  var yb = null,
      zb = null,
      Ab = null;

  function Bb(a) {
    if (a = Cb(a)) {
      if ("function" !== typeof yb) throw Error(y(280));
      var b = a.stateNode;
      b && (b = Db(b), yb(a.stateNode, a.type, b));
    }
  }

  function Eb(a) {
    zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
  }

  function Fb() {
    if (zb) {
      var a = zb,
          b = Ab;
      Ab = zb = null;
      Bb(a);
      if (b) for (a = 0; a < b.length; a++) {
        Bb(b[a]);
      }
    }
  }

  function Gb(a, b) {
    return a(b);
  }

  function Hb(a, b, c, d, e) {
    return a(b, c, d, e);
  }

  function Ib() {}

  var Jb = Gb,
      Kb = !1,
      Lb = !1;

  function Mb() {
    if (null !== zb || null !== Ab) Ib(), Fb();
  }

  function Nb(a, b, c) {
    if (Lb) return a(b, c);
    Lb = !0;

    try {
      return Jb(a, b, c);
    } finally {
      Lb = !1, Mb();
    }
  }

  function Ob(a, b) {
    var c = a.stateNode;
    if (null === c) return null;
    var d = Db(c);
    if (null === d) return null;
    c = d[b];

    a: switch (b) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (d = !d.disabled) || (a = a.type, d = !("button" === a || "input" === a || "select" === a || "textarea" === a));
        a = !d;
        break a;

      default:
        a = !1;
    }

    if (a) return null;
    if (c && "function" !== typeof c) throw Error(y(231, b, _typeof(c)));
    return c;
  }

  var Pb = !1;
  if (fa) try {
    var Qb = {};
    Object.defineProperty(Qb, "passive", {
      get: function get() {
        Pb = !0;
      }
    });
    window.addEventListener("test", Qb, Qb);
    window.removeEventListener("test", Qb, Qb);
  } catch (a) {
    Pb = !1;
  }

  function Rb(a, b, c, d, e, f, g, h, k) {
    var l = Array.prototype.slice.call(arguments, 3);

    try {
      b.apply(c, l);
    } catch (n) {
      this.onError(n);
    }
  }

  var Sb = !1,
      Tb = null,
      Ub = !1,
      Vb = null,
      Wb = {
    onError: function onError(a) {
      Sb = !0;
      Tb = a;
    }
  };

  function Xb(a, b, c, d, e, f, g, h, k) {
    Sb = !1;
    Tb = null;
    Rb.apply(Wb, arguments);
  }

  function Yb(a, b, c, d, e, f, g, h, k) {
    Xb.apply(this, arguments);

    if (Sb) {
      if (Sb) {
        var l = Tb;
        Sb = !1;
        Tb = null;
      } else throw Error(y(198));

      Ub || (Ub = !0, Vb = l);
    }
  }

  function Zb(a) {
    var b = a,
        c = a;
    if (a.alternate) for (; b["return"];) {
      b = b["return"];
    } else {
      a = b;

      do {
        b = a, 0 !== (b.flags & 1026) && (c = b["return"]), a = b["return"];
      } while (a);
    }
    return 3 === b.tag ? c : null;
  }

  function $b(a) {
    if (13 === a.tag) {
      var b = a.memoizedState;
      null === b && (a = a.alternate, null !== a && (b = a.memoizedState));
      if (null !== b) return b.dehydrated;
    }

    return null;
  }

  function ac(a) {
    if (Zb(a) !== a) throw Error(y(188));
  }

  function bc(a) {
    var b = a.alternate;

    if (!b) {
      b = Zb(a);
      if (null === b) throw Error(y(188));
      return b !== a ? null : a;
    }

    for (var c = a, d = b;;) {
      var e = c["return"];
      if (null === e) break;
      var f = e.alternate;

      if (null === f) {
        d = e["return"];

        if (null !== d) {
          c = d;
          continue;
        }

        break;
      }

      if (e.child === f.child) {
        for (f = e.child; f;) {
          if (f === c) return ac(e), a;
          if (f === d) return ac(e), b;
          f = f.sibling;
        }

        throw Error(y(188));
      }

      if (c["return"] !== d["return"]) c = e, d = f;else {
        for (var g = !1, h = e.child; h;) {
          if (h === c) {
            g = !0;
            c = e;
            d = f;
            break;
          }

          if (h === d) {
            g = !0;
            d = e;
            c = f;
            break;
          }

          h = h.sibling;
        }

        if (!g) {
          for (h = f.child; h;) {
            if (h === c) {
              g = !0;
              c = f;
              d = e;
              break;
            }

            if (h === d) {
              g = !0;
              d = f;
              c = e;
              break;
            }

            h = h.sibling;
          }

          if (!g) throw Error(y(189));
        }
      }
      if (c.alternate !== d) throw Error(y(190));
    }

    if (3 !== c.tag) throw Error(y(188));
    return c.stateNode.current === c ? a : b;
  }

  function cc(a) {
    a = bc(a);
    if (!a) return null;

    for (var b = a;;) {
      if (5 === b.tag || 6 === b.tag) return b;
      if (b.child) b.child["return"] = b, b = b.child;else {
        if (b === a) break;

        for (; !b.sibling;) {
          if (!b["return"] || b["return"] === a) return null;
          b = b["return"];
        }

        b.sibling["return"] = b["return"];
        b = b.sibling;
      }
    }

    return null;
  }

  function dc(a, b) {
    for (var c = a.alternate; null !== b;) {
      if (b === a || b === c) return !0;
      b = b["return"];
    }

    return !1;
  }

  var ec,
      fc,
      gc,
      hc,
      ic = !1,
      jc = [],
      kc = null,
      lc = null,
      mc = null,
      nc = new Map(),
      oc = new Map(),
      pc = [],
      qc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

  function rc(a, b, c, d, e) {
    return {
      blockedOn: a,
      domEventName: b,
      eventSystemFlags: c | 16,
      nativeEvent: e,
      targetContainers: [d]
    };
  }

  function sc(a, b) {
    switch (a) {
      case "focusin":
      case "focusout":
        kc = null;
        break;

      case "dragenter":
      case "dragleave":
        lc = null;
        break;

      case "mouseover":
      case "mouseout":
        mc = null;
        break;

      case "pointerover":
      case "pointerout":
        nc["delete"](b.pointerId);
        break;

      case "gotpointercapture":
      case "lostpointercapture":
        oc["delete"](b.pointerId);
    }
  }

  function tc(a, b, c, d, e, f) {
    if (null === a || a.nativeEvent !== f) return a = rc(b, c, d, e, f), null !== b && (b = Cb(b), null !== b && fc(b)), a;
    a.eventSystemFlags |= d;
    b = a.targetContainers;
    null !== e && -1 === b.indexOf(e) && b.push(e);
    return a;
  }

  function uc(a, b, c, d, e) {
    switch (b) {
      case "focusin":
        return kc = tc(kc, a, b, c, d, e), !0;

      case "dragenter":
        return lc = tc(lc, a, b, c, d, e), !0;

      case "mouseover":
        return mc = tc(mc, a, b, c, d, e), !0;

      case "pointerover":
        var f = e.pointerId;
        nc.set(f, tc(nc.get(f) || null, a, b, c, d, e));
        return !0;

      case "gotpointercapture":
        return f = e.pointerId, oc.set(f, tc(oc.get(f) || null, a, b, c, d, e)), !0;
    }

    return !1;
  }

  function vc(a) {
    var b = wc(a.target);

    if (null !== b) {
      var c = Zb(b);
      if (null !== c) if (b = c.tag, 13 === b) {
        if (b = $b(c), null !== b) {
          a.blockedOn = b;
          hc(a.lanePriority, function () {
            r.unstable_runWithPriority(a.priority, function () {
              gc(c);
            });
          });
          return;
        }
      } else if (3 === b && c.stateNode.hydrate) {
        a.blockedOn = 3 === c.tag ? c.stateNode.containerInfo : null;
        return;
      }
    }

    a.blockedOn = null;
  }

  function xc(a) {
    if (null !== a.blockedOn) return !1;

    for (var b = a.targetContainers; 0 < b.length;) {
      var c = yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
      if (null !== c) return b = Cb(c), null !== b && fc(b), a.blockedOn = c, !1;
      b.shift();
    }

    return !0;
  }

  function zc(a, b, c) {
    xc(a) && c["delete"](b);
  }

  function Ac() {
    for (ic = !1; 0 < jc.length;) {
      var a = jc[0];

      if (null !== a.blockedOn) {
        a = Cb(a.blockedOn);
        null !== a && ec(a);
        break;
      }

      for (var b = a.targetContainers; 0 < b.length;) {
        var c = yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);

        if (null !== c) {
          a.blockedOn = c;
          break;
        }

        b.shift();
      }

      null === a.blockedOn && jc.shift();
    }

    null !== kc && xc(kc) && (kc = null);
    null !== lc && xc(lc) && (lc = null);
    null !== mc && xc(mc) && (mc = null);
    nc.forEach(zc);
    oc.forEach(zc);
  }

  function Bc(a, b) {
    a.blockedOn === b && (a.blockedOn = null, ic || (ic = !0, r.unstable_scheduleCallback(r.unstable_NormalPriority, Ac)));
  }

  function Cc(a) {
    function b(b) {
      return Bc(b, a);
    }

    if (0 < jc.length) {
      Bc(jc[0], a);

      for (var c = 1; c < jc.length; c++) {
        var d = jc[c];
        d.blockedOn === a && (d.blockedOn = null);
      }
    }

    null !== kc && Bc(kc, a);
    null !== lc && Bc(lc, a);
    null !== mc && Bc(mc, a);
    nc.forEach(b);
    oc.forEach(b);

    for (c = 0; c < pc.length; c++) {
      d = pc[c], d.blockedOn === a && (d.blockedOn = null);
    }

    for (; 0 < pc.length && (c = pc[0], null === c.blockedOn);) {
      vc(c), null === c.blockedOn && pc.shift();
    }
  }

  function Dc(a, b) {
    var c = {};
    c[a.toLowerCase()] = b.toLowerCase();
    c["Webkit" + a] = "webkit" + b;
    c["Moz" + a] = "moz" + b;
    return c;
  }

  var Ec = {
    animationend: Dc("Animation", "AnimationEnd"),
    animationiteration: Dc("Animation", "AnimationIteration"),
    animationstart: Dc("Animation", "AnimationStart"),
    transitionend: Dc("Transition", "TransitionEnd")
  },
      Fc = {},
      Gc = {};
  fa && (Gc = document.createElement("div").style, "AnimationEvent" in window || (delete Ec.animationend.animation, delete Ec.animationiteration.animation, delete Ec.animationstart.animation), "TransitionEvent" in window || delete Ec.transitionend.transition);

  function Hc(a) {
    if (Fc[a]) return Fc[a];
    if (!Ec[a]) return a;
    var b = Ec[a],
        c;

    for (c in b) {
      if (b.hasOwnProperty(c) && c in Gc) return Fc[a] = b[c];
    }

    return a;
  }

  var Ic = Hc("animationend"),
      Jc = Hc("animationiteration"),
      Kc = Hc("animationstart"),
      Lc = Hc("transitionend"),
      Mc = new Map(),
      Nc = new Map(),
      Oc = ["abort", "abort", Ic, "animationEnd", Jc, "animationIteration", Kc, "animationStart", "canplay", "canPlay", "canplaythrough", "canPlayThrough", "durationchange", "durationChange", "emptied", "emptied", "encrypted", "encrypted", "ended", "ended", "error", "error", "gotpointercapture", "gotPointerCapture", "load", "load", "loadeddata", "loadedData", "loadedmetadata", "loadedMetadata", "loadstart", "loadStart", "lostpointercapture", "lostPointerCapture", "playing", "playing", "progress", "progress", "seeking", "seeking", "stalled", "stalled", "suspend", "suspend", "timeupdate", "timeUpdate", Lc, "transitionEnd", "waiting", "waiting"];

  function Pc(a, b) {
    for (var c = 0; c < a.length; c += 2) {
      var d = a[c],
          e = a[c + 1];
      e = "on" + (e[0].toUpperCase() + e.slice(1));
      Nc.set(d, b);
      Mc.set(d, e);
      da(e, [d]);
    }
  }

  var Qc = r.unstable_now;
  Qc();
  var F = 8;

  function Rc(a) {
    if (0 !== (1 & a)) return F = 15, 1;
    if (0 !== (2 & a)) return F = 14, 2;
    if (0 !== (4 & a)) return F = 13, 4;
    var b = 24 & a;
    if (0 !== b) return F = 12, b;
    if (0 !== (a & 32)) return F = 11, 32;
    b = 192 & a;
    if (0 !== b) return F = 10, b;
    if (0 !== (a & 256)) return F = 9, 256;
    b = 3584 & a;
    if (0 !== b) return F = 8, b;
    if (0 !== (a & 4096)) return F = 7, 4096;
    b = 4186112 & a;
    if (0 !== b) return F = 6, b;
    b = 62914560 & a;
    if (0 !== b) return F = 5, b;
    if (a & 67108864) return F = 4, 67108864;
    if (0 !== (a & 134217728)) return F = 3, 134217728;
    b = 805306368 & a;
    if (0 !== b) return F = 2, b;
    if (0 !== (1073741824 & a)) return F = 1, 1073741824;
    F = 8;
    return a;
  }

  function Sc(a) {
    switch (a) {
      case 99:
        return 15;

      case 98:
        return 10;

      case 97:
      case 96:
        return 8;

      case 95:
        return 2;

      default:
        return 0;
    }
  }

  function Tc(a) {
    switch (a) {
      case 15:
      case 14:
        return 99;

      case 13:
      case 12:
      case 11:
      case 10:
        return 98;

      case 9:
      case 8:
      case 7:
      case 6:
      case 4:
      case 5:
        return 97;

      case 3:
      case 2:
      case 1:
        return 95;

      case 0:
        return 90;

      default:
        throw Error(y(358, a));
    }
  }

  function Uc(a, b) {
    var c = a.pendingLanes;
    if (0 === c) return F = 0;
    var d = 0,
        e = 0,
        f = a.expiredLanes,
        g = a.suspendedLanes,
        h = a.pingedLanes;
    if (0 !== f) d = f, e = F = 15;else if (f = c & 134217727, 0 !== f) {
      var k = f & ~g;
      0 !== k ? (d = Rc(k), e = F) : (h &= f, 0 !== h && (d = Rc(h), e = F));
    } else f = c & ~g, 0 !== f ? (d = Rc(f), e = F) : 0 !== h && (d = Rc(h), e = F);
    if (0 === d) return 0;
    d = 31 - Vc(d);
    d = c & ((0 > d ? 0 : 1 << d) << 1) - 1;

    if (0 !== b && b !== d && 0 === (b & g)) {
      Rc(b);
      if (e <= F) return b;
      F = e;
    }

    b = a.entangledLanes;
    if (0 !== b) for (a = a.entanglements, b &= d; 0 < b;) {
      c = 31 - Vc(b), e = 1 << c, d |= a[c], b &= ~e;
    }
    return d;
  }

  function Wc(a) {
    a = a.pendingLanes & -1073741825;
    return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
  }

  function Xc(a, b) {
    switch (a) {
      case 15:
        return 1;

      case 14:
        return 2;

      case 12:
        return a = Yc(24 & ~b), 0 === a ? Xc(10, b) : a;

      case 10:
        return a = Yc(192 & ~b), 0 === a ? Xc(8, b) : a;

      case 8:
        return a = Yc(3584 & ~b), 0 === a && (a = Yc(4186112 & ~b), 0 === a && (a = 512)), a;

      case 2:
        return b = Yc(805306368 & ~b), 0 === b && (b = 268435456), b;
    }

    throw Error(y(358, a));
  }

  function Yc(a) {
    return a & -a;
  }

  function Zc(a) {
    for (var b = [], c = 0; 31 > c; c++) {
      b.push(a);
    }

    return b;
  }

  function $c(a, b, c) {
    a.pendingLanes |= b;
    var d = b - 1;
    a.suspendedLanes &= d;
    a.pingedLanes &= d;
    a = a.eventTimes;
    b = 31 - Vc(b);
    a[b] = c;
  }

  var Vc = Math.clz32 ? Math.clz32 : ad,
      bd = Math.log,
      cd = Math.LN2;

  function ad(a) {
    return 0 === a ? 32 : 31 - (bd(a) / cd | 0) | 0;
  }

  var dd = r.unstable_UserBlockingPriority,
      ed = r.unstable_runWithPriority,
      fd = !0;

  function gd(a, b, c, d) {
    Kb || Ib();
    var e = hd,
        f = Kb;
    Kb = !0;

    try {
      Hb(e, a, b, c, d);
    } finally {
      (Kb = f) || Mb();
    }
  }

  function id(a, b, c, d) {
    ed(dd, hd.bind(null, a, b, c, d));
  }

  function hd(a, b, c, d) {
    if (fd) {
      var e;
      if ((e = 0 === (b & 4)) && 0 < jc.length && -1 < qc.indexOf(a)) a = rc(null, a, b, c, d), jc.push(a);else {
        var f = yc(a, b, c, d);
        if (null === f) e && sc(a, d);else {
          if (e) {
            if (-1 < qc.indexOf(a)) {
              a = rc(f, a, b, c, d);
              jc.push(a);
              return;
            }

            if (uc(f, a, b, c, d)) return;
            sc(a, d);
          }

          jd(a, b, d, null, c);
        }
      }
    }
  }

  function yc(a, b, c, d) {
    var e = xb(d);
    e = wc(e);

    if (null !== e) {
      var f = Zb(e);
      if (null === f) e = null;else {
        var g = f.tag;

        if (13 === g) {
          e = $b(f);
          if (null !== e) return e;
          e = null;
        } else if (3 === g) {
          if (f.stateNode.hydrate) return 3 === f.tag ? f.stateNode.containerInfo : null;
          e = null;
        } else f !== e && (e = null);
      }
    }

    jd(a, b, d, e, c);
    return null;
  }

  var kd = null,
      ld = null,
      md = null;

  function nd() {
    if (md) return md;
    var a,
        b = ld,
        c = b.length,
        d,
        e = "value" in kd ? kd.value : kd.textContent,
        f = e.length;

    for (a = 0; a < c && b[a] === e[a]; a++) {
      ;
    }

    var g = c - a;

    for (d = 1; d <= g && b[c - d] === e[f - d]; d++) {
      ;
    }

    return md = e.slice(a, 1 < d ? 1 - d : void 0);
  }

  function od(a) {
    var b = a.keyCode;
    "charCode" in a ? (a = a.charCode, 0 === a && 13 === b && (a = 13)) : a = b;
    10 === a && (a = 13);
    return 32 <= a || 13 === a ? a : 0;
  }

  function pd() {
    return !0;
  }

  function qd() {
    return !1;
  }

  function rd(a) {
    function b(b, d, e, f, g) {
      this._reactName = b;
      this._targetInst = e;
      this.type = d;
      this.nativeEvent = f;
      this.target = g;
      this.currentTarget = null;

      for (var c in a) {
        a.hasOwnProperty(c) && (b = a[c], this[c] = b ? b(f) : f[c]);
      }

      this.isDefaultPrevented = (null != f.defaultPrevented ? f.defaultPrevented : !1 === f.returnValue) ? pd : qd;
      this.isPropagationStopped = qd;
      return this;
    }

    m(b.prototype, {
      preventDefault: function preventDefault() {
        this.defaultPrevented = !0;
        var a = this.nativeEvent;
        a && (a.preventDefault ? a.preventDefault() : "unknown" !== typeof a.returnValue && (a.returnValue = !1), this.isDefaultPrevented = pd);
      },
      stopPropagation: function stopPropagation() {
        var a = this.nativeEvent;
        a && (a.stopPropagation ? a.stopPropagation() : "unknown" !== typeof a.cancelBubble && (a.cancelBubble = !0), this.isPropagationStopped = pd);
      },
      persist: function persist() {},
      isPersistent: pd
    });
    return b;
  }

  var sd = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function timeStamp(a) {
      return a.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  },
      td = rd(sd),
      ud = m({}, sd, {
    view: 0,
    detail: 0
  }),
      vd = rd(ud),
      wd,
      xd,
      yd,
      Ad = m({}, ud, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: zd,
    button: 0,
    buttons: 0,
    relatedTarget: function relatedTarget(a) {
      return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
    },
    movementX: function movementX(a) {
      if ("movementX" in a) return a.movementX;
      a !== yd && (yd && "mousemove" === a.type ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, yd = a);
      return wd;
    },
    movementY: function movementY(a) {
      return "movementY" in a ? a.movementY : xd;
    }
  }),
      Bd = rd(Ad),
      Cd = m({}, Ad, {
    dataTransfer: 0
  }),
      Dd = rd(Cd),
      Ed = m({}, ud, {
    relatedTarget: 0
  }),
      Fd = rd(Ed),
      Gd = m({}, sd, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }),
      Hd = rd(Gd),
      Id = m({}, sd, {
    clipboardData: function clipboardData(a) {
      return "clipboardData" in a ? a.clipboardData : window.clipboardData;
    }
  }),
      Jd = rd(Id),
      Kd = m({}, sd, {
    data: 0
  }),
      Ld = rd(Kd),
      Md = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  },
      Nd = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  },
      Od = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };

  function Pd(a) {
    var b = this.nativeEvent;
    return b.getModifierState ? b.getModifierState(a) : (a = Od[a]) ? !!b[a] : !1;
  }

  function zd() {
    return Pd;
  }

  var Qd = m({}, ud, {
    key: function key(a) {
      if (a.key) {
        var b = Md[a.key] || a.key;
        if ("Unidentified" !== b) return b;
      }

      return "keypress" === a.type ? (a = od(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? Nd[a.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: zd,
    charCode: function charCode(a) {
      return "keypress" === a.type ? od(a) : 0;
    },
    keyCode: function keyCode(a) {
      return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
    },
    which: function which(a) {
      return "keypress" === a.type ? od(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
    }
  }),
      Rd = rd(Qd),
      Sd = m({}, Ad, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }),
      Td = rd(Sd),
      Ud = m({}, ud, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: zd
  }),
      Vd = rd(Ud),
      Wd = m({}, sd, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }),
      Xd = rd(Wd),
      Yd = m({}, Ad, {
    deltaX: function deltaX(a) {
      return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
    },
    deltaY: function deltaY(a) {
      return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }),
      Zd = rd(Yd),
      $d = [9, 13, 27, 32],
      ae = fa && "CompositionEvent" in window,
      be = null;
  fa && "documentMode" in document && (be = document.documentMode);
  var ce = fa && "TextEvent" in window && !be,
      de = fa && (!ae || be && 8 < be && 11 >= be),
      ee = String.fromCharCode(32),
      fe = !1;

  function ge(a, b) {
    switch (a) {
      case "keyup":
        return -1 !== $d.indexOf(b.keyCode);

      case "keydown":
        return 229 !== b.keyCode;

      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;

      default:
        return !1;
    }
  }

  function he(a) {
    a = a.detail;
    return "object" === _typeof(a) && "data" in a ? a.data : null;
  }

  var ie = !1;

  function je(a, b) {
    switch (a) {
      case "compositionend":
        return he(b);

      case "keypress":
        if (32 !== b.which) return null;
        fe = !0;
        return ee;

      case "textInput":
        return a = b.data, a === ee && fe ? null : a;

      default:
        return null;
    }
  }

  function ke(a, b) {
    if (ie) return "compositionend" === a || !ae && ge(a, b) ? (a = nd(), md = ld = kd = null, ie = !1, a) : null;

    switch (a) {
      case "paste":
        return null;

      case "keypress":
        if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
          if (b["char"] && 1 < b["char"].length) return b["char"];
          if (b.which) return String.fromCharCode(b.which);
        }

        return null;

      case "compositionend":
        return de && "ko" !== b.locale ? null : b.data;

      default:
        return null;
    }
  }

  var le = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };

  function me(a) {
    var b = a && a.nodeName && a.nodeName.toLowerCase();
    return "input" === b ? !!le[a.type] : "textarea" === b ? !0 : !1;
  }

  function ne(a, b, c, d) {
    Eb(d);
    b = oe(b, "onChange");
    0 < b.length && (c = new td("onChange", "change", null, c, d), a.push({
      event: c,
      listeners: b
    }));
  }

  var pe = null,
      qe = null;

  function re(a) {
    se(a, 0);
  }

  function te(a) {
    var b = ue(a);
    if (Wa(b)) return a;
  }

  function ve(a, b) {
    if ("change" === a) return b;
  }

  var we = !1;

  if (fa) {
    var xe;

    if (fa) {
      var ye = ("oninput" in document);

      if (!ye) {
        var ze = document.createElement("div");
        ze.setAttribute("oninput", "return;");
        ye = "function" === typeof ze.oninput;
      }

      xe = ye;
    } else xe = !1;

    we = xe && (!document.documentMode || 9 < document.documentMode);
  }

  function Ae() {
    pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
  }

  function Be(a) {
    if ("value" === a.propertyName && te(qe)) {
      var b = [];
      ne(b, qe, a, xb(a));
      a = re;
      if (Kb) a(b);else {
        Kb = !0;

        try {
          Gb(a, b);
        } finally {
          Kb = !1, Mb();
        }
      }
    }
  }

  function Ce(a, b, c) {
    "focusin" === a ? (Ae(), pe = b, qe = c, pe.attachEvent("onpropertychange", Be)) : "focusout" === a && Ae();
  }

  function De(a) {
    if ("selectionchange" === a || "keyup" === a || "keydown" === a) return te(qe);
  }

  function Ee(a, b) {
    if ("click" === a) return te(b);
  }

  function Fe(a, b) {
    if ("input" === a || "change" === a) return te(b);
  }

  function Ge(a, b) {
    return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
  }

  var He = "function" === typeof Object.is ? Object.is : Ge,
      Ie = Object.prototype.hasOwnProperty;

  function Je(a, b) {
    if (He(a, b)) return !0;
    if ("object" !== _typeof(a) || null === a || "object" !== _typeof(b) || null === b) return !1;
    var c = Object.keys(a),
        d = Object.keys(b);
    if (c.length !== d.length) return !1;

    for (d = 0; d < c.length; d++) {
      if (!Ie.call(b, c[d]) || !He(a[c[d]], b[c[d]])) return !1;
    }

    return !0;
  }

  function Ke(a) {
    for (; a && a.firstChild;) {
      a = a.firstChild;
    }

    return a;
  }

  function Le(a, b) {
    var c = Ke(a);
    a = 0;

    for (var d; c;) {
      if (3 === c.nodeType) {
        d = a + c.textContent.length;
        if (a <= b && d >= b) return {
          node: c,
          offset: b - a
        };
        a = d;
      }

      a: {
        for (; c;) {
          if (c.nextSibling) {
            c = c.nextSibling;
            break a;
          }

          c = c.parentNode;
        }

        c = void 0;
      }

      c = Ke(c);
    }
  }

  function Me(a, b) {
    return a && b ? a === b ? !0 : a && 3 === a.nodeType ? !1 : b && 3 === b.nodeType ? Me(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : !1 : !1;
  }

  function Ne() {
    for (var a = window, b = Xa(); b instanceof a.HTMLIFrameElement;) {
      try {
        var c = "string" === typeof b.contentWindow.location.href;
      } catch (d) {
        c = !1;
      }

      if (c) a = b.contentWindow;else break;
      b = Xa(a.document);
    }

    return b;
  }

  function Oe(a) {
    var b = a && a.nodeName && a.nodeName.toLowerCase();
    return b && ("input" === b && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b || "true" === a.contentEditable);
  }

  var Pe = fa && "documentMode" in document && 11 >= document.documentMode,
      Qe = null,
      Re = null,
      Se = null,
      Te = !1;

  function Ue(a, b, c) {
    var d = c.window === c ? c.document : 9 === c.nodeType ? c : c.ownerDocument;
    Te || null == Qe || Qe !== Xa(d) || (d = Qe, "selectionStart" in d && Oe(d) ? d = {
      start: d.selectionStart,
      end: d.selectionEnd
    } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = {
      anchorNode: d.anchorNode,
      anchorOffset: d.anchorOffset,
      focusNode: d.focusNode,
      focusOffset: d.focusOffset
    }), Se && Je(Se, d) || (Se = d, d = oe(Re, "onSelect"), 0 < d.length && (b = new td("onSelect", "select", null, b, c), a.push({
      event: b,
      listeners: d
    }), b.target = Qe)));
  }

  Pc("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "), 0);
  Pc("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1);
  Pc(Oc, 2);

  for (var Ve = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), We = 0; We < Ve.length; We++) {
    Nc.set(Ve[We], 0);
  }

  ea("onMouseEnter", ["mouseout", "mouseover"]);
  ea("onMouseLeave", ["mouseout", "mouseover"]);
  ea("onPointerEnter", ["pointerout", "pointerover"]);
  ea("onPointerLeave", ["pointerout", "pointerover"]);
  da("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
  da("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
  da("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
  da("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
  da("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
  da("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Xe = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
      Ye = new Set("cancel close invalid load scroll toggle".split(" ").concat(Xe));

  function Ze(a, b, c) {
    var d = a.type || "unknown-event";
    a.currentTarget = c;
    Yb(d, b, void 0, a);
    a.currentTarget = null;
  }

  function se(a, b) {
    b = 0 !== (b & 4);

    for (var c = 0; c < a.length; c++) {
      var d = a[c],
          e = d.event;
      d = d.listeners;

      a: {
        var f = void 0;
        if (b) for (var g = d.length - 1; 0 <= g; g--) {
          var h = d[g],
              k = h.instance,
              l = h.currentTarget;
          h = h.listener;
          if (k !== f && e.isPropagationStopped()) break a;
          Ze(e, h, l);
          f = k;
        } else for (g = 0; g < d.length; g++) {
          h = d[g];
          k = h.instance;
          l = h.currentTarget;
          h = h.listener;
          if (k !== f && e.isPropagationStopped()) break a;
          Ze(e, h, l);
          f = k;
        }
      }
    }

    if (Ub) throw a = Vb, Ub = !1, Vb = null, a;
  }

  function G(a, b) {
    var c = $e(b),
        d = a + "__bubble";
    c.has(d) || (af(b, a, 2, !1), c.add(d));
  }

  var bf = "_reactListening" + Math.random().toString(36).slice(2);

  function cf(a) {
    a[bf] || (a[bf] = !0, ba.forEach(function (b) {
      Ye.has(b) || df(b, !1, a, null);
      df(b, !0, a, null);
    }));
  }

  function df(a, b, c, d) {
    var e = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 0,
        f = c;
    "selectionchange" === a && 9 !== c.nodeType && (f = c.ownerDocument);

    if (null !== d && !b && Ye.has(a)) {
      if ("scroll" !== a) return;
      e |= 2;
      f = d;
    }

    var g = $e(f),
        h = a + "__" + (b ? "capture" : "bubble");
    g.has(h) || (b && (e |= 4), af(f, a, e, b), g.add(h));
  }

  function af(a, b, c, d) {
    var e = Nc.get(b);

    switch (void 0 === e ? 2 : e) {
      case 0:
        e = gd;
        break;

      case 1:
        e = id;
        break;

      default:
        e = hd;
    }

    c = e.bind(null, b, c, a);
    e = void 0;
    !Pb || "touchstart" !== b && "touchmove" !== b && "wheel" !== b || (e = !0);
    d ? void 0 !== e ? a.addEventListener(b, c, {
      capture: !0,
      passive: e
    }) : a.addEventListener(b, c, !0) : void 0 !== e ? a.addEventListener(b, c, {
      passive: e
    }) : a.addEventListener(b, c, !1);
  }

  function jd(a, b, c, d, e) {
    var f = d;
    if (0 === (b & 1) && 0 === (b & 2) && null !== d) a: for (;;) {
      if (null === d) return;
      var g = d.tag;

      if (3 === g || 4 === g) {
        var h = d.stateNode.containerInfo;
        if (h === e || 8 === h.nodeType && h.parentNode === e) break;
        if (4 === g) for (g = d["return"]; null !== g;) {
          var k = g.tag;
          if (3 === k || 4 === k) if (k = g.stateNode.containerInfo, k === e || 8 === k.nodeType && k.parentNode === e) return;
          g = g["return"];
        }

        for (; null !== h;) {
          g = wc(h);
          if (null === g) return;
          k = g.tag;

          if (5 === k || 6 === k) {
            d = f = g;
            continue a;
          }

          h = h.parentNode;
        }
      }

      d = d["return"];
    }
    Nb(function () {
      var d = f,
          e = xb(c),
          g = [];

      a: {
        var h = Mc.get(a);

        if (void 0 !== h) {
          var k = td,
              x = a;

          switch (a) {
            case "keypress":
              if (0 === od(c)) break a;

            case "keydown":
            case "keyup":
              k = Rd;
              break;

            case "focusin":
              x = "focus";
              k = Fd;
              break;

            case "focusout":
              x = "blur";
              k = Fd;
              break;

            case "beforeblur":
            case "afterblur":
              k = Fd;
              break;

            case "click":
              if (2 === c.button) break a;

            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              k = Bd;
              break;

            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              k = Dd;
              break;

            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              k = Vd;
              break;

            case Ic:
            case Jc:
            case Kc:
              k = Hd;
              break;

            case Lc:
              k = Xd;
              break;

            case "scroll":
              k = vd;
              break;

            case "wheel":
              k = Zd;
              break;

            case "copy":
            case "cut":
            case "paste":
              k = Jd;
              break;

            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              k = Td;
          }

          var w = 0 !== (b & 4),
              z = !w && "scroll" === a,
              u = w ? null !== h ? h + "Capture" : null : h;
          w = [];

          for (var t = d, q; null !== t;) {
            q = t;
            var v = q.stateNode;
            5 === q.tag && null !== v && (q = v, null !== u && (v = Ob(t, u), null != v && w.push(ef(t, v, q))));
            if (z) break;
            t = t["return"];
          }

          0 < w.length && (h = new k(h, x, null, c, e), g.push({
            event: h,
            listeners: w
          }));
        }
      }

      if (0 === (b & 7)) {
        a: {
          h = "mouseover" === a || "pointerover" === a;
          k = "mouseout" === a || "pointerout" === a;
          if (h && 0 === (b & 16) && (x = c.relatedTarget || c.fromElement) && (wc(x) || x[ff])) break a;

          if (k || h) {
            h = e.window === e ? e : (h = e.ownerDocument) ? h.defaultView || h.parentWindow : window;

            if (k) {
              if (x = c.relatedTarget || c.toElement, k = d, x = x ? wc(x) : null, null !== x && (z = Zb(x), x !== z || 5 !== x.tag && 6 !== x.tag)) x = null;
            } else k = null, x = d;

            if (k !== x) {
              w = Bd;
              v = "onMouseLeave";
              u = "onMouseEnter";
              t = "mouse";
              if ("pointerout" === a || "pointerover" === a) w = Td, v = "onPointerLeave", u = "onPointerEnter", t = "pointer";
              z = null == k ? h : ue(k);
              q = null == x ? h : ue(x);
              h = new w(v, t + "leave", k, c, e);
              h.target = z;
              h.relatedTarget = q;
              v = null;
              wc(e) === d && (w = new w(u, t + "enter", x, c, e), w.target = q, w.relatedTarget = z, v = w);
              z = v;
              if (k && x) b: {
                w = k;
                u = x;
                t = 0;

                for (q = w; q; q = gf(q)) {
                  t++;
                }

                q = 0;

                for (v = u; v; v = gf(v)) {
                  q++;
                }

                for (; 0 < t - q;) {
                  w = gf(w), t--;
                }

                for (; 0 < q - t;) {
                  u = gf(u), q--;
                }

                for (; t--;) {
                  if (w === u || null !== u && w === u.alternate) break b;
                  w = gf(w);
                  u = gf(u);
                }

                w = null;
              } else w = null;
              null !== k && hf(g, h, k, w, !1);
              null !== x && null !== z && hf(g, z, x, w, !0);
            }
          }
        }

        a: {
          h = d ? ue(d) : window;
          k = h.nodeName && h.nodeName.toLowerCase();
          if ("select" === k || "input" === k && "file" === h.type) var J = ve;else if (me(h)) {
            if (we) J = Fe;else {
              J = De;
              var K = Ce;
            }
          } else (k = h.nodeName) && "input" === k.toLowerCase() && ("checkbox" === h.type || "radio" === h.type) && (J = Ee);

          if (J && (J = J(a, d))) {
            ne(g, J, c, e);
            break a;
          }

          K && K(a, h, d);
          "focusout" === a && (K = h._wrapperState) && K.controlled && "number" === h.type && bb(h, "number", h.value);
        }

        K = d ? ue(d) : window;

        switch (a) {
          case "focusin":
            if (me(K) || "true" === K.contentEditable) Qe = K, Re = d, Se = null;
            break;

          case "focusout":
            Se = Re = Qe = null;
            break;

          case "mousedown":
            Te = !0;
            break;

          case "contextmenu":
          case "mouseup":
          case "dragend":
            Te = !1;
            Ue(g, c, e);
            break;

          case "selectionchange":
            if (Pe) break;

          case "keydown":
          case "keyup":
            Ue(g, c, e);
        }

        var Q;
        if (ae) b: {
          switch (a) {
            case "compositionstart":
              var L = "onCompositionStart";
              break b;

            case "compositionend":
              L = "onCompositionEnd";
              break b;

            case "compositionupdate":
              L = "onCompositionUpdate";
              break b;
          }

          L = void 0;
        } else ie ? ge(a, c) && (L = "onCompositionEnd") : "keydown" === a && 229 === c.keyCode && (L = "onCompositionStart");
        L && (de && "ko" !== c.locale && (ie || "onCompositionStart" !== L ? "onCompositionEnd" === L && ie && (Q = nd()) : (kd = e, ld = "value" in kd ? kd.value : kd.textContent, ie = !0)), K = oe(d, L), 0 < K.length && (L = new Ld(L, a, null, c, e), g.push({
          event: L,
          listeners: K
        }), Q ? L.data = Q : (Q = he(c), null !== Q && (L.data = Q))));
        if (Q = ce ? je(a, c) : ke(a, c)) d = oe(d, "onBeforeInput"), 0 < d.length && (e = new Ld("onBeforeInput", "beforeinput", null, c, e), g.push({
          event: e,
          listeners: d
        }), e.data = Q);
      }

      se(g, b);
    });
  }

  function ef(a, b, c) {
    return {
      instance: a,
      listener: b,
      currentTarget: c
    };
  }

  function oe(a, b) {
    for (var c = b + "Capture", d = []; null !== a;) {
      var e = a,
          f = e.stateNode;
      5 === e.tag && null !== f && (e = f, f = Ob(a, c), null != f && d.unshift(ef(a, f, e)), f = Ob(a, b), null != f && d.push(ef(a, f, e)));
      a = a["return"];
    }

    return d;
  }

  function gf(a) {
    if (null === a) return null;

    do {
      a = a["return"];
    } while (a && 5 !== a.tag);

    return a ? a : null;
  }

  function hf(a, b, c, d, e) {
    for (var f = b._reactName, g = []; null !== c && c !== d;) {
      var h = c,
          k = h.alternate,
          l = h.stateNode;
      if (null !== k && k === d) break;
      5 === h.tag && null !== l && (h = l, e ? (k = Ob(c, f), null != k && g.unshift(ef(c, k, h))) : e || (k = Ob(c, f), null != k && g.push(ef(c, k, h))));
      c = c["return"];
    }

    0 !== g.length && a.push({
      event: b,
      listeners: g
    });
  }

  function jf() {}

  var kf = null,
      lf = null;

  function mf(a, b) {
    switch (a) {
      case "button":
      case "input":
      case "select":
      case "textarea":
        return !!b.autoFocus;
    }

    return !1;
  }

  function nf(a, b) {
    return "textarea" === a || "option" === a || "noscript" === a || "string" === typeof b.children || "number" === typeof b.children || "object" === _typeof(b.dangerouslySetInnerHTML) && null !== b.dangerouslySetInnerHTML && null != b.dangerouslySetInnerHTML.__html;
  }

  var of = "function" === typeof setTimeout ? setTimeout : void 0,
      pf = "function" === typeof clearTimeout ? clearTimeout : void 0;

  function qf(a) {
    1 === a.nodeType ? a.textContent = "" : 9 === a.nodeType && (a = a.body, null != a && (a.textContent = ""));
  }

  function rf(a) {
    for (; null != a; a = a.nextSibling) {
      var b = a.nodeType;
      if (1 === b || 3 === b) break;
    }

    return a;
  }

  function sf(a) {
    a = a.previousSibling;

    for (var b = 0; a;) {
      if (8 === a.nodeType) {
        var c = a.data;

        if ("$" === c || "$!" === c || "$?" === c) {
          if (0 === b) return a;
          b--;
        } else "/$" === c && b++;
      }

      a = a.previousSibling;
    }

    return null;
  }

  var tf = 0;

  function uf(a) {
    return {
      $$typeof: Ga,
      toString: a,
      valueOf: a
    };
  }

  var vf = Math.random().toString(36).slice(2),
      wf = "__reactFiber$" + vf,
      xf = "__reactProps$" + vf,
      ff = "__reactContainer$" + vf,
      yf = "__reactEvents$" + vf;

  function wc(a) {
    var b = a[wf];
    if (b) return b;

    for (var c = a.parentNode; c;) {
      if (b = c[ff] || c[wf]) {
        c = b.alternate;
        if (null !== b.child || null !== c && null !== c.child) for (a = sf(a); null !== a;) {
          if (c = a[wf]) return c;
          a = sf(a);
        }
        return b;
      }

      a = c;
      c = a.parentNode;
    }

    return null;
  }

  function Cb(a) {
    a = a[wf] || a[ff];
    return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
  }

  function ue(a) {
    if (5 === a.tag || 6 === a.tag) return a.stateNode;
    throw Error(y(33));
  }

  function Db(a) {
    return a[xf] || null;
  }

  function $e(a) {
    var b = a[yf];
    void 0 === b && (b = a[yf] = new Set());
    return b;
  }

  var zf = [],
      Af = -1;

  function Bf(a) {
    return {
      current: a
    };
  }

  function H(a) {
    0 > Af || (a.current = zf[Af], zf[Af] = null, Af--);
  }

  function I(a, b) {
    Af++;
    zf[Af] = a.current;
    a.current = b;
  }

  var Cf = {},
      M = Bf(Cf),
      N = Bf(!1),
      Df = Cf;

  function Ef(a, b) {
    var c = a.type.contextTypes;
    if (!c) return Cf;
    var d = a.stateNode;
    if (d && d.__reactInternalMemoizedUnmaskedChildContext === b) return d.__reactInternalMemoizedMaskedChildContext;
    var e = {},
        f;

    for (f in c) {
      e[f] = b[f];
    }

    d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
    return e;
  }

  function Ff(a) {
    a = a.childContextTypes;
    return null !== a && void 0 !== a;
  }

  function Gf() {
    H(N);
    H(M);
  }

  function Hf(a, b, c) {
    if (M.current !== Cf) throw Error(y(168));
    I(M, b);
    I(N, c);
  }

  function If(a, b, c) {
    var d = a.stateNode;
    a = b.childContextTypes;
    if ("function" !== typeof d.getChildContext) return c;
    d = d.getChildContext();

    for (var e in d) {
      if (!(e in a)) throw Error(y(108, Ra(b) || "Unknown", e));
    }

    return m({}, c, d);
  }

  function Jf(a) {
    a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Cf;
    Df = M.current;
    I(M, a);
    I(N, N.current);
    return !0;
  }

  function Kf(a, b, c) {
    var d = a.stateNode;
    if (!d) throw Error(y(169));
    c ? (a = If(a, b, Df), d.__reactInternalMemoizedMergedChildContext = a, H(N), H(M), I(M, a)) : H(N);
    I(N, c);
  }

  var Lf = null,
      Mf = null,
      Nf = r.unstable_runWithPriority,
      Of = r.unstable_scheduleCallback,
      Pf = r.unstable_cancelCallback,
      Qf = r.unstable_shouldYield,
      Rf = r.unstable_requestPaint,
      Sf = r.unstable_now,
      Tf = r.unstable_getCurrentPriorityLevel,
      Uf = r.unstable_ImmediatePriority,
      Vf = r.unstable_UserBlockingPriority,
      Wf = r.unstable_NormalPriority,
      Xf = r.unstable_LowPriority,
      Yf = r.unstable_IdlePriority,
      Zf = {},
      $f = void 0 !== Rf ? Rf : function () {},
      ag = null,
      bg = null,
      cg = !1,
      dg = Sf(),
      O = 1E4 > dg ? Sf : function () {
    return Sf() - dg;
  };

  function eg() {
    switch (Tf()) {
      case Uf:
        return 99;

      case Vf:
        return 98;

      case Wf:
        return 97;

      case Xf:
        return 96;

      case Yf:
        return 95;

      default:
        throw Error(y(332));
    }
  }

  function fg(a) {
    switch (a) {
      case 99:
        return Uf;

      case 98:
        return Vf;

      case 97:
        return Wf;

      case 96:
        return Xf;

      case 95:
        return Yf;

      default:
        throw Error(y(332));
    }
  }

  function gg(a, b) {
    a = fg(a);
    return Nf(a, b);
  }

  function hg(a, b, c) {
    a = fg(a);
    return Of(a, b, c);
  }

  function ig() {
    if (null !== bg) {
      var a = bg;
      bg = null;
      Pf(a);
    }

    jg();
  }

  function jg() {
    if (!cg && null !== ag) {
      cg = !0;
      var a = 0;

      try {
        var b = ag;
        gg(99, function () {
          for (; a < b.length; a++) {
            var c = b[a];

            do {
              c = c(!0);
            } while (null !== c);
          }
        });
        ag = null;
      } catch (c) {
        throw null !== ag && (ag = ag.slice(a + 1)), Of(Uf, ig), c;
      } finally {
        cg = !1;
      }
    }
  }

  var kg = ra.ReactCurrentBatchConfig;

  function lg(a, b) {
    if (a && a.defaultProps) {
      b = m({}, b);
      a = a.defaultProps;

      for (var c in a) {
        void 0 === b[c] && (b[c] = a[c]);
      }

      return b;
    }

    return b;
  }

  var mg = Bf(null),
      ng = null,
      og = null,
      pg = null;

  function qg() {
    pg = og = ng = null;
  }

  function rg(a) {
    var b = mg.current;
    H(mg);
    a.type._context._currentValue = b;
  }

  function sg(a, b) {
    for (; null !== a;) {
      var c = a.alternate;
      if ((a.childLanes & b) === b) {
        if (null === c || (c.childLanes & b) === b) break;else c.childLanes |= b;
      } else a.childLanes |= b, null !== c && (c.childLanes |= b);
      a = a["return"];
    }
  }

  function tg(a, b) {
    ng = a;
    pg = og = null;
    a = a.dependencies;
    null !== a && null !== a.firstContext && (0 !== (a.lanes & b) && (ug = !0), a.firstContext = null);
  }

  function vg(a, b) {
    if (pg !== a && !1 !== b && 0 !== b) {
      if ("number" !== typeof b || 1073741823 === b) pg = a, b = 1073741823;
      b = {
        context: a,
        observedBits: b,
        next: null
      };

      if (null === og) {
        if (null === ng) throw Error(y(308));
        og = b;
        ng.dependencies = {
          lanes: 0,
          firstContext: b,
          responders: null
        };
      } else og = og.next = b;
    }

    return a._currentValue;
  }

  var wg = !1;

  function xg(a) {
    a.updateQueue = {
      baseState: a.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: {
        pending: null
      },
      effects: null
    };
  }

  function yg(a, b) {
    a = a.updateQueue;
    b.updateQueue === a && (b.updateQueue = {
      baseState: a.baseState,
      firstBaseUpdate: a.firstBaseUpdate,
      lastBaseUpdate: a.lastBaseUpdate,
      shared: a.shared,
      effects: a.effects
    });
  }

  function zg(a, b) {
    return {
      eventTime: a,
      lane: b,
      tag: 0,
      payload: null,
      callback: null,
      next: null
    };
  }

  function Ag(a, b) {
    a = a.updateQueue;

    if (null !== a) {
      a = a.shared;
      var c = a.pending;
      null === c ? b.next = b : (b.next = c.next, c.next = b);
      a.pending = b;
    }
  }

  function Bg(a, b) {
    var c = a.updateQueue,
        d = a.alternate;

    if (null !== d && (d = d.updateQueue, c === d)) {
      var e = null,
          f = null;
      c = c.firstBaseUpdate;

      if (null !== c) {
        do {
          var g = {
            eventTime: c.eventTime,
            lane: c.lane,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null
          };
          null === f ? e = f = g : f = f.next = g;
          c = c.next;
        } while (null !== c);

        null === f ? e = f = b : f = f.next = b;
      } else e = f = b;

      c = {
        baseState: d.baseState,
        firstBaseUpdate: e,
        lastBaseUpdate: f,
        shared: d.shared,
        effects: d.effects
      };
      a.updateQueue = c;
      return;
    }

    a = c.lastBaseUpdate;
    null === a ? c.firstBaseUpdate = b : a.next = b;
    c.lastBaseUpdate = b;
  }

  function Cg(a, b, c, d) {
    var e = a.updateQueue;
    wg = !1;
    var f = e.firstBaseUpdate,
        g = e.lastBaseUpdate,
        h = e.shared.pending;

    if (null !== h) {
      e.shared.pending = null;
      var k = h,
          l = k.next;
      k.next = null;
      null === g ? f = l : g.next = l;
      g = k;
      var n = a.alternate;

      if (null !== n) {
        n = n.updateQueue;
        var A = n.lastBaseUpdate;
        A !== g && (null === A ? n.firstBaseUpdate = l : A.next = l, n.lastBaseUpdate = k);
      }
    }

    if (null !== f) {
      A = e.baseState;
      g = 0;
      n = l = k = null;

      do {
        h = f.lane;
        var p = f.eventTime;

        if ((d & h) === h) {
          null !== n && (n = n.next = {
            eventTime: p,
            lane: 0,
            tag: f.tag,
            payload: f.payload,
            callback: f.callback,
            next: null
          });

          a: {
            var C = a,
                x = f;
            h = b;
            p = c;

            switch (x.tag) {
              case 1:
                C = x.payload;

                if ("function" === typeof C) {
                  A = C.call(p, A, h);
                  break a;
                }

                A = C;
                break a;

              case 3:
                C.flags = C.flags & -4097 | 64;

              case 0:
                C = x.payload;
                h = "function" === typeof C ? C.call(p, A, h) : C;
                if (null === h || void 0 === h) break a;
                A = m({}, A, h);
                break a;

              case 2:
                wg = !0;
            }
          }

          null !== f.callback && (a.flags |= 32, h = e.effects, null === h ? e.effects = [f] : h.push(f));
        } else p = {
          eventTime: p,
          lane: h,
          tag: f.tag,
          payload: f.payload,
          callback: f.callback,
          next: null
        }, null === n ? (l = n = p, k = A) : n = n.next = p, g |= h;

        f = f.next;
        if (null === f) if (h = e.shared.pending, null === h) break;else f = h.next, h.next = null, e.lastBaseUpdate = h, e.shared.pending = null;
      } while (1);

      null === n && (k = A);
      e.baseState = k;
      e.firstBaseUpdate = l;
      e.lastBaseUpdate = n;
      Dg |= g;
      a.lanes = g;
      a.memoizedState = A;
    }
  }

  function Eg(a, b, c) {
    a = b.effects;
    b.effects = null;
    if (null !== a) for (b = 0; b < a.length; b++) {
      var d = a[b],
          e = d.callback;

      if (null !== e) {
        d.callback = null;
        d = c;
        if ("function" !== typeof e) throw Error(y(191, e));
        e.call(d);
      }
    }
  }

  var Fg = new aa.Component().refs;

  function Gg(a, b, c, d) {
    b = a.memoizedState;
    c = c(d, b);
    c = null === c || void 0 === c ? b : m({}, b, c);
    a.memoizedState = c;
    0 === a.lanes && (a.updateQueue.baseState = c);
  }

  var Kg = {
    isMounted: function isMounted(a) {
      return (a = a._reactInternals) ? Zb(a) === a : !1;
    },
    enqueueSetState: function enqueueSetState(a, b, c) {
      a = a._reactInternals;
      var d = Hg(),
          e = Ig(a),
          f = zg(d, e);
      f.payload = b;
      void 0 !== c && null !== c && (f.callback = c);
      Ag(a, f);
      Jg(a, e, d);
    },
    enqueueReplaceState: function enqueueReplaceState(a, b, c) {
      a = a._reactInternals;
      var d = Hg(),
          e = Ig(a),
          f = zg(d, e);
      f.tag = 1;
      f.payload = b;
      void 0 !== c && null !== c && (f.callback = c);
      Ag(a, f);
      Jg(a, e, d);
    },
    enqueueForceUpdate: function enqueueForceUpdate(a, b) {
      a = a._reactInternals;
      var c = Hg(),
          d = Ig(a),
          e = zg(c, d);
      e.tag = 2;
      void 0 !== b && null !== b && (e.callback = b);
      Ag(a, e);
      Jg(a, d, c);
    }
  };

  function Lg(a, b, c, d, e, f, g) {
    a = a.stateNode;
    return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f, g) : b.prototype && b.prototype.isPureReactComponent ? !Je(c, d) || !Je(e, f) : !0;
  }

  function Mg(a, b, c) {
    var d = !1,
        e = Cf;
    var f = b.contextType;
    "object" === _typeof(f) && null !== f ? f = vg(f) : (e = Ff(b) ? Df : M.current, d = b.contextTypes, f = (d = null !== d && void 0 !== d) ? Ef(a, e) : Cf);
    b = new b(c, f);
    a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
    b.updater = Kg;
    a.stateNode = b;
    b._reactInternals = a;
    d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f);
    return b;
  }

  function Ng(a, b, c, d) {
    a = b.state;
    "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
    "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
    b.state !== a && Kg.enqueueReplaceState(b, b.state, null);
  }

  function Og(a, b, c, d) {
    var e = a.stateNode;
    e.props = c;
    e.state = a.memoizedState;
    e.refs = Fg;
    xg(a);
    var f = b.contextType;
    "object" === _typeof(f) && null !== f ? e.context = vg(f) : (f = Ff(b) ? Df : M.current, e.context = Ef(a, f));
    Cg(a, c, e, d);
    e.state = a.memoizedState;
    f = b.getDerivedStateFromProps;
    "function" === typeof f && (Gg(a, b, f, c), e.state = a.memoizedState);
    "function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b !== e.state && Kg.enqueueReplaceState(e, e.state, null), Cg(a, c, e, d), e.state = a.memoizedState);
    "function" === typeof e.componentDidMount && (a.flags |= 4);
  }

  var Pg = Array.isArray;

  function Qg(a, b, c) {
    a = c.ref;

    if (null !== a && "function" !== typeof a && "object" !== _typeof(a)) {
      if (c._owner) {
        c = c._owner;

        if (c) {
          if (1 !== c.tag) throw Error(y(309));
          var d = c.stateNode;
        }

        if (!d) throw Error(y(147, a));
        var e = "" + a;
        if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === e) return b.ref;

        b = function b(a) {
          var b = d.refs;
          b === Fg && (b = d.refs = {});
          null === a ? delete b[e] : b[e] = a;
        };

        b._stringRef = e;
        return b;
      }

      if ("string" !== typeof a) throw Error(y(284));
      if (!c._owner) throw Error(y(290, a));
    }

    return a;
  }

  function Rg(a, b) {
    if ("textarea" !== a.type) throw Error(y(31, "[object Object]" === Object.prototype.toString.call(b) ? "object with keys {" + Object.keys(b).join(", ") + "}" : b));
  }

  function Sg(a) {
    function b(b, c) {
      if (a) {
        var d = b.lastEffect;
        null !== d ? (d.nextEffect = c, b.lastEffect = c) : b.firstEffect = b.lastEffect = c;
        c.nextEffect = null;
        c.flags = 8;
      }
    }

    function c(c, d) {
      if (!a) return null;

      for (; null !== d;) {
        b(c, d), d = d.sibling;
      }

      return null;
    }

    function d(a, b) {
      for (a = new Map(); null !== b;) {
        null !== b.key ? a.set(b.key, b) : a.set(b.index, b), b = b.sibling;
      }

      return a;
    }

    function e(a, b) {
      a = Tg(a, b);
      a.index = 0;
      a.sibling = null;
      return a;
    }

    function f(b, c, d) {
      b.index = d;
      if (!a) return c;
      d = b.alternate;
      if (null !== d) return d = d.index, d < c ? (b.flags = 2, c) : d;
      b.flags = 2;
      return c;
    }

    function g(b) {
      a && null === b.alternate && (b.flags = 2);
      return b;
    }

    function h(a, b, c, d) {
      if (null === b || 6 !== b.tag) return b = Ug(c, a.mode, d), b["return"] = a, b;
      b = e(b, c);
      b["return"] = a;
      return b;
    }

    function k(a, b, c, d) {
      if (null !== b && b.elementType === c.type) return d = e(b, c.props), d.ref = Qg(a, b, c), d["return"] = a, d;
      d = Vg(c.type, c.key, c.props, null, a.mode, d);
      d.ref = Qg(a, b, c);
      d["return"] = a;
      return d;
    }

    function l(a, b, c, d) {
      if (null === b || 4 !== b.tag || b.stateNode.containerInfo !== c.containerInfo || b.stateNode.implementation !== c.implementation) return b = Wg(c, a.mode, d), b["return"] = a, b;
      b = e(b, c.children || []);
      b["return"] = a;
      return b;
    }

    function n(a, b, c, d, f) {
      if (null === b || 7 !== b.tag) return b = Xg(c, a.mode, d, f), b["return"] = a, b;
      b = e(b, c);
      b["return"] = a;
      return b;
    }

    function A(a, b, c) {
      if ("string" === typeof b || "number" === typeof b) return b = Ug("" + b, a.mode, c), b["return"] = a, b;

      if ("object" === _typeof(b) && null !== b) {
        switch (b.$$typeof) {
          case sa:
            return c = Vg(b.type, b.key, b.props, null, a.mode, c), c.ref = Qg(a, null, b), c["return"] = a, c;

          case ta:
            return b = Wg(b, a.mode, c), b["return"] = a, b;
        }

        if (Pg(b) || La(b)) return b = Xg(b, a.mode, c, null), b["return"] = a, b;
        Rg(a, b);
      }

      return null;
    }

    function p(a, b, c, d) {
      var e = null !== b ? b.key : null;
      if ("string" === typeof c || "number" === typeof c) return null !== e ? null : h(a, b, "" + c, d);

      if ("object" === _typeof(c) && null !== c) {
        switch (c.$$typeof) {
          case sa:
            return c.key === e ? c.type === ua ? n(a, b, c.props.children, d, e) : k(a, b, c, d) : null;

          case ta:
            return c.key === e ? l(a, b, c, d) : null;
        }

        if (Pg(c) || La(c)) return null !== e ? null : n(a, b, c, d, null);
        Rg(a, c);
      }

      return null;
    }

    function C(a, b, c, d, e) {
      if ("string" === typeof d || "number" === typeof d) return a = a.get(c) || null, h(b, a, "" + d, e);

      if ("object" === _typeof(d) && null !== d) {
        switch (d.$$typeof) {
          case sa:
            return a = a.get(null === d.key ? c : d.key) || null, d.type === ua ? n(b, a, d.props.children, e, d.key) : k(b, a, d, e);

          case ta:
            return a = a.get(null === d.key ? c : d.key) || null, l(b, a, d, e);
        }

        if (Pg(d) || La(d)) return a = a.get(c) || null, n(b, a, d, e, null);
        Rg(b, d);
      }

      return null;
    }

    function x(e, g, h, k) {
      for (var l = null, t = null, u = g, z = g = 0, q = null; null !== u && z < h.length; z++) {
        u.index > z ? (q = u, u = null) : q = u.sibling;
        var n = p(e, u, h[z], k);

        if (null === n) {
          null === u && (u = q);
          break;
        }

        a && u && null === n.alternate && b(e, u);
        g = f(n, g, z);
        null === t ? l = n : t.sibling = n;
        t = n;
        u = q;
      }

      if (z === h.length) return c(e, u), l;

      if (null === u) {
        for (; z < h.length; z++) {
          u = A(e, h[z], k), null !== u && (g = f(u, g, z), null === t ? l = u : t.sibling = u, t = u);
        }

        return l;
      }

      for (u = d(e, u); z < h.length; z++) {
        q = C(u, e, z, h[z], k), null !== q && (a && null !== q.alternate && u["delete"](null === q.key ? z : q.key), g = f(q, g, z), null === t ? l = q : t.sibling = q, t = q);
      }

      a && u.forEach(function (a) {
        return b(e, a);
      });
      return l;
    }

    function w(e, g, h, k) {
      var l = La(h);
      if ("function" !== typeof l) throw Error(y(150));
      h = l.call(h);
      if (null == h) throw Error(y(151));

      for (var t = l = null, u = g, z = g = 0, q = null, n = h.next(); null !== u && !n.done; z++, n = h.next()) {
        u.index > z ? (q = u, u = null) : q = u.sibling;
        var w = p(e, u, n.value, k);

        if (null === w) {
          null === u && (u = q);
          break;
        }

        a && u && null === w.alternate && b(e, u);
        g = f(w, g, z);
        null === t ? l = w : t.sibling = w;
        t = w;
        u = q;
      }

      if (n.done) return c(e, u), l;

      if (null === u) {
        for (; !n.done; z++, n = h.next()) {
          n = A(e, n.value, k), null !== n && (g = f(n, g, z), null === t ? l = n : t.sibling = n, t = n);
        }

        return l;
      }

      for (u = d(e, u); !n.done; z++, n = h.next()) {
        n = C(u, e, z, n.value, k), null !== n && (a && null !== n.alternate && u["delete"](null === n.key ? z : n.key), g = f(n, g, z), null === t ? l = n : t.sibling = n, t = n);
      }

      a && u.forEach(function (a) {
        return b(e, a);
      });
      return l;
    }

    return function (a, d, f, h) {
      var k = "object" === _typeof(f) && null !== f && f.type === ua && null === f.key;
      k && (f = f.props.children);
      var l = "object" === _typeof(f) && null !== f;
      if (l) switch (f.$$typeof) {
        case sa:
          a: {
            l = f.key;

            for (k = d; null !== k;) {
              if (k.key === l) {
                switch (k.tag) {
                  case 7:
                    if (f.type === ua) {
                      c(a, k.sibling);
                      d = e(k, f.props.children);
                      d["return"] = a;
                      a = d;
                      break a;
                    }

                    break;

                  default:
                    if (k.elementType === f.type) {
                      c(a, k.sibling);
                      d = e(k, f.props);
                      d.ref = Qg(a, k, f);
                      d["return"] = a;
                      a = d;
                      break a;
                    }

                }

                c(a, k);
                break;
              } else b(a, k);

              k = k.sibling;
            }

            f.type === ua ? (d = Xg(f.props.children, a.mode, h, f.key), d["return"] = a, a = d) : (h = Vg(f.type, f.key, f.props, null, a.mode, h), h.ref = Qg(a, d, f), h["return"] = a, a = h);
          }

          return g(a);

        case ta:
          a: {
            for (k = f.key; null !== d;) {
              if (d.key === k) {
                if (4 === d.tag && d.stateNode.containerInfo === f.containerInfo && d.stateNode.implementation === f.implementation) {
                  c(a, d.sibling);
                  d = e(d, f.children || []);
                  d["return"] = a;
                  a = d;
                  break a;
                } else {
                  c(a, d);
                  break;
                }
              } else b(a, d);
              d = d.sibling;
            }

            d = Wg(f, a.mode, h);
            d["return"] = a;
            a = d;
          }

          return g(a);
      }
      if ("string" === typeof f || "number" === typeof f) return f = "" + f, null !== d && 6 === d.tag ? (c(a, d.sibling), d = e(d, f), d["return"] = a, a = d) : (c(a, d), d = Ug(f, a.mode, h), d["return"] = a, a = d), g(a);
      if (Pg(f)) return x(a, d, f, h);
      if (La(f)) return w(a, d, f, h);
      l && Rg(a, f);
      if ("undefined" === typeof f && !k) switch (a.tag) {
        case 1:
        case 22:
        case 0:
        case 11:
        case 15:
          throw Error(y(152, Ra(a.type) || "Component"));
      }
      return c(a, d);
    };
  }

  var Yg = Sg(!0),
      Zg = Sg(!1),
      $g = {},
      ah = Bf($g),
      bh = Bf($g),
      ch = Bf($g);

  function dh(a) {
    if (a === $g) throw Error(y(174));
    return a;
  }

  function eh(a, b) {
    I(ch, b);
    I(bh, a);
    I(ah, $g);
    a = b.nodeType;

    switch (a) {
      case 9:
      case 11:
        b = (b = b.documentElement) ? b.namespaceURI : mb(null, "");
        break;

      default:
        a = 8 === a ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = mb(b, a);
    }

    H(ah);
    I(ah, b);
  }

  function fh() {
    H(ah);
    H(bh);
    H(ch);
  }

  function gh(a) {
    dh(ch.current);
    var b = dh(ah.current);
    var c = mb(b, a.type);
    b !== c && (I(bh, a), I(ah, c));
  }

  function hh(a) {
    bh.current === a && (H(ah), H(bh));
  }

  var P = Bf(0);

  function ih(a) {
    for (var b = a; null !== b;) {
      if (13 === b.tag) {
        var c = b.memoizedState;
        if (null !== c && (c = c.dehydrated, null === c || "$?" === c.data || "$!" === c.data)) return b;
      } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
        if (0 !== (b.flags & 64)) return b;
      } else if (null !== b.child) {
        b.child["return"] = b;
        b = b.child;
        continue;
      }

      if (b === a) break;

      for (; null === b.sibling;) {
        if (null === b["return"] || b["return"] === a) return null;
        b = b["return"];
      }

      b.sibling["return"] = b["return"];
      b = b.sibling;
    }

    return null;
  }

  var jh = null,
      kh = null,
      lh = !1;

  function mh(a, b) {
    var c = nh(5, null, null, 0);
    c.elementType = "DELETED";
    c.type = "DELETED";
    c.stateNode = b;
    c["return"] = a;
    c.flags = 8;
    null !== a.lastEffect ? (a.lastEffect.nextEffect = c, a.lastEffect = c) : a.firstEffect = a.lastEffect = c;
  }

  function oh(a, b) {
    switch (a.tag) {
      case 5:
        var c = a.type;
        b = 1 !== b.nodeType || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
        return null !== b ? (a.stateNode = b, !0) : !1;

      case 6:
        return b = "" === a.pendingProps || 3 !== b.nodeType ? null : b, null !== b ? (a.stateNode = b, !0) : !1;

      case 13:
        return !1;

      default:
        return !1;
    }
  }

  function ph(a) {
    if (lh) {
      var b = kh;

      if (b) {
        var c = b;

        if (!oh(a, b)) {
          b = rf(c.nextSibling);

          if (!b || !oh(a, b)) {
            a.flags = a.flags & -1025 | 2;
            lh = !1;
            jh = a;
            return;
          }

          mh(jh, c);
        }

        jh = a;
        kh = rf(b.firstChild);
      } else a.flags = a.flags & -1025 | 2, lh = !1, jh = a;
    }
  }

  function qh(a) {
    for (a = a["return"]; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag;) {
      a = a["return"];
    }

    jh = a;
  }

  function rh(a) {
    if (a !== jh) return !1;
    if (!lh) return qh(a), lh = !0, !1;
    var b = a.type;
    if (5 !== a.tag || "head" !== b && "body" !== b && !nf(b, a.memoizedProps)) for (b = kh; b;) {
      mh(a, b), b = rf(b.nextSibling);
    }
    qh(a);

    if (13 === a.tag) {
      a = a.memoizedState;
      a = null !== a ? a.dehydrated : null;
      if (!a) throw Error(y(317));

      a: {
        a = a.nextSibling;

        for (b = 0; a;) {
          if (8 === a.nodeType) {
            var c = a.data;

            if ("/$" === c) {
              if (0 === b) {
                kh = rf(a.nextSibling);
                break a;
              }

              b--;
            } else "$" !== c && "$!" !== c && "$?" !== c || b++;
          }

          a = a.nextSibling;
        }

        kh = null;
      }
    } else kh = jh ? rf(a.stateNode.nextSibling) : null;

    return !0;
  }

  function sh() {
    kh = jh = null;
    lh = !1;
  }

  var th = [];

  function uh() {
    for (var a = 0; a < th.length; a++) {
      th[a]._workInProgressVersionPrimary = null;
    }

    th.length = 0;
  }

  var vh = ra.ReactCurrentDispatcher,
      wh = ra.ReactCurrentBatchConfig,
      xh = 0,
      R = null,
      S = null,
      T = null,
      yh = !1,
      zh = !1;

  function Ah() {
    throw Error(y(321));
  }

  function Bh(a, b) {
    if (null === b) return !1;

    for (var c = 0; c < b.length && c < a.length; c++) {
      if (!He(a[c], b[c])) return !1;
    }

    return !0;
  }

  function Ch(a, b, c, d, e, f) {
    xh = f;
    R = b;
    b.memoizedState = null;
    b.updateQueue = null;
    b.lanes = 0;
    vh.current = null === a || null === a.memoizedState ? Dh : Eh;
    a = c(d, e);

    if (zh) {
      f = 0;

      do {
        zh = !1;
        if (!(25 > f)) throw Error(y(301));
        f += 1;
        T = S = null;
        b.updateQueue = null;
        vh.current = Fh;
        a = c(d, e);
      } while (zh);
    }

    vh.current = Gh;
    b = null !== S && null !== S.next;
    xh = 0;
    T = S = R = null;
    yh = !1;
    if (b) throw Error(y(300));
    return a;
  }

  function Hh() {
    var a = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    null === T ? R.memoizedState = T = a : T = T.next = a;
    return T;
  }

  function Ih() {
    if (null === S) {
      var a = R.alternate;
      a = null !== a ? a.memoizedState : null;
    } else a = S.next;

    var b = null === T ? R.memoizedState : T.next;
    if (null !== b) T = b, S = a;else {
      if (null === a) throw Error(y(310));
      S = a;
      a = {
        memoizedState: S.memoizedState,
        baseState: S.baseState,
        baseQueue: S.baseQueue,
        queue: S.queue,
        next: null
      };
      null === T ? R.memoizedState = T = a : T = T.next = a;
    }
    return T;
  }

  function Jh(a, b) {
    return "function" === typeof b ? b(a) : b;
  }

  function Kh(a) {
    var b = Ih(),
        c = b.queue;
    if (null === c) throw Error(y(311));
    c.lastRenderedReducer = a;
    var d = S,
        e = d.baseQueue,
        f = c.pending;

    if (null !== f) {
      if (null !== e) {
        var g = e.next;
        e.next = f.next;
        f.next = g;
      }

      d.baseQueue = e = f;
      c.pending = null;
    }

    if (null !== e) {
      e = e.next;
      d = d.baseState;
      var h = g = f = null,
          k = e;

      do {
        var l = k.lane;
        if ((xh & l) === l) null !== h && (h = h.next = {
          lane: 0,
          action: k.action,
          eagerReducer: k.eagerReducer,
          eagerState: k.eagerState,
          next: null
        }), d = k.eagerReducer === a ? k.eagerState : a(d, k.action);else {
          var n = {
            lane: l,
            action: k.action,
            eagerReducer: k.eagerReducer,
            eagerState: k.eagerState,
            next: null
          };
          null === h ? (g = h = n, f = d) : h = h.next = n;
          R.lanes |= l;
          Dg |= l;
        }
        k = k.next;
      } while (null !== k && k !== e);

      null === h ? f = d : h.next = g;
      He(d, b.memoizedState) || (ug = !0);
      b.memoizedState = d;
      b.baseState = f;
      b.baseQueue = h;
      c.lastRenderedState = d;
    }

    return [b.memoizedState, c.dispatch];
  }

  function Lh(a) {
    var b = Ih(),
        c = b.queue;
    if (null === c) throw Error(y(311));
    c.lastRenderedReducer = a;
    var d = c.dispatch,
        e = c.pending,
        f = b.memoizedState;

    if (null !== e) {
      c.pending = null;
      var g = e = e.next;

      do {
        f = a(f, g.action), g = g.next;
      } while (g !== e);

      He(f, b.memoizedState) || (ug = !0);
      b.memoizedState = f;
      null === b.baseQueue && (b.baseState = f);
      c.lastRenderedState = f;
    }

    return [f, d];
  }

  function Mh(a, b, c) {
    var d = b._getVersion;
    d = d(b._source);
    var e = b._workInProgressVersionPrimary;
    if (null !== e) a = e === d;else if (a = a.mutableReadLanes, a = (xh & a) === a) b._workInProgressVersionPrimary = d, th.push(b);
    if (a) return c(b._source);
    th.push(b);
    throw Error(y(350));
  }

  function Nh(a, b, c, d) {
    var e = U;
    if (null === e) throw Error(y(349));
    var f = b._getVersion,
        g = f(b._source),
        h = vh.current,
        k = h.useState(function () {
      return Mh(e, b, c);
    }),
        l = k[1],
        n = k[0];
    k = T;
    var A = a.memoizedState,
        p = A.refs,
        C = p.getSnapshot,
        x = A.source;
    A = A.subscribe;
    var w = R;
    a.memoizedState = {
      refs: p,
      source: b,
      subscribe: d
    };
    h.useEffect(function () {
      p.getSnapshot = c;
      p.setSnapshot = l;
      var a = f(b._source);

      if (!He(g, a)) {
        a = c(b._source);
        He(n, a) || (l(a), a = Ig(w), e.mutableReadLanes |= a & e.pendingLanes);
        a = e.mutableReadLanes;
        e.entangledLanes |= a;

        for (var d = e.entanglements, h = a; 0 < h;) {
          var k = 31 - Vc(h),
              v = 1 << k;
          d[k] |= a;
          h &= ~v;
        }
      }
    }, [c, b, d]);
    h.useEffect(function () {
      return d(b._source, function () {
        var a = p.getSnapshot,
            c = p.setSnapshot;

        try {
          c(a(b._source));
          var d = Ig(w);
          e.mutableReadLanes |= d & e.pendingLanes;
        } catch (q) {
          c(function () {
            throw q;
          });
        }
      });
    }, [b, d]);
    He(C, c) && He(x, b) && He(A, d) || (a = {
      pending: null,
      dispatch: null,
      lastRenderedReducer: Jh,
      lastRenderedState: n
    }, a.dispatch = l = Oh.bind(null, R, a), k.queue = a, k.baseQueue = null, n = Mh(e, b, c), k.memoizedState = k.baseState = n);
    return n;
  }

  function Ph(a, b, c) {
    var d = Ih();
    return Nh(d, a, b, c);
  }

  function Qh(a) {
    var b = Hh();
    "function" === typeof a && (a = a());
    b.memoizedState = b.baseState = a;
    a = b.queue = {
      pending: null,
      dispatch: null,
      lastRenderedReducer: Jh,
      lastRenderedState: a
    };
    a = a.dispatch = Oh.bind(null, R, a);
    return [b.memoizedState, a];
  }

  function Rh(a, b, c, d) {
    a = {
      tag: a,
      create: b,
      destroy: c,
      deps: d,
      next: null
    };
    b = R.updateQueue;
    null === b ? (b = {
      lastEffect: null
    }, R.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, null === c ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
    return a;
  }

  function Sh(a) {
    var b = Hh();
    a = {
      current: a
    };
    return b.memoizedState = a;
  }

  function Th() {
    return Ih().memoizedState;
  }

  function Uh(a, b, c, d) {
    var e = Hh();
    R.flags |= a;
    e.memoizedState = Rh(1 | b, c, void 0, void 0 === d ? null : d);
  }

  function Vh(a, b, c, d) {
    var e = Ih();
    d = void 0 === d ? null : d;
    var f = void 0;

    if (null !== S) {
      var g = S.memoizedState;
      f = g.destroy;

      if (null !== d && Bh(d, g.deps)) {
        Rh(b, c, f, d);
        return;
      }
    }

    R.flags |= a;
    e.memoizedState = Rh(1 | b, c, f, d);
  }

  function Wh(a, b) {
    return Uh(516, 4, a, b);
  }

  function Xh(a, b) {
    return Vh(516, 4, a, b);
  }

  function Yh(a, b) {
    return Vh(4, 2, a, b);
  }

  function Zh(a, b) {
    if ("function" === typeof b) return a = a(), b(a), function () {
      b(null);
    };
    if (null !== b && void 0 !== b) return a = a(), b.current = a, function () {
      b.current = null;
    };
  }

  function $h(a, b, c) {
    c = null !== c && void 0 !== c ? c.concat([a]) : null;
    return Vh(4, 2, Zh.bind(null, b, a), c);
  }

  function ai() {}

  function bi(a, b) {
    var c = Ih();
    b = void 0 === b ? null : b;
    var d = c.memoizedState;
    if (null !== d && null !== b && Bh(b, d[1])) return d[0];
    c.memoizedState = [a, b];
    return a;
  }

  function ci(a, b) {
    var c = Ih();
    b = void 0 === b ? null : b;
    var d = c.memoizedState;
    if (null !== d && null !== b && Bh(b, d[1])) return d[0];
    a = a();
    c.memoizedState = [a, b];
    return a;
  }

  function di(a, b) {
    var c = eg();
    gg(98 > c ? 98 : c, function () {
      a(!0);
    });
    gg(97 < c ? 97 : c, function () {
      var c = wh.transition;
      wh.transition = 1;

      try {
        a(!1), b();
      } finally {
        wh.transition = c;
      }
    });
  }

  function Oh(a, b, c) {
    var d = Hg(),
        e = Ig(a),
        f = {
      lane: e,
      action: c,
      eagerReducer: null,
      eagerState: null,
      next: null
    },
        g = b.pending;
    null === g ? f.next = f : (f.next = g.next, g.next = f);
    b.pending = f;
    g = a.alternate;
    if (a === R || null !== g && g === R) zh = yh = !0;else {
      if (0 === a.lanes && (null === g || 0 === g.lanes) && (g = b.lastRenderedReducer, null !== g)) try {
        var h = b.lastRenderedState,
            k = g(h, c);
        f.eagerReducer = g;
        f.eagerState = k;
        if (He(k, h)) return;
      } catch (l) {} finally {}
      Jg(a, e, d);
    }
  }

  var Gh = {
    readContext: vg,
    useCallback: Ah,
    useContext: Ah,
    useEffect: Ah,
    useImperativeHandle: Ah,
    useLayoutEffect: Ah,
    useMemo: Ah,
    useReducer: Ah,
    useRef: Ah,
    useState: Ah,
    useDebugValue: Ah,
    useDeferredValue: Ah,
    useTransition: Ah,
    useMutableSource: Ah,
    useOpaqueIdentifier: Ah,
    unstable_isNewReconciler: !1
  },
      Dh = {
    readContext: vg,
    useCallback: function useCallback(a, b) {
      Hh().memoizedState = [a, void 0 === b ? null : b];
      return a;
    },
    useContext: vg,
    useEffect: Wh,
    useImperativeHandle: function useImperativeHandle(a, b, c) {
      c = null !== c && void 0 !== c ? c.concat([a]) : null;
      return Uh(4, 2, Zh.bind(null, b, a), c);
    },
    useLayoutEffect: function useLayoutEffect(a, b) {
      return Uh(4, 2, a, b);
    },
    useMemo: function useMemo(a, b) {
      var c = Hh();
      b = void 0 === b ? null : b;
      a = a();
      c.memoizedState = [a, b];
      return a;
    },
    useReducer: function useReducer(a, b, c) {
      var d = Hh();
      b = void 0 !== c ? c(b) : b;
      d.memoizedState = d.baseState = b;
      a = d.queue = {
        pending: null,
        dispatch: null,
        lastRenderedReducer: a,
        lastRenderedState: b
      };
      a = a.dispatch = Oh.bind(null, R, a);
      return [d.memoizedState, a];
    },
    useRef: Sh,
    useState: Qh,
    useDebugValue: ai,
    useDeferredValue: function useDeferredValue(a) {
      var b = Qh(a),
          c = b[0],
          d = b[1];
      Wh(function () {
        var b = wh.transition;
        wh.transition = 1;

        try {
          d(a);
        } finally {
          wh.transition = b;
        }
      }, [a]);
      return c;
    },
    useTransition: function useTransition() {
      var a = Qh(!1),
          b = a[0];
      a = di.bind(null, a[1]);
      Sh(a);
      return [a, b];
    },
    useMutableSource: function useMutableSource(a, b, c) {
      var d = Hh();
      d.memoizedState = {
        refs: {
          getSnapshot: b,
          setSnapshot: null
        },
        source: a,
        subscribe: c
      };
      return Nh(d, a, b, c);
    },
    useOpaqueIdentifier: function useOpaqueIdentifier() {
      if (lh) {
        var a = !1,
            b = uf(function () {
          a || (a = !0, c("r:" + (tf++).toString(36)));
          throw Error(y(355));
        }),
            c = Qh(b)[1];
        0 === (R.mode & 2) && (R.flags |= 516, Rh(5, function () {
          c("r:" + (tf++).toString(36));
        }, void 0, null));
        return b;
      }

      b = "r:" + (tf++).toString(36);
      Qh(b);
      return b;
    },
    unstable_isNewReconciler: !1
  },
      Eh = {
    readContext: vg,
    useCallback: bi,
    useContext: vg,
    useEffect: Xh,
    useImperativeHandle: $h,
    useLayoutEffect: Yh,
    useMemo: ci,
    useReducer: Kh,
    useRef: Th,
    useState: function useState() {
      return Kh(Jh);
    },
    useDebugValue: ai,
    useDeferredValue: function useDeferredValue(a) {
      var b = Kh(Jh),
          c = b[0],
          d = b[1];
      Xh(function () {
        var b = wh.transition;
        wh.transition = 1;

        try {
          d(a);
        } finally {
          wh.transition = b;
        }
      }, [a]);
      return c;
    },
    useTransition: function useTransition() {
      var a = Kh(Jh)[0];
      return [Th().current, a];
    },
    useMutableSource: Ph,
    useOpaqueIdentifier: function useOpaqueIdentifier() {
      return Kh(Jh)[0];
    },
    unstable_isNewReconciler: !1
  },
      Fh = {
    readContext: vg,
    useCallback: bi,
    useContext: vg,
    useEffect: Xh,
    useImperativeHandle: $h,
    useLayoutEffect: Yh,
    useMemo: ci,
    useReducer: Lh,
    useRef: Th,
    useState: function useState() {
      return Lh(Jh);
    },
    useDebugValue: ai,
    useDeferredValue: function useDeferredValue(a) {
      var b = Lh(Jh),
          c = b[0],
          d = b[1];
      Xh(function () {
        var b = wh.transition;
        wh.transition = 1;

        try {
          d(a);
        } finally {
          wh.transition = b;
        }
      }, [a]);
      return c;
    },
    useTransition: function useTransition() {
      var a = Lh(Jh)[0];
      return [Th().current, a];
    },
    useMutableSource: Ph,
    useOpaqueIdentifier: function useOpaqueIdentifier() {
      return Lh(Jh)[0];
    },
    unstable_isNewReconciler: !1
  },
      ei = ra.ReactCurrentOwner,
      ug = !1;

  function fi(a, b, c, d) {
    b.child = null === a ? Zg(b, null, c, d) : Yg(b, a.child, c, d);
  }

  function gi(a, b, c, d, e) {
    c = c.render;
    var f = b.ref;
    tg(b, e);
    d = Ch(a, b, c, d, f, e);
    if (null !== a && !ug) return b.updateQueue = a.updateQueue, b.flags &= -517, a.lanes &= ~e, hi(a, b, e);
    b.flags |= 1;
    fi(a, b, d, e);
    return b.child;
  }

  function ii(a, b, c, d, e, f) {
    if (null === a) {
      var g = c.type;
      if ("function" === typeof g && !ji(g) && void 0 === g.defaultProps && null === c.compare && void 0 === c.defaultProps) return b.tag = 15, b.type = g, ki(a, b, g, d, e, f);
      a = Vg(c.type, null, d, b, b.mode, f);
      a.ref = b.ref;
      a["return"] = b;
      return b.child = a;
    }

    g = a.child;
    if (0 === (e & f) && (e = g.memoizedProps, c = c.compare, c = null !== c ? c : Je, c(e, d) && a.ref === b.ref)) return hi(a, b, f);
    b.flags |= 1;
    a = Tg(g, d);
    a.ref = b.ref;
    a["return"] = b;
    return b.child = a;
  }

  function ki(a, b, c, d, e, f) {
    if (null !== a && Je(a.memoizedProps, d) && a.ref === b.ref) if (ug = !1, 0 !== (f & e)) 0 !== (a.flags & 16384) && (ug = !0);else return b.lanes = a.lanes, hi(a, b, f);
    return li(a, b, c, d, f);
  }

  function mi(a, b, c) {
    var d = b.pendingProps,
        e = d.children,
        f = null !== a ? a.memoizedState : null;
    if ("hidden" === d.mode || "unstable-defer-without-hiding" === d.mode) {
      if (0 === (b.mode & 4)) b.memoizedState = {
        baseLanes: 0
      }, ni(b, c);else if (0 !== (c & 1073741824)) b.memoizedState = {
        baseLanes: 0
      }, ni(b, null !== f ? f.baseLanes : c);else return a = null !== f ? f.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = {
        baseLanes: a
      }, ni(b, a), null;
    } else null !== f ? (d = f.baseLanes | c, b.memoizedState = null) : d = c, ni(b, d);
    fi(a, b, e, c);
    return b.child;
  }

  function oi(a, b) {
    var c = b.ref;
    if (null === a && null !== c || null !== a && a.ref !== c) b.flags |= 128;
  }

  function li(a, b, c, d, e) {
    var f = Ff(c) ? Df : M.current;
    f = Ef(b, f);
    tg(b, e);
    c = Ch(a, b, c, d, f, e);
    if (null !== a && !ug) return b.updateQueue = a.updateQueue, b.flags &= -517, a.lanes &= ~e, hi(a, b, e);
    b.flags |= 1;
    fi(a, b, c, e);
    return b.child;
  }

  function pi(a, b, c, d, e) {
    if (Ff(c)) {
      var f = !0;
      Jf(b);
    } else f = !1;

    tg(b, e);
    if (null === b.stateNode) null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2), Mg(b, c, d), Og(b, c, d, e), d = !0;else if (null === a) {
      var g = b.stateNode,
          h = b.memoizedProps;
      g.props = h;
      var k = g.context,
          l = c.contextType;
      "object" === _typeof(l) && null !== l ? l = vg(l) : (l = Ff(c) ? Df : M.current, l = Ef(b, l));
      var n = c.getDerivedStateFromProps,
          A = "function" === typeof n || "function" === typeof g.getSnapshotBeforeUpdate;
      A || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k !== l) && Ng(b, g, d, l);
      wg = !1;
      var p = b.memoizedState;
      g.state = p;
      Cg(b, d, g, e);
      k = b.memoizedState;
      h !== d || p !== k || N.current || wg ? ("function" === typeof n && (Gg(b, c, n, d), k = b.memoizedState), (h = wg || Lg(b, c, h, d, p, k, l)) ? (A || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b.flags |= 4)) : ("function" === typeof g.componentDidMount && (b.flags |= 4), b.memoizedProps = d, b.memoizedState = k), g.props = d, g.state = k, g.context = l, d = h) : ("function" === typeof g.componentDidMount && (b.flags |= 4), d = !1);
    } else {
      g = b.stateNode;
      yg(a, b);
      h = b.memoizedProps;
      l = b.type === b.elementType ? h : lg(b.type, h);
      g.props = l;
      A = b.pendingProps;
      p = g.context;
      k = c.contextType;
      "object" === _typeof(k) && null !== k ? k = vg(k) : (k = Ff(c) ? Df : M.current, k = Ef(b, k));
      var C = c.getDerivedStateFromProps;
      (n = "function" === typeof C || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== A || p !== k) && Ng(b, g, d, k);
      wg = !1;
      p = b.memoizedState;
      g.state = p;
      Cg(b, d, g, e);
      var x = b.memoizedState;
      h !== A || p !== x || N.current || wg ? ("function" === typeof C && (Gg(b, c, C, d), x = b.memoizedState), (l = wg || Lg(b, c, l, d, p, x, k)) ? (n || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, x, k), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, x, k)), "function" === typeof g.componentDidUpdate && (b.flags |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.flags |= 256)) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && p === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && p === a.memoizedState || (b.flags |= 256), b.memoizedProps = d, b.memoizedState = x), g.props = d, g.state = x, g.context = k, d = l) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && p === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && p === a.memoizedState || (b.flags |= 256), d = !1);
    }
    return qi(a, b, c, d, f, e);
  }

  function qi(a, b, c, d, e, f) {
    oi(a, b);
    var g = 0 !== (b.flags & 64);
    if (!d && !g) return e && Kf(b, c, !1), hi(a, b, f);
    d = b.stateNode;
    ei.current = b;
    var h = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
    b.flags |= 1;
    null !== a && g ? (b.child = Yg(b, a.child, null, f), b.child = Yg(b, null, h, f)) : fi(a, b, h, f);
    b.memoizedState = d.state;
    e && Kf(b, c, !0);
    return b.child;
  }

  function ri(a) {
    var b = a.stateNode;
    b.pendingContext ? Hf(a, b.pendingContext, b.pendingContext !== b.context) : b.context && Hf(a, b.context, !1);
    eh(a, b.containerInfo);
  }

  var si = {
    dehydrated: null,
    retryLane: 0
  };

  function ti(a, b, c) {
    var d = b.pendingProps,
        e = P.current,
        f = !1,
        g;
    (g = 0 !== (b.flags & 64)) || (g = null !== a && null === a.memoizedState ? !1 : 0 !== (e & 2));
    g ? (f = !0, b.flags &= -65) : null !== a && null === a.memoizedState || void 0 === d.fallback || !0 === d.unstable_avoidThisFallback || (e |= 1);
    I(P, e & 1);

    if (null === a) {
      void 0 !== d.fallback && ph(b);
      a = d.children;
      e = d.fallback;
      if (f) return a = ui(b, a, e, c), b.child.memoizedState = {
        baseLanes: c
      }, b.memoizedState = si, a;
      if ("number" === typeof d.unstable_expectedLoadTime) return a = ui(b, a, e, c), b.child.memoizedState = {
        baseLanes: c
      }, b.memoizedState = si, b.lanes = 33554432, a;
      c = vi({
        mode: "visible",
        children: a
      }, b.mode, c, null);
      c["return"] = b;
      return b.child = c;
    }

    if (null !== a.memoizedState) {
      if (f) return d = wi(a, b, d.children, d.fallback, c), f = b.child, e = a.child.memoizedState, f.memoizedState = null === e ? {
        baseLanes: c
      } : {
        baseLanes: e.baseLanes | c
      }, f.childLanes = a.childLanes & ~c, b.memoizedState = si, d;
      c = xi(a, b, d.children, c);
      b.memoizedState = null;
      return c;
    }

    if (f) return d = wi(a, b, d.children, d.fallback, c), f = b.child, e = a.child.memoizedState, f.memoizedState = null === e ? {
      baseLanes: c
    } : {
      baseLanes: e.baseLanes | c
    }, f.childLanes = a.childLanes & ~c, b.memoizedState = si, d;
    c = xi(a, b, d.children, c);
    b.memoizedState = null;
    return c;
  }

  function ui(a, b, c, d) {
    var e = a.mode,
        f = a.child;
    b = {
      mode: "hidden",
      children: b
    };
    0 === (e & 2) && null !== f ? (f.childLanes = 0, f.pendingProps = b) : f = vi(b, e, 0, null);
    c = Xg(c, e, d, null);
    f["return"] = a;
    c["return"] = a;
    f.sibling = c;
    a.child = f;
    return c;
  }

  function xi(a, b, c, d) {
    var e = a.child;
    a = e.sibling;
    c = Tg(e, {
      mode: "visible",
      children: c
    });
    0 === (b.mode & 2) && (c.lanes = d);
    c["return"] = b;
    c.sibling = null;
    null !== a && (a.nextEffect = null, a.flags = 8, b.firstEffect = b.lastEffect = a);
    return b.child = c;
  }

  function wi(a, b, c, d, e) {
    var f = b.mode,
        g = a.child;
    a = g.sibling;
    var h = {
      mode: "hidden",
      children: c
    };
    0 === (f & 2) && b.child !== g ? (c = b.child, c.childLanes = 0, c.pendingProps = h, g = c.lastEffect, null !== g ? (b.firstEffect = c.firstEffect, b.lastEffect = g, g.nextEffect = null) : b.firstEffect = b.lastEffect = null) : c = Tg(g, h);
    null !== a ? d = Tg(a, d) : (d = Xg(d, f, e, null), d.flags |= 2);
    d["return"] = b;
    c["return"] = b;
    c.sibling = d;
    b.child = c;
    return d;
  }

  function yi(a, b) {
    a.lanes |= b;
    var c = a.alternate;
    null !== c && (c.lanes |= b);
    sg(a["return"], b);
  }

  function zi(a, b, c, d, e, f) {
    var g = a.memoizedState;
    null === g ? a.memoizedState = {
      isBackwards: b,
      rendering: null,
      renderingStartTime: 0,
      last: d,
      tail: c,
      tailMode: e,
      lastEffect: f
    } : (g.isBackwards = b, g.rendering = null, g.renderingStartTime = 0, g.last = d, g.tail = c, g.tailMode = e, g.lastEffect = f);
  }

  function Ai(a, b, c) {
    var d = b.pendingProps,
        e = d.revealOrder,
        f = d.tail;
    fi(a, b, d.children, c);
    d = P.current;
    if (0 !== (d & 2)) d = d & 1 | 2, b.flags |= 64;else {
      if (null !== a && 0 !== (a.flags & 64)) a: for (a = b.child; null !== a;) {
        if (13 === a.tag) null !== a.memoizedState && yi(a, c);else if (19 === a.tag) yi(a, c);else if (null !== a.child) {
          a.child["return"] = a;
          a = a.child;
          continue;
        }
        if (a === b) break a;

        for (; null === a.sibling;) {
          if (null === a["return"] || a["return"] === b) break a;
          a = a["return"];
        }

        a.sibling["return"] = a["return"];
        a = a.sibling;
      }
      d &= 1;
    }
    I(P, d);
    if (0 === (b.mode & 2)) b.memoizedState = null;else switch (e) {
      case "forwards":
        c = b.child;

        for (e = null; null !== c;) {
          a = c.alternate, null !== a && null === ih(a) && (e = c), c = c.sibling;
        }

        c = e;
        null === c ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
        zi(b, !1, e, c, f, b.lastEffect);
        break;

      case "backwards":
        c = null;
        e = b.child;

        for (b.child = null; null !== e;) {
          a = e.alternate;

          if (null !== a && null === ih(a)) {
            b.child = e;
            break;
          }

          a = e.sibling;
          e.sibling = c;
          c = e;
          e = a;
        }

        zi(b, !0, c, null, f, b.lastEffect);
        break;

      case "together":
        zi(b, !1, null, null, void 0, b.lastEffect);
        break;

      default:
        b.memoizedState = null;
    }
    return b.child;
  }

  function hi(a, b, c) {
    null !== a && (b.dependencies = a.dependencies);
    Dg |= b.lanes;

    if (0 !== (c & b.childLanes)) {
      if (null !== a && b.child !== a.child) throw Error(y(153));

      if (null !== b.child) {
        a = b.child;
        c = Tg(a, a.pendingProps);
        b.child = c;

        for (c["return"] = b; null !== a.sibling;) {
          a = a.sibling, c = c.sibling = Tg(a, a.pendingProps), c["return"] = b;
        }

        c.sibling = null;
      }

      return b.child;
    }

    return null;
  }

  var Bi, Ci, Di, Ei;

  Bi = function Bi(a, b) {
    for (var c = b.child; null !== c;) {
      if (5 === c.tag || 6 === c.tag) a.appendChild(c.stateNode);else if (4 !== c.tag && null !== c.child) {
        c.child["return"] = c;
        c = c.child;
        continue;
      }
      if (c === b) break;

      for (; null === c.sibling;) {
        if (null === c["return"] || c["return"] === b) return;
        c = c["return"];
      }

      c.sibling["return"] = c["return"];
      c = c.sibling;
    }
  };

  Ci = function Ci() {};

  Di = function Di(a, b, c, d) {
    var e = a.memoizedProps;

    if (e !== d) {
      a = b.stateNode;
      dh(ah.current);
      var f = null;

      switch (c) {
        case "input":
          e = Ya(a, e);
          d = Ya(a, d);
          f = [];
          break;

        case "option":
          e = eb(a, e);
          d = eb(a, d);
          f = [];
          break;

        case "select":
          e = m({}, e, {
            value: void 0
          });
          d = m({}, d, {
            value: void 0
          });
          f = [];
          break;

        case "textarea":
          e = gb(a, e);
          d = gb(a, d);
          f = [];
          break;

        default:
          "function" !== typeof e.onClick && "function" === typeof d.onClick && (a.onclick = jf);
      }

      vb(c, d);
      var g;
      c = null;

      for (l in e) {
        if (!d.hasOwnProperty(l) && e.hasOwnProperty(l) && null != e[l]) if ("style" === l) {
          var h = e[l];

          for (g in h) {
            h.hasOwnProperty(g) && (c || (c = {}), c[g] = "");
          }
        } else "dangerouslySetInnerHTML" !== l && "children" !== l && "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && "autoFocus" !== l && (ca.hasOwnProperty(l) ? f || (f = []) : (f = f || []).push(l, null));
      }

      for (l in d) {
        var k = d[l];
        h = null != e ? e[l] : void 0;
        if (d.hasOwnProperty(l) && k !== h && (null != k || null != h)) if ("style" === l) {
          if (h) {
            for (g in h) {
              !h.hasOwnProperty(g) || k && k.hasOwnProperty(g) || (c || (c = {}), c[g] = "");
            }

            for (g in k) {
              k.hasOwnProperty(g) && h[g] !== k[g] && (c || (c = {}), c[g] = k[g]);
            }
          } else c || (f || (f = []), f.push(l, c)), c = k;
        } else "dangerouslySetInnerHTML" === l ? (k = k ? k.__html : void 0, h = h ? h.__html : void 0, null != k && h !== k && (f = f || []).push(l, k)) : "children" === l ? "string" !== typeof k && "number" !== typeof k || (f = f || []).push(l, "" + k) : "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && (ca.hasOwnProperty(l) ? (null != k && "onScroll" === l && G("scroll", a), f || h === k || (f = [])) : "object" === _typeof(k) && null !== k && k.$$typeof === Ga ? k.toString() : (f = f || []).push(l, k));
      }

      c && (f = f || []).push("style", c);
      var l = f;
      if (b.updateQueue = l) b.flags |= 4;
    }
  };

  Ei = function Ei(a, b, c, d) {
    c !== d && (b.flags |= 4);
  };

  function Fi(a, b) {
    if (!lh) switch (a.tailMode) {
      case "hidden":
        b = a.tail;

        for (var c = null; null !== b;) {
          null !== b.alternate && (c = b), b = b.sibling;
        }

        null === c ? a.tail = null : c.sibling = null;
        break;

      case "collapsed":
        c = a.tail;

        for (var d = null; null !== c;) {
          null !== c.alternate && (d = c), c = c.sibling;
        }

        null === d ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
    }
  }

  function Gi(a, b, c) {
    var d = b.pendingProps;

    switch (b.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return null;

      case 1:
        return Ff(b.type) && Gf(), null;

      case 3:
        fh();
        H(N);
        H(M);
        uh();
        d = b.stateNode;
        d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
        if (null === a || null === a.child) rh(b) ? b.flags |= 4 : d.hydrate || (b.flags |= 256);
        Ci(b);
        return null;

      case 5:
        hh(b);
        var e = dh(ch.current);
        c = b.type;
        if (null !== a && null != b.stateNode) Di(a, b, c, d, e), a.ref !== b.ref && (b.flags |= 128);else {
          if (!d) {
            if (null === b.stateNode) throw Error(y(166));
            return null;
          }

          a = dh(ah.current);

          if (rh(b)) {
            d = b.stateNode;
            c = b.type;
            var f = b.memoizedProps;
            d[wf] = b;
            d[xf] = f;

            switch (c) {
              case "dialog":
                G("cancel", d);
                G("close", d);
                break;

              case "iframe":
              case "object":
              case "embed":
                G("load", d);
                break;

              case "video":
              case "audio":
                for (a = 0; a < Xe.length; a++) {
                  G(Xe[a], d);
                }

                break;

              case "source":
                G("error", d);
                break;

              case "img":
              case "image":
              case "link":
                G("error", d);
                G("load", d);
                break;

              case "details":
                G("toggle", d);
                break;

              case "input":
                Za(d, f);
                G("invalid", d);
                break;

              case "select":
                d._wrapperState = {
                  wasMultiple: !!f.multiple
                };
                G("invalid", d);
                break;

              case "textarea":
                hb(d, f), G("invalid", d);
            }

            vb(c, f);
            a = null;

            for (var g in f) {
              f.hasOwnProperty(g) && (e = f[g], "children" === g ? "string" === typeof e ? d.textContent !== e && (a = ["children", e]) : "number" === typeof e && d.textContent !== "" + e && (a = ["children", "" + e]) : ca.hasOwnProperty(g) && null != e && "onScroll" === g && G("scroll", d));
            }

            switch (c) {
              case "input":
                Va(d);
                cb(d, f, !0);
                break;

              case "textarea":
                Va(d);
                jb(d);
                break;

              case "select":
              case "option":
                break;

              default:
                "function" === typeof f.onClick && (d.onclick = jf);
            }

            d = a;
            b.updateQueue = d;
            null !== d && (b.flags |= 4);
          } else {
            g = 9 === e.nodeType ? e : e.ownerDocument;
            a === kb.html && (a = lb(c));
            a === kb.html ? "script" === c ? (a = g.createElement("div"), a.innerHTML = "<script>\x3c/script>", a = a.removeChild(a.firstChild)) : "string" === typeof d.is ? a = g.createElement(c, {
              is: d.is
            }) : (a = g.createElement(c), "select" === c && (g = a, d.multiple ? g.multiple = !0 : d.size && (g.size = d.size))) : a = g.createElementNS(a, c);
            a[wf] = b;
            a[xf] = d;
            Bi(a, b, !1, !1);
            b.stateNode = a;
            g = wb(c, d);

            switch (c) {
              case "dialog":
                G("cancel", a);
                G("close", a);
                e = d;
                break;

              case "iframe":
              case "object":
              case "embed":
                G("load", a);
                e = d;
                break;

              case "video":
              case "audio":
                for (e = 0; e < Xe.length; e++) {
                  G(Xe[e], a);
                }

                e = d;
                break;

              case "source":
                G("error", a);
                e = d;
                break;

              case "img":
              case "image":
              case "link":
                G("error", a);
                G("load", a);
                e = d;
                break;

              case "details":
                G("toggle", a);
                e = d;
                break;

              case "input":
                Za(a, d);
                e = Ya(a, d);
                G("invalid", a);
                break;

              case "option":
                e = eb(a, d);
                break;

              case "select":
                a._wrapperState = {
                  wasMultiple: !!d.multiple
                };
                e = m({}, d, {
                  value: void 0
                });
                G("invalid", a);
                break;

              case "textarea":
                hb(a, d);
                e = gb(a, d);
                G("invalid", a);
                break;

              default:
                e = d;
            }

            vb(c, e);
            var h = e;

            for (f in h) {
              if (h.hasOwnProperty(f)) {
                var k = h[f];
                "style" === f ? tb(a, k) : "dangerouslySetInnerHTML" === f ? (k = k ? k.__html : void 0, null != k && ob(a, k)) : "children" === f ? "string" === typeof k ? ("textarea" !== c || "" !== k) && pb(a, k) : "number" === typeof k && pb(a, "" + k) : "suppressContentEditableWarning" !== f && "suppressHydrationWarning" !== f && "autoFocus" !== f && (ca.hasOwnProperty(f) ? null != k && "onScroll" === f && G("scroll", a) : null != k && qa(a, f, k, g));
              }
            }

            switch (c) {
              case "input":
                Va(a);
                cb(a, d, !1);
                break;

              case "textarea":
                Va(a);
                jb(a);
                break;

              case "option":
                null != d.value && a.setAttribute("value", "" + Sa(d.value));
                break;

              case "select":
                a.multiple = !!d.multiple;
                f = d.value;
                null != f ? fb(a, !!d.multiple, f, !1) : null != d.defaultValue && fb(a, !!d.multiple, d.defaultValue, !0);
                break;

              default:
                "function" === typeof e.onClick && (a.onclick = jf);
            }

            mf(c, d) && (b.flags |= 4);
          }

          null !== b.ref && (b.flags |= 128);
        }
        return null;

      case 6:
        if (a && null != b.stateNode) Ei(a, b, a.memoizedProps, d);else {
          if ("string" !== typeof d && null === b.stateNode) throw Error(y(166));
          c = dh(ch.current);
          dh(ah.current);
          rh(b) ? (d = b.stateNode, c = b.memoizedProps, d[wf] = b, d.nodeValue !== c && (b.flags |= 4)) : (d = (9 === c.nodeType ? c : c.ownerDocument).createTextNode(d), d[wf] = b, b.stateNode = d);
        }
        return null;

      case 13:
        H(P);
        d = b.memoizedState;
        if (0 !== (b.flags & 64)) return b.lanes = c, b;
        d = null !== d;
        c = !1;
        null === a ? void 0 !== b.memoizedProps.fallback && rh(b) : c = null !== a.memoizedState;
        if (d && !c && 0 !== (b.mode & 2)) if (null === a && !0 !== b.memoizedProps.unstable_avoidThisFallback || 0 !== (P.current & 1)) 0 === V && (V = 3);else {
          if (0 === V || 3 === V) V = 4;
          null === U || 0 === (Dg & 134217727) && 0 === (Hi & 134217727) || Ii(U, W);
        }
        if (d || c) b.flags |= 4;
        return null;

      case 4:
        return fh(), Ci(b), null === a && cf(b.stateNode.containerInfo), null;

      case 10:
        return rg(b), null;

      case 17:
        return Ff(b.type) && Gf(), null;

      case 19:
        H(P);
        d = b.memoizedState;
        if (null === d) return null;
        f = 0 !== (b.flags & 64);
        g = d.rendering;
        if (null === g) {
          if (f) Fi(d, !1);else {
            if (0 !== V || null !== a && 0 !== (a.flags & 64)) for (a = b.child; null !== a;) {
              g = ih(a);

              if (null !== g) {
                b.flags |= 64;
                Fi(d, !1);
                f = g.updateQueue;
                null !== f && (b.updateQueue = f, b.flags |= 4);
                null === d.lastEffect && (b.firstEffect = null);
                b.lastEffect = d.lastEffect;
                d = c;

                for (c = b.child; null !== c;) {
                  f = c, a = d, f.flags &= 2, f.nextEffect = null, f.firstEffect = null, f.lastEffect = null, g = f.alternate, null === g ? (f.childLanes = 0, f.lanes = a, f.child = null, f.memoizedProps = null, f.memoizedState = null, f.updateQueue = null, f.dependencies = null, f.stateNode = null) : (f.childLanes = g.childLanes, f.lanes = g.lanes, f.child = g.child, f.memoizedProps = g.memoizedProps, f.memoizedState = g.memoizedState, f.updateQueue = g.updateQueue, f.type = g.type, a = g.dependencies, f.dependencies = null === a ? null : {
                    lanes: a.lanes,
                    firstContext: a.firstContext
                  }), c = c.sibling;
                }

                I(P, P.current & 1 | 2);
                return b.child;
              }

              a = a.sibling;
            }
            null !== d.tail && O() > Ji && (b.flags |= 64, f = !0, Fi(d, !1), b.lanes = 33554432);
          }
        } else {
          if (!f) if (a = ih(g), null !== a) {
            if (b.flags |= 64, f = !0, c = a.updateQueue, null !== c && (b.updateQueue = c, b.flags |= 4), Fi(d, !0), null === d.tail && "hidden" === d.tailMode && !g.alternate && !lh) return b = b.lastEffect = d.lastEffect, null !== b && (b.nextEffect = null), null;
          } else 2 * O() - d.renderingStartTime > Ji && 1073741824 !== c && (b.flags |= 64, f = !0, Fi(d, !1), b.lanes = 33554432);
          d.isBackwards ? (g.sibling = b.child, b.child = g) : (c = d.last, null !== c ? c.sibling = g : b.child = g, d.last = g);
        }
        return null !== d.tail ? (c = d.tail, d.rendering = c, d.tail = c.sibling, d.lastEffect = b.lastEffect, d.renderingStartTime = O(), c.sibling = null, b = P.current, I(P, f ? b & 1 | 2 : b & 1), c) : null;

      case 23:
      case 24:
        return Ki(), null !== a && null !== a.memoizedState !== (null !== b.memoizedState) && "unstable-defer-without-hiding" !== d.mode && (b.flags |= 4), null;
    }

    throw Error(y(156, b.tag));
  }

  function Li(a) {
    switch (a.tag) {
      case 1:
        Ff(a.type) && Gf();
        var b = a.flags;
        return b & 4096 ? (a.flags = b & -4097 | 64, a) : null;

      case 3:
        fh();
        H(N);
        H(M);
        uh();
        b = a.flags;
        if (0 !== (b & 64)) throw Error(y(285));
        a.flags = b & -4097 | 64;
        return a;

      case 5:
        return hh(a), null;

      case 13:
        return H(P), b = a.flags, b & 4096 ? (a.flags = b & -4097 | 64, a) : null;

      case 19:
        return H(P), null;

      case 4:
        return fh(), null;

      case 10:
        return rg(a), null;

      case 23:
      case 24:
        return Ki(), null;

      default:
        return null;
    }
  }

  function Mi(a, b) {
    try {
      var c = "",
          d = b;

      do {
        c += Qa(d), d = d["return"];
      } while (d);

      var e = c;
    } catch (f) {
      e = "\nError generating stack: " + f.message + "\n" + f.stack;
    }

    return {
      value: a,
      source: b,
      stack: e
    };
  }

  function Ni(a, b) {
    try {
      console.error(b.value);
    } catch (c) {
      setTimeout(function () {
        throw c;
      });
    }
  }

  var Oi = "function" === typeof WeakMap ? WeakMap : Map;

  function Pi(a, b, c) {
    c = zg(-1, c);
    c.tag = 3;
    c.payload = {
      element: null
    };
    var d = b.value;

    c.callback = function () {
      Qi || (Qi = !0, Ri = d);
      Ni(a, b);
    };

    return c;
  }

  function Si(a, b, c) {
    c = zg(-1, c);
    c.tag = 3;
    var d = a.type.getDerivedStateFromError;

    if ("function" === typeof d) {
      var e = b.value;

      c.payload = function () {
        Ni(a, b);
        return d(e);
      };
    }

    var f = a.stateNode;
    null !== f && "function" === typeof f.componentDidCatch && (c.callback = function () {
      "function" !== typeof d && (null === Ti ? Ti = new Set([this]) : Ti.add(this), Ni(a, b));
      var c = b.stack;
      this.componentDidCatch(b.value, {
        componentStack: null !== c ? c : ""
      });
    });
    return c;
  }

  var Ui = "function" === typeof WeakSet ? WeakSet : Set;

  function Vi(a) {
    var b = a.ref;
    if (null !== b) if ("function" === typeof b) try {
      b(null);
    } catch (c) {
      Wi(a, c);
    } else b.current = null;
  }

  function Xi(a, b) {
    switch (b.tag) {
      case 0:
      case 11:
      case 15:
      case 22:
        return;

      case 1:
        if (b.flags & 256 && null !== a) {
          var c = a.memoizedProps,
              d = a.memoizedState;
          a = b.stateNode;
          b = a.getSnapshotBeforeUpdate(b.elementType === b.type ? c : lg(b.type, c), d);
          a.__reactInternalSnapshotBeforeUpdate = b;
        }

        return;

      case 3:
        b.flags & 256 && qf(b.stateNode.containerInfo);
        return;

      case 5:
      case 6:
      case 4:
      case 17:
        return;
    }

    throw Error(y(163));
  }

  function Yi(a, b, c) {
    switch (c.tag) {
      case 0:
      case 11:
      case 15:
      case 22:
        b = c.updateQueue;
        b = null !== b ? b.lastEffect : null;

        if (null !== b) {
          a = b = b.next;

          do {
            if (3 === (a.tag & 3)) {
              var d = a.create;
              a.destroy = d();
            }

            a = a.next;
          } while (a !== b);
        }

        b = c.updateQueue;
        b = null !== b ? b.lastEffect : null;

        if (null !== b) {
          a = b = b.next;

          do {
            var e = a;
            d = e.next;
            e = e.tag;
            0 !== (e & 4) && 0 !== (e & 1) && (Zi(c, a), $i(c, a));
            a = d;
          } while (a !== b);
        }

        return;

      case 1:
        a = c.stateNode;
        c.flags & 4 && (null === b ? a.componentDidMount() : (d = c.elementType === c.type ? b.memoizedProps : lg(c.type, b.memoizedProps), a.componentDidUpdate(d, b.memoizedState, a.__reactInternalSnapshotBeforeUpdate)));
        b = c.updateQueue;
        null !== b && Eg(c, b, a);
        return;

      case 3:
        b = c.updateQueue;

        if (null !== b) {
          a = null;
          if (null !== c.child) switch (c.child.tag) {
            case 5:
              a = c.child.stateNode;
              break;

            case 1:
              a = c.child.stateNode;
          }
          Eg(c, b, a);
        }

        return;

      case 5:
        a = c.stateNode;
        null === b && c.flags & 4 && mf(c.type, c.memoizedProps) && a.focus();
        return;

      case 6:
        return;

      case 4:
        return;

      case 12:
        return;

      case 13:
        null === c.memoizedState && (c = c.alternate, null !== c && (c = c.memoizedState, null !== c && (c = c.dehydrated, null !== c && Cc(c))));
        return;

      case 19:
      case 17:
      case 20:
      case 21:
      case 23:
      case 24:
        return;
    }

    throw Error(y(163));
  }

  function aj(a, b) {
    for (var c = a;;) {
      if (5 === c.tag) {
        var d = c.stateNode;
        if (b) d = d.style, "function" === typeof d.setProperty ? d.setProperty("display", "none", "important") : d.display = "none";else {
          d = c.stateNode;
          var e = c.memoizedProps.style;
          e = void 0 !== e && null !== e && e.hasOwnProperty("display") ? e.display : null;
          d.style.display = sb("display", e);
        }
      } else if (6 === c.tag) c.stateNode.nodeValue = b ? "" : c.memoizedProps;else if ((23 !== c.tag && 24 !== c.tag || null === c.memoizedState || c === a) && null !== c.child) {
        c.child["return"] = c;
        c = c.child;
        continue;
      }

      if (c === a) break;

      for (; null === c.sibling;) {
        if (null === c["return"] || c["return"] === a) return;
        c = c["return"];
      }

      c.sibling["return"] = c["return"];
      c = c.sibling;
    }
  }

  function bj(a, b) {
    if (Mf && "function" === typeof Mf.onCommitFiberUnmount) try {
      Mf.onCommitFiberUnmount(Lf, b);
    } catch (f) {}

    switch (b.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
      case 22:
        a = b.updateQueue;

        if (null !== a && (a = a.lastEffect, null !== a)) {
          var c = a = a.next;

          do {
            var d = c,
                e = d.destroy;
            d = d.tag;
            if (void 0 !== e) if (0 !== (d & 4)) Zi(b, c);else {
              d = b;

              try {
                e();
              } catch (f) {
                Wi(d, f);
              }
            }
            c = c.next;
          } while (c !== a);
        }

        break;

      case 1:
        Vi(b);
        a = b.stateNode;
        if ("function" === typeof a.componentWillUnmount) try {
          a.props = b.memoizedProps, a.state = b.memoizedState, a.componentWillUnmount();
        } catch (f) {
          Wi(b, f);
        }
        break;

      case 5:
        Vi(b);
        break;

      case 4:
        cj(a, b);
    }
  }

  function dj(a) {
    a.alternate = null;
    a.child = null;
    a.dependencies = null;
    a.firstEffect = null;
    a.lastEffect = null;
    a.memoizedProps = null;
    a.memoizedState = null;
    a.pendingProps = null;
    a["return"] = null;
    a.updateQueue = null;
  }

  function ej(a) {
    return 5 === a.tag || 3 === a.tag || 4 === a.tag;
  }

  function fj(a) {
    a: {
      for (var b = a["return"]; null !== b;) {
        if (ej(b)) break a;
        b = b["return"];
      }

      throw Error(y(160));
    }

    var c = b;
    b = c.stateNode;

    switch (c.tag) {
      case 5:
        var d = !1;
        break;

      case 3:
        b = b.containerInfo;
        d = !0;
        break;

      case 4:
        b = b.containerInfo;
        d = !0;
        break;

      default:
        throw Error(y(161));
    }

    c.flags & 16 && (pb(b, ""), c.flags &= -17);

    a: b: for (c = a;;) {
      for (; null === c.sibling;) {
        if (null === c["return"] || ej(c["return"])) {
          c = null;
          break a;
        }

        c = c["return"];
      }

      c.sibling["return"] = c["return"];

      for (c = c.sibling; 5 !== c.tag && 6 !== c.tag && 18 !== c.tag;) {
        if (c.flags & 2) continue b;
        if (null === c.child || 4 === c.tag) continue b;else c.child["return"] = c, c = c.child;
      }

      if (!(c.flags & 2)) {
        c = c.stateNode;
        break a;
      }
    }

    d ? gj(a, c, b) : hj(a, c, b);
  }

  function gj(a, b, c) {
    var d = a.tag,
        e = 5 === d || 6 === d;
    if (e) a = e ? a.stateNode : a.stateNode.instance, b ? 8 === c.nodeType ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (8 === c.nodeType ? (b = c.parentNode, b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, null !== c && void 0 !== c || null !== b.onclick || (b.onclick = jf));else if (4 !== d && (a = a.child, null !== a)) for (gj(a, b, c), a = a.sibling; null !== a;) {
      gj(a, b, c), a = a.sibling;
    }
  }

  function hj(a, b, c) {
    var d = a.tag,
        e = 5 === d || 6 === d;
    if (e) a = e ? a.stateNode : a.stateNode.instance, b ? c.insertBefore(a, b) : c.appendChild(a);else if (4 !== d && (a = a.child, null !== a)) for (hj(a, b, c), a = a.sibling; null !== a;) {
      hj(a, b, c), a = a.sibling;
    }
  }

  function cj(a, b) {
    for (var c = b, d = !1, e, f;;) {
      if (!d) {
        d = c["return"];

        a: for (;;) {
          if (null === d) throw Error(y(160));
          e = d.stateNode;

          switch (d.tag) {
            case 5:
              f = !1;
              break a;

            case 3:
              e = e.containerInfo;
              f = !0;
              break a;

            case 4:
              e = e.containerInfo;
              f = !0;
              break a;
          }

          d = d["return"];
        }

        d = !0;
      }

      if (5 === c.tag || 6 === c.tag) {
        a: for (var g = a, h = c, k = h;;) {
          if (bj(g, k), null !== k.child && 4 !== k.tag) k.child["return"] = k, k = k.child;else {
            if (k === h) break a;

            for (; null === k.sibling;) {
              if (null === k["return"] || k["return"] === h) break a;
              k = k["return"];
            }

            k.sibling["return"] = k["return"];
            k = k.sibling;
          }
        }

        f ? (g = e, h = c.stateNode, 8 === g.nodeType ? g.parentNode.removeChild(h) : g.removeChild(h)) : e.removeChild(c.stateNode);
      } else if (4 === c.tag) {
        if (null !== c.child) {
          e = c.stateNode.containerInfo;
          f = !0;
          c.child["return"] = c;
          c = c.child;
          continue;
        }
      } else if (bj(a, c), null !== c.child) {
        c.child["return"] = c;
        c = c.child;
        continue;
      }

      if (c === b) break;

      for (; null === c.sibling;) {
        if (null === c["return"] || c["return"] === b) return;
        c = c["return"];
        4 === c.tag && (d = !1);
      }

      c.sibling["return"] = c["return"];
      c = c.sibling;
    }
  }

  function ij(a, b) {
    switch (b.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
      case 22:
        var c = b.updateQueue;
        c = null !== c ? c.lastEffect : null;

        if (null !== c) {
          var d = c = c.next;

          do {
            3 === (d.tag & 3) && (a = d.destroy, d.destroy = void 0, void 0 !== a && a()), d = d.next;
          } while (d !== c);
        }

        return;

      case 1:
        return;

      case 5:
        c = b.stateNode;

        if (null != c) {
          d = b.memoizedProps;
          var e = null !== a ? a.memoizedProps : d;
          a = b.type;
          var f = b.updateQueue;
          b.updateQueue = null;

          if (null !== f) {
            c[xf] = d;
            "input" === a && "radio" === d.type && null != d.name && $a(c, d);
            wb(a, e);
            b = wb(a, d);

            for (e = 0; e < f.length; e += 2) {
              var g = f[e],
                  h = f[e + 1];
              "style" === g ? tb(c, h) : "dangerouslySetInnerHTML" === g ? ob(c, h) : "children" === g ? pb(c, h) : qa(c, g, h, b);
            }

            switch (a) {
              case "input":
                ab(c, d);
                break;

              case "textarea":
                ib(c, d);
                break;

              case "select":
                a = c._wrapperState.wasMultiple, c._wrapperState.wasMultiple = !!d.multiple, f = d.value, null != f ? fb(c, !!d.multiple, f, !1) : a !== !!d.multiple && (null != d.defaultValue ? fb(c, !!d.multiple, d.defaultValue, !0) : fb(c, !!d.multiple, d.multiple ? [] : "", !1));
            }
          }
        }

        return;

      case 6:
        if (null === b.stateNode) throw Error(y(162));
        b.stateNode.nodeValue = b.memoizedProps;
        return;

      case 3:
        c = b.stateNode;
        c.hydrate && (c.hydrate = !1, Cc(c.containerInfo));
        return;

      case 12:
        return;

      case 13:
        null !== b.memoizedState && (jj = O(), aj(b.child, !0));
        kj(b);
        return;

      case 19:
        kj(b);
        return;

      case 17:
        return;

      case 23:
      case 24:
        aj(b, null !== b.memoizedState);
        return;
    }

    throw Error(y(163));
  }

  function kj(a) {
    var b = a.updateQueue;

    if (null !== b) {
      a.updateQueue = null;
      var c = a.stateNode;
      null === c && (c = a.stateNode = new Ui());
      b.forEach(function (b) {
        var d = lj.bind(null, a, b);
        c.has(b) || (c.add(b), b.then(d, d));
      });
    }
  }

  function mj(a, b) {
    return null !== a && (a = a.memoizedState, null === a || null !== a.dehydrated) ? (b = b.memoizedState, null !== b && null === b.dehydrated) : !1;
  }

  var nj = Math.ceil,
      oj = ra.ReactCurrentDispatcher,
      pj = ra.ReactCurrentOwner,
      X = 0,
      U = null,
      Y = null,
      W = 0,
      qj = 0,
      rj = Bf(0),
      V = 0,
      sj = null,
      tj = 0,
      Dg = 0,
      Hi = 0,
      uj = 0,
      vj = null,
      jj = 0,
      Ji = Infinity;

  function wj() {
    Ji = O() + 500;
  }

  var Z = null,
      Qi = !1,
      Ri = null,
      Ti = null,
      xj = !1,
      yj = null,
      zj = 90,
      Aj = [],
      Bj = [],
      Cj = null,
      Dj = 0,
      Ej = null,
      Fj = -1,
      Gj = 0,
      Hj = 0,
      Ij = null,
      Jj = !1;

  function Hg() {
    return 0 !== (X & 48) ? O() : -1 !== Fj ? Fj : Fj = O();
  }

  function Ig(a) {
    a = a.mode;
    if (0 === (a & 2)) return 1;
    if (0 === (a & 4)) return 99 === eg() ? 1 : 2;
    0 === Gj && (Gj = tj);

    if (0 !== kg.transition) {
      0 !== Hj && (Hj = null !== vj ? vj.pendingLanes : 0);
      a = Gj;
      var b = 4186112 & ~Hj;
      b &= -b;
      0 === b && (a = 4186112 & ~a, b = a & -a, 0 === b && (b = 8192));
      return b;
    }

    a = eg();
    0 !== (X & 4) && 98 === a ? a = Xc(12, Gj) : (a = Sc(a), a = Xc(a, Gj));
    return a;
  }

  function Jg(a, b, c) {
    if (50 < Dj) throw Dj = 0, Ej = null, Error(y(185));
    a = Kj(a, b);
    if (null === a) return null;
    $c(a, b, c);
    a === U && (Hi |= b, 4 === V && Ii(a, W));
    var d = eg();
    1 === b ? 0 !== (X & 8) && 0 === (X & 48) ? Lj(a) : (Mj(a, c), 0 === X && (wj(), ig())) : (0 === (X & 4) || 98 !== d && 99 !== d || (null === Cj ? Cj = new Set([a]) : Cj.add(a)), Mj(a, c));
    vj = a;
  }

  function Kj(a, b) {
    a.lanes |= b;
    var c = a.alternate;
    null !== c && (c.lanes |= b);
    c = a;

    for (a = a["return"]; null !== a;) {
      a.childLanes |= b, c = a.alternate, null !== c && (c.childLanes |= b), c = a, a = a["return"];
    }

    return 3 === c.tag ? c.stateNode : null;
  }

  function Mj(a, b) {
    for (var c = a.callbackNode, d = a.suspendedLanes, e = a.pingedLanes, f = a.expirationTimes, g = a.pendingLanes; 0 < g;) {
      var h = 31 - Vc(g),
          k = 1 << h,
          l = f[h];

      if (-1 === l) {
        if (0 === (k & d) || 0 !== (k & e)) {
          l = b;
          Rc(k);
          var n = F;
          f[h] = 10 <= n ? l + 250 : 6 <= n ? l + 5E3 : -1;
        }
      } else l <= b && (a.expiredLanes |= k);

      g &= ~k;
    }

    d = Uc(a, a === U ? W : 0);
    b = F;
    if (0 === d) null !== c && (c !== Zf && Pf(c), a.callbackNode = null, a.callbackPriority = 0);else {
      if (null !== c) {
        if (a.callbackPriority === b) return;
        c !== Zf && Pf(c);
      }

      15 === b ? (c = Lj.bind(null, a), null === ag ? (ag = [c], bg = Of(Uf, jg)) : ag.push(c), c = Zf) : 14 === b ? c = hg(99, Lj.bind(null, a)) : (c = Tc(b), c = hg(c, Nj.bind(null, a)));
      a.callbackPriority = b;
      a.callbackNode = c;
    }
  }

  function Nj(a) {
    Fj = -1;
    Hj = Gj = 0;
    if (0 !== (X & 48)) throw Error(y(327));
    var b = a.callbackNode;
    if (Oj() && a.callbackNode !== b) return null;
    var c = Uc(a, a === U ? W : 0);
    if (0 === c) return null;
    var d = c;
    var e = X;
    X |= 16;
    var f = Pj();
    if (U !== a || W !== d) wj(), Qj(a, d);

    do {
      try {
        Rj();
        break;
      } catch (h) {
        Sj(a, h);
      }
    } while (1);

    qg();
    oj.current = f;
    X = e;
    null !== Y ? d = 0 : (U = null, W = 0, d = V);
    if (0 !== (tj & Hi)) Qj(a, 0);else if (0 !== d) {
      2 === d && (X |= 64, a.hydrate && (a.hydrate = !1, qf(a.containerInfo)), c = Wc(a), 0 !== c && (d = Tj(a, c)));
      if (1 === d) throw b = sj, Qj(a, 0), Ii(a, c), Mj(a, O()), b;
      a.finishedWork = a.current.alternate;
      a.finishedLanes = c;

      switch (d) {
        case 0:
        case 1:
          throw Error(y(345));

        case 2:
          Uj(a);
          break;

        case 3:
          Ii(a, c);

          if ((c & 62914560) === c && (d = jj + 500 - O(), 10 < d)) {
            if (0 !== Uc(a, 0)) break;
            e = a.suspendedLanes;

            if ((e & c) !== c) {
              Hg();
              a.pingedLanes |= a.suspendedLanes & e;
              break;
            }

            a.timeoutHandle = of(Uj.bind(null, a), d);
            break;
          }

          Uj(a);
          break;

        case 4:
          Ii(a, c);
          if ((c & 4186112) === c) break;
          d = a.eventTimes;

          for (e = -1; 0 < c;) {
            var g = 31 - Vc(c);
            f = 1 << g;
            g = d[g];
            g > e && (e = g);
            c &= ~f;
          }

          c = e;
          c = O() - c;
          c = (120 > c ? 120 : 480 > c ? 480 : 1080 > c ? 1080 : 1920 > c ? 1920 : 3E3 > c ? 3E3 : 4320 > c ? 4320 : 1960 * nj(c / 1960)) - c;

          if (10 < c) {
            a.timeoutHandle = of(Uj.bind(null, a), c);
            break;
          }

          Uj(a);
          break;

        case 5:
          Uj(a);
          break;

        default:
          throw Error(y(329));
      }
    }
    Mj(a, O());
    return a.callbackNode === b ? Nj.bind(null, a) : null;
  }

  function Ii(a, b) {
    b &= ~uj;
    b &= ~Hi;
    a.suspendedLanes |= b;
    a.pingedLanes &= ~b;

    for (a = a.expirationTimes; 0 < b;) {
      var c = 31 - Vc(b),
          d = 1 << c;
      a[c] = -1;
      b &= ~d;
    }
  }

  function Lj(a) {
    if (0 !== (X & 48)) throw Error(y(327));
    Oj();

    if (a === U && 0 !== (a.expiredLanes & W)) {
      var b = W;
      var c = Tj(a, b);
      0 !== (tj & Hi) && (b = Uc(a, b), c = Tj(a, b));
    } else b = Uc(a, 0), c = Tj(a, b);

    0 !== a.tag && 2 === c && (X |= 64, a.hydrate && (a.hydrate = !1, qf(a.containerInfo)), b = Wc(a), 0 !== b && (c = Tj(a, b)));
    if (1 === c) throw c = sj, Qj(a, 0), Ii(a, b), Mj(a, O()), c;
    a.finishedWork = a.current.alternate;
    a.finishedLanes = b;
    Uj(a);
    Mj(a, O());
    return null;
  }

  function Vj() {
    if (null !== Cj) {
      var a = Cj;
      Cj = null;
      a.forEach(function (a) {
        a.expiredLanes |= 24 & a.pendingLanes;
        Mj(a, O());
      });
    }

    ig();
  }

  function Wj(a, b) {
    var c = X;
    X |= 1;

    try {
      return a(b);
    } finally {
      X = c, 0 === X && (wj(), ig());
    }
  }

  function Xj(a, b) {
    var c = X;
    X &= -2;
    X |= 8;

    try {
      return a(b);
    } finally {
      X = c, 0 === X && (wj(), ig());
    }
  }

  function ni(a, b) {
    I(rj, qj);
    qj |= b;
    tj |= b;
  }

  function Ki() {
    qj = rj.current;
    H(rj);
  }

  function Qj(a, b) {
    a.finishedWork = null;
    a.finishedLanes = 0;
    var c = a.timeoutHandle;
    -1 !== c && (a.timeoutHandle = -1, pf(c));
    if (null !== Y) for (c = Y["return"]; null !== c;) {
      var d = c;

      switch (d.tag) {
        case 1:
          d = d.type.childContextTypes;
          null !== d && void 0 !== d && Gf();
          break;

        case 3:
          fh();
          H(N);
          H(M);
          uh();
          break;

        case 5:
          hh(d);
          break;

        case 4:
          fh();
          break;

        case 13:
          H(P);
          break;

        case 19:
          H(P);
          break;

        case 10:
          rg(d);
          break;

        case 23:
        case 24:
          Ki();
      }

      c = c["return"];
    }
    U = a;
    Y = Tg(a.current, null);
    W = qj = tj = b;
    V = 0;
    sj = null;
    uj = Hi = Dg = 0;
  }

  function Sj(a, b) {
    do {
      var c = Y;

      try {
        qg();
        vh.current = Gh;

        if (yh) {
          for (var d = R.memoizedState; null !== d;) {
            var e = d.queue;
            null !== e && (e.pending = null);
            d = d.next;
          }

          yh = !1;
        }

        xh = 0;
        T = S = R = null;
        zh = !1;
        pj.current = null;

        if (null === c || null === c["return"]) {
          V = 1;
          sj = b;
          Y = null;
          break;
        }

        a: {
          var f = a,
              g = c["return"],
              h = c,
              k = b;
          b = W;
          h.flags |= 2048;
          h.firstEffect = h.lastEffect = null;

          if (null !== k && "object" === _typeof(k) && "function" === typeof k.then) {
            var l = k;

            if (0 === (h.mode & 2)) {
              var n = h.alternate;
              n ? (h.updateQueue = n.updateQueue, h.memoizedState = n.memoizedState, h.lanes = n.lanes) : (h.updateQueue = null, h.memoizedState = null);
            }

            var A = 0 !== (P.current & 1),
                p = g;

            do {
              var C;

              if (C = 13 === p.tag) {
                var x = p.memoizedState;
                if (null !== x) C = null !== x.dehydrated ? !0 : !1;else {
                  var w = p.memoizedProps;
                  C = void 0 === w.fallback ? !1 : !0 !== w.unstable_avoidThisFallback ? !0 : A ? !1 : !0;
                }
              }

              if (C) {
                var z = p.updateQueue;

                if (null === z) {
                  var u = new Set();
                  u.add(l);
                  p.updateQueue = u;
                } else z.add(l);

                if (0 === (p.mode & 2)) {
                  p.flags |= 64;
                  h.flags |= 16384;
                  h.flags &= -2981;
                  if (1 === h.tag) if (null === h.alternate) h.tag = 17;else {
                    var t = zg(-1, 1);
                    t.tag = 2;
                    Ag(h, t);
                  }
                  h.lanes |= 1;
                  break a;
                }

                k = void 0;
                h = b;
                var q = f.pingCache;
                null === q ? (q = f.pingCache = new Oi(), k = new Set(), q.set(l, k)) : (k = q.get(l), void 0 === k && (k = new Set(), q.set(l, k)));

                if (!k.has(h)) {
                  k.add(h);
                  var v = Yj.bind(null, f, l, h);
                  l.then(v, v);
                }

                p.flags |= 4096;
                p.lanes = b;
                break a;
              }

              p = p["return"];
            } while (null !== p);

            k = Error((Ra(h.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.");
          }

          5 !== V && (V = 2);
          k = Mi(k, h);
          p = g;

          do {
            switch (p.tag) {
              case 3:
                f = k;
                p.flags |= 4096;
                b &= -b;
                p.lanes |= b;
                var J = Pi(p, f, b);
                Bg(p, J);
                break a;

              case 1:
                f = k;
                var K = p.type,
                    Q = p.stateNode;

                if (0 === (p.flags & 64) && ("function" === typeof K.getDerivedStateFromError || null !== Q && "function" === typeof Q.componentDidCatch && (null === Ti || !Ti.has(Q)))) {
                  p.flags |= 4096;
                  b &= -b;
                  p.lanes |= b;
                  var L = Si(p, f, b);
                  Bg(p, L);
                  break a;
                }

            }

            p = p["return"];
          } while (null !== p);
        }

        Zj(c);
      } catch (va) {
        b = va;
        Y === c && null !== c && (Y = c = c["return"]);
        continue;
      }

      break;
    } while (1);
  }

  function Pj() {
    var a = oj.current;
    oj.current = Gh;
    return null === a ? Gh : a;
  }

  function Tj(a, b) {
    var c = X;
    X |= 16;
    var d = Pj();
    U === a && W === b || Qj(a, b);

    do {
      try {
        ak();
        break;
      } catch (e) {
        Sj(a, e);
      }
    } while (1);

    qg();
    X = c;
    oj.current = d;
    if (null !== Y) throw Error(y(261));
    U = null;
    W = 0;
    return V;
  }

  function ak() {
    for (; null !== Y;) {
      bk(Y);
    }
  }

  function Rj() {
    for (; null !== Y && !Qf();) {
      bk(Y);
    }
  }

  function bk(a) {
    var b = ck(a.alternate, a, qj);
    a.memoizedProps = a.pendingProps;
    null === b ? Zj(a) : Y = b;
    pj.current = null;
  }

  function Zj(a) {
    var b = a;

    do {
      var c = b.alternate;
      a = b["return"];

      if (0 === (b.flags & 2048)) {
        c = Gi(c, b, qj);

        if (null !== c) {
          Y = c;
          return;
        }

        c = b;

        if (24 !== c.tag && 23 !== c.tag || null === c.memoizedState || 0 !== (qj & 1073741824) || 0 === (c.mode & 4)) {
          for (var d = 0, e = c.child; null !== e;) {
            d |= e.lanes | e.childLanes, e = e.sibling;
          }

          c.childLanes = d;
        }

        null !== a && 0 === (a.flags & 2048) && (null === a.firstEffect && (a.firstEffect = b.firstEffect), null !== b.lastEffect && (null !== a.lastEffect && (a.lastEffect.nextEffect = b.firstEffect), a.lastEffect = b.lastEffect), 1 < b.flags && (null !== a.lastEffect ? a.lastEffect.nextEffect = b : a.firstEffect = b, a.lastEffect = b));
      } else {
        c = Li(b);

        if (null !== c) {
          c.flags &= 2047;
          Y = c;
          return;
        }

        null !== a && (a.firstEffect = a.lastEffect = null, a.flags |= 2048);
      }

      b = b.sibling;

      if (null !== b) {
        Y = b;
        return;
      }

      Y = b = a;
    } while (null !== b);

    0 === V && (V = 5);
  }

  function Uj(a) {
    var b = eg();
    gg(99, dk.bind(null, a, b));
    return null;
  }

  function dk(a, b) {
    do {
      Oj();
    } while (null !== yj);

    if (0 !== (X & 48)) throw Error(y(327));
    var c = a.finishedWork;
    if (null === c) return null;
    a.finishedWork = null;
    a.finishedLanes = 0;
    if (c === a.current) throw Error(y(177));
    a.callbackNode = null;
    var d = c.lanes | c.childLanes,
        e = d,
        f = a.pendingLanes & ~e;
    a.pendingLanes = e;
    a.suspendedLanes = 0;
    a.pingedLanes = 0;
    a.expiredLanes &= e;
    a.mutableReadLanes &= e;
    a.entangledLanes &= e;
    e = a.entanglements;

    for (var g = a.eventTimes, h = a.expirationTimes; 0 < f;) {
      var k = 31 - Vc(f),
          l = 1 << k;
      e[k] = 0;
      g[k] = -1;
      h[k] = -1;
      f &= ~l;
    }

    null !== Cj && 0 === (d & 24) && Cj.has(a) && Cj["delete"](a);
    a === U && (Y = U = null, W = 0);
    1 < c.flags ? null !== c.lastEffect ? (c.lastEffect.nextEffect = c, d = c.firstEffect) : d = c : d = c.firstEffect;

    if (null !== d) {
      e = X;
      X |= 32;
      pj.current = null;
      kf = fd;
      g = Ne();

      if (Oe(g)) {
        if ("selectionStart" in g) h = {
          start: g.selectionStart,
          end: g.selectionEnd
        };else a: if (h = (h = g.ownerDocument) && h.defaultView || window, (l = h.getSelection && h.getSelection()) && 0 !== l.rangeCount) {
          h = l.anchorNode;
          f = l.anchorOffset;
          k = l.focusNode;
          l = l.focusOffset;

          try {
            h.nodeType, k.nodeType;
          } catch (va) {
            h = null;
            break a;
          }

          var n = 0,
              A = -1,
              p = -1,
              C = 0,
              x = 0,
              w = g,
              z = null;

          b: for (;;) {
            for (var u;;) {
              w !== h || 0 !== f && 3 !== w.nodeType || (A = n + f);
              w !== k || 0 !== l && 3 !== w.nodeType || (p = n + l);
              3 === w.nodeType && (n += w.nodeValue.length);
              if (null === (u = w.firstChild)) break;
              z = w;
              w = u;
            }

            for (;;) {
              if (w === g) break b;
              z === h && ++C === f && (A = n);
              z === k && ++x === l && (p = n);
              if (null !== (u = w.nextSibling)) break;
              w = z;
              z = w.parentNode;
            }

            w = u;
          }

          h = -1 === A || -1 === p ? null : {
            start: A,
            end: p
          };
        } else h = null;
        h = h || {
          start: 0,
          end: 0
        };
      } else h = null;

      lf = {
        focusedElem: g,
        selectionRange: h
      };
      fd = !1;
      Ij = null;
      Jj = !1;
      Z = d;

      do {
        try {
          ek();
        } catch (va) {
          if (null === Z) throw Error(y(330));
          Wi(Z, va);
          Z = Z.nextEffect;
        }
      } while (null !== Z);

      Ij = null;
      Z = d;

      do {
        try {
          for (g = a; null !== Z;) {
            var t = Z.flags;
            t & 16 && pb(Z.stateNode, "");

            if (t & 128) {
              var q = Z.alternate;

              if (null !== q) {
                var v = q.ref;
                null !== v && ("function" === typeof v ? v(null) : v.current = null);
              }
            }

            switch (t & 1038) {
              case 2:
                fj(Z);
                Z.flags &= -3;
                break;

              case 6:
                fj(Z);
                Z.flags &= -3;
                ij(Z.alternate, Z);
                break;

              case 1024:
                Z.flags &= -1025;
                break;

              case 1028:
                Z.flags &= -1025;
                ij(Z.alternate, Z);
                break;

              case 4:
                ij(Z.alternate, Z);
                break;

              case 8:
                h = Z;
                cj(g, h);
                var J = h.alternate;
                dj(h);
                null !== J && dj(J);
            }

            Z = Z.nextEffect;
          }
        } catch (va) {
          if (null === Z) throw Error(y(330));
          Wi(Z, va);
          Z = Z.nextEffect;
        }
      } while (null !== Z);

      v = lf;
      q = Ne();
      t = v.focusedElem;
      g = v.selectionRange;

      if (q !== t && t && t.ownerDocument && Me(t.ownerDocument.documentElement, t)) {
        null !== g && Oe(t) && (q = g.start, v = g.end, void 0 === v && (v = q), "selectionStart" in t ? (t.selectionStart = q, t.selectionEnd = Math.min(v, t.value.length)) : (v = (q = t.ownerDocument || document) && q.defaultView || window, v.getSelection && (v = v.getSelection(), h = t.textContent.length, J = Math.min(g.start, h), g = void 0 === g.end ? J : Math.min(g.end, h), !v.extend && J > g && (h = g, g = J, J = h), h = Le(t, J), f = Le(t, g), h && f && (1 !== v.rangeCount || v.anchorNode !== h.node || v.anchorOffset !== h.offset || v.focusNode !== f.node || v.focusOffset !== f.offset) && (q = q.createRange(), q.setStart(h.node, h.offset), v.removeAllRanges(), J > g ? (v.addRange(q), v.extend(f.node, f.offset)) : (q.setEnd(f.node, f.offset), v.addRange(q))))));
        q = [];

        for (v = t; v = v.parentNode;) {
          1 === v.nodeType && q.push({
            element: v,
            left: v.scrollLeft,
            top: v.scrollTop
          });
        }

        "function" === typeof t.focus && t.focus();

        for (t = 0; t < q.length; t++) {
          v = q[t], v.element.scrollLeft = v.left, v.element.scrollTop = v.top;
        }
      }

      fd = !!kf;
      lf = kf = null;
      a.current = c;
      Z = d;

      do {
        try {
          for (t = a; null !== Z;) {
            var K = Z.flags;
            K & 36 && Yi(t, Z.alternate, Z);

            if (K & 128) {
              q = void 0;
              var Q = Z.ref;

              if (null !== Q) {
                var L = Z.stateNode;

                switch (Z.tag) {
                  case 5:
                    q = L;
                    break;

                  default:
                    q = L;
                }

                "function" === typeof Q ? Q(q) : Q.current = q;
              }
            }

            Z = Z.nextEffect;
          }
        } catch (va) {
          if (null === Z) throw Error(y(330));
          Wi(Z, va);
          Z = Z.nextEffect;
        }
      } while (null !== Z);

      Z = null;
      $f();
      X = e;
    } else a.current = c;

    if (xj) xj = !1, yj = a, zj = b;else for (Z = d; null !== Z;) {
      b = Z.nextEffect, Z.nextEffect = null, Z.flags & 8 && (K = Z, K.sibling = null, K.stateNode = null), Z = b;
    }
    d = a.pendingLanes;
    0 === d && (Ti = null);
    1 === d ? a === Ej ? Dj++ : (Dj = 0, Ej = a) : Dj = 0;
    c = c.stateNode;
    if (Mf && "function" === typeof Mf.onCommitFiberRoot) try {
      Mf.onCommitFiberRoot(Lf, c, void 0, 64 === (c.current.flags & 64));
    } catch (va) {}
    Mj(a, O());
    if (Qi) throw Qi = !1, a = Ri, Ri = null, a;
    if (0 !== (X & 8)) return null;
    ig();
    return null;
  }

  function ek() {
    for (; null !== Z;) {
      var a = Z.alternate;
      Jj || null === Ij || (0 !== (Z.flags & 8) ? dc(Z, Ij) && (Jj = !0) : 13 === Z.tag && mj(a, Z) && dc(Z, Ij) && (Jj = !0));
      var b = Z.flags;
      0 !== (b & 256) && Xi(a, Z);
      0 === (b & 512) || xj || (xj = !0, hg(97, function () {
        Oj();
        return null;
      }));
      Z = Z.nextEffect;
    }
  }

  function Oj() {
    if (90 !== zj) {
      var a = 97 < zj ? 97 : zj;
      zj = 90;
      return gg(a, fk);
    }

    return !1;
  }

  function $i(a, b) {
    Aj.push(b, a);
    xj || (xj = !0, hg(97, function () {
      Oj();
      return null;
    }));
  }

  function Zi(a, b) {
    Bj.push(b, a);
    xj || (xj = !0, hg(97, function () {
      Oj();
      return null;
    }));
  }

  function fk() {
    if (null === yj) return !1;
    var a = yj;
    yj = null;
    if (0 !== (X & 48)) throw Error(y(331));
    var b = X;
    X |= 32;
    var c = Bj;
    Bj = [];

    for (var d = 0; d < c.length; d += 2) {
      var e = c[d],
          f = c[d + 1],
          g = e.destroy;
      e.destroy = void 0;
      if ("function" === typeof g) try {
        g();
      } catch (k) {
        if (null === f) throw Error(y(330));
        Wi(f, k);
      }
    }

    c = Aj;
    Aj = [];

    for (d = 0; d < c.length; d += 2) {
      e = c[d];
      f = c[d + 1];

      try {
        var h = e.create;
        e.destroy = h();
      } catch (k) {
        if (null === f) throw Error(y(330));
        Wi(f, k);
      }
    }

    for (h = a.current.firstEffect; null !== h;) {
      a = h.nextEffect, h.nextEffect = null, h.flags & 8 && (h.sibling = null, h.stateNode = null), h = a;
    }

    X = b;
    ig();
    return !0;
  }

  function gk(a, b, c) {
    b = Mi(c, b);
    b = Pi(a, b, 1);
    Ag(a, b);
    b = Hg();
    a = Kj(a, 1);
    null !== a && ($c(a, 1, b), Mj(a, b));
  }

  function Wi(a, b) {
    if (3 === a.tag) gk(a, a, b);else for (var c = a["return"]; null !== c;) {
      if (3 === c.tag) {
        gk(c, a, b);
        break;
      } else if (1 === c.tag) {
        var d = c.stateNode;

        if ("function" === typeof c.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === Ti || !Ti.has(d))) {
          a = Mi(b, a);
          var e = Si(c, a, 1);
          Ag(c, e);
          e = Hg();
          c = Kj(c, 1);
          if (null !== c) $c(c, 1, e), Mj(c, e);else if ("function" === typeof d.componentDidCatch && (null === Ti || !Ti.has(d))) try {
            d.componentDidCatch(b, a);
          } catch (f) {}
          break;
        }
      }

      c = c["return"];
    }
  }

  function Yj(a, b, c) {
    var d = a.pingCache;
    null !== d && d["delete"](b);
    b = Hg();
    a.pingedLanes |= a.suspendedLanes & c;
    U === a && (W & c) === c && (4 === V || 3 === V && (W & 62914560) === W && 500 > O() - jj ? Qj(a, 0) : uj |= c);
    Mj(a, b);
  }

  function lj(a, b) {
    var c = a.stateNode;
    null !== c && c["delete"](b);
    b = 0;
    0 === b && (b = a.mode, 0 === (b & 2) ? b = 1 : 0 === (b & 4) ? b = 99 === eg() ? 1 : 2 : (0 === Gj && (Gj = tj), b = Yc(62914560 & ~Gj), 0 === b && (b = 4194304)));
    c = Hg();
    a = Kj(a, b);
    null !== a && ($c(a, b, c), Mj(a, c));
  }

  var ck;

  ck = function ck(a, b, c) {
    var d = b.lanes;
    if (null !== a) {
      if (a.memoizedProps !== b.pendingProps || N.current) ug = !0;else if (0 !== (c & d)) ug = 0 !== (a.flags & 16384) ? !0 : !1;else {
        ug = !1;

        switch (b.tag) {
          case 3:
            ri(b);
            sh();
            break;

          case 5:
            gh(b);
            break;

          case 1:
            Ff(b.type) && Jf(b);
            break;

          case 4:
            eh(b, b.stateNode.containerInfo);
            break;

          case 10:
            d = b.memoizedProps.value;
            var e = b.type._context;
            I(mg, e._currentValue);
            e._currentValue = d;
            break;

          case 13:
            if (null !== b.memoizedState) {
              if (0 !== (c & b.child.childLanes)) return ti(a, b, c);
              I(P, P.current & 1);
              b = hi(a, b, c);
              return null !== b ? b.sibling : null;
            }

            I(P, P.current & 1);
            break;

          case 19:
            d = 0 !== (c & b.childLanes);

            if (0 !== (a.flags & 64)) {
              if (d) return Ai(a, b, c);
              b.flags |= 64;
            }

            e = b.memoizedState;
            null !== e && (e.rendering = null, e.tail = null, e.lastEffect = null);
            I(P, P.current);
            if (d) break;else return null;

          case 23:
          case 24:
            return b.lanes = 0, mi(a, b, c);
        }

        return hi(a, b, c);
      }
    } else ug = !1;
    b.lanes = 0;

    switch (b.tag) {
      case 2:
        d = b.type;
        null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
        a = b.pendingProps;
        e = Ef(b, M.current);
        tg(b, c);
        e = Ch(null, b, d, a, e, c);
        b.flags |= 1;

        if ("object" === _typeof(e) && null !== e && "function" === typeof e.render && void 0 === e.$$typeof) {
          b.tag = 1;
          b.memoizedState = null;
          b.updateQueue = null;

          if (Ff(d)) {
            var f = !0;
            Jf(b);
          } else f = !1;

          b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null;
          xg(b);
          var g = d.getDerivedStateFromProps;
          "function" === typeof g && Gg(b, d, g, a);
          e.updater = Kg;
          b.stateNode = e;
          e._reactInternals = b;
          Og(b, d, a, c);
          b = qi(null, b, d, !0, f, c);
        } else b.tag = 0, fi(null, b, e, c), b = b.child;

        return b;

      case 16:
        e = b.elementType;

        a: {
          null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
          a = b.pendingProps;
          f = e._init;
          e = f(e._payload);
          b.type = e;
          f = b.tag = hk(e);
          a = lg(e, a);

          switch (f) {
            case 0:
              b = li(null, b, e, a, c);
              break a;

            case 1:
              b = pi(null, b, e, a, c);
              break a;

            case 11:
              b = gi(null, b, e, a, c);
              break a;

            case 14:
              b = ii(null, b, e, lg(e.type, a), d, c);
              break a;
          }

          throw Error(y(306, e, ""));
        }

        return b;

      case 0:
        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : lg(d, e), li(a, b, d, e, c);

      case 1:
        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : lg(d, e), pi(a, b, d, e, c);

      case 3:
        ri(b);
        d = b.updateQueue;
        if (null === a || null === d) throw Error(y(282));
        d = b.pendingProps;
        e = b.memoizedState;
        e = null !== e ? e.element : null;
        yg(a, b);
        Cg(b, d, null, c);
        d = b.memoizedState.element;
        if (d === e) sh(), b = hi(a, b, c);else {
          e = b.stateNode;
          if (f = e.hydrate) kh = rf(b.stateNode.containerInfo.firstChild), jh = b, f = lh = !0;

          if (f) {
            a = e.mutableSourceEagerHydrationData;
            if (null != a) for (e = 0; e < a.length; e += 2) {
              f = a[e], f._workInProgressVersionPrimary = a[e + 1], th.push(f);
            }
            c = Zg(b, null, d, c);

            for (b.child = c; c;) {
              c.flags = c.flags & -3 | 1024, c = c.sibling;
            }
          } else fi(a, b, d, c), sh();

          b = b.child;
        }
        return b;

      case 5:
        return gh(b), null === a && ph(b), d = b.type, e = b.pendingProps, f = null !== a ? a.memoizedProps : null, g = e.children, nf(d, e) ? g = null : null !== f && nf(d, f) && (b.flags |= 16), oi(a, b), fi(a, b, g, c), b.child;

      case 6:
        return null === a && ph(b), null;

      case 13:
        return ti(a, b, c);

      case 4:
        return eh(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = Yg(b, null, d, c) : fi(a, b, d, c), b.child;

      case 11:
        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : lg(d, e), gi(a, b, d, e, c);

      case 7:
        return fi(a, b, b.pendingProps, c), b.child;

      case 8:
        return fi(a, b, b.pendingProps.children, c), b.child;

      case 12:
        return fi(a, b, b.pendingProps.children, c), b.child;

      case 10:
        a: {
          d = b.type._context;
          e = b.pendingProps;
          g = b.memoizedProps;
          f = e.value;
          var h = b.type._context;
          I(mg, h._currentValue);
          h._currentValue = f;
          if (null !== g) if (h = g.value, f = He(h, f) ? 0 : ("function" === typeof d._calculateChangedBits ? d._calculateChangedBits(h, f) : 1073741823) | 0, 0 === f) {
            if (g.children === e.children && !N.current) {
              b = hi(a, b, c);
              break a;
            }
          } else for (h = b.child, null !== h && (h["return"] = b); null !== h;) {
            var k = h.dependencies;

            if (null !== k) {
              g = h.child;

              for (var l = k.firstContext; null !== l;) {
                if (l.context === d && 0 !== (l.observedBits & f)) {
                  1 === h.tag && (l = zg(-1, c & -c), l.tag = 2, Ag(h, l));
                  h.lanes |= c;
                  l = h.alternate;
                  null !== l && (l.lanes |= c);
                  sg(h["return"], c);
                  k.lanes |= c;
                  break;
                }

                l = l.next;
              }
            } else g = 10 === h.tag ? h.type === b.type ? null : h.child : h.child;

            if (null !== g) g["return"] = h;else for (g = h; null !== g;) {
              if (g === b) {
                g = null;
                break;
              }

              h = g.sibling;

              if (null !== h) {
                h["return"] = g["return"];
                g = h;
                break;
              }

              g = g["return"];
            }
            h = g;
          }
          fi(a, b, e.children, c);
          b = b.child;
        }

        return b;

      case 9:
        return e = b.type, f = b.pendingProps, d = f.children, tg(b, c), e = vg(e, f.unstable_observedBits), d = d(e), b.flags |= 1, fi(a, b, d, c), b.child;

      case 14:
        return e = b.type, f = lg(e, b.pendingProps), f = lg(e.type, f), ii(a, b, e, f, d, c);

      case 15:
        return ki(a, b, b.type, b.pendingProps, d, c);

      case 17:
        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : lg(d, e), null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2), b.tag = 1, Ff(d) ? (a = !0, Jf(b)) : a = !1, tg(b, c), Mg(b, d, e), Og(b, d, e, c), qi(null, b, d, !0, a, c);

      case 19:
        return Ai(a, b, c);

      case 23:
        return mi(a, b, c);

      case 24:
        return mi(a, b, c);
    }

    throw Error(y(156, b.tag));
  };

  function ik(a, b, c, d) {
    this.tag = a;
    this.key = c;
    this.sibling = this.child = this["return"] = this.stateNode = this.type = this.elementType = null;
    this.index = 0;
    this.ref = null;
    this.pendingProps = b;
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
    this.mode = d;
    this.flags = 0;
    this.lastEffect = this.firstEffect = this.nextEffect = null;
    this.childLanes = this.lanes = 0;
    this.alternate = null;
  }

  function nh(a, b, c, d) {
    return new ik(a, b, c, d);
  }

  function ji(a) {
    a = a.prototype;
    return !(!a || !a.isReactComponent);
  }

  function hk(a) {
    if ("function" === typeof a) return ji(a) ? 1 : 0;

    if (void 0 !== a && null !== a) {
      a = a.$$typeof;
      if (a === Aa) return 11;
      if (a === Da) return 14;
    }

    return 2;
  }

  function Tg(a, b) {
    var c = a.alternate;
    null === c ? (c = nh(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.nextEffect = null, c.firstEffect = null, c.lastEffect = null);
    c.childLanes = a.childLanes;
    c.lanes = a.lanes;
    c.child = a.child;
    c.memoizedProps = a.memoizedProps;
    c.memoizedState = a.memoizedState;
    c.updateQueue = a.updateQueue;
    b = a.dependencies;
    c.dependencies = null === b ? null : {
      lanes: b.lanes,
      firstContext: b.firstContext
    };
    c.sibling = a.sibling;
    c.index = a.index;
    c.ref = a.ref;
    return c;
  }

  function Vg(a, b, c, d, e, f) {
    var g = 2;
    d = a;
    if ("function" === typeof a) ji(a) && (g = 1);else if ("string" === typeof a) g = 5;else a: switch (a) {
      case ua:
        return Xg(c.children, e, f, b);

      case Ha:
        g = 8;
        e |= 16;
        break;

      case wa:
        g = 8;
        e |= 1;
        break;

      case xa:
        return a = nh(12, c, b, e | 8), a.elementType = xa, a.type = xa, a.lanes = f, a;

      case Ba:
        return a = nh(13, c, b, e), a.type = Ba, a.elementType = Ba, a.lanes = f, a;

      case Ca:
        return a = nh(19, c, b, e), a.elementType = Ca, a.lanes = f, a;

      case Ia:
        return vi(c, e, f, b);

      case Ja:
        return a = nh(24, c, b, e), a.elementType = Ja, a.lanes = f, a;

      default:
        if ("object" === _typeof(a) && null !== a) switch (a.$$typeof) {
          case ya:
            g = 10;
            break a;

          case za:
            g = 9;
            break a;

          case Aa:
            g = 11;
            break a;

          case Da:
            g = 14;
            break a;

          case Ea:
            g = 16;
            d = null;
            break a;

          case Fa:
            g = 22;
            break a;
        }
        throw Error(y(130, null == a ? a : _typeof(a), ""));
    }
    b = nh(g, c, b, e);
    b.elementType = a;
    b.type = d;
    b.lanes = f;
    return b;
  }

  function Xg(a, b, c, d) {
    a = nh(7, a, d, b);
    a.lanes = c;
    return a;
  }

  function vi(a, b, c, d) {
    a = nh(23, a, d, b);
    a.elementType = Ia;
    a.lanes = c;
    return a;
  }

  function Ug(a, b, c) {
    a = nh(6, a, null, b);
    a.lanes = c;
    return a;
  }

  function Wg(a, b, c) {
    b = nh(4, null !== a.children ? a.children : [], a.key, b);
    b.lanes = c;
    b.stateNode = {
      containerInfo: a.containerInfo,
      pendingChildren: null,
      implementation: a.implementation
    };
    return b;
  }

  function jk(a, b, c) {
    this.tag = b;
    this.containerInfo = a;
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
    this.timeoutHandle = -1;
    this.pendingContext = this.context = null;
    this.hydrate = c;
    this.callbackNode = null;
    this.callbackPriority = 0;
    this.eventTimes = Zc(0);
    this.expirationTimes = Zc(-1);
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
    this.entanglements = Zc(0);
    this.mutableSourceEagerHydrationData = null;
  }

  function kk(a, b, c) {
    var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
    return {
      $$typeof: ta,
      key: null == d ? null : "" + d,
      children: a,
      containerInfo: b,
      implementation: c
    };
  }

  function lk(a, b, c, d) {
    var e = b.current,
        f = Hg(),
        g = Ig(e);

    a: if (c) {
      c = c._reactInternals;

      b: {
        if (Zb(c) !== c || 1 !== c.tag) throw Error(y(170));
        var h = c;

        do {
          switch (h.tag) {
            case 3:
              h = h.stateNode.context;
              break b;

            case 1:
              if (Ff(h.type)) {
                h = h.stateNode.__reactInternalMemoizedMergedChildContext;
                break b;
              }

          }

          h = h["return"];
        } while (null !== h);

        throw Error(y(171));
      }

      if (1 === c.tag) {
        var k = c.type;

        if (Ff(k)) {
          c = If(c, k, h);
          break a;
        }
      }

      c = h;
    } else c = Cf;

    null === b.context ? b.context = c : b.pendingContext = c;
    b = zg(f, g);
    b.payload = {
      element: a
    };
    d = void 0 === d ? null : d;
    null !== d && (b.callback = d);
    Ag(e, b);
    Jg(e, g, f);
    return g;
  }

  function mk(a) {
    a = a.current;
    if (!a.child) return null;

    switch (a.child.tag) {
      case 5:
        return a.child.stateNode;

      default:
        return a.child.stateNode;
    }
  }

  function nk(a, b) {
    a = a.memoizedState;

    if (null !== a && null !== a.dehydrated) {
      var c = a.retryLane;
      a.retryLane = 0 !== c && c < b ? c : b;
    }
  }

  function ok(a, b) {
    nk(a, b);
    (a = a.alternate) && nk(a, b);
  }

  function pk() {
    return null;
  }

  function qk(a, b, c) {
    var d = null != c && null != c.hydrationOptions && c.hydrationOptions.mutableSources || null;
    c = new jk(a, b, null != c && !0 === c.hydrate);
    b = nh(3, null, null, 2 === b ? 7 : 1 === b ? 3 : 0);
    c.current = b;
    b.stateNode = c;
    xg(b);
    a[ff] = c.current;
    cf(8 === a.nodeType ? a.parentNode : a);
    if (d) for (a = 0; a < d.length; a++) {
      b = d[a];
      var e = b._getVersion;
      e = e(b._source);
      null == c.mutableSourceEagerHydrationData ? c.mutableSourceEagerHydrationData = [b, e] : c.mutableSourceEagerHydrationData.push(b, e);
    }
    this._internalRoot = c;
  }

  qk.prototype.render = function (a) {
    lk(a, this._internalRoot, null, null);
  };

  qk.prototype.unmount = function () {
    var a = this._internalRoot,
        b = a.containerInfo;
    lk(null, a, null, function () {
      b[ff] = null;
    });
  };

  function rk(a) {
    return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
  }

  function sk(a, b) {
    b || (b = a ? 9 === a.nodeType ? a.documentElement : a.firstChild : null, b = !(!b || 1 !== b.nodeType || !b.hasAttribute("data-reactroot")));
    if (!b) for (var c; c = a.lastChild;) {
      a.removeChild(c);
    }
    return new qk(a, 0, b ? {
      hydrate: !0
    } : void 0);
  }

  function tk(a, b, c, d, e) {
    var f = c._reactRootContainer;

    if (f) {
      var g = f._internalRoot;

      if ("function" === typeof e) {
        var h = e;

        e = function e() {
          var a = mk(g);
          h.call(a);
        };
      }

      lk(b, g, a, e);
    } else {
      f = c._reactRootContainer = sk(c, d);
      g = f._internalRoot;

      if ("function" === typeof e) {
        var k = e;

        e = function e() {
          var a = mk(g);
          k.call(a);
        };
      }

      Xj(function () {
        lk(b, g, a, e);
      });
    }

    return mk(g);
  }

  ec = function ec(a) {
    if (13 === a.tag) {
      var b = Hg();
      Jg(a, 4, b);
      ok(a, 4);
    }
  };

  fc = function fc(a) {
    if (13 === a.tag) {
      var b = Hg();
      Jg(a, 67108864, b);
      ok(a, 67108864);
    }
  };

  gc = function gc(a) {
    if (13 === a.tag) {
      var b = Hg(),
          c = Ig(a);
      Jg(a, c, b);
      ok(a, c);
    }
  };

  hc = function hc(a, b) {
    return b();
  };

  yb = function yb(a, b, c) {
    switch (b) {
      case "input":
        ab(a, c);
        b = c.name;

        if ("radio" === c.type && null != b) {
          for (c = a; c.parentNode;) {
            c = c.parentNode;
          }

          c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');

          for (b = 0; b < c.length; b++) {
            var d = c[b];

            if (d !== a && d.form === a.form) {
              var e = Db(d);
              if (!e) throw Error(y(90));
              Wa(d);
              ab(d, e);
            }
          }
        }

        break;

      case "textarea":
        ib(a, c);
        break;

      case "select":
        b = c.value, null != b && fb(a, !!c.multiple, b, !1);
    }
  };

  Gb = Wj;

  Hb = function Hb(a, b, c, d, e) {
    var f = X;
    X |= 4;

    try {
      return gg(98, a.bind(null, b, c, d, e));
    } finally {
      X = f, 0 === X && (wj(), ig());
    }
  };

  Ib = function Ib() {
    0 === (X & 49) && (Vj(), Oj());
  };

  Jb = function Jb(a, b) {
    var c = X;
    X |= 2;

    try {
      return a(b);
    } finally {
      X = c, 0 === X && (wj(), ig());
    }
  };

  function uk(a, b) {
    var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
    if (!rk(b)) throw Error(y(200));
    return kk(a, b, null, c);
  }

  var vk = {
    Events: [Cb, ue, Db, Eb, Fb, Oj, {
      current: !1
    }]
  },
      wk = {
    findFiberByHostInstance: wc,
    bundleType: 0,
    version: "17.0.2",
    rendererPackageName: "react-dom"
  };
  var xk = {
    bundleType: wk.bundleType,
    version: wk.version,
    rendererPackageName: wk.rendererPackageName,
    rendererConfig: wk.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: ra.ReactCurrentDispatcher,
    findHostInstanceByFiber: function findHostInstanceByFiber(a) {
      a = cc(a);
      return null === a ? null : a.stateNode;
    },
    findFiberByHostInstance: wk.findFiberByHostInstance || pk,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null
  };

  if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
    var yk = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!yk.isDisabled && yk.supportsFiber) try {
      Lf = yk.inject(xk), Mf = yk;
    } catch (a) {}
  }

  reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vk;
  reactDom_production_min.createPortal = uk;

  reactDom_production_min.findDOMNode = function (a) {
    if (null == a) return null;
    if (1 === a.nodeType) return a;
    var b = a._reactInternals;

    if (void 0 === b) {
      if ("function" === typeof a.render) throw Error(y(188));
      throw Error(y(268, Object.keys(a)));
    }

    a = cc(b);
    a = null === a ? null : a.stateNode;
    return a;
  };

  reactDom_production_min.flushSync = function (a, b) {
    var c = X;
    if (0 !== (c & 48)) return a(b);
    X |= 1;

    try {
      if (a) return gg(99, a.bind(null, b));
    } finally {
      X = c, ig();
    }
  };

  reactDom_production_min.hydrate = function (a, b, c) {
    if (!rk(b)) throw Error(y(200));
    return tk(null, a, b, !0, c);
  };

  reactDom_production_min.render = function (a, b, c) {
    if (!rk(b)) throw Error(y(200));
    return tk(null, a, b, !1, c);
  };

  reactDom_production_min.unmountComponentAtNode = function (a) {
    if (!rk(a)) throw Error(y(40));
    return a._reactRootContainer ? (Xj(function () {
      tk(null, null, a, !1, function () {
        a._reactRootContainer = null;
        a[ff] = null;
      });
    }), !0) : !1;
  };

  reactDom_production_min.unstable_batchedUpdates = Wj;

  reactDom_production_min.unstable_createPortal = function (a, b) {
    return uk(a, b, 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null);
  };

  reactDom_production_min.unstable_renderSubtreeIntoContainer = function (a, b, c, d) {
    if (!rk(c)) throw Error(y(200));
    if (null == a || void 0 === a._reactInternals) throw Error(y(38));
    return tk(a, b, c, !1, d);
  };

  reactDom_production_min.version = "17.0.2";

  function checkDCE() {
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function') {
      return;
    }

    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
    } catch (err) {
      console.error(err);
    }
  }

  {
    checkDCE();
    reactDom.exports = reactDom_production_min;
  }
  var react_dom = reactDom.exports;

  function _extends$1() {
    _extends$1 = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends$1.apply(this, arguments);
  }

  var Action;

  (function (Action) {
    Action["Pop"] = "POP";
    Action["Push"] = "PUSH";
    Action["Replace"] = "REPLACE";
  })(Action || (Action = {}));

  var readOnly = function readOnly(obj) {
    return obj;
  };

  var BeforeUnloadEventType = 'beforeunload';
  var HashChangeEventType = 'hashchange';
  var PopStateEventType = 'popstate';

  function createHashHistory(options) {
    if (options === void 0) {
      options = {};
    }

    var _options2 = options,
        _options2$window = _options2.window,
        window = _options2$window === void 0 ? document.defaultView : _options2$window;
    var globalHistory = window.history;

    function getIndexAndLocation() {
      var _parsePath = parsePath(window.location.hash.substr(1)),
          _parsePath$pathname = _parsePath.pathname,
          pathname = _parsePath$pathname === void 0 ? '/' : _parsePath$pathname,
          _parsePath$search = _parsePath.search,
          search = _parsePath$search === void 0 ? '' : _parsePath$search,
          _parsePath$hash = _parsePath.hash,
          hash = _parsePath$hash === void 0 ? '' : _parsePath$hash;

      var state = globalHistory.state || {};
      return [state.idx, readOnly({
        pathname: pathname,
        search: search,
        hash: hash,
        state: state.usr || null,
        key: state.key || 'default'
      })];
    }

    var blockedPopTx = null;

    function handlePop() {
      if (blockedPopTx) {
        blockers.call(blockedPopTx);
        blockedPopTx = null;
      } else {
        var nextAction = Action.Pop;

        var _getIndexAndLocation4 = getIndexAndLocation(),
            nextIndex = _getIndexAndLocation4[0],
            nextLocation = _getIndexAndLocation4[1];

        if (blockers.length) {
          if (nextIndex != null) {
            var delta = index - nextIndex;

            if (delta) {
              blockedPopTx = {
                action: nextAction,
                location: nextLocation,
                retry: function retry() {
                  go(delta * -1);
                }
              };
              go(delta);
            }
          }
        } else {
          applyTx(nextAction);
        }
      }
    }

    window.addEventListener(PopStateEventType, handlePop);
    window.addEventListener(HashChangeEventType, function () {
      var _getIndexAndLocation5 = getIndexAndLocation(),
          nextLocation = _getIndexAndLocation5[1];

      if (createPath(nextLocation) !== createPath(location)) {
        handlePop();
      }
    });
    var action = Action.Pop;

    var _getIndexAndLocation6 = getIndexAndLocation(),
        index = _getIndexAndLocation6[0],
        location = _getIndexAndLocation6[1];

    var listeners = createEvents();
    var blockers = createEvents();

    if (index == null) {
      index = 0;
      globalHistory.replaceState(_extends$1({}, globalHistory.state, {
        idx: index
      }), '');
    }

    function getBaseHref() {
      var base = document.querySelector('base');
      var href = '';

      if (base && base.getAttribute('href')) {
        var url = window.location.href;
        var hashIndex = url.indexOf('#');
        href = hashIndex === -1 ? url : url.slice(0, hashIndex);
      }

      return href;
    }

    function createHref(to) {
      return getBaseHref() + '#' + (typeof to === 'string' ? to : createPath(to));
    }

    function getNextLocation(to, state) {
      if (state === void 0) {
        state = null;
      }

      return readOnly(_extends$1({
        pathname: location.pathname,
        hash: '',
        search: ''
      }, typeof to === 'string' ? parsePath(to) : to, {
        state: state,
        key: createKey()
      }));
    }

    function getHistoryStateAndUrl(nextLocation, index) {
      return [{
        usr: nextLocation.state,
        key: nextLocation.key,
        idx: index
      }, createHref(nextLocation)];
    }

    function allowTx(action, location, retry) {
      return !blockers.length || (blockers.call({
        action: action,
        location: location,
        retry: retry
      }), false);
    }

    function applyTx(nextAction) {
      action = nextAction;

      var _getIndexAndLocation7 = getIndexAndLocation();

      index = _getIndexAndLocation7[0];
      location = _getIndexAndLocation7[1];
      listeners.call({
        action: action,
        location: location
      });
    }

    function push(to, state) {
      var nextAction = Action.Push;
      var nextLocation = getNextLocation(to, state);

      function retry() {
        push(to, state);
      }

      if (allowTx(nextAction, nextLocation, retry)) {
        var _getHistoryStateAndUr3 = getHistoryStateAndUrl(nextLocation, index + 1),
            historyState = _getHistoryStateAndUr3[0],
            url = _getHistoryStateAndUr3[1];

        try {
          globalHistory.pushState(historyState, '', url);
        } catch (error) {
          window.location.assign(url);
        }

        applyTx(nextAction);
      }
    }

    function replace(to, state) {
      var nextAction = Action.Replace;
      var nextLocation = getNextLocation(to, state);

      function retry() {
        replace(to, state);
      }

      if (allowTx(nextAction, nextLocation, retry)) {
        var _getHistoryStateAndUr4 = getHistoryStateAndUrl(nextLocation, index),
            historyState = _getHistoryStateAndUr4[0],
            url = _getHistoryStateAndUr4[1];

        globalHistory.replaceState(historyState, '', url);
        applyTx(nextAction);
      }
    }

    function go(delta) {
      globalHistory.go(delta);
    }

    var history = {
      get action() {
        return action;
      },

      get location() {
        return location;
      },

      createHref: createHref,
      push: push,
      replace: replace,
      go: go,
      back: function back() {
        go(-1);
      },
      forward: function forward() {
        go(1);
      },
      listen: function listen(listener) {
        return listeners.push(listener);
      },
      block: function block(blocker) {
        var unblock = blockers.push(blocker);

        if (blockers.length === 1) {
          window.addEventListener(BeforeUnloadEventType, promptBeforeUnload);
        }

        return function () {
          unblock();

          if (!blockers.length) {
            window.removeEventListener(BeforeUnloadEventType, promptBeforeUnload);
          }
        };
      }
    };
    return history;
  }

  function promptBeforeUnload(event) {
    event.preventDefault();
    event.returnValue = '';
  }

  function createEvents() {
    var handlers = [];
    return {
      get length() {
        return handlers.length;
      },

      push: function push(fn) {
        handlers.push(fn);
        return function () {
          handlers = handlers.filter(function (handler) {
            return handler !== fn;
          });
        };
      },
      call: function call(arg) {
        handlers.forEach(function (fn) {
          return fn && fn(arg);
        });
      }
    };
  }

  function createKey() {
    return Math.random().toString(36).substr(2, 8);
  }

  function createPath(_ref) {
    var _ref$pathname = _ref.pathname,
        pathname = _ref$pathname === void 0 ? '/' : _ref$pathname,
        _ref$search = _ref.search,
        search = _ref$search === void 0 ? '' : _ref$search,
        _ref$hash = _ref.hash,
        hash = _ref$hash === void 0 ? '' : _ref$hash;
    if (search && search !== '?') pathname += search.charAt(0) === '?' ? search : '?' + search;
    if (hash && hash !== '#') pathname += hash.charAt(0) === '#' ? hash : '#' + hash;
    return pathname;
  }

  function parsePath(path) {
    var parsedPath = {};

    if (path) {
      var hashIndex = path.indexOf('#');

      if (hashIndex >= 0) {
        parsedPath.hash = path.substr(hashIndex);
        path = path.substr(0, hashIndex);
      }

      var searchIndex = path.indexOf('?');

      if (searchIndex >= 0) {
        parsedPath.search = path.substr(searchIndex);
        path = path.substr(0, searchIndex);
      }

      if (path) {
        parsedPath.pathname = path;
      }
    }

    return parsedPath;
  }
  /**
   * React Router v6.2.2
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */


  function invariant(cond, message) {
    if (!cond) throw new Error(message);
  }

  var NavigationContext = react.exports.createContext(null);
  var LocationContext = react.exports.createContext(null);
  var RouteContext = react.exports.createContext({
    outlet: null,
    matches: []
  });

  function Route(_props) {
    invariant(false);
  }

  function Router(_ref3) {
    var _ref3$basename = _ref3.basename,
        basenameProp = _ref3$basename === void 0 ? "/" : _ref3$basename,
        _ref3$children = _ref3.children,
        children = _ref3$children === void 0 ? null : _ref3$children,
        locationProp = _ref3.location,
        _ref3$navigationType = _ref3.navigationType,
        navigationType = _ref3$navigationType === void 0 ? Action.Pop : _ref3$navigationType,
        navigator = _ref3.navigator,
        _ref3$static = _ref3["static"],
        staticProp = _ref3$static === void 0 ? false : _ref3$static;
    !!useInRouterContext() ? invariant(false) : void 0;
    var basename = normalizePathname(basenameProp);
    var navigationContext = react.exports.useMemo(function () {
      return {
        basename: basename,
        navigator: navigator,
        "static": staticProp
      };
    }, [basename, navigator, staticProp]);

    if (typeof locationProp === "string") {
      locationProp = parsePath(locationProp);
    }

    var _locationProp = locationProp,
        _locationProp$pathnam = _locationProp.pathname,
        pathname = _locationProp$pathnam === void 0 ? "/" : _locationProp$pathnam,
        _locationProp$search = _locationProp.search,
        search = _locationProp$search === void 0 ? "" : _locationProp$search,
        _locationProp$hash = _locationProp.hash,
        hash = _locationProp$hash === void 0 ? "" : _locationProp$hash,
        _locationProp$state = _locationProp.state,
        state = _locationProp$state === void 0 ? null : _locationProp$state,
        _locationProp$key = _locationProp.key,
        key = _locationProp$key === void 0 ? "default" : _locationProp$key;
    var location = react.exports.useMemo(function () {
      var trailingPathname = stripBasename(pathname, basename);

      if (trailingPathname == null) {
        return null;
      }

      return {
        pathname: trailingPathname,
        search: search,
        hash: hash,
        state: state,
        key: key
      };
    }, [basename, pathname, search, hash, state, key]);

    if (location == null) {
      return null;
    }

    return react.exports.createElement(NavigationContext.Provider, {
      value: navigationContext
    }, react.exports.createElement(LocationContext.Provider, {
      children: children,
      value: {
        location: location,
        navigationType: navigationType
      }
    }));
  }

  function Routes$2(_ref4) {
    var children = _ref4.children,
        location = _ref4.location;
    return useRoutes(createRoutesFromChildren(children), location);
  }

  function useHref(to) {
    !useInRouterContext() ? invariant(false) : void 0;

    var _react$exports$useCon = react.exports.useContext(NavigationContext),
        basename = _react$exports$useCon.basename,
        navigator = _react$exports$useCon.navigator;

    var _useResolvedPath = useResolvedPath(to),
        hash = _useResolvedPath.hash,
        pathname = _useResolvedPath.pathname,
        search = _useResolvedPath.search;

    var joinedPathname = pathname;

    if (basename !== "/") {
      var toPathname = getToPathname(to);
      var endsWithSlash = toPathname != null && toPathname.endsWith("/");
      joinedPathname = pathname === "/" ? basename + (endsWithSlash ? "/" : "") : joinPaths([basename, pathname]);
    }

    return navigator.createHref({
      pathname: joinedPathname,
      search: search,
      hash: hash
    });
  }

  function useInRouterContext() {
    return react.exports.useContext(LocationContext) != null;
  }

  function useLocation() {
    !useInRouterContext() ? invariant(false) : void 0;
    return react.exports.useContext(LocationContext).location;
  }

  function useNavigate() {
    !useInRouterContext() ? invariant(false) : void 0;

    var _react$exports$useCon2 = react.exports.useContext(NavigationContext),
        basename = _react$exports$useCon2.basename,
        navigator = _react$exports$useCon2.navigator;

    var _react$exports$useCon3 = react.exports.useContext(RouteContext),
        matches = _react$exports$useCon3.matches;

    var _useLocation = useLocation(),
        locationPathname = _useLocation.pathname;

    var routePathnamesJson = JSON.stringify(matches.map(function (match) {
      return match.pathnameBase;
    }));
    var activeRef = react.exports.useRef(false);
    react.exports.useEffect(function () {
      activeRef.current = true;
    });
    var navigate = react.exports.useCallback(function (to, options) {
      if (options === void 0) {
        options = {};
      }

      if (!activeRef.current) return;

      if (typeof to === "number") {
        navigator.go(to);
        return;
      }

      var path = resolveTo(to, JSON.parse(routePathnamesJson), locationPathname);

      if (basename !== "/") {
        path.pathname = joinPaths([basename, path.pathname]);
      }

      (!!options.replace ? navigator.replace : navigator.push)(path, options.state);
    }, [basename, navigator, routePathnamesJson, locationPathname]);
    return navigate;
  }

  function useParams() {
    var _react$exports$useCon4 = react.exports.useContext(RouteContext),
        matches = _react$exports$useCon4.matches;

    var routeMatch = matches[matches.length - 1];
    return routeMatch ? routeMatch.params : {};
  }

  function useResolvedPath(to) {
    var _react$exports$useCon5 = react.exports.useContext(RouteContext),
        matches = _react$exports$useCon5.matches;

    var _useLocation2 = useLocation(),
        locationPathname = _useLocation2.pathname;

    var routePathnamesJson = JSON.stringify(matches.map(function (match) {
      return match.pathnameBase;
    }));
    return react.exports.useMemo(function () {
      return resolveTo(to, JSON.parse(routePathnamesJson), locationPathname);
    }, [to, routePathnamesJson, locationPathname]);
  }

  function useRoutes(routes, locationArg) {
    !useInRouterContext() ? invariant(false) : void 0;

    var _react$exports$useCon6 = react.exports.useContext(RouteContext),
        parentMatches = _react$exports$useCon6.matches;

    var routeMatch = parentMatches[parentMatches.length - 1];
    var parentParams = routeMatch ? routeMatch.params : {};
    routeMatch ? routeMatch.pathname : "/";
    var parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
    routeMatch && routeMatch.route;
    var locationFromContext = useLocation();
    var location;

    if (locationArg) {
      var _parsedLocationArg$pa;

      var parsedLocationArg = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
      !(parentPathnameBase === "/" || ((_parsedLocationArg$pa = parsedLocationArg.pathname) == null ? void 0 : _parsedLocationArg$pa.startsWith(parentPathnameBase))) ? invariant(false) : void 0;
      location = parsedLocationArg;
    } else {
      location = locationFromContext;
    }

    var pathname = location.pathname || "/";
    var remainingPathname = parentPathnameBase === "/" ? pathname : pathname.slice(parentPathnameBase.length) || "/";
    var matches = matchRoutes(routes, {
      pathname: remainingPathname
    });
    return _renderMatches(matches && matches.map(function (match) {
      return Object.assign({}, match, {
        params: Object.assign({}, parentParams, match.params),
        pathname: joinPaths([parentPathnameBase, match.pathname]),
        pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : joinPaths([parentPathnameBase, match.pathnameBase])
      });
    }), parentMatches);
  }

  function createRoutesFromChildren(children) {
    var routes = [];
    react.exports.Children.forEach(children, function (element) {
      if (!react.exports.isValidElement(element)) {
        return;
      }

      if (element.type === react.exports.Fragment) {
        routes.push.apply(routes, createRoutesFromChildren(element.props.children));
        return;
      }

      !(element.type === Route) ? invariant(false) : void 0;
      var route = {
        caseSensitive: element.props.caseSensitive,
        element: element.props.element,
        index: element.props.index,
        path: element.props.path
      };

      if (element.props.children) {
        route.children = createRoutesFromChildren(element.props.children);
      }

      routes.push(route);
    });
    return routes;
  }

  function generatePath(path, params) {
    if (params === void 0) {
      params = {};
    }

    return path.replace(/:(\w+)/g, function (_, key) {
      !(params[key] != null) ? invariant(false) : void 0;
      return params[key];
    }).replace(/\/*\*$/, function (_) {
      return params["*"] == null ? "" : params["*"].replace(/^\/*/, "/");
    });
  }

  function matchRoutes(routes, locationArg, basename) {
    if (basename === void 0) {
      basename = "/";
    }

    var location = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
    var pathname = stripBasename(location.pathname || "/", basename);

    if (pathname == null) {
      return null;
    }

    var branches = flattenRoutes(routes);
    rankRouteBranches(branches);
    var matches = null;

    for (var i = 0; matches == null && i < branches.length; ++i) {
      matches = matchRouteBranch(branches[i], pathname);
    }

    return matches;
  }

  function flattenRoutes(routes, branches, parentsMeta, parentPath) {
    if (branches === void 0) {
      branches = [];
    }

    if (parentsMeta === void 0) {
      parentsMeta = [];
    }

    if (parentPath === void 0) {
      parentPath = "";
    }

    routes.forEach(function (route, index) {
      var meta = {
        relativePath: route.path || "",
        caseSensitive: route.caseSensitive === true,
        childrenIndex: index,
        route: route
      };

      if (meta.relativePath.startsWith("/")) {
        !meta.relativePath.startsWith(parentPath) ? invariant(false) : void 0;
        meta.relativePath = meta.relativePath.slice(parentPath.length);
      }

      var path = joinPaths([parentPath, meta.relativePath]);
      var routesMeta = parentsMeta.concat(meta);

      if (route.children && route.children.length > 0) {
        !(route.index !== true) ? invariant(false) : void 0;
        flattenRoutes(route.children, branches, routesMeta, path);
      }

      if (route.path == null && !route.index) {
        return;
      }

      branches.push({
        path: path,
        score: computeScore(path, route.index),
        routesMeta: routesMeta
      });
    });
    return branches;
  }

  function rankRouteBranches(branches) {
    branches.sort(function (a, b) {
      return a.score !== b.score ? b.score - a.score : compareIndexes(a.routesMeta.map(function (meta) {
        return meta.childrenIndex;
      }), b.routesMeta.map(function (meta) {
        return meta.childrenIndex;
      }));
    });
  }

  var paramRe = /^:\w+$/;
  var dynamicSegmentValue = 3;
  var indexRouteValue = 2;
  var emptySegmentValue = 1;
  var staticSegmentValue = 10;
  var splatPenalty = -2;

  var isSplat = function isSplat(s) {
    return s === "*";
  };

  function computeScore(path, index) {
    var segments = path.split("/");
    var initialScore = segments.length;

    if (segments.some(isSplat)) {
      initialScore += splatPenalty;
    }

    if (index) {
      initialScore += indexRouteValue;
    }

    return segments.filter(function (s) {
      return !isSplat(s);
    }).reduce(function (score, segment) {
      return score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue);
    }, initialScore);
  }

  function compareIndexes(a, b) {
    var siblings = a.length === b.length && a.slice(0, -1).every(function (n, i) {
      return n === b[i];
    });
    return siblings ? a[a.length - 1] - b[b.length - 1] : 0;
  }

  function matchRouteBranch(branch, pathname) {
    var routesMeta = branch.routesMeta;
    var matchedParams = {};
    var matchedPathname = "/";
    var matches = [];

    for (var i = 0; i < routesMeta.length; ++i) {
      var meta = routesMeta[i];
      var end = i === routesMeta.length - 1;
      var remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
      var match = matchPath({
        path: meta.relativePath,
        caseSensitive: meta.caseSensitive,
        end: end
      }, remainingPathname);
      if (!match) return null;
      Object.assign(matchedParams, match.params);
      var route = meta.route;
      matches.push({
        params: matchedParams,
        pathname: joinPaths([matchedPathname, match.pathname]),
        pathnameBase: normalizePathname(joinPaths([matchedPathname, match.pathnameBase])),
        route: route
      });

      if (match.pathnameBase !== "/") {
        matchedPathname = joinPaths([matchedPathname, match.pathnameBase]);
      }
    }

    return matches;
  }

  function _renderMatches(matches, parentMatches) {
    if (parentMatches === void 0) {
      parentMatches = [];
    }

    if (matches == null) return null;
    return matches.reduceRight(function (outlet, match, index) {
      return react.exports.createElement(RouteContext.Provider, {
        children: match.route.element !== undefined ? match.route.element : outlet,
        value: {
          outlet: outlet,
          matches: parentMatches.concat(matches.slice(0, index + 1))
        }
      });
    }, null);
  }

  function matchPath(pattern, pathname) {
    if (typeof pattern === "string") {
      pattern = {
        path: pattern,
        caseSensitive: false,
        end: true
      };
    }

    var _compilePath = compilePath(pattern.path, pattern.caseSensitive, pattern.end),
        _compilePath2 = _slicedToArray(_compilePath, 2),
        matcher = _compilePath2[0],
        paramNames = _compilePath2[1];

    var match = pathname.match(matcher);
    if (!match) return null;
    var matchedPathname = match[0];
    var pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
    var captureGroups = match.slice(1);
    var params = paramNames.reduce(function (memo, paramName, index) {
      if (paramName === "*") {
        var splatValue = captureGroups[index] || "";
        pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
      }

      memo[paramName] = safelyDecodeURIComponent(captureGroups[index] || "");
      return memo;
    }, {});
    return {
      params: params,
      pathname: matchedPathname,
      pathnameBase: pathnameBase,
      pattern: pattern
    };
  }

  function compilePath(path, caseSensitive, end) {
    if (caseSensitive === void 0) {
      caseSensitive = false;
    }

    if (end === void 0) {
      end = true;
    }

    var paramNames = [];
    var regexpSource = "^" + path.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/:(\w+)/g, function (_, paramName) {
      paramNames.push(paramName);
      return "([^\\/]+)";
    });

    if (path.endsWith("*")) {
      paramNames.push("*");
      regexpSource += path === "*" || path === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$";
    } else {
      regexpSource += end ? "\\/*$" : "(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)";
    }

    var matcher = new RegExp(regexpSource, caseSensitive ? undefined : "i");
    return [matcher, paramNames];
  }

  function safelyDecodeURIComponent(value, paramName) {
    try {
      return decodeURIComponent(value);
    } catch (error) {
      return value;
    }
  }

  function resolvePath(to, fromPathname) {
    if (fromPathname === void 0) {
      fromPathname = "/";
    }

    var _ref5 = typeof to === "string" ? parsePath(to) : to,
        toPathname = _ref5.pathname,
        _ref5$search = _ref5.search,
        search = _ref5$search === void 0 ? "" : _ref5$search,
        _ref5$hash = _ref5.hash,
        hash = _ref5$hash === void 0 ? "" : _ref5$hash;

    var pathname = toPathname ? toPathname.startsWith("/") ? toPathname : resolvePathname(toPathname, fromPathname) : fromPathname;
    return {
      pathname: pathname,
      search: normalizeSearch(search),
      hash: normalizeHash(hash)
    };
  }

  function resolvePathname(relativePath, fromPathname) {
    var segments = fromPathname.replace(/\/+$/, "").split("/");
    var relativeSegments = relativePath.split("/");
    relativeSegments.forEach(function (segment) {
      if (segment === "..") {
        if (segments.length > 1) segments.pop();
      } else if (segment !== ".") {
        segments.push(segment);
      }
    });
    return segments.length > 1 ? segments.join("/") : "/";
  }

  function resolveTo(toArg, routePathnames, locationPathname) {
    var to = typeof toArg === "string" ? parsePath(toArg) : toArg;
    var toPathname = toArg === "" || to.pathname === "" ? "/" : to.pathname;
    var from;

    if (toPathname == null) {
      from = locationPathname;
    } else {
      var routePathnameIndex = routePathnames.length - 1;

      if (toPathname.startsWith("..")) {
        var toSegments = toPathname.split("/");

        while (toSegments[0] === "..") {
          toSegments.shift();
          routePathnameIndex -= 1;
        }

        to.pathname = toSegments.join("/");
      }

      from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
    }

    var path = resolvePath(to, from);

    if (toPathname && toPathname !== "/" && toPathname.endsWith("/") && !path.pathname.endsWith("/")) {
      path.pathname += "/";
    }

    return path;
  }

  function getToPathname(to) {
    return to === "" || to.pathname === "" ? "/" : typeof to === "string" ? parsePath(to).pathname : to.pathname;
  }

  function stripBasename(pathname, basename) {
    if (basename === "/") return pathname;

    if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
      return null;
    }

    var nextChar = pathname.charAt(basename.length);

    if (nextChar && nextChar !== "/") {
      return null;
    }

    return pathname.slice(basename.length) || "/";
  }

  var joinPaths = function joinPaths(paths) {
    return paths.join("/").replace(/\/\/+/g, "/");
  };

  var normalizePathname = function normalizePathname(pathname) {
    return pathname.replace(/\/+$/, "").replace(/^\/*/, "/");
  };

  var normalizeSearch = function normalizeSearch(search) {
    return !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
  };

  var normalizeHash = function normalizeHash(hash) {
    return !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;
  };
  /**
   * React Router DOM v6.2.2
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */


  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  var _excluded = ["onClick", "reloadDocument", "replace", "state", "target", "to"];

  function HashRouter(_ref2) {
    var basename = _ref2.basename,
        children = _ref2.children,
        window = _ref2.window;
    var historyRef = react.exports.useRef();

    if (historyRef.current == null) {
      historyRef.current = createHashHistory({
        window: window
      });
    }

    var history = historyRef.current;

    var _react$exports$useSta = react.exports.useState({
      action: history.action,
      location: history.location
    }),
        _react$exports$useSta2 = _slicedToArray(_react$exports$useSta, 2),
        state = _react$exports$useSta2[0],
        setState = _react$exports$useSta2[1];

    react.exports.useLayoutEffect(function () {
      return history.listen(setState);
    }, [history]);
    return react.exports.createElement(Router, {
      basename: basename,
      children: children,
      location: state.location,
      navigationType: state.action,
      navigator: history
    });
  }

  function isModifiedEvent(event) {
    return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
  }

  var Link = react.exports.forwardRef(function LinkWithRef(_ref4, ref) {
    var onClick = _ref4.onClick,
        reloadDocument = _ref4.reloadDocument,
        _ref4$replace = _ref4.replace,
        replace = _ref4$replace === void 0 ? false : _ref4$replace,
        state = _ref4.state,
        target = _ref4.target,
        to = _ref4.to,
        rest = _objectWithoutPropertiesLoose(_ref4, _excluded);

    var href = useHref(to);
    var internalOnClick = useLinkClickHandler(to, {
      replace: replace,
      state: state,
      target: target
    });

    function handleClick(event) {
      if (onClick) onClick(event);

      if (!event.defaultPrevented && !reloadDocument) {
        internalOnClick(event);
      }
    }

    return react.exports.createElement("a", _extends({}, rest, {
      href: href,
      onClick: handleClick,
      ref: ref,
      target: target
    }));
  });

  function useLinkClickHandler(to, _temp) {
    var _ref6 = _temp === void 0 ? {} : _temp,
        target = _ref6.target,
        replaceProp = _ref6.replace,
        state = _ref6.state;

    var navigate = useNavigate();
    var location = useLocation();
    var path = useResolvedPath(to);
    return react.exports.useCallback(function (event) {
      if (event.button === 0 && (!target || target === "_self") && !isModifiedEvent(event)) {
        event.preventDefault();

        var _replace = !!replaceProp || createPath(location) === createPath(path);

        navigate(to, {
          replace: _replace,
          state: state
        });
      }
    }, [location, navigate, path, replaceProp, state, target, to]);
  }

  var email = 'strange /dot/ transistor /at/ gmail /dot/ com';
  var github = 'https://github.com/StreetStrider/rokk';
  var discord = 'https://discord.gg/quFRe3SJrD';
  var classnames = {
    exports: {}
  };

  (function (module) {
    (function () {
      var hasOwn = {}.hasOwnProperty;

      function classNames() {
        var classes = [];

        for (var i = 0; i < arguments.length; i++) {
          var arg = arguments[i];
          if (!arg) continue;

          var argType = _typeof(arg);

          if (argType === 'string' || argType === 'number') {
            classes.push(arg);
          } else if (Array.isArray(arg)) {
            if (arg.length) {
              var inner = classNames.apply(null, arg);

              if (inner) {
                classes.push(inner);
              }
            }
          } else if (argType === 'object') {
            if (arg.toString === Object.prototype.toString) {
              for (var key in arg) {
                if (hasOwn.call(arg, key) && arg[key]) {
                  classes.push(key);
                }
              }
            } else {
              classes.push(arg.toString());
            }
          }
        }

        return classes.join(' ');
      }

      if (module.exports) {
        classNames["default"] = classNames;
        module.exports = classNames;
      } else {
        window.classNames = classNames;
      }
    })();
  })(classnames);

  var cls = classnames.exports;

  function _optionalChain$4(ops) {
    var lastAccessLHS = undefined;
    var value = ops[0];
    var i = 1;

    while (i < ops.length) {
      var op = ops[i];
      var fn = ops[i + 1];
      i += 2;

      if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) {
        return undefined;
      }

      if (op === 'access' || op === 'optionalAccess') {
        lastAccessLHS = value;
        value = fn(value);
      } else if (op === 'call' || op === 'optionalCall') {
        value = fn(function () {
          var _value;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          return (_value = value).call.apply(_value, [lastAccessLHS].concat(args));
        });
        lastAccessLHS = undefined;
      }
    }

    return value;
  }

  function classtype(name, props) {
    var className = cls(name, _optionalChain$4([props, 'optionalAccess', function (_) {
      return _.className;
    }]));
    return _objectSpread(_objectSpread({}, props), {}, {
      className: className
    });
  }

  function Page(props) {
    return React.createElement('div', _objectSpread({}, classtype('Page', props)), React.createElement('div', {
      className: "header"
    }, React.createElement('a', {
      href: "/",
      className: "title"
    }, React.createElement('h1', null, "Rokk!")), React.createElement('div', {
      className: "menu left"
    }, React.createElement(Link, {
      to: "/build/"
    }, "Build"), React.createElement(Link, {
      to: "/compare/"
    }, "Compare")), React.createElement('div', {
      className: "menu right"
    }, React.createElement('a', {
      className: "feedback",
      href: "https://strider.notion.site/strider/DRG-d74253848b134fb3828e1c42dc7696e9"
    }, "take a look at my feedback on DRG"), React.createElement(Link, {
      to: "/contact/"
    }, "Contact"), React.createElement('a', {
      href: discord
    }, "Discord"), React.createElement('a', {
      href: github
    }, "GitHub"))), React.createElement('div', {
      className: "body"
    }, props.children), React.createElement('div', {
      className: "footer"
    }, React.createElement('div', {
      className: "menu left"
    }, "Made with ❤ for the DRG community"), React.createElement('div', {
      className: "menu right"
    }, React.createElement(Link, {
      to: "/contact/"
    }, "Contact"), React.createElement('a', {
      href: discord
    }, "Discord"), React.createElement('a', {
      href: github
    }, "GitHub"))));
  }

  function Alt(key, value) {
    var $key = key;
    var $value = value;
    var $alt = {
      is: is,
      extract_on: extract_on,
      extract: extract,
      ripout: ripout,
      thru: thru,
      chain: chain,
      map_to: map_to,
      map_on: map_on,
      map: map,
      tap_on: tap_on,
      tap: tap,
      settle_on: settle_on,
      settle: settle,
      debug: debug
    };

    function is(key) {
      return key === $key;
    }

    function extract_on(key) {
      if (!is(key)) {
        throw new TypeError("alt/extract/wrong (key = ".concat($key, ", attempt = ").concat(key, ")"));
      }

      return $value;
    }

    function extract() {
      return extract_on('OK');
    }

    function ripout() {
      if (is('OK')) {
        return value;
      }

      return void 0;
    }

    function thru(fn) {
      return fn($alt);
    }

    function chain(key, fn) {
      if (is(key)) {
        return fn($value);
      }

      return $alt;
    }

    function map_to(from, to, fn) {
      return chain(from, function (value) {
        return Alt(to, fn(value));
      });
    }

    function map_on(key, fn) {
      return map_to(key, key, fn);
    }

    function map(fn) {
      return map_on('OK', fn);
    }

    function tap_on(key, fn) {
      if (is(key)) {
        fn($value);
      }

      return $alt;
    }

    function tap(fn) {
      return tap_on('OK', fn);
    }

    function settle_on(key, fn) {
      return map_to(key, 'OK', fn);
    }

    function settle(fn) {
      return settle_on('FAIL', fn);
    }

    function debug() {
      return {
        key: $key,
        value: $value
      };
    }

    return $alt;
  }

  function OK(value) {
    return Alt('OK', value);
  }

  function FAIL(value) {
    return Alt('FAIL', value);
  }

  function LOADING() {
    return Alt('LOADING', void 0);
  }

  function join(left, right) {
    return left.chain('OK', function (left_v) {
      return right.map(function (right_v) {
        return [left_v, right_v];
      });
    });
  }

  function attempt(fn) {
    try {
      return OK(fn());
    } catch (e) {
      return FAIL(e);
    }
  }

  function State(initial) {
    var _react$exports$useSta3 = react.exports.useState(initial),
        _react$exports$useSta4 = _slicedToArray(_react$exports$useSta3, 2),
        value = _react$exports$useSta4[0],
        set = _react$exports$useSta4[1];

    return react.exports.useMemo(function () {
      var state = {
        value: value,
        set: set,
        map: map
      };

      function map(fn) {
        set(fn(value));
      }

      return state;
    }, [value]);
  }

  var values$1 = Object.values;

  function urimap(config) {
    var path = config.path;
    var mapping = config.mapping;
    var states = config.states;
    var keys = path.match(/:\w+/g).map(function (key) {
      return key.slice(1);
    });
    var params = useParams();
    var location = useLocation();
    var navigate = useNavigate();
    var first = react.exports.useRef(true);
    react.exports.useEffect(function () {
      var _iterator = _createForOfIteratorHelper(keys),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var key = _step.value;
          var mapper = mapping[key];
          var state = states[key];
          var repr = mapper.dump(state.value);
          var repr_uri = params[key];
          if (repr_uri === repr) continue;

          try {
            var value = mapper.load(repr_uri);
          } catch (e) {
            var fail = mapper.fail;

            if (!fail) {
              throw e;
            }

            var redirect = fail(e);

            if (redirect) {
              navigate(redirect, {
                replace: true
              });
            }

            return;
          }

          state.set(value);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }, [params]);
    react.exports.useEffect(function () {
      if (first.current) {
        first.current = false;
        return;
      }

      var reprs = {};

      var _iterator2 = _createForOfIteratorHelper(keys),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var key = _step2.value;
          var mapper = mapping[key];
          var state = states[key];
          reprs[key] = mapper.dump(state.value);

          if (reprs[key] === null) {
            return;
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      try {
        var path_to = generatePath(path, reprs);
      } catch (e) {
        console.error('urimap: cannot generatePath(?)', path, reprs);
        return;
      }

      if (location.pathname !== path_to) {
        var _replace2 = trailing_slash_fixing(location.pathname, path_to);

        navigate(path_to, {
          replace: _replace2
        });
      }
    }, values$1(states));
  }

  function trailing_slash_fixing(prev, next) {
    if (prev === next) return true;
    var L1 = prev.length;
    var L2 = next.length;
    if (Math.abs(L1 - L2) > 1) return false;
    var min = Math.min(L1, L2);
    if (prev.slice(0, min) !== next.slice(0, min)) return false;

    if (L1 > L2) {
      return prev.slice(min) === '/';
    } else {
      return next.slice(min) === '/';
    }
  }

  function _nullishCoalesce$3(lhs, rhsFn) {
    if (lhs != null) {
      return lhs;
    } else {
      return rhsFn();
    }
  }

  function _optionalChain$3(ops) {
    var lastAccessLHS = undefined;
    var value = ops[0];
    var i = 1;

    while (i < ops.length) {
      var op = ops[i];
      var fn = ops[i + 1];
      i += 2;

      if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) {
        return undefined;
      }

      if (op === 'access' || op === 'optionalAccess') {
        lastAccessLHS = value;
        value = fn(value);
      } else if (op === 'call' || op === 'optionalCall') {
        value = fn(function () {
          var _value2;

          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          return (_value2 = value).call.apply(_value2, [lastAccessLHS].concat(args));
        });
        lastAccessLHS = undefined;
      }
    }

    return value;
  }

  function Result(props) {
    var input = props.input;
    react.exports.useEffect(function () {
      input.tap_on('FAIL', function (e) {
        _optionalChain$3([window, 'optionalAccess', function (_) {
          return _.Sentry;
        }, 'optionalAccess', function (_2) {
          return _2.captureException;
        }, 'call', function (_3) {
          return _3(e);
        }]);
      });
    }, [input]);
    return input.map(_nullishCoalesce$3(props.children, function () {
      return same;
    })).settle_on('LOADING', function () {
      return React.createElement('div', {
        className: "Loading"
      }, "-/-");
    }).settle_on('FAIL', function (e) {
      return React.createElement('div', {
        className: "Error"
      }, "~something went wrong~");
    }).extract();
  }

  function same(it) {
    return it;
  }

  function _nullishCoalesce$2(lhs, rhsFn) {
    if (lhs != null) {
      return lhs;
    } else {
      return rhsFn();
    }
  }

  var empty = {
    mod: {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0
    },
    oc: null
  };

  function load$1(repr) {
    var match = repr.match(/^(\d{5})(?:\.(\w+))?$/);
    if (!match) throw new TypeError('wrong_build_repr');
    var mod;
    mod = match[1].split('');
    mod = mod.map(Number);
    mod = mod.map(function (n, index) {
      return [index + 1, n];
    });
    mod = Object.fromEntries(mod);

    var oc = _nullishCoalesce$2(match[2], function () {
      return null;
    });

    return {
      mod: mod,
      oc: oc
    };
  }

  function dump$1(build) {
    var repr_mod = Array(5 + 1).fill(0);
    var mod = build.mod;

    for (var key in mod) {
      repr_mod[key] = mod[key];
    }

    var oc = build.oc;
    var repr_oc = '';

    if (oc) {
      repr_oc = '.' + oc;
    }

    return repr_mod.slice(1).join('') + repr_oc;
  }

  var mapping$1 = {
    load: function load(repr) {
      return attempt(function () {
        return load$1(repr);
      });
    },
    dump: function dump(build) {
      return _nullishCoalesce$2(build.map(dump$1).ripout(), function () {
        return null;
      });
    }
  };

  function mod_toggle(build, row_n, mod_n) {
    var prev = build.mod[row_n];
    return mod_set(build, row_n, toggle(prev, mod_n, 0));
  }

  function mod_set(build, row_n, mod_n) {
    var mod = _objectSpread(_objectSpread({}, build.mod), {}, _defineProperty({}, row_n, mod_n));

    return _objectSpread(_objectSpread({}, build), {}, {
      mod: mod
    });
  }

  function oc_toggle(build, oc) {
    var prev = build.oc;
    return oc_set(build, toggle(prev, oc, null));
  }

  function oc_set(build, oc) {
    return _objectSpread(_objectSpread({}, build), {}, {
      oc: oc
    });
  }

  function toggle(prev, next, def) {
    if (prev !== next) {
      return next;
    } else {
      return def;
    }
  }

  function mod_find(mods, row_n, mod_n) {
    if (!(row_n in mods)) {
      throw new TypeError('wrong_row');
    }

    if (mod_n === 0) {
      return null;
    }

    var mod_n0 = mod_n - 1;
    var mod_row = mods[row_n];

    if (!(mod_n0 in mod_row)) {
      throw new TypeError('wrong_mod_n');
    }

    return mod_row[mod_n0];
  }

  function oc_find(ocs, oc) {
    if (!oc) {
      return null;
    }

    if (!(oc in ocs)) {
      throw new TypeError('wrong_oc');
    }

    return ocs[oc];
  }

  function apply(traits, mod) {
    return to_ops(mod).reduce(apply_op, traits);
  }

  function to_ops(mod) {
    if ('modifiers' in mod) {
      return mod.modifiers;
    } else {
      return [mod.modifier];
    }
  }

  function apply_op(traits, mod_op) {
    switch (mod_op[0]) {
      case 'grant':
        return append$1(traits, mod_op[1]);

      case 'mod':
        return apply_op_expr(traits, mod_op);
    }
  }

  function update(traits, trait) {
    try {
      return append$1(traits, trait);
    } catch (e) {
      if (Object(e).message !== 'already_granted') throw e;
    }

    {
      return replace(traits, trait);
    }
  }

  function append$1(traits, trait) {
    try {
      find$2(traits, trait.name);
    } catch (e) {
      return [].concat(_toConsumableArray(traits), [trait]);
    }

    throw new TypeError('already_granted');
  }

  function apply_op_expr(traits, mod) {
    var op = mod[1];
    var trait = mod[2];
    var trait_base = find$2(traits, trait.name);
    var value = trait_base.value;

    switch (op) {
      case '=':
        value = trait.value;
        break;

      case '+':
      case '-':
        var _sign = op === '+' && 1 || -1;

        value += _sign * trait.value;
        break;

      case '*':
        value *= trait.value;
        break;
    }

    return replace(traits, _objectSpread(_objectSpread({}, trait_base), {}, {
      value: value
    }));
  }

  function replace(traits, trait) {
    var index = traits.findIndex(function (t) {
      return t.name === trait.name;
    });

    if (index === -1) {
      throw new TypeError('not_found');
    }

    var traits_new = _toConsumableArray(traits);

    traits_new.splice(index, 1, trait);
    return traits_new;
  }

  function find$2(traits, mod_name) {
    var t = traits.find(function (trait) {
      return trait.name === mod_name;
    });

    if (t) {
      return t;
    } else {
      throw new TypeError('not_found');
    }
  }

  function find_value(traits, mod_name) {
    return find$2(traits, mod_name).value;
  }

  function find_or(traits, mod_name, def_value) {
    try {
      return find_value(traits, mod_name);
    } catch (e2) {
      return def_value;
    }
  }

  function find_with(traits, mod_name, fn) {
    try {
      return fn(find_value(traits, mod_name));
    } catch (e3) {
      return null;
    }
  }

  var deepcore = {
    name: 'Deepcore GK2',
    code: 'deepcore',
    traits: [{
      name: 'dmg',
      value: 15
    }, {
      name: 'dmg_wp_bonus',
      value: .1
    }, {
      name: 'magazine',
      value: 25
    }, {
      name: 'reload',
      value: 1.8
    }, {
      name: 'ammo',
      value: 375
    }, {
      name: 'rof',
      value: 7
    }, {
      name: 'recoil',
      value: 1
    }, {
      name: 'spread',
      value: 1
    }, {
      name: 'spread_1',
      value: 1
    }, {
      name: 'spread_recovery',
      value: 1
    }, {
      name: 'ab',
      value: 0
    }, {
      name: 'stun',
      value: 1.5
    }, {
      name: 'stun_chance',
      value: .1
    }, {
      name: 'stun_area',
      value: 'wp'
    }],
    mods: {
      1: [{
        name: 'Spread',
        modifier: ['mod', '*', {
          name: 'spread_1',
          value: 0
        }]
      }, {
        name: 'Rate of Fire',
        modifier: ['mod', '+', {
          name: 'rof',
          value: 2
        }]
      }],
      2: [{
        name: 'Damage',
        modifier: ['mod', '+', {
          name: 'dmg',
          value: 2
        }]
      }, {
        name: 'Ammo',
        modifier: ['mod', '+', {
          name: 'ammo',
          value: 100
        }]
      }],
      3: [{
        name: 'Less Recoil',
        modifier: ['mod', '*', {
          name: 'recoil',
          value: .5
        }]
      }, {
        name: 'Damage',
        modifier: ['mod', '+', {
          name: 'dmg',
          value: 1
        }]
      }, {
        name: 'Magazine',
        modifier: ['mod', '+', {
          name: 'magazine',
          value: 10
        }]
      }],
      4: [{
        name: 'Weakpoint',
        modifier: ['mod', '+', {
          name: 'dmg_wp_bonus',
          value: .2
        }]
      }, {
        name: 'Armor Break',
        modifier: ['mod', '+', {
          name: 'ab',
          value: 5
        }]
      }, {
        name: 'Rate of Fire',
        modifier: ['mod', '+', {
          name: 'rof',
          value: 2
        }]
      }],
      5: [{
        name: 'Battle Frenzy',
        modifier: ['grant', {
          name: 'battle_frenzy',
          value: true
        }]
      }, {
        name: 'Battle Cool',
        modifier: ['grant', {
          name: 'battle_cool',
          value: true
        }]
      }, {
        name: 'Stun',
        modifier: ['mod', '+', {
          name: 'stun_chance',
          value: .3
        }]
      }]
    },
    ocs: {
      compact: {
        name: 'Compact Ammo',
        code: 'compact',
        modifiers: [['mod', '+', {
          name: 'magazine',
          value: 5
        }], ['mod', '*', {
          name: 'recoil',
          value: .7
        }]]
      },
      gas: {
        name: 'Gas Rerouting',
        code: 'gas',
        modifiers: [['mod', '+', {
          name: 'rof',
          value: 1
        }], ['mod', '-', {
          name: 'reload',
          value: .3
        }]]
      },
      homebrew: {
        name: 'Homebrew Powder',
        code: 'homebrew',
        modifier: ['grant', {
          name: 'dmg_random',
          value: [.8, 1.4]
        }]
      },
      firing: {
        name: 'Overclocking Firing Mechanism',
        code: 'firing',
        modifiers: [['mod', '+', {
          name: 'rof',
          value: 3
        }], ['mod', '*', {
          name: 'recoil',
          value: 2
        }]]
      },
      mercy: {
        name: 'Bullets of Mercy',
        code: 'mercy',
        modifiers: [['grant', {
          name: 'dmg_v_afflicted',
          value: .33
        }], ['mod', '-', {
          name: 'magazine',
          value: 5
        }]]
      },
      ai: {
        name: 'AI Stability Engine',
        code: 'ai',
        modifiers: [['mod', '*', {
          name: 'recoil',
          value: 0
        }], ['mod', '*', {
          name: 'spread_recovery',
          value: 9
        }], ['mod', '*', {
          name: 'dmg_wp_bonus',
          value: .4
        }], ['mod', '-', {
          name: 'dmg',
          value: 2
        }], ['mod', '-', {
          name: 'rof',
          value: 2
        }]]
      },
      electro: {
        name: 'Electrifying Reload',
        code: 'electro',
        modifiers: [['grant', {
          name: 'electro_reload',
          value: true
        }], ['mod', '-', {
          name: 'dmg',
          value: 2
        }], ['mod', '-', {
          name: 'magazine',
          value: 5
        }]]
      }
    }
  };
  var classic = {
    name: 'M1000 Classic',
    code: 'classic',
    traits: [{
      name: 'dmg',
      value: 55
    }, {
      name: 'dmg_wp_bonus',
      value: 0
    }, {
      name: 'magazine',
      value: 8
    }, {
      name: 'ammo',
      value: 96
    }, {
      name: 'rof',
      value: 4
    }, {
      name: 'recoil',
      value: 1
    }, {
      name: 'reload',
      value: 2.5
    }, {
      name: 'ab',
      value: .3
    }, {
      name: 'blowthrough',
      value: 0
    }, {
      name: 'focus_shot_bonus',
      value: 1
    }, {
      name: 'focus_movement',
      value: .3
    }, {
      name: 'focus_speed',
      value: 1.6
    }],
    mods: {
      1: [{
        name: 'Ammo',
        modifier: ['mod', '+', {
          name: 'ammo',
          value: 40
        }]
      }, {
        name: 'Damage',
        modifier: ['mod', '+', {
          name: 'dmg',
          value: 10
        }]
      }],
      2: [{
        name: 'Focus Speed',
        modifier: ['mod', '+', {
          name: 'focus_speed',
          value: .4
        }]
      }, {
        name: 'Less Recoil',
        modifier: ['mod', '*', {
          name: 'recoil',
          value: .5
        }]
      }, {
        name: 'Armor Break',
        modifier: ['mod', '+', {
          name: 'ab',
          value: 2.2
        }]
      }],
      3: [{
        name: 'Focus Shot Bonus',
        modifier: ['mod', '+', {
          name: 'focus_shot_bonus',
          value: .25
        }]
      }, {
        name: 'Magazine',
        modifier: ['mod', '+', {
          name: 'magazine',
          value: 6
        }]
      }],
      4: [{
        name: 'Blowthrough',
        modifier: ['mod', '+', {
          name: 'blowthrough',
          value: 3
        }]
      }, {
        name: 'Weakpoint',
        modifier: ['mod', '+', {
          name: 'dmg_wp_bonus',
          value: .2
        }]
      }],
      5: [{
        name: 'Stun',
        modifier: ['grant', {
          name: 'focus_stun',
          value: 1
        }]
      }, {
        name: 'Fear',
        modifier: ['grant', {
          name: 'focus_fear',
          value: 1
        }]
      }, {
        name: 'Fast Reload',
        modifier: ['grant', {
          name: 'fast_reload',
          value: true
        }]
      }]
    },
    ocs: {
      hover: {
        name: 'Hoverclock',
        code: 'hover',
        modifier: ['grant', {
          name: 'hover',
          value: true
        }]
      },
      clips: {
        name: 'Minimal Clips',
        code: 'clips',
        modifiers: [['mod', '*', {
          name: 'magazine',
          value: 1.25
        }], ['mod', '-', {
          name: 'reload',
          value: .2
        }]]
      },
      stabl: {
        name: 'Active Stability System',
        code: 'stabl',
        modifiers: [['mod', '+', {
          name: 'focus_movement',
          value: .7
        }], ['mod', '+', {
          name: 'focus_speed',
          value: .2
        }], ['mod', '+', {
          name: 'reload',
          value: .5
        }]]
      },
      hipster: {
        name: 'Hipster',
        code: 'hipster',
        modifiers: [['mod', '*', {
          name: 'ammo',
          value: 1.913
        }], ['mod', '+', {
          name: 'rof',
          value: 3
        }], ['mod', '*', {
          name: 'recoil',
          value: .5
        }], ['mod', '-', {
          name: 'dmg',
          value: 17
        }]]
      },
      electro: {
        name: 'Electrocuting Focus Shots',
        code: 'electro',
        modifiers: [['mod', '-', {
          name: 'focus_shot_bonus',
          value: .25
        }], ['grant', {
          name: 'focus_electrocution',
          value: 48
        }]]
      },
      supercool: {
        name: 'Supercooling Chamber',
        code: 'supercool',
        modifiers: [['mod', '+', {
          name: 'focus_shot_bonus',
          value: 1.25
        }], ['mod', '*', {
          name: 'ammo',
          value: .665
        }], ['mod', '*', {
          name: 'focus_speed',
          value: .6
        }], ['mod', '*', {
          name: 'focus_movement',
          value: 0
        }]]
      }
    }
  };
  var boomstick = {
    name: 'Jury-Rigged Boomstick',
    code: 'boomstick',
    traits: [{
      name: 'dmg',
      value: 12
    }, {
      name: 'burst',
      value: 8
    }, {
      name: 'magazine',
      value: 2
    }, {
      name: 'ammo',
      value: 24
    }, {
      name: 'rof',
      value: 1.5
    }, {
      name: 'reload',
      value: 2
    }, {
      name: 'spread_1',
      value: 1
    }, {
      name: 'ab',
      value: 0
    }, {
      name: 'blowthrough',
      value: 0
    }, {
      name: 'shockwave',
      value: 20
    }, {
      name: 'stun',
      value: 2.5
    }, {
      name: 'stun_chance',
      value: .3
    }],
    mods: {
      1: [{
        name: 'Ammo',
        modifier: ['mod', '+', {
          name: 'ammo',
          value: 8
        }]
      }, {
        name: 'Damage',
        modifier: ['mod', '+', {
          name: 'dmg',
          value: 3
        }]
      }],
      2: [{
        name: 'Rate of Fire',
        modifier: ['mod', '+', {
          name: 'rof',
          value: 7.5
        }]
      }, {
        name: 'Reload',
        modifier: ['mod', '-', {
          name: 'reload',
          value: .7
        }]
      }],
      3: [{
        name: 'Stun',
        modifiers: [['mod', '+', {
          name: 'stun',
          value: 3.5
        }], ['mod', '+', {
          name: 'stun_chance',
          value: .2
        }]]
      }, {
        name: 'Ammo',
        modifier: ['mod', '+', {
          name: 'ammo',
          value: 12
        }]
      }, {
        name: 'Pellets',
        modifier: ['mod', '+', {
          name: 'burst',
          value: 3
        }]
      }],
      4: [{
        name: 'Blowthrough',
        modifier: ['mod', '+', {
          name: 'blowthrough',
          value: 3
        }]
      }, {
        name: 'Armor Break',
        modifier: ['mod', '+', {
          name: 'ab',
          value: 3
        }]
      }, {
        name: 'Shockwave',
        modifier: ['mod', '+', {
          name: 'shockwave',
          value: 20
        }]
      }],
      5: [{
        name: 'Auto Reload',
        modifier: ['grant', {
          name: 'auto_reload',
          value: true
        }]
      }, {
        name: 'Fear',
        modifier: ['grant', {
          name: 'fear_chance',
          value: .5
        }]
      }, {
        name: 'Heat',
        modifier: ['grant', {
          name: 'heat',
          value: .5
        }]
      }]
    },
    ocs: {
      compact: {
        name: 'Compact Shells',
        code: 'compact',
        modifiers: [['mod', '+', {
          name: 'ammo',
          value: 6
        }], ['mod', '-', {
          name: 'reload',
          value: .2
        }]]
      },
      "double": {
        name: 'Double Barrel',
        code: 'double',
        modifiers: [['grant', {
          name: 'double_barrel',
          value: true
        }], ['mod', '+', {
          name: 'dmg',
          value: 1
        }], ['mod', '*', {
          name: 'magazine',
          value: .5
        }], ['mod', '*', {
          name: 'ammo',
          value: .5
        }], ['mod', '*', {
          name: 'burst',
          value: 2
        }], ['mod', '*', {
          name: 'shockwave',
          value: 2
        }]]
      },
      powder: {
        name: 'Special Powder',
        code: 'powder',
        modifier: ['grant', {
          name: 'shotgun_jump',
          value: true
        }]
      },
      stuffed: {
        name: 'Stuffed Shells',
        code: 'stuffed',
        modifiers: [['mod', '+', {
          name: 'dmg',
          value: 1
        }], ['mod', '+', {
          name: 'burst',
          value: 1
        }]]
      },
      shaped: {
        name: 'Shaped Shells',
        code: 'shaped',
        modifiers: [['mod', '*', {
          name: 'spread_1',
          value: .5
        }], ['mod', '-', {
          name: 'burst',
          value: 1
        }]]
      },
      jumbo: {
        name: 'Jumbo Shells',
        code: 'jumbo',
        modifiers: [['mod', '+', {
          name: 'dmg',
          value: 8
        }], ['mod', '-', {
          name: 'ammo',
          value: 10
        }], ['mod', '+', {
          name: 'reload',
          value: .5
        }]]
      }
    }
  };
  var warthog = {
    name: 'Warthog Auto 210',
    code: 'warthog',
    traits: [{
      name: 'dmg',
      value: 7
    }, {
      name: 'dmg_wp_bonus',
      value: 0
    }, {
      name: 'burst',
      value: 8
    }, {
      name: 'magazine',
      value: 6
    }, {
      name: 'ammo',
      value: 90
    }, {
      name: 'rof',
      value: 2
    }, {
      name: 'reload',
      value: 2
    }, {
      name: 'recoil',
      value: 1
    }, {
      name: 'spread_1',
      value: 1
    }, {
      name: 'ab',
      value: 0
    }, {
      name: 'stun',
      value: 3
    }, {
      name: 'stun_chance',
      value: .1
    }, {
      name: 'stun_area',
      value: 'wp'
    }],
    mods: {
      1: [{
        name: 'Rate of Fire',
        modifier: ['mod', '+', {
          name: 'rof',
          value: 1
        }]
      }, {
        name: 'Magazine',
        modifier: ['mod', '+', {
          name: 'magazine',
          value: 2
        }]
      }],
      2: [{
        name: 'Ammo',
        modifier: ['mod', '+', {
          name: 'ammo',
          value: 42
        }]
      }, {
        name: 'Pellets',
        modifier: ['mod', '+', {
          name: 'burst',
          value: 2
        }]
      }, {
        name: 'Base Spread',
        modifier: ['mod', '*', {
          name: 'spread_1',
          value: .5
        }]
      }],
      3: [{
        name: 'Recoil',
        modifier: ['mod', '*', {
          name: 'recoil',
          value: .4
        }]
      }, {
        name: 'Reload',
        modifier: ['mod', '-', {
          name: 'reload',
          value: .5
        }]
      }, {
        name: 'Magazine',
        modifier: ['mod', '+', {
          name: 'magazine',
          value: 2
        }]
      }],
      4: [{
        name: 'Armor Break',
        modifier: ['mod', '+', {
          name: 'ab',
          value: 4
        }]
      }, {
        name: 'Damage',
        modifier: ['mod', '+', {
          name: 'dmg',
          value: 1
        }]
      }],
      5: [{
        name: 'Turret Whip',
        modifier: ['grant', {
          name: 'turret_whip',
          value: true
        }]
      }, {
        name: 'Full Auto',
        modifiers: [['mod', '+', {
          name: 'rof',
          value: .5
        }], ['grant', {
          name: 'full_auto',
          value: true
        }]]
      }]
    },
    ocs: {
      stunner: {
        name: 'Stunner',
        code: 'stunner',
        modifiers: [['mod', '=', {
          name: 'stun_area',
          value: ''
        }], ['grant', {
          name: 'dmg_v_stunned',
          value: .3
        }]]
      },
      lightweight: {
        name: 'Light-Weight Magazines',
        code: 'lightweight',
        modifiers: [['mod', '+', {
          name: 'ammo',
          value: 18
        }], ['mod', '-', {
          name: 'reload',
          value: .4
        }]]
      },
      alignment: {
        name: 'Magnetic Pellet Alignment',
        code: 'alignment',
        modifiers: [['mod', '*', {
          name: 'spread_1',
          value: .5
        }], ['mod', '+', {
          name: 'dmg_wp_bonus',
          value: .3
        }], ['mod', '*', {
          name: 'rof',
          value: .75
        }]]
      },
      overload: {
        name: 'Cycle Overload',
        code: 'overload',
        modifiers: [['mod', '+', {
          name: 'dmg',
          value: 1
        }], ['mod', '+', {
          name: 'rof',
          value: 2
        }], ['mod', '+', {
          name: 'reload',
          value: .5
        }], ['mod', '*', {
          name: 'spread_1',
          value: 1.5
        }]]
      },
      mini: {
        name: 'Mini Shells',
        code: 'mini',
        modifiers: [['mod', '+', {
          name: 'ammo',
          value: 78
        }], ['mod', '+', {
          name: 'magazine',
          value: 6
        }], ['mod', '*', {
          name: 'recoil',
          value: .5
        }], ['mod', '-', {
          name: 'dmg',
          value: 2
        }], ['mod', '=', {
          name: 'stun',
          value: 0
        }]]
      }
    }
  };
  var stubby = {
    name: 'Stubby Voltaic SMG',
    code: 'stubby',
    traits: [{
      name: 'dmg',
      value: 9
    }, {
      name: 'dmg_electro',
      value: 0
    }, {
      name: 'dmg_wp_bonus',
      value: 0
    }, {
      name: 'magazine',
      value: 30
    }, {
      name: 'ammo',
      value: 420
    }, {
      name: 'rof',
      value: 11
    }, {
      name: 'recoil',
      value: 1
    }, {
      name: 'spread_1',
      value: 1
    }, {
      name: 'reload',
      value: 2
    }, {
      name: 'ab',
      value: .5
    }, {
      name: 'chance_electro',
      value: .2
    }, {
      name: 'dmg_v_electro',
      value: 0
    }],
    mods: {
      1: [{
        name: 'Damage',
        modifier: ['mod', '+', {
          name: 'dmg',
          value: 2
        }]
      }, {
        name: 'Electro Chance',
        modifier: ['mod', '+', {
          name: 'chance_electro',
          value: .3
        }]
      }, {
        name: 'Ammo',
        modifier: ['mod', '+', {
          name: 'ammo',
          value: 120
        }]
      }],
      2: [{
        name: 'Magazine',
        modifier: ['mod', '+', {
          name: 'magazine',
          value: 10
        }]
      }, {
        name: 'Less Recoil',
        modifier: ['mod', '*', {
          name: 'recoil',
          value: .5
        }]
      }, {
        name: 'Rate of Fire',
        modifier: ['mod', '+', {
          name: 'rof',
          value: 3
        }]
      }],
      3: [{
        name: 'Damage',
        modifier: ['mod', '+', {
          name: 'dmg',
          value: 2
        }]
      }, {
        name: 'Ammo',
        modifier: ['mod', '+', {
          name: 'ammo',
          value: 120
        }]
      }],
      4: [{
        name: 'Weakpoint',
        modifier: ['mod', '+', {
          name: 'dmg_wp_bonus',
          value: .3
        }]
      }, {
        name: 'Damage vs Electro',
        modifier: ['mod', '+', {
          name: 'dmg_v_electro',
          value: .3
        }]
      }],
      5: [{
        name: 'Magazine',
        modifier: ['mod', '+', {
          name: 'magazine',
          value: 20
        }]
      }, {
        name: 'Electric Arc',
        modifier: ['grant', {
          name: 'electrocution_aoe',
          value: .25
        }]
      }]
    },
    ocs: {
      slim: {
        name: 'Super Slim Rounds',
        code: 'slim',
        modifiers: [['mod', '+', {
          name: 'magazine',
          value: 5
        }], ['mod', '*', {
          name: 'spread_1',
          value: .8
        }]]
      },
      oil: {
        name: 'Well Oiled Machine',
        code: 'oil',
        modifiers: [['mod', '+', {
          name: 'rof',
          value: 2
        }], ['mod', '-', {
          name: 'reload',
          value: .2
        }]]
      },
      booster: {
        name: 'EM Refire Booster',
        code: 'booster',
        modifiers: [['mod', '+', {
          name: 'dmg_electro',
          value: 2
        }], ['mod', '+', {
          name: 'rof',
          value: 4
        }], ['mod', '*', {
          name: 'spread_1',
          value: 1.8
        }]]
      },
      lightweight: {
        name: 'Light-Weight Rounds',
        code: 'lightweight',
        modifiers: [['mod', '+', {
          name: 'ammo',
          value: 120
        }], ['mod', '-', {
          name: 'dmg',
          value: 1
        }], ['mod', '-', {
          name: 'rof',
          value: 2
        }]]
      },
      arc: {
        name: 'Turret Arc',
        code: 'arc',
        modifiers: [['grant', {
          name: 'turret_arc',
          value: true
        }], ['mod', '-', {
          name: 'ammo',
          value: 120
        }], ['mod', '-', {
          name: 'rof',
          value: 2
        }]]
      },
      discharge: {
        name: 'Turret EM Discharge',
        code: 'discharge',
        modifiers: [['grant', {
          name: 'turret_discharge',
          value: true
        }], ['mod', '-', {
          name: 'magazine',
          value: 5
        }], ['mod', '-', {
          name: 'dmg',
          value: 2
        }]]
      }
    }
  };
  var bulldog = {
    name: 'Bulldog',
    code: 'bulldog',
    traits: [{
      name: 'spread',
      value: 1
    }, {
      name: 'spread_1',
      value: 1
    }, {
      name: 'recoil',
      value: 1
    }, {
      name: 'dmg',
      value: 60
    }, {
      name: 'magazine',
      value: 4
    }, {
      name: 'ammo',
      value: 24
    }, {
      name: 'rof',
      value: 2
    }, {
      name: 'reload',
      value: 2
    }, {
      name: 'dmg_wp_bonus',
      value: .25
    }, {
      name: 'blowthrough',
      value: 0
    }, {
      name: 'stun',
      value: 1.5
    }, {
      name: 'stun_chance',
      value: .5
    }],
    mods: {
      1: [{
        name: 'Reload',
        modifier: ['mod', '-', {
          name: 'reload',
          value: .7
        }]
      }, {
        name: 'Spread',
        modifier: ['mod', '*', {
          name: 'spread_1',
          value: .3
        }]
      }],
      2: [{
        name: 'Damage',
        modifier: ['mod', '+', {
          name: 'dmg',
          value: 10
        }]
      }, {
        name: 'Recoil',
        modifiers: [['mod', '*', {
          name: 'recoil',
          value: .75
        }], ['mod', '*', {
          name: 'spread',
          value: .2
        }]]
      }, {
        name: 'Ammo',
        modifier: ['mod', '+', {
          name: 'ammo',
          value: 12
        }]
      }],
      3: [{
        name: 'Blowthrough',
        modifier: ['mod', '+', {
          name: 'blowthrough',
          value: 3
        }]
      }, {
        name: 'Explosive',
        modifiers: [['grant', {
          name: 'dmg_area',
          value: 30
        }], ['grant', {
          name: 'dmg_area_radius_max',
          value: .75
        }], ['grant', {
          name: 'dmg_area_radius',
          value: 1.5
        }], ['mod', '*', {
          name: 'dmg',
          value: .5
        }]]
      }, {
        name: 'Weakpoint',
        modifier: ['mod', '+', {
          name: 'dmg_wp_bonus',
          value: .35
        }]
      }],
      4: [{
        name: 'Ammo',
        modifier: ['mod', '+', {
          name: 'ammo',
          value: 12
        }]
      }, {
        name: 'Damage',
        modifier: ['mod', '+', {
          name: 'dmg',
          value: 10
        }]
      }],
      5: [{
        name: 'Dead Eye',
        modifier: ['grant', {
          name: 'dead_eye',
          value: true
        }]
      }, {
        name: 'Neurotoxin',
        modifier: ['grant', {
          name: 'toxin_coating',
          value: .5
        }]
      }]
    },
    ocs: {
      chain: {
        name: 'Chain Hit',
        code: 'chain',
        modifier: ['grant', {
          name: 'weakpoint_hit',
          value: true
        }]
      },
      homebrew: {
        name: 'Homebrew Powder',
        code: 'homebrew',
        modifier: ['grant', {
          name: 'dmg_random',
          value: [.75, 2]
        }]
      },
      "volatile": {
        name: 'Volatile Bullets',
        code: 'volatile',
        modifiers: [['grant', {
          name: 'volatile_bullets',
          value: [3, 0]
        }], ['mod', '-', {
          name: 'dmg',
          value: 10
        }]]
      },
      six: {
        name: 'Six Shooter',
        code: 'six',
        modifiers: [['mod', '+', {
          name: 'magazine',
          value: 2
        }], ['mod', '+', {
          name: 'ammo',
          value: 6
        }], ['mod', '+', {
          name: 'rof',
          value: 2
        }], ['mod', '+', {
          name: 'reload',
          value: .5
        }], ['mod', '*', {
          name: 'spread_1',
          value: 1.5
        }]]
      },
      elephant: {
        name: 'Elephant Rounds',
        code: 'elephant',
        modifiers: [['mod', '*', {
          name: 'dmg',
          value: 2
        }], ['mod', '*', {
          name: 'spread_1',
          value: .5
        }], ['mod', '-', {
          name: 'ammo',
          value: 12
        }], ['mod', '-', {
          name: 'magazine',
          value: 1
        }], ['mod', '+', {
          name: 'reload',
          value: .5
        }], ['mod', '*', {
          name: 'recoil',
          value: 2.5
        }], ['mod', '*', {
          name: 'spread',
          value: 1.71
        }]]
      },
      magic: {
        name: 'Magic Bullets',
        code: 'magic',
        modifiers: [['grant', {
          name: 'magic_bullets',
          value: true
        }], ['mod', '+', {
          name: 'ammo',
          value: 8
        }], ['mod', '-', {
          name: 'dmg',
          value: 20
        }]]
      }
    }
  };
  var subata = {
    name: 'Subata 120',
    code: 'subata',
    traits: [{
      name: 'spread',
      value: 1
    }, {
      name: 'spread_1',
      value: 1
    }, {
      name: 'recoil',
      value: 1
    }, {
      name: 'dmg',
      value: 12
    }, {
      name: 'magazine',
      value: 12
    }, {
      name: 'ammo',
      value: 160
    }, {
      name: 'rof',
      value: 8
    }, {
      name: 'reload',
      value: 1.9
    }, {
      name: 'dmg_wp_bonus',
      value: .2
    }],
    mods: {
      1: [{
        name: 'Spread',
        modifier: ['mod', '*', {
          name: 'spread_1',
          value: 0
        }]
      }, {
        name: 'Magazine',
        modifier: ['mod', '+', {
          name: 'magazine',
          value: 5
        }]
      }, {
        name: 'Reload',
        modifier: ['mod', '-', {
          name: 'reload',
          value: -.6
        }]
      }],
      2: [{
        name: 'Ammo',
        modifier: ['mod', '+', {
          name: 'ammo',
          value: 40
        }]
      }, {
        name: 'Damage',
        modifier: ['mod', '+', {
          name: 'dmg',
          value: 1
        }]
      }],
      3: [{
        name: 'Damage',
        modifier: ['mod', '+', {
          name: 'dmg',
          value: 1
        }]
      }, {
        name: 'Recoil & Spread',
        modifiers: [['mod', '*', {
          name: 'recoil',
          value: .5
        }], ['mod', '*', {
          name: 'spread',
          value: .65
        }]]
      }, {
        name: 'Ammo',
        modifier: ['mod', '+', {
          name: 'ammo',
          value: 40
        }]
      }],
      4: [{
        name: 'Weakpoint',
        modifier: ['mod', '+', {
          name: 'dmg_wp_bonus',
          value: .6
        }]
      }, {
        name: 'Damage',
        modifier: ['mod', '+', {
          name: 'dmg',
          value: 3
        }]
      }],
      5: [{
        name: 'Fire',
        modifier: ['grant', {
          name: 'volatile_bullets',
          value: [.5, .5]
        }]
      }, {
        name: 'Mactera',
        modifier: ['grant', {
          name: 'toxin_coating_mactera',
          value: true
        }]
      }]
    },
    ocs: {
      chain: {
        name: 'Chain Hit',
        code: 'chain',
        modifier: ['grant', {
          name: 'weakpoint_hit',
          value: true
        }]
      },
      homebrew: {
        name: 'Homebrew Powder',
        code: 'homebrew',
        modifier: ['grant', {
          name: 'dmg_random',
          value: [.8, 1.4]
        }]
      },
      magazine: {
        name: 'Oversized Magazine',
        code: 'magazine',
        modifiers: [['mod', '+', {
          name: 'magazine',
          value: 10
        }], ['mod', '+', {
          name: 'reload',
          value: .5
        }]]
      },
      auto: {
        name: 'Automatic Fire',
        code: 'auto',
        modifiers: [['grant', {
          name: 'full_auto',
          value: true
        }], ['mod', '+', {
          name: 'rof',
          value: 2
        }], ['mod', '*', {
          name: 'spread_1',
          value: 2
        }], ['mod', '*', {
          name: 'recoil',
          value: 3.5
        }]]
      },
      explosive: {
        name: 'Explosive Reload',
        code: 'explosive',
        modifiers: [['grant', {
          name: 'explosive_reload',
          value: 42
        }], ['mod', '*', {
          name: 'ammo',
          value: .5
        }], ['mod', '*', {
          name: 'magazine',
          value: .5
        }]]
      },
      tranq: {
        name: 'Tranquilizer Rounds',
        code: 'tranq',
        modifiers: [['grant', {
          name: 'stun',
          value: 6
        }], ['grant', {
          name: 'stun_chance',
          value: .5
        }], ['mod', '-', {
          name: 'magazine',
          value: 4
        }], ['mod', '-', {
          name: 'rof',
          value: 2
        }]]
      }
    }
  };
  var tools = {
    deepcore: deepcore,
    classic: classic,
    boomstick: boomstick,
    warthog: warthog,
    stubby: stubby,
    bulldog: bulldog,
    subata: subata
  };
  var palette = [['deepcore', 'classic', '_', 'boomstick', '_', '_'], ['warthog', 'stubby', '_', '_', '_', '_'], ['_', '_', '_', 'bulldog', '_', '_'], ['_', '_', '_', 'subata', '_', '_']];
  var entries$1 = Object.entries;
  var DASH = Alt('DASH', void 0);
  var mapping = {
    load: load,
    dump: dump
  };
  var mapping_no_dash = {
    load: function load(name) {
      return mapping.load(name).thru(no_dash);
    },
    dump: mapping.dump
  };

  function load(name) {
    if (name === '-') {
      return DASH;
    }

    return attempt(function () {
      return find$1(name);
    });
  }

  function dump(tool) {
    return tool.map(function (tool) {
      return tool.code;
    }).settle_on('DASH', function () {
      return '-';
    }).settle_on('LOADING', function () {
      return null;
    }).settle_on('FAIL', function () {
      return null;
    }).extract();
  }

  function no_dash(tool) {
    return tool.map_to('DASH', 'FAIL', function () {
      return new TypeError('dash');
    });
  }

  function find$1(name) {
    if (name in tools) {
      return tools[name];
    }

    throw new TypeError('wrong_tool');
  }

  function build(tool, build) {
    var traits = _toConsumableArray(tool.traits);

    var _iterator3 = _createForOfIteratorHelper(entries$1(build.mod)),
        _step3;

    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var _step3$value = _slicedToArray(_step3.value, 2),
            row_n = _step3$value[0],
            mod_n = _step3$value[1];

        var mod = mod_find(tool.mods, +row_n, +mod_n);

        if (mod) {
          traits = apply(traits, mod);
        }
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }

    var oc = oc_find(tool.ocs, build.oc);

    if (oc) {
      traits = apply(traits, oc);
    }

    return traits;
  }

  function BuildStore() {
    var state = State(LOADING());
    return react.exports.useMemo(function () {
      var build = {
        state: state,
        value: state.value,
        mod_toggle: mod_toggle$1,
        oc_toggle: oc_toggle$1,
        reset: reset
      };

      function mod_toggle$1(row_n, mod_n) {
        state.map(function (ba) {
          return ba.map(function (b) {
            return mod_toggle(b, row_n, mod_n);
          });
        });
      }

      function oc_toggle$1(oc) {
        state.map(function (ba) {
          return ba.map(function (b) {
            return oc_toggle(b, oc);
          });
        });
      }

      function reset() {
        state.map(function () {
          return OK(empty);
        });
      }

      return build;
    }, [state]);
  }

  function BuildHoverStore(base) {
    var mod_state = State(null);
    var oc_state = State(null);
    return react.exports.useMemo(function () {
      var value = base;
      var mod = mod_state.value;
      var oc = oc_state.value;

      if (mod) {
        value = value.map(function (value) {
          return mod_toggle(value, mod[0], mod[1]);
        });
      }

      if (oc) {
        value = value.map(function (value) {
          return oc_toggle(value, oc);
        });
      }

      var build = {
        value: value,
        mod_set: mod_state.set,
        oc_set: oc_state.set
      };
      return build;
    }, [base, mod_state, oc_state]);
  }

  function use_title(title, deps) {
    var stash = react.exports.useRef(document.title);
    return react.exports.useEffect(function () {
      if (typeof title === 'string') {
        document.title = title;
      } else {
        document.title = String(title());
      }

      return function () {
        document.title = stash.current;
      };
    }, deps);
  }

  var floor = Math.floor;
  var report = compose(enrichment([ammo_enrich, damage_enrich, damage_bonuses_enrich, dps_enrich]), reporting([ammo_report, damage_report, stun_report, dps_report, focus, the_rest, booleans]));

  function compose(enrich, report) {
    return function (traits) {
      return report(enrich(traits));
    };
  }

  function enrichment(enriches) {
    return function (traits) {
      return enriches.reduce(function (traits, enrich) {
        return enrich(traits);
      }, traits);
    };
  }

  function reporting(reports) {
    return function (traits) {
      return reports.reduce(function (perks, report) {
        return [].concat(_toConsumableArray(perks), _toConsumableArray(report(traits)));
      }, []);
    };
  }

  function ammo_enrich(traits) {
    var magazine = _int(find_or(traits, 'magazine', 0));

    var ammo = _int(find_value(traits, 'ammo'));

    var ammo_total = ammo + magazine;
    var ammo_total_half = floor(ammo_total / 2);
    var resup = [];

    if (magazine) {
      resup.push("".concat(magazine, "/").concat(ammo_total_half - magazine));
      resup.push("(0/".concat(ammo_total_half, ")"));
    } else {
      resup.push(String(ammo_total_half));
    }

    var ammo_resup_optimal = resup.join(' ');
    traits = update(traits, {
      name: 'magazine',
      value: magazine
    });
    traits = update(traits, {
      name: 'ammo',
      value: ammo
    });
    traits = update(traits, {
      name: 'ammo_total',
      value: ammo_total
    });
    traits = update(traits, {
      name: 'ammo_total_half',
      value: ammo_total_half
    });
    traits = update(traits, {
      name: 'ammo_resup_optimal',
      value: ammo_resup_optimal
    });
    return traits;
  }

  function ammo_report(traits) {
    var ammo = find_value(traits, 'ammo');

    var ammo_total = _int(find_value(traits, 'ammo_total'));

    var ammo_resup_optimal = find_value(traits, 'ammo_resup_optimal');

    var ammo_total_half = _int(find_value(traits, 'ammo_total_half'));

    var magazine = _int(find_value(traits, 'magazine'));

    var dmg_ammo = find_value(traits, 'dmg_ammo');

    var dmg_magazine = _int(find_value(traits, 'dmg_magazine'));

    var dmg_ammo_explosive = _int(find_value(traits, 'dmg_ammo_explosive'));

    return [Value$1({
      ammo: ammo
    })].concat(_toConsumableArray(maybe(magazine > 0, function () {
      return Value$1({
        magazine: magazine
      });
    })), [Value$1({
      ammo_total: ammo_total
    }), Value$1({
      ammo_resup_optimal: ammo_resup_optimal
    }, {
      value_order: ammo_total_half
    }), Value$1({
      dmg_ammo: dmg_ammo
    }, {
      format: floor
    })], _toConsumableArray(maybe(dmg_magazine > 0, function () {
      return Value$1({
        dmg_magazine: dmg_magazine
      }, {
        format: floor
      });
    })), _toConsumableArray(maybe(dmg_ammo_explosive > 0, function () {
      return Value$1({
        dmg_ammo_explosive: dmg_ammo_explosive
      }, {
        format: floor
      });
    })));
  }

  function damage_enrich(traits) {
    var magazine = _int(find_value(traits, 'magazine'));

    var ammo_total = _int(find_value(traits, 'ammo_total'));

    var burst = _int(find_or(traits, 'burst', 1));

    var dmg = real(find_value(traits, 'dmg'));
    var dmg_area = real(find_or(traits, 'dmg_area', 0));
    var dmg_burst = dmg * burst;
    var dmg_total = (dmg + dmg_area) * burst;
    var dmg_ammo = dmg_total * ammo_total;
    var dmg_magazine = dmg_total * magazine;
    var explosive_reload = real(find_or(traits, 'explosive_reload', 0));
    var dmg_ammo_explosive = ammo_total * explosive_reload;
    traits = update(traits, {
      name: 'burst',
      value: burst
    });
    traits = update(traits, {
      name: 'dmg_burst',
      value: dmg_burst
    });
    traits = update(traits, {
      name: 'dmg_area',
      value: dmg_area
    });
    traits = update(traits, {
      name: 'dmg_total',
      value: dmg_total
    });
    traits = update(traits, {
      name: 'dmg_ammo',
      value: dmg_ammo
    });
    traits = update(traits, {
      name: 'dmg_magazine',
      value: dmg_magazine
    });
    traits = update(traits, {
      name: 'explosive_reload',
      value: explosive_reload
    });
    traits = update(traits, {
      name: 'dmg_ammo_explosive',
      value: dmg_ammo_explosive
    });
    return traits;
  }

  function damage_bonuses_enrich(traits) {
    var dmg_burst = real(find_value(traits, 'dmg_burst'));
    var rof = real(find_value(traits, 'rof'));
    var dmg_bonuses = [];
    find_with(traits, 'stun_chance', function (value) {
      var stun_chance = real(value);
      if (!(stun_chance > 0)) return;
      var stun = real(find_value(traits, 'stun'));
      if (!(stun > 0)) return;
      dmg_bonuses.push("Stun ".concat(pt$1(real(stun_chance)), " for ").concat(second(stun)));

      var burst = _int(find_or(traits, 'burst', 1));

      if (burst > 1) {
        var neg = 1 - stun_chance;
        var not_happen = Math.pow(neg, burst);
        var happen = 1 - not_happen;
        traits = update(traits, {
          name: 'stun_burst_chance',
          value: happen
        });
      } else {
        var _neg = 1 - stun_chance;

        var _not_happen = Math.pow(_neg, rof);

        var stun_per_second = 1 - _not_happen;
        var stun_potential = stun_per_second * stun;
        traits = update(traits, {
          name: 'stun_per_second',
          value: stun_per_second
        });
        traits = update(traits, {
          name: 'stun_potential',
          value: stun_potential
        });
      }
    });
    find_with(traits, 'heat', function (value) {
      var heat = real(value);
      var dmg_heat = floor(dmg_burst * heat);
      if (heat > 0) dmg_bonuses.push("+".concat(dmg_heat, " Heat"));
    });
    find_with(traits, 'explosive_reload', function (value) {
      if (value) dmg_bonuses.push("+".concat(value, " Explosive"));
    });
    find_with(traits, 'toxin_coating', function (value) {
      if (value) dmg_bonuses.push('+120 Neurotoxin ' + pt$1(real(value)));
    });
    find_with(traits, 'volatile_bullets', function (value) {
      var _value3 = _slicedToArray(value, 2),
          fire = _value3[0],
          heat = _value3[1];

      var dmg_fire = floor(dmg_burst * fire);

      if (dmg_fire) {
        dmg_bonuses.push("+".concat(dmg_fire, " Fire"));
      }

      var dmg_heat = floor(dmg_burst * heat);

      if (dmg_heat) {
        dmg_bonuses.push("+".concat(dmg_heat, " Heat"));
      }
    });
    find_with(traits, 'dmg_electro', function (value) {
      if (value) dmg_bonuses.push("+".concat(value, " Electro"));
    });
    find_with(traits, 'electrocution_aoe', function (value) {
      var chance_electro = real(find_or(traits, 'chance_electro', 0));
      var chance = chance_electro * real(value);
      if (chance) dmg_bonuses.push("+Electric Arc ".concat(pt$1(chance)));
    });
    find_with(traits, 'fear_chance', function (value) {
      if (value) dmg_bonuses.push("+".concat(pt$1(real(value)), " Fear"));
    });
    traits = update(traits, {
      name: 'dmg_bonuses',
      value: dmg_bonuses
    });
    return traits;
  }

  function damage_report(traits) {
    var perks = [];
    var dmg = real(find_value(traits, 'dmg'));
    var dmg_burst = real(find_value(traits, 'dmg_burst'));
    var dmg_area = real(find_value(traits, 'dmg_area'));
    var dmg_total = real(find_value(traits, 'dmg_total'));
    var burst = real(find_value(traits, 'burst'));
    var shockwave = real(find_or(traits, 'shockwave', 0));
    var dmg_bonuses = find_value(traits, 'dmg_bonuses');
    var dmg_wp_bonus = real(find_or(traits, 'dmg_wp_bonus', 0));
    var dmg_wp1 = (1 + dmg_wp_bonus) * dmg_burst + dmg_area;
    var dmg_wp2 = (2 + dmg_wp_bonus) * dmg_burst + dmg_area;
    var dmg_wp3 = (3 + dmg_wp_bonus) * dmg_burst + dmg_area;
    var dmg_frozen = 3 * dmg_burst + dmg_area;
    var dmg_ifg = 1.3 * dmg_total;
    var dmg_close_bonus = shockwave;
    perks.push(Value$1({
      dmg: dmg
    }, {
      format: floor
    }));
    if (burst > 1) perks.push(Value$1({
      burst: burst
    }));

    if (dmg_area) {
      var dmg_area_radius_max = real(find_value(traits, 'dmg_area_radius_max'));
      var dmg_area_radius = real(find_value(traits, 'dmg_area_radius'));
      perks.push(Value$1({
        dmg_area: "".concat(floor(dmg_area), " to ").concat(meter(dmg_area_radius_max))
      }, {
        value_order: dmg_area,
        bonuses: ["".concat(floor(.5 * dmg_area), " at the edge of ").concat(meter(dmg_area_radius))].concat(_toConsumableArray(dmg_bonuses))
      }));
    }

    perks.push(Value$1({
      dmg_total: dmg_total
    }, {
      bonuses: dmg_bonuses
    }));
    if (shockwave > 0) perks.push(Value$1({
      shockwave: shockwave
    }, {
      format: floor
    }));

    if (dmg_close_bonus > 0) {
      var dmg_close = dmg_total + dmg_close_bonus;
      perks.push(Value$1({
        dmg_close: dmg_close
      }, {
        bonuses: dmg_bonuses
      }));
    }

    perks.push(Value$1({
      dmg_wp_bonus: dmg_wp_bonus
    }, {
      format: pt$1
    }));
    perks.push(Value$1({
      dmg_wp1: dmg_wp1
    }, {
      format: floor,
      bonuses: dmg_bonuses
    }));
    perks.push(Value$1({
      dmg_wp2: dmg_wp2
    }, {
      format: floor,
      bonuses: dmg_bonuses
    }));
    perks.push(Value$1({
      dmg_wp3: dmg_wp3
    }, {
      format: floor,
      bonuses: dmg_bonuses
    }));
    perks.push(Value$1({
      dmg_frozen: dmg_frozen
    }, {
      format: floor
    }));
    perks.push(Value$1({
      dmg_ifg: dmg_ifg
    }, {
      format: floor
    }));
    find_with(traits, 'dmg_v_electro', function (value) {
      if (value) {
        var dmg_v_electro = dmg_total * (1 + real(value));
        perks.push(Value$1({
          dmg_v_electro: dmg_v_electro
        }, {
          format: floor,
          bonuses: dmg_bonuses
        }));
      }
    });
    find_with(traits, 'dmg_v_afflicted', function (value) {
      if (value) {
        var dmg_v_afflicted = dmg_total * (1 + real(value));
        perks.push(Value$1({
          dmg_v_afflicted: dmg_v_afflicted
        }, {
          format: floor,
          bonuses: dmg_bonuses
        }));
      }
    });
    return perks;
  }

  function stun_report(traits) {
    var perks = [];
    var stun_chance = real(find_or(traits, 'stun_chance', 0));
    if (!(stun_chance > 0)) return perks;
    var stun = real(find_value(traits, 'stun'));
    if (!(stun > 0)) return perks;
    var wp_only = String(find_or(traits, 'stun_area', '')) === 'wp';
    var bonuses = [];

    if (wp_only) {
      bonuses.push('Weakpoint only');
    }

    perks.push(Value$1({
      stun_chance: stun_chance
    }, {
      format: pt$1,
      bonuses: bonuses
    }));
    perks.push(Value$1({
      stun: stun
    }, {
      format: second,
      bonuses: bonuses
    }));
    var stun_burst_chance = find_or(traits, 'stun_burst_chance', 0);

    if (stun_burst_chance) {
      perks.push(Value$1({
        stun_burst_chance: stun_burst_chance
      }, {
        format: pt_stun,
        bonuses: bonuses
      }));
    }

    var stun_per_second = find_or(traits, 'stun_per_second', 0);
    var stun_potential = find_or(traits, 'stun_potential', 0);

    if (stun_per_second) {
      perks.push(Value$1({
        stun_per_second: stun_per_second
      }, {
        format: pt_stun,
        bonuses: bonuses
      }));
      perks.push(Value$1({
        stun_potential: stun_potential
      }, {
        format: second,
        bonuses: bonuses
      }));
    }

    return perks;
  }

  function dps_enrich(traits) {
    var dmg_total = real(find_value(traits, 'dmg_total'));
    var rof = real(find_value(traits, 'rof'));
    var dps = dmg_total * rof;
    traits = update(traits, {
      name: 'dps',
      value: dps
    });

    var magazine = _int(find_value(traits, 'magazine'));

    if (magazine) {
      var time_to_empty = (magazine - 1) / rof;
      var reload = real(find_value(traits, 'reload'));
      var dps_sustain = dmg_total * magazine / (time_to_empty + reload);
      traits = update(traits, {
        name: 'time_to_empty',
        value: time_to_empty
      });
      traits = update(traits, {
        name: 'dps_sustain',
        value: dps_sustain
      });
    }

    var dmg_area = real(find_value(traits, 'dmg_area'));

    if (dmg_area) {
      var dps_area_max = floor(dmg_area * rof);
      var dps_area_min = floor(dmg_area * rof * .5);
      traits = update(traits, {
        name: 'dps_area_max',
        value: dps_area_max
      });
      traits = update(traits, {
        name: 'dps_area_min',
        value: dps_area_min
      });
    }

    return traits;
  }

  function dps_report(traits) {
    var perks = [];
    var rof = real(find_value(traits, 'rof'));
    perks.push(Value$1({
      rof: rof
    }, {
      format: fixed
    }));
    var dps = real(find_value(traits, 'dps'));
    perks.push(Value$1({
      dps: dps
    }, {
      format: fixed
    }));
    var dmg_area = real(find_value(traits, 'dmg_area'));

    if (dmg_area) {
      var dps_area = real(find_value(traits, 'dps_area_max'));
      var dps_area_min = real(find_value(traits, 'dps_area_min'));
      var dmg_area_radius_max = real(find_value(traits, 'dmg_area_radius_max'));
      var dmg_area_radius = real(find_value(traits, 'dmg_area_radius'));
      perks.push(Value$1({
        dps_area: "".concat(fixed(dps_area), " to ").concat(meter(dmg_area_radius_max))
      }, {
        value_order: dps_area,
        bonuses: ["".concat(fixed(dps_area_min), " at the edge of ").concat(meter(dmg_area_radius))]
      }));
    }

    var magazine = real(find_value(traits, 'magazine'));

    if (magazine) {
      var time_to_empty = real(find_value(traits, 'time_to_empty'));
      var reload = real(find_value(traits, 'reload'));
      var dps_sustain = real(find_value(traits, 'dps_sustain'));
      perks.push(Value$1({
        time_to_empty: time_to_empty
      }, {
        format: second
      }));
      perks.push(Value$1({
        reload: reload
      }, {
        format: second
      }));
      perks.push(Value$1({
        dps_sustain: dps_sustain
      }, {
        format: fixed
      }));
    }

    return perks;
  }

  function focus(traits) {
    var perks = [];
    var focus_shot_bonus = real(find_or(traits, 'focus_shot_bonus', 0));
    if (!focus_shot_bonus) return [];
    var focus_mul = 1 + focus_shot_bonus;
    var focus_speed = real(find_value(traits, 'focus_speed'));
    var focus_time = 1 / focus_speed;

    var rof = _int(find_value(traits, 'rof'));

    var focus_cooldown = 1 / rof;

    var dmg = _int(find_value(traits, 'dmg'));

    var dmg_wp_bonus = real(find_or(traits, 'dmg_wp_bonus', 0));
    var dmg_focus = dmg * focus_mul;
    var dmg_focus_wp1 = (1 + dmg_wp_bonus) * dmg * focus_mul;
    var dmg_focus_wp2 = (2 + dmg_wp_bonus) * dmg * focus_mul;
    var dmg_focus_wp3 = (3 + dmg_wp_bonus) * dmg * focus_mul;

    var ammo_total = _int(find_value(traits, 'ammo_total'));

    var ammo_dmg_focus = dmg_focus * ammo_total / 2;
    var dmg_bonuses = [];
    find_with(traits, 'focus_electrocution', function (value) {
      dmg_bonuses.push("+".concat(value, " Electro 100%"));
    });
    find_with(traits, 'focus_stun', function () {
      dmg_bonuses.push('Stun 100% for 3s');
    });
    find_with(traits, 'focus_fear', function () {
      dmg_bonuses.push('Fear 250% 4m');
    });
    var focus_movement = real(find_value(traits, 'focus_movement'));
    perks.push(Value$1({
      focus_time: focus_time
    }, {
      format: second
    }));
    perks.push(Value$1({
      focus_cooldown: focus_cooldown
    }, {
      format: second
    }));
    perks.push(Value$1({
      dmg_focus: dmg_focus
    }, {
      format: floor,
      bonuses: dmg_bonuses
    }));
    perks.push(Value$1({
      ammo_dmg_focus: ammo_dmg_focus
    }, {
      format: floor
    }));
    perks.push(Value$1({
      dmg_focus_wp1: dmg_focus_wp1
    }, {
      format: floor,
      bonuses: dmg_bonuses
    }));
    perks.push(Value$1({
      dmg_focus_wp2: dmg_focus_wp2
    }, {
      format: floor,
      bonuses: dmg_bonuses
    }));
    perks.push(Value$1({
      dmg_focus_wp3: dmg_focus_wp3
    }, {
      format: floor,
      bonuses: dmg_bonuses
    }));
    perks.push(Value$1({
      focus_movement: focus_movement
    }, {
      format: pt$1
    }));
    return perks;
  }

  function the_rest(traits) {
    var perks = [];
    var spread = real(find_or(traits, 'spread', 1));
    var spread_1 = real(find_or(traits, 'spread_1', 1));
    var recoil = real(find_or(traits, 'recoil', 1));
    var ab = real(find_or(traits, 'ab', 0));
    var blowthrough = real(find_or(traits, 'blowthrough', 0));
    var dmg_random = find_with(traits, 'dmg_random', function (value) {
      var _value4 = _slicedToArray(value, 2),
          low = _value4[0],
          high = _value4[1];

      return "between ".concat(pt$1(low), " and ").concat(pt$1(high));
    });
    if (spread_1 !== 1) perks.push(Value$1({
      spread_1: spread_1
    }, {
      format: pt$1
    }));
    if (spread !== 1) perks.push(Value$1({
      spread: spread
    }, {
      format: pt$1
    }));
    if (recoil !== 1) perks.push(Value$1({
      recoil: recoil
    }, {
      format: pt$1
    }));
    if (ab > 0) perks.push(Value$1({
      ab: ab
    }, {
      format: pt$1
    }));
    if (blowthrough > 0) perks.push(Value$1({
      blowthrough: blowthrough
    }));
    find_with(traits, 'chance_electro', function (chance_electro) {
      perks.push(Value$1({
        chance_electro: chance_electro
      }, {
        format: pt$1
      }));
    });
    if (dmg_random) perks.push(Value$1({
      dmg_random: dmg_random
    }));
    return perks;
  }

  function booleans(traits) {
    return traits.filter(function (trait) {
      return trait.value === true;
    }).map(function (trait) {
      return ['flag', {
        label: trait.name
      }];
    });
  }

  function maybe(cond, fn) {
    if (!cond) return [];
    return [fn()];
  }

  function Value$1(unit, options) {
    var keys = Object.keys(unit);
    if (keys.length !== 1) throw new TypeError();
    var label = keys[0];
    var value = unit[label];
    return ['value', _objectSpread(_objectSpread({}, options), {}, {
      label: label,
      value: value
    })];
  }

  function real(value) {
    if (typeof value === 'number') {
      return value;
    }

    console.error('not_real', value);
    throw new TypeError('not_real');
  }

  function _int(value) {
    return floor(real(value));
  }

  function pt$1(value) {
    return "".concat((value * 100).toFixed(0), "%");
  }

  function pt_stun(value) {
    return "".concat((value * 100).toFixed(3), "%");
  }

  function second(value) {
    return "".concat(fixed(value), "s");
  }

  function meter(value) {
    return "".concat(fixed(value), "m");
  }

  function fixed(value) {
    return Number(value.toFixed(3));
  }

  function union(L, R) {
    L = _toConsumableArray(L);
    R = _toConsumableArray(R);
    var _ = [];

    while (is(L) || is(R)) {
      if (!is(L)) {
        from_right();
        continue;
      }

      if (!is(R)) {
        from_left();
        continue;
      }

      var inR = R.indexOf(L[0]);

      if (inR === -1) {
        from_left();
        continue;
      }

      if (inR === 0) {
        from_left();
        skip_right();
        continue;
      }

      from_right();
      continue;
    }

    function from_left() {
      if (!L.length) throw 1;
      _ = append(_, L.shift());
    }

    function from_right() {
      if (!R.length) throw 2;
      _ = append(_, R.shift());
    }

    function skip_right() {
      if (!R.length) throw 3;
      R.shift();
    }

    return _;
  }

  function append(seq, item) {
    if (is(seq)) {
      if (seq[seq.length - 1] === item) throw 4;
    }

    return [].concat(_toConsumableArray(seq), [item]);
  }

  function is(seq) {
    return !!seq.length;
  }

  function _nullishCoalesce$1(lhs, rhsFn) {
    if (lhs != null) {
      return lhs;
    } else {
      return rhsFn();
    }
  }

  function _optionalChain$2(ops) {
    var lastAccessLHS = undefined;
    var value = ops[0];
    var i = 1;

    while (i < ops.length) {
      var op = ops[i];
      var fn = ops[i + 1];
      i += 2;

      if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) {
        return undefined;
      }

      if (op === 'access' || op === 'optionalAccess') {
        lastAccessLHS = value;
        value = fn(value);
      } else if (op === 'call' || op === 'optionalCall') {
        value = fn(function () {
          var _value5;

          for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
          }

          return (_value5 = value).call.apply(_value5, [lastAccessLHS].concat(args));
        });
        lastAccessLHS = undefined;
      }
    }

    return value;
  }

  function delta(re_L, re_R) {
    return with_delta(re_L, re_R).map(function (_ref7) {
      var _ref8 = _slicedToArray(_ref7, 3),
          L = _ref8[0],
          R = _ref8[1],
          delta = _ref8[2];

      if (!delta) {
        return _nullishCoalesce$1(R, function () {
          return L;
        });
      } else if (!R) {
        return copy(L, {
          delta: delta
        });
      } else {
        return copy(R, {
          delta: delta
        });
      }
    });
  }

  function side_by_side(re_L, re_R) {
    return with_delta(re_L, re_R).map(function (_ref9) {
      var _ref10 = _slicedToArray(_ref9, 3),
          L = _ref10[0],
          R = _ref10[1],
          delta = _ref10[2];

      return ['compare', _nullishCoalesce$1(R, function () {
        return L;
      })[0], L, R, delta];
    });
  }

  function with_delta(re_L, re_R) {
    return cross(re_L, re_R).map(function (_ref11) {
      var _ref12 = _slicedToArray(_ref11, 2),
          L = _ref12[0],
          R = _ref12[1];

      if (!(L || R)) throw new TypeError('both_null');

      if (!L) {
        return [L, R, {
          sign: 'plus'
        }];
      }

      if (!R) {
        return [L, R, {
          sign: 'minus'
        }];
      }

      if (L[0] !== R[0]) throw new TypeError('perk_type_mismatch');

      if (L[0] === 'flag') {
        if (L[1].label !== R[1].label) throw new TypeError('flag_label_mismatch');
        return [L, R, null];
      }

      if (L[0] !== 'value') throw new TypeError('type_delta_unavail');
      if (R[0] !== 'value') throw new TypeError('type_delta_unavail');
      if (L[1].label !== R[1].label) throw new TypeError('label_mismatch');
      if (_typeof(L[1].value) !== _typeof(R[1].value)) throw new TypeError('value_type_mismatch');
      if (_typeof(L[1].value_order) !== _typeof(R[1].value_order)) throw new TypeError('order_type_mismatch');
      var L_value = L[1].value;
      var R_value = R[1].value;
      var is_order = typeof L[1].value_order !== 'undefined';
      var L_value_order = L[1].value_order;
      var R_value_order = R[1].value_order;
      var is_value_eq = R_value === L_value;
      var is_bonus_eq = bonus_eq(L, R);

      if (is_value_eq && is_bonus_eq) {
        return [L, R, null];
      }

      var delta = {};

      if (!is_value_eq) {
        delta.value = L_value;

        if (!is_order) {
          if (typeof L_value !== 'number') throw new TypeError('cannot_order');
          delta.sign = sign(L_value, R_value);
          delta.gain = R_value - L_value;
          var gain_pt = R_value / L_value - 1;

          if (Number.isFinite(gain_pt)) {
            delta.gain_pt = gain_pt;
          }
        } else {
          delta.sign = sign(L_value_order, R_value_order);
        }
      }

      if (!is_bonus_eq) {
        delta.bonuses = delta_bonuses(L[1].bonuses, R[1].bonuses);
      }

      return [L, R, delta];
    });
  }

  function copy(perk, extend) {
    return [perk[0], _objectSpread(_objectSpread({}, perk[1]), extend)];
  }

  function bonus_eq(L, R) {
    var LL = L[1];
    var RR = R[1];
    if (!LL.bonuses && !RR.bonuses) return true;
    if (!LL.bonuses && RR.bonuses) throw new TypeError('bonuses');
    if (LL.bonuses && !RR.bonuses) throw new TypeError('bonuses');
    if (_optionalChain$2([LL, 'access', function (_) {
      return _.bonuses;
    }, 'optionalAccess', function (_2) {
      return _2.length;
    }]) !== _optionalChain$2([RR, 'access', function (_3) {
      return _3.bonuses;
    }, 'optionalAccess', function (_4) {
      return _4.length;
    }])) return false;

    for (var i = 0; i < LL.bonuses.length; i++) {
      if (LL.bonuses[i] !== RR.bonuses[i]) return false;
    }

    return true;
  }

  function delta_bonuses(L, R) {
    return union(L, R).map(function (bonus) {
      var is_L = L.includes(bonus);
      var is_R = R.includes(bonus);

      if (is_L && is_R) {
        return [null, bonus];
      } else if (is_L) {
        return ['minus', bonus];
      } else {
        return ['plus', bonus];
      }
    });
  }

  function sign(prev, next) {
    if (next < prev) return 'minus';
    return 'plus';
  }

  function cross(re_L, re_R) {
    var keys_L = keys(re_L);
    var keys_R = keys(re_R);
    return union(keys_L, keys_R).map(function (key) {
      var L = find(re_L, key);
      var R = find(re_R, key);
      var pair = [L, R];
      return pair;
    });
  }

  function keys(perks) {
    return perks.map(function (perk) {
      return perk[1].label;
    });
  }

  function find(perks, key) {
    return _nullishCoalesce$1(perks.find(function (perk) {
      return perk[1].label === key;
    }), function () {
      return null;
    });
  }

  function PerksDelta(tool, build$1, build_hover) {
    var perks = react.exports.useMemo(function () {
      return join(tool, build$1).chain('OK', function (_ref13) {
        var _ref14 = _slicedToArray(_ref13, 2),
            tool = _ref14[0],
            build$1 = _ref14[1];

        return attempt(function () {
          return build(tool, build$1);
        });
      }).map(report);
    }, [tool, build$1]);
    var perks_hover = react.exports.useMemo(function () {
      return join(tool, build_hover).chain('OK', function (_ref15) {
        var _ref16 = _slicedToArray(_ref15, 2),
            tool = _ref16[0],
            build_hover = _ref16[1];

        return attempt(function () {
          return build(tool, build_hover);
        });
      }).map(report);
    }, [tool, build_hover]);
    var perks_delta = react.exports.useMemo(function () {
      return join(perks, perks_hover).map(function (_ref17) {
        var _ref18 = _slicedToArray(_ref17, 2),
            L = _ref18[0],
            R = _ref18[1];

        return delta(L, R);
      });
    }, [perks_hover]);
    return perks_delta;
  }

  function Button(props) {
    return React.createElement('button', _objectSpread({}, classtype('Button', props)));
  }

  function _optionalChain$1(ops) {
    var lastAccessLHS = undefined;
    var value = ops[0];
    var i = 1;

    while (i < ops.length) {
      var op = ops[i];
      var fn = ops[i + 1];
      i += 2;

      if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) {
        return undefined;
      }

      if (op === 'access' || op === 'optionalAccess') {
        lastAccessLHS = value;
        value = fn(value);
      } else if (op === 'call' || op === 'optionalCall') {
        value = fn(function () {
          var _value6;

          for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            args[_key4] = arguments[_key4];
          }

          return (_value6 = value).call.apply(_value6, [lastAccessLHS].concat(args));
        });
        lastAccessLHS = undefined;
      }
    }

    return value;
  }

  var entries = Object.entries;
  var values = Object.values;

  function Card(props) {
    var build = props.build,
        build_hover = props.build_hover;
    var tool = props.tool;
    return React.createElement('div', {
      className: "Card"
    }, React.createElement('div', {
      className: "pocket"
    }, props.pocket), React.createElement('div', {
      className: "name"
    }, tool.name), React.createElement('div', {
      className: "tiers"
    }, entries(tool.mods).map(function (_ref19) {
      var _ref20 = _slicedToArray(_ref19, 2),
          n = _ref20[0],
          mods = _ref20[1];

      return React.createElement(Tier, {
        key: n,
        build: build,
        build_hover: build_hover,
        n: +n,
        mods: mods
      });
    }), React.createElement(Ocs, {
      build: build,
      build_hover: build_hover,
      ocs: tool.ocs
    })));
  }

  function Tier(props) {
    var build = props.build,
        build_hover = props.build_hover;
    var n = props.n;
    return React.createElement('div', {
      className: "tier"
    }, React.createElement('div', {
      className: "n"
    }, "T", n), React.createElement('div', {
      className: "buttons"
    }, props.mods.map(function (mod, index) {
      var mod_n = index + 1;

      var _active_ = mod_n === _optionalChain$1([build, 'access', function (_) {
        return _.value;
      }, 'access', function (_2) {
        return _2.ripout;
      }, 'call', function (_3) {
        return _3();
      }, 'optionalAccess', function (_4) {
        return _4.mod;
      }, 'access', function (_5) {
        return _5[n];
      }]);

      return React.createElement(Button, {
        key: index,
        className: cls({
          _active_: _active_
        }),
        onClick: function onClick() {
          return toggle(mod_n);
        },
        onMouseEnter: function onMouseEnter() {
          return enter(mod_n);
        },
        onMouseLeave: function onMouseLeave() {
          return leave();
        }
      }, mod.name);
    })));

    function toggle(mod_n) {
      build.mod_toggle(n, mod_n);
    }

    function enter(mod_n) {
      build_hover.mod_set([n, mod_n]);
    }

    function leave() {
      build_hover.mod_set(null);
    }
  }

  function Ocs(props) {
    var build = props.build,
        build_hover = props.build_hover;
    var ocs = values(props.ocs);
    if (!ocs.length) return null;
    return React.createElement('div', {
      className: "tier ocs"
    }, React.createElement('div', {
      className: "n"
    }, "OC"), React.createElement('div', {
      className: "buttons"
    }, ocs.map(function (oc) {
      var _active_ = oc.code === _optionalChain$1([build, 'access', function (_6) {
        return _6.value;
      }, 'access', function (_7) {
        return _7.ripout;
      }, 'call', function (_8) {
        return _8();
      }, 'optionalAccess', function (_9) {
        return _9.oc;
      }]);

      return React.createElement(Button, {
        key: oc.code,
        className: cls({
          _active_: _active_
        }),
        onClick: function onClick() {
          return toggle(oc.code);
        },
        onMouseEnter: function onMouseEnter() {
          return enter(oc.code);
        },
        onMouseLeave: function onMouseLeave() {
          return leave();
        }
      }, oc.name);
    })));

    function toggle(oc) {
      build.oc_toggle(oc);
    }

    function enter(oc) {
      build_hover.oc_set(oc);
    }

    function leave() {
      build_hover.oc_set(null);
    }
  }

  function Palette(props) {
    return React.createElement('div', {
      className: "Palette"
    }, React.createElement('div', {
      className: "rows"
    }, palette.map(function (row, index) {
      return React.createElement('div', {
        key: index,
        className: "row"
      }, row.map(function (name, key) {
        return React.createElement(Controller, _objectSpread({}, _objectSpread(_objectSpread({}, props), {}, {
          name: name,
          key: key
        })));
      }));
    })));
  }

  function Controller(props) {
    var name = props.name;
    var click = props.click;

    if (click) {
      return React.createElement(Button, {
        className: "Button",
        onClick: function onClick() {
          return click(name);
        }
      }, name);
    } else {
      return React.createElement(Link, {
        className: "Button",
        to: "/build/".concat(name, "/")
      }, name);
    }
  }

  function label(label) {
    if (label in labels) {
      return labels[label];
    } else {
      return label_default(label);
    }
  }

  var labels = {
    'ammo_total': 'Ammo (TOTAL)',
    'dmg_ammo': 'Damage (TOTAL)',
    'dmg_ammo_explosive': 'Explosive damage (TOTAL)',
    'dmg_magazine': 'Damage (magazine)',
    'dmg': 'Damage, direct',
    'dmg_area': 'Damage, area',
    'dmg_total': 'Total Damage to single target',
    'ammo_resup_optimal': 'Optimal Ammo resupply',
    'dmg_wp_bonus': 'Bonus damage to weakpoint',
    'dps': 'DPS (ideal)',
    'dps_area': 'Area DPS (ideal)',
    'dps_sustain': 'DPS (sustain)',
    'time_to_empty': 'Time to empty magazine',
    'rof': 'Rate of Fire',
    'reload': 'Reload time',
    'spread_1': 'Base spread',
    'spread': 'Spread per shot',
    'ab': 'Armor break',
    'burst': 'Burst Size',
    'dmg_close': 'Total Damage to close target',
    'dmg_wp1': 'Damage to ×1 weakpoint',
    'dmg_wp2': 'Damage to ×2 weakpoint',
    'dmg_wp3': 'Damage to ×3 weakpoint',
    'dmg_frozen': 'Damage vs Frozen',
    'dmg_v_electro': 'Damage vs Electrified',
    'dmg_v_afflicted': 'Damage vs Afflicted',
    'dmg_ifg': 'Damage in IFG',
    'dmg_focus': 'Damage (FOCUS)',
    'ammo_dmg_focus': 'Damage (FOCUS TOTAL)',
    'dmg_focus_wp1': 'Damage (FOCUS) ×1 weakpoint',
    'dmg_focus_wp2': 'Damage (FOCUS) ×2 weakpoint',
    'dmg_focus_wp3': 'Damage (FOCUS) ×3 weakpoint',
    'stun_chance': 'Stun chance',
    'stun_burst_chance': 'Total Stun chance',
    'fast_reload': 'Fast Reload',
    'hover': 'Focused Shot Hover',
    'weakpoint_hit': 'Weakpoint chain hit chance 75%',
    'dmg_random': 'Randomized Damage',
    'double_barrel': 'No regrets'
  };

  function label_default(label) {
    return label.replace(/_/g, ' ').replace(/\b\w/g, function (first) {
      return first.toUpperCase();
    });
  }

  function _nullishCoalesce(lhs, rhsFn) {
    if (lhs != null) {
      return lhs;
    } else {
      return rhsFn();
    }
  }

  function _optionalChain(ops) {
    var lastAccessLHS = undefined;
    var value = ops[0];
    var i = 1;

    while (i < ops.length) {
      var op = ops[i];
      var fn = ops[i + 1];
      i += 2;

      if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) {
        return undefined;
      }

      if (op === 'access' || op === 'optionalAccess') {
        lastAccessLHS = value;
        value = fn(value);
      } else if (op === 'call' || op === 'optionalCall') {
        value = fn(function () {
          var _value7;

          for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
            args[_key5] = arguments[_key5];
          }

          return (_value7 = value).call.apply(_value7, [lastAccessLHS].concat(args));
        });
        lastAccessLHS = undefined;
      }
    }

    return value;
  }

  function Report(props) {
    var mode = '';
    var perks;

    if (props.comparison) {
      perks = props.comparison.map(function (comparison) {
        return {
          comparison: comparison
        };
      });
      mode = '_comparison_';
    } else {
      perks = props.perks.map(function (perk) {
        return {
          perk: perk
        };
      });
    }

    return React.createElement('div', {
      className: cls('Report', mode)
    }, React.createElement('div', {
      className: "grid"
    }, perks.map(function (props, index) {
      return React.createElement(Row, _objectSpread({
        key: index
      }, props));
    })));
  }

  function Row(props) {
    var kind;

    if (props.comparison) {
      kind = props.comparison[1];
    } else {
      kind = props.perk[0];
    }

    switch (kind) {
      default:
        throw new TypeError('wrong_perk_kind');

      case 'value':
        return React.createElement(Value, _objectSpread({}, props));

      case 'flag':
        return React.createElement(Flag, _objectSpread({}, props));
    }
  }

  function Value(props) {
    if (props.perk) {
      var perk = props.perk[1];
      return React.createElement('div', {
        className: "row"
      }, React.createElement('div', {
        className: "label"
      }, label(perk.label)), React.createElement('div', {
        className: "item"
      }, val(perk)));
    } else {
      var comparison = props.comparison;
      var perk_L = comparison[2];
      var perk_R = comparison[3];

      var format = _nullishCoalesce(_nullishCoalesce(_optionalChain([perk_R, 'optionalAccess', function (_) {
        return _[1];
      }, 'access', function (_2) {
        return _2.format;
      }]), function () {
        return _optionalChain([perk_L, 'optionalAccess', function (_3) {
          return _3[1];
        }, 'access', function (_4) {
          return _4.format;
        }]);
      }), function () {
        return String;
      });

      var label$1 = _nullishCoalesce(_optionalChain([perk_R, 'optionalAccess', function (_5) {
        return _5[1];
      }, 'access', function (_6) {
        return _6.label;
      }]), function () {
        return _optionalChain([perk_L, 'optionalAccess', function (_7) {
          return _7[1];
        }, 'access', function (_8) {
          return _8.label;
        }]);
      });

      var _delta = comparison[4];
      var delta_sign = [];

      if (_delta) {
        delta_sign.push('_delta_', sign_to_cls(_delta.sign));
      }

      return React.createElement('div', {
        className: "row"
      }, React.createElement('div', {
        className: "label"
      }, label(label$1)), React.createElement('div', {
        className: "item"
      }, perk_L && val(perk_L[1])), React.createElement('div', {
        className: cls('sep', delta_sign)
      }, _optionalChain([_delta, 'optionalAccess', function (_9) {
        return _9.gain;
      }]) && explicit_sign(format(_delta.gain), _delta.gain), _optionalChain([_delta, 'optionalAccess', function (_10) {
        return _10.gain_pt;
      }]) && React.createElement('span', {
        className: "pt"
      }, "(", explicit_sign(pt(_delta.gain_pt), _delta.gain), ")")), React.createElement('div', {
        className: "item"
      }, perk_R && val(perk_R[1])));
    }
  }

  function val(perk) {
    var format = _nullishCoalesce(perk.format, function () {
      return String;
    });

    var delta = perk.delta;

    if (!delta) {
      return React.createElement('div', {
        className: "value"
      }, format(perk.value), parens(perk.bonuses));
    }

    var sign = sign_to_cls(delta.sign);
    return React.createElement('div', {
      className: "value"
    }, React.createElement('span', {
      className: cls('_delta_', sign)
    }, format(perk.value)), delta.gain && React.createElement('span', {
      className: cls('_gain_', sign)
    }, explicit_sign(format(delta.gain), delta.gain), delta.gain_pt && React.createElement('span', {
      className: "pt"
    }, "(", explicit_sign(pt(delta.gain_pt), delta.gain), ")")), delta.value != null && React.createElement('span', {
      className: "_delta_"
    }, format(delta.value)), parens(_nullishCoalesce(_optionalChain([perk, 'access', function (_11) {
      return _11.delta;
    }, 'optionalAccess', function (_12) {
      return _12.bonuses;
    }]), function () {
      return perk.bonuses;
    })));
  }

  function Flag(props) {
    if (props.perk) {
      var perk = props.perk[1];
      return React.createElement('div', {
        className: "row"
      }, React.createElement('div', {
        className: "label"
      }), React.createElement('div', {
        className: cls('item', flag_sign(perk.delta))
      }, label(perk.label)));
    } else {
      var comparison = props.comparison;
      var perk_L = comparison[2];
      var perk_R = comparison[3];
      var sign_L = flag_sign(_optionalChain([perk_L, 'optionalAccess', function (_13) {
        return _13[1];
      }, 'access', function (_14) {
        return _14.delta;
      }]));
      var sign_R = flag_sign(_optionalChain([perk_R, 'optionalAccess', function (_15) {
        return _15[1];
      }, 'access', function (_16) {
        return _16.delta;
      }]));
      var _delta2 = comparison[4];
      var delta_sign = [];

      if (_delta2) {
        delta_sign.push('_delta_', sign_to_cls(_delta2.sign));
      }

      return React.createElement('div', {
        className: "row"
      }, React.createElement('div', {
        className: "label"
      }), React.createElement('div', {
        className: cls('item', sign_L)
      }, perk_L && label(perk_L[1].label)), React.createElement('div', {
        className: cls('sep', delta_sign)
      }), React.createElement('div', {
        className: cls('item', sign_R)
      }, perk_R && label(perk_R[1].label)));
    }

    function flag_sign(delta) {
      if (_optionalChain([delta, 'optionalAccess', function (_17) {
        return _17.sign;
      }])) {
        return ['_delta_', sign_to_cls(_optionalChain([delta, 'optionalAccess', function (_18) {
          return _18.sign;
        }]))];
      } else {
        return [];
      }
    }
  }

  function parens(value) {
    if (!_optionalChain([value, 'optionalAccess', function (_19) {
      return _19.length;
    }])) {
      return '';
    }

    var jsx = value.map(function (item) {
      if (typeof item === 'string') {
        return item;
      }

      var sign = item[0];
      var bonus = item[1];

      if (!sign) {
        return bonus;
      }

      return React.createElement('i', {
        key: bonus,
        className: cls('_delta_', sign_to_cls(sign))
      }, bonus);
    }).flatMap(function (item, index) {
      if (!index) {
        return [item];
      }

      return [', ', item];
    });
    return [' ('].concat(_toConsumableArray(jsx), [')']);
  }

  function sign_to_cls(sign) {
    switch (sign) {
      case 'plus':
      case 'minus':
        return "_".concat(sign, "_");

      default:
        return '';
    }
  }

  function explicit_sign(value, gain) {
    if (gain > 0) {
      return '+' + value;
    }

    return value;
  }

  function pt(value) {
    return "".concat((value * 100).toFixed(0), "%");
  }

  function repr_tool_title(tool, build) {
    var repr = [];
    tool.tap(function (tool) {
      repr.push(tool.code);
      build.tap(function (b) {
        repr.push("(".concat(dump$1(b), ")"));
      });
    });
    return repr.join(' ');
  }

  function title_join(title) {
    return title.join(' — ');
  }

  function Routes$1() {
    return [React.createElement(Route, {
      path: "/build/:weapon/:build",
      element: React.createElement(BL3, null)
    }), React.createElement(Route, {
      path: "/build/:weapon/",
      element: React.createElement(BL2, null)
    }), React.createElement(Route, {
      path: "/build/",
      element: React.createElement(BL1, null)
    })];
  }

  function BL1() {
    use_title('Build Palette');
    return React.createElement(Page, {
      className: "Builder"
    }, React.createElement(Palette, null));
  }

  function BL2() {
    var nav = useNavigate();
    var weapon = State(LOADING());
    urimap({
      path: '/build/:weapon/',
      states: {
        weapon: weapon
      },
      mapping: {
        weapon: mapping_no_dash
      }
    });
    react.exports.useEffect(function () {
      weapon.value.tap_on('FAIL', function () {
        nav('/build/', {
          replace: true
        });
      }).tap_on('OK', function () {
        nav('00000', {
          replace: true
        });
      });
    }, [weapon]);
    return null;
  }

  function BL3() {
    var nav = useNavigate();
    var weapon = State(LOADING());
    var build = BuildStore();
    var build_hover = BuildHoverStore(build.value);
    urimap({
      path: '/build/:weapon/:build',
      states: {
        weapon: weapon,
        build: build.state
      },
      mapping: {
        weapon: mapping_no_dash,
        build: mapping$1
      }
    });
    var perks_delta = PerksDelta(weapon.value, build.value, build_hover.value);
    react.exports.useEffect(function () {
      perks_delta.tap_on('FAIL', function (e) {
        switch (Object(e).message) {
          default:
            return nav('/build/', {
              replace: true
            });

          case 'wrong_build_repr':
          case 'wrong_mod_n':
          case 'wrong_oc':
            return build.reset();
        }
      });
    }, [perks_delta]);
    use_title(function () {
      var title = ['Build'];
      var tool_title = repr_tool_title(weapon.value, build.value);

      if (tool_title) {
        title.push(tool_title);
      }

      return title_join(title);
    }, [weapon, build]);
    var up = React.createElement(Link, {
      to: "/"
    }, "↥");
    var perks_delta2 = perks_delta.map_to('OK', 'FAIL', function () {
      return new RangeError('wrong');
    });
    return React.createElement('div', {
      className: "Builder"
    }, React.createElement(Result, {
      input: weapon.value
    }, function (tool) {
      return React.createElement(Card, {
        tool: tool,
        build: build,
        build_hover: build_hover,
        pocket: up
      });
    }), React.createElement(Result, {
      input: perks_delta2
    }, function (perks) {
      return React.createElement(Report, {
        perks: perks
      });
    }));
  }

  var uri = '/compare/:w_L/:b_L/~/:w_R/:b_R';
  var uri_def = generatePath(uri, {
    w_L: '-',
    w_R: '-',
    b_L: '00000',
    b_R: '00000'
  });

  function Routes() {
    return [React.createElement(Route, {
      path: uri,
      element: React.createElement(Compare, null)
    }), React.createElement(Route, {
      path: "/compare/",
      element: React.createElement(Default, null)
    })];
  }

  function Default() {
    var nav = useNavigate();
    react.exports.useEffect(function () {
      nav(uri_def, {
        replace: true
      });
    });
    return null;
  }

  function Compare() {
    var w_L = State(LOADING());
    var w_R = State(LOADING());
    var b_L = BuildStore();
    var b_R = BuildStore();
    var bh_L = BuildHoverStore(b_L.value);
    var bh_R = BuildHoverStore(b_R.value);
    urimap({
      path: uri,
      states: {
        w_L: w_L,
        w_R: w_R,
        b_L: b_L.state,
        b_R: b_R.state
      },
      mapping: {
        w_L: mapping,
        w_R: mapping,
        b_L: mapping$1,
        b_R: mapping$1
      }
    });
    var perks_delta_L = PerksDelta(w_L.value, b_L.value, bh_L.value);
    var perks_delta_R = PerksDelta(w_R.value, b_R.value, bh_R.value);
    var view = react.exports.useMemo(function () {
      return join(perks_delta_L, perks_delta_R).map(function (_ref21) {
        var _ref22 = _slicedToArray(_ref21, 2),
            L = _ref22[0],
            R = _ref22[1];

        return side_by_side(L, R);
      }).map(function (comparison) {
        return React.createElement(Report, {
          comparison: comparison
        });
      }).map_to('DASH', 'OK', function () {
        return null;
      });
    }, [perks_delta_L, perks_delta_R]);
    use_title(function () {
      var title = ['Compare'];
      var subtitle = [];
      subtitle.push(repr_tool_title(w_L.value, b_L.value) || '?');
      subtitle.push(repr_tool_title(w_R.value, b_R.value) || '?');
      title.push(subtitle.join(' vs '));
      return title_join(title);
    }, [w_L, w_R, b_L, b_R]);
    var up = React.createElement(Link, {
      to: "/"
    }, "↥");
    return React.createElement('div', {
      className: "Compare"
    }, React.createElement('div', {
      className: "panes"
    }, React.createElement('div', {
      className: "pane left"
    }, React.createElement(Side, {
      tool: w_L,
      build: b_L,
      build_hover: bh_L,
      perks_delta: perks_delta_L,
      pocket: up
    })), React.createElement('div', {
      className: "pane right"
    }, React.createElement(Side, {
      tool: w_R,
      build: b_R,
      build_hover: bh_R,
      perks_delta: perks_delta_R
    }))), React.createElement(Result, {
      input: view
    }));
  }

  function Side(props) {
    var tool = props.tool;
    var build = props.build;
    var build_hover = props.build_hover;
    var perks_delta = props.perks_delta;
    var go_dash = react.exports.useCallback(function () {
      build.reset();
      tool.set(DASH);
    }, [tool]);
    react.exports.useEffect(function () {
      tool.value.tap_on('FAIL', go_dash);
    }, [tool]);
    react.exports.useEffect(function () {
      perks_delta.tap_on('FAIL', function (e) {
        switch (Object(e).message) {
          default:
            console.error(e);
            throw TypeError('unknown');

          case 'dash':
          case 'wrong_tool':
          case 'wrong_build_repr':
          case 'wrong_mod_n':
          case 'wrong_oc':
            return build.reset();
        }
      });
    }, [perks_delta]);
    var pocket = React.createElement(React.Fragment, null, props.pocket, React.createElement('a', {
      className: "Link",
      onClick: build.reset
    }, "∅"), React.createElement('a', {
      className: "Link",
      onClick: go_dash
    }, "✕"));
    var input = props.tool.value.map(function (tool) {
      return React.createElement(Card, {
        tool: tool,
        build: build,
        build_hover: build_hover,
        pocket: pocket
      });
    }).map_to('DASH', 'OK', function () {
      var click = function click(name) {
        return tool.set(load(name));
      };

      return React.createElement(Palette, {
        click: click
      });
    });
    return React.createElement(Result, {
      input: input
    });
  }

  function App() {
    return React.createElement('div', {
      className: "App"
    }, React.createElement(HashRouter, null, React.createElement.apply(React, [Routes$2, null].concat(_toConsumableArray(Routes$1()), _toConsumableArray(Routes()), [React.createElement(Route, {
      path: "/contact/",
      element: React.createElement(Contact, null)
    }), React.createElement(Route, {
      path: "/*",
      element: React.createElement(Main, null)
    })]))));
  }

  function Main() {
    return React.createElement(Page, {
      className: "Main"
    }, React.createElement('div', {
      className: "quote"
    }, React.createElement('a', {
      href: "https://www.reddit.com/r/DeepRockGalactic/comments/rhz48a/the_trees_know_that_we_rock_and_stone/"
    }, React.createElement('div', null, "— My business is with Isengard tonight. With a Rock and Stone."), React.createElement('div', null, "— Did I hear a Rock and Stone?"))), React.createElement('div', {
      className: "section"
    }, React.createElement('p', null, "Hello. This is an experimental Deep Rock Galactic build calculator and analyzer. You can analyze and compare your builds here. If you're a build enthusiast you may find this tool very useful."), React.createElement('p', null, "Right now this is an alpha. I'll move it forward beta by implementing all weapons. It is not an easy process, because implementing the weapon itself is not enough. To make it actually useful a lot of reporters must be implemented."), React.createElement('p', null, "Until then, take a look at what is ready, spread the word,", " ", React.createElement('a', {
      href: discord
    }, "join the community"), " or", " ", React.createElement('a', {
      href: "#/contact/"
    }, "share your feedback"), ".")), React.createElement('div', {
      className: "section shortlink"
    }, React.createElement('div', null, React.createElement(Link, {
      className: "Button",
      to: "/build/classic/13211.electro"
    }, "Classic (⚡)"), React.createElement(Link, {
      className: "Button",
      to: "/build/bulldog/23212.magic"
    }, "Bulldog (💥)"), React.createElement(Link, {
      className: "Button",
      to: "/build/subata/21321.tranq"
    }, "Subata (💉)"))), React.createElement('div', {
      className: "section shortlink"
    }, React.createElement('div', null, React.createElement(Link, {
      className: "Button",
      to: "/compare/boomstick/22313.stuffed/~/boomstick/12313.jumbo"
    }, "Stuffed sh. vs Jumbo sh."))), React.createElement(Palette, null));
  }

  function Contact() {
    var email$1 = email.replace(/ \/dot\/ /g, '.').replace(/ \/at\/ /g, '@');
    return React.createElement(Page, {
      className: "Contact"
    }, React.createElement('div', {
      className: "section"
    }, React.createElement('p', null, "You can send your feedback to the ", React.createElement('a', {
      href: discord
    }, "Discord channel"), ". Contact channel owner."), React.createElement('p', null, "If you have GitHub account you can file an issue on ", React.createElement('a', {
      href: github + '/issues'
    }, "GitHub issues"), "."), React.createElement('p', null, "As a last resort, send email to ", email$1, ".")));
  }

  var app = React.createElement(App, null);
  var root = document.getElementById('app');
  react_dom.render(app, root);
  setTimeout(function () {});
})();