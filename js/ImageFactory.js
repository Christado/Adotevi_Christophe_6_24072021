export default class ImageFactory {
  constructor(data) {
    this.image1 = this.fabriqueImage(data);
  }

  // eslint-disable-next-line no-unused-vars
  fabriqueImage(data) {
    this.media = document.createElement('figure');
    this.media.className = 'photo photo-3rd';
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

    this.media.appendChild(image);
    this.media.appendChild(footer);

    return this.media;
  }

  htmlContent() {
    return this.image1;
  }
}
