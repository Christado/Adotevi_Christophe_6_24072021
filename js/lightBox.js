// les constantes //

const lightbox = document.querySelector('.modal');
const closeLightbox = document.querySelector('.closeIcone');
const image = document.querySelector('.mediaContent.image');
const video = document.querySelector('.mediaContent.video');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let selectedMediaIndex = 0;
let medias = [];

// affichage du média selectionné, préc et suiv //
function showSelectedMedia(media) {
  if (media.image) {
    video.style.display = 'none';
    image.src = `./img/${media.photographeName.split(' ')[0]}/${media.image}`;
    image.alt = media.alt;
    image.style.display = 'block';
  } else {
    image.style.display = 'none';
    video.src = `./img/${media.photographeName.split(' ')[0]}/${media.video}`;
    video.alt = media.alt;
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

// fermeture de le lightbox //

closeLightbox.addEventListener('click', (event) => {
  event.preventDefault();
  lightbox.style.display = 'none';
});

// code navigation avec touche du clavier //
lightbox.addEventListener('keydown', (event) => {
  if (event.keyCode === 37) {
    previous(event);
    prevButton.focus();
  }

  if (event.keyCode === 39) {
    next(event);
    nextButton.focus();
  }
});

prevButton.addEventListener('click', previous);
nextButton.addEventListener('click', next);

// recupération des médias //

const openLightBox = (media, mediaList) => {
  lightbox.style.display = 'flex';
  showSelectedMedia(media);
  selectedMediaIndex = mediaList.indexOf(media);
  medias = mediaList;
  prevButton.focus();
};
export default openLightBox;
