document.addEventListener('DOMContentLoaded', function () {
	const footerYear = document.querySelector('#footer-year');
	const nav = document.querySelector('.nav');
	const navBtn = document.querySelector('.burger-btn');
	const allNavItems = document.querySelectorAll('.nav__item');
	const navBtnBars = document.querySelector('.burger-btn__bars');
	const allSections = document.querySelectorAll('.section');
	const quote = document.querySelector('.quotes-text')

	const quotes = [' "Dzień jest matką pracy, noc matką myśli" przysłowie włoskie', ' "Najlepsza część życia ludzkiego to małe, bezimienne i zapomniane akty dobroci i miłości" William Wordsworth', ' "Ludzie którzy nigdy nie mają czasu, czynią najmniej." Georg Christoph Lichtenberg', ' "Cienia i wolności nie przydepczesz butem" Antoni Regulski', ' "Nie wolno nigdy samego siebie czynić niewolnikiem." Stanisław Brzozowski',' "Kiedy ochota w sercu zbierze, to i miary w niczym nie masz." Henryk Sienkiewicz' , ' "Ludzie mniej mają nieufności do zwyczaju i tradycji przodków niż do swego rozsądku." Luc de Clapiers de Vauvenargues', ' "Łatwiej ofiarujemy nasze serce, niż nasze pieniądze." Noël Coward',' "Kto serce postradał, ten umarł prawdziwie" Malcher Pudłowski', ' "Jedynym sposobem zachowania zdrowia jest jedzenie tego czego nie chcesz jeść, picie tego, czego nie lubisz, i robienie tego, na co nie masz ochoty" Mark Twain', ' "Nie otrzymujemy krótkiego życia, lecz je takim czynimy. Nie brakuje nam czasu, lecz trwonimy go." Seneka', ' "Oto nasza epoka, dumna z maszyn, które myślą, podejrzliwa wobec ludzi, którzy próbują robić to samo" H.Mumford Jones',' "Śmierć rozwiązuje wszystko, czego życie rozwiązać nie potrafi." Karol Bunsch', ' "Śmierć wydaje nam się straszna, a nieśmiertelność pożądana, ponieważ jesteśmy śmiertelni. Gdybyśmy byli nieśmiertelni, straszną wydawałaby się nam nieśmiertelność, a pożądaną śmierć." Henryk Elzenberg', ' "Lepsza kromka suchego chleba i przy tym spokój, niż dom pełen mięsa, a przy tym kłotnia." Salomon']

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
