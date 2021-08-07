/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service */ \"./js/service.js\");\n\r\n\r\nconst main = document.querySelector(\".conteneur\");\r\n\r\nasync function lecturePhotographes () {\r\n   const photographes = await (0,_service__WEBPACK_IMPORTED_MODULE_0__.getPhotographes)();\r\n   console.log(\"photographes: \",photographes);\r\n   for (let index = 0; index < photographes.length; index++) {\r\n       const photographe = photographes[index];\r\n       affichage(photographe); \r\n   }\r\n}\r\n\r\nlecturePhotographes();\r\n\r\nfunction affichage(photographe){ \r\n    const fichePhotographe = document.createElement(\"div\");\r\n    fichePhotographe.classList.add(\"fiche_photographe\");\r\n    \r\n    const lien = lienPhotographe(photographe);\r\n    fichePhotographe.appendChild(lien);\r\n    main.appendChild(fichePhotographe);\r\n}\r\n\r\nfunction lienPhotographe(photographe) {\r\n    const lien = document.createElement(\"a\"); \r\n    lien.href = \"photographe.html\"; \r\n\r\n    const img = document.createElement(\"img\");\r\n    img.src = \"images/photographers/\" + photographe.portrait;\r\n    lien.appendChild(img);\r\n\r\n    return lien;\r\n}\n\n//# sourceURL=webpack://fisheye/./js/index.js?");

/***/ }),

/***/ "./js/service.js":
/*!***********************!*\
  !*** ./js/service.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"lecture\": () => (/* binding */ lecture),\n/* harmony export */   \"getPhotographes\": () => (/* binding */ getPhotographes)\n/* harmony export */ });\nconst lecture =  async() => {\r\n    try {\r\n       const reponse = await fetch(\"../data.json\");\r\n       const datas = await reponse.json();\r\n       console.log(\"donnees: \", datas);\r\n       return datas;\r\n    } catch (error) {\r\n       console.error(error);\r\n    }\r\n}\r\n\r\nconst getPhotographes = async() => {\r\n   const donnees =  await lecture();\r\n   return donnees.photographers;\r\n\r\n}\n\n//# sourceURL=webpack://fisheye/./js/service.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/index.js");
/******/ 	
/******/ })()
;