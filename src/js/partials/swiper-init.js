$(window).on('load', function () {
	let sliderHeaderMenu = document.querySelectorAll('.__js_slider-header-menu');
	let sliderHeaderMenu2 = document.querySelectorAll('.__js_slider-header-menu-2');
	let sliderMenu = document.querySelectorAll('.__js_slider-menu');
	let newsSlider = document.querySelectorAll('.__js_slider-news');
	let consultSlider = document.querySelectorAll('.__js_slider-consult');
	let historySlider = document.querySelectorAll('.__js_slider-history');
	let lifeSlider = document.querySelectorAll('.__js_slider-life');

	const options = {
		speed: 500,
		pagination: false
	}

	if (sliderHeaderMenu.length > 0) {
		sliderHeaderMenu.forEach(elem => {
			new Swiper(elem, {
				...options,
				slidesPerView: 1.7,
				spaceBetween: 9,
				centeredSlides: true,
				loop: true
			});
		});
	}

	if (sliderHeaderMenu2.length > 0) {
		sliderHeaderMenu2.forEach(elem => {
			new Swiper(elem, {
				...options,
				slidesPerView: 4,
				loop: true,
				navigation: {
					nextEl: '.first-screen__nav .slider-arrows__right',
					prevEl: '.first-screen__nav .slider-arrows__left',
				}
			});
		});
	}

	if (sliderMenu.length > 0) {
		sliderMenu.forEach(elem => {
			new Swiper(elem, {
				...options,
				slidesPerView: 'auto',
				spaceBetween: 6,
				breakpoints: {
					// when window width is >= 1200px
					1200: {
						spaceBetween: 14
					}
				}
			});
		});
	}

	if (newsSlider.length > 0) {
		newsSlider.forEach(elem => {
			new Swiper(elem, {
				...options,
				spaceBetween: 20,
				slidesPerView: 1.55,
				navigation: {
					nextEl: '.news__nav .slider-arrows__right',
					prevEl: '.news__nav .slider-arrows__left',
				},
				breakpoints: {
					1200: {
						spaceBetween: 35,
						slidesPerView: 2.37,
					}
				}
			});
		});
	}

	if (consultSlider.length > 0) {
		consultSlider.forEach(elem => {
			new Swiper(elem, {
				...options,
				spaceBetween: 17,
				slidesPerView: 1.48,
				loop: true,
				navigation: {
					nextEl: '.consult__nav .slider-arrows__right',
					prevEl: '.consult__nav .slider-arrows__left',
				},
				breakpoints: {
					1200: {
						spaceBetween: 33,
						slidesPerView: 4.84,
						centeredSlides: true
					}
				}
			});
		});
	}

	if (historySlider.length > 0) {
		historySlider.forEach(elem => {
			new Swiper(elem, {
				...options,
				slidesPerView: 1,
				loop: true,
				navigation: {
					nextEl: '.history__nav .slider-arrows__right',
					prevEl: '.history__nav .slider-arrows__left',
				},
			});
		});
	}

	if (lifeSlider.length > 0) {
		lifeSlider.forEach(elem => {
			new Swiper(elem, {
				...options,
				slidesPerView: 'auto',
				spaceBetween: 18,
				loop: true,
				centeredSlides: true,
				navigation: {
					nextEl: '.contacts__nav .slider-arrows__right',
					prevEl: '.contacts__nav .slider-arrows__left',
				},
				breakpoints: {
					1200: {
						centeredSlides: false
					}
				}
			});
		});
	}
})