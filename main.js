/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/helpers/OverloadYield.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/OverloadYield.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("{function _OverloadYield(e, d) {\n  this.v = e, this.k = d;\n}\nmodule.exports = _OverloadYield, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack://fantasticbeasts/./node_modules/@babel/runtime/helpers/OverloadYield.js?\n}");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _asyncToGenerator)\n/* harmony export */ });\nfunction asyncGeneratorStep(n, t, e, r, o, a, c) {\n  try {\n    var i = n[a](c),\n      u = i.value;\n  } catch (n) {\n    return void e(n);\n  }\n  i.done ? t(u) : Promise.resolve(u).then(r, o);\n}\nfunction _asyncToGenerator(n) {\n  return function () {\n    var t = this,\n      e = arguments;\n    return new Promise(function (r, o) {\n      var a = n.apply(t, e);\n      function _next(n) {\n        asyncGeneratorStep(a, r, o, _next, _throw, \"next\", n);\n      }\n      function _throw(n) {\n        asyncGeneratorStep(a, r, o, _next, _throw, \"throw\", n);\n      }\n      _next(void 0);\n    });\n  };\n}\n\n\n//# sourceURL=webpack://fantasticbeasts/./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js?\n}");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _classCallCheck)\n/* harmony export */ });\nfunction _classCallCheck(a, n) {\n  if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\");\n}\n\n\n//# sourceURL=webpack://fantasticbeasts/./node_modules/@babel/runtime/helpers/esm/classCallCheck.js?\n}");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _createClass)\n/* harmony export */ });\n/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ \"./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js\");\n\nfunction _defineProperties(e, r) {\n  for (var t = 0; t < r.length; t++) {\n    var o = r[t];\n    o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(o.key), o);\n  }\n}\nfunction _createClass(e, r, t) {\n  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", {\n    writable: !1\n  }), e;\n}\n\n\n//# sourceURL=webpack://fantasticbeasts/./node_modules/@babel/runtime/helpers/esm/createClass.js?\n}");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPrimitive.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toPrimitive)\n/* harmony export */ });\n/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ \"./node_modules/@babel/runtime/helpers/esm/typeof.js\");\n\nfunction toPrimitive(t, r) {\n  if (\"object\" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(t) || !t) return t;\n  var e = t[Symbol.toPrimitive];\n  if (void 0 !== e) {\n    var i = e.call(t, r || \"default\");\n    if (\"object\" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(i)) return i;\n    throw new TypeError(\"@@toPrimitive must return a primitive value.\");\n  }\n  return (\"string\" === r ? String : Number)(t);\n}\n\n\n//# sourceURL=webpack://fantasticbeasts/./node_modules/@babel/runtime/helpers/esm/toPrimitive.js?\n}");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toPropertyKey)\n/* harmony export */ });\n/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ \"./node_modules/@babel/runtime/helpers/esm/typeof.js\");\n/* harmony import */ var _toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toPrimitive.js */ \"./node_modules/@babel/runtime/helpers/esm/toPrimitive.js\");\n\n\nfunction toPropertyKey(t) {\n  var i = (0,_toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(t, \"string\");\n  return \"symbol\" == (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(i) ? i : i + \"\";\n}\n\n\n//# sourceURL=webpack://fantasticbeasts/./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js?\n}");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _typeof)\n/* harmony export */ });\nfunction _typeof(o) {\n  \"@babel/helpers - typeof\";\n\n  return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) {\n    return typeof o;\n  } : function (o) {\n    return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o;\n  }, _typeof(o);\n}\n\n\n//# sourceURL=webpack://fantasticbeasts/./node_modules/@babel/runtime/helpers/esm/typeof.js?\n}");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/regenerator.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regenerator.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{var regeneratorDefine = __webpack_require__(/*! ./regeneratorDefine.js */ \"./node_modules/@babel/runtime/helpers/regeneratorDefine.js\");\nfunction _regenerator() {\n  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */\n  var e,\n    t,\n    r = \"function\" == typeof Symbol ? Symbol : {},\n    n = r.iterator || \"@@iterator\",\n    o = r.toStringTag || \"@@toStringTag\";\n  function i(r, n, o, i) {\n    var c = n && n.prototype instanceof Generator ? n : Generator,\n      u = Object.create(c.prototype);\n    return regeneratorDefine(u, \"_invoke\", function (r, n, o) {\n      var i,\n        c,\n        u,\n        f = 0,\n        p = o || [],\n        y = !1,\n        G = {\n          p: 0,\n          n: 0,\n          v: e,\n          a: d,\n          f: d.bind(e, 4),\n          d: function d(t, r) {\n            return i = t, c = 0, u = e, G.n = r, a;\n          }\n        };\n      function d(r, n) {\n        for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) {\n          var o,\n            i = p[t],\n            d = G.p,\n            l = i[2];\n          r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0));\n        }\n        if (o || r > 1) return a;\n        throw y = !0, n;\n      }\n      return function (o, p, l) {\n        if (f > 1) throw TypeError(\"Generator is already running\");\n        for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) {\n          i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u);\n          try {\n            if (f = 2, i) {\n              if (c || (o = \"next\"), t = i[o]) {\n                if (!(t = t.call(i, u))) throw TypeError(\"iterator result is not an object\");\n                if (!t.done) return t;\n                u = t.value, c < 2 && (c = 0);\n              } else 1 === c && (t = i[\"return\"]) && t.call(i), c < 2 && (u = TypeError(\"The iterator does not provide a '\" + o + \"' method\"), c = 1);\n              i = e;\n            } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break;\n          } catch (t) {\n            i = e, c = 1, u = t;\n          } finally {\n            f = 1;\n          }\n        }\n        return {\n          value: t,\n          done: y\n        };\n      };\n    }(r, o, i), !0), u;\n  }\n  var a = {};\n  function Generator() {}\n  function GeneratorFunction() {}\n  function GeneratorFunctionPrototype() {}\n  t = Object.getPrototypeOf;\n  var c = [][n] ? t(t([][n]())) : (regeneratorDefine(t = {}, n, function () {\n      return this;\n    }), t),\n    u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c);\n  function f(e) {\n    return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, regeneratorDefine(e, o, \"GeneratorFunction\")), e.prototype = Object.create(u), e;\n  }\n  return GeneratorFunction.prototype = GeneratorFunctionPrototype, regeneratorDefine(u, \"constructor\", GeneratorFunctionPrototype), regeneratorDefine(GeneratorFunctionPrototype, \"constructor\", GeneratorFunction), GeneratorFunction.displayName = \"GeneratorFunction\", regeneratorDefine(GeneratorFunctionPrototype, o, \"GeneratorFunction\"), regeneratorDefine(u), regeneratorDefine(u, o, \"Generator\"), regeneratorDefine(u, n, function () {\n    return this;\n  }), regeneratorDefine(u, \"toString\", function () {\n    return \"[object Generator]\";\n  }), (module.exports = _regenerator = function _regenerator() {\n    return {\n      w: i,\n      m: f\n    };\n  }, module.exports.__esModule = true, module.exports[\"default\"] = module.exports)();\n}\nmodule.exports = _regenerator, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack://fantasticbeasts/./node_modules/@babel/runtime/helpers/regenerator.js?\n}");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/regeneratorAsync.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorAsync.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{var regeneratorAsyncGen = __webpack_require__(/*! ./regeneratorAsyncGen.js */ \"./node_modules/@babel/runtime/helpers/regeneratorAsyncGen.js\");\nfunction _regeneratorAsync(n, e, r, t, o) {\n  var a = regeneratorAsyncGen(n, e, r, t, o);\n  return a.next().then(function (n) {\n    return n.done ? n.value : a.next();\n  });\n}\nmodule.exports = _regeneratorAsync, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack://fantasticbeasts/./node_modules/@babel/runtime/helpers/regeneratorAsync.js?\n}");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/regeneratorAsyncGen.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorAsyncGen.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{var regenerator = __webpack_require__(/*! ./regenerator.js */ \"./node_modules/@babel/runtime/helpers/regenerator.js\");\nvar regeneratorAsyncIterator = __webpack_require__(/*! ./regeneratorAsyncIterator.js */ \"./node_modules/@babel/runtime/helpers/regeneratorAsyncIterator.js\");\nfunction _regeneratorAsyncGen(r, e, t, o, n) {\n  return new regeneratorAsyncIterator(regenerator().w(r, e, t, o), n || Promise);\n}\nmodule.exports = _regeneratorAsyncGen, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack://fantasticbeasts/./node_modules/@babel/runtime/helpers/regeneratorAsyncGen.js?\n}");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/regeneratorAsyncIterator.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorAsyncIterator.js ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{var OverloadYield = __webpack_require__(/*! ./OverloadYield.js */ \"./node_modules/@babel/runtime/helpers/OverloadYield.js\");\nvar regeneratorDefine = __webpack_require__(/*! ./regeneratorDefine.js */ \"./node_modules/@babel/runtime/helpers/regeneratorDefine.js\");\nfunction AsyncIterator(t, e) {\n  function n(r, o, i, f) {\n    try {\n      var c = t[r](o),\n        u = c.value;\n      return u instanceof OverloadYield ? e.resolve(u.v).then(function (t) {\n        n(\"next\", t, i, f);\n      }, function (t) {\n        n(\"throw\", t, i, f);\n      }) : e.resolve(u).then(function (t) {\n        c.value = t, i(c);\n      }, function (t) {\n        return n(\"throw\", t, i, f);\n      });\n    } catch (t) {\n      f(t);\n    }\n  }\n  var r;\n  this.next || (regeneratorDefine(AsyncIterator.prototype), regeneratorDefine(AsyncIterator.prototype, \"function\" == typeof Symbol && Symbol.asyncIterator || \"@asyncIterator\", function () {\n    return this;\n  })), regeneratorDefine(this, \"_invoke\", function (t, o, i) {\n    function f() {\n      return new e(function (e, r) {\n        n(t, i, e, r);\n      });\n    }\n    return r = r ? r.then(f, f) : f();\n  }, !0);\n}\nmodule.exports = AsyncIterator, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack://fantasticbeasts/./node_modules/@babel/runtime/helpers/regeneratorAsyncIterator.js?\n}");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/regeneratorDefine.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorDefine.js ***!
  \******************************************************************/
