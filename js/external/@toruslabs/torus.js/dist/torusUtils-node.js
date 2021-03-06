module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 29);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("bn.js");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _toruslabs_http_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _toruslabs_http_helpers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_toruslabs_http_helpers__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _toruslabs_http_helpers__WEBPACK_IMPORTED_MODULE_0__["generateJsonRPCObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _toruslabs_http_helpers__WEBPACK_IMPORTED_MODULE_0__["post"]; });



/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("stream");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var loglevel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var loglevel__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(loglevel__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["a"] = (loglevel__WEBPACK_IMPORTED_MODULE_0___default.a.getLogger('torus.js'));

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(fetch) {module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=4)}([function(e,t){e.exports=__webpack_require__(1)},function(e,t){e.exports=__webpack_require__(32)},function(e,t){e.exports=__webpack_require__(6)},function(e,t){e.exports=__webpack_require__(11)},function(e,t,r){"use strict";r.r(t),r.d(t,"gatewayAuthHeader",(function(){return y})),r.d(t,"gatewayEmbedHostHeader",(function(){return v})),r.d(t,"setEmbedHost",(function(){return m})),r.d(t,"clearEmbedHost",(function(){return b})),r.d(t,"getEmbedHost",(function(){return g})),r.d(t,"setAPIKey",(function(){return P})),r.d(t,"clearAPIKey",(function(){return j})),r.d(t,"getAPIKey",(function(){return O})),r.d(t,"promiseTimeout",(function(){return T})),r.d(t,"get",(function(){return x})),r.d(t,"post",(function(){return E})),r.d(t,"put",(function(){return k})),r.d(t,"patch",(function(){return C})),r.d(t,"remove",(function(){return S})),r.d(t,"generateJsonRPCObject",(function(){return A})),r.d(t,"promiseRace",(function(){return D}));var n=r(3),o=r.n(n),u=r(2),i=r.n(u),a=r(0),c=r.n(a),s=r(1),d=r.n(s);function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l="torus-default",h="",y="x-api-key",v="x-embed-host";function m(e){h=e}function b(){h=""}function g(){return h}function P(e){l=e}function j(){l="torus-default"}function O(){return l}function w(){var e={};return l&&(e[y]=l),h&&(e[v]=h),e}var T=function(e,t){var r=new Promise((function(t,r){var n=setTimeout((function(){clearTimeout(n),r(new Error("Timed out in ".concat(e,"ms")))}),e)}));return Promise.race([t,r])},x=function(){var e=i()(c.a.mark((function e(t){var r,n,o,u,i,a=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.length>1&&void 0!==a[1]?a[1]:{},n=a.length>2&&void 0!==a[2]?a[2]:{},o={mode:"cors",headers:{}},n.useAPIKey&&(o.headers=p(p({},o.headers),w())),u=d.a.all([o,r,{method:"GET"}]),e.next=7,fetch(t,u);case 7:if(!(i=e.sent).ok){e.next=10;break}return e.abrupt("return",i.json());case 10:throw i;case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o={mode:"cors",headers:{"Content-Type":"application/json; charset=utf-8"}};n.useAPIKey&&(o.headers=p(p({},o.headers),w()));var u=d.a.all([o,r,{method:"POST"}]);return u.body=n.isUrlEncodedData?t:JSON.stringify(t),void 0===u.headers["Content-Type"]&&delete u.headers["Content-Type"],T(n.timeout||3e4,fetch(e,u).then((function(e){if(e.ok)return e.json();throw e})))},k=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o={mode:"cors",headers:{"Content-Type":"application/json; charset=utf-8"}};n.useAPIKey&&(o.headers=p(p({},o.headers),w()));var u=d.a.all([o,r,{method:"PUT"}]);return u.body=n.isUrlEncodedData?t:JSON.stringify(t),void 0===u.headers["Content-Type"]&&delete u.headers["Content-Type"],T(n.timeout||3e4,fetch(e,u).then((function(e){if(e.ok)return e.json();throw e})))},C=function(){var e=i()(c.a.mark((function e(t){var r,n,o,u,i,a,s=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=s.length>1&&void 0!==s[1]?s[1]:{},n=s.length>2&&void 0!==s[2]?s[2]:{},o=s.length>3&&void 0!==s[3]?s[3]:{},u={mode:"cors",headers:{"Content-Type":"application/json; charset=utf-8"}},o.useAPIKey&&(u.headers=p(p({},u.headers),w())),(i=d.a.all([u,n,{method:"PATCH"}])).body=o.isUrlEncodedData?r:JSON.stringify(r),void 0===i.headers["Content-Type"]&&delete i.headers["Content-Type"],e.next=10,fetch(t,i);case 10:if(!(a=e.sent).ok){e.next=13;break}return e.abrupt("return",a.json());case 13:throw a;case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=i()(c.a.mark((function e(t){var r,n,o,u,i,a=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.length>1&&void 0!==a[1]?a[1]:{},r=a.length>2&&void 0!==a[2]?a[2]:{},n=a.length>3&&void 0!==a[3]?a[3]:{},o={mode:"cors",headers:{"Content-Type":"application/json; charset=utf-8"}},n.useAPIKey&&(o.headers=p(p({},o.headers),w())),u=d.a.all([o,r,{method:"DELETE"}]),e.next=8,fetch(t,u);case 8:if(!(i=e.sent).ok){e.next=11;break}return e.abrupt("return",i.json());case 11:throw i;case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=function(e,t){return{jsonrpc:"2.0",method:e,id:10,params:t}},D=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3e4;return Promise.race([x(e,t),new Promise((function(e,t){setTimeout((function(){t(new Error("timed out"))}),r)}))])}}]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(31)["default"]))

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/asyncToGenerator");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("zlib");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("web3-utils");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("json-stable-stringify");

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return kCombinations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return thresholdSame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return keyLookup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return waitKeyLookup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return keyAssign; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var json_stable_stringify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var json_stable_stringify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(json_stable_stringify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _httpHelpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var _loglevel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);
/* harmony import */ var _some__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var kCombinations = function kCombinations(s, k) {
  var set = s;

  if (typeof set === 'number') {
    set = Array.from({
      length: set
    }, function (_, i) {
      return i;
    });
  }

  if (k > set.length || k <= 0) {
    return [];
  }

  if (k === set.length) {
    return [set];
  }

  if (k === 1) {
    return set.reduce(function (acc, cur) {
      return [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(acc), [[cur]]);
    }, []);
  }

  var combs = [];
  var tailCombs = [];

  for (var i = 0; i <= set.length - k + 1; i += 1) {
    tailCombs = kCombinations(set.slice(i + 1), k - 1);

    for (var j = 0; j < tailCombs.length; j += 1) {
      combs.push([set[i]].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(tailCombs[j])));
    }
  }

  return combs;
};
var thresholdSame = function thresholdSame(arr, t) {
  var hashMap = {};

  for (var i = 0; i < arr.length; i += 1) {
    var str = json_stable_stringify__WEBPACK_IMPORTED_MODULE_2___default()(arr[i]);
    hashMap[str] = hashMap[str] ? hashMap[str] + 1 : 1;

    if (hashMap[str] === t) {
      return arr[i];
    }
  }

  return undefined;
};
var keyLookup = function keyLookup(endpoints, verifier, verifierId) {
  var lookupPromises = endpoints.map(function (x) {
    return Object(_httpHelpers__WEBPACK_IMPORTED_MODULE_3__[/* post */ "b"])(x, Object(_httpHelpers__WEBPACK_IMPORTED_MODULE_3__[/* generateJsonRPCObject */ "a"])('VerifierLookupRequest', {
      verifier: verifier,
      verifier_id: verifierId.toString()
    })).catch(function (err) {
      return _loglevel__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].error('lookup request failed', err);
    });
  });
  return Object(_some__WEBPACK_IMPORTED_MODULE_5__[/* Some */ "a"])(lookupPromises, function (lookupResults) {
    var lookupShares = lookupResults.filter(function (x) {
      return x;
    });
    var errorResult = thresholdSame(lookupShares.map(function (x) {
      return x && x.error;
    }), ~~(endpoints.length / 2) + 1);
    var keyResult = thresholdSame(lookupShares.map(function (x) {
      return x && x.result;
    }), ~~(endpoints.length / 2) + 1);

    if (keyResult || errorResult) {
      return Promise.resolve({
        keyResult: keyResult,
        errorResult: errorResult
      });
    }

    return Promise.reject(new Error("invalid results ".concat(JSON.stringify(lookupResults))));
  }).catch(function (err) {
    return _loglevel__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].error('Some for keylookup failed', err);
  });
};
var waitKeyLookup = function waitKeyLookup(endpoints, verifier, verifierId, timeout) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      keyLookup(endpoints, verifier, verifierId).then(resolve).catch(reject);
    }, timeout);
  });
};
var keyAssign = function keyAssign(endpoints, torusNodePubs, lastPoint, firstPoint, verifier, verifierId) {
  var nodeNum;
  var initialPoint;

  if (lastPoint === undefined) {
    nodeNum = Math.floor(Math.random() * endpoints.length);
    initialPoint = nodeNum;
  } else {
    nodeNum = lastPoint % endpoints.length;
  }

  if (nodeNum === firstPoint) throw new Error('Looped through all');
  if (firstPoint !== undefined) initialPoint = firstPoint;
  var data = Object(_httpHelpers__WEBPACK_IMPORTED_MODULE_3__[/* generateJsonRPCObject */ "a"])('KeyAssign', {
    verifier: verifier,
    verifier_id: verifierId.toString()
  });
  return Object(_httpHelpers__WEBPACK_IMPORTED_MODULE_3__[/* post */ "b"])('https://signer.tor.us/api/sign', data, {
    headers: {
      pubKeyX: torusNodePubs[nodeNum].X,
      pubKeyY: torusNodePubs[nodeNum].Y
    }
  }, {
    useAPIKey: true
  }).then(function (signedData) {
    return (// eslint-disable-next-line promise/no-nesting
      Object(_httpHelpers__WEBPACK_IMPORTED_MODULE_3__[/* post */ "b"])(endpoints[nodeNum], _objectSpread(_objectSpread({}, data), signedData), {
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        }
      }).catch(function (_) {
        return keyAssign(endpoints, torusNodePubs, nodeNum + 1, initialPoint, verifier, verifierId);
      })
    );
  });
};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/defineProperty");

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SomeError */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Some; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(28);
/* harmony import */ var _babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_4__);






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

var SomeError = /*#__PURE__*/function (_Error) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1___default()(SomeError, _Error);

  var _super = _createSuper(SomeError);

  function SomeError(_ref) {
    var _this;

    var errors = _ref.errors,
        responses = _ref.responses,
        predicate = _ref.predicate;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, SomeError);

    _this = _super.call(this, 'Unable to resolve enough promises.');
    _this.errors = errors;
    _this.responses = responses;
    _this.predicate = predicate;
    return _this;
  }

  return SomeError;
}( /*#__PURE__*/_babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_4___default()(Error));
var Some = function Some(promises, predicate) {
  return new Promise(function (resolve, reject) {
    var finishedCount = 0;
    var sharedState = {
      resolved: false
    };
    var errorArr = new Array(promises.length).fill(undefined);
    var resultArr = new Array(promises.length).fill(undefined);
    var predicateError;
    promises.forEach(function (x, index) {
      x.then(function (resp) {
        resultArr[index] = resp;
        return undefined;
      }).catch(function (error) {
        errorArr[index] = error;
      }).finally(function () {
        if (sharedState.resolved) return;
        predicate(resultArr.slice(0), sharedState).then(function (data) {
          sharedState.resolved = true;
          resolve(data);
          return undefined;
        }).catch(function (error) {
          // log only the last predicate error
          predicateError = error;
        }).finally(function (_) {
          finishedCount += 1;

          if (finishedCount === promises.length) {
            // Filter same responses with same ID and extract non empty error messages
            var errors = Object.values(Object.fromEntries(resultArr.map(function (it) {
              var _it$error;

              return [it === null || it === void 0 ? void 0 : it.id, (_it$error = it.error) === null || _it$error === void 0 ? void 0 : _it$error.data];
            }))).filter(function (it) {
              return typeof it === 'string' && it.length > 0;
            }).map(function (it) {
              return it.startsWith('Error occurred while verifying params') ? capitalizeFirstLetter(it.substr(37)) : it;
            });

            if (errors.length > 0) {
              // Format-able errors
              var msg = errors.length > 1 ? "\n".concat(errors.map(function (it) {
                return "\u2022 ".concat(it);
              }).join('\n')) : errors[0];
              reject(new Error(msg));
            } else {
              var _predicateError;

              reject(new SomeError({
                errors: errorArr,
                responses: resultArr,
                predicate: ((_predicateError = predicateError) === null || _predicateError === void 0 ? void 0 : _predicateError.message) || predicateError
              }));
            }
          }
        });
      });
    });
  });
};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("@toruslabs/eccrypto");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/classCallCheck");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/getPrototypeOf");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/toConsumableArray");

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(atob) {/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _toruslabs_eccrypto__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13);
/* harmony import */ var _toruslabs_eccrypto__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_toruslabs_eccrypto__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _toruslabs_http_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5);
/* harmony import */ var _toruslabs_http_helpers__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_toruslabs_http_helpers__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var bn_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(0);
/* harmony import */ var bn_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(bn_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var elliptic__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(23);
/* harmony import */ var elliptic__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(elliptic__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var json_stable_stringify__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9);
/* harmony import */ var json_stable_stringify__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(json_stable_stringify__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var memory_cache__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(24);
/* harmony import */ var memory_cache__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(memory_cache__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var web3_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8);
/* harmony import */ var web3_utils__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(web3_utils__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _httpHelpers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2);
/* harmony import */ var _loglevel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(4);
/* harmony import */ var _some__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(12);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(10);






function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }












 // Implement threshold logic wrappers around public APIs
// of Torus nodes to handle malicious node responses

var Torus = /*#__PURE__*/function () {
  function Torus() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$enableLogging = _ref.enableLogging,
        enableLogging = _ref$enableLogging === void 0 ? false : _ref$enableLogging,
        _ref$metadataHost = _ref.metadataHost,
        metadataHost = _ref$metadataHost === void 0 ? 'https://metadata.tor.us' : _ref$metadataHost,
        _ref$allowHost = _ref.allowHost,
        allowHost = _ref$allowHost === void 0 ? 'https://signer.tor.us/api/allow' : _ref$allowHost,
        _ref$serverTimeOffset = _ref.serverTimeOffset,
        serverTimeOffset = _ref$serverTimeOffset === void 0 ? 0 : _ref$serverTimeOffset;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, Torus);

    this.ec = new elliptic__WEBPACK_IMPORTED_MODULE_9__["ec"]('secp256k1');
    this.metadataHost = metadataHost;
    this.allowHost = allowHost;
    this.metadataCache = memory_cache__WEBPACK_IMPORTED_MODULE_11___default.a;
    if (!enableLogging) _loglevel__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].disableAll();
    this.metadataLock = {};
    this.serverTimeOffset = serverTimeOffset || 0; // ms
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(Torus, [{
    key: "setCustomKey",
    value: function () {
      var _setCustomKey = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee(_ref2) {
        var privKeyHex, metadataNonce, torusKeyHex, customKeyHex, torusKey, privKey, customKey, newMetadataNonce, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                privKeyHex = _ref2.privKeyHex, metadataNonce = _ref2.metadataNonce, torusKeyHex = _ref2.torusKeyHex, customKeyHex = _ref2.customKeyHex;

                if (torusKeyHex) {
                  torusKey = new bn_js__WEBPACK_IMPORTED_MODULE_8___default.a(torusKeyHex, 16);
                } else {
                  privKey = new bn_js__WEBPACK_IMPORTED_MODULE_8___default.a(privKeyHex, 16);
                  torusKey = privKey.sub(metadataNonce).umod(this.ec.curve.n);
                }

                customKey = new bn_js__WEBPACK_IMPORTED_MODULE_8___default.a(customKeyHex, 16);
                newMetadataNonce = customKey.sub(torusKey).umod(this.ec.curve.n);
                data = this.generateMetadataParams(newMetadataNonce.toString(16), torusKey.toString(16));
                _context.next = 7;
                return this.setMetadata(data);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function setCustomKey(_x) {
        return _setCustomKey.apply(this, arguments);
      }

      return setCustomKey;
    }()
  }, {
    key: "retrieveShares",
    value: function () {
      var _retrieveShares = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee3(endpoints, indexes, verifier, verifierParams, idToken) {
        var _this = this;

        var extraParams,
            promiseArr,
            tmpKey,
            pubKey,
            pubKeyX,
            pubKeyY,
            tokenCommitment,
            i,
            p,
            _args3 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                extraParams = _args3.length > 5 && _args3[5] !== undefined ? _args3[5] : {};
                promiseArr = [];
                _context3.next = 4;
                return Object(_toruslabs_http_helpers__WEBPACK_IMPORTED_MODULE_7__["get"])(this.allowHost, {
                  headers: {
                    verifier: verifier,
                    verifier_id: verifierParams.verifier_id
                  }
                }, {
                  useAPIKey: true
                });

              case 4:
                /*
                  CommitmentRequestParams struct {
                    MessagePrefix      string `json:"messageprefix"`
                    TokenCommitment    string `json:"tokencommitment"`
                    TempPubX           string `json:"temppubx"`
                    TempPubY           string `json:"temppuby"`
                    VerifierIdentifier string `json:"verifieridentifier"`
                  } 
                  */
                // generate temporary private and public key that is used to secure receive shares
                tmpKey = Object(_toruslabs_eccrypto__WEBPACK_IMPORTED_MODULE_6__["generatePrivate"])();
                pubKey = Object(_toruslabs_eccrypto__WEBPACK_IMPORTED_MODULE_6__["getPublic"])(tmpKey).toString('hex');
                pubKeyX = pubKey.slice(2, 66);
                pubKeyY = pubKey.slice(66);
                tokenCommitment = Object(web3_utils__WEBPACK_IMPORTED_MODULE_12__["keccak256"])(idToken); // make commitment requests to endpoints

                for (i = 0; i < endpoints.length; i += 1) {
                  p = Object(_httpHelpers__WEBPACK_IMPORTED_MODULE_13__[/* post */ "b"])(endpoints[i], Object(_httpHelpers__WEBPACK_IMPORTED_MODULE_13__[/* generateJsonRPCObject */ "a"])('CommitmentRequest', {
                    messageprefix: 'mug00',
                    tokencommitment: tokenCommitment.slice(2),
                    temppubx: pubKeyX,
                    temppuby: pubKeyY,
                    verifieridentifier: verifier
                  })).catch(function (err) {
                    return _loglevel__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].error('commitment', err);
                  });
                  promiseArr.push(p);
                }
                /*
                  ShareRequestParams struct {
                    Item []bijson.RawMessage `json:"item"`
                  }
                  ShareRequestItem struct {
                    IDToken            string          `json:"idtoken"`
                    NodeSignatures     []NodeSignature `json:"nodesignatures"`
                    VerifierIdentifier string          `json:"verifieridentifier"`
                  }
                  NodeSignature struct {
                    Signature   string
                    Data        string
                    NodePubKeyX string
                    NodePubKeyY string
                  }
                  CommitmentRequestResult struct {
                    Signature string `json:"signature"`
                    Data      string `json:"data"`
                    NodePubX  string `json:"nodepubx"`
                    NodePubY  string `json:"nodepuby"`
                  }
                  */
                // send share request once k + t number of commitment requests have completed


                return _context3.abrupt("return", Object(_some__WEBPACK_IMPORTED_MODULE_15__[/* Some */ "a"])(promiseArr, function (resultArr) {
                  var completedRequests = resultArr.filter(function (x) {
                    if (!x || _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(x) !== 'object') {
                      return false;
                    }

                    if (x.error) {
                      return false;
                    }

                    return true;
                  });

                  if (completedRequests.length >= ~~(endpoints.length / 4) * 3 + 1) {
                    return Promise.resolve(resultArr);
                  }

                  return Promise.reject(new Error("invalid ".concat(JSON.stringify(resultArr))));
                }).then(function (responses) {
                  var promiseArrRequest = [];
                  var nodeSigs = [];

                  for (var _i = 0; _i < responses.length; _i += 1) {
                    if (responses[_i]) nodeSigs.push(responses[_i].result);
                  }

                  for (var _i2 = 0; _i2 < endpoints.length; _i2 += 1) {
                    // eslint-disable-next-line promise/no-nesting
                    var _p = Object(_httpHelpers__WEBPACK_IMPORTED_MODULE_13__[/* post */ "b"])(endpoints[_i2], Object(_httpHelpers__WEBPACK_IMPORTED_MODULE_13__[/* generateJsonRPCObject */ "a"])('ShareRequest', {
                      encrypted: 'yes',
                      item: [_objectSpread(_objectSpread({}, verifierParams), {}, {
                        idtoken: idToken,
                        nodesignatures: nodeSigs,
                        verifieridentifier: verifier
                      }, extraParams)]
                    })).catch(function (err) {
                      return _loglevel__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].error('share req', err);
                    });

                    promiseArrRequest.push(_p);
                  }

                  return Object(_some__WEBPACK_IMPORTED_MODULE_15__[/* Some */ "a"])(promiseArrRequest, /*#__PURE__*/function () {
                    var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee2(shareResponses, sharedState) {
                      var completedRequests, thresholdPublicKey, sharePromises, nodeIndex, _i3, metadata, sharesResolved, decryptedShares, allCombis, privateKey, _loop, j, _ret, metadataNonce, ethAddress;

                      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee2$(_context2) {
                        while (1) {
                          switch (_context2.prev = _context2.next) {
                            case 0:
                              /*
                                    ShareRequestResult struct {
                                      Keys []KeyAssignment
                                    }
                                            / KeyAssignmentPublic -
                                    type KeyAssignmentPublic struct {
                                      Index     big.Int
                                      PublicKey common.Point
                                      Threshold int
                                      Verifiers map[string][]string // Verifier => VerifierID
                                    }
                                     // KeyAssignment -
                                    type KeyAssignment struct {
                                      KeyAssignmentPublic
                                      Share big.Int // Or Si
                                    }
                                  */
                              // check if threshold number of nodes have returned the same user public key
                              completedRequests = shareResponses.filter(function (x) {
                                return x;
                              });
                              thresholdPublicKey = Object(_utils__WEBPACK_IMPORTED_MODULE_16__[/* thresholdSame */ "d"])(shareResponses.map(function (x) {
                                return x && x.result && x.result.keys[0].PublicKey;
                              }), ~~(endpoints.length / 2) + 1); // optimistically run lagrange interpolation once threshold number of shares have been received
                              // this is matched against the user public key to ensure that shares are consistent

                              if (!(completedRequests.length >= ~~(endpoints.length / 2) + 1 && thresholdPublicKey)) {
                                _context2.next = 32;
                                break;
                              }

                              sharePromises = [];
                              nodeIndex = [];

                              for (_i3 = 0; _i3 < shareResponses.length; _i3 += 1) {
                                if (shareResponses[_i3] && shareResponses[_i3].result && shareResponses[_i3].result.keys && shareResponses[_i3].result.keys.length > 0) {
                                  shareResponses[_i3].result.keys.sort(function (a, b) {
                                    return new bn_js__WEBPACK_IMPORTED_MODULE_8___default.a(a.Index, 16).cmp(new bn_js__WEBPACK_IMPORTED_MODULE_8___default.a(b.Index, 16));
                                  });

                                  if (shareResponses[_i3].result.keys[0].Metadata) {
                                    metadata = {
                                      ephemPublicKey: Buffer.from(shareResponses[_i3].result.keys[0].Metadata.ephemPublicKey, 'hex'),
                                      iv: Buffer.from(shareResponses[_i3].result.keys[0].Metadata.iv, 'hex'),
                                      mac: Buffer.from(shareResponses[_i3].result.keys[0].Metadata.mac, 'hex'),
                                      mode: Buffer.from(shareResponses[_i3].result.keys[0].Metadata.mode, 'hex')
                                    };
                                    sharePromises.push( // eslint-disable-next-line promise/no-nesting
                                    Object(_toruslabs_eccrypto__WEBPACK_IMPORTED_MODULE_6__["decrypt"])(tmpKey, _objectSpread(_objectSpread({}, metadata), {}, {
                                      ciphertext: Buffer.from(atob(shareResponses[_i3].result.keys[0].Share).padStart(64, '0'), 'hex')
                                    })).catch(function (err) {
                                      return _loglevel__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].debug('share decryption', err);
                                    }));
                                  } else {
                                    sharePromises.push(Promise.resolve(Buffer.from(shareResponses[_i3].result.keys[0].Share.padStart(64, '0'), 'hex')));
                                  }
                                } else {
                                  sharePromises.push(Promise.resolve(undefined));
                                }

                                nodeIndex.push(new bn_js__WEBPACK_IMPORTED_MODULE_8___default.a(indexes[_i3], 16));
                              }

                              _context2.next = 8;
                              return Promise.all(sharePromises);

                            case 8:
                              sharesResolved = _context2.sent;

                              if (!sharedState.resolved) {
                                _context2.next = 11;
                                break;
                              }

                              return _context2.abrupt("return", undefined);

                            case 11:
                              decryptedShares = sharesResolved.reduce(function (acc, curr, index) {
                                if (curr) acc.push({
                                  index: nodeIndex[index],
                                  value: new bn_js__WEBPACK_IMPORTED_MODULE_8___default.a(curr)
                                });
                                return acc;
                              }, []); // run lagrange interpolation on all subsets, faster in the optimistic scenario than berlekamp-welch due to early exit

                              // run lagrange interpolation on all subsets, faster in the optimistic scenario than berlekamp-welch due to early exit
                              allCombis = Object(_utils__WEBPACK_IMPORTED_MODULE_16__[/* kCombinations */ "a"])(decryptedShares.length, ~~(endpoints.length / 2) + 1);

                              _loop = function _loop(j) {
                                var currentCombi = allCombis[j];
                                var currentCombiShares = decryptedShares.filter(function (v, index) {
                                  return currentCombi.includes(index);
                                });
                                var shares = currentCombiShares.map(function (x) {
                                  return x.value;
                                });
                                var indices = currentCombiShares.map(function (x) {
                                  return x.index;
                                });

                                var derivedPrivateKey = _this.lagrangeInterpolation(shares, indices);

                                var decryptedPubKey = Object(_toruslabs_eccrypto__WEBPACK_IMPORTED_MODULE_6__["getPublic"])(Buffer.from(derivedPrivateKey.toString(16, 64), 'hex')).toString('hex');
                                var decryptedPubKeyX = decryptedPubKey.slice(2, 66);
                                var decryptedPubKeyY = decryptedPubKey.slice(66);

                                if (new bn_js__WEBPACK_IMPORTED_MODULE_8___default.a(decryptedPubKeyX, 16).cmp(new bn_js__WEBPACK_IMPORTED_MODULE_8___default.a(thresholdPublicKey.X, 16)) === 0 && new bn_js__WEBPACK_IMPORTED_MODULE_8___default.a(decryptedPubKeyY, 16).cmp(new bn_js__WEBPACK_IMPORTED_MODULE_8___default.a(thresholdPublicKey.Y, 16)) === 0) {
                                  privateKey = derivedPrivateKey;
                                  return "break";
                                }
                              };

                              j = 0;

                            case 15:
                              if (!(j < allCombis.length)) {
                                _context2.next = 22;
                                break;
                              }

                              _ret = _loop(j);

                              if (!(_ret === "break")) {
                                _context2.next = 19;
                                break;
                              }

                              return _context2.abrupt("break", 22);

                            case 19:
                              j += 1;
                              _context2.next = 15;
                              break;

                            case 22:
                              if (!(privateKey === undefined)) {
                                _context2.next = 24;
                                break;
                              }

                              throw new Error('could not derive private key');

                            case 24:
                              _context2.next = 26;
                              return _this.getMetadata({
                                pub_key_X: thresholdPublicKey.X,
                                pub_key_Y: thresholdPublicKey.Y
                              });

                            case 26:
                              metadataNonce = _context2.sent;

                              if (!sharedState.resolved) {
                                _context2.next = 29;
                                break;
                              }

                              return _context2.abrupt("return", undefined);

                            case 29:
                              privateKey = privateKey.add(metadataNonce).umod(_this.ec.curve.n);
                              ethAddress = _this.generateAddressFromPrivKey(privateKey); // return reconstructed private key and ethereum address

                              return _context2.abrupt("return", {
                                ethAddress: ethAddress,
                                privKey: privateKey.toString('hex', 64),
                                metadataNonce: metadataNonce
                              });

                            case 32:
                              throw new Error('invalid');

                            case 33:
                            case "end":
                              return _context2.stop();
                          }
                        }
                      }, _callee2);
                    }));

                    return function (_x7, _x8) {
                      return _ref3.apply(this, arguments);
                    };
                  }());
                }));

              case 11:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function retrieveShares(_x2, _x3, _x4, _x5, _x6) {
        return _retrieveShares.apply(this, arguments);
      }

      return retrieveShares;
    }()
  }, {
    key: "getMetadata",
    value: function () {
      var _getMetadata = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee4(data, options) {
        var _this2 = this;

        var unlock, dataKey, cachedResult, metadataResponse;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                dataKey = json_stable_stringify__WEBPACK_IMPORTED_MODULE_10___default()(data);

                if (!(this.metadataLock[dataKey] !== null)) {
                  _context4.next = 7;
                  break;
                }

                _context4.next = 5;
                return this.metadataLock[dataKey];

              case 5:
                _context4.next = 8;
                break;

              case 7:
                this.metadataLock[dataKey] = new Promise(function (resolve) {
                  unlock = function unlock() {
                    _this2.metadataLock[dataKey] = null;
                    resolve();
                  };
                });

              case 8:
                cachedResult = this.metadataCache.get(dataKey);

                if (!(cachedResult !== null)) {
                  _context4.next = 12;
                  break;
                }

                if (unlock) unlock();
                return _context4.abrupt("return", cachedResult);

              case 12:
                _context4.next = 14;
                return Object(_httpHelpers__WEBPACK_IMPORTED_MODULE_13__[/* post */ "b"])("".concat(this.metadataHost, "/get"), data, options, {
                  useAPIKey: true
                });

              case 14:
                metadataResponse = _context4.sent;

                if (!(!metadataResponse || !metadataResponse.message)) {
                  _context4.next = 19;
                  break;
                }

                this.metadataCache.put(dataKey, new bn_js__WEBPACK_IMPORTED_MODULE_8___default.a(0), 60000);
                if (unlock) unlock();
                return _context4.abrupt("return", new bn_js__WEBPACK_IMPORTED_MODULE_8___default.a(0));

              case 19:
                this.metadataCache.put(dataKey, new bn_js__WEBPACK_IMPORTED_MODULE_8___default.a(metadataResponse.message, 16), 60000);
                return _context4.abrupt("return", new bn_js__WEBPACK_IMPORTED_MODULE_8___default.a(metadataResponse.message, 16));

              case 23:
                _context4.prev = 23;
                _context4.t0 = _context4["catch"](0);
                _loglevel__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].error('get metadata error', _context4.t0);
                if (unlock) unlock();
                return _context4.abrupt("return", new bn_js__WEBPACK_IMPORTED_MODULE_8___default.a(0));

              case 28:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 23]]);
      }));

      function getMetadata(_x9, _x10) {
        return _getMetadata.apply(this, arguments);
      }

      return getMetadata;
    }()
  }, {
    key: "generateMetadataParams",
    value: function generateMetadataParams(message, privateKey) {
      var key = this.ec.keyFromPrivate(privateKey.toString('hex', 64));
      var setData = {
        data: message,
        timestamp: new bn_js__WEBPACK_IMPORTED_MODULE_8___default.a(~~(this.serverTimeOffset + Date.now() / 1000)).toString(16)
      };
      var sig = key.sign(Object(web3_utils__WEBPACK_IMPORTED_MODULE_12__["keccak256"])(json_stable_stringify__WEBPACK_IMPORTED_MODULE_10___default()(setData)).slice(2));
      return {
        pub_key_X: key.getPublic().getX().toString('hex'),
        pub_key_Y: key.getPublic().getY().toString('hex'),
        set_data: setData,
        signature: Buffer.from(sig.r.toString(16, 64) + sig.s.toString(16, 64) + new bn_js__WEBPACK_IMPORTED_MODULE_8___default.a(sig.v).toString(16, 2), 'hex').toString('base64')
      };
    }
  }, {
    key: "setMetadata",
    value: function () {
      var _setMetadata = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee5(data, options) {
        var metadataResponse;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                this.metadataCache.del(json_stable_stringify__WEBPACK_IMPORTED_MODULE_10___default()({
                  pub_key_X: data.pub_key_X,
                  pub_key_Y: data.pub_key_Y
                }));
                _context5.next = 4;
                return Object(_httpHelpers__WEBPACK_IMPORTED_MODULE_13__[/* post */ "b"])("".concat(this.metadataHost, "/set"), data, options, {
                  useAPIKey: true
                });

              case 4:
                metadataResponse = _context5.sent;
                return _context5.abrupt("return", metadataResponse.message);

              case 8:
                _context5.prev = 8;
                _context5.t0 = _context5["catch"](0);
                _loglevel__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].error('set metadata error', _context5.t0);
                return _context5.abrupt("return", '');

              case 12:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[0, 8]]);
      }));

      function setMetadata(_x11, _x12) {
        return _setMetadata.apply(this, arguments);
      }

      return setMetadata;
    }()
  }, {
    key: "lagrangeInterpolation",
    value: function lagrangeInterpolation(shares, nodeIndex) {
      if (shares.length !== nodeIndex.length) {
        return null;
      }

      var secret = new bn_js__WEBPACK_IMPORTED_MODULE_8___default.a(0);

      for (var i = 0; i < shares.length; i += 1) {
        var upper = new bn_js__WEBPACK_IMPORTED_MODULE_8___default.a(1);
        var lower = new bn_js__WEBPACK_IMPORTED_MODULE_8___default.a(1);

        for (var j = 0; j < shares.length; j += 1) {
          if (i !== j) {
            upper = upper.mul(nodeIndex[j].neg());
            upper = upper.umod(this.ec.curve.n);
            var temp = nodeIndex[i].sub(nodeIndex[j]);
            temp = temp.umod(this.ec.curve.n);
            lower = lower.mul(temp).umod(this.ec.curve.n);
          }
        }

        var delta = upper.mul(lower.invm(this.ec.curve.n)).umod(this.ec.curve.n);
        delta = delta.mul(shares[i]).umod(this.ec.curve.n);
        secret = secret.add(delta);
      }

      return secret.umod(this.ec.curve.n);
    }
  }, {
    key: "generateAddressFromPrivKey",
    value: function generateAddressFromPrivKey(privateKey) {
      var key = this.ec.keyFromPrivate(privateKey.toString('hex', 64), 'hex');
      var publicKey = key.getPublic().encode('hex').slice(2);
      var ethAddressLower = "0x".concat(Object(web3_utils__WEBPACK_IMPORTED_MODULE_12__["keccak256"])(Buffer.from(publicKey, 'hex')).slice(64 - 38));
      return Object(web3_utils__WEBPACK_IMPORTED_MODULE_12__["toChecksumAddress"])(ethAddressLower);
    }
  }, {
    key: "generateAddressFromPubKey",
    value: function generateAddressFromPubKey(publicKeyX, publicKeyY) {
      var key = this.ec.keyFromPublic({
        x: publicKeyX.toString('hex', 64),
        y: publicKeyY.toString('hex', 64)
      });
      var publicKey = key.getPublic().encode('hex').slice(2);
      var ethAddressLower = "0x".concat(Object(web3_utils__WEBPACK_IMPORTED_MODULE_12__["keccak256"])(Buffer.from(publicKey, 'hex')).slice(64 - 38));
      return Object(web3_utils__WEBPACK_IMPORTED_MODULE_12__["toChecksumAddress"])(ethAddressLower);
    }
  }, {
    key: "getPublicAddress",
    value: function () {
      var _getPublicAddress = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee6(endpoints, torusNodePubs, _ref4) {
        var verifier,
            verifierId,
            isExtended,
            finalKeyResult,
            _ref5,
            keyResult,
            errorResult,
            assignResult,
            _finalKeyResult$keys$,
            X,
            Y,
            nonce,
            modifiedPubKey,
            address,
            _args6 = arguments;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                verifier = _ref4.verifier, verifierId = _ref4.verifierId;
                isExtended = _args6.length > 3 && _args6[3] !== undefined ? _args6[3] : false;
                _context6.next = 4;
                return Object(_utils__WEBPACK_IMPORTED_MODULE_16__[/* keyLookup */ "c"])(endpoints, verifier, verifierId);

              case 4:
                _context6.t0 = _context6.sent;

                if (_context6.t0) {
                  _context6.next = 7;
                  break;
                }

                _context6.t0 = {};

              case 7:
                _ref5 = _context6.t0;
                keyResult = _ref5.keyResult;
                errorResult = _ref5.errorResult;

                if (!(errorResult && JSON.stringify(errorResult).includes('Verifier + VerifierID has not yet been assigned'))) {
                  _context6.next = 22;
                  break;
                }

                _context6.next = 13;
                return Object(_utils__WEBPACK_IMPORTED_MODULE_16__[/* keyAssign */ "b"])(endpoints, torusNodePubs, undefined, undefined, verifier, verifierId);

              case 13:
                _context6.next = 15;
                return Object(_utils__WEBPACK_IMPORTED_MODULE_16__[/* waitKeyLookup */ "e"])(endpoints, verifier, verifierId, 1000);

              case 15:
                _context6.t1 = _context6.sent;

                if (_context6.t1) {
                  _context6.next = 18;
                  break;
                }

                _context6.t1 = {};

              case 18:
                assignResult = _context6.t1;
                finalKeyResult = assignResult.keyResult;
                _context6.next = 27;
                break;

              case 22:
                if (!keyResult) {
                  _context6.next = 26;
                  break;
                }

                finalKeyResult = keyResult;
                _context6.next = 27;
                break;

              case 26:
                throw new Error("node results do not match at first lookup ".concat(JSON.stringify(keyResult || {}), ", ").concat(JSON.stringify(errorResult || {})));

              case 27:
                if (!finalKeyResult) {
                  _context6.next = 39;
                  break;
                }

                _finalKeyResult$keys$ = finalKeyResult.keys[0], X = _finalKeyResult$keys$.pub_key_X, Y = _finalKeyResult$keys$.pub_key_Y;
                _context6.next = 31;
                return this.getMetadata({
                  pub_key_X: X,
                  pub_key_Y: Y
                });

              case 31:
                nonce = _context6.sent;
                modifiedPubKey = this.ec.keyFromPublic({
                  x: X.toString(16),
                  y: Y.toString(16)
                }).getPublic().add(this.ec.keyFromPrivate(nonce.toString(16)).getPublic());
                X = modifiedPubKey.getX().toString(16);
                Y = modifiedPubKey.getY().toString(16);
                address = this.generateAddressFromPubKey(modifiedPubKey.getX(), modifiedPubKey.getY());

                if (isExtended) {
                  _context6.next = 38;
                  break;
                }

                return _context6.abrupt("return", address);

              case 38:
                return _context6.abrupt("return", {
                  address: address,
                  X: X,
                  Y: Y,
                  metadataNonce: nonce
                });

              case 39:
                throw new Error("node results do not match at final lookup ".concat(JSON.stringify(keyResult || {}), ", ").concat(JSON.stringify(errorResult || {})));

              case 40:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function getPublicAddress(_x13, _x14, _x15) {
        return _getPublicAddress.apply(this, arguments);
      }

      return getPublicAddress;
    }()
  }], [{
    key: "setAPIKey",
    value: function setAPIKey(apiKey) {
      Object(_toruslabs_http_helpers__WEBPACK_IMPORTED_MODULE_7__["setAPIKey"])(apiKey);
    }
  }, {
    key: "setEmbedHost",
    value: function setEmbedHost(embedHost) {
      Object(_toruslabs_http_helpers__WEBPACK_IMPORTED_MODULE_7__["setEmbedHost"])(embedHost);
    }
  }]);

  return Torus;
}();

