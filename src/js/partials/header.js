$(document).ready(function() {
	const burger = $('.header__burger');
	const mainMenu = $('.main-menu');
	const subMenu = $('.main-menu__submenu');
	const closeBtn = $('.main-menu__close');
	const hoveredLinks = $('.main-menu__outer > ul > li > a');
	var header = $('.header');
	var headerOffset = header.offset().top;
	var headerHeight = header.outerHeight();
	var scroll = $(window).scrollTop();
	var isScroll = false;
	var isRelativePos = !!header.hasClass('header--relative');

	$(window).on('resize', function () {
		mainMenu.removeClass('open');
		subMenu.removeClass('open');
		hoveredLinks.parent().removeClass('hovered');
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
		hoveredLinks.parent().removeClass('hovered');
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
				hoveredLinks.parent().removeClass('hovered');
				$('body').removeClass('body-scroll-lock');
			}
		}
	});

	if (window.matchMedia('(min-width: 1024px)').matches) {
		hoveredLinks.hover(
			function () {
				hoveredLinks.parent().addClass('hovered');
				hoveredLinks.next().removeClass('open');
				$(this).parent().removeClass('hovered');
				$(this).next().addClass('open');
			},
			function () {}
		);
	}

	/* Фиксированный хэдер */
	$(window).on('scroll', function () {
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
	});
})