$(".slider-container .slider").slick({
  autoplay: true,
  slidesToShow: 3,
  autoplaySpeed: 3000,
  speed: 800,
  margin: 0,
  lazyLoad: "progressive",
  arrows: true,
  dots: false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      },
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});