/***/ ((module) => {

eval("{function _regeneratorDefine(e, r, n, t) {\n  var i = Object.defineProperty;\n  try {\n    i({}, \"\", {});\n  } catch (e) {\n    i = 0;\n  }\n  module.exports = _regeneratorDefine = function regeneratorDefine(e, r, n, t) {\n    function o(r, n) {\n      _regeneratorDefine(e, r, function (e) {\n        return this._invoke(r, n, e);\n      });\n    }\n    r ? i ? i(e, r, {\n      value: n,\n      enumerable: !t,\n      configurable: !t,\n      writable: !t\n    }) : e[r] = n : (o(\"next\", 0), o(\"throw\", 1), o(\"return\", 2));\n  }, module.exports.__esModule = true, module.exports[\"default\"] = module.exports, _regeneratorDefine(e, r, n, t);\n}\nmodule.exports = _regeneratorDefine, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack://fantasticbeasts/./node_modules/@babel/runtime/helpers/regeneratorDefine.js?\n}");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/regeneratorKeys.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorKeys.js ***!
  \****************************************************************/
/***/ ((module) => {

eval("{function _regeneratorKeys(e) {\n  var n = Object(e),\n    r = [];\n  for (var t in n) r.unshift(t);\n  return function e() {\n    for (; r.length;) if ((t = r.pop()) in n) return e.value = t, e.done = !1, e;\n    return e.done = !0, e;\n  };\n}\nmodule.exports = _regeneratorKeys, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack://fantasticbeasts/./node_modules/@babel/runtime/helpers/regeneratorKeys.js?\n}");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/regeneratorRuntime.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorRuntime.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{var OverloadYield = __webpack_require__(/*! ./OverloadYield.js */ \"./node_modules/@babel/runtime/helpers/OverloadYield.js\");\nvar regenerator = __webpack_require__(/*! ./regenerator.js */ \"./node_modules/@babel/runtime/helpers/regenerator.js\");\nvar regeneratorAsync = __webpack_require__(/*! ./regeneratorAsync.js */ \"./node_modules/@babel/runtime/helpers/regeneratorAsync.js\");\nvar regeneratorAsyncGen = __webpack_require__(/*! ./regeneratorAsyncGen.js */ \"./node_modules/@babel/runtime/helpers/regeneratorAsyncGen.js\");\nvar regeneratorAsyncIterator = __webpack_require__(/*! ./regeneratorAsyncIterator.js */ \"./node_modules/@babel/runtime/helpers/regeneratorAsyncIterator.js\");\nvar regeneratorKeys = __webpack_require__(/*! ./regeneratorKeys.js */ \"./node_modules/@babel/runtime/helpers/regeneratorKeys.js\");\nvar regeneratorValues = __webpack_require__(/*! ./regeneratorValues.js */ \"./node_modules/@babel/runtime/helpers/regeneratorValues.js\");\nfunction _regeneratorRuntime() {\n  \"use strict\";\n\n  var r = regenerator(),\n    e = r.m(_regeneratorRuntime),\n    t = (Object.getPrototypeOf ? Object.getPrototypeOf(e) : e.__proto__).constructor;\n  function n(r) {\n    var e = \"function\" == typeof r && r.constructor;\n    return !!e && (e === t || \"GeneratorFunction\" === (e.displayName || e.name));\n  }\n  var o = {\n    \"throw\": 1,\n    \"return\": 2,\n    \"break\": 3,\n    \"continue\": 3\n  };\n  function a(r) {\n    var e, t;\n    return function (n) {\n      e || (e = {\n        stop: function stop() {\n          return t(n.a, 2);\n        },\n        \"catch\": function _catch() {\n          return n.v;\n        },\n        abrupt: function abrupt(r, e) {\n          return t(n.a, o[r], e);\n        },\n        delegateYield: function delegateYield(r, o, a) {\n          return e.resultName = o, t(n.d, regeneratorValues(r), a);\n        },\n        finish: function finish(r) {\n          return t(n.f, r);\n        }\n      }, t = function t(r, _t, o) {\n        n.p = e.prev, n.n = e.next;\n        try {\n          return r(_t, o);\n        } finally {\n          e.next = n.n;\n        }\n      }), e.resultName && (e[e.resultName] = n.v, e.resultName = void 0), e.sent = n.v, e.next = n.n;\n      try {\n        return r.call(this, e);\n      } finally {\n        n.p = e.prev, n.n = e.next;\n      }\n    };\n  }\n  return (module.exports = _regeneratorRuntime = function _regeneratorRuntime() {\n    return {\n      wrap: function wrap(e, t, n, o) {\n        return r.w(a(e), t, n, o && o.reverse());\n      },\n      isGeneratorFunction: n,\n      mark: r.m,\n      awrap: function awrap(r, e) {\n        return new OverloadYield(r, e);\n      },\n      AsyncIterator: regeneratorAsyncIterator,\n      async: function async(r, e, t, o, u) {\n        return (n(e) ? regeneratorAsyncGen : regeneratorAsync)(a(r), e, t, o, u);\n      },\n      keys: regeneratorKeys,\n      values: regeneratorValues\n    };\n  }, module.exports.__esModule = true, module.exports[\"default\"] = module.exports)();\n}\nmodule.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack://fantasticbeasts/./node_modules/@babel/runtime/helpers/regeneratorRuntime.js?\n}");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/regeneratorValues.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorValues.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{var _typeof = (__webpack_require__(/*! ./typeof.js */ \"./node_modules/@babel/runtime/helpers/typeof.js\")[\"default\"]);\nfunction _regeneratorValues(e) {\n  if (null != e) {\n    var t = e[\"function\" == typeof Symbol && Symbol.iterator || \"@@iterator\"],\n      r = 0;\n    if (t) return t.call(e);\n    if (\"function\" == typeof e.next) return e;\n    if (!isNaN(e.length)) return {\n      next: function next() {\n        return e && r >= e.length && (e = void 0), {\n          value: e && e[r++],\n          done: !e\n        };\n      }\n    };\n  }\n  throw new TypeError(_typeof(e) + \" is not iterable\");\n}\nmodule.exports = _regeneratorValues, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack://fantasticbeasts/./node_modules/@babel/runtime/helpers/regeneratorValues.js?\n}");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/***/ ((module) => {

eval("{function _typeof(o) {\n  \"@babel/helpers - typeof\";\n\n  return module.exports = _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) {\n    return typeof o;\n  } : function (o) {\n    return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o;\n  }, module.exports.__esModule = true, module.exports[\"default\"] = module.exports, _typeof(o);\n}\nmodule.exports = _typeof, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack://fantasticbeasts/./node_modules/@babel/runtime/helpers/typeof.js?\n}");

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{// TODO(Babel 8): Remove this file.\n\nvar runtime = __webpack_require__(/*! ../helpers/regeneratorRuntime */ \"./node_modules/@babel/runtime/helpers/regeneratorRuntime.js\")();\nmodule.exports = runtime;\n\n// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=\ntry {\n  regeneratorRuntime = runtime;\n} catch (accidentalStrictMode) {\n  if (typeof globalThis === \"object\") {\n    globalThis.regeneratorRuntime = runtime;\n  } else {\n    Function(\"r\", \"regeneratorRuntime = r\")(runtime);\n  }\n}\n\n\n//# sourceURL=webpack://fantasticbeasts/./node_modules/@babel/runtime/regenerator/index.js?\n}");

/***/ }),

/***/ "./script/modules/btc.js":
/*!*******************************!*\
  !*** ./script/modules/btc.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ btc)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n\n\nfunction btc() {\n  return _btc.apply(this, arguments);\n}\nfunction _btc() {\n  _btc = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__.mark(function _callee2() {\n    var btcPreco, btc, _btc2;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__.wrap(function (_context2) {\n      while (1) switch (_context2.prev = _context2.next) {\n        case 0:\n          _btc2 = function _btc4() {\n            _btc2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__.mark(function _callee() {\n              var btcDados, btcJSON, btcBuy;\n              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__.wrap(function (_context) {\n                while (1) switch (_context.prev = _context.next) {\n                  case 0:\n                    _context.next = 1;\n                    return fetch(\"https://blockchain.info/ticker\");\n                  case 1:\n                    btcDados = _context.sent;\n                    _context.next = 2;\n                    return btcDados.json();\n                  case 2:\n                    btcJSON = _context.sent;\n                    btcBuy = (1 / +btcJSON.BRL.buy).toFixed(7);\n                    btcPreco.innerText = btcBuy;\n                  case 3:\n                  case \"end\":\n                    return _context.stop();\n                }\n              }, _callee);\n            }));\n            return _btc2.apply(this, arguments);\n          };\n          btc = function _btc3() {\n            return _btc2.apply(this, arguments);\n          };\n          btcPreco = document.querySelector(\".btc-preco\");\n          btc();\n        case 1:\n        case \"end\":\n          return _context2.stop();\n      }\n    }, _callee2);\n  }));\n  return _btc.apply(this, arguments);\n}\n\n//# sourceURL=webpack://fantasticbeasts/./script/modules/btc.js?\n}");

/***/ }),

/***/ "./script/modules/clickOutside.js":
/*!****************************************!*\
  !*** ./script/modules/clickOutside.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handleClickOutside)\n/* harmony export */ });\nfunction handleClickOutside(userEvent, menu, subMenu) {\n  var html = document.documentElement;\n\n  //Adiciona apenas 1 evento, senao a cada clique vai adicionar um novo duplicado\n  if (!menu.hasAttribute(\"clickOutside\")) {\n    menu.setAttribute(\"clickOutside\", \"\");\n    html.addEventListener(userEvent, clickOutside);\n  }\n  function clickOutside(e) {\n    if (!menu.contains(e.target)) {\n      menu.classList.remove(\"menuClick\");\n      if (subMenu) {\n        subMenu.forEach(function (sub) {\n          sub.classList.remove(\"menuClick\");\n        });\n      }\n      html.removeEventListener(userEvent, clickOutside); //Remove o evento\n      menu.removeAttribute(\"clickOutside\");\n    }\n  }\n}\n\n//# sourceURL=webpack://fantasticbeasts/./script/modules/clickOutside.js?\n}");

/***/ }),

/***/ "./script/modules/fetchAnimais.js":
/*!****************************************!*\
  !*** ./script/modules/fetchAnimais.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ animais)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _numero_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./numero.js */ \"./script/modules/numero.js\");\n\n\n\nfunction animais() {\n  return _animais.apply(this, arguments);\n}\nfunction _animais() {\n  _animais = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__.mark(function _callee2() {\n    var animaisLista, section, parsePopulation;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__.wrap(function (_context2) {\n      while (1) switch (_context2.prev = _context2.next) {\n        case 0:\n          parsePopulation = function _parsePopulation(str) {\n            if (!str) return 0;\n            str = str.replace(/,/g, \"\").toLowerCase(); // remove vírgula e deixa minúscula\n            if (str.includes(\"million\")) {\n              var n = parseFloat(str);\n              return n * 1000000; // converte milhões para número\n            }\n            if (str.includes(\"+\")) str = str.replace(\"+\", \"\");\n            return parseInt(str, 10);\n          };\n          animaisLista = [\"Eurasian Wolf\", \"Tibetan Fox\", \"Eastern Gray Squirrel\", \"Asiatic Black Bear\"];\n          section = document.querySelector(\".numero\");\n          _context2.next = 1;\n          return Promise.all(animaisLista.map(/*#__PURE__*/function () {\n            var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__.mark(function _callee(animal) {\n              var res, dadosJSON, div;\n              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__.wrap(function (_context) {\n                while (1) switch (_context.prev = _context.next) {\n                  case 0:\n                    _context.next = 1;\n                    return fetch(\"https://api.api-ninjas.com/v1/animals?name=\".concat(animal), {\n                      headers: {\n                        \"x-api-key\": \"r9jhKyZcV6+e/We7XBmsHw==P3pXcbKak8sOkTBz\"\n                      }\n                    });\n                  case 1:\n                    res = _context.sent;\n                    _context.next = 2;\n                    return res.json();\n                  case 2:\n                    dadosJSON = _context.sent;\n                    if (dadosJSON[0]) {\n                      _context.next = 3;\n                      break;\n                    }\n                    return _context.abrupt(\"return\");\n                  case 3:\n                    // evita erro se não tiver resultado\n                    div = document.createElement(\"div\");\n                    div.classList.add(\"numero-grid\");\n                    div.innerHTML = \"\\n        <h3>\".concat(dadosJSON[0].name, \"</h3>\\n        <span data-numero>\").concat(parsePopulation(dadosJSON[0].characteristics.estimated_population_size), \"</span>\\n      \");\n                    section.append(div);\n                  case 4:\n                  case \"end\":\n                    return _context.stop();\n                }\n              }, _callee);\n            }));\n            return function (_x) {\n              return _ref.apply(this, arguments);\n            };\n          }()));\n        case 1:\n          (0,_numero_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(); // chamado só uma vez\n        case 2:\n        case \"end\":\n          return _context2.stop();\n      }\n    }, _callee2);\n  }));\n  return _animais.apply(this, arguments);\n}\n\n//# sourceURL=webpack://fantasticbeasts/./script/modules/fetchAnimais.js?\n}");

/***/ }),

