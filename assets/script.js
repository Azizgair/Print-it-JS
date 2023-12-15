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
let autoSlideInterval;

function startAutoSlide() {
	autoSlideInterval = setInterval(() => {
		nextSlide();
	}, 3000);
}
function stopAutoSlide() {
	clearInterval(autoSlideInterval);
}

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
		dot.onclick = () => {
			stopAutoSlide();
			showSlide(i);
			setTimeout(startAutoSlide(), 1000);
		};
		dotsContainer.appendChild(dot);
	}
}

function handleLoop(index) {
	if (index < 0) {
		currentSlide = slides.length - 1;
	} else if (index >= slides.length) {
		currentSlide = 0;
	}
}

function prevSlide() {
	currentSlide = (currentSlide - 1 + slides.length) % slides.length;
	handleLoop(currentSlide);
	showSlide(currentSlide);
}

function nextSlide() {
	currentSlide = (currentSlide + 1) % slides.length;
	handleLoop(currentSlide);
	showSlide(currentSlide);
}
document.addEventListener('DOMContentLoaded', () => {
	startAutoSlide();
});

document.querySelector('.arrow_right').addEventListener("click", () => {
	nextSlide();
});
document.querySelector('.arrow_left').addEventListener('click', () => {
	prevSlide();
});

showSlide(currentSlide);
