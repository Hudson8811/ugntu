$(document).ready(function() {
	var cultureHovered = $('.culture__item[data-id]');
	var cultureBg = $('.culture__bg-image');
	var eventsHovered = $('.events__item');
	var eventsBg = $('.events__bg-image');
	var mainHovered = $('.__js_slider-header-menu-2 li a');
	var mainBg = $('.first-screen__bg');
	var vacanciesThumbs = $('.vacancies__thumb-item');
	var vacanciesSlides = $('.vacancies__slide');
	var newsThumbs = $('.news__tags-item');
	var newsSlides = $('.news__slider');
	var firstBlock = $('.first-screen .first-screen__wrapper');

	$('.lang-switcher select').select2({
		minimumResultsForSearch: Infinity
	});

	$('.consult__select').select2({
		minimumResultsForSearch: Infinity
	});

	/**
	 * Появление первого блока при загрузке
	 */
	firstBlock.addClass('loaded');

	/**
	 * Изменение фона при наведении
	 */
	function bgHovered(elemsHovered, bg, urlDir) {
		elemsHovered.on('mouseenter', function () {
			var that = $(this);

			if (bg.has('video')) {
				setTimeout(function () {
					bg.find('video').hide();
				}, 200);
			}

			/* Переключение темы плитки */
			if ($(this).data('theme') && $(this).data('theme') === 'dark') {
				$('.culture').addClass('dark');
			}

			bg.fadeOut(100);

			setTimeout(function () {
				bg.css('background-image', 'url("' + urlDir + that.data('id') + '.jpg")')
			}, 200);

			setTimeout(function () {
				bg.fadeIn(100);
			}, 200);
		});

		elemsHovered.on('mouseleave', function () {
			if (bg.has('video')) {
				bg.find('video').show();
			}

			/* Переключение темы плитки */
			if ($(this).data('theme') && $(this).data('theme') === 'dark') {
				$('.culture').removeClass('dark');
			}
		})
	}

	if (window.matchMedia('(min-width: 1200px)').matches) {
		bgHovered(cultureHovered, cultureBg, 'images/culture/');
		bgHovered(eventsHovered, eventsBg, 'images/bg/');
		bgHovered(mainHovered, mainBg, 'images/bg-main/');
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
		newsThumbs.removeClass('active');
		$(this).addClass('active');
		newsSlides.hide().eq($(this).index()).fadeIn(300);
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
})