/***/ "./script/modules/horario.js":
/*!***********************************!*\
  !*** ./script/modules/horario.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ horario)\n/* harmony export */ });\nfunction horario() {\n  var semana = document.querySelector(\"[data-semana]\");\n  var horario = document.querySelector(\"[data-horario]\");\n  var agora = new Date();\n  var semanaAberto = semana.dataset.semana.split(\",\").map(Number).indexOf(agora.getDay()) == !-1;\n  var horaAberto = agora.getHours() >= horario.dataset.horario.split(\",\").map(Number)[0] && agora.getHours() + agora.getMinutes() / 60 <= horario.dataset.horario.split(\",\").map(Number)[1];\n  if (semanaAberto && horaAberto) {\n    semana.classList.add(\"aberto\");\n  }\n}\n\n//# sourceURL=webpack://fantasticbeasts/./script/modules/horario.js?\n}");

/***/ }),

/***/ "./script/modules/menu.js":
/*!********************************!*\
  !*** ./script/modules/menu.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menu)\n/* harmony export */ });\n/* harmony import */ var _clickOutside_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clickOutside.js */ \"./script/modules/clickOutside.js\");\n\nfunction menu() {\n  var menuSalvo; // variável fora\n\n  var menuDiv = document.querySelectorAll(\"[data-menu]\");\n  var subMenuA = document.querySelector(\"ul.nav li[data-menu] a\");\n  var nav = document.querySelector(\"ul.nav\");\n  // const menus = document.querySelectorAll(\"[data-menu] a\");\n  // const ul = document.querySelector(\"[data-menu] ul\");\n  menuDiv.forEach(function (menu) {\n    [\"click\", \"touchstart\"].forEach(function (userEvent) {\n      menu.addEventListener(userEvent, function (e) {\n        e.preventDefault();\n        menu.classList.add(\"menuClick\");\n        subMenuA.classList.add(\"menuClick\");\n        nav.classList.add(\"menuClick\");\n        (0,_clickOutside_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"click\", menu, [subMenuA, nav]);\n      });\n    });\n  });\n}\n\n//# sourceURL=webpack://fantasticbeasts/./script/modules/menu.js?\n}");

