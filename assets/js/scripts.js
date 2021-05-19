$(document).ready(function() {

  // Card carousel
  $(".card-carousel").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true
  });

  // Blog post slider
  $(".blog-slider").slick({
    dots: true,
    arrows: true,
    infinite: true,
    adaptiveHeight: true,
    appendDots: $(".blog-dots"),
    prevArrow: $(".blog-prev"),
    nextArrow: $(".blog-next")
  });

  // Success slider
  $(".suc-quotes").slick({
    dots: true,
    arrows: true,
    infinite: true,
    adaptiveHeight: true,
    appendDots: $(".suc-dots"),
    prevArrow: $(".suc-prev"),
    nextArrow: $(".suc-next")
  });

  // Book toc carousel
  $(".toc-carousel").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true
  });

  // Accordion
  $(".acc-hide").hide();
  $(".accordion h6").click(function(){
    $(this).next(".acc-hide").slideToggle();
    $(this).toggleClass("active");
  });

  // Instant access tag
  $(window).scroll(function(){
    if ($(this).scrollTop() > 350) {
       $(".access-tag").addClass("fixed");
    } else {
       $(".access-tag").removeClass("fixed");
    }
  });

  // Instant access tag show/hide
  var footer = $(".access-tag");
  $(window).scroll(function() {
    if (($(window).scrollTop() + $(window).height() > $(document).height() - 200)
        && footer.is(":visible")) {
      footer.stop().fadeOut(300);
    } else if (($(window).scrollTop() < $(document).height() - 100)
       && footer.is(":hidden")) {
      footer.stop().fadeIn(300);
    }
  });

  // Get access modal
  $(".btn-access-tag").click(function() {
    $(".access-modal, .access-overlay").fadeIn();
    $(".access-overlay").click(function(){
      $(".access-modal").fadeOut();
      $(this).fadeOut();
    });
  });

  $(".access-close").click(function(){
    $(".access-overlay, .access-modal").fadeOut();
  });

  // Book sidebar table of contents toggle
  $(".toc-title").click(function() {
    $(this).next(".toc-chapter").slideToggle();
    $(this).toggleClass("active");
  });

});