/* harmony default export */ __webpack_exports__["a"] = (Torus);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(30)))

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/typeof");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/createClass");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("https");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("elliptic");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("memory-cache");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("loglevel");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/inherits");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/possibleConstructorReturn");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/wrapNativeSuper");

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_torus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);

/* harmony default export */ __webpack_exports__["default"] = (_src_torus__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function atob(str) {
  return Buffer.from(str, 'base64').toString('binary');
}

module.exports = atob.atob = atob;


/***/ }),
/* 31 */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Headers", function() { return Headers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Request", function() { return Request; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Response", function() { return Response; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchError", function() { return FetchError; });
/* harmony import */ var stream__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15);
/* harmony import */ var https__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22);
/* harmony import */ var zlib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);






// Based on https://github.com/tmpvar/jsdom/blob/aa85b2abf07766ff7bf5c1f6daafb3726f2f2db5/lib/jsdom/living/blob.js

// fix for "Readable" isn't a named export issue
const Readable = stream__WEBPACK_IMPORTED_MODULE_0__.Readable;

const BUFFER = Symbol('buffer');
const TYPE = Symbol('type');

class Blob {
	constructor() {
		this[TYPE] = '';

		const blobParts = arguments[0];
		const options = arguments[1];

		const buffers = [];
		let size = 0;

		if (blobParts) {
			const a = blobParts;
			const length = Number(a.length);
			for (let i = 0; i < length; i++) {
				const element = a[i];
				let buffer;
				if (element instanceof Buffer) {
					buffer = element;
				} else if (ArrayBuffer.isView(element)) {
					buffer = Buffer.from(element.buffer, element.byteOffset, element.byteLength);
				} else if (element instanceof ArrayBuffer) {
					buffer = Buffer.from(element);
				} else if (element instanceof Blob) {
					buffer = element[BUFFER];
				} else {
					buffer = Buffer.from(typeof element === 'string' ? element : String(element));
				}
				size += buffer.length;
				buffers.push(buffer);
			}
		}

		this[BUFFER] = Buffer.concat(buffers);

		let type = options && options.type !== undefined && String(options.type).toLowerCase();
		if (type && !/[^\u0020-\u007E]/.test(type)) {
			this[TYPE] = type;
		}
	}
	get size() {
		return this[BUFFER].length;
	}
	get type() {
		return this[TYPE];
	}
	text() {
		return Promise.resolve(this[BUFFER].toString());
	}
	arrayBuffer() {
		const buf = this[BUFFER];
		const ab = buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
		return Promise.resolve(ab);
	}
	stream() {
		const readable = new Readable();
		readable._read = function () {};
		readable.push(this[BUFFER]);
		readable.push(null);
		return readable;
	}
	toString() {
		return '[object Blob]';
	}
	slice() {
		const size = this.size;

		const start = arguments[0];
		const end = arguments[1];
		let relativeStart, relativeEnd;
		if (start === undefined) {
			relativeStart = 0;
		} else if (start < 0) {
			relativeStart = Math.max(size + start, 0);
		} else {
			relativeStart = Math.min(start, size);
		}
		if (end === undefined) {
			relativeEnd = size;
		} else if (end < 0) {
			relativeEnd = Math.max(size + end, 0);
		} else {
			relativeEnd = Math.min(end, size);
		}
		const span = Math.max(relativeEnd - relativeStart, 0);

		const buffer = this[BUFFER];
		const slicedBuffer = buffer.slice(relativeStart, relativeStart + span);
		const blob = new Blob([], { type: arguments[2] });
		blob[BUFFER] = slicedBuffer;
		return blob;
	}
}

