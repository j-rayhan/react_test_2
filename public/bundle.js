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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\"use stritc\";\n\n// arguments object - no longer bound\n\nvar _arguments = arguments;\nfunction addOld(a, b) {\n\tconsole.log(arguments);\n\treturn a + b;\n}\nvar add = function add(a, b) {\n\tconsole.log(_arguments);\n\treturn a + b;\n};\n\n// console.log(addOld(55,5));\n\n// this keyword - no longer bound\n\n// <--------user with error: Cannot read property 'name' of undefined\nvar user1 = {\n\tname: 'johir',\n\tcityes: ['Dhaka', 'Khulna', 'Rajshahi'],\n\tprintPlace: function printPlace() {\n\t\t// solev the error use it\n\t\tvar that = this;\n\t\tthis.cityes.forEach(function (city) {\n\t\t\tconsole.log(that.name + ' has lives in ' + city);\n\t\t});\n\t}\n};\n\nvar user = {\n\tname: 'johir',\n\tcityes: ['Dhaka', 'Khulna', 'Rajshahi'],\n\tprintPlace: function printPlace() {\n\t\tvar _this = this;\n\n\t\treturn this.cityes.map(function (city) {\n\t\t\treturn _this.name + 'has lived in ' + city;\n\t\t});\n\t}\n};\n\nuser1.printPlace();\n\nconsole.log(user.printPlace());\n\n// Challenge area\nvar multiplier = {\n\t//array of numbers\n\tnumbers: [1, 2, 3, 4],\n\tmultiplyBy: 3,\n\tmultiply: function multiply() {\n\t\tvar _this2 = this;\n\n\t\treturn this.numbers.map(function (number) {\n\t\t\treturn number * _this2.multiplyBy;\n\t\t});\n\t}\n};\n\n// console.log(multiplier.multiply())//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvcGxheWdyb3VuZC9lczYtYXJyb3ctZnVuLTIuanM/YzBkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpdGNcIlxuXG4vLyBhcmd1bWVudHMgb2JqZWN0IC0gbm8gbG9uZ2VyIGJvdW5kXG5cbmZ1bmN0aW9uIGFkZE9sZChhLGIpIHtcblx0Y29uc29sZS5sb2coYXJndW1lbnRzKTtcblx0cmV0dXJuIGEgK2I7XG59XG5jb25zdCBhZGQgPSAoYSxiKSA9PiB7XG5cdGNvbnNvbGUubG9nKGFyZ3VtZW50cyk7XG5cdHJldHVybiBhK2I7XG59XG5cbi8vIGNvbnNvbGUubG9nKGFkZE9sZCg1NSw1KSk7XG5cbi8vIHRoaXMga2V5d29yZCAtIG5vIGxvbmdlciBib3VuZFxuXG4vLyA8LS0tLS0tLS11c2VyIHdpdGggZXJyb3I6IENhbm5vdCByZWFkIHByb3BlcnR5ICduYW1lJyBvZiB1bmRlZmluZWRcbmNvbnN0IHVzZXIxID0ge1xuXHRuYW1lIDogJ2pvaGlyJyxcblx0Y2l0eWVzOiBbJ0RoYWthJywgJ0todWxuYScsICdSYWpzaGFoaSddLFxuXHRwcmludFBsYWNlOiBmdW5jdGlvbiAoKSB7XG5cdFx0Ly8gc29sZXYgdGhlIGVycm9yIHVzZSBpdFxuXHRcdGNvbnN0IHRoYXQgPSB0aGlzO1xuXHRcdHRoaXMuY2l0eWVzLmZvckVhY2goZnVuY3Rpb24oY2l0eSl7XG5cdFx0XHRjb25zb2xlLmxvZyh0aGF0Lm5hbWUgKyAnIGhhcyBsaXZlcyBpbiAnKyBjaXR5KTtcblx0XHR9KVxuXHR9XG59XG5cbmNvbnN0IHVzZXIgPSB7XG5cdG5hbWUgOiAnam9oaXInLFxuXHRjaXR5ZXM6IFsnRGhha2EnLCAnS2h1bG5hJywgJ1JhanNoYWhpJ10sXG5cdHByaW50UGxhY2UoKXtcblx0XHRyZXR1cm4gdGhpcy5jaXR5ZXMubWFwKChjaXR5KSA9PiB0aGlzLm5hbWUgKyAnaGFzIGxpdmVkIGluICcrIGNpdHkpO1xuXHR9XG59XG5cbnVzZXIxLnByaW50UGxhY2UoKTtcblxuY29uc29sZS5sb2codXNlci5wcmludFBsYWNlKCkpO1xuXG4vLyBDaGFsbGVuZ2UgYXJlYVxuY29uc3QgbXVsdGlwbGllciA9e1xuXHQvL2FycmF5IG9mIG51bWJlcnNcblx0bnVtYmVyczogWyAxLDIsMyw0XSxcblx0bXVsdGlwbHlCeTogMyxcblx0bXVsdGlwbHkoKXtcblx0XHRyZXR1cm4gdGhpcy5udW1iZXJzLm1hcCgobnVtYmVyKT0+IG51bWJlciogdGhpcy5tdWx0aXBseUJ5KTtcblx0fVxufVxuXG4vLyBjb25zb2xlLmxvZyhtdWx0aXBsaWVyLm11bHRpcGx5KCkpXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9wbGF5Z3JvdW5kL2VzNi1hcnJvdy1mdW4tMi5qcyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRBO0FBQ0E7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUxBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQU5BO0FBQ0E7QUFRQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);