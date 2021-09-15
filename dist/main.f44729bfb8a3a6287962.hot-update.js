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

/***/ "./src/modules/tabs.js":
/*!*****************************!*\
  !*** ./src/modules/tabs.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nvar tabs = function tabs() {\n  var block = document.querySelectorAll('.element'),\n      tabHeader = document.querySelector('.');\n  elemCont = document.querySelectorAll('.element-content');\n\n  var toogleTabContent = function toogleTabContent(index) {\n    for (var i = 0; i < elemCont.length; i++) {\n      if (index === i) {\n        block[i].classList.add('active');\n        elemCont[i].style.display = 'block';\n      } else {\n        elemCont[i].style.display = 'none';\n        block[i].classList.remove('active');\n      }\n    }\n  };\n\n  tabHeader.addEventListener('click', function (event) {\n    var target = event.target;\n    target = target.closest('.service-header-tab');\n\n    if (target) {\n      tab.forEach(function (item, index) {\n        if (item === target) {\n          toogleTabContent(index);\n        }\n      });\n    }\n  });\n};\n\ntabs();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack://diploma/./src/modules/tabs.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("77b6432793a4f9d220eb")
/******/ })();
/******/ 
/******/ }
);