export default class VideoFactory {
  constructor(data) {
    this.video1 = this.fabriqueVideo(data);
  }

  // eslint-disable-next-line no-unused-vars
  fabriqueVideo(data) {
    this.mediaData = data;
    this.media = document.createElement('figure');
    this.media.className = 'photo photo-3rd';
    const video = document.createElement('video');
    video.controls = 'photo-picture';
    video.style.width = ' inherit ';
    video.style.height = 'inherit';
    video.style.ObjectFit = 'cover';
    video.style.borderRadius = '5px';
    video.src = `./img/${this.mediaData.photographeName.split(' ')[0]}/${this.mediaData.video}`;

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

    this.media.appendChild(video);
    this.media.appendChild(footer);

    affspan3.addEventListener('click', () => {
      this.mediaData.likes += 1;
      nbrlikes.nodeValue = this.mediaData.likes;
    });

    return this.media;
  }

  htmlContent() {
    return this.video1;
  }
}
