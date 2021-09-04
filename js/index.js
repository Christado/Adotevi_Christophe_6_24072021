import { getPhotographes } from './service';

const main = document.querySelector('.conteneur');

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

export async function lecturePhotographes() {
  const photographes = await getPhotographes();
  // eslint-disable-next-line no-console
  console.log('photographes: ', photographes);
  // eslint-disable-next-line no-plusplus
  for (let index = 0; index < photographes.length; index++) {
    const photographe = photographes[index];
    affichage(photographe);
  }
}

lecturePhotographes();
