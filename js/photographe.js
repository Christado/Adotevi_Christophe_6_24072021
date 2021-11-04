/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
import MediaFactory from './mediaFactory';
import { getPhotographe, getMedia } from './service';
import sort from './sort';

const params = new URLSearchParams(window.location.search);
const idphotographe = params.get('id');
let photographe = null;
let photographeMedias = [];

const main = document.querySelector('.conteneur');
const totalikesText = document.createTextNode('');
function handleLikeChange() {
  const nbrlike = totalikesText.nodeValue;
  totalikesText.nodeValue = Number(nbrlike) + 1;
}

// affichage du portrait d'un photographe //
function lienPhotographe(data) {
  const lien = document.createElement('a');
  lien.href = 'photographe.html';

  const img = document.createElement('img');
  img.src = `images/photographers/${data.portrait}`;
  img.alt = data.alt;
  lien.appendChild(img);

  return lien;
}

// affichage des tags de chaque photographe //
function tagPhotographe(data) {
  const tag1 = document.createElement('nav');
  tag1.classList.add('tag1');
  const tag2 = document.createElement('ul');
  tag2.classList.add('tag');
  const { tags } = data;

  for (let index = 0; index < tags.length; index += 1) {
    const tag = tags[index];
    const tagli = document.createElement('li');
    tagli.classList.add('tagselect');
    tagli.innerText = ` # ${tag}`;
    tag2.appendChild(tagli);
  }

  tag1.appendChild(tag2);

  return tag1;
}
// affichage du modal de contact //
function showContactModal() {
  const contactModal = document.querySelector('.contactModall');
  contactModal.style.display = 'block';
}

function showBgmodal() {
  const bgmodal1 = document.querySelector('.bgrModal');
  bgmodal1.style.display = 'block';
}

export function affichage(data) {
  const fichePhotographe = document.querySelector('section');
  fichePhotographe.classList.add('header_photographe');

  const lien = lienPhotographe(data);
  fichePhotographe.appendChild(lien);

  const nom1 = document.createElement('h2');
  nom1.innerText = data.name;
  fichePhotographe.appendChild(nom1);

  const lieux = document.createElement('p');
  lieux.classList.add('localisation');
  lieux.innerText = `${data.city}, ${data.country}`;
  fichePhotographe.appendChild(lieux);

  const descrip1 = document.createElement('p');
  descrip1.classList.add('slogant');
  descrip1.innerText = data.tagline;
  fichePhotographe.appendChild(descrip1);

  const coeur = document.createElement('i');
  const totalikes = document.createElement('p');
  const tarifs = document.createElement('p');
  tarifs.classList.add('tarif');
  totalikes.classList.add('likes');
  coeur.className = 'fas fa-heart fa-lg';
  tarifs.innerText = `${data.price} € / jour `;

  fichePhotographe.appendChild(tarifs);
  tarifs.appendChild(totalikes);
  totalikes.append(totalikesText, coeur);
  const tags = tagPhotographe(data);
  fichePhotographe.appendChild(tags);

  main.appendChild(fichePhotographe);

  const engager = document.createElement('button');
  engager.classList.add('container-profile__button');
  engager.innerText = 'Contactez-moi';
  engager.addEventListener('click', () => showContactModal());
  engager.addEventListener('click', () => showBgmodal());
  fichePhotographe.appendChild(engager);
}

function affichagNom(data) {
  const fichePhotographe = document.querySelector('.conteneur');
  const pageModal1 = document.querySelector('.contactModall');
  const nom2 = document.querySelector('.contact_modal__body__title');
  nom2.innerHTML = `Contactez-moi <br> ${data.name} `;
  fichePhotographe.appendChild(pageModal1);
  pageModal1.appendChild(nom2);
}
// affichage media //
export function affichageMedia(media) {
  const mediaType = media.image ? 'image' : 'video';
  media.photographeName = photographe.name;
  const mediaFactory = new MediaFactory(mediaType, media, photographeMedias, handleLikeChange);
  const contMedia = document.querySelector('.portfolio--photo-container');
  contMedia.appendChild(mediaFactory.htmlContent());
}

function affichageMedias(medias) {
  const contMedia = document.querySelector('.portfolio--photo-container');
  contMedia.innerText = '';
  for (let index = 0; index < medias.length; index += 1) {
    const mediaphotographe = medias[index];
    affichageMedia(mediaphotographe);
  }
}
// triage sort by //
function trier() {
  const fichePhotographe = document.querySelector('section');
  fichePhotographe.classList.add('header_photographe');

  const triage = document.createElement('div');
  triage.classList.add('sort-by');
  const texte1 = document.createElement('span');
  texte1.innerText = 'Triez-par';
  triage.appendChild(texte1);
  const triSelect = document.createElement('select');

  const optionPopul = document.createElement('option');
  optionPopul.className = ('optselect1');
  optionPopul.value = 'populaire';
  optionPopul.selected = true;
  optionPopul.innerText = 'Popularité';
  const optionName = document.createElement('option');
  optionName.className = ('optselect2');
  optionName.value = 'Title';
  optionName.innerText = 'Titre';
  const optionDate = document.createElement('option');
  optionDate.className = ('optselect3');
  optionDate.value = 'date';
  optionDate.innerText = 'Date';
  triSelect.classList.add('popularity-button');
  triSelect.append(optionPopul, optionName, optionDate);
  triage.appendChild(triSelect);
  triSelect.addEventListener('change', (event) => {
    const medias = sort(photographeMedias, event.target.value);
    if (medias) { affichageMedias(medias); }
  });
  const derouleur = document.createElement('i');
  derouleur.className = ('fas fa-chevron-down');
  triSelect.appendChild(derouleur);
  fichePhotographe.appendChild(triage);
}

// Création de Modal //

export function creationModal() {
  const fichePhotographe = document.querySelector('.conteneur');
  const bgmodal = document.createElement('div');
  bgmodal.className = 'bgrModal';
  const pageModal = document.createElement('dialog');
  pageModal.className = 'contactModall';
  pageModal.setAttribute('role', 'dialog');
  pageModal.setAttribute('aria-labelledby', 'contact_modal__body__title');
  pageModal.ariaModal = 'true';
  pageModal.ariaHidden = 'true';
  pageModal.tabIndex = '-1';
  pageModal.innerHTML = `
        <div class="contact_modal__body">
            <h2 class="contact_modal__body__title"> Contactez-moi <br>  </h2>
            <button id="close_contact_modal" class="close_button" title="fermer la fenêtre" aria-label="close dialog" tabindex="-1">
                <i class="fas fa-times fa-3x" aria-hidden="true"></i>
            </button>     
        </div> 
        `;
  bgmodal.appendChild(pageModal);
  fichePhotographe.appendChild(bgmodal);
}

function createContactForm() {
  const ctcmodal = document.querySelector('.contact_modal__body');
  const contactForm = document.createElement('form');
  contactForm.className = 'contact_form';
  contactForm.method = ('method', 'post');
  contactForm.setAttribute = ('action', 'submit');

  ctcmodal.appendChild(contactForm);
}

function createFormFields() {
  const contactForm = document.querySelector('.contact_form');

  // Prenom
  const prenom = document.createElement('div');
  prenom.innerHTML = `
  <div class="fieldset">
      <label for="firstname"> Prenom </label> <br> 
      <input class="input_field" type="text" tabindex="-1" id="firstname">
      <span class="errorFirstName"></span>
  </div> 
  `;
  contactForm.appendChild(prenom);

  // Nom
  const nom = document.createElement('div');
  nom.innerHTML = `
 <div class="fieldset">
     <label for="lastname"> Nom </label> <br> 
     <input class="input_field" type="text" tabindex="-1" id="lastname">
     <span class="errorLastName"></span> 
 </div> 
 `;
  contactForm.appendChild(nom);

  // Email
  const email = document.createElement('div');
  email.innerHTML = `
  <div class="fieldset">
      <label for="email"> Email </label> <br> 
      <input class="input_field" type="text" tabindex="-1" id="email">
      <span class="errorEmail"></span> 
  </div> 
  `;
  contactForm.appendChild(email);

  // Message
  const message = document.createElement('div');
  message.innerHTML = `
  <div class="fieldset">
      <label for="message"> Message </label> <br> 
      <textarea class="input_fieldM" id="message" tabindex="-1" rows="5"></textarea>
      <span class="errorMessage"></span> 
  </div> 
  `;
  contactForm.appendChild(message);
}
// fermeture du modal  et récupération des données inscrits //
function closeBgmodal() {
  const bgmodal1 = document.querySelector('.bgrModal');
  bgmodal1.style.display = 'none';
}

function closeContactModal() {
  const contactModal = document.querySelector('.contactModall');
  const firstnameInput = document.getElementById('firstname');
  const lastnameInput = document.getElementById('lastname');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  console.log('prenom: ', firstnameInput.value);
  console.log('nom: ', lastnameInput.value);
  console.log('email: ', emailInput.value);
  console.log('message: ', messageInput.value);
  contactModal.style.display = 'none';
}

// Bouton du Modal
function createModalButton() {
  const modalBody = document.querySelector('.contact_modal__body');
  const modalButton = document.createElement('button');
  modalButton.className = 'button_contact_submit';
  modalButton.type = 'submit';
  modalButton.tabIndex = -1;
  modalButton.innerText = 'Envoyer';
  modalButton.addEventListener('click', () => { closeContactModal(); });
  modalButton.addEventListener('click', () => { closeBgmodal(); });
  modalBody.appendChild(modalButton);
}

// ecoute au clic pour Fermeture du modal //

function eventOnClose() {
  const closeButton = document.querySelector('.close_button');
  const contactModal = document.querySelector('.contactModall');
  closeButton.addEventListener('click', () => closeContactModal());
  closeButton.addEventListener('click', () => closeBgmodal());

  contactModal.addEventListener('keydown', (event) => {
    if (event.keyCode === 27) {
      closeContactModal();
      closeBgmodal();
      contactModal.focus();
    }
  });
}

export async function loadMedia() {
  photographeMedias = await getMedia(idphotographe);
  const sommeLikes = photographeMedias.reduce((count, media) => count + media.likes, 0);
  totalikesText.nodeValue = sommeLikes;
  affichageMedias(photographeMedias);
}

export async function lecturePhotographe() {
  photographe = await getPhotographe(idphotographe);
  affichage(photographe);
  affichagNom(photographe);
}

(function init() {
  lecturePhotographe();
  loadMedia();
  trier();
  creationModal();
  createContactForm();
  createFormFields();
  createModalButton();
  showContactModal();
  closeContactModal();
  eventOnClose();
}());