Object.defineProperties(Blob.prototype, {
	size: { enumerable: true },
	type: { enumerable: true },
	slice: { enumerable: true }
});

Object.defineProperty(Blob.prototype, Symbol.toStringTag, {
	value: 'Blob',
	writable: false,
	enumerable: false,
	configurable: true
});

/**
 * fetch-error.js
 *
 * FetchError interface for operational errors
 */

/**
 * Create FetchError instance
 *
 * @param   String      message      Error message for human
 * @param   String      type         Error type for machine
 * @param   String      systemError  For Node.js system error
 * @return  FetchError
 */
function FetchError(message, type, systemError) {
  Error.call(this, message);

  this.message = message;
  this.type = type;

  // when err.type is `system`, err.code contains system error code
  if (systemError) {
    this.code = this.errno = systemError.code;
  }

  // hide custom error implementation details from end-users
  Error.captureStackTrace(this, this.constructor);
}

FetchError.prototype = Object.create(Error.prototype);
FetchError.prototype.constructor = FetchError;
FetchError.prototype.name = 'FetchError';

let convert;
try {
	convert = require('encoding').convert;
} catch (e) {}

const INTERNALS = Symbol('Body internals');

// fix an issue where "PassThrough" isn't a named export for node <10
const PassThrough = stream__WEBPACK_IMPORTED_MODULE_0__.PassThrough;