/***/ }),

/***/ "./script/modules/menuMobile.js":
/*!**************************************!*\
  !*** ./script/modules/menuMobile.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menuMobile)\n/* harmony export */ });\n/* harmony import */ var _clickOutside_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clickOutside.js */ \"./script/modules/clickOutside.js\");\n\nfunction menuMobile() {\n  var navMenu = document.querySelector(\"nav\");\n  var menu = document.querySelector(\".button\");\n  function handleClick() {\n    navMenu.classList.add(\"menuClick\");\n    menu.classList.toggle(\"menuClick\");\n    (0,_clickOutside_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"click\", navMenu, [menu]);\n  }\n  menu.addEventListener(\"click\", handleClick);\n}\n\n//# sourceURL=webpack://fantasticbeasts/./script/modules/menuMobile.js?\n}");

/***/ }),

/***/ "./script/modules/modal.js":
/*!*********************************!*\
  !*** ./script/modules/modal.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ modal)\n/* harmony export */ });\nfunction modal() {\n  var botaoModal = document.querySelector('[data-modal=\"abrir\"]');\n  var modal = document.querySelector('[data-modal=\"modal\"]');\n  var fecharModal = document.querySelector('[data-modal=\"fechar\"]');\n  function toggleModal(e) {\n    e.preventDefault();\n    modal.classList.toggle(\"ativo\");\n  }\n  function fechar(e) {\n    if (this === e.target) toggleModal(e);\n  }\n  if (botaoModal && modal && fecharModal) {\n    botaoModal.addEventListener(\"click\", toggleModal);\n    fecharModal.addEventListener(\"click\", toggleModal);\n    modal.addEventListener(\"click\", fechar);\n  }\n}\n\n//# sourceURL=webpack://fantasticbeasts/./script/modules/modal.js?\n}");

/***/ }),

