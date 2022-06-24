$(document).ready(function() {
	const burger = $('.header__burger');
	const mainMenu = $('.main-menu');
	const subMenu = $('.main-menu__submenu');
	const closeBtn = $('.main-menu__close');
	const hoveredOuter = $('.main-menu__outer > ul');
	var header = $('.header');
	var headerOffset = header.offset().top;
	var headerHeight = header.outerHeight();
	var scroll = $(window).scrollTop();
	var isScroll = false;
	var isRelativePos = !!header.hasClass('header--relative');

	$(window).on('resize', function () {
		mainMenu.removeClass('open');
		subMenu.removeClass('open');
		hoveredOuter.removeClass('inactive');
		hoveredOuter.find('> li > a').removeClass('hovered');
		$('body').removeClass('body-scroll-lock');
	});

	burger.on('click', function () {
		mainMenu.toggleClass('open');
		$('body').toggleClass('body-scroll-lock');
	});

	closeBtn.on('click', function () {
		mainMenu.removeClass('open');
		subMenu.removeClass('open');
		hoveredOuter.removeClass('inactive');
		hoveredOuter.find('> li > a').removeClass('hovered');
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
				hoveredOuter.removeClass('inactive');
				hoveredOuter.find('> li > a').removeClass('hovered');
				$('body').removeClass('body-scroll-lock');
			}
		}
	});

	if (window.matchMedia('(min-width: 1024px)').matches) {
		hoveredOuter.find('> li > a').hover(
			function () {
				hoveredOuter.closest('ul').addClass('inactive');
				hoveredOuter.find('> li > a').next().removeClass('open');
				hoveredOuter.find('> li > a').removeClass('hovered');
				$(this).addClass('hovered');
				$(this).next().addClass('open');
			},
			function () {}
		);
	}

	/* Фиксированный хэдер */
	$(window).on('scroll', function () {
		if (window.matchMedia('(min-width: 1200px)').matches) {
			scroll = $(window).scrollTop();

			if (scroll >= headerOffset + headerHeight) {
				isScroll = true;

				headerHeight = isScroll ? header.outerHeight() : null;
				header.addClass('header--fixed header--theme-dark');

				if (!header.hasClass('is-fixed')) {
					header.css({'top': -headerHeight + 'px', 'transform': 'translateY(' + headerHeight + 'px)'}).addClass('is-fixed');

					if (isRelativePos) {
						$('body').css('padding-top', headerHeight + 'px');
						header.addClass('header--theme-dark');
					}
				}
			} else {
				isScroll = false;
				header.removeClass('header--fixed header--theme-dark' + ' is-fixed').removeAttr('style');
				$('body').css('padding-top', 0);

				if (isRelativePos) {
					header.addClass('header--theme-dark');
				}
			}
		}
	});
})