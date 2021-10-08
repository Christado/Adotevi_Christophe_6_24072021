/* eslint-disable no-shadow */
/* eslint-disable no-console */

import MediaFactory from './mediaFactory';
import { getPhotographe, getMedia } from './service';

const params = new URLSearchParams(window.location.search);
const idphotographe = params.get('id');
let photographe = null;
// eslint-disable-next-line no-console
console.log(idphotographe);

const main = document.querySelector('.conteneur');

// eslint-disable-next-line no-shadow
function lienPhotographe(photographe) {
  const lien = document.createElement('a');
  lien.href = 'photographe.html';

  const img = document.createElement('img');
  img.src = `images/photographers/${photographe.portrait}`;
  lien.appendChild(img);

  return lien;
}

function tagPhotographe(photographe) {
  const tag1 = document.createElement('nav');
  tag1.classList.add('tag1');
  const tag2 = document.createElement('ul');
  tag2.classList.add('tag');
  const { tags } = photographe;

  // eslint-disable-next-line no-plusplus
  for (let index = 0; index < tags.length; index++) {
    const tag = tags[index];
    const tagli = document.createElement('li');
    tagli.classList.add('tagselect');
    tagli.innerText = ` # ${tag}`;
    tag2.appendChild(tagli);
  }

  tag1.appendChild(tag2);

  return tag1;
}

export function affichage(photographe) {
  const fichePhotographe = document.querySelector('section');
  fichePhotographe.classList.add('header_photographe');

  const lien = lienPhotographe(photographe);
  fichePhotographe.appendChild(lien);

  const nom1 = document.createElement('h2');
  nom1.innerText = photographe.name;
  fichePhotographe.appendChild(nom1);

  const lieux = document.createElement('p');
  lieux.classList.add('localisation');
  lieux.innerText = `${photographe.city}, ${photographe.country}`;
  fichePhotographe.appendChild(lieux);

  const descrip1 = document.createElement('p');
  descrip1.classList.add('slogant');
  descrip1.innerText = photographe.tagline;
  fichePhotographe.appendChild(descrip1);

  const coeur = document.createElement('i');
  const totalikes = document.createElement('p');
  const tarifs = document.createElement('p');
  tarifs.classList.add('tarif');
  totalikes.classList.add('likes');
  coeur.className = 'fas fa-heart fa-lg';
  tarifs.innerText = `${photographe.price} € / jour `;
  totalikes.innerText = '200 ';

  fichePhotographe.appendChild(tarifs);
  tarifs.appendChild(totalikes);
  totalikes.appendChild(coeur);
  const tags = tagPhotographe(photographe);
  fichePhotographe.appendChild(tags);

  main.appendChild(fichePhotographe);

  const engager = document.createElement('button');
  engager.classList.add('container-profile__button');
  engager.innerText = 'Engagez-moi';
  fichePhotographe.appendChild(engager);
}

function trier() {
  const fichePhotographe = document.querySelector('section');
  fichePhotographe.classList.add('header_photographe');

  const triage = document.createElement('div');
  triage.classList.add('sort-by');
  const texte1 = document.createElement('span');
  texte1.innerText = 'Triez-par';
  triage.appendChild(texte1);
  const triPopul = document.createElement('button');
  triPopul.classList.add('popularity-button');
  triPopul.innerText = 'Popularité';
  triage.appendChild(triPopul);

  const derouleur = document.createElement('i');
  derouleur.className = ('fas fa-chevron-down');
  triPopul.appendChild(derouleur);
  fichePhotographe.appendChild(triage);
}

function creationModal() {
  const fichePhotographe = document.querySelector('.conteneur');

  const pageModal = document.createElement('dialog');
  pageModal.className = 'contactModall';
  pageModal.setAttribute('role', 'dialog');
  pageModal.setAttribute('aria-labelledby', 'contact_modal__body__title');
  pageModal.ariaModal = 'true';
  pageModal.ariaHidden = 'true';
  pageModal.tabIndex = '-1';
  pageModal.innerHTML = `
        <div class="contact_modal__body">
            <h2 class="contact_modal__body__title"> Contactez-moi <br> </h2>
            <button id="close_contact_modal" class="close_button" title="fermer la fenêtre" aria-label="close dialog" tabindex="-1">
                <i class="fas fa-times fa-3x" aria-hidden="true"></i>
            </button>     
        </div> 
        `;
  fichePhotographe.appendChild(pageModal);
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
  </div> 
  `;
  contactForm.appendChild(prenom);

  // Nom
  const nom = document.createElement('div');
  nom.innerHTML = `
 <div class="fieldset">
     <label for="lastname"> Nom </label> <br> 
     <input class="input_field" type="text" tabindex="-1" id="lastname">
 </div> 
 `;
  contactForm.appendChild(nom);

  // Email
  const email = document.createElement('div');
  email.innerHTML = `
  <div class="fieldset">
      <label for="email"> Email </label> <br> 
      <input class="input_field" type="text" tabindex="-1" id="email">
  </div> 
  `;
  contactForm.appendChild(email);

  // Message
  const message = document.createElement('div');
  message.innerHTML = `
  <div class="fieldset">
      <label for="message"> Message </label> <br> 
      <textarea class="input_field" id="message" tabindex="-1" rows="5"></textarea>
  </div> 
  `;
  contactForm.appendChild(message);
}

// Bouton d'envoi//

function createModalButton() {
  const modalBody = document.querySelector('.contact_modal__body');
  const modalButton = document.createElement('button');
  modalButton.innerHTML = `
  <button class="button_contact submit_button" type="submit" tabindex="-1">Envoyer</button>
  `;

  modalBody.appendChild(modalButton);
}

// Ouverture et Fermeture du modal //

function showContactModal() {
  const contactModal = document.querySelector('.contactModall');
  contactModal.style.display = 'block';
}

function eventOnOpen() {
  const OpenButton = document.querySelector('.container-profile__button');
  OpenButton.addEventListener('click', () => showContactModal());
}

function closeContactModal() {
  const contactModal = document.querySelector('.contactModall');
  contactModal.style.display = 'none';
}

function eventOnClose() {
  const closeButton = document.querySelector('.close_button');
  closeButton.addEventListener('click', () => closeContactModal());
}
// eslint-disable-next-line no-unused-vars
export function affichageMedia(media) {
  const mediaType = media.image ? 'image' : 'video';
  // eslint-disable-next-line no-param-reassign
  media.photographeName = photographe.name;
  const mediaFactory = new MediaFactory(mediaType, media);
  const contMedia = document.querySelector('.portfolio--photo-container');
  contMedia.appendChild(mediaFactory.htmlContent());
}

export async function loadMedia() {
  const photographeMedias = await getMedia(idphotographe);
  console.log('Media: ', photographeMedias);
  // eslint-disable-next-line no-plusplus
  for (let index = 0; index < photographeMedias.length; index++) {
    const mediaphotographe = photographeMedias[index];
    affichageMedia(mediaphotographe);
  }
}

export async function lecturePhotographe() {
  photographe = await getPhotographe(idphotographe);
  console.log('photographe: ', photographe);
  affichage(photographe);
  loadMedia();
  trier();
  creationModal();
  createContactForm();
  createFormFields();
  createModalButton();
  showContactModal();
  eventOnOpen();
  closeContactModal();
  eventOnClose();
}

lecturePhotographe();
