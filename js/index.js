import { getPhotographes } from './service';
import filterByTag from './filter';

// affichage des tags de chaque photographe //
const main = document.querySelector('.conteneur');
let photographes = [];
function tagPhotographe(photographe) {
  const tag1 = document.createElement('nav');
  const tag2 = document.createElement('ul');

  const { tags } = photographe;

  for (let index = 0; index < tags.length; index += 1) {
    const tag = tags[index];
    const tagli = document.createElement('li');
    tagli.innerText = `#${tag}`;
    tag2.appendChild(tagli);
  }
  tag1.appendChild(tag2);

  return tag1;
}

// affichage du protrait et nom des photographes //
export function lienPhotographe(photographe) {
  const lien = document.createElement('a');

  lien.href = `photographe.html?id=${photographe.id}`;

  const img = document.createElement('img');

  img.src = `images/photographers/${photographe.portrait}`;
  img.alt = photographe.name;
  lien.appendChild(img);

  const nom = document.createElement('h2');
  nom.innerText = photographe.name;
  lien.appendChild(nom);

  return lien;
}

// affichage des infos des chaque photogrphe //
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
  photographers.forEach((photographe) => {
    affichage(photographe);
  });
}

async function lecturePhotographes() {
  photographes = await getPhotographes();
  affichageDesPhotographes(photographes);
}

// filtre des photographes par leurs Tags //
function initFilter() {
  const tagsInput = document.querySelectorAll('.tag');
  tagsInput.forEach((input) => {
    input.addEventListener('click', (event) => {
      const tag = event.currentTarget.id;
      const filterResult = filterByTag(photographes, tag);
      affichageDesPhotographes(filterResult);
    });
  });
}

lecturePhotographes();
initFilter();
