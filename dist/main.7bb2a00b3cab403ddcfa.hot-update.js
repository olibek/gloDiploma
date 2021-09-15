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

/***/ "./src/modules/scrollToTop.js":
/*!************************************!*\
  !*** ./src/modules/scrollToTop.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nfunction scrollTo(to) {\n  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 700;\n\n  var element = document.scrollingElement || document.documentElement,\n      start = element.scrollTop,\n      change = to - start,\n      startDate = +new Date(),\n      // t = current time\n  // b = start value\n  // c = change in value\n  // d = duration\n  easeInOutQuad = function easeInOutQuad(t, b, c, d) {\n    t /= d / 2;\n    if (t < 1) return c / 2 * t * t + b;\n    t--;\n    return -c / 2 * (t * (t - 2) - 1) + b;\n  },\n      animateScroll = function animateScroll() {\n    var currentDate = +new Date();\n    var currentTime = currentDate - startDate;\n    element.scrollTop = parseInt(easeInOutQuad(currentTime, start, change, duration));\n\n    if (currentTime < duration) {\n      requestAnimationFrame(animateScroll);\n    } else {\n      element.scrollTop = to;\n    }\n  };\n\n  animateScroll();\n}\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var btn = document.querySelector('#.up');\n  window.addEventListener('scroll', function () {\n    // Если прокрутили дальше 599px, показываем кнопку\n    if (pageYOffset > 100) {\n      btn.classList.add('show'); // Иначе прячем\n    } else {\n      btn.classList.remove('show');\n    }\n  }); // При клике прокручиываем на самый верх\n\n  btn.onclick = function (click) {\n    click.preventDefault();\n    scrollToTop(0, 400);\n  };\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scrollToTop);\n\n//# sourceURL=webpack://diploma/./src/modules/scrollToTop.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("29f2058ffa58e4409cb0")
/******/ })();
/******/ 
/******/ }
);