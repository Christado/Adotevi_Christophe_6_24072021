/* eslint-disable no-console */

import { getPhotographes } from './service';
import { filterByTag } from './filter';

const main = document.querySelector('.conteneur');
let photographes = [];
function tagPhotographe(photographe) {
  const tag1 = document.createElement('nav');
  const tag2 = document.createElement('ul');
  // eslint-disable-next-line prefer-destructuring
  const tags = photographe.tags;

  // eslint-disable-next-line no-plusplus
  for (let index = 0; index < tags.length; index++) {
    const tag = tags[index];
    const tagli = document.createElement('li');
    tagli.innerText = `#${tag}`;
    tag2.appendChild(tagli);
  }
  tag1.appendChild(tag2);

  return tag1;
}

export function lienPhotographe(photographe) {
  const lien = document.createElement('a');
  // eslint-disable-next-line prefer-template
  lien.href = 'photographe.html?id=' + photographe.id;

  const img = document.createElement('img');
  // eslint-disable-next-line prefer-template
  img.src = 'images/photographers/' + photographe.portrait;
  lien.appendChild(img);

  const nom = document.createElement('h2');
  nom.innerText = photographe.name;
  lien.appendChild(nom);

  return lien;
}

export function affichage(photographe) {
  const fichePhotographe = document.createElement('div');
  fichePhotographe.classList.add('fiche_photographe');
  const lien = lienPhotographe(photographe);
  fichePhotographe.appendChild(lien);
  const lieux = document.createElement('p');
  lieux.classList.add('localisation');
  lieux.innerText = `${photographe.city}, ${photographe.country}`;
  fichePhotographe.appendChild(lieux);

  const descrip1 = document.createElement('p');
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

function affichageDesPhotographes(photographers) {
  main.innerText = '';
  // eslint-disable-next-line no-restricted-syntax
  for (const photographe of photographers) {
    affichage(photographe);
  }
}

async function lecturePhotographes() {
  photographes = await getPhotographes();
  // eslint-disable-next-line no-console
  console.log('photographes: ', photographes);
  // eslint-disable-next-line no-plusplus
  affichageDesPhotographes(photographes);
}

function initFilter() {
  const tagsInput = document.querySelectorAll('.tag');
  // eslint-disable-next-line no-restricted-syntax
  for (const input of tagsInput) {
    // eslint-disable-next-line no-loop-func
    input.addEventListener('click', (event) => {
      const tag = event.currentTarget.id;
      const filterResult = filterByTag(photographes, tag);
      affichageDesPhotographes(filterResult);
      console.log('recherche par tag');
      console.log('valeur du tag :', event.currentTarget.id);
    });
  }
}

lecturePhotographes();
initFilter();
