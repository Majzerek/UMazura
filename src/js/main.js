document.addEventListener(
	'DOMContentLoaded',
	function () {
        const footerYear = document.querySelector('#footer-year');





        const handleCurrentYear = () => {
			const year = new Date().getFullYear();
			footerYear.innerHTML = year;
		};
        handleCurrentYear()
    })