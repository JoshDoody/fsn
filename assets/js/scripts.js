$(document).ready(function() {

  // Main nav dropdown
  $(".nav-drop").hover(function() {
      $(this).find(".sub-nav-wrap").toggle();
  });

  // Card carousel
  $(".card-carousel").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true
  });

  // Book toc carousel
  $(".toc-carousel").slick({
    infinite: true,
    slidesToShow: 4,
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
    $(this).next(".toc-chapter").slideToggle();
    $(this).toggleClass("active");
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

});
