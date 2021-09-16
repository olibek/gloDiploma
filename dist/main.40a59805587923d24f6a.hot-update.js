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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nvar check = function check(item) {\n  if (item.matches('[placeholder=\"Ваше имя\"]')) {\n    item.value = item.value.replace(/^\\s|[.`\"!/,?^*()#%-+=:'$@~;\\w]{2}$/g, '');\n  }\n\n  if (item.matches('.tel')) {\n    item.value = item.value.replace(/[^\\d]/g, '');\n  } else {\n    return;\n  }\n};\n\nvar element = document.querySelectorAll('.tel');\nvar maskOptions = {\n  mask: '+7(000)000-00-00',\n  lazy: false\n};\nvar mask = new IMask(element, maskOptions);\n\nvar validation = function validation() {\n  var valid = function valid() {\n    document.body.addEventListener('input', function (event) {\n      var target = event.target;\n      check(target);\n    });\n    document.body.addEventListener('blur', function (event) {\n      var target = event.target;\n\n      if (target.matches('[placeholder=\"Ваше имя\"]')) {\n        if (target.value) {\n          target.value = target.value.split(/\\s+/).map(function (word) {\n            return word[0].toUpperCase() + word.substring(1);\n          }).join(' ');\n\n          if (target.value.length < 2) {\n            target.value = target.value.replace(/.{1}/g, '');\n          }\n        }\n      }\n\n      if (target.matches('.tel')) {\n        if (target.value.length > 13) {\n          target.style.border = \"2px solid red\";\n          target.value = '';\n        }\n      } else {\n        return;\n      }\n    }, true);\n  };\n\n  valid();\n};\n\nvar errorMessage = 'Что то пошло не так...',\n    loadMessage = 'Загрузка...',\n    succesMessage = 'Спасибо! мы скоро с вами свяжемся';\nvar statusMessage = document.createElement('div');\nstatusMessage.style.cssText = 'font-size: 1.4rem;';\n\nvar clearFun = function clearFun() {\n  statusMessage.remove();\n};\n\nvar formFunc = function formFunc(elem) {\n  elem.appendChild(statusMessage);\n  statusMessage.textContent = loadMessage;\n  var formData = new FormData(elem);\n  var body = {};\n  formData.forEach(function (val, key) {\n    body[key] = val;\n  }); // функция для обращения к серверу\n\n  var postData = function postData(body) {\n    return fetch('./server.php', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify(body)\n    });\n  };\n\n  var errorData = function errorData(error) {\n    statusMessage.textContent = errorMessage;\n    setTimeout(clearFun, 3000);\n  };\n\n  postData(body).then(function (response) {\n    if (response.status !== 200) {\n      throw new Error('status network not 200');\n    }\n\n    statusMessage.textContent = succesMessage;\n    setTimeout(clearFun, 3000);\n\n    for (var k = 0; k < elem.length; k++) {\n      elem[0].value = '';\n      elem[1].value = '';\n    }\n  })[\"catch\"](errorData); // получение данных с формы\n};\n\ndocument.body.addEventListener('blur', function (event) {\n  var target = event.target;\n\n  if (target.matches('.tel')) {\n    if (target.value.length > 16) {\n      target.value = '';\n    }\n\n    if (target.value.length < 11) {\n      target.value = '';\n    }\n  } else {\n    return;\n  }\n}, true);\ndocument.addEventListener('submit', function (event) {\n  event.preventDefault();\n  var target = event.target;\n  formFunc(target);\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validation);\n\n//# sourceURL=webpack://diploma/./src/modules/validation.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("4592f7a43b7065e6d185")
/******/ })();
/******/ 
/******/ }
);