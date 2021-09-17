/* eslint-disable no-undef */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
class VideoFactory {
  constructor(video) {
    // eslint-disable-next-line no-undef
    this.video1 = creationVideo;
  }

  fabriqueVideo() {
    media = document.createElement('figure');
    media.className = 'photo photo-3rd';
    const video = document.createElement('video');
    video.className = 'photo-picture';
    video.src = './img/Mimi/Animals_Wild_Horses_in_the_mountains.mp4';

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

    media.appendChild(video);
    media.appendChild(footer);
  }
}
