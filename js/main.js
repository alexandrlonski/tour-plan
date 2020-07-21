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
ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map("map", {
    center: [7.838196, 98.298813],
    zoom: 14
  });
  var myGeoObject = new ymaps.GeoObject({
    geometry: {
      type: "Point", // тип геометрии - точка
      coordinates: [7.838196, 98.298813], // координаты точки
    }
  });

  myMap.geoObjects.add(myGeoObject);
}