/***/ "./script/modules/navegacaoaccordion.js":
/*!**********************************************!*\
  !*** ./script/modules/navegacaoaccordion.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ navegacaoAccordion)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\nvar navegacaoAccordion = /*#__PURE__*/function () {\n  function navegacaoAccordion(lista) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, navegacaoAccordion);\n    this.dtFaq = document.querySelectorAll(lista);\n    this.ativo = \"mostrar\";\n  }\n  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(navegacaoAccordion, [{\n    key: \"toggleAccordion\",\n    value: function toggleAccordion(item) {\n      item.classList.toggle(this.ativo);\n      item.nextElementSibling.classList.toggle(this.ativo);\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      var _this = this;\n      this.toggleAccordion(this.dtFaq[0]);\n      if (this.dtFaq.length) {\n        this.dtFaq.forEach(function (item) {\n          item.addEventListener(\"click\", function () {\n            _this.toggleAccordion(item);\n          });\n        });\n      }\n    }\n  }]);\n}();\n\n\n//# sourceURL=webpack://fantasticbeasts/./script/modules/navegacaoaccordion.js?\n}");

/***/ }),

/***/ "./script/modules/navegacaotab.js":
/*!****************************************!*\
  !*** ./script/modules/navegacaotab.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ navegacaoTab)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\nvar navegacaoTab = /*#__PURE__*/function () {\n  function navegacaoTab(tab, content) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, navegacaoTab);\n    this.jsTab = document.querySelectorAll(tab);\n    this.jsContent = document.querySelectorAll(content);\n  }\n  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(navegacaoTab, [{\n    key: \"ativarContent\",\n    value: function ativarContent(index) {\n      this.jsContent.forEach(function (item) {\n        return item.classList.remove(\"mostrar\");\n      });\n      this.jsContent[index].classList.add(\"mostrar\", this.jsContent[index].dataset.anime);\n    }\n  }, {\n    key: \"ativarNavegacao\",\n    value: function ativarNavegacao() {\n      var _this = this;\n      this.jsTab.forEach(function (item, index) {\n        item.addEventListener(\"click\", function () {\n          _this.ativarContent(index);\n        });\n      });\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      if (this.jsTab.length && this.jsContent.length) {\n        this.ativarContent(0);\n        this.ativarNavegacao();\n      }\n    }\n  }]);\n}();\n\n\n//# sourceURL=webpack://fantasticbeasts/./script/modules/navegacaotab.js?\n}");

/***/ }),

