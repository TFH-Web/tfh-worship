const swiper = new Swiper(".swiper-featured", {
    effect: "coverflow",
    centeredSlides: true,
    slidesPerView: 1,
    loop: true,
    createElements: true,
    pagination: true,
    autoplay: true,
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
    },
  });
  