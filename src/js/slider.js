$(document).ready(function () {
  $('.chocolate-is-loved-slider').slick({
    arrows: false,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 1100,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    pauseOnFocus: true,
    pauseOnDotsHover: true,
    waitForAnimate: false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  });
});