/**
 * Body mixin
 *
 * Ref: https://fetch.spec.whatwg.org/#body
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */
function Body(body) {
	var _this = this;

	var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	    _ref$size = _ref.size;

	let size = _ref$size === undefined ? 0 : _ref$size;
	var _ref$timeout = _ref.timeout;
	let timeout = _ref$timeout === undefined ? 0 : _ref$timeout;

	if (body == null) {
		// body is undefined or null
		body = null;
	} else if (isURLSearchParams(body)) {
		// body is a URLSearchParams
		body = Buffer.from(body.toString());
	} else if (isBlob(body)) ; else if (Buffer.isBuffer(body)) ; else if (Object.prototype.toString.call(body) === '[object ArrayBuffer]') {
		// body is ArrayBuffer
		body = Buffer.from(body);
	} else if (ArrayBuffer.isView(body)) {
		// body is ArrayBufferView
		body = Buffer.from(body.buffer, body.byteOffset, body.byteLength);
	} else if (body instanceof stream__WEBPACK_IMPORTED_MODULE_0__) ; else {
		// none of the above
		// coerce to string then buffer
		body = Buffer.from(String(body));
	}
	this[INTERNALS] = {
		body,
		disturbed: false,
		error: null
	};
	this.size = size;
	this.timeout = timeout;

	if (body instanceof stream__WEBPACK_IMPORTED_MODULE_0__) {
		body.on('error', function (err) {
			const error = err.name === 'AbortError' ? err : new FetchError(`Invalid response body while trying to fetch ${_this.url}: ${err.message}`, 'system', err);
			_this[INTERNALS].error = error;
		});
	}
}

