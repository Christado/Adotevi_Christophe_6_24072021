const lightbox = document.querySelector('.modal');
const closeLightbox = document.querySelector('.closeIcone');
const image = document.querySelector('.mediaContent.image');
const video = document.querySelector('.mediaContent.video');
const items = document.querySelector('.items');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let selectedMediaIndex = 0;
let medias = [];
closeLightbox.addEventListener('click', (event) => {
  event.preventDefault();
  lightbox.style.display = 'none';
});
lightbox.addEventListener('keydown', (event) => {
  console.log(event.key);
  console.log(event.keyCode);

  if (event.keyCode === 37) {
    previous(event);
    prevButton.focus();
  }

  if (event.keyCode === 39) {
    next(event);
    nextButton.focus();
  }
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

  if (media.image) {
    video.style.display = 'none';
    image.src = `./img/${media.photographeName.split(' ')[0]}/${media.image}`;
    image.style.display = 'block';
  } else {

    image.style.display = 'none';
    video.src = `./img/${media.photographeName.split(' ')[0]}/${media.video}`;
    video.style.display = 'block';
  }
  
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

  //showMedialist(mediaList);//
  toucheDirect();

  selectedMediaIndex = mediaList.indexOf(media);
  medias = mediaList;
  prevButton.focus();
};
