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

/***/ "./js/ImageFactory.js":
/*!****************************!*\
  !*** ./js/ImageFactory.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ImageFactory)\n/* harmony export */ });\nclass ImageFactory {\r\n  constructor(data) {\r\n    this.image1 = this.fabriqueImage(data);\r\n  }\r\n\r\n  // eslint-disable-next-line no-unused-vars\r\n  fabriqueImage(data) {\r\n    this.mediaData = data;\r\n    this.media = document.createElement('figure');\r\n    this.media.className = 'photo photo-3rd';\r\n    const image = document.createElement('img');\r\n    image.className = 'photo-picture';\r\n    image.src = `./img/${this.mediaData.photographeName.split(' ')[0]}/${this.mediaData.image}`;\r\n    const footer = document.createElement('footer');\r\n    footer.className = 'photo-footer';\r\n\r\n    const affspan = document.createElement('span');\r\n    affspan.className = 'photo-footer__title';\r\n    affspan.innerText = this.mediaData.title;\r\n    footer.appendChild(affspan);\r\n\r\n    const affspan3 = document.createElement('i');\r\n    affspan3.className = 'fas fa-heart';\r\n    const nbrlikes = document.createTextNode(this.mediaData.likes);\r\n\r\n    const affspan1 = document.createElement('span');\r\n    affspan1.className = 'photo-footer__likes';\r\n    affspan1.append(nbrlikes, affspan3);\r\n    // affspan1.innerHTML = \"12 <i class='fas fa-heart'></i>\";//\r\n    footer.appendChild(affspan1);\r\n\r\n    const affspan2 = document.createElement('span');\r\n    affspan2.className = 'photo-footer__price';\r\n    affspan2.innerText = `${this.mediaData.price} €`;\r\n    footer.appendChild(affspan2);\r\n\r\n    this.media.appendChild(image);\r\n    this.media.appendChild(footer);\r\n\r\n    affspan3.addEventListener('click', () => {\r\n      this.mediaData.likes += 1;\r\n      nbrlikes.nodeValue = this.mediaData.likes;\r\n    });\r\n\r\n    return this.media;\r\n  }\r\n\r\n  htmlContent() {\r\n    return this.image1;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://fisheye/./js/ImageFactory.js?");

/***/ }),

/***/ "./js/VideoFactory.js":
/*!****************************!*\
  !*** ./js/VideoFactory.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ VideoFactory)\n/* harmony export */ });\nclass VideoFactory {\r\n  constructor(data) {\r\n    this.video1 = this.fabriqueVideo(data);\r\n  }\r\n\r\n  // eslint-disable-next-line no-unused-vars\r\n  fabriqueVideo(data) {\r\n    this.mediaData = data;\r\n    this.media = document.createElement('figure');\r\n    this.media.className = 'photo photo-3rd';\r\n    const video = document.createElement('video');\r\n    video.controls = 'photo-picture';\r\n    video.style.width = ' inherit ';\r\n    video.style.height = 'inherit';\r\n    video.style.ObjectFit = 'cover';\r\n    video.style.borderRadius = '5px';\r\n    video.src = `./img/${this.mediaData.photographeName.split(' ')[0]}/${this.mediaData.video}`;\r\n\r\n    const footer = document.createElement('footer');\r\n    footer.className = 'photo-footer';\r\n\r\n    const affspan = document.createElement('span');\r\n    affspan.className = 'photo-footer__title';\r\n    affspan.innerText = this.mediaData.title;\r\n    footer.appendChild(affspan);\r\n\r\n    const affspan3 = document.createElement('i');\r\n    affspan3.className = 'fas fa-heart';\r\n    const nbrlikes = document.createTextNode(this.mediaData.likes);\r\n\r\n    const affspan1 = document.createElement('span');\r\n    affspan1.className = 'photo-footer__likes';\r\n    affspan1.append(nbrlikes, affspan3);\r\n    // affspan1.innerHTML = \"12 <i class='fas fa-heart'></i>\";//\r\n    footer.appendChild(affspan1);\r\n\r\n    const affspan2 = document.createElement('span');\r\n    affspan2.className = 'photo-footer__price';\r\n    affspan2.innerText = `${this.mediaData.price} €`;\r\n    footer.appendChild(affspan2);\r\n\r\n    this.media.appendChild(video);\r\n    this.media.appendChild(footer);\r\n\r\n    affspan3.addEventListener('click', () => {\r\n      this.mediaData.likes += 1;\r\n      nbrlikes.nodeValue = this.mediaData.likes;\r\n    });\r\n\r\n    return this.media;\r\n  }\r\n\r\n  htmlContent() {\r\n    return this.video1;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://fisheye/./js/VideoFactory.js?");

/***/ }),

