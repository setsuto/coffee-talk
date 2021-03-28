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
