function sortByPopularity(medias) {
  const sortedMedias = medias.sort((media1, media2) => {
    if (media1.likes >= media2.likes) {
      return -1;
    }
    return 1;
  });
  return sortedMedias;
}

function sortByDate(medias) {
  const sortedMedias = medias.sort((media1, media2) => {
    if (new Date(media1.date) >= new Date(media2.date)) {
      return -1;
    }
    return 1;
  });
  return sortedMedias;
}

function sortByTitle(medias) {
  const sortedMedias = medias.sort((media1, media2) => {
    if (media1.title >= media2.title) {
      return -1;
    }
    return 1;
  });
  return sortedMedias;
}

// eslint-disable-next-line consistent-return
const sort = (medias, tag) => {
  if (tag === 'populaire') {
    return sortByPopularity(medias);
  }

  if (tag === 'date') {
    return sortByDate(medias);
  }

  if (tag === 'Title') {
    return sortByTitle(medias);
  }
};

export default sort;
