export const lecture =  async() => {
    try {
       const reponse = await fetch("../data.json");
       const datas = await reponse.json();
       console.log("donnees: ", datas);
    } catch (error) {
       console.error(error);
    }
}