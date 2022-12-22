console.log('JS OK');

/* Dato un array di oggetti letterali con:
 - url dell’immagine
 - titolo
 - descrizione
 Creare un carosello.
*/

// ! OPERAZIONI PRELIMINARI
// Prendo gli elementi dal DOM
const gallery = document.querySelector('.gallery');
const images = document.querySelectorAll('.gallery img');
const text = document.querySelectorAll('.text');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

// ! SVOLGIMENTO
// Creo un array di oggetti letterali per popolare dinamicamente il carosello
const data = [
    {
      image: 'img/01.webp',
      title: 'Marvel\'s Spiderman Miles Morale',
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
      text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
  ];

  let content = '';
  for (let i = 0; i < data.length; i++){
      const currentImage = data[i];
      console.log(currentImage);
      
  // Inserisco contenuti nel DOM
  content += `
    <img src="${currentImage.image}" alt="${currentImage.title}">
    <div class="text">
        <h2>${currentImage.title}</h2>
        <p>${currentImage.text}</p>
    </div>
    `;
  }

    // Stampo in pagina
    gallery.innerHTML = content;
    
// ! EVENTI DINAMICI
nextButton.addEventListener('click', () => {

  
});