/***/ "./script/modules/numero.js":
/*!**********************************!*\
  !*** ./script/modules/numero.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ numero)\n/* harmony export */ });\nfunction numero() {\n  function parsePopulation(str) {\n    if (!str) return 0;\n    str = str.replace(/,/g, \"\").toLowerCase(); // remove vírgula e deixa minúscula\n    if (str.includes(\"million\")) {\n      var n = parseFloat(str);\n      return n * 1000000; // converte milhões para número\n    }\n    if (str.includes(\"+\")) str = str.replace(\"+\", \"\");\n    return parseInt(str, 10);\n  }\n  function initNumero() {\n    var numeros = document.querySelectorAll(\"[data-numero]\");\n    numeros.forEach(function (n) {\n      var numero = parsePopulation(n.textContent);\n      var total = numero;\n      var inicio = 0;\n      setInterval(function () {\n        inicio = Math.round(inicio + total / 100);\n        n.textContent = inicio;\n        if (inicio > total) {\n          n.textContent = total;\n        }\n      }, 20 * Math.random());\n    });\n  }\n  function mutacao(mutation) {\n    if (mutation[0].target.className.includes(\"ativo\")) {\n      initNumero();\n      observer.disconnect();\n    }\n  }\n  var section = document.querySelector(\".numero\");\n  var observer = new MutationObserver(mutacao);\n  observer.observe(section, {\n    attributes: true\n  });\n}\n\n//# sourceURL=webpack://fantasticbeasts/./script/modules/numero.js?\n}");

/***/ }),

