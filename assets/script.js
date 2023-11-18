const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let currentSlide = 0;

function showSlide(index) {
	const slidesContainer = document.querySelector('.slides-container');
	const slide = slides[index];

	slidesContainer.innerHTML = `
        <img class="banner-img" src="./assets/images/slideshow/${slide.image}" alt="Banner Print-it">
        <p>${slide.tagLine}</p>
    `;

	updateDots(index);
}


function updateDots(index) {
	const dotsContainer = document.querySelector('.dots');
	dotsContainer.innerHTML = '';

	for (let i = 0; i < slides.length; i++) {
		const dot = document.createElement('div');
		dot.classList.add('dot');
		if (i === index) {
			dot.classList.add('dot_selected');
		}
		dot.onclick = () => showSlide(i);
		dotsContainer.appendChild(dot);
	}
}

function prevSlide() {
	currentSlide = (currentSlide - 1 + slides.length) % slides.length;
	showSlide(currentSlide);
}

function nextSlide() {
	currentSlide = (currentSlide + 1) % slides.length;
	showSlide(currentSlide);
}


showSlide(currentSlide);
