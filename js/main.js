var swiper = new Swiper('.swiper-container', {
  // Optional parameters
  
  loop: true,
  speed: 2000,



  // Navigation arrows
  navigation: {
    nextEl: '.slider-button--next',
    prevEl: '.slider-button--prev',
  },
 
  effect: "coverflow", 
  
});