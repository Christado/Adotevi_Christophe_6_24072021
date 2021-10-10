export default class ImageFactory {
  constructor(data, onLikeChange) {
    this.image1 = this.fabriqueImage(data);
    this.onLikeChange = onLikeChange;
  }

  // eslint-disable-next-line no-unused-vars
  fabriqueImage(data) {
    this.mediaData = data;
    this.media = document.createElement('figure');
    this.media.className = 'photo photo-3rd';
    const image = document.createElement('img');
    image.className = 'photo-picture';
    image.src = `./img/${this.mediaData.photographeName.split(' ')[0]}/${this.mediaData.image}`;
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
    // affspan1.innerHTML = "12 <i class='fas fa-heart'></i>";//
    footer.appendChild(affspan1);

    const affspan2 = document.createElement('span');
    affspan2.className = 'photo-footer__price';
    affspan2.innerText = `${this.mediaData.price} €`;
    footer.appendChild(affspan2);

    this.media.appendChild(image);
    this.media.appendChild(footer);

    affspan3.addEventListener('click', () => {
      this.mediaData.likes += 1;
      nbrlikes.nodeValue = this.mediaData.likes;
      this.onLikeChange();
    });

    return this.media;
  }

  htmlContent() {
    return this.image1;
  }
}
