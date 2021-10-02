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

function affichage(photographe) {
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
}

lecturePhotographe();
