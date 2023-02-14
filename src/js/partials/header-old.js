(function ($) {
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
		$(this).toggleClass('active');
		mainMenu.toggleClass('open');
		subMenu.removeClass('open');
		$('body').toggleClass('body-scroll-lock');
		const windowInnerWidth = window.innerWidth
/*
		if (windowInnerWidth < 561) {
			$('.header__group-nav, .header__right').toggleClass('active');

		} */
	});
/* 	$('.search-block__close').on('click', function () {
		const windowInnerWidth = window.innerWidth

		if (windowInnerWidth < 561) {
			$('.header__group-nav, .header__right').removeClass('active');
		}
	}); */


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
				burger.removeClass('active');
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

	if ($('.header-inner').hasClass('header-inner--white')) {
		$(window).on('scroll', function () {
			if (window.matchMedia('(min-width: 1200px)').matches) {
				scroll = $(window).scrollTop();

				if (scroll >= 90) {
					$('.header-inner').removeClass('header-inner--white')
				} else {
					$('.header-inner').addClass('header-inner--white')
				}
			}
		});
	}

	if ($('.first-screen__top') && $('.first-screen__top').length > 0) {
		$(window).on('scroll', function () {
			if (window.matchMedia('(min-width: 1200px)').matches) {
				scroll = $(window).scrollTop();

				if (scroll >= 120) {
					$('.first-screen__top').addClass('first-screen__top--white')
				} else {
					$('.first-screen__top').removeClass('first-screen__top--white')
				}
			}
		});
	}

	var scrollPos = 0;
	$(window).scroll(function(){
		var st = $(this).scrollTop();
		if (st > scrollPos){
			scroll = $(window).scrollTop();
			if (scroll >= 300) {
				$('.first-screen__top, .header-inner').addClass('fixed-scroll-top')
			}
		} else {
			$('.first-screen__top, .header-inner').removeClass('fixed-scroll-top')
		}
		scrollPos = st;
	});

	if ($('.header--back-color-new')) {
		$(window).on('scroll', function () {
			if (window.matchMedia('(min-width: 1200px)').matches) {
				scroll = $(window).scrollTop();

				if (scroll >= 120) {
					$('.header--back-color-new').addClass('active')
				} else {
					$('.header--back-color-new').removeClass('active')
				}
			}
		});
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

})(jQuery);