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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ImageFactory)\n/* harmony export */ });\n/* harmony import */ var _lightBox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lightBox */ \"./js/lightBox.js\");\n\r\n\r\nclass ImageFactory {\r\n  constructor(data, medias, onLikeChange) {\r\n    this.image1 = this.fabriqueImage(data);\r\n    this.medias = medias;\r\n    this.onLikeChange = onLikeChange;\r\n  }\r\n\r\n  // récupération et affichage des médias images, titres, likes et prix //\r\n\r\n  fabriqueImage(data) {\r\n    this.mediaData = data;\r\n    const figcont = document.createElement('section');\r\n    this.media3 = document.createElement('figure');\r\n    this.media3.className = 'photo photo-3rd';\r\n    const media = document.createElement('img');\r\n    media.className = 'photo-picture';\r\n    media.src = `./img/${this.mediaData.photographeName.split(' ')[0]}/${this.mediaData.image}`;\r\n    media.alt = this.mediaData.alt;\r\n    const footer = document.createElement('footer');\r\n    footer.className = 'photo-footer';\r\n\r\n    const affspan = document.createElement('span');\r\n    affspan.className = 'photo-footer__title';\r\n    affspan.innerText = this.mediaData.title;\r\n    footer.appendChild(affspan);\r\n\r\n    const affspan3 = document.createElement('i');\r\n    affspan3.className = 'fas fa-heart';\r\n    const nbrlikes = document.createTextNode(this.mediaData.likes);\r\n\r\n    const affspan1 = document.createElement('span');\r\n    affspan1.className = 'photo-footer__likes';\r\n    affspan1.append(nbrlikes, affspan3);\r\n    footer.appendChild(affspan1);\r\n\r\n    const affspan2 = document.createElement('span');\r\n    affspan2.className = 'photo-footer__price';\r\n    affspan2.innerText = `${this.mediaData.price} €`;\r\n    footer.appendChild(affspan2);\r\n\r\n    this.media3.appendChild(media);\r\n    this.media3.appendChild(footer);\r\n    figcont.appendChild(this.media3);\r\n\r\n    /* affspan3.addEventListener('click', () => {\r\n      this.mediaData.likes += 1;\r\n      nbrlikes.nodeValue = this.mediaData.likes;\r\n      this.onLikeChange();\r\n    }); */\r\n\r\n    affspan3.addEventListener('click', () => {\r\n      if (affspan1 === this.mediaData.likes) {\r\n        this.mediaData.likes += 1;\r\n        nbrlikes.nodeValue = this.mediaData.likes;\r\n        this.onLikeChange();\r\n      } else {\r\n        this.mediaData.likes -= 1;\r\n        nbrlikes.nodeValue = this.mediaData.likes;\r\n        this.onLikeChange();\r\n      }\r\n    });\r\n\r\n    media.addEventListener('click', () => {\r\n      (0,_lightBox__WEBPACK_IMPORTED_MODULE_0__.default)(this.mediaData, this.medias);\r\n    });\r\n    return this.media3;\r\n  }\r\n\r\n  htmlContent() {\r\n    return this.image1;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://fisheye/./js/ImageFactory.js?");

/***/ }),

