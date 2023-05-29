(function ($) {
  'use strict';
  $(document).ready(function() {
  	var cultureHovered = $('.culture__item[data-id]');
  	var cultureBg = $('.culture__bg img');
  	var eventsHovered = $('.events__item');
  	var eventsBg = $('.events__bg img');
  	var mainHovered = $('.__js_slider-header-menu-2 li');
  	var mainBg = $('.first-screen__bg-hovered img');
  	var vacanciesThumbs = $('.vacancies__thumb-item');
  	var vacanciesSlides = $('.vacancies__slide');
  	var newsThumbs = $('.news__tags-item');
  	var newsSlides = $('.news__slider');
  	//var firstBlock = $('.first-screen .first-screen__wrapper');
  	var breadCrumbsOpacity = $('.active-crumb-opacity');
  	var breadCrumbsText = $('.active-crumb-text');
  	var searchOpen = $('.js-open-search');
  	var searchBlock = $('.search-block');
  	var searchClose = $('.search-block__close');

  	searchOpen.click(function (e) {
  		e.preventDefault();
  		$('body').addClass('body-scroll-lock');
  		searchBlock.addClass('opened');
  	});

  	searchClose.click(function () {
  		$('body').removeClass('body-scroll-lock');
  		searchBlock.removeClass('opened');
  	});

  	$('.lang-switcher select').select2({
  		minimumResultsForSearch: Infinity
  	});

  	$('.consult__select').select2({
  		minimumResultsForSearch: Infinity
  	});

  	$('.events-page__select').select2({
  		minimumResultsForSearch: Infinity,
  		placeholder: 'Выбрать дату',
  		width: 'element'
  	});

  	$('.events-page__select').val(null).trigger('change');

  	/**
  	 * Клик на label активирует select2 dropdown
  	 */
  	$('.label-for-select').click(function () {
  		$('.events-page__select').select2('open');
  	})

  	/**
  	 * Появление первого блока при загрузке
  	 */
  	//firstBlock.addClass('loaded');

  	/**
  	 * Изменение фона при наведении
  	 */
  	$('.events__calendar').hover(
  		function () {
  			$('.events').removeClass('events--dark');
  			$('.events__bg-image').fadeIn(50);
  		},
  		function () {
  			eventsBg.fadeOut(20);
  			$('.events').addClass('events--dark');
  			$('.events__bg-image').fadeOut(50);
  		}
  	);

  	cultureBg.hide();
  	cultureHovered.hover(
  		function () {
  			cultureBg.hide();
  			cultureBg.eq($(this).data('id')).fadeIn(500);

  			/*if ($(this).data('theme') && $(this).data('theme') === 'dark') {
  				$('.culture').addClass('dark');
  			}*/
  		},
  		function () {
  			cultureBg.fadeOut(500);

  			/*if ($(this).data('theme') && $(this).data('theme') === 'dark') {
  				$('.culture').removeClass('dark');
  			}*/
  		}
  	);

  	function bgHover(elemsHovered, bg) {
  		elemsHovered.hover(
  			function () {
  				bg.hide();
  				bg.eq($(this).index()).fadeIn(300);

  				if (bg.has('video')) {
  					bg.find('video').hide();

  					if ($(this).find('.multiple')) {
  						$(this).find('.multiple__inner').slideDown(300);
  					}
  				}
  			},
  			function () {
  				bg.fadeOut(300);

  				if (bg.has('video')) {
  					bg.find('video').show();

  					if ($(this).find('.multiple')) {
  						$(this).find('.multiple__inner').slideUp(300);
  					}
  				}
  			}
  		);
  	}

  	if (window.matchMedia('(min-width: 1200px)').matches) {
  		bgHover(eventsHovered, eventsBg);
  		bgHover(mainHovered, mainBg);
  	}

  	/**
  	 * Табы
  	 */
  	vacanciesThumbs.on('mouseenter click', function () {
  		vacanciesThumbs.removeClass('active');
  		$(this).addClass('active');
  		vacanciesSlides.hide().eq($(this).index()).fadeIn(300).css('display', 'flex');
  	});

  	newsThumbs.on('click', function () {
      $(newsThumbs).each(function(index, el) {
        $(el).removeClass('active');
      });
      $(this).addClass('active')
      let tid = $(this).data('tid');
      if (tid === 'all') {
        $('.news__slider').find('.news-card').each(function(index, el) {
          $(el).fadeIn(300);
        });
      }
      else {
        $('.news__slider').find('.news-card').each(function(index, el) {
          console.log('news-category-' + tid);
          if (!$(el).hasClass('news-category-' + tid)) {
            $(el).fadeOut(300);
          }
          else {
            $(el).fadeIn(300);
          }
        });
      }
  	});

  	/**
  	 * Инициализация свайпера в табах
  	 */
  	setTimeout(function () {
  		$('.vacancies__slide:not(.active)').hide();
  		$('.vacancies__slider').css('opacity', 1);

  		$('.news__slider:not(.active)').hide();
  		$('.news__sliders-wrapper').css('opacity', 1);
  	}, 500);

  	/**
  	 * Адаптивная таблица
  	 */
  	$.each($('.article__table tbody tr'), function () {
  		var title = $(this).parent('tbody').siblings('thead').find('th');

  		$.each($(this).find('td'), function (index) {
            $(this).attr('aria-label', title.eq(index).text()).html('<div>' + $(this).html() + '</div>');
  		});
  	});

  	/**
  	 * Частичное отображение активной ссылки
  	 * хлебных крошек при слишком длинной фразе
  	 */
  	if (breadCrumbsText) {
  		breadCrumbsOpacity.attr('stop-opacity', breadCrumbsText.text().length > 30 ? '0' : '1');
  	}




  	$('.culture__item-link').hover(
  		function () {
  			$('.culture__item-link').addClass('culture-hover');
  			$(this).addClass('culture-hover-own');
  		},
  		function () {
  			$('.culture__item-link').removeClass('culture-hover');
  			$(this).removeClass('culture-hover-own');
  		}
  	);

  	$('.main-menu__click-mobile').click(function(event) {
  		$(this).toggleClass('active').next().slideToggle(800);
  	});

  	const article = document.querySelector('.article');
  	const header_univ = document.querySelector('.header-univ');
  	const event_spage = document.querySelector('.events-page');
  	const main_page = document.querySelector('.main-page');
  	if (article) {
  		header_univ.classList.add('active');
  	}
  	if (event_spage) {
  		header_univ.classList.add('active');
  	}
  	if (main_page) {
  		header_univ.classList.add('active');
  	}

    var swiper = new Swiper(".status-main-page__swiper", {
  		spaceBetween: 10,
  		slidesPerView: '1',
  		loop: true,
  		breakpoints: {
  			450: {
  				spaceBetween: 15,
  				slidesPerView: '2',
  			},
  			767: {
  				spaceBetween: 20,
  				slidesPerView: '3',
  			},
  		},
  		navigation: {
  			nextEl: ".status-main-page__btn-right",
  			prevEl: ".status-main-page__btn-left"
  		},
  		speed: 500,
  	});

    if ($('.main-page__img').length > 0) {
      gsap.to(".main-page__img", {
    		yPercent: -30,
    		ease: "none",
    		scrollTrigger: {
    			trigger: ".main-page__img-wrapper",
    			scrub: 1,
    		},
    	});
    }


    $('.click').on('click', function() {

  		let href = $(this).attr('href');

  		$('html, body').animate({
  			scrollTop: $(href).offset().top
  		}, {
  			duration: 300,
  			easing: "linear"
  		});

  		return false;
  	});

  	$('.contrastSwitcher').click(function (e) {
  		e.preventDefault();
  		$('body').toggleClass('visually-impaired');
  	});

    var swiper = new Swiper(".students__swiper-small", {
  		spaceBetween: 10,
  		slidesPerView: 'auto',
  		freeMode: true,
  		watchSlidesProgress: true,
  		allowTouchMove: true,
  		breakpoints: {
  			768: {
  				spaceBetween: 18,
  			},
  		},
     });
     var swiper2 = new Swiper(".students__swiper-big", {
  		spaceBetween: 10,
  		slidesPerView: '1',
  		navigation: {
  			nextEl: ".students-button-next",
  			prevEl: ".students-button-prev",
  		},
  		thumbs: {
  			swiper: swiper,
  		},
  	});

    const main_page__img = document.querySelector('.main-page__img');
  	if (main_page__img) {
  		gsap.to(".main-page__img", {
  			yPercent: -30,
  			ease: "none",
  			scrollTrigger: {
  				trigger: ".main-page__img-wrapper",
  				scrub: 1,
  			},
  		});
  	}



  	const students__img = document.querySelector('.students__img');
  	if (students__img) {
  		gsap.to(".students__img", {
  			yPercent: -40,
  			ease: "none",
  			scrollTrigger: {
  				trigger: ".students__img-wrapper",
  				scrub: 1,
  			},
  		});
  	}

  })
})(jQuery);
