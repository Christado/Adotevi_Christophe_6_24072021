import {getPhotographe} from "./service";

const params = new URLSearchParams(window.location.search);
const idphotographe = params.get("id");
console.log(idphotographe)

const main = document.querySelector(".conteneur");

async function lecturePhotographe () {
    const photographe = await getPhotographe(idphotographe);
    console.log("photographe: ",photographe);
    
    affichage(photographe); 
    
 }

 lecturePhotographe();

function affichage(photographe){ 

    

    document.querySelector(".nom").innerText = photographe.name;
    document.querySelector(".localisation").innerText = photographe.city + ", " + photographe.country; 
    document.querySelector(".slogant").innerText = photographe.tagline;
    document.querySelector(".tarif").innerText = photographe.price + " € / jour ";
    //document.querySelector("ul").innerText = " # " + photographe.tags ;//


    const fichePhotographe = document.createElement("section");
    fichePhotographe.classList.add("header_photographe");
    
    const tagperso = tagPhotographe(photographe);
    fichePhotographe.appendChild(tagperso);


    const lien = lienPhotographe(photographe);
    fichePhotographe.appendChild(lien);

   
    /*const lieux = document.createElement("p");  
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
    fichePhotographe.appendChild(tags);*/
    
    main.appendChild(fichePhotographe); 
}

function lienPhotographe(photographe) {
    const lien = document.createElement("a"); 
    lien.href = "photographe.html"; 

    const img = document.createElement("img");
    img.src = "images/photographers/" + photographe.portrait;
    lien.appendChild(img);
    
    /*const nom = document.createElement("h2"); 
    nom.innerText = photographe.name;
    lien.appendChild(nom);*/

    return lien ;   
}

function tagPhotographe(photographe) {
    const tag1 = document.createElement("nav"); 
    tag1.classList.add("tag1")
    const tag2 = document.createElement("ul");
    tag2.classList.add("tag")
    const tags = photographe.tags;

    for (let index = 0; index < tags.length; index++) {
        const tag = tags[index];
        const tagli = document.createElement("li"); 
        tagli.classList.add("tagselect")
        tagli.innerText = " # " + tag;
        tag2.appendChild(tagli);
        
    }

    tag1.appendChild(tag2);

    return tag1;
}