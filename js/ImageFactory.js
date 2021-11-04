import openLightBox from './lightBox';

export default class ImageFactory {
  constructor(data, medias, onLikeChange) {
    this.image1 = this.fabriqueImage(data);
    this.medias = medias;
    this.onLikeChange = onLikeChange;
  }

  // récupération et affichage des médias images, titres, likes et prix //

  fabriqueImage(data) {
    this.mediaData = data;
    const figcont = document.createElement('section');
    this.media3 = document.createElement('figure');
    this.media3.className = 'photo photo-3rd';
    this.media3.ariaLabel = this.mediaData.title;
    const media = document.createElement('img');
    media.className = 'photo-picture';
    media.src = `./img/${this.mediaData.photographeName.split(' ')[0]}/${this.mediaData.image}`;
    media.alt = this.mediaData.alt;
    const footer = document.createElement('footer');
    footer.className = 'photo-footer';

    const affspan = document.createElement('span');
    affspan.className = 'photo-footer__title';
    affspan.innerText = this.mediaData.title;
    footer.appendChild(affspan);

    const affspan3 = document.createElement('i');
    affspan3.className = 'fas fa-heart';
    const nbrlikes = document.createTextNode(this.mediaData.likes);

    const affspan1 = document.createElement('span');
    affspan1.className = 'photo-footer__likes';
    affspan1.append(nbrlikes, affspan3);
    footer.appendChild(affspan1);

    const affspan2 = document.createElement('span');
    affspan2.className = 'photo-footer__price';
    affspan2.innerText = `${this.mediaData.price} €`;
    footer.appendChild(affspan2);

    this.media3.appendChild(media);
    this.media3.appendChild(footer);
    figcont.appendChild(this.media3);

    affspan3.addEventListener('click', () => {
      this.mediaData.likes += 1;
      nbrlikes.nodeValue = this.mediaData.likes;
      this.onLikeChange();
    });

    /* affspan3.addEventListener('click', () => {
      if (affspan1 === this.mediaData.likes) {
        this.mediaData.likes += 1;
        nbrlikes.nodeValue = this.mediaData.likes;
        this.onLikeChange();
      } else {
        this.mediaData.likes -= 1;
        nbrlikes.nodeValue = this.mediaData.likes;
        this.onLikeChange();
      }
    }); */

    media.addEventListener('click', () => {
      openLightBox(this.mediaData, this.medias);
    });
    return this.media3;
  }

  htmlContent() {
    return this.image1;
  }
}
