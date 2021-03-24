const slide1 = new Swiper('#heroSlider', {
  // initialSlide: 1,
  loop: true,
  grabCursor: true,
  effect: 'fade',
  centeredSlides: true,
  slidesPerView: 1,
  // spaceBetween: 60,
  speed: 1000,
  breakpoints: {
    1024: {
      slidesPerView: 1,
    },
  },
  autoplay: {
    delay: 6000,
  },
});

const slide2 = new Swiper('#top-memberSlider', {
  // initialSlide: 1,
  // centeredSlides: true,
  loop: true,
  grabCursor: true,
  effect: 'slide',
  slidesPerView: 1,
  spaceBetween: 10,
  speed: 1000,
  breakpoints: {
    600: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 2,
    },
  },
  autoplay: {
    delay: 4000,
  },
});

const galleryThumbs = new Swiper('#gallery-thumbs', {
  spaceBetween: 10,
  slidesPerView: 5,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});

const galleryTop = new Swiper('#gallery-top', {
  // spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: galleryThumbs,
  },
});
