window.addEventListener('load', () => {
	const breakpoint = 1200;
	const eventsCarouselEl = document.querySelector('.__js_slider-events');
	const vacanciesListCarouselEl = document.querySelectorAll('.__js_slider-vacancies-list');
	let width = document.documentElement.clientWidth;
	let carousel = null;
	let isInit = false;

	const checkResolutionForSlider = (element) => {
		if (element) {
			if (width < breakpoint) {
				initCarousel(element);
				isInit = true;
			}

			window.addEventListener('resize', () => {
				width = document.documentElement.clientWidth;

				if (width < breakpoint && !isInit) {
					initCarousel(element);
					isInit = true;
				} else if (width >= breakpoint && isInit) {
					carousel.destroy();
					isInit = false;
				}
			});

			function initCarousel(el) {
				carousel = new Swiper(el, {
					slidesPerView: 1.25,
					speed: 300,
					spaceBetween: 18
				});
			}
		}
	}

	if (eventsCarouselEl) {
		checkResolutionForSlider(eventsCarouselEl);
	}

	vacanciesListCarouselEl.forEach(el => {
		checkResolutionForSlider(el);
	});
});