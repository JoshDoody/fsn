$(document).ready(function() {

  // Mobile nav
  $(window).on("load resize",function(e){
    if ($(this).width() < 1140) {
      $(".nav-drop>a").attr("href", "#");
      $(".nav-drop").click(function() {
        $(this).find(".sub-nav-mobile").toggle();
        $(this).find(".fa-caret-down").toggleClass("fa-caret-up");
      });
    } else {
      // Main nav dropdown
      $(".nav-drop").hover(function() {
        $(this).find(".sub-nav-wrap").toggle();
      });
    }
  });

  // Mobile nav trigger
  $(".mobile-trigger").click(function() {
    $(".main-nav").toggle().toggleClass("active-nav");
    $(".mobile-trigger a").toggleClass("close-nav");
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
    nextArrow: $(".card-next"),
    responsive: [
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $(".card-carousel-2").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    appendDots: $(".card-dots-2"),
    prevArrow: $(".card-prev-2"),
    nextArrow: $(".card-next-2"),
    responsive: [
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $(".card-carousel-3").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    appendDots: $(".card-dots-3"),
    prevArrow: $(".card-prev-3"),
    nextArrow: $(".card-next-3"),
    responsive: [
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  // In the Press
  $(".in-press-inc").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    prevArrow: $(".in-press-prev"),
    nextArrow: $(".in-press-next"),
    responsive: [
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  // In the Press
  $(".podcast-inc").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    prevArrow: $(".podcast-prev"),
    nextArrow: $(".podcast-next"),
    responsive: [
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  // Book toc carousel
  $(".toc-carousel").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    appendDots: $(".toc-dots"),
    prevArrow: $(".toc-prev"),
    nextArrow: $(".toc-next"),
    responsive: [
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1
        }
      }
    ]
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
    $(".blog-list > div").attr("style", "display:inline-block");
    $("li button").removeClass("btn-active");
    $(this).parent().addClass("cat-active");
  });

  var $btns = $(".resource-filter").click(function() {
    $(".cat-active").removeClass("cat-active");
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
    $(".blog-list > div").attr("style", "display:inline-block");
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

  // "Lazy load"
  // Shows all posts/resources after 9
  var $ps = $(".blog-list").children(".bg-white");
  // show first 9
  $ps.slice(9).hide();
  // show remaining posts
  $(".load-more button").click(function() {
    $(".load-more").remove();
    $ps.show();
  });

});


// Salary counter offer calculator
// This knows about salary calculation things, but doesn't know about
// the DOM or jQuery.
function SalaryLogic() {}

SalaryLogic.prototype ={
  // calculates the counteroffer.
  counter: function counter(offer, they_need_you, you_need_them, minimum) {
    console.log(arguments);
    // need is 0 -> .1 for how much more you should increase your counteroffer.
    var need = Math.max(0, they_need_you - you_need_them) * .01;
    raw_counter = Math.max(
      minimum, // never go lower than the minimum
      offer * (1.1 + need) // always counter at least 10% more, even if need is 0.
    );
    return round_nearest_1000(raw_counter);
  },

  // generates the data structure for the script w/ increments from your
  // initial offer to your counter.
  script_increments: function script_increments(offer, counteroffer, minimum_acceptable) {
    /*
     Increment calculation/rules
     - Up to 9 increments between offer and counter
     - Baseline for increments is $1k each
     - Only as many increments as needed to bridge gap between offer and counter
     - If more than 9 increments needed at $1k each, go to $2k per increment, if $2k won't work, go to $3k, then $4k, then $5k.
     - Once you hit $5k per increment, show up to 9 increments with a "..." for everything below the lowests of the 9 and above the offer.
     - Start counting UP from the offer when setting increments. (eg, if offer is $100k and counter is $115k, we would use $2k increments and the FIRST one would be $102k)
     */
    var increment = 1000;
    var disparity = parseInt(counteroffer - offer);
    if (disparity > 10000) { // more than 9 1k increments
      increment = round_nearest_10((disparity / 1000)) * 100;
    }
    var options = [];
    for (var i = 0; i < 11; i++) {
      var next_entry = offer + (increment * i);
      if (next_entry > counteroffer) {
        break;
      }
      options.unshift(next_entry);
    }
    var more_than_9 = counteroffer - (increment * 9) > offer;
    return {
      counters: options,
      more_than_9: more_than_9
    };
  }

};

function round_nearest_10(num) {
  return Math.ceil(num/10)*10;
}

function round_nearest_500(num) {
  return Math.round(num/500)*500;
}

function round_nearest_1000(num) {
  return Math.round(num/1000)*1000;
}

// formats a number to look like nice money. Discards cents, but can
// handle string inputs. 50000 -> $50,000
function pretty_money(number) {
  //return '$'+ Number(Number(number).toFixed(0)).toLocaleString();
  return '$'+ Math.round(number).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function Page($jquery) {
  this.$ = $jquery;
};

Page.prototype = {

  set_counteroffer:  function (text) {
    this.$('.counteroffer-number').hide();
    this.$('.counteroffer-number').text(text).fadeIn(800);
  },

  set_original_offer: function (text) {
    this.$('.original-offer').text(pretty_money(text));
  },

  set_minimum_acceptable: function (text) {
    this.$('.minimum-acceptable').text(pretty_money(text));
  },

  set_benefits: function (text) {
    if( this.$('#benefit_1').val() ) {
      this.$('.benefit_1').text(this.$('#benefit_1').val());
      this.$('.benefit_1').closest('li').show();
    } else {
      this.$('.benefit_1').closest('li').hide();
    }

    if( this.$('#benefit_2').val() ) {
      this.$('.benefit_2').text(this.$('#benefit_2').val());
      this.$('.benefit_2').closest('li').show();
    } else {
      this.$('.benefit_2').closest('li').hide();
    }

    if( this.$('#benefit_3').val() ) {
      this.$('.benefit_3').text(this.$('#benefit_3').val());
      this.$('.benefit_3').closest('li').show();
    } else {
      this.$('.benefit_3').closest('li').hide();
    }
  },

  //set_benefit_2: function (text) {
  //  this.$('.benefit_2').text(get_benefit_2());
  //},
  //
  //set_benefit_3: function (text) {
  //  this.$('.benefit_3').text(get_benefit_3());
  //},

  get_offer: function () {
    return Number(this.$('#offer_amount').val().replace(',', ''));
  },

  get_they_need: function () {
    return Number($('#they_need_you').val());
  },

  get_you_need: function () {
    return Number($('#you_need_them').val());
  },

  minimum_acceptable: function () {
    return Number($('#minimum_acceptable').val().replace(',', ''));
  },

  show_counteroffer: function () {
    this.$('#counteroffer-section').slideDown();
    this.$('#counteroffer-script').show();
  },

  write_script: function (step_info) {
    // loop through step_info.counters to build up dom.
    this.$('.js-script').empty();
    for (var step in step_info.counters) {
      // Strip off the first and last entry (counter & offer
      // respectively) as those are handled specially in the template.
      if (step == 0 || step == step_info.counters.length - 1) {
        continue;
      }
      this.$('.js-script').append("<li><strong>" + pretty_money(step_info.counters[step])  + "</strong></li>");
    }
  }
};

// Calculator
$(document).ready(function () {
  $('#generate_script').click(function (e) {
    e.preventDefault();
    var logic = new SalaryLogic();
    var page = new Page($, new SalaryLogic());
    var minimum_acceptable = page.minimum_acceptable();
    var original_offer = page.get_offer();

    // calculate counteroffer here.
    var counteroffer = logic.counter(
      original_offer,
      page.get_they_need(),
      page.get_you_need(),
      page.minimum_acceptable()
    );

    page.set_counteroffer(pretty_money(counteroffer));
    page.set_original_offer(original_offer);
    page.set_minimum_acceptable(minimum_acceptable);
    page.write_script(logic.script_increments(original_offer, counteroffer, minimum_acceptable));
    page.show_counteroffer();
    page.set_benefits();
  });

  $('#they_need_you').slider({
    tooltip: 'always',
    formatter: function(value) {
      if(value <= 3){
        return value + ': Not much';
      }
      else if(value <= 6){
        return value + ': Somewhat';
      }
      else {
        return value + ': A lot';
      }
    }
  });

  $('#you_need_them').slider({
    tooltip: 'always',
    formatter: function(value) {
      if(value <= 3){
        return value + ': Not much';
      }
      else if(value <= 6){
        return value + ': Somewhat';
      }
      else {
        return value + ': A lot';
      }
    }
  });
});