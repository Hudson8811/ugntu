$(window).on('load', function(){
	var filterItem = $('.news-page__filter-btn');
	var filterActiveClass = 'news-page__filter-btn--active';

	var grid = $('.news-page__grid-wrapper').isotope({
		itemSelector: '.news-page__item',
		layoutMode: 'packery',
		packery: {
			gutter: 0,
		},
	});

	filterItem.on('click', function() {
		var filterValue = $(this).attr('data-filter');

		$(this).addClass(filterActiveClass).siblings().removeClass(filterActiveClass);
		grid.isotope({ filter: filterValue });
	});
});