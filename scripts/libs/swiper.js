var slide1 = new Swiper('#heroSlider', {
  // initialSlide: 1,
  loop: true,
  grabCursor: true,
  effect: 'fade',
  // centeredSlides: true,
  slidesPerView: 1,
  speed: 1000,
  autoplay: {
    delay: 3000,
  },
});

var slide2 = new Swiper('#top-memberSlider', {
  // initialSlide: 1,
  // centeredSlides: true,
  loop: true,
  grabCursor: true,
  effect: 'slide',
  slidesPerView: 2,
  spaceBetween: 10,
  speed: 1000,
  breakpoints: {
    600: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 4,
    },
  },
  autoplay: {
    delay: 4000,
  },
});



var galleryThumbs = new Swiper('#gallery-thumbs', {
  spaceBetween: 10,
  slidesPerView: 5,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});

var galleryTop = new Swiper('#gallery-top', {
  // spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: galleryThumbs
  }
});


