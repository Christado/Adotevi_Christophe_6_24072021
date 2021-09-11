/* eslint-disable no-undef */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
class imageFactory {
  constructor(image) {
    // eslint-disable-next-line no-undef
    this.image1 = creationImage;
  }

  fabriqueImage() {
    media = document.createElement('figure');
    media.className = 'photo photo-3rd';
    const image = document.createElement('img');
    image.className = 'photo-picture';
    image.src = './img/Mimi/Animals_Rainbow.jpg';

    const footer = document.createElement('footer');
    footer.className = 'photo-footer';

    const affspan = document.createElement('span');
    affspan.className = 'photo-footer__title';
    affspan.innerText = "Titre de l'image";
    footer.appendChild(affspan);

    const affspan1 = document.createElement('span');
    affspan1.className = 'photo-footer__likes';
    affspan1.innerHTML = "12 <i class='fas fa-heart'></i>";
    footer.appendChild(affspan1);

    const affspan2 = document.createElement('span');
    affspan2.className = 'photo-footer__price';
    affspan2.innerText = '70 €';
    footer.appendChild(affspan2);

    media.appendChild(image);
    media.appendChild(footer);
  }
}
