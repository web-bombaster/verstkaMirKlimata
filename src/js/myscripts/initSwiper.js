// Инициализация слайдера swiper
// https://swiperjs.com/

function initSwiper() {

	// if (document.querySelector('.filter__fieldset .swiper')) {
	// 	const filterSwiper = new Swiper('.filter__fieldset .swiper', {
	// 		direction: "vertical",
	// 		slidesPerView: "auto",
	// 		freeMode: true,
	// 		scrollbar: {
	// 			el: ".swiper-scrollbar",
	// 		},
	// 		mousewheel: true,
	// 	});
	// };

	// Блок hero на главной
	if (document.querySelector('.jsHeroSlider')) {
		const prodSliderInner = new Swiper('.jsHeroSlider', {
			spaceBetween: 20,
			slidesPerView: 1,
			loop: true,
			pagination: {
				el: ".hero-slider__pagination",
			},
			navigation: {
				nextEl: ".hero-slider__next",
				prevEl: ".hero-slider__prev",
			},
		});
	};

	// ХИТЫ ПРОДАЖ на главной
	if (document.querySelector('.jsProductsListSlider')) {
		const prodSliderInner = new Swiper('.jsProductsListSlider', {
			spaceBetween: 10,
			slidesPerView: 1,
			loop: true,
			breakpoints: {
				500: {
					slidesPerView: 2,
					spaceBetween: 10,
					loop: true,
				},
				768: {
					slidesPerView: 3,
					spaceBetween: 20,
					loop: true,
				},
				1401: {
					slidesPerView: 4,
					spaceBetween: 20,
					loop: true,
				},
			},
			navigation: {
				nextEl: ".products-list__next",
				prevEl: ".products-list__prev",
			},
		});
	};

	// Рекомендуем посмотреть
	if (document.querySelector('.jsRecommendedProductsSlider')) {
		const prodSliderInner = new Swiper('.jsRecommendedProductsSlider', {
			spaceBetween: 10,
			slidesPerView: 1,
			loop: true,
			breakpoints: {
				500: {
					slidesPerView: 2,
					spaceBetween: 10,
					loop: true,
				},
				768: {
					slidesPerView: 3,
					spaceBetween: 20,
					loop: true,
				},
				1401: {
					slidesPerView: 4,
					spaceBetween: 20,
					loop: true,
				},
				1501: {
					slidesPerView: 5,
					spaceBetween: 20,
					loop: true,
				},
			},
			navigation: {
				nextEl: ".recommended-products__next",
				prevEl: ".recommended-products__prev",
			},
		});
	};

	// ПОПУЛЯРНЫЕ БРЕНДЫ на главной
	if (document.querySelector('.jsBrandsList')) {
		const brandsList = new Swiper('.jsBrandsList', {
			// slidesPerView: 5,
			loop: true,
			spaceBetween: 20,
			autoplay: {
				delay: 2500,
			},
			navigation: {
				nextEl: '.brands__button-next',
				prevEl: '.brands__button-prev',
			},

			breakpoints: {
				319: {
					slidesPerView: 2,
				},

				767: {
					slidesPerView: 3,
				},

				991: {
					slidesPerView: 4,
				},
				1199: {
					slidesPerView: 5,
				},
			},
		});
	};


	// Страница товара
	if (document.querySelector('.slider-photo')) {
		let miniSlider = new Swiper('.slider-thumbs', {
			slidesPerView: "auto",
			// centeredSlides: true,
			// direction: 'vertical',
			spaceBetween: 10,
			watchSlidesProgress: true,
			freeMode: true, // при перетаскивании превью ведет себя как при скролле
			// loop: true,
			// navigation: {
			// 	nextEl: ".collection-mini-slider__next",
			// 	prevEl: ".collection-mini-slider__prev",
			// },
		});

		const bigSlider = new Swiper('.slider-photo', {
			slidesPerView: 1,
			spaceBetween: 20,
			loop: true,
			thumbs: {
				swiper: miniSlider,
			},
			navigation: {
				nextEl: ".slider-photo__next",
				prevEl: ".slider-photo__prev",
			},
			// pagination: {
			// 	el: ".slider-photo__pagination",
			// 	type: "fraction",
			// },
		});
	};

};

// window.addEventListener("resize", initSwiper);
window.addEventListener("resize", function () {
	// setTimeout(initSwiper, 200);
	initSwiper();
	// swiper.init();
});

initSwiper();


