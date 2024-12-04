const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Sélectionner les flèches
const arrowLeft = document.querySelector('#banner .arrow_left');
const arrowRight = document.querySelector('#banner .arrow_right');
// Sélectionner la tagline
const taglineElement = document.querySelector('#banner p');
// Sélectionner tous les bullet points
const bullets = document.querySelectorAll('.dot');


console.log(arrowLeft); // Affiche l'élément sélectionné
console.log(arrowRight); // Affiche l'élément sélectionné

let currentIndex = 0; // Indice de l'image active

const carouselImage = document.querySelector('.banner-img'); // Image bannière dans le HTML

// Fonction pour mettre à jour la slide
function updateSlide() {
// Mettre à jour l'image
	carouselImage.src = `./assets/images/slideshow/${slides[currentIndex].image}`;

// Mettre à jour le texte de la tagline
  taglineElement.innerHTML = slides[currentIndex].tagLine;

// Mettre à jour les bullet points
	bullets.forEach((bullet, index) => {
		if (index === currentIndex) {
		  bullet.classList.add('dot_selected'); // Active le bullet point correspondant
		} else {
		  bullet.classList.remove('dot_selected'); // Désactive les autres
		}
	  });
}

// Ajouter des écouteurs d'événements
arrowLeft.addEventListener('click', () => {
	console.log('Flèche gauche cliquée !'); // tester le fonctionnement des event listeners
	currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Aller à la slide précédente
	updateSlide(); // Mettre à jour la slide
  });
  
  arrowRight.addEventListener('click', () => {
	console.log('Flèche droite cliquée !'); // tester le fonctionnement des event listeners
	currentIndex = (currentIndex + 1) % slides.length; // Aller à la slide suivante
	updateSlide(); // Mettre à jour la slide
  });