const navBtn1 = document.querySelector('.navigation__button-1');
const navBtn2 = document.querySelector('.navigation__button-2');
const navBtn3 = document.querySelector('.navigation__button-3');

const sectionMethods = document.querySelector('.main__section-2');
const sectionUsage = document.querySelector('.main__section-3');
const sectionPlatform = document.querySelector('.main__section-4');

function scrollToSection(element) {
	element.scrollIntoView({
		behavior: 'smooth',
	});
}

navBtn1.addEventListener('click', () => {
	scrollToSection(sectionMethods);
});
navBtn2.addEventListener('click', () => {
	scrollToSection(sectionUsage);
});
navBtn3.addEventListener('click', () => {
	scrollToSection(sectionPlatform);
});

function scrollToTop() {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	});
}

const topBtn = document.querySelector('.button-top');
topBtn.addEventListener('click', scrollToTop);
