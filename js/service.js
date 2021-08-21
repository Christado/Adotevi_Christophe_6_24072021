export const lecture =  async() => {
    try {
       const reponse = await fetch("../data.json");
       const datas = await reponse.json();
       console.log("donnees: ", datas);
       return datas;
    } catch (error) {
       console.error(error);
    }
}

export const getPhotographes = async() => {
   const donnees =  await lecture();
   return donnees.photographers;

}

export const getPhotographe = async(id) => {
   const photographers =  await getPhotographes();
   const photographe = photographers.find(function(photographe){
      return photographe.id == id;
   })
   return photographe;

}