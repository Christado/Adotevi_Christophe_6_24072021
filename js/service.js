/* eslint-disable no-console */
export const lecture = async () => {
  try {
    const reponse = await fetch('../data.json');
    const datas = await reponse.json();
    console.log('donnees: ', datas);
    return datas;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getPhotographes = async () => {
  const donnees = await lecture();
  return donnees.photographers;
};

export const getPhotographe = async (id) => {
  const photographers = await getPhotographes();
  // eslint-disable-next-line eqeqeq
  const photographe = photographers.find((photographe1) => photographe1.id == id);
  return photographe;
};

export const getMedia = async (id) => {
  const donnees = await lecture();
  const medias = donnees.media;
  // eslint-disable-next-line eqeqeq
  return medias.filter((media) => media.photographerId == id);
};