/***/ "./script/modules/scrollefeito.js":
/*!****************************************!*\
  !*** ./script/modules/scrollefeito.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ efeitoScroll)\n/* harmony export */ });\nfunction efeitoScroll() {\n  var jsScroll = document.querySelectorAll(\"h1[data-anime='top']\");\n  function verificaTop() {\n    jsScroll.forEach(function (e) {\n      var top = e.getBoundingClientRect().top;\n      var topWindow = window.innerHeight * 0.6;\n      if (top < topWindow) {\n        e.classList.add(\"ativo\");\n        e.nextElementSibling.classList.add(\"ativo\");\n      }\n    });\n  }\n  if (jsScroll.length) {\n    window.addEventListener(\"scroll\", verificaTop);\n    verificaTop();\n  }\n}\n\n//# sourceURL=webpack://fantasticbeasts/./script/modules/scrollefeito.js?\n}");

/***/ }),

/***/ "./script/modules/scrollsuave.js":
/*!***************************************!*\
  !*** ./script/modules/scrollsuave.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ scrollSuave)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\nvar scrollSuave = /*#__PURE__*/function () {\n  function scrollSuave(links, options) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, scrollSuave);\n    this.scrollInterno = document.querySelectorAll(links);\n    if (options === undefined) {\n      this.options = {\n        behavior: \"smooth\",\n        block: \"start\"\n      };\n    } else {\n      this.options = options;\n    }\n  }\n  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(scrollSuave, [{\n    key: \"init\",\n    value: function init() {\n      var _this = this;\n      if (this.scrollInterno.length) {\n        this.scrollInterno.forEach(function (link) {\n          var href = link.getAttribute(\"href\");\n          link.addEventListener(\"click\", function (e) {\n            e.preventDefault();\n            var section = document.querySelector(href);\n            section.scrollIntoView(_this.options);\n          });\n        });\n      }\n      return this;\n    }\n  }]);\n}();\n\n\n//# sourceURL=webpack://fantasticbeasts/./script/modules/scrollsuave.js?\n}");

/***/ }),

