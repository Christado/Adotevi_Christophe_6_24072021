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
    const lieux = document.createElement("p"); 
    lieux.classList.add("localisation");
    lieux.innerText = photographe.city + ", " + photographe.country;
    fichePhotographe.appendChild(lieux);
    
    const descrip1 = document.createElement("p"); 
    descrip1.innerText = photographe.tagline;
    fichePhotographe.appendChild(descrip1);
    
    const tarifs = document.createElement("p"); 
    tarifs.classList.add("tarif");
    tarifs.innerText = photographe.price + " € / jour ";
    fichePhotographe.appendChild(tarifs);
    const tags = tagPhotographe(photographe);
    fichePhotographe.appendChild(tags);
    
    main.appendChild(fichePhotographe);
}

function lienPhotographe(photographe) {
    const lien = document.createElement("a"); 
    lien.href = "photographe.html"; 

    const img = document.createElement("img");
    img.src = "images/photographers/" + photographe.portrait;
    lien.appendChild(img);
    
    const nom = document.createElement("h2"); 
    nom.innerText = photographe.name;
    lien.appendChild(nom);

    return lien ;   
}

function tagPhotographe(photographe) {
    const tag1 = document.createElement("nav"); 
    const tag2 = document.createElement("ul");
    const tags = photographe.tags;

    for (let index = 0; index < tags.length; index++) {
        const tag = tags[index];
        const tagli = document.createElement("li"); 
        tagli.innerText = "#" + tag;
        tag2.appendChild(tagli);
        
    }

    tag1.appendChild(tag2);

    return tag1;
}