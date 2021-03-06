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
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/vueapp.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/vueapp.js":
/*!****************************************!*\
  !*** ./app/javascript/packs/vueapp.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/tienvm/Desktop/code/Vue-JS/vuerailsdemo/app/javascript/packs/vueapp.js: 'import' and 'export' may only appear at the top level (13:4)\n\n  11 |     // });\n  12 | \n> 13 |     export default new Vue( {\n     |     ^\n  14 |         i18n,\n  15 |         router,\n  16 |         store,\n    at Parser.raise (/Users/tienvm/Desktop/code/Vue-JS/vuerailsdemo/node_modules/@babel/parser/lib/index.js:6325:17)\n    at Parser.parseStatementContent (/Users/tienvm/Desktop/code/Vue-JS/vuerailsdemo/node_modules/@babel/parser/lib/index.js:9920:18)\n    at Parser.parseStatement (/Users/tienvm/Desktop/code/Vue-JS/vuerailsdemo/node_modules/@babel/parser/lib/index.js:9829:17)\n    at Parser.parseBlockOrModuleBlockBody (/Users/tienvm/Desktop/code/Vue-JS/vuerailsdemo/node_modules/@babel/parser/lib/index.js:10405:25)\n    at Parser.parseBlockBody (/Users/tienvm/Desktop/code/Vue-JS/vuerailsdemo/node_modules/@babel/parser/lib/index.js:10392:10)\n    at Parser.parseBlock (/Users/tienvm/Desktop/code/Vue-JS/vuerailsdemo/node_modules/@babel/parser/lib/index.js:10376:10)\n    at Parser.parseFunctionBody (/Users/tienvm/Desktop/code/Vue-JS/vuerailsdemo/node_modules/@babel/parser/lib/index.js:9424:24)\n    at Parser.parseArrowExpression (/Users/tienvm/Desktop/code/Vue-JS/vuerailsdemo/node_modules/@babel/parser/lib/index.js:9365:10)\n    at Parser.parseParenAndDistinguishExpression (/Users/tienvm/Desktop/code/Vue-JS/vuerailsdemo/node_modules/@babel/parser/lib/index.js:9002:12)\n    at Parser.parseExprAtom (/Users/tienvm/Desktop/code/Vue-JS/vuerailsdemo/node_modules/@babel/parser/lib/index.js:8762:21)\n    at Parser.parseExprSubscripts (/Users/tienvm/Desktop/code/Vue-JS/vuerailsdemo/node_modules/@babel/parser/lib/index.js:8412:23)\n    at Parser.parseMaybeUnary (/Users/tienvm/Desktop/code/Vue-JS/vuerailsdemo/node_modules/@babel/parser/lib/index.js:8392:21)\n    at Parser.parseExprOps (/Users/tienvm/Desktop/code/Vue-JS/vuerailsdemo/node_modules/@babel/parser/lib/index.js:8267:23)\n    at Parser.parseMaybeConditional (/Users/tienvm/Desktop/code/Vue-JS/vuerailsdemo/node_modules/@babel/parser/lib/index.js:8240:23)\n    at Parser.parseMaybeAssign (/Users/tienvm/Desktop/code/Vue-JS/vuerailsdemo/node_modules/@babel/parser/lib/index.js:8187:21)\n    at Parser.parseExprListItem (/Users/tienvm/Desktop/code/Vue-JS/vuerailsdemo/node_modules/@babel/parser/lib/index.js:9491:18)\n    at Parser.parseCallExpressionArguments (/Users/tienvm/Desktop/code/Vue-JS/vuerailsdemo/node_modules/@babel/parser/lib/index.js:8621:22)\n    at Parser.parseSubscript (/Users/tienvm/Desktop/code/Vue-JS/vuerailsdemo/node_modules/@babel/parser/lib/index.js:8514:29)\n    at Parser.parseSubscripts (/Users/tienvm/Desktop/code/Vue-JS/vuerailsdemo/node_modules/@babel/parser/lib/index.js:8433:19)\n    at Parser.parseExprSubscripts (/Users/tienvm/Desktop/code/Vue-JS/vuerailsdemo/node_modules/@babel/parser/lib/index.js:8422:17)\n    at Parser.parseMaybeUnary (/Users/tienvm/Desktop/code/Vue-JS/vuerailsdemo/node_modules/@babel/parser/lib/index.js:8392:21)\n    at Parser.parseExprOps (/Users/tienvm/Desktop/code/Vue-JS/vuerailsdemo/node_modules/@babel/parser/lib/index.js:8267:23)\n    at Parser.parseMaybeConditional (/Users/tienvm/Desktop/code/Vue-JS/vuerailsdemo/node_modules/@babel/parser/lib/index.js:8240:23)\n    at Parser.parseMaybeAssign (/Users/tienvm/Desktop/code/Vue-JS/vuerailsdemo/node_modules/@babel/parser/lib/index.js:8187:21)\n    at Parser.parseExpression (/Users/tienvm/Desktop/code/Vue-JS/vuerailsdemo/node_modules/@babel/parser/lib/index.js:8135:23)\n    at Parser.parseStatementContent (/Users/tienvm/Desktop/code/Vue-JS/vuerailsdemo/node_modules/@babel/parser/lib/index.js:9958:23)\n    at Parser.parseStatement (/Users/tienvm/Desktop/code/Vue-JS/vuerailsdemo/node_modules/@babel/parser/lib/index.js:9829:17)\n    at Parser.parseBlockOrModuleBlockBody (/Users/tienvm/Desktop/code/Vue-JS/vuerailsdemo/node_modules/@babel/parser/lib/index.js:10405:25)\n    at Parser.parseBlockBody (/Users/tienvm/Desktop/code/Vue-JS/vuerailsdemo/node_modules/@babel/parser/lib/index.js:10392:10)\n    at Parser.parseTopLevel (/Users/tienvm/Desktop/code/Vue-JS/vuerailsdemo/node_modules/@babel/parser/lib/index.js:9758:10)\n    at Parser.parse (/Users/tienvm/Desktop/code/Vue-JS/vuerailsdemo/node_modules/@babel/parser/lib/index.js:11270:17)\n    at parse (/Users/tienvm/Desktop/code/Vue-JS/vuerailsdemo/node_modules/@babel/parser/lib/index.js:11306:38)\n    at parser (/Users/tienvm/Desktop/code/Vue-JS/vuerailsdemo/node_modules/@babel/core/lib/transformation/normalize-file.js:170:34)\n    at normalizeFile (/Users/tienvm/Desktop/code/Vue-JS/vuerailsdemo/node_modules/@babel/core/lib/transformation/normalize-file.js:138:11)\n    at runSync (/Users/tienvm/Desktop/code/Vue-JS/vuerailsdemo/node_modules/@babel/core/lib/transformation/index.js:44:43)\n    at runAsync (/Users/tienvm/Desktop/code/Vue-JS/vuerailsdemo/node_modules/@babel/core/lib/transformation/index.js:35:14)");

/***/ })

/******/ });
//# sourceMappingURL=vueapp-4fe4a0d08cca15996685.js.map