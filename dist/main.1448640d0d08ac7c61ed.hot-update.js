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

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nvar modal = function modal() {\n  var modalOver = document.querySelector('.modal-overlay'),\n      modalCall = document.querySelector('.modal-callback'),\n      beforeImg = window.getComputedStyle(document.querySelector('.img-wrapper'), ':before').content;\n  document.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.closest('.img-wrapper', ':before').content) {\n      console.log(11);\n    }\n\n    if (target.closest('.callback-btn,  .button-services')) {\n      modalOver.style.display = 'block';\n      modalCall.style.display = 'block';\n    } else if (target.closest('.modal-close')) {\n      modalOver.style.display = 'none';\n      modalCall.style.display = 'none';\n    } else {\n      target = target.closest('.modal-callback');\n\n      if (!target) {\n        modalOver.style.display = 'none';\n        modalCall.style.display = 'none';\n      }\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack://diploma/./src/modules/modal.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("570798abdcb7fb7435fc")
/******/ })();
/******/ 
/******/ }
);