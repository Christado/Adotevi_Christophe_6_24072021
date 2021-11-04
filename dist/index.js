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

/***/ "./js/filter.js":
/*!**********************!*\
  !*** ./js/filter.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst filterByTag = (photographes, tag) => {\r\n  const result = photographes.filter((photographe) => photographe.tags.includes(tag));\r\n  return result;\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (filterByTag);\r\n\n\n//# sourceURL=webpack://fisheye/./js/filter.js?");

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"lienPhotographe\": () => (/* binding */ lienPhotographe),\n/* harmony export */   \"affichage\": () => (/* binding */ affichage)\n/* harmony export */ });\n/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service */ \"./js/service.js\");\n/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter */ \"./js/filter.js\");\n\r\n\r\n\r\n// affichage des tags de chaque photographe //\r\nconst main = document.querySelector('.conteneur');\r\nlet photographes = [];\r\nfunction tagPhotographe(photographe) {\r\n  const tag1 = document.createElement('nav');\r\n  const tag2 = document.createElement('ul');\r\n\r\n  const { tags } = photographe;\r\n\r\n  for (let index = 0; index < tags.length; index += 1) {\r\n    const tag = tags[index];\r\n    const tagli = document.createElement('li');\r\n    tagli.innerText = `#${tag}`;\r\n    tag2.appendChild(tagli);\r\n  }\r\n  tag1.appendChild(tag2);\r\n\r\n  return tag1;\r\n}\r\n\r\n// affichage du protrait et nom des photographes //\r\nfunction lienPhotographe(photographe) {\r\n  const lien = document.createElement('a');\r\n\r\n  lien.href = `photographe.html?id=${photographe.id}`;\r\n\r\n  const img = document.createElement('img');\r\n\r\n  img.src = `images/photographers/${photographe.portrait}`;\r\n  img.alt = photographe.name;\r\n  lien.appendChild(img);\r\n\r\n  const nom = document.createElement('h2');\r\n  nom.innerText = photographe.name;\r\n  nom.ariaLabel = photographe.name;\r\n  lien.appendChild(nom);\r\n\r\n  return lien;\r\n}\r\n\r\n// affichage des infos des chaque photogrphe //\r\nfunction affichage(photographe) {\r\n  const fichePhotographe = document.createElement('div');\r\n  fichePhotographe.classList.add('fiche_photographe');\r\n  const lien = lienPhotographe(photographe);\r\n  fichePhotographe.appendChild(lien);\r\n  const lieux = document.createElement('p');\r\n  lieux.classList.add('localisation');\r\n  lieux.innerText = `${photographe.city}, ${photographe.country}`;\r\n  fichePhotographe.appendChild(lieux);\r\n\r\n  const descrip1 = document.createElement('p');\r\n  descrip1.innerText = photographe.tagline;\r\n  fichePhotographe.appendChild(descrip1);\r\n\r\n  const tarifs = document.createElement('p');\r\n  tarifs.classList.add('tarif');\r\n  tarifs.innerText = `${photographe.price} € / jour `;\r\n  fichePhotographe.appendChild(tarifs);\r\n  const tags = tagPhotographe(photographe);\r\n  fichePhotographe.appendChild(tags);\r\n\r\n  main.appendChild(fichePhotographe);\r\n}\r\n\r\nfunction affichageDesPhotographes(photographers) {\r\n  main.innerText = '';\r\n  photographers.forEach((photographe) => {\r\n    affichage(photographe);\r\n  });\r\n}\r\n\r\nasync function lecturePhotographes() {\r\n  photographes = await (0,_service__WEBPACK_IMPORTED_MODULE_0__.getPhotographes)();\r\n  affichageDesPhotographes(photographes);\r\n}\r\n\r\n// filtre des photographes par leurs Tags //\r\nfunction initFilter() {\r\n  const tagsInput = document.querySelectorAll('.tag');\r\n  tagsInput.forEach((input) => {\r\n    input.addEventListener('click', (event) => {\r\n      const tag = event.currentTarget.id;\r\n      const filterResult = (0,_filter__WEBPACK_IMPORTED_MODULE_1__.default)(photographes, tag);\r\n      affichageDesPhotographes(filterResult);\r\n    });\r\n  });\r\n}\r\n\r\nlecturePhotographes();\r\ninitFilter();\r\n\n\n//# sourceURL=webpack://fisheye/./js/index.js?");

/***/ }),

/***/ "./js/service.js":
/*!***********************!*\
  !*** ./js/service.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"lecture\": () => (/* binding */ lecture),\n/* harmony export */   \"getPhotographes\": () => (/* binding */ getPhotographes),\n/* harmony export */   \"getPhotographe\": () => (/* binding */ getPhotographe),\n/* harmony export */   \"getMedia\": () => (/* binding */ getMedia)\n/* harmony export */ });\n/* eslint-disable no-console */\r\nconst lecture = async () => {\r\n  try {\r\n    const reponse = await fetch('../data.json');\r\n    const datas = await reponse.json();\r\n    console.log('donnees: ', datas);\r\n    return datas;\r\n  } catch (error) {\r\n    console.error(error);\r\n    return null;\r\n  }\r\n};\r\n\r\nconst getPhotographes = async () => {\r\n  const donnees = await lecture();\r\n  return donnees.photographers;\r\n};\r\n\r\nconst getPhotographe = async (id) => {\r\n  const photographers = await getPhotographes();\r\n\r\n  const photographe = photographers.find((photographe1) => photographe1.id === Number(id));\r\n  return photographe;\r\n};\r\n\r\nconst getMedia = async (id) => {\r\n  const donnees = await lecture();\r\n  const medias = donnees.media;\r\n  return medias.filter((media) => media.photographerId === Number(id));\r\n};\r\n\n\n//# sourceURL=webpack://fisheye/./js/service.js?");

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