Body.prototype = {
	get body() {
		return this[INTERNALS].body;
	},

	get bodyUsed() {
		return this[INTERNALS].disturbed;
	},

	/**
  * Decode response as ArrayBuffer
  *
  * @return  Promise
  */
	arrayBuffer() {
		return consumeBody.call(this).then(function (buf) {
			return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
		});
	},

	/**
  * Return raw response as Blob
  *
  * @return Promise
  */
	blob() {
		let ct = this.headers && this.headers.get('content-type') || '';
		return consumeBody.call(this).then(function (buf) {
			return Object.assign(
			// Prevent copying
			new Blob([], {
				type: ct.toLowerCase()
			}), {
				[BUFFER]: buf
			});
		});
	},

	/**
  * Decode response as json
  *
  * @return  Promise
  */
	json() {
		var _this2 = this;

		return consumeBody.call(this).then(function (buffer) {
			try {
				return JSON.parse(buffer.toString());
			} catch (err) {
				return Body.Promise.reject(new FetchError(`invalid json response body at ${_this2.url} reason: ${err.message}`, 'invalid-json'));
			}
		});
	},

	/**
  * Decode response as text
  *
  * @return  Promise
  */
	text() {
		return consumeBody.call(this).then(function (buffer) {
			return buffer.toString();
		});
	},

	/**
  * Decode response as buffer (non-spec api)
  *
  * @return  Promise
  */
	buffer() {
		return consumeBody.call(this);
	},

	/**
  * Decode response as text, while automatically detecting the encoding and
  * trying to decode to UTF-8 (non-spec api)
  *
  * @return  Promise
  */
	textConverted() {
		var _this3 = this;

		return consumeBody.call(this).then(function (buffer) {
			return convertBody(buffer, _this3.headers);
		});
	}
};

// In browsers, all properties are enumerable.
Object.defineProperties(Body.prototype, {
	body: { enumerable: true },
	bodyUsed: { enumerable: true },
	arrayBuffer: { enumerable: true },
	blob: { enumerable: true },
	json: { enumerable: true },
	text: { enumerable: true }
});

Body.mixIn = function (proto) {
	for (const name of Object.getOwnPropertyNames(Body.prototype)) {
		// istanbul ignore else: future proof
		if (!(name in proto)) {
			const desc = Object.getOwnPropertyDescriptor(Body.prototype, name);
			Object.defineProperty(proto, name, desc);
		}
	}
};

/**
 * Consume and convert an entire Body to a Buffer.
 *
 * Ref: https://fetch.spec.whatwg.org/#concept-body-consume-body
 *
 * @return  Promise
 */
function consumeBody() {
	var _this4 = this;

	if (this[INTERNALS].disturbed) {
		return Body.Promise.reject(new TypeError(`body used already for: ${this.url}`));
	}

	this[INTERNALS].disturbed = true;

	if (this[INTERNALS].error) {
		return Body.Promise.reject(this[INTERNALS].error);
	}

	let body = this.body;

	// body is null
	if (body === null) {
		return Body.Promise.resolve(Buffer.alloc(0));
	}

	// body is blob
	if (isBlob(body)) {
		body = body.stream();
	}

	// body is buffer
	if (Buffer.isBuffer(body)) {
		return Body.Promise.resolve(body);
	}

	// istanbul ignore if: should never happen
	if (!(body instanceof stream__WEBPACK_IMPORTED_MODULE_0__)) {
		return Body.Promise.resolve(Buffer.alloc(0));
	}

	// body is stream
	// get ready to actually consume the body
	let accum = [];
	let accumBytes = 0;
	let abort = false;

	return new Body.Promise(function (resolve, reject) {
		let resTimeout;

		// allow timeout on slow response body
		if (_this4.timeout) {
			resTimeout = setTimeout(function () {
				abort = true;
				reject(new FetchError(`Response timeout while trying to fetch ${_this4.url} (over ${_this4.timeout}ms)`, 'body-timeout'));
			}, _this4.timeout);
		}

		// handle stream errors
		body.on('error', function (err) {
			if (err.name === 'AbortError') {
				// if the request was aborted, reject with this Error
				abort = true;
				reject(err);
			} else {
				// other errors, such as incorrect content-encoding
				reject(new FetchError(`Invalid response body while trying to fetch ${_this4.url}: ${err.message}`, 'system', err));
			}
		});

		body.on('data', function (chunk) {
			if (abort || chunk === null) {
				return;
			}

			if (_this4.size && accumBytes + chunk.length > _this4.size) {
				abort = true;
				reject(new FetchError(`content size at ${_this4.url} over limit: ${_this4.size}`, 'max-size'));
				return;
			}

			accumBytes += chunk.length;
			accum.push(chunk);
		});

		body.on('end', function () {
			if (abort) {
				return;
			}

			clearTimeout(resTimeout);

			try {
				resolve(Buffer.concat(accum, accumBytes));
			} catch (err) {
				// handle streams that have accumulated too much data (issue #414)
				reject(new FetchError(`Could not create Buffer from response body for ${_this4.url}: ${err.message}`, 'system', err));
			}
		});
	});
}

/**
 * Detect buffer encoding and convert to target encoding
 * ref: http://www.w3.org/TR/2011/WD-html5-20110113/parsing.html#determining-the-character-encoding
 *
 * @param   Buffer  buffer    Incoming buffer
 * @param   String  encoding  Target encoding
 * @return  String
 */
