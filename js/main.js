$(document).ready(function () {
  var hotelSlider = new Swiper('.hotel-slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.hotel-slider__button_next',
      prevEl: '.hotel-slider__button_prev',
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
  var reviewsSlider = new Swiper('.reviews-slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.reviews-slider__button_next',
      prevEl: '.reviews-slider__button_prev',
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
  $('.parallax-window').parallax({
    imageSrc: 'img/newsletter-bg.jpg'
  });

  var menuButton = document.querySelector(".menu-button")
  menuButton.addEventListener("click", function () {
    document.querySelector(".navbar-bottom")
      .classList.toggle("navbar-bottom_visible")
  });

  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal)

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay_visible");
    modalDialog.addClass("modal__dialog_visible");
  };

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay_visible");
    modalDialog.removeClass("modal__dialog_visible");
  };
  // закрыть окно с промощью Esc
  document.addEventListener('keydown', function (closeModal) {
    if (closeModal.keyCode === 27) {
      var modalOverlay = $(".modal__overlay");
      var modalDialog = $(".modal__dialog");
      modalOverlay.removeClass("modal__overlay_visible");
      modalDialog.removeClass("modal__dialog_visible");
    }
  });

  // Отправка данных на сервер
  // function send(event, php) {
  //   console.log("Отправка запроса");
  //   event.preventDefault ? event.preventDefault() : event.returnValue = false;
  //   var req = new XMLHttpRequest();
  //   req.open('POST', php, true);
  //   req.onload = function () {
  //     if (req.status >= 200 && req.status < 400) {
  //       json = JSON.parse(this.response); // Ебанный internet explorer 11
  //       console.log(json);

  //       // ЗДЕСЬ УКАЗЫВАЕМ ДЕЙСТВИЯ В СЛУЧАЕ УСПЕХА ИЛИ НЕУДАЧИ
  //       if (json.result == "success") {
  //         // Если сообщение отправлено
  //         alert("Сообщение отправлено");
  //       } else {
  //         // Если произошла ошибка
  //         alert("Ошибка. Сообщение не отправлено");
  //       }
  //       // Если не удалось связаться с php файлом
  //     } else {
  //       alert("Ошибка сервера. Номер: " + req.status);
  //     }
  //   };

  //   // Если не удалось отправить запрос. Стоит блок на хостинге
  //   req.onerror = function () {
  //     alert("Ошибка отправки запроса");
  //   };
  //   req.send(new FormData(event.target));
  // }
});