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
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/app/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/app/app.js":
/*!******************************!*\
  !*** ./assets/js/app/app.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("String.prototype.format = function () {\n    var pattern = /\\{\\d+\\}/g;\n    var args = arguments;\n    return this.replace(pattern, function (capture) {\n        return args[capture.match(/\\d+/)];\n    });\n};\n\nvar FZD = {\n    debugOn: true,\n    mode: \"landing\",\n    log: function (txt) {\n        if (!this.debugOn) return;\n        if (typeof (console) !== \"undefined\") {\n            console.log(\"### \" + txt + \" \");\n        }\n    },\n    domLoaded: function (callback) {\n        if (document.addEventListener) {\n            document.addEventListener('DOMContentLoaded', callback, false);\n        }\n        var DOMLoadTimer = setInterval(function () {\n            if (document.readyState == \"complete\") {\n                callback;\n                clearInterval(DOMLoadTimer);\n            }\n        },\n            200);\n    },\n    // Gets the last segment of the url path\n    getLastPath: function () {\n        var parts = window.location.pathname.split(\"/\");\n        FZD.log(\"Length:\" + parts.length);\n        var page;\n        for (i in parts.reverse()) {\n            FZD.log(\"Part:\" + parts[i]);\n            if (parts[i].length > 0) {\n                page = parts[i];\n                break;\n            }\n        }\n        return page;\n    },\n    // get query string value based on key. If not found, returns null\n    getQSValue: function (key) {\n        var querystring = location.search.replace(/\\?/, \"\");\n        var parts = querystring.split(\"&\");\n        var match = {};\n        for (var L = 0; L < parts.length; L++) {\n            var kvpair = parts[L].split(\"=\");\n            match[kvpair[0]] = kvpair[1];\n        }\n        if (match[key]) {\n            return match[key];\n        } else {\n            return null;\n        }\n    },\n    // using jQuery?\n    getCookie: function (name) {\n        var cookieValue = null;\n        if (document.cookie && document.cookie != '') {\n            var cookies = document.cookie.split(';');\n            for (var i = 0; i < cookies.length; i++) {\n                var cookie = jQuery.trim(cookies[i]);\n                // Does this cookie string begin with the name we want?\n                if (cookie.substring(0, name.length + 1) == (name + '=')) {\n                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));\n                    break;\n                }\n            }\n        }\n        return cookieValue;\n    },\n    getElementsByClassName: function (oElm, strTagName, strClassName) {\n        var arrElements = (strTagName == \"*\" && oElm.all) ? oElm.all :\n            oElm.getElementsByTagName(strTagName);\n        var arrReturnElements = new Array();\n        strClassName = strClassName.replace(/\\-/g, \"\\\\-\");\n        var oRegExp = new RegExp(\"(^|\\\\s)\" + strClassName + \"(\\\\s|$)\");\n        var oElement;\n        for (var i = 0; i < arrElements.length; i++) {\n            oElement = arrElements[i];\n            if (oRegExp.test(oElement.className)) {\n                arrReturnElements.push(oElement);\n            }\n        }\n        return (arrReturnElements)\n    }\n};\n\n\n\n//# sourceURL=webpack:///./assets/js/app/app.js?");

/***/ })

/******/ });