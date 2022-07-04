var swiper = new Swiper(".mySwiper", {
	loop: true,
	spaceBetween: 10,
	slidesPerView: 1,
	watchSlidesProgress: true,
	effect: 'fade',
});
var swiper2 = new Swiper(".mySwiper2", {
   loop: true,
   spaceBetween: 9,
   slidesPerView: 2,
	centeredSlides: true,
	navigation: {
		nextEl: ".slider-arrows__right",
		prevEl: ".slider-arrows__left"
	},
	breakpoints: {
		560: {
			spaceBetween: 14,
			centeredSlides: false,
			slidesPerView: 4,
		},
	},
	thumbs: {
		swiper: swiper,
   },
   watchSlidesProgress: true,
});


const video__playerblock = document.getElementById("block-video__player");

const playblock = document.querySelector('.block-video__img');
const block__video__body = document.querySelector('.block-video__play-btn');

const contacts__slider  = document.querySelector('.contacts__slider ');
const block__video = document.querySelector('.block-video');
const block__video_back = document.querySelector('.block-video-back');

if (video__playerblock){
	playblock.addEventListener("click", function(e) {
		playClipblock(video__playerblock);
		this.classList.add('hide');
		block__video__body.classList.add('hide');
		video__playerblock.classList.add('active');
	});

	video__playerblock.onpause = (event) => {
		if (video__playerblock.readyState === 4){
			playblock.classList.remove('hide');
			block__video__body.classList.remove('hide');
            video__playerblock.classList.remove('active');
		}
	};
}

function playClipblock(media) {
	media.play();
}
function stopClipblock(media) {
	media.pause();
}

if (contacts__slider) {
	contacts__slider.addEventListener("click", function(e) {
		block__video.classList.add('active');
		block__video_back.classList.add('active');

		playClipblock(video__playerblock);
		playblock.classList.add('hide');
		block__video__body.classList.add('hide');
		video__playerblock.classList.add('active');
	});
	
	block__video_back.addEventListener("click", function(e) {
		block__video.classList.remove('active');
		block__video_back.classList.remove('active');
		stopClipblock(video__playerblock);
	});
}








