"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatediploma"]("main",{

/***/ "./src/modules/validation.js":
/*!***********************************!*\
  !*** ./src/modules/validation.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nvar check = function check(item) {\n  if (item.matches('[placeholder=\"Ваше имя\"]')) {\n    item.value = item.value.replace(/^\\s|[.`\"!/,?^*()#%-+=:'$@~;\\w]{2}$/g, '');\n  }\n\n  if (item.matches('.tel')) {\n    item.value = item.value.replace(/^\\s|[.`\"!/,?^*()#%-+=:'$@~;\\w]{2}$/g, '');\n  } else {\n    return;\n  }\n};\n\nvar validation = function validation() {\n  var rusWord = function rusWord() {\n    document.body.addEventListener('input', function (event) {\n      var target = event.target;\n      check(target);\n    });\n  };\n\n  rusWord();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validation);\n\n//# sourceURL=webpack://diploma/./src/modules/validation.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d8abd5adfc4c871c44cf")
/******/ })();
/******/ 
/******/ }
);