function convertBody(buffer, headers) {
	if (typeof convert !== 'function') {
		throw new Error('The package `encoding` must be installed to use the textConverted() function');
	}

	const ct = headers.get('content-type');
	let charset = 'utf-8';
	let res, str;

	// header
	if (ct) {
		res = /charset=([^;]*)/i.exec(ct);
	}

	// no charset in content type, peek at response body for at most 1024 bytes
	str = buffer.slice(0, 1024).toString();

	// html5
	if (!res && str) {
		res = /<meta.+?charset=(['"])(.+?)\1/i.exec(str);
	}

	// html4
	if (!res && str) {
		res = /<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(str);
		if (!res) {
			res = /<meta[\s]+?content=(['"])(.+?)\1[\s]+?http-equiv=(['"])content-type\3/i.exec(str);
			if (res) {
				res.pop(); // drop last quote
			}
		}

		if (res) {
			res = /charset=(.*)/i.exec(res.pop());
		}
	}

	// xml
	if (!res && str) {
		res = /<\?xml.+?encoding=(['"])(.+?)\1/i.exec(str);
	}

	// found charset
	if (res) {
		charset = res.pop();

		// prevent decode issues when sites use incorrect encoding
		// ref: https://hsivonen.fi/encoding-menu/
		if (charset === 'gb2312' || charset === 'gbk') {
			charset = 'gb18030';
		}
	}

	// turn raw buffers into a single utf-8 buffer
	return convert(buffer, 'UTF-8', charset).toString();
}

/**
 * Detect a URLSearchParams object
 * ref: https://github.com/bitinn/node-fetch/issues/296#issuecomment-307598143
 *
 * @param   Object  obj     Object to detect by type or brand
 * @return  String
 */
function isURLSearchParams(obj) {
	// Duck-typing as a necessary condition.
	if (typeof obj !== 'object' || typeof obj.append !== 'function' || typeof obj.delete !== 'function' || typeof obj.get !== 'function' || typeof obj.getAll !== 'function' || typeof obj.has !== 'function' || typeof obj.set !== 'function') {
		return false;
	}

	// Brand-checking and more duck-typing as optional condition.
	return obj.constructor.name === 'URLSearchParams' || Object.prototype.toString.call(obj) === '[object URLSearchParams]' || typeof obj.sort === 'function';
}

/**
 * Check if `obj` is a W3C `Blob` object (which `File` inherits from)
 * @param  {*} obj
 * @return {boolean}
 */
function isBlob(obj) {
	return typeof obj === 'object' && typeof obj.arrayBuffer === 'function' && typeof obj.type === 'string' && typeof obj.stream === 'function' && typeof obj.constructor === 'function' && typeof obj.constructor.name === 'string' && /^(Blob|File)$/.test(obj.constructor.name) && /^(Blob|File)$/.test(obj[Symbol.toStringTag]);
}

/**
 * Clone body given Res/Req instance
 *
 * @param   Mixed  instance  Response or Request instance
 * @return  Mixed
 */
function clone(instance) {
	let p1, p2;
	let body = instance.body;

	// don't allow cloning a used body
	if (instance.bodyUsed) {
		throw new Error('cannot clone body after it is used');
	}

	// check that body is a stream and not form-data object
	// note: we can't clone the form-data object without having it as a dependency
	if (body instanceof stream__WEBPACK_IMPORTED_MODULE_0__ && typeof body.getBoundary !== 'function') {
		// tee instance body
		p1 = new PassThrough();
		p2 = new PassThrough();
		body.pipe(p1);
		body.pipe(p2);
		// set instance body to teed body and return the other teed body
		instance[INTERNALS].body = p1;
		body = p2;
	}

	return body;
}

/**
 * Performs the operation "extract a `Content-Type` value from |object|" as
 * specified in the specification:
 * https://fetch.spec.whatwg.org/#concept-bodyinit-extract
 *
 * This function assumes that instance.body is present.
 *
 * @param   Mixed  instance  Any options.body input
 */
function extractContentType(body) {
	if (body === null) {
		// body is null
		return null;
	} else if (typeof body === 'string') {
		// body is string
		return 'text/plain;charset=UTF-8';
	} else if (isURLSearchParams(body)) {
		// body is a URLSearchParams
		return 'application/x-www-form-urlencoded;charset=UTF-8';
	} else if (isBlob(body)) {
		// body is blob
		return body.type || null;
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		return null;
	} else if (Object.prototype.toString.call(body) === '[object ArrayBuffer]') {
		// body is ArrayBuffer
		return null;
	} else if (ArrayBuffer.isView(body)) {
		// body is ArrayBufferView
		return null;
	} else if (typeof body.getBoundary === 'function') {
		// detect form data input from form-data module
		return `multipart/form-data;boundary=${body.getBoundary()}`;
	} else if (body instanceof stream__WEBPACK_IMPORTED_MODULE_0__) {
		// body is stream
		// can't really do much about this
		return null;
	} else {
		// Body constructor defaults other things to string
		return 'text/plain;charset=UTF-8';
	}
}

/**
 * The Fetch Standard treats this as if "total bytes" is a property on the body.
 * For us, we have to explicitly get it with a function.
 *
 * ref: https://fetch.spec.whatwg.org/#concept-body-total-bytes
 *
 * @param   Body    instance   Instance of Body
 * @return  Number?            Number of bytes, or null if not possible
 */
function getTotalBytes(instance) {
	const body = instance.body;


	if (body === null) {
		// body is null
		return 0;
	} else if (isBlob(body)) {
		return body.size;
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		return body.length;
	} else if (body && typeof body.getLengthSync === 'function') {
		// detect form data input from form-data module
		if (body._lengthRetrievers && body._lengthRetrievers.length == 0 || // 1.x
		body.hasKnownLength && body.hasKnownLength()) {
			// 2.x
			return body.getLengthSync();
		}
		return null;
	} else {
		// body is stream
		return null;
	}
}

/**
 * Write a Body to a Node.js WritableStream (e.g. http.Request) object.
 *
 * @param   Body    instance   Instance of Body
 * @return  Void
 */
function writeToStream(dest, instance) {
	const body = instance.body;


	if (body === null) {
		// body is null
		dest.end();
	} else if (isBlob(body)) {
		body.stream().pipe(dest);
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		dest.write(body);
		dest.end();
	} else {
		// body is stream
		body.pipe(dest);
	}
}

// expose Promise
Body.Promise = global.Promise;

/**
 * headers.js
 *
 * Headers class offers convenient helpers
 */

const invalidTokenRegex = /[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/;
const invalidHeaderCharRegex = /[^\t\x20-\x7e\x80-\xff]/;

function validateName(name) {
	name = `${name}`;
	if (invalidTokenRegex.test(name) || name === '') {
		throw new TypeError(`${name} is not a legal HTTP header name`);
	}
}

function validateValue(value) {
	value = `${value}`;
	if (invalidHeaderCharRegex.test(value)) {
		throw new TypeError(`${value} is not a legal HTTP header value`);
	}
}

/**
 * Find the key in the map object given a header name.
 *
 * Returns undefined if not found.
 *
 * @param   String  name  Header name
 * @return  String|Undefined
 */
function find(map, name) {
	name = name.toLowerCase();
	for (const key in map) {
		if (key.toLowerCase() === name) {
			return key;
		}
	}
	return undefined;
}

const MAP = Symbol('map');
class Headers {
	/**
  * Headers class
  *
  * @param   Object  headers  Response headers
  * @return  Void
  */
	constructor() {
		let init = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

		this[MAP] = Object.create(null);

		if (init instanceof Headers) {
			const rawHeaders = init.raw();
			const headerNames = Object.keys(rawHeaders);

			for (const headerName of headerNames) {
				for (const value of rawHeaders[headerName]) {
					this.append(headerName, value);
				}
			}

			return;
		}

		// We don't worry about converting prop to ByteString here as append()
		// will handle it.
		if (init == null) ; else if (typeof init === 'object') {
			const method = init[Symbol.iterator];
			if (method != null) {
				if (typeof method !== 'function') {
					throw new TypeError('Header pairs must be iterable');
				}

				// sequence<sequence<ByteString>>
				// Note: per spec we have to first exhaust the lists then process them
				const pairs = [];
				for (const pair of init) {
					if (typeof pair !== 'object' || typeof pair[Symbol.iterator] !== 'function') {
						throw new TypeError('Each header pair must be iterable');
					}
					pairs.push(Array.from(pair));
				}

				for (const pair of pairs) {
					if (pair.length !== 2) {
						throw new TypeError('Each header pair must be a name/value tuple');
					}
					this.append(pair[0], pair[1]);
				}
			} else {
				// record<ByteString, ByteString>
				for (const key of Object.keys(init)) {
					const value = init[key];
					this.append(key, value);
				}
			}
		} else {
			throw new TypeError('Provided initializer must be an object');
		}
	}

	/**
  * Return combined header value given name
  *
  * @param   String  name  Header name
  * @return  Mixed
  */
	get(name) {
		name = `${name}`;
		validateName(name);
		const key = find(this[MAP], name);
		if (key === undefined) {
			return null;
		}

		return this[MAP][key].join(', ');
	}

	/**
  * Iterate over all headers
  *
  * @param   Function  callback  Executed for each item with parameters (value, name, thisArg)
  * @param   Boolean   thisArg   `this` context for callback function
  * @return  Void
  */
	forEach(callback) {
		let thisArg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

		let pairs = getHeaders(this);
		let i = 0;
		while (i < pairs.length) {
			var _pairs$i = pairs[i];
			const name = _pairs$i[0],
			      value = _pairs$i[1];

			callback.call(thisArg, value, name, this);
			pairs = getHeaders(this);
			i++;
		}
	}

	/**
  * Overwrite header values given name
  *
  * @param   String  name   Header name
  * @param   String  value  Header value
  * @return  Void
  */
	set(name, value) {
		name = `${name}`;
		value = `${value}`;
		validateName(name);
		validateValue(value);
		const key = find(this[MAP], name);
		this[MAP][key !== undefined ? key : name] = [value];
	}

	/**
  * Append a value onto existing header
  *
  * @param   String  name   Header name
  * @param   String  value  Header value
  * @return  Void
  */
	append(name, value) {
		name = `${name}`;
		value = `${value}`;
		validateName(name);
		validateValue(value);
		const key = find(this[MAP], name);
		if (key !== undefined) {
			this[MAP][key].push(value);
		} else {
			this[MAP][name] = [value];
		}
	}

	/**
  * Check for header name existence
  *
  * @param   String   name  Header name
  * @return  Boolean
  */
	has(name) {
		name = `${name}`;
		validateName(name);
		return find(this[MAP], name) !== undefined;
	}

	/**
  * Delete all header values given name
  *
  * @param   String  name  Header name
  * @return  Void
  */
	delete(name) {
		name = `${name}`;
		validateName(name);
		const key = find(this[MAP], name);
		if (key !== undefined) {
			delete this[MAP][key];
		}
	}

	/**
  * Return raw headers (non-spec api)
  *
  * @return  Object
  */
	raw() {
		return this[MAP];
	}

	/**
  * Get an iterator on keys.
  *
  * @return  Iterator
  */
	keys() {
		return createHeadersIterator(this, 'key');
	}

	/**
  * Get an iterator on values.
  *
  * @return  Iterator
  */
	values() {
		return createHeadersIterator(this, 'value');
	}

	/**
  * Get an iterator on entries.
  *
  * This is the default iterator of the Headers object.
  *
  * @return  Iterator
  */
	[Symbol.iterator]() {
		return createHeadersIterator(this, 'key+value');
	}
}
Headers.prototype.entries = Headers.prototype[Symbol.iterator];

Object.defineProperty(Headers.prototype, Symbol.toStringTag, {
	value: 'Headers',
	writable: false,
	enumerable: false,
	configurable: true
});

Object.defineProperties(Headers.prototype, {
	get: { enumerable: true },
	forEach: { enumerable: true },
	set: { enumerable: true },
	append: { enumerable: true },
	has: { enumerable: true },
	delete: { enumerable: true },
	keys: { enumerable: true },
	values: { enumerable: true },
	entries: { enumerable: true }
});

function getHeaders(headers) {
	let kind = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'key+value';

	const keys = Object.keys(headers[MAP]).sort();
	return keys.map(kind === 'key' ? function (k) {
		return k.toLowerCase();
	} : kind === 'value' ? function (k) {
		return headers[MAP][k].join(', ');
	} : function (k) {
		return [k.toLowerCase(), headers[MAP][k].join(', ')];
	});
}

const INTERNAL = Symbol('internal');

function createHeadersIterator(target, kind) {
	const iterator = Object.create(HeadersIteratorPrototype);
	iterator[INTERNAL] = {
		target,
		kind,
		index: 0
	};
	return iterator;
}

const HeadersIteratorPrototype = Object.setPrototypeOf({
	next() {
		// istanbul ignore if
		if (!this || Object.getPrototypeOf(this) !== HeadersIteratorPrototype) {
			throw new TypeError('Value of `this` is not a HeadersIterator');
		}

		var _INTERNAL = this[INTERNAL];
		const target = _INTERNAL.target,
		      kind = _INTERNAL.kind,
		      index = _INTERNAL.index;

		const values = getHeaders(target, kind);
		const len = values.length;
		if (index >= len) {
			return {
				value: undefined,
				done: true
			};
		}

		this[INTERNAL].index = index + 1;

		return {
			value: values[index],
			done: false
		};
	}
}, Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())));

Object.defineProperty(HeadersIteratorPrototype, Symbol.toStringTag, {
	value: 'HeadersIterator',
	writable: false,
	enumerable: false,
	configurable: true
});

/**
 * Export the Headers object in a form that Node.js can consume.
 *
 * @param   Headers  headers
 * @return  Object
 */
function exportNodeCompatibleHeaders(headers) {
	const obj = Object.assign({ __proto__: null }, headers[MAP]);

	// http.request() only supports string as Host header. This hack makes
	// specifying custom Host header possible.
	const hostHeaderKey = find(headers[MAP], 'Host');
	if (hostHeaderKey !== undefined) {
		obj[hostHeaderKey] = obj[hostHeaderKey][0];
	}

	return obj;
}

/**
 * Create a Headers object from an object of headers, ignoring those that do
 * not conform to HTTP grammar productions.
 *
 * @param   Object  obj  Object of headers
 * @return  Headers
 */
function createHeadersLenient(obj) {
	const headers = new Headers();
	for (const name of Object.keys(obj)) {
		if (invalidTokenRegex.test(name)) {
			continue;
		}
		if (Array.isArray(obj[name])) {
			for (const val of obj[name]) {
				if (invalidHeaderCharRegex.test(val)) {
					continue;
				}
				if (headers[MAP][name] === undefined) {
					headers[MAP][name] = [val];
				} else {
					headers[MAP][name].push(val);
				}
			}
		} else if (!invalidHeaderCharRegex.test(obj[name])) {
			headers[MAP][name] = [obj[name]];
		}
	}
	return headers;
}

const INTERNALS$1 = Symbol('Response internals');

// fix an issue where "STATUS_CODES" aren't a named export for node <10
const STATUS_CODES = http__WEBPACK_IMPORTED_MODULE_1__.STATUS_CODES;

/**
 * Response class
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */
class Response {
	constructor() {
		let body = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
		let opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		Body.call(this, body, opts);

		const status = opts.status || 200;
		const headers = new Headers(opts.headers);

		if (body != null && !headers.has('Content-Type')) {
			const contentType = extractContentType(body);
			if (contentType) {
				headers.append('Content-Type', contentType);
			}
		}

		this[INTERNALS$1] = {
			url: opts.url,
			status,
			statusText: opts.statusText || STATUS_CODES[status],
			headers,
			counter: opts.counter
		};
	}

	get url() {
		return this[INTERNALS$1].url || '';
	}

	get status() {
		return this[INTERNALS$1].status;
	}

	/**
  * Convenience property representing if the request ended normally
  */
	get ok() {
		return this[INTERNALS$1].status >= 200 && this[INTERNALS$1].status < 300;
	}

	get redirected() {
		return this[INTERNALS$1].counter > 0;
	}

	get statusText() {
		return this[INTERNALS$1].statusText;
	}

	get headers() {
		return this[INTERNALS$1].headers;
	}

	/**
  * Clone this response
  *
  * @return  Response
  */
	clone() {
		return new Response(clone(this), {
			url: this.url,
			status: this.status,
			statusText: this.statusText,
			headers: this.headers,
			ok: this.ok,
			redirected: this.redirected
		});
	}
}

Body.mixIn(Response.prototype);

Object.defineProperties(Response.prototype, {
	url: { enumerable: true },
	status: { enumerable: true },
	ok: { enumerable: true },
	redirected: { enumerable: true },
	statusText: { enumerable: true },
	headers: { enumerable: true },
	clone: { enumerable: true }
});

Object.defineProperty(Response.prototype, Symbol.toStringTag, {
	value: 'Response',
	writable: false,
	enumerable: false,
	configurable: true
});

const INTERNALS$2 = Symbol('Request internals');

// fix an issue where "format", "parse" aren't a named export for node <10
const parse_url = url__WEBPACK_IMPORTED_MODULE_2__.parse;
const format_url = url__WEBPACK_IMPORTED_MODULE_2__.format;

const streamDestructionSupported = 'destroy' in stream__WEBPACK_IMPORTED_MODULE_0__.Readable.prototype;

/**
 * Check if a value is an instance of Request.
 *
 * @param   Mixed   input
 * @return  Boolean
 */
function isRequest(input) {
	return typeof input === 'object' && typeof input[INTERNALS$2] === 'object';
}

function isAbortSignal(signal) {
	const proto = signal && typeof signal === 'object' && Object.getPrototypeOf(signal);
	return !!(proto && proto.constructor.name === 'AbortSignal');
}

/**
 * Request class
 *
 * @param   Mixed   input  Url or Request instance
 * @param   Object  init   Custom options
 * @return  Void
 */
class Request {
	constructor(input) {
		let init = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		let parsedURL;

		// normalize input
		if (!isRequest(input)) {
			if (input && input.href) {
				// in order to support Node.js' Url objects; though WHATWG's URL objects
				// will fall into this branch also (since their `toString()` will return
				// `href` property anyway)
				parsedURL = parse_url(input.href);
			} else {
				// coerce input to a string before attempting to parse
				parsedURL = parse_url(`${input}`);
			}
			input = {};
		} else {
			parsedURL = parse_url(input.url);
		}

		let method = init.method || input.method || 'GET';
		method = method.toUpperCase();

		if ((init.body != null || isRequest(input) && input.body !== null) && (method === 'GET' || method === 'HEAD')) {
			throw new TypeError('Request with GET/HEAD method cannot have body');
		}

		let inputBody = init.body != null ? init.body : isRequest(input) && input.body !== null ? clone(input) : null;

		Body.call(this, inputBody, {
			timeout: init.timeout || input.timeout || 0,
			size: init.size || input.size || 0
		});

		const headers = new Headers(init.headers || input.headers || {});

		if (inputBody != null && !headers.has('Content-Type')) {
			const contentType = extractContentType(inputBody);
			if (contentType) {
				headers.append('Content-Type', contentType);
			}
		}

		let signal = isRequest(input) ? input.signal : null;
		if ('signal' in init) signal = init.signal;

		if (signal != null && !isAbortSignal(signal)) {
			throw new TypeError('Expected signal to be an instanceof AbortSignal');
		}

		this[INTERNALS$2] = {
			method,
			redirect: init.redirect || input.redirect || 'follow',
			headers,
			parsedURL,
			signal
		};

		// node-fetch-only options
		this.follow = init.follow !== undefined ? init.follow : input.follow !== undefined ? input.follow : 20;
		this.compress = init.compress !== undefined ? init.compress : input.compress !== undefined ? input.compress : true;
		this.counter = init.counter || input.counter || 0;
		this.agent = init.agent || input.agent;
	}

	get method() {
		return this[INTERNALS$2].method;
	}

	get url() {
		return format_url(this[INTERNALS$2].parsedURL);
	}

	get headers() {
		return this[INTERNALS$2].headers;
	}

	get redirect() {
		return this[INTERNALS$2].redirect;
	}

	get signal() {
		return this[INTERNALS$2].signal;
	}

	/**
  * Clone this request
  *
  * @return  Request
  */
	clone() {
		return new Request(this);
	}
}

Body.mixIn(Request.prototype);

Object.defineProperty(Request.prototype, Symbol.toStringTag, {
	value: 'Request',
	writable: false,
	enumerable: false,
	configurable: true
});

Object.defineProperties(Request.prototype, {
	method: { enumerable: true },
	url: { enumerable: true },
	headers: { enumerable: true },
	redirect: { enumerable: true },
	clone: { enumerable: true },
	signal: { enumerable: true }
});

/**
 * Convert a Request to Node.js http request options.
 *
 * @param   Request  A Request instance
 * @return  Object   The options object to be passed to http.request
 */
function getNodeRequestOptions(request) {
	const parsedURL = request[INTERNALS$2].parsedURL;
	const headers = new Headers(request[INTERNALS$2].headers);

	// fetch step 1.3
	if (!headers.has('Accept')) {
		headers.set('Accept', '*/*');
	}

	// Basic fetch
	if (!parsedURL.protocol || !parsedURL.hostname) {
		throw new TypeError('Only absolute URLs are supported');
	}

	if (!/^https?:$/.test(parsedURL.protocol)) {
		throw new TypeError('Only HTTP(S) protocols are supported');
	}

	if (request.signal && request.body instanceof stream__WEBPACK_IMPORTED_MODULE_0__.Readable && !streamDestructionSupported) {
		throw new Error('Cancellation of streamed requests with AbortSignal is not supported in node < 8');
	}

	// HTTP-network-or-cache fetch steps 2.4-2.7
	let contentLengthValue = null;
	if (request.body == null && /^(POST|PUT)$/i.test(request.method)) {
		contentLengthValue = '0';
	}
	if (request.body != null) {
		const totalBytes = getTotalBytes(request);
		if (typeof totalBytes === 'number') {
			contentLengthValue = String(totalBytes);
		}
	}
	if (contentLengthValue) {
		headers.set('Content-Length', contentLengthValue);
	}

	// HTTP-network-or-cache fetch step 2.11
	if (!headers.has('User-Agent')) {
		headers.set('User-Agent', 'node-fetch/1.0 (+https://github.com/bitinn/node-fetch)');
	}

	// HTTP-network-or-cache fetch step 2.15
	if (request.compress && !headers.has('Accept-Encoding')) {
		headers.set('Accept-Encoding', 'gzip,deflate');
	}

	let agent = request.agent;
	if (typeof agent === 'function') {
		agent = agent(parsedURL);
	}

	if (!headers.has('Connection') && !agent) {
		headers.set('Connection', 'close');
	}

	// HTTP-network fetch step 4.2
	// chunked encoding is handled by Node.js

	return Object.assign({}, parsedURL, {
		method: request.method,
		headers: exportNodeCompatibleHeaders(headers),
		agent
	});
}

/**
 * abort-error.js
 *
 * AbortError interface for cancelled requests
 */

/**
 * Create AbortError instance
 *
 * @param   String      message      Error message for human
 * @return  AbortError
 */
function AbortError(message) {
  Error.call(this, message);

  this.type = 'aborted';
  this.message = message;

  // hide custom error implementation details from end-users
  Error.captureStackTrace(this, this.constructor);
}

AbortError.prototype = Object.create(Error.prototype);
AbortError.prototype.constructor = AbortError;
AbortError.prototype.name = 'AbortError';

// fix an issue where "PassThrough", "resolve" aren't a named export for node <10
const PassThrough$1 = stream__WEBPACK_IMPORTED_MODULE_0__.PassThrough;
const resolve_url = url__WEBPACK_IMPORTED_MODULE_2__.resolve;

/**
 * Fetch function
 *
 * @param   Mixed    url   Absolute url or Request instance
 * @param   Object   opts  Fetch options
 * @return  Promise
 */
function fetch(url, opts) {

	// allow custom promise
	if (!fetch.Promise) {
		throw new Error('native promise missing, set fetch.Promise to your favorite alternative');
	}

	Body.Promise = fetch.Promise;

	// wrap http.request into fetch
	return new fetch.Promise(function (resolve, reject) {
		// build request object
		const request = new Request(url, opts);
		const options = getNodeRequestOptions(request);

		const send = (options.protocol === 'https:' ? https__WEBPACK_IMPORTED_MODULE_3__ : http__WEBPACK_IMPORTED_MODULE_1__).request;
		const signal = request.signal;

		let response = null;

		const abort = function abort() {
			let error = new AbortError('The user aborted a request.');
			reject(error);
			if (request.body && request.body instanceof stream__WEBPACK_IMPORTED_MODULE_0__.Readable) {
				request.body.destroy(error);
			}
			if (!response || !response.body) return;
			response.body.emit('error', error);
		};

		if (signal && signal.aborted) {
			abort();
			return;
		}

		const abortAndFinalize = function abortAndFinalize() {
			abort();
			finalize();
		};

		// send request
		const req = send(options);
		let reqTimeout;

		if (signal) {
			signal.addEventListener('abort', abortAndFinalize);
		}

		function finalize() {
			req.abort();
			if (signal) signal.removeEventListener('abort', abortAndFinalize);
			clearTimeout(reqTimeout);
		}

		if (request.timeout) {
			req.once('socket', function (socket) {
				reqTimeout = setTimeout(function () {
					reject(new FetchError(`network timeout at: ${request.url}`, 'request-timeout'));
					finalize();
				}, request.timeout);
			});
		}

		req.on('error', function (err) {
			reject(new FetchError(`request to ${request.url} failed, reason: ${err.message}`, 'system', err));
			finalize();
		});

		req.on('response', function (res) {
			clearTimeout(reqTimeout);

			const headers = createHeadersLenient(res.headers);

			// HTTP fetch step 5
			if (fetch.isRedirect(res.statusCode)) {
				// HTTP fetch step 5.2
				const location = headers.get('Location');

				// HTTP fetch step 5.3
				const locationURL = location === null ? null : resolve_url(request.url, location);

				// HTTP fetch step 5.5
				switch (request.redirect) {
					case 'error':
						reject(new FetchError(`uri requested responds with a redirect, redirect mode is set to error: ${request.url}`, 'no-redirect'));
						finalize();
						return;
					case 'manual':
						// node-fetch-specific step: make manual redirect a bit easier to use by setting the Location header value to the resolved URL.
						if (locationURL !== null) {
							// handle corrupted header
							try {
								headers.set('Location', locationURL);
							} catch (err) {
								// istanbul ignore next: nodejs server prevent invalid response headers, we can't test this through normal request
								reject(err);
							}
						}
						break;
					case 'follow':
						// HTTP-redirect fetch step 2
						if (locationURL === null) {
							break;
						}

						// HTTP-redirect fetch step 5
						if (request.counter >= request.follow) {
							reject(new FetchError(`maximum redirect reached at: ${request.url}`, 'max-redirect'));
							finalize();
							return;
						}

						// HTTP-redirect fetch step 6 (counter increment)
						// Create a new Request object.
						const requestOpts = {
							headers: new Headers(request.headers),
							follow: request.follow,
							counter: request.counter + 1,
							agent: request.agent,
							compress: request.compress,
							method: request.method,
							body: request.body,
							signal: request.signal,
							timeout: request.timeout,
							size: request.size
						};

						// HTTP-redirect fetch step 9
						if (res.statusCode !== 303 && request.body && getTotalBytes(request) === null) {
							reject(new FetchError('Cannot follow redirect with body being a readable stream', 'unsupported-redirect'));
							finalize();
							return;
						}

						// HTTP-redirect fetch step 11
						if (res.statusCode === 303 || (res.statusCode === 301 || res.statusCode === 302) && request.method === 'POST') {
							requestOpts.method = 'GET';
							requestOpts.body = undefined;
							requestOpts.headers.delete('content-length');
						}

						// HTTP-redirect fetch step 15
						resolve(fetch(new Request(locationURL, requestOpts)));
						finalize();
						return;
				}
			}

			// prepare response
			res.once('end', function () {
				if (signal) signal.removeEventListener('abort', abortAndFinalize);
			});
			let body = res.pipe(new PassThrough$1());

			const response_options = {
				url: request.url,
				status: res.statusCode,
				statusText: res.statusMessage,
				headers: headers,
				size: request.size,
				timeout: request.timeout,
				counter: request.counter
			};

			// HTTP-network fetch step 12.1.1.3
			const codings = headers.get('Content-Encoding');

			// HTTP-network fetch step 12.1.1.4: handle content codings

			// in following scenarios we ignore compression support
			// 1. compression support is disabled
			// 2. HEAD request
			// 3. no Content-Encoding header
			// 4. no content response (204)
			// 5. content not modified response (304)
			if (!request.compress || request.method === 'HEAD' || codings === null || res.statusCode === 204 || res.statusCode === 304) {
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// For Node v6+
			// Be less strict when decoding compressed responses, since sometimes
			// servers send slightly invalid responses that are still accepted
			// by common browsers.
			// Always using Z_SYNC_FLUSH is what cURL does.
			const zlibOptions = {
				flush: zlib__WEBPACK_IMPORTED_MODULE_4__.Z_SYNC_FLUSH,
				finishFlush: zlib__WEBPACK_IMPORTED_MODULE_4__.Z_SYNC_FLUSH
			};

			// for gzip
			if (codings == 'gzip' || codings == 'x-gzip') {
				body = body.pipe(zlib__WEBPACK_IMPORTED_MODULE_4__.createGunzip(zlibOptions));
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// for deflate
			if (codings == 'deflate' || codings == 'x-deflate') {
				// handle the infamous raw deflate response from old servers
				// a hack for old IIS and Apache servers
				const raw = res.pipe(new PassThrough$1());
				raw.once('data', function (chunk) {
					// see http://stackoverflow.com/questions/37519828
					if ((chunk[0] & 0x0F) === 0x08) {
						body = body.pipe(zlib__WEBPACK_IMPORTED_MODULE_4__.createInflate());
					} else {
						body = body.pipe(zlib__WEBPACK_IMPORTED_MODULE_4__.createInflateRaw());
					}
					response = new Response(body, response_options);
					resolve(response);
				});
				return;
			}

			// for br
			if (codings == 'br' && typeof zlib__WEBPACK_IMPORTED_MODULE_4__.createBrotliDecompress === 'function') {
				body = body.pipe(zlib__WEBPACK_IMPORTED_MODULE_4__.createBrotliDecompress());
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// otherwise, use response as-is
			response = new Response(body, response_options);
			resolve(response);
		});

		writeToStream(req, request);
	});
}
/**
 * Redirect code matching
 *
 * @param   Number   code  Status code
 * @return  Boolean
 */
fetch.isRedirect = function (code) {
	return code === 301 || code === 302 || code === 303 || code === 307 || code === 308;
};

// expose Promise
fetch.Promise = global.Promise;

/* harmony default export */ __webpack_exports__["default"] = (fetch);



/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isMergeableObject = function isMergeableObject(value) {
	return isNonNullObject(value)
		&& !isSpecial(value)
};

function isNonNullObject(value) {
	return !!value && typeof value === 'object'
}

function isSpecial(value) {
	var stringValue = Object.prototype.toString.call(value);

	return stringValue === '[object RegExp]'
		|| stringValue === '[object Date]'
		|| isReactElement(value)
}

// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

function isReactElement(value) {
	return value.$$typeof === REACT_ELEMENT_TYPE
}

function emptyTarget(val) {
	return Array.isArray(val) ? [] : {}
}

function cloneUnlessOtherwiseSpecified(value, options) {
	return (options.clone !== false && options.isMergeableObject(value))
		? deepmerge(emptyTarget(value), value, options)
		: value
}

function defaultArrayMerge(target, source, options) {
	return target.concat(source).map(function(element) {
		return cloneUnlessOtherwiseSpecified(element, options)
	})
}

function getMergeFunction(key, options) {
	if (!options.customMerge) {
		return deepmerge
	}
	var customMerge = options.customMerge(key);
	return typeof customMerge === 'function' ? customMerge : deepmerge
}

function getEnumerableOwnPropertySymbols(target) {
	return Object.getOwnPropertySymbols
		? Object.getOwnPropertySymbols(target).filter(function(symbol) {
			return target.propertyIsEnumerable(symbol)
		})
		: []
}

function getKeys(target) {
	return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target))
}

function propertyIsOnObject(object, property) {
	try {
		return property in object
	} catch(_) {
		return false
	}
}

// Protects from prototype poisoning and unexpected merging up the prototype chain.
function propertyIsUnsafe(target, key) {
	return propertyIsOnObject(target, key) // Properties are safe to merge if they don't exist in the target yet,
		&& !(Object.hasOwnProperty.call(target, key) // unsafe if they exist up the prototype chain,
			&& Object.propertyIsEnumerable.call(target, key)) // and also unsafe if they're nonenumerable.
}

function mergeObject(target, source, options) {
	var destination = {};
	if (options.isMergeableObject(target)) {
		getKeys(target).forEach(function(key) {
			destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
		});
	}
	getKeys(source).forEach(function(key) {
		if (propertyIsUnsafe(target, key)) {
			return
		}

		if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
			destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
		} else {
			destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
		}
	});
	return destination
}

function deepmerge(target, source, options) {
	options = options || {};
	options.arrayMerge = options.arrayMerge || defaultArrayMerge;
	options.isMergeableObject = options.isMergeableObject || isMergeableObject;
	// cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
	// implementations can use it. The caller may not replace it.
	options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;

	var sourceIsArray = Array.isArray(source);
	var targetIsArray = Array.isArray(target);
	var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

	if (!sourceAndTargetTypesMatch) {
		return cloneUnlessOtherwiseSpecified(source, options)
	} else if (sourceIsArray) {
		return options.arrayMerge(target, source, options)
	} else {
		return mergeObject(target, source, options)
	}
}

deepmerge.all = function deepmergeAll(array, options) {
	if (!Array.isArray(array)) {
		throw new Error('first argument should be an array')
	}

	return array.reduce(function(prev, next) {
		return deepmerge(prev, next, options)
	}, {})
};

var deepmerge_1 = deepmerge;

module.exports = deepmerge_1;


/***/ })
/******/ ])["default"];