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

/***/ "./src/modules/carousel.js":
/*!*********************************!*\
  !*** ./src/modules/carousel.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nvar carousel = function carousel() {\n  var position = 0;\n  var slidesToShow = 3,\n      slideToScroll = 1,\n      container = document.querySelector('.services-elements'),\n      track = document.querySelector('.services-carousel'),\n      items = document.querySelectorAll('.col-sm-6'),\n      btnPrev = document.querySelector('.arrow-left'),\n      btnNext = document.querySelector('.arrow-right'),\n      itemsCount = items.length,\n      itemWidth = container.clientWidth / slidesToShow,\n      movePosition = slideToScroll * itemWidth;\n  items.forEach(function (item) {\n    item.style.minWidth = \"\".concat(itemWidth, \"px\");\n  });\n\n  var setPosition = function setPosition() {\n    track.style.transform = \"translateX(\".concat(position, \"px)\");\n  };\n\n  btnPrev.addEventListener('click', function () {\n    position += movePosition;\n    setPosition();\n  });\n  btnNext.addEventListener('click', function () {\n    position -= movePosition;\n    setPosition();\n  });\n\n  var checkBtns = function checkBtns() {\n    btnPrev.prop('disabled', true);\n  };\n\n  checkBtns();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (carousel);\n\n//# sourceURL=webpack://diploma/./src/modules/carousel.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b6709562209fb063f023")
/******/ })();
/******/ 
/******/ }
);