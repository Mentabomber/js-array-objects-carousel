// Consegna:
// Dato un array di oggetti letterali con:
// - url dell’immagine
// - titolo
// - descrizione
// Creare un carosello come nella foto allegata.
// Milestone 0:
// Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l’immagine grande in modo da poter stilare lo slider.
// Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
// Al click dell’utente sulle frecce verso sopra e sotto, l’immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
// Milestone 2:
// Aggiungere il **ciclo infinito** del carosello.
// Ovvero se l’immagine attiva è la prima e l’utente clicca la freccia verso sopra, l’immagine che deve attivarsi sarà l’ultima e viceversa per l’ultima miniatura se l’utente clicca la freccia verso sotto.
// BONUS 1:
// Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
// BONUS 2:
// Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
// BONUS 3:
// Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.

const imageList = ["img/01.webp", "img/02.webp", "img/03.webp", "img/04.webp", "img/05.webp"];

let indexImmagineAttiva = 0;

let containerSelector = document.getElementById("container");

const images = [
    {
        image: 'img/01.webp',
        title: "'Marvel\\'s Spiderman Miles Morale'",
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: "'Marvel\\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.'",
    }
];

console.log(containerSelector);



// creazione div ed immagini dentro id = container

for(let i = 0; i <= imageList.length - 1; i++){

    containerSelector.innerHTML += `<div class="img-container"> 
                                        <img src=${imageList[i]} alt="static-test-img">
                                    </div>
                                    `;
                                    


}

// creazione div ed immagini dentro id = thumb-nail

containerSelector = document.getElementById("thumb-nail");

for(let i = 0; i <= imageList.length - 1; i++){

    containerSelector.innerHTML += `<div class="img-thumb-nail"> 
                                        <img src=${imageList[i]} alt="static-test-img">
                                    </div>
                                    ` ;
                                    

}

// seleziono container poi seleziono tutti i div con classe img-container e aggiungo alla prima active per visualizzare il div 

let container = document.getElementById("container");
let immagini = container.querySelectorAll("div.img-container");
immagini[indexImmagineAttiva].classList.add("active");

// seleziono tutti i div con classe img-thumb-nail e aggiungo alla prima active per visualizzare il div 

let immaginiThumbNail = container.querySelectorAll("div.img-thumb-nail");
immaginiThumbNail[indexImmagineAttiva].classList.add("thumb-nail-selected")

// bottone down per muovermi da un'immagine verso l'altra dall'alto verso il basso

let  buttonInteractionUp = document.getElementById("arrow-down-carousel");
buttonInteractionUp.addEventListener('click',
    function(){

        immagini[indexImmagineAttiva].classList.remove("active");

        immaginiThumbNail[indexImmagineAttiva].classList.remove("thumb-nail-selected");
        indexImmagineAttiva++;

        if(indexImmagineAttiva == imageList.length ){
            indexImmagineAttiva = 0;

        }
        immagini[indexImmagineAttiva].classList.add("active");

        immaginiThumbNail[indexImmagineAttiva].classList.add("thumb-nail-selected");

        console.log(indexImmagineAttiva);
        

    }
);

// bottone down per muovermi da un'immagine verso l'altra dal basso verso l'alto

let  buttonInteractionDown = document.getElementById("arrow-up-carousel");

buttonInteractionDown.addEventListener('click',
    function(){

        immagini[indexImmagineAttiva].classList.remove("active");

        immaginiThumbNail[indexImmagineAttiva].classList.remove("thumb-nail-selected");

        if(indexImmagineAttiva == 0 ){
            indexImmagineAttiva = imageList.length;

        }

        indexImmagineAttiva--;

        immagini[indexImmagineAttiva].classList.add("active");

        immaginiThumbNail[indexImmagineAttiva].classList.add("thumb-nail-selected");
        
        console.log(indexImmagineAttiva);
        

    

    }
);


