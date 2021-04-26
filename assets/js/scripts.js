$(document).ready(function(){

  // card carousel
  $(".card-carousel").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true
  });

  // Accordian
  $(".acc-hide").hide();
  $(".accordian h6").click(function(){
    $(this).next(".acc-hide").slideToggle();
  });

});