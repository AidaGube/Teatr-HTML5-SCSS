var swiper = new Swiper(".swiper", {
    effect: "cards",
    grabCursor: true,
    autoplay:true,
    speed:500,
     
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },        
    loop: true,
  });
  
  
  let projectsSlider = new Swiper(".projects-swiper", {
      watchSlidesProgress: true,
      slidesPerView: 'auto',
      spaceBetween: 0,
      freeMode: true
    });
  
  