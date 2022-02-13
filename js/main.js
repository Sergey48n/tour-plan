$(document).ready(function () {
  var hotelSlider = new Swiper('.hotel-slider', {
    // Optional parameters

    loop: true,
    speed: 2000,

    // Navigation arrows
    navigation: {
      nextEl: '.hotel-slider__button--next',
      prevEl: '.hotel-slider__button--prev',
    },

    effect: 'coverflow',

  });

  var reviewsSlider = new Swiper('.reviews-slider', {
    // Optional parameters

    loop: true,
    speed: 1000,

    // Navigation arrows
    navigation: {
      nextEl: '.reviews-slider__button--next',
      prevEl: '.reviews-slider__button--prev',
    },



  });

  var menuButton = $(".menu-button");
  menuButton.on("click", function () {
    console.log('Клик по кнопке меню');
    $(".navbar-bottom").toggleClass("navbar-bottom--visible");
  });

  var modalButton = $('[data-toggle="modal"]');
  var closeModalButton = $(".modal__close");
  modalButton.on('click', openModal);
  closeModalButton.on('click', closeModal);


  function openModal() {
    var targetModal = $(this).attr("data-href")
    console.log(targetModal);
    $(targetModal).find('.modal__overlay').addClass('modal__overlay--visible');
    $(targetModal).find('.modal__dialog').addClass('modal__dialog--visible');
  }

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass('modal__overlay--visible');
    modalDialog.removeClass('modal__dialog--visible');
  }

 // Обработка форм
 $(".form").each(function(){
   $(this).validate({
   debug: true,  
   errorClass:"invalid",
   messages: {
    name: {
      required: "Пожалуйста укажите ваше имя.",
      minlength: "Имя не короче 3-х букв."
    },
    email: {
      required: "Пожалуйста, введите адрес электронной почты",
      email: "Адрес электронной почты должен быть в формате: name@domain.com"
    },
    phone: {
      required:"Телефон обязателен", 

    },
   },
  });
 })

});



