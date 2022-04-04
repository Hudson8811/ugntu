$(document).ready(function() {
	var cultureHovered = $('.culture__item[data-id]');
	var cultureBg = $('.culture__bg-image');
	var eventsHovered = $('.events__item');
	var eventsBg = $('.events__bg-image');
	var vacanciesThumbs = $('.vacancies__thumb-item');
	var vacanciesSlides = $('.vacancies__slide');
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

			bg.fadeOut(100);

			setTimeout(function () {
				bg.css('background-image', 'url("' + urlDir + that.data('id') + '.jpg")')
			}, 200);

			setTimeout(function () {
				bg.fadeIn(100);
			}, 200);
		});
	}

	bgHovered(cultureHovered, cultureBg, 'images/culture/');

	if (window.matchMedia('(min-width: 1200px)').matches) {
		bgHovered(eventsHovered, eventsBg, 'images/bg/');
	}

	/**
	 * Табы
	 */
	vacanciesThumbs.on('mouseenter click', function () {
		vacanciesThumbs.removeClass('active');
		$(this).addClass('active');
		vacanciesSlides.hide().eq($(this).index()).fadeIn(300).css('display', 'flex');
	});

	/**
	 * Инициализация свайпера в табах
	 */
	setTimeout(function () {
		$('.vacancies__slide:not(.active)').hide();
		$('.vacancies__slider').css('opacity', 1);
	}, 500);
})