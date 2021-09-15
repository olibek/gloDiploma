/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatediploma"]("main",{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal.js */ \"./src/modules/modal.js\");\n/* harmony import */ var _modules_slider_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/slider.js */ \"./src/modules/slider.js\");\n/* harmony import */ var _modules_carousel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/carousel.js */ \"./src/modules/carousel.js\");\n/* harmony import */ var _modules_carousel_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_carousel_js__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n\n(0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_modules_slider_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n_modules_carousel_js__WEBPACK_IMPORTED_MODULE_2___default()();\n\n//# sourceURL=webpack://diploma/./src/index.js?");

/***/ }),

/***/ "./src/modules/carousel.js":
/*!*********************************!*\
  !*** ./src/modules/carousel.js ***!
  \*********************************/
/***/ (() => {

eval("// 'use strict';\n// const carousel = () => {\n//   let position = 0;\n//   const slidesToShow = 3,\n//     slideToScroll = 1,\n//     container = document.querySelector('.services-elements'),\n//     track = document.querySelector('.services-carousel'),\n//     items = document.querySelectorAll('.col-sm-6'),\n//     btnPrev = document.querySelector('.arrow-left'),\n//     btnNext = document.querySelector('.arrow-right'),\n//     itemsCount = items.length,\n//     itemWidth = container.clientWidth / slidesToShow,\n//     movePosition = slideToScroll * itemWidth;\n//   items.forEach((item) => {\n//     item.style.minWidth = `${itemWidth}px`;\n//   });\n//   const setPosition = () => {\n//     track.style.transform = `translateX(${position}px)`;\n//   };\n//   btnPrev.addEventListener('click', () => {\n//     position += movePosition;\n//     setPosition();\n//   });\n//   btnNext.addEventListener('click', () => {\n//     position -= movePosition;\n//     setPosition();\n//   });\n//   const checkBtns = () => {\n//     btnPrev.disabled = position === 0;\n//     btnNext.disabled = position <= - (itemsCount - slidesToShow) * itemWidth;\n//   };\n//   checkBtns();\n// };\n// export default carousel;\n\n//# sourceURL=webpack://diploma/./src/modules/carousel.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/compat get default export */
/******/ (() => {
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		var getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a33c92425fc55909850f")
/******/ })();
/******/ 
/******/ }
);