/***/ "./js/VideoFactory.js":
/*!****************************!*\
  !*** ./js/VideoFactory.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ VideoFactory)\n/* harmony export */ });\n/* harmony import */ var _lightBox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lightBox */ \"./js/lightBox.js\");\n\r\n\r\nclass VideoFactory {\r\n  constructor(data, medias, onLikeChange) {\r\n    this.video1 = this.fabriqueVideo(data);\r\n    this.medias = medias;\r\n    this.onLikeChange = onLikeChange;\r\n  }\r\n\r\n  // récupération et affichage des médias vidéos, titres, likes et prix //\r\n\r\n  fabriqueVideo(data) {\r\n    this.mediaData = data;\r\n    this.media = document.createElement('figure');\r\n    this.media.className = 'photo photo-3rd';\r\n    const video = document.createElement('video');\r\n    video.controls = 'photo-picture';\r\n    video.style.width = ' inherit ';\r\n    video.style.height = 'inherit';\r\n    video.style.ObjectFit = 'cover';\r\n    video.style.borderRadius = '5px';\r\n    video.src = `./img/${this.mediaData.photographeName.split(' ')[0]}/${this.mediaData.video}`;\r\n    video.alt = this.mediaData.alt;\r\n\r\n    const footer = document.createElement('footer');\r\n    footer.className = 'photo-footer';\r\n\r\n    const affspan = document.createElement('span');\r\n    affspan.className = 'photo-footer__title';\r\n    affspan.innerText = this.mediaData.title;\r\n    footer.appendChild(affspan);\r\n\r\n    const affspan3 = document.createElement('i');\r\n    affspan3.className = 'fas fa-heart';\r\n    const nbrlikes = document.createTextNode(this.mediaData.likes);\r\n\r\n    const affspan1 = document.createElement('span');\r\n    affspan1.className = 'photo-footer__likes';\r\n    affspan1.append(nbrlikes, affspan3);\r\n    footer.appendChild(affspan1);\r\n\r\n    const affspan2 = document.createElement('span');\r\n    affspan2.className = 'photo-footer__price';\r\n    affspan2.innerText = `${this.mediaData.price} €`;\r\n    footer.appendChild(affspan2);\r\n\r\n    this.media.appendChild(video);\r\n    this.media.appendChild(footer);\r\n\r\n    affspan3.addEventListener('click', () => {\r\n      this.mediaData.likes += 1;\r\n      nbrlikes.nodeValue = this.mediaData.likes;\r\n      this.onLikeChange();\r\n    });\r\n\r\n    video.addEventListener('click', () => {\r\n      (0,_lightBox__WEBPACK_IMPORTED_MODULE_0__.default)(this.mediaData, this.medias);\r\n    });\r\n\r\n    return this.media;\r\n  }\r\n\r\n  htmlContent() {\r\n    return this.video1;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://fisheye/./js/VideoFactory.js?");

/***/ }),

/***/ "./js/lightBox.js":
/*!************************!*\
  !*** ./js/lightBox.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// les constantes //\r\n\r\nconst lightbox = document.querySelector('.modal');\r\nconst closeLightbox = document.querySelector('.closeIcone');\r\nconst image = document.querySelector('.mediaContent.image');\r\nconst titreImage = document.querySelector('.titreImg');\r\nconst video = document.querySelector('.mediaContent.video');\r\nconst prevButton = document.querySelector('.prev');\r\nconst nextButton = document.querySelector('.next');\r\nlet selectedMediaIndex = 0;\r\nlet medias = [];\r\n\r\n// affichage du média selectionné, préc et suiv //\r\nfunction showSelectedMedia(media) {\r\n  if (media.image) {\r\n    video.style.display = 'none';\r\n    image.src = `./img/${media.photographeName.split(' ')[0]}/${media.image}`;\r\n    image.alt = media.alt;\r\n    titreImage.innerText = media.title;\r\n    titreImage.alt = media.title;\r\n    image.style.display = 'block';\r\n  } else {\r\n    image.style.display = 'none';\r\n    video.src = `./img/${media.photographeName.split(' ')[0]}/${media.video}`;\r\n    video.alt = media.alt;\r\n    titreImage.innerText = media.title;\r\n    titreImage.alt = media.title;\r\n    video.style.display = 'block';\r\n  }\r\n}\r\n\r\nfunction next(event) {\r\n  event.preventDefault();\r\n  selectedMediaIndex += 1;\r\n  if (selectedMediaIndex >= medias.length) {\r\n    selectedMediaIndex = 0;\r\n  }\r\n  const selectedMedia = medias[selectedMediaIndex];\r\n  showSelectedMedia(selectedMedia);\r\n}\r\n\r\nfunction previous(event) {\r\n  event.preventDefault();\r\n  selectedMediaIndex -= 1;\r\n  if (selectedMediaIndex < 0) {\r\n    selectedMediaIndex = medias.length - 1;\r\n  }\r\n  const selectedMedia = medias[selectedMediaIndex];\r\n  showSelectedMedia(selectedMedia);\r\n}\r\n\r\n// fermeture de le lightbox //\r\n\r\ncloseLightbox.addEventListener('click', (event) => {\r\n  event.preventDefault();\r\n  lightbox.style.display = 'none';\r\n});\r\n\r\nlightbox.addEventListener('keydown', (event) => {\r\n  if (event.keyCode === 27) {\r\n    lightbox.style.display = 'none';\r\n    lightbox.focus();\r\n  }\r\n});\r\n\r\n// code navigation avec touche du clavier //\r\nlightbox.addEventListener('keydown', (event) => {\r\n  if (event.keyCode === 37) {\r\n    previous(event);\r\n    prevButton.focus();\r\n  }\r\n\r\n  if (event.keyCode === 39) {\r\n    next(event);\r\n    nextButton.focus();\r\n  }\r\n});\r\n\r\nprevButton.addEventListener('click', previous);\r\nnextButton.addEventListener('click', next);\r\n\r\n// recupération des médias //\r\n\r\nconst openLightBox = (media, mediaList) => {\r\n  lightbox.style.display = 'flex';\r\n  showSelectedMedia(media);\r\n  selectedMediaIndex = mediaList.indexOf(media);\r\n  medias = mediaList;\r\n  prevButton.focus();\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (openLightBox);\r\n\n\n//# sourceURL=webpack://fisheye/./js/lightBox.js?");

/***/ }),

