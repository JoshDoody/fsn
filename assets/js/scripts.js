$(document).ready(function() {

  // Main nav dropdown
  $(".nav-drop").hover(function() {
      $(this).find(".sub-nav-wrap").toggle();
  });

  // Card carousels
  // Additional increments below when multiple carousels are on the same page
  $(".card-carousel").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    appendDots: $(".card-dots"),
    prevArrow: $(".card-prev"),
    nextArrow: $(".card-next")
  });

  $(".card-carousel-2").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    appendDots: $(".card-dots-2"),
    prevArrow: $(".card-prev-2"),
    nextArrow: $(".card-next-2")
  });

  $(".card-carousel-3").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    appendDots: $(".card-dots-3"),
    prevArrow: $(".card-prev-3"),
    nextArrow: $(".card-next-3")
  });

  // Book toc carousel
  $(".toc-carousel").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    appendDots: $(".toc-dots"),
    prevArrow: $(".toc-prev"),
    nextArrow: $(".toc-next")
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
  // Additional increments below when multiple carousels are on the same page
  $(".suc-quotes").slick({
    dots: true,
    arrows: true,
    infinite: true,
    adaptiveHeight: true,
    appendDots: $(".suc-dots"),
    prevArrow: $(".suc-prev"),
    nextArrow: $(".suc-next")
  });

  $(".suc-quotes-2").slick({
    dots: true,
    arrows: true,
    infinite: true,
    adaptiveHeight: true,
    appendDots: $(".suc-dots-2"),
    prevArrow: $(".suc-prev-2"),
    nextArrow: $(".suc-next-2")
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

  $(".access-close, .access-overlay").click(function(){
    $(".access-overlay, .access-modal").fadeOut();
  });

  // Book sidebar table of contents toggle
  $(".toc-title").click(function() {
    $(this).next().siblings().removeClass("active");
    $(this).addClass("active");
    $(this).next(".toc-chapter").slideToggle().siblings(".toc-chapter").slideUp();
  });

  // Blog category filtering
  // show all blog posts
  $(".articles #show-all").click(function() {
    $(".blog-list > div").attr("style", "display:flex");
    $("li button").removeClass("btn-active");
    $(this).parent().addClass("cat-active");
  });

  var $btns = $(".resource-filter").click(function() {
    $(".cat-active").removeClass();
    if (this.id == "all") {
      $(".blog-list > div").fadeIn(450);
    } else {
      var $el = $("." + this.id).fadeIn(450);
      $(".blog-list > div").not($el).hide();
    }
    $btns.removeClass("btn-active");
    $(this).addClass("btn-active");
  });

  // Resource category filtering
  // show all resource articles
  $(".resources #show-all").click(function() {
    $(".blog-list > div").attr("style", "display:flex");
    $(".blog-featured").show();
    $("li button").removeClass("btn-active");
    $(this).parent().addClass("cat-active");
  });

  var $btns = $(".resource-filter").click(function() {
    $(".blog-featured").hide();
    $(".cat-active").removeClass();
    if (this.id == "all") {
      $(".blog-list > div").fadeIn(450);
    } else {
      var $el = $("." + this.id).fadeIn(450);
      $(".blog-list > div").not($el).hide();
    }
    $btns.removeClass("btn-active");
    $(this).addClass("btn-active");
  });

  // Success stories category filtering
  // show all success stories
  $(".success-stories #show-all").click(function() {
    $(".success-indi").attr("style", "display:flex");
    $("li button").removeClass("btn-active");
    $(this).parent().addClass("cat-active");
  });

  var $btns = $(".resource-filter").click(function() {
    $(".cat-active").removeClass();
    if (this.id == "all") {
      $(".success-indi").fadeIn(450);
    } else {
      var $el = $("." + this.id).fadeIn(450);
      $(".success-indi").not($el).hide();
    }
    $btns.removeClass("btn-active");
    $(this).addClass("btn-active");
  });

});
