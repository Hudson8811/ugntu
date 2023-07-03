(function ($) {
  'use strict';
	$(window).on('load', function () {
		let sliderHeaderMenu = document.querySelectorAll('.__js_slider-header-menu');
		let sliderHeaderMenu2 = document.querySelectorAll('.__js_slider-header-menu-2');
		let sliderMenu = document.querySelectorAll('.__js_slider-menu');
		let newsSlider = document.querySelectorAll('.__js_slider-news');
		let otherNewsSlider = document.querySelectorAll('.__js_slider-other-news');
		let otherEventsSlider = document.querySelectorAll('.__js_slider-other-events');
		let consultSlider = document.querySelectorAll('.__js_slider-consult');
		let historySlider = document.querySelectorAll('.__js_slider-history');
		let lifeSlider = document.querySelectorAll('.__js_slider-life');
		let documentsSlider = '.__js_slider-documents';
        let gallerySliderSelector = '.__js_slider-gallery';
        let gallerySliderThumbsSelector = '.__js_slider-gallery-thumbs';

		const options = {
			speed: 500,
			pagination: false
		}

		if (sliderHeaderMenu.length > 0) {
			sliderHeaderMenu.forEach(elem => {
				new Swiper(elem, {
					...options,
					slidesPerView: 2.2,
					spaceBetween: 9,
					loop: true,
					centeredSlides: true,
					navigation: {
						nextEl: '.first-screen__nav .slider-arrows__right',
						prevEl: '.first-screen__nav .slider-arrows__left',
					},
					breakpoints: {
						561: {
							slidesPerView: 4.96,
							spaceBetween: 14,
							centeredSlides: false
						}
					}
				});
			});
		}

		if (sliderHeaderMenu2.length > 0) {
			sliderHeaderMenu2.forEach(elem => {
				new Swiper(elem, {
					...options,
					autoHeight: true,
					slidesPerView: 4,
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
					slidesPerView: 2.55,
					navigation: {
						nextEl: '.news__nav .slider-arrows__right',
						prevEl: '.news__nav .slider-arrows__left',
					},
					breakpoints: {
						1200: {
							spaceBetween: 35,
							slidesPerView: 2.37,
						},
						1900: {
							spaceBetween: 35,
							slidesPerView: 2,
						},
					}
				});
			});
		}

		if (otherNewsSlider.length > 0) {
			otherNewsSlider.forEach(elem => {
				new Swiper(elem, {
					...options,
					spaceBetween: 20,
					slidesPerView: 1.55,
					navigation: {
						nextEl: '.news__nav--other .slider-arrows__right',
						prevEl: '.news__nav--other .slider-arrows__left',
					},
					breakpoints: {
						768: {
							slidesPerView: 2.67,
						},
						1024: {
							slidesPerView: 3.67,
						},
						1200: {
							spaceBetween: 35,
							slidesPerView: 3.67,
						}
					}
				});
			});
		}

		if (otherEventsSlider.length > 0) {
			otherEventsSlider.forEach(elem => {
				new Swiper(elem, {
					...options,
					spaceBetween: 20,
					slidesPerView: 1.55,
					navigation: {
						nextEl: '.news__nav--other .slider-arrows__right',
						prevEl: '.news__nav--other .slider-arrows__left',
					},
					breakpoints: {
						768: {
							slidesPerView: 2.67,
						},
						1024: {
							slidesPerView: 3.67,
						},
						1200: {
							spaceBetween: 35,
							slidesPerView: 3.44,
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
				loop: false,
				navigation: {
					nextEl: '.consult__nav .slider-arrows__right',
					prevEl: '.consult__nav .slider-arrows__left',
				},
				breakpoints: {
					1900: {
						spaceBetween: 33,
						slidesPerView: 5.2,
						centeredSlides: true
					},
					1550: {
						spaceBetween: 33,
						slidesPerView: 4,
						centeredSlides: true
					},
					1200: {
						spaceBetween: 33,
						slidesPerView: 3,
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
				});
			});
		}

		if ($(documentsSlider).length > 0){
			$(documentsSlider).each(function (){
				let galleryMain = $(this);
				let $parent = galleryMain.closest('.paragraph--type--slider-docs');
				new Swiper(galleryMain[0], {
					...options,
					slidesPerView: 1.2,
					spaceBetween: 15,
					navigation: {
						nextEl: $parent.find('.documents__nav .slider-arrows__right')[0],
						prevEl: $parent.find('.documents__nav .slider-arrows__left')[0],
					},
					breakpoints: {
						768: {
							slidesPerView: 2.2,
						},
						1200: {
							slidesPerView: 3.2,
							spaceBetween: 45,
						}
					}
				});
			});
		}



        if ($(gallerySliderSelector).length > 0){
            $(gallerySliderSelector).each(function (){
                let galleryMain = $(this);
                let galleryThumbs = galleryMain.siblings(gallerySliderThumbsSelector);
                let galleryParent = galleryMain.parent();
                let galleryBtnNext = galleryParent.find('.slider-arrows__right');
                let galleryBtnPrev = galleryParent.find('.slider-arrows__left');
                let galleryCaption = galleryParent.next('.news-single__gallery-caption');

                let galleryOptions = {
                    ...options,
                    slidesPerView: 1,
                    on: {
                        init: function (){
                            let swiper = this;
                            let slideTitle = $(swiper.slides[swiper.activeIndex]).attr('data-title');
                            galleryCaption.html(function () {
                                return '<span>' + slideTitle + '</span>';
                            });
                        },
                        slideChange: function () {
                            let swiper = this;
                            let slideTitle = $(swiper.slides[swiper.activeIndex]).attr('data-title');
                            galleryCaption.html(function () {
                                return '<span>' + slideTitle + '</span>';
                            });
                        }
                    }
                };
                if (galleryBtnNext.length > 0 && galleryBtnPrev.length > 0){
                    galleryOptions = {
                        ...galleryOptions,
                        navigation: {
                            nextEl: galleryBtnNext[0],
                            prevEl: galleryBtnPrev[0],
                        }
                    };
                }
                if (galleryThumbs.length > 0){
                    let galleryThumbsSlider = new Swiper(galleryThumbs[0], {
                        ...options,
                        slidesPerView: 'auto',
                        spaceBetween: 18
                    });
                    galleryOptions = {
                        ...galleryOptions,
                        thumbs: {
                            swiper: galleryThumbsSlider
                        }
                    };
                }
                let galleryMainSlider = new Swiper(galleryMain[0], galleryOptions);
            });
        }


	})
})(jQuery);