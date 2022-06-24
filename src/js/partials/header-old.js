$(document).ready(function() {
	const burger = $('.header-old__burger');
	const mainMenu = $('.main-menu');
	const subMenu = $('.main-menu__submenu');
	const closeBtn = $('.main-menu__close');
	const hoveredOuter = $('.main-menu__outer > ul');
	var header_old = $('.header-old');
	var header_oldOffset = header_old.offset().top;
	var header_oldHeight = header_old.outerHeight();
	var scroll = $(window).scrollTop();
	var isScroll = false;
	var isRelativePos = !!header_old.hasClass('header-old--relative');

	$(window).on('resize', function () {
		mainMenu.removeClass('open');
		subMenu.removeClass('open');
		hoveredOuter.removeClass('inactive');
		hoveredOuter.find('> li > a').removeClass('hovered');
		$('body').removeClass('body-scroll-lock');
	});

	burger.on('click', function () {
		mainMenu.addClass('open');
		$('body').addClass('body-scroll-lock');
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

			if (scroll >= header_oldOffset + header_oldHeight) {
				isScroll = true;

				header_oldHeight = isScroll ? header_old.outerHeight() : null;
				header_old.addClass('header-old--fixed header-old--theme-dark');

				if (!header_old.hasClass('is-fixed')) {
					header_old.css({'top': -header_oldHeight + 'px', 'transform': 'translateY(' + header_oldHeight + 'px)'}).addClass('is-fixed');

					if (isRelativePos) {
						$('body').css('padding-top', header_oldHeight + 'px');
						header_old.addClass('header-old--theme-dark');
					}
				}
			} else {
				isScroll = false;
				header_old.removeClass('header-old--fixed header-old--theme-dark' + ' is-fixed').removeAttr('style');
				$('body').css('padding-top', 0);

				if (isRelativePos) {
					header_old.addClass('header-old--theme-dark');
				}
			}
		}
	});
})