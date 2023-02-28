$(document).ready(function () {
  $('.carousel__container').slick({
    speed: 1200,
    adaptiveHeight: true,
    autoplay: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="../images/image/arrowLeft.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="../images/image/arrowRight.svg"></button>'
  });
});