/***/ "./script/modules/tooltip.js":
/*!***********************************!*\
  !*** ./script/modules/tooltip.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ tooltip)\n/* harmony export */ });\nfunction tooltip() {\n  var tooltip = document.querySelectorAll(\"[data-tooltip]\");\n  function handleOver(e) {\n    var tooltipElement = document.createElement(\"div\");\n    var ariaLabel = document.querySelector(\".contato-mapa img\");\n    tooltipElement.innerText = ariaLabel.getAttribute(\"aria-label\");\n    tooltipElement.classList.add(\"tooltip\");\n    document.body.appendChild(tooltipElement);\n    handleLeave.tooltipElement = tooltipElement;\n    handleMove.tooltipElement = tooltipElement;\n    e.target.addEventListener(\"mousemove\", handleMove);\n    e.target.addEventListener(\"mouseleave\", handleLeave);\n  }\n  var handleLeave = {\n    handleEvent: function handleEvent(e) {\n      this.tooltipElement.remove();\n      e.target.removeEventListener(\"mouseleave\", handleLeave);\n      e.target.removeEventListener(\"mousemove\", handleMove);\n    }\n  };\n  var handleMove = {\n    handleEvent: function handleEvent(e) {\n      this.tooltipElement.style.top = e.pageY + 15 + \"px\";\n      this.tooltipElement.style.left = e.pageX + 15 + \"px\";\n    }\n  };\n  tooltip.forEach(function (i) {\n    i.addEventListener(\"mouseover\", handleOver);\n  });\n}\n\n//# sourceURL=webpack://fantasticbeasts/./script/modules/tooltip.js?\n}");

/***/ }),

/***/ "./script/script.js":
/*!**************************!*\
  !*** ./script/script.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_navegacaotab_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/navegacaotab.js */ \"./script/modules/navegacaotab.js\");\n/* harmony import */ var _modules_navegacaoaccordion_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/navegacaoaccordion.js */ \"./script/modules/navegacaoaccordion.js\");\n/* harmony import */ var _modules_scrollsuave_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/scrollsuave.js */ \"./script/modules/scrollsuave.js\");\n/* harmony import */ var _modules_scrollefeito_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/scrollefeito.js */ \"./script/modules/scrollefeito.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/modal.js */ \"./script/modules/modal.js\");\n/* harmony import */ var _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tooltip.js */ \"./script/modules/tooltip.js\");\n/* harmony import */ var _modules_menu_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/menu.js */ \"./script/modules/menu.js\");\n/* harmony import */ var _modules_menuMobile_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/menuMobile.js */ \"./script/modules/menuMobile.js\");\n/* harmony import */ var _modules_horario_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/horario.js */ \"./script/modules/horario.js\");\n/* harmony import */ var _modules_fetchAnimais_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/fetchAnimais.js */ \"./script/modules/fetchAnimais.js\");\n/* harmony import */ var _modules_btc_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/btc.js */ \"./script/modules/btc.js\");\n\n\n\n\n\n\n\n\n\n\n\nvar NavegacaoTab = new _modules_navegacaotab_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"[data-anime='tab'] li\", \"[data-anime='content'] div\");\nNavegacaoTab.init();\nvar accordion = new _modules_navegacaoaccordion_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\".faq dt\");\naccordion.init();\nvar scrollSuavizado = new _modules_scrollsuave_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('[data-anime=\"scroll\"]  a[href^=\"#\"]');\nscrollSuavizado.init();\n(0,_modules_scrollefeito_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n(0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n(0,_modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n(0,_modules_menu_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n(0,_modules_menuMobile_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n(0,_modules_horario_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\n(0,_modules_fetchAnimais_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\n(0,_modules_btc_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"])();\n\n//# sourceURL=webpack://fantasticbeasts/./script/script.js?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./script/script.js");
/******/ 	
/******/ })()
;