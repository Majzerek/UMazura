document.addEventListener('DOMContentLoaded', function () {
	const footerYear = document.querySelector('#footer-year');
	const nav = document.querySelector('.nav');
	const navBtn = document.querySelector('.burger-btn');
	const allNavItems = document.querySelectorAll('.nav__item');
	const navBtnBars = document.querySelector('.burger-btn__bars');
	const allSections = document.querySelectorAll('.section');
	const quote = document.querySelector('.quotes-text')

	const quotes = ['"Dzień jest matką pracy, noc matką myśli" przysłowie włoskie', '"Najlepsza część życia ludzkiego to małe, bezimienne i zapomniane akty dobroci i miłości" William Wordsworth', '"Ludzie którzy nigdy nie mają czasu, czynią najmniej." Georg Christoph Lichtenberg', '"Cienia i wolności nie przydepczesz butem" Antoni Regulski', '"Nie wolno nigdy samego siebie czynić niewolnikiem." Stanisław Brzozowski']

	const handleQuote = () => {
		
		let a = Math.floor(Math.random() * quotes.length);
		quote.innerHTML = `<span>Cytat:</span> ${ quotes[a]}`;
	}
handleQuote()

	const handleNav = () => {
		nav.classList.toggle('nav--active');

		navBtnBars.classList.remove('black-bars-color');

		allNavItems.forEach((item) => {
			item.addEventListener('click', () => {
				nav.classList.remove('nav--active');
			});
		});

		handleNavItemsAnimation();
	};

	const handleNavItemsAnimation = () => {
		let delayTime = 0;

		allNavItems.forEach((item) => {
			item.classList.toggle('nav-items-animation');
			item.style.animationDelay = '.' + delayTime + 's';
			delayTime++;
		});
	};

	const handleObserver = () => {
		const currentSection = window.scrollY;

		allSections.forEach((section) => {
			if (
				section.classList.contains('white-section') &&
				section.offsetTop <= currentSection + 60
			) {
				navBtnBars.classList.add('black-bars-color');
			} else if (
				!section.classList.contains('white-section') &&
				section.offsetTop <= currentSection + 60
			) {
				navBtnBars.classList.remove('black-bars-color');
			}
		});
	};

	const handleCurrentYear = () => {
		const year = new Date().getFullYear();
		footerYear.innerHTML = year;
	};


	handleCurrentYear();
	navBtn.addEventListener('click', handleNav);
	window.addEventListener('scroll', handleObserver);
});
