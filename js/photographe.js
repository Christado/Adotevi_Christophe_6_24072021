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

  const tarifs = document.createElement('p');
  tarifs.classList.add('tarif');
  tarifs.innerText = `${photographe.price} € / jour `;
  fichePhotographe.appendChild(tarifs);
  const tags = tagPhotographe(photographe);
  fichePhotographe.appendChild(tags);

  main.appendChild(fichePhotographe);
}

// eslint-disable-next-line no-unused-vars
function affichageMedia(media) {
  const mediaType = media.image ? 'image' : 'video';
  // eslint-disable-next-line no-param-reassign
  media.photographeName = photographe.name;
  const mediaFactory = new MediaFactory(mediaType, media);
  const contMedia = document.querySelector('.portfolio--photo-container');
  contMedia.appendChild(mediaFactory.htmlContent());
}

async function loadMedia() {
  const photographeMedias = await getMedia(idphotographe);
  console.log('Media: ', photographeMedias);
  // eslint-disable-next-line no-plusplus
  for (let index = 0; index < photographeMedias.length; index++) {
    const mediaphotographe = photographeMedias[index];
    affichageMedia(mediaphotographe);
  }
}

async function lecturePhotographe() {
  photographe = await getPhotographe(idphotographe);
  console.log('photographe: ', photographe);
  affichage(photographe);
  loadMedia();
}

lecturePhotographe();
