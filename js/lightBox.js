/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */

const lightbox = document.querySelector('.modal');
const closeLightbox = document.querySelector('.closeIcone');
const image = document.querySelector('.mediaContent');
// const video = document.querySelector('.mediaContent');//
const items = document.querySelector('.items');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let selectedMediaIndex = 0;
let medias = [];
closeLightbox.addEventListener('click', (event) => {
  event.preventDefault();
  lightbox.style.display = 'none';
});

function showMedialist(mediaList) {
  items.innerText = '';
  // eslint-disable-next-line no-restricted-syntax
  for (const media of mediaList) {
    const src = `./img/${media.photographeName.split(' ')[0]}/${media.image ? 'image' : 'video'}`;
    const item = document.createElement('div');
    item.className = 'item';
    item.innerHTML = `<img class="mediaContent" source src="${src}"  alt="" >  `;
    items.appendChild(item);
  }
}

/* function showMedialistv(mediaList) {
  items.innerText = '';
  for (const media of mediaList) {
    const src = `./img/${media.photographeName.split(' ')[0]}/${media.video}`;
    const item = document.createElement('div');
    item.className = 'item';
    item.innerHTML = ` <video class= "mediaContent" source src="${src}" alt="" > `;
    items.appendChild(item);
  }
} */

function showSelectedMedia(media) {
  image.src = `./img/${media.photographeName.split(' ')[0]}/${media.image}`;
}

function next(event) {
  event.preventDefault();
  selectedMediaIndex += 1;
  if (selectedMediaIndex >= medias.length) {
    selectedMediaIndex = 0;
  }
  const selectedMedia = medias[selectedMediaIndex];
  showSelectedMedia(selectedMedia);
}

function previous(event) {
  event.preventDefault();
  selectedMediaIndex -= 1;
  if (selectedMediaIndex < 0) {
    selectedMediaIndex = medias.length - 1;
  }
  const selectedMedia = medias[selectedMediaIndex];
  showSelectedMedia(selectedMedia);
}
prevButton.addEventListener('click', previous);
nextButton.addEventListener('click', next);

function toucheDirect() {
  image.addEventListener('keydown', (e) => {
    e.preventDefault();
    if (e.code === 39) {
      previous();
    } else if (e.code === 37) {
      next();
    }
  });
}

export const openLightBox = (media, mediaList) => {
  console.log('media seletionné :', media);
  console.table(mediaList);
  lightbox.style.display = 'flex';
  showSelectedMedia(media);

  showMedialist(mediaList);
  toucheDirect();

  selectedMediaIndex = mediaList.indexOf(media);
  medias = mediaList;
};
