import {getPhotographes} from "./service";

const main = document.querySelector(".conteneur");

async function lecturePhotographes () {
   const photographes = await getPhotographes();
   console.log("photographes: ",photographes);
   for (let index = 0; index < photographes.length; index++) {
       const photographe = photographes[index];
       affichage(photographe); 
   }
}

lecturePhotographes();

function affichage(photographe){ 
    const fichePhotographe = document.createElement("div");
    fichePhotographe.classList.add("fiche_photographe");
    
    const lien = lienPhotographe(photographe);
    fichePhotographe.appendChild(lien);
    main.appendChild(fichePhotographe);
}

function lienPhotographe(photographe) {
    const lien = document.createElement("a"); 
    lien.href = "photographe.html"; 

    const img = document.createElement("img");
    img.src = "images/photographers/" + photographe.portrait;
    lien.appendChild(img);

    return lien;
}