// =================== Navbar Toggle ==============




// =================== Swiper =====================
const templatesSwiper = new Swiper('.slide-container', {
  // Default parameters
  // direction: 'vertical',
  slidesPerView: 2,
  spaceBetween: 5,
  slidesPerGroup: 1,
  fade: true,
  centerSlide: true,
  loop: false,
  pagination: {
    el: '.swiper-pagination',
    type: "custom",
    renderCustom: function (templatesSwiper, current, total) {
      return ('0' + current).slice(-2) + ' / ' + ('0' + total).slice(-2);
    }
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints:{
    0: {
      slidesPerView: 1,
      centerSlide: true,
      spaceBetween: 10,
    },
    // When window width is >= 520px
    576: {
      slidesPerView: 1,
      centerSlide: true,
      spaceBetween: 10,
      // direction: 'vertical',
    },
    // When window width is >= 768px
    768: {
      slidesPerView: 2,
      centerSlide: true,
      spaceBetween: 10,
      // direction: 'vertical',
      loop: false,
    },
    // When window width is >= 950px
    992: {
      slidesPerView: 2,
      spaceBetween: 10,
    }
  }
});