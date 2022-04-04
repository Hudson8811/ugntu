$(document).ready(function() {
	var cultureHovered = $('.culture__item[data-id]');
	var cultureBg = $('.culture__bg-image');
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
	cultureHovered.on('mouseenter', function () {
		var that = $(this);

		cultureBg.fadeOut(100);

		setTimeout(function () {
			cultureBg.css('background-image', 'url("images/culture/' + that.data('id') + '.jpg")')
		}, 200);

		setTimeout(function () {
			cultureBg.fadeIn(100);
		}, 200);
	});

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