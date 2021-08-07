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