/***/ "./js/mediaFactory.js":
/*!****************************!*\
  !*** ./js/mediaFactory.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MediaFactory)\n/* harmony export */ });\n/* harmony import */ var _ImageFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImageFactory */ \"./js/ImageFactory.js\");\n/* harmony import */ var _VideoFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VideoFactory */ \"./js/VideoFactory.js\");\n\r\n\r\n\r\nclass MediaFactory {\r\n  constructor(mediaType, data) {\r\n    if (mediaType === 'image') {\r\n      return new _ImageFactory__WEBPACK_IMPORTED_MODULE_0__.default(data);\r\n    }\r\n    if (mediaType === 'video') {\r\n      return new _VideoFactory__WEBPACK_IMPORTED_MODULE_1__.default(data);\r\n    }\r\n\r\n    throw new Error('Type de média non reconnu');\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://fisheye/./js/mediaFactory.js?");

/***/ }),

/***/ "./js/photographe.js":
/*!***************************!*\
  !*** ./js/photographe.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"affichageMedia\": () => (/* binding */ affichageMedia),\n/* harmony export */   \"loadMedia\": () => (/* binding */ loadMedia),\n/* harmony export */   \"lecturePhotographe\": () => (/* binding */ lecturePhotographe)\n/* harmony export */ });\n/* harmony import */ var _mediaFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mediaFactory */ \"./js/mediaFactory.js\");\n/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service */ \"./js/service.js\");\n/* eslint-disable no-shadow */\r\n/* eslint-disable no-console */\r\n\r\n\r\n\r\n\r\nconst params = new URLSearchParams(window.location.search);\r\nconst idphotographe = params.get('id');\r\nlet photographe = null;\r\n// eslint-disable-next-line no-console\r\nconsole.log(idphotographe);\r\n\r\nconst main = document.querySelector('.conteneur');\r\n\r\n// eslint-disable-next-line no-shadow\r\nfunction lienPhotographe(photographe) {\r\n  const lien = document.createElement('a');\r\n  lien.href = 'photographe.html';\r\n\r\n  const img = document.createElement('img');\r\n  img.src = `images/photographers/${photographe.portrait}`;\r\n  lien.appendChild(img);\r\n\r\n  return lien;\r\n}\r\n\r\nfunction tagPhotographe(photographe) {\r\n  const tag1 = document.createElement('nav');\r\n  tag1.classList.add('tag1');\r\n  const tag2 = document.createElement('ul');\r\n  tag2.classList.add('tag');\r\n  const { tags } = photographe;\r\n\r\n  // eslint-disable-next-line no-plusplus\r\n  for (let index = 0; index < tags.length; index++) {\r\n    const tag = tags[index];\r\n    const tagli = document.createElement('li');\r\n    tagli.classList.add('tagselect');\r\n    tagli.innerText = ` # ${tag}`;\r\n    tag2.appendChild(tagli);\r\n  }\r\n\r\n  tag1.appendChild(tag2);\r\n\r\n  return tag1;\r\n}\r\n\r\nfunction affichage(photographe) {\r\n  const fichePhotographe = document.querySelector('section');\r\n  fichePhotographe.classList.add('header_photographe');\r\n\r\n  const lien = lienPhotographe(photographe);\r\n  fichePhotographe.appendChild(lien);\r\n\r\n  const nom1 = document.createElement('h2');\r\n  nom1.innerText = photographe.name;\r\n  fichePhotographe.appendChild(nom1);\r\n\r\n  const lieux = document.createElement('p');\r\n  lieux.classList.add('localisation');\r\n  lieux.innerText = `${photographe.city}, ${photographe.country}`;\r\n  fichePhotographe.appendChild(lieux);\r\n\r\n  const descrip1 = document.createElement('p');\r\n  descrip1.classList.add('slogant');\r\n  descrip1.innerText = photographe.tagline;\r\n  fichePhotographe.appendChild(descrip1);\r\n\r\n  const coeur = document.createElement('i');\r\n  const totalikes = document.createElement('p');\r\n  const tarifs = document.createElement('p');\r\n  tarifs.classList.add('tarif');\r\n  totalikes.classList.add('likes');\r\n  coeur.className = 'fas fa-heart fa-lg';\r\n  tarifs.innerText = `${photographe.price} € / jour `;\r\n  totalikes.innerText = '200 ';\r\n\r\n  fichePhotographe.appendChild(tarifs);\r\n  tarifs.appendChild(totalikes);\r\n  totalikes.appendChild(coeur);\r\n  const tags = tagPhotographe(photographe);\r\n  fichePhotographe.appendChild(tags);\r\n\r\n  main.appendChild(fichePhotographe);\r\n\r\n  const engager = document.createElement('button');\r\n  engager.classList.add('container-profile__button');\r\n  engager.innerText = 'Engagez-moi';\r\n  fichePhotographe.appendChild(engager);\r\n}\r\n\r\nfunction trier() {\r\n  const fichePhotographe = document.querySelector('section');\r\n  fichePhotographe.classList.add('header_photographe');\r\n\r\n  const triage = document.createElement('div');\r\n  triage.classList.add('sort-by');\r\n  const texte1 = document.createElement('span');\r\n  texte1.innerText = 'Triez-par';\r\n  triage.appendChild(texte1);\r\n  const triPopul = document.createElement('button');\r\n  triPopul.classList.add('popularity-button');\r\n  triPopul.innerText = 'Popularité';\r\n  triage.appendChild(triPopul);\r\n\r\n  const derouleur = document.createElement('i');\r\n  derouleur.className = ('fas fa-chevron-down');\r\n  triPopul.appendChild(derouleur);\r\n  fichePhotographe.appendChild(triage);\r\n}\r\n// eslint-disable-next-line no-unused-vars\r\nfunction affichageMedia(media) {\r\n  const mediaType = media.image ? 'image' : 'video';\r\n  // eslint-disable-next-line no-param-reassign\r\n  media.photographeName = photographe.name;\r\n  const mediaFactory = new _mediaFactory__WEBPACK_IMPORTED_MODULE_0__.default(mediaType, media);\r\n  const contMedia = document.querySelector('.portfolio--photo-container');\r\n  contMedia.appendChild(mediaFactory.htmlContent());\r\n}\r\n\r\nasync function loadMedia() {\r\n  const photographeMedias = await (0,_service__WEBPACK_IMPORTED_MODULE_1__.getMedia)(idphotographe);\r\n  console.log('Media: ', photographeMedias);\r\n  // eslint-disable-next-line no-plusplus\r\n  for (let index = 0; index < photographeMedias.length; index++) {\r\n    const mediaphotographe = photographeMedias[index];\r\n    affichageMedia(mediaphotographe);\r\n  }\r\n}\r\n\r\nasync function lecturePhotographe() {\r\n  photographe = await (0,_service__WEBPACK_IMPORTED_MODULE_1__.getPhotographe)(idphotographe);\r\n  console.log('photographe: ', photographe);\r\n  affichage(photographe);\r\n  loadMedia();\r\n  trier();\r\n}\r\n\r\nlecturePhotographe();\r\n\n\n//# sourceURL=webpack://fisheye/./js/photographe.js?");

/***/ }),

/***/ "./js/service.js":
/*!***********************!*\
  !*** ./js/service.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"lecture\": () => (/* binding */ lecture),\n/* harmony export */   \"getPhotographes\": () => (/* binding */ getPhotographes),\n/* harmony export */   \"getPhotographe\": () => (/* binding */ getPhotographe),\n/* harmony export */   \"getMedia\": () => (/* binding */ getMedia)\n/* harmony export */ });\n/* eslint-disable no-console */\r\nconst lecture = async () => {\r\n  try {\r\n    const reponse = await fetch('../data.json');\r\n    const datas = await reponse.json();\r\n    console.log('donnees: ', datas);\r\n    return datas;\r\n  } catch (error) {\r\n    console.error(error);\r\n    return null;\r\n  }\r\n};\r\n\r\nconst getPhotographes = async () => {\r\n  const donnees = await lecture();\r\n  return donnees.photographers;\r\n};\r\n\r\nconst getPhotographe = async (id) => {\r\n  const photographers = await getPhotographes();\r\n  // eslint-disable-next-line eqeqeq\r\n  const photographe = photographers.find((photographe1) => photographe1.id == id);\r\n  return photographe;\r\n};\r\n\r\nconst getMedia = async (id) => {\r\n  const donnees = await lecture();\r\n  const medias = donnees.media;\r\n  // eslint-disable-next-line eqeqeq\r\n  return medias.filter((media) => media.photographerId == id);\r\n};\r\n\n\n//# sourceURL=webpack://fisheye/./js/service.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./js/photographe.js");
/******/ 	
/******/ })()
;