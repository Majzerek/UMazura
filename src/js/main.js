document.addEventListener('DOMContentLoaded', function () {
	const footerYear = document.querySelector('#footer-year');
	const nav = document.querySelector('.nav');
	const navBtn = document.querySelector('.burger-btn');
	const allNavItems = document.querySelectorAll('.nav__item');
	const navBtnBars = document.querySelector('.burger-btn__bars');
	const allSections = document.querySelectorAll('.section');
	const quote = document.querySelector('.quotes-text');

	const newsCard = document.querySelector('.card');
	const newsBtn = document.querySelector('.show-news');
	const faders = document.querySelectorAll('.fade-in');
	const sliders = document.querySelectorAll('.slide-in');

	const quotes = [
		' "Najlepsza część życia ludzkiego to małe, bezimienne i zapomniane akty dobroci i miłości" <br>William Wordsworth',
		' "Ludzie którzy nigdy nie mają czasu, czynią najmniej." <br>Georg Christoph Lichtenberg',
		' "Cienia i wolności nie przydepczesz butem" <br>Antoni Regulski',
		' "Nie wolno nigdy samego siebie czynić niewolnikiem." <br>Stanisław Brzozowski',
		' "Kiedy ochota w sercu zbierze, to i miary w niczym nie masz." <br>Henryk Sienkiewicz',
		' "Ludzie mniej mają nieufności do zwyczaju i tradycji przodków niż do swego rozsądku." <br>Luc de Clapiers de Vauvenargues',
		' "Łatwiej ofiarujemy nasze serce, niż nasze pieniądze." <br>Noël Coward',
		' "Kto serce postradał, ten umarł prawdziwie" <br>Malcher Pudłowski',
		' "Jedynym sposobem zachowania zdrowia jest jedzenie tego czego nie chcesz jeść, picie tego, czego nie lubisz, i robienie tego, na co nie masz ochoty" <br>Mark Twain',
		' "Nie otrzymujemy krótkiego życia, lecz je takim czynimy. Nie brakuje nam czasu, lecz trwonimy go." <br>Seneka',
		' "Oto nasza epoka, dumna z maszyn, które myślą, podejrzliwa wobec ludzi, którzy próbują robić to samo" <br>H.Mumford Jones',
		' "Śmierć rozwiązuje wszystko, czego życie rozwiązać nie potrafi." <br>Karol Bunsch',
		' "Śmierć wydaje nam się straszna, a nieśmiertelność pożądana, ponieważ jesteśmy śmiertelni. Gdybyśmy byli nieśmiertelni, straszną wydawałaby się nam nieśmiertelność, a pożądaną śmierć."<br> Henryk Elzenberg',
		' "Lepsza kromka suchego chleba i przy tym spokój, niż dom pełen mięsa, a przy tym kłótnia." <br>Salomon',
		' "Dusza ludzka jest jak ptak: gdy wzbije się na pewną wysokość, nie tylko nie wolno jej spocząć, ale musi tęgo skrzydłami pracować, by się na niej utrzymać. Inaczej pierwsza lepsza pokusa pociągnie ją ku ziemi."<br> Henryk Sienkiewicz',
		' "Im bardziej rozpoznaję się w swoim ciele, tym bardziej czuję się zobowiązana do tego, by o nie dbać. Zostało mi ono powierzon: pielęgnuję je niczym przyjaciela, który mnie potrzebuje." <br>Simone de Beauvoir',
		' "Młodzi najwięcej popełniają szaleństw udając dorosłych, a starzy, kiedy pragną uchodzić za młodych." <br>Feliks Chwalibóg',
		' "Ciało ludzkie znajduje się na drabinie wielkości, w połowie drogi między atomem i gwiazdą. Zależnie od przedmiotów, z którymi się je porównuje, wydaje się wielkie lub małe."<br>Alexis Carel',
		' "... ino dusza jest nasza własna, a wszystko inne - dzierżawne, czasowe!"<br>Maria Rodziewiczówna',
		' "Charakter człowieka najlepiej określa się przez to, co uznaje on za śmieszne."<br>Johann Wolfgang von Goethe',
		' "Trzeba śmiać się nie czekając na szczęście, bo gotowiśmy umrzeć, nie uśmiechnąwszy się ani razu."<br>Jean de La Bruyère',
		' "Ze wszystkich zwierząt tylko człowiek umie się śmiać, bo też ma najwięcej ku temu powodów."<br>Ernest Hemingway',
		' "Najszlachetniejsze wykorzystanie wolności polega na jednoczeniu obywateli, nie na tworzeniu podziałów."<br>M.R.Kopmeyer',
		' "Nie ma słowa, któremu by dawano więcej rozmaitych znaczeń i które by w tyle sposobów przemawiało do ludzi, co słowo "wolność"."<br>Monteskiusz',
		' "Wolność zawsze jest tragiczna, nie ma wolności bezwzględnej, wolność jest zawsze od czegoś."<br>Stefan Napieralski',
		' "...serce, to niepoprawne serce, bardziej niż jakiegokolwiek innego daru ziemskiego, bardziej nawet niż samego życia, pragnie spokoju."<br>Joseph Conrad',
		' "Czymże jest wielkie, szlachetne serce, jeśli nie natchnieniem w stanie nieustającego czynu?"<br>Zygmunt Krasiński',
		' "Długa jest droga wiodąca od rozumu do serca."<br>Gottfried Wilhelm Leibniz',
		' "Każde serce ma ciemne zakątki, Gdzie są boleści, głupstwa i szczęścia pamiątki."<br>Adam Mickiewicz',
	];

	//apper text observer
	const appearOptions = {
		threshold: 0,
		rootMargin: '0px 0px -350px 0px',
	};
	const appearOnScroll = new IntersectionObserver(function (
		entries,
		appearOnScroll
	) {
		entries.forEach((entry) => {
			if (!entry.isIntersecting) {
				return;
			} else {
				entry.target.classList.add('appear');
				appearOnScroll.unobserve(entry.target);
			}
		});
	},
	appearOptions);

	faders.forEach((fader) => {
		appearOnScroll.observe(fader);
	});

	sliders.forEach((slider) => {
		appearOnScroll.observe(slider);
	});
	// quote random
	const handleQuote = () => {
		let a = Math.floor(Math.random() * quotes.length);
		quote.innerHTML = `<span>Cytat:</span>&nbsp;${quotes[a]}`;
	};
	handleQuote();
	//Navigation
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
	//year
	const handleCurrentYear = () => {
		const year = new Date().getFullYear();
		footerYear.innerHTML = year;
	};

	handleCurrentYear();
	navBtn.addEventListener('click', handleNav);
	window.addEventListener('scroll', handleObserver);
	newsBtn.addEventListener('click', () => {
		if (newsCard.style.display == 'none') {
			newsCard.style.display = 'block';
		} else {
			newsCard.style.display = 'none';
		}
	});
});
