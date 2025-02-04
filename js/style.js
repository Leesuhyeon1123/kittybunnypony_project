window.onload = function () {
  // 비주얼 영역
  const visualSwiper = new Swiper(".visualSwiper", {
    loop: true,
    autoplay: {
      // 초단위
      delay: 2500,
      disableOnInteraction: false,
    },
    slidesPerView: 1,
    pagination: {
      el: ".visualSwiper .swiper-pagination",
      clickable: true,
    },
  });
  // best seller 영역
  const bestSwiper = new Swiper(".bestSwiper", {
    navigation: {
      nextEl: ".bestseller .swiper-button-next",
      prevEl: ".bestseller .swiper-button-prev",
    },
    slidesPerView: 1,
    // 사진간의 간격 띄우기
    // spaceBetween: 15,
    // ex ) 1050이상일때 4장보이게하기
    breakpoints: {
      500: {
        slidesPerView: 1.5,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1020: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });
  // new arrival 영역
  const newSwiper = new Swiper(".newSwiper", {
    navigation: {
      nextEl: ".newarrival .swiper-button-next",
      prevEl: ".newarrival .swiper-button-prev",
    },
    slidesPerView: 2,
    spaceBetween: 15,
    breakpoints: {
      500: {
        slidesPerView: 2.5,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1020: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
    },
  });
  // recommand 영역
  const recSwiper = new Swiper(".recSwiper", {
    navigation: {
      nextEl: ".recommand .swiper-button-next",
      prevEl: ".recommand .swiper-button-prev",
    },
    slidesPerView: 2,
    spaceBetween: 15,
    breakpoints: {
      500: {
        slidesPerView: 2.5,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1020: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
    },
  });
};