/***/ "./js/mediaFactory.js":
/*!****************************!*\
  !*** ./js/mediaFactory.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MediaFactory)\n/* harmony export */ });\n/* harmony import */ var _ImageFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImageFactory */ \"./js/ImageFactory.js\");\n/* harmony import */ var _VideoFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VideoFactory */ \"./js/VideoFactory.js\");\n\r\n\r\n\r\nclass MediaFactory {\r\n  constructor(mediaType, data, medias, onLikeChange) {\r\n    if (mediaType === 'image') {\r\n      return new _ImageFactory__WEBPACK_IMPORTED_MODULE_0__.default(data, medias, onLikeChange);\r\n    }\r\n    if (mediaType === 'video') {\r\n      return new _VideoFactory__WEBPACK_IMPORTED_MODULE_1__.default(data, medias, onLikeChange);\r\n    }\r\n\r\n    throw new Error('Type de média non reconnu');\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://fisheye/./js/mediaFactory.js?");

/***/ }),

/***/ "./js/photographe.js":
/*!***************************!*\
  !*** ./js/photographe.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"affichage\": () => (/* binding */ affichage),\n/* harmony export */   \"affichageMedia\": () => (/* binding */ affichageMedia),\n/* harmony export */   \"creationModal\": () => (/* binding */ creationModal),\n/* harmony export */   \"loadMedia\": () => (/* binding */ loadMedia),\n/* harmony export */   \"lecturePhotographe\": () => (/* binding */ lecturePhotographe)\n/* harmony export */ });\n/* harmony import */ var _mediaFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mediaFactory */ \"./js/mediaFactory.js\");\n/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service */ \"./js/service.js\");\n/* harmony import */ var _sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sort */ \"./js/sort.js\");\n/* eslint-disable no-param-reassign */\r\n/* eslint-disable no-console */\r\n\r\n\r\n\r\n\r\nconst params = new URLSearchParams(window.location.search);\r\nconst idphotographe = params.get('id');\r\nlet photographe = null;\r\nlet photographeMedias = [];\r\n\r\nconst main = document.querySelector('.conteneur');\r\nconst totalikesText = document.createTextNode('');\r\nfunction handleLikeChange() {\r\n  const nbrlike = totalikesText.nodeValue;\r\n  totalikesText.nodeValue = Number(nbrlike) + 1;\r\n}\r\n\r\n// affichage du portrait d'un photographe //\r\nfunction lienPhotographe(data) {\r\n  const lien = document.createElement('a');\r\n  lien.href = 'photographe.html';\r\n\r\n  const img = document.createElement('img');\r\n  img.src = `images/photographers/${data.portrait}`;\r\n  img.alt = data.alt;\r\n  lien.appendChild(img);\r\n\r\n  return lien;\r\n}\r\n\r\n// affichage des tags de chaque photographe //\r\nfunction tagPhotographe(data) {\r\n  const tag1 = document.createElement('nav');\r\n  tag1.classList.add('tag1');\r\n  const tag2 = document.createElement('ul');\r\n  tag2.classList.add('tag');\r\n  const { tags } = data;\r\n\r\n  for (let index = 0; index < tags.length; index += 1) {\r\n    const tag = tags[index];\r\n    const tagli = document.createElement('li');\r\n    tagli.classList.add('tagselect');\r\n    tagli.innerText = ` # ${tag}`;\r\n    tag2.appendChild(tagli);\r\n  }\r\n\r\n  tag1.appendChild(tag2);\r\n\r\n  return tag1;\r\n}\r\n// affichage du modal de contact //\r\nfunction showContactModal() {\r\n  const contactModal = document.querySelector('.contactModall');\r\n  contactModal.style.display = 'block';\r\n}\r\n\r\nfunction showBgmodal() {\r\n  const bgmodal1 = document.querySelector('.bgrModal');\r\n  bgmodal1.style.display = 'block';\r\n}\r\n\r\nfunction affichage(data) {\r\n  const fichePhotographe = document.querySelector('section');\r\n  fichePhotographe.classList.add('header_photographe');\r\n\r\n  const lien = lienPhotographe(data);\r\n  fichePhotographe.appendChild(lien);\r\n\r\n  const nom1 = document.createElement('h2');\r\n  nom1.innerText = data.name;\r\n  fichePhotographe.appendChild(nom1);\r\n\r\n  const lieux = document.createElement('p');\r\n  lieux.classList.add('localisation');\r\n  lieux.innerText = `${data.city}, ${data.country}`;\r\n  fichePhotographe.appendChild(lieux);\r\n\r\n  const descrip1 = document.createElement('p');\r\n  descrip1.classList.add('slogant');\r\n  descrip1.innerText = data.tagline;\r\n  fichePhotographe.appendChild(descrip1);\r\n\r\n  const coeur = document.createElement('i');\r\n  const totalikes = document.createElement('p');\r\n  const tarifs = document.createElement('p');\r\n  tarifs.classList.add('tarif');\r\n  totalikes.classList.add('likes');\r\n  coeur.className = 'fas fa-heart fa-lg';\r\n  tarifs.innerText = `${data.price} € / jour `;\r\n\r\n  fichePhotographe.appendChild(tarifs);\r\n  tarifs.appendChild(totalikes);\r\n  totalikes.append(totalikesText, coeur);\r\n  const tags = tagPhotographe(data);\r\n  fichePhotographe.appendChild(tags);\r\n\r\n  main.appendChild(fichePhotographe);\r\n\r\n  const engager = document.createElement('button');\r\n  engager.classList.add('container-profile__button');\r\n  engager.innerText = 'Contactez-moi';\r\n  engager.addEventListener('click', () => showContactModal());\r\n  engager.addEventListener('click', () => showBgmodal());\r\n  fichePhotographe.appendChild(engager);\r\n}\r\n\r\nfunction affichagNom(data) {\r\n  const fichePhotographe = document.querySelector('.conteneur');\r\n  const pageModal1 = document.querySelector('.contactModall');\r\n  const nom2 = document.querySelector('.contact_modal__body__title');\r\n  nom2.innerHTML = `Contactez-moi <br> ${data.name} `;\r\n  fichePhotographe.appendChild(pageModal1);\r\n  pageModal1.appendChild(nom2);\r\n}\r\n// affichage media //\r\nfunction affichageMedia(media) {\r\n  const mediaType = media.image ? 'image' : 'video';\r\n  media.photographeName = photographe.name;\r\n  const mediaFactory = new _mediaFactory__WEBPACK_IMPORTED_MODULE_0__.default(mediaType, media, photographeMedias, handleLikeChange);\r\n  const contMedia = document.querySelector('.portfolio--photo-container');\r\n  contMedia.appendChild(mediaFactory.htmlContent());\r\n}\r\n\r\nfunction affichageMedias(medias) {\r\n  const contMedia = document.querySelector('.portfolio--photo-container');\r\n  contMedia.innerText = '';\r\n  for (let index = 0; index < medias.length; index += 1) {\r\n    const mediaphotographe = medias[index];\r\n    affichageMedia(mediaphotographe);\r\n  }\r\n}\r\n// triage sort by //\r\nfunction trier() {\r\n  const fichePhotographe = document.querySelector('section');\r\n  fichePhotographe.classList.add('header_photographe');\r\n\r\n  const triage = document.createElement('div');\r\n  triage.classList.add('sort-by');\r\n  const texte1 = document.createElement('span');\r\n  texte1.innerText = 'Triez-par';\r\n  triage.appendChild(texte1);\r\n  const triSelect = document.createElement('select');\r\n\r\n  const optionPopul = document.createElement('option');\r\n  optionPopul.className = ('optselect1');\r\n  optionPopul.value = 'populaire';\r\n  optionPopul.selected = true;\r\n  optionPopul.innerText = 'Popularité';\r\n  const optionName = document.createElement('option');\r\n  optionName.className = ('optselect2');\r\n  optionName.value = 'Title';\r\n  optionName.innerText = 'Titre';\r\n  const optionDate = document.createElement('option');\r\n  optionDate.className = ('optselect3');\r\n  optionDate.value = 'date';\r\n  optionDate.innerText = 'Date';\r\n  triSelect.classList.add('popularity-button');\r\n  triSelect.append(optionPopul, optionName, optionDate);\r\n  triage.appendChild(triSelect);\r\n  triSelect.addEventListener('change', (event) => {\r\n    const medias = (0,_sort__WEBPACK_IMPORTED_MODULE_2__.default)(photographeMedias, event.target.value);\r\n    if (medias) { affichageMedias(medias); }\r\n  });\r\n  const derouleur = document.createElement('i');\r\n  derouleur.className = ('fas fa-chevron-down');\r\n  triSelect.appendChild(derouleur);\r\n  fichePhotographe.appendChild(triage);\r\n}\r\n\r\n// Création de Modal //\r\n\r\nfunction creationModal() {\r\n  const fichePhotographe = document.querySelector('.conteneur');\r\n  const bgmodal = document.createElement('div');\r\n  bgmodal.className = 'bgrModal';\r\n  const pageModal = document.createElement('dialog');\r\n  pageModal.className = 'contactModall';\r\n  pageModal.setAttribute('role', 'dialog');\r\n  pageModal.setAttribute('aria-labelledby', 'contact_modal__body__title');\r\n  pageModal.ariaModal = 'true';\r\n  pageModal.ariaHidden = 'true';\r\n  pageModal.tabIndex = '-1';\r\n  pageModal.innerHTML = `\r\n        <div class=\"contact_modal__body\">\r\n            <h2 class=\"contact_modal__body__title\"> Contactez-moi <br>  </h2>\r\n            <button id=\"close_contact_modal\" class=\"close_button\" title=\"fermer la fenêtre\" aria-label=\"close dialog\" tabindex=\"-1\">\r\n                <i class=\"fas fa-times fa-3x\" aria-hidden=\"true\"></i>\r\n            </button>     \r\n        </div> \r\n        `;\r\n  bgmodal.appendChild(pageModal);\r\n  fichePhotographe.appendChild(bgmodal);\r\n}\r\n\r\nfunction createContactForm() {\r\n  const ctcmodal = document.querySelector('.contact_modal__body');\r\n  const contactForm = document.createElement('form');\r\n  contactForm.className = 'contact_form';\r\n  contactForm.method = ('method', 'post');\r\n  contactForm.setAttribute = ('action', 'submit');\r\n\r\n  ctcmodal.appendChild(contactForm);\r\n}\r\n\r\nfunction createFormFields() {\r\n  const contactForm = document.querySelector('.contact_form');\r\n\r\n  // Prenom\r\n  const prenom = document.createElement('div');\r\n  prenom.innerHTML = `\r\n  <div class=\"fieldset\">\r\n      <label for=\"firstname\"> Prenom </label> <br> \r\n      <input class=\"input_field\" type=\"text\" tabindex=\"-1\" id=\"firstname\">\r\n      <span class=\"errorFirstName\"></span>\r\n  </div> \r\n  `;\r\n  contactForm.appendChild(prenom);\r\n\r\n  // Nom\r\n  const nom = document.createElement('div');\r\n  nom.innerHTML = `\r\n <div class=\"fieldset\">\r\n     <label for=\"lastname\"> Nom </label> <br> \r\n     <input class=\"input_field\" type=\"text\" tabindex=\"-1\" id=\"lastname\">\r\n     <span class=\"errorLastName\"></span> \r\n </div> \r\n `;\r\n  contactForm.appendChild(nom);\r\n\r\n  // Email\r\n  const email = document.createElement('div');\r\n  email.innerHTML = `\r\n  <div class=\"fieldset\">\r\n      <label for=\"email\"> Email </label> <br> \r\n      <input class=\"input_field\" type=\"text\" tabindex=\"-1\" id=\"email\">\r\n      <span class=\"errorEmail\"></span> \r\n  </div> \r\n  `;\r\n  contactForm.appendChild(email);\r\n\r\n  // Message\r\n  const message = document.createElement('div');\r\n  message.innerHTML = `\r\n  <div class=\"fieldset\">\r\n      <label for=\"message\"> Message </label> <br> \r\n      <textarea class=\"input_fieldM\" id=\"message\" tabindex=\"-1\" rows=\"5\"></textarea>\r\n      <span class=\"errorMessage\"></span> \r\n  </div> \r\n  `;\r\n  contactForm.appendChild(message);\r\n}\r\n// fermeture du modal  et récupération des données inscrits //\r\nfunction closeBgmodal() {\r\n  const bgmodal1 = document.querySelector('.bgrModal');\r\n  bgmodal1.style.display = 'none';\r\n}\r\n\r\nfunction closeContactModal() {\r\n  const contactModal = document.querySelector('.contactModall');\r\n  const firstnameInput = document.getElementById('firstname');\r\n  const lastnameInput = document.getElementById('lastname');\r\n  const emailInput = document.getElementById('email');\r\n  const messageInput = document.getElementById('message');\r\n  console.log('prenom: ', firstnameInput.value);\r\n  console.log('nom: ', lastnameInput.value);\r\n  console.log('email: ', emailInput.value);\r\n  console.log('message: ', messageInput.value);\r\n  contactModal.style.display = 'none';\r\n}\r\n\r\n// Bouton du Modal\r\nfunction createModalButton() {\r\n  const modalBody = document.querySelector('.contact_modal__body');\r\n  const modalButton = document.createElement('button');\r\n  modalButton.className = 'button_contact_submit';\r\n  modalButton.type = 'submit';\r\n  modalButton.tabIndex = -1;\r\n  modalButton.innerText = 'Envoyer';\r\n  modalButton.addEventListener('click', () => { closeContactModal(); });\r\n  modalButton.addEventListener('click', () => { closeBgmodal(); });\r\n  modalBody.appendChild(modalButton);\r\n}\r\n\r\n// ecoute au clic pour Fermeture du modal //\r\n\r\nfunction eventOnClose() {\r\n  const closeButton = document.querySelector('.close_button');\r\n  const contactModal = document.querySelector('.contactModall');\r\n  closeButton.addEventListener('click', () => closeContactModal());\r\n  closeButton.addEventListener('click', () => closeBgmodal());\r\n\r\n  contactModal.addEventListener('keydown', (event) => {\r\n    if (event.keyCode === 27) {\r\n      closeContactModal();\r\n      closeBgmodal();\r\n      contactModal.focus();\r\n    }\r\n  });\r\n}\r\n\r\nasync function loadMedia() {\r\n  photographeMedias = await (0,_service__WEBPACK_IMPORTED_MODULE_1__.getMedia)(idphotographe);\r\n  const sommeLikes = photographeMedias.reduce((count, media) => count + media.likes, 0);\r\n  totalikesText.nodeValue = sommeLikes;\r\n  affichageMedias(photographeMedias);\r\n}\r\n\r\nasync function lecturePhotographe() {\r\n  photographe = await (0,_service__WEBPACK_IMPORTED_MODULE_1__.getPhotographe)(idphotographe);\r\n  affichage(photographe);\r\n  affichagNom(photographe);\r\n}\r\n\r\n(function init() {\r\n  lecturePhotographe();\r\n  loadMedia();\r\n  trier();\r\n  creationModal();\r\n  createContactForm();\r\n  createFormFields();\r\n  createModalButton();\r\n  showContactModal();\r\n  closeContactModal();\r\n  eventOnClose();\r\n}());\r\n\n\n//# sourceURL=webpack://fisheye/./js/photographe.js?");

/***/ }),

/***/ "./js/service.js":
/*!***********************!*\
  !*** ./js/service.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"lecture\": () => (/* binding */ lecture),\n/* harmony export */   \"getPhotographes\": () => (/* binding */ getPhotographes),\n/* harmony export */   \"getPhotographe\": () => (/* binding */ getPhotographe),\n/* harmony export */   \"getMedia\": () => (/* binding */ getMedia)\n/* harmony export */ });\n/* eslint-disable no-console */\r\nconst lecture = async () => {\r\n  try {\r\n    const reponse = await fetch('../data.json');\r\n    const datas = await reponse.json();\r\n    console.log('donnees: ', datas);\r\n    return datas;\r\n  } catch (error) {\r\n    console.error(error);\r\n    return null;\r\n  }\r\n};\r\n\r\nconst getPhotographes = async () => {\r\n  const donnees = await lecture();\r\n  return donnees.photographers;\r\n};\r\n\r\nconst getPhotographe = async (id) => {\r\n  const photographers = await getPhotographes();\r\n\r\n  const photographe = photographers.find((photographe1) => photographe1.id === Number(id));\r\n  return photographe;\r\n};\r\n\r\nconst getMedia = async (id) => {\r\n  const donnees = await lecture();\r\n  const medias = donnees.media;\r\n  return medias.filter((media) => media.photographerId === Number(id));\r\n};\r\n\n\n//# sourceURL=webpack://fisheye/./js/service.js?");

/***/ }),

/***/ "./js/sort.js":
/*!********************!*\
  !*** ./js/sort.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction sortByPopularity(medias) {\r\n  const sortedMedias = medias.sort((media1, media2) => {\r\n    if (media1.likes >= media2.likes) {\r\n      return -1;\r\n    }\r\n    return 1;\r\n  });\r\n  return sortedMedias;\r\n}\r\n\r\nfunction sortByDate(medias) {\r\n  const sortedMedias = medias.sort((media1, media2) => {\r\n    if (new Date(media1.date) >= new Date(media2.date)) {\r\n      return -1;\r\n    }\r\n    return 1;\r\n  });\r\n  return sortedMedias;\r\n}\r\n\r\nfunction sortByTitle(medias) {\r\n  const sortedMedias = medias.sort((media1, media2) => {\r\n    if (media1.title >= media2.title) {\r\n      return -1;\r\n    }\r\n    return 1;\r\n  });\r\n  return sortedMedias;\r\n}\r\n\r\nconst sort = (medias, tag) => {\r\n  if (tag === 'populaire') {\r\n    return sortByPopularity(medias);\r\n  }\r\n\r\n  if (tag === 'date') {\r\n    return sortByDate(medias);\r\n  }\r\n\r\n  if (tag === 'Title') {\r\n    return sortByTitle(medias);\r\n  }\r\n  return [];\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sort);\r\n\n\n//# sourceURL=webpack://fisheye/./js/sort.js?");

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