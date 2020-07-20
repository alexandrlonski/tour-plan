var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.slider-button--next',
    prevEl: '.slider-button--prev',
  },
  // Keyboard
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  speed: 800,
  // grabCursor: true,
  // simulateTouch: false,


})