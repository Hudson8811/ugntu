$(document).ready(function() {
	const burger = $('.header__burger');
	const mainMenu = $('.main-menu');
	const subMenu = $('.main-menu__submenu');
	const closeBtn = $('.main-menu__close');
	const hoveredLinks = $('.main-menu__outer > ul > li > a');

	$(window).on('resize', function () {
		mainMenu.removeClass('open');
		subMenu.removeClass('open');
		$('.main-menu__outer').removeClass('.hovered');
		$('body').removeClass('body-scroll-lock');
	});

	burger.on('click', function () {
		mainMenu.addClass('open');
		$('body').addClass('body-scroll-lock');
	});

	closeBtn.on('click', function () {
		mainMenu.removeClass('open');
		subMenu.removeClass('open');
		$('body').removeClass('body-scroll-lock');
	})

	$(document).on('click', function(e) {
		if (mainMenu.hasClass('open')) {
			if (!mainMenu.is(e.target)
				&& mainMenu.has(e.target).length === 0
				&& !burger.is(e.target)
				&& burger.has(e.target).length === 0
			) {
				mainMenu.removeClass('open');
				subMenu.removeClass('open');
				$('body').removeClass('body-scroll-lock');
			}
		}
	});

	if (window.matchMedia('(min-width: 1024px)').matches) {
		hoveredLinks.hover(
			function () {
				hoveredLinks.closest('.main-menu__outer').removeClass('hovered');
				hoveredLinks.next().removeClass('open');
				$(this).closest('.main-menu__outer').addClass('hovered');
				$(this).next().addClass('open');
			},
			function () {}
		);
	}
})