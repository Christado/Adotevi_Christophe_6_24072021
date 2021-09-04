/* eslint-disable no-shadow */
/* eslint-disable no-console */
// eslint-disable-next-line consistent-return
export const lecture = async () => {
  try {
    const reponse = await fetch('../data.json');
    const datas = await reponse.json();
    console.log('donnees: ', datas);
    return datas;
  } catch (error) {
    console.error(error);
  }
};

export const getPhotographes = async () => {
  const donnees = await lecture();
  return donnees.photographers;
};

export const getPhotographe = async (id) => {
  const photographers = await getPhotographes();
  // eslint-disable-next-line prefer-arrow-callback
  // eslint-disable-next-line no-shadow
  // eslint-disable-next-line eqeqeq
  const photographe = photographers.find((photographe) => photographe.id == id);
  return photographe;
};

export const getMedia = async (id) => {
  const donnees = await lecture();
  const medias = donnees.media;
  return medias.filter((media) => media.photographerId === id);
};
