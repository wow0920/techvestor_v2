/** **/

emergence.init({
  container: window,
  reset: true,
  handheld: true,
  elemCushion: 0.50,
  offsetTop: -300,
  offsetBottom: -300,
  throttle: 350
});


/*** Fixed Navbar***/
$(window).scroll(function () {
  var navhldr = $('.headerSection');
  var top = 20;
  if ($(window).scrollTop() >= top) {
    navhldr.addClass('fixed');

  } else {
    navhldr.removeClass('fixed');
  }
});

var new_scroll_position = 0;
var last_scroll_position;
var header = document.getElementById("header");

window.addEventListener('scroll', function(e) {
  last_scroll_position = window.scrollY;

  if (new_scroll_position < last_scroll_position && last_scroll_position > 80) {
    header.classList.remove("slideDown");
    header.classList.add("slideUp");

  // Scrolling up
  } else if (new_scroll_position > last_scroll_position) {
    header.classList.remove("slideUp");
    header.classList.add("slideDown");
  }

  new_scroll_position = last_scroll_position;
});

//Menu Icon For Mobile
$(document).ready(function() {
  $(".menu-icon").click(function() {
      $(this).toggleClass("active");
      $('body').toggleClass("scroll");
      $('.headerSection__navigation ').toggleClass("toggle");
      $('.headerSection__navigation ').slideToggle();
  });
});

/*** Clents slider***/
$(".client-slider").slick({
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    draggable:false,
    focusOnSelect:false,
    arrows: false,
    dots:false,
    pauseOnFocus:false,
    pauseOnHover:false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  });


/*** Benefits slider ***/

var helpers = {
    addZeros: function (n) {
      return (n < 10) ? '0' + n : '' + n;
    }
};

  function benefitSlider() {
      var $slider = $('.benefitSlider');
      $('.benefitSlider').slick({
        arrows: true,
        infinite:  false,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        fade:true,
        adaptiveHeight: true,
        prevArrow: $(".benefitSection__arrows>.slickPreviousBtn"),
        nextArrow: $(".benefitSection__arrows>.slickNextBtn"),
      });

      $($slider).on('afterChange', function(event, slick, currentSlide){
        $('#benefitCounter .active').html(helpers.addZeros(currentSlide + 1));

        chnageSlide(slick);

      });
      $($slider).on('beforeChange', function (event, slick, currentSlide) {

        $(".benefitSlider.slick-initialized.slick-slider .slick-current .chartBar").data('easyPieChart').update(1);
        $(".benefitSlider.slick-initialized.slick-slider .slick-current .chartTrack").data('easyPieChart').update(1);

      });
      var sliderItemsNum = $($slider).find('.slick-slide').not('.slick-cloned').length;
      $('#benefitCounter .total').html(helpers.addZeros(sliderItemsNum));
};
  
  benefitSlider();

  function chnageSlide(slick) {
  
    $(".benefitSlider.slick-initialized.slick-slider .slick-current .chartBar").data('easyPieChart').update(1);
    $(".benefitSlider.slick-initialized.slick-slider .slick-current .chartTrack").data('easyPieChart').update(1);

    let circle1 = $(".benefitSlider.slick-initialized.slick-slider .slick-current .chartBar");
    let circle2 = $(".benefitSlider.slick-initialized.slick-slider .slick-current .chartTrack");
  
    let data1 = circle1.attr("data-final");
    let data2 = circle2.attr("data-final");
  
    setTimeout(function () {
      // console.log("data1: ", data1)
      circle1.data('easyPieChart').update(data1);
      circle2.data('easyPieChart').update(data2);
    }, 100);
  
  
  }

/*** How it work slider ***/

function howitworkSlider() {
  var $slider = $('.howitworkSlider');
    $('.howitworkSlider').slick({
      arrows: true,
      infinite:  false,
      dots: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      fade:true,
      adaptiveHeight: true,
      prevArrow: $(".wideSection__arrows>.slickPreviousBtn"),
      nextArrow: $(".wideSection__arrows>.slickNextBtn"),
    });

    $($slider).on('afterChange', function(event, slick, currentSlide){
      $('#howitworkCounter .active').html(helpers.addZeros(currentSlide + 1));
    });

    var sliderItemsNum = $($slider).find('.slick-slide').not('.slick-cloned').length;
      $('#howitworkCounter .total').html(helpers.addZeros(sliderItemsNum));
};

howitworkSlider();


/*** Invest slider ***/

function investSlider() {
  var $slider = $('.investSlider');
    $('.investSlider').slick({
      speed:3000,
      arrows: false,
      infinite:  true,
      autoplay:  false,
      autoplaySpeed:8000,
      slidesToShow: 3,
      slidesToScroll: 3,
      cssEase: "linear",
      // variableWidth: true,
      draggable: false,
      pauseOnFocus:false,
      pauseOnHover:false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            speed:1000,
            autoplay:  true,
            autoplaySpeed:3000,
            slidesToShow: 2,
            slidesToScroll: 1,
            draggable: false,
            swipe:false,
          },
        },
        {
          breakpoint: 576,
          settings: {
            speed:1000,
            autoplay:  true,
            autoplaySpeed:3000,
            slidesToShow: 1,
            slidesToScroll: 1,
            draggable: false,
            swipe:false,
          },
        },
      ],

    });

    $($slider).on('afterChange', function (event, slick, currentSlide) {

      if ($(window).width() > 767) {
        let updateslide = currentSlide  / 3; 
        $('#investSliderCounter .active').html(helpers.addZeros(updateslide + 1));
  
        $(".investSlider.slick-initialized.slick-slider").find('.slick-slide').addClass("slider-opacity");
      } else {
          let updateslide = (currentSlide / 3) + 1;
          $('#investSliderCounter .active').html(helpers.addZeros(parseInt(updateslide)));
          $(".investSlider.slick-initialized.slick-slider").find('.slick-slide').addClass("slider-opacity");
      }

    });

    $($slider).on('beforeChange', function (event, slick, currentSlide) {
      $(".investSlider.slick-initialized.slick-slider").find('.slick-slide').removeClass("slider-opacity");
    });


    var sliderItemsNum = $($slider).find('.slick-slide').not('.slick-cloned').length / 3;
    let upd = Math.round(sliderItemsNum)
    $('#investSliderCounter .total').html(helpers.addZeros(upd));
};

investSlider();

$('.investSection').bind('inview', function (event, visible, topOrBottomOrBoth) {
  $('.investSlider').slick('slickSetOption', {
      autoplay: true,
  }, true);
})


/*** Year slider ***/

function yearSlider() {

  var $slider = $('.yearsSlider');
  $('.yearsSlider').slick({
      speed: 2000,
      arrows: false,
      infinite: true,
      autoplay: false,
      autoplaySpeed: 4000,
      slidesToShow: 3,
      slidesToScroll: 1,
      cssEase: "linear",
      draggable: false,
      pauseOnFocus: false,
      pauseOnHover: false,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            speed:1000,
            autoplay: true,
            autoplaySpeed:3000,
            slidesToShow: 2,
            slidesToScroll: 1,
            draggable: false,
            swipe:false,
          },
        },
        {
          breakpoint: 768,
          settings: {
            speed:1000,
            autoplay: true,
            autoplaySpeed:3000,
            slidesToShow: 1,
            slidesToScroll: 1,
            draggable: false,
            swipe:false,
          },
        },
      ],
  });

  $($slider).on('afterChange', function (event, slick, currentSlide) {
      $('#yearsSliderCounter .active').html(helpers.addZeros(currentSlide + 1));

      $(".yearsSlider.slick-initialized.slick-slider").find('.slick-slide').addClass("slider-opacity");

  });

  $($slider).on('beforeChange', function (event, slick, currentSlide) {
      $(".yearsSlider.slick-initialized.slick-slider").find('.slick-slide').removeClass("slider-opacity");
  });

  var sliderItemsNum = $($slider).find('.slick-slide').not('.slick-cloned').length;
  $('#yearsSliderCounter .total').html(helpers.addZeros(sliderItemsNum));

};

yearSlider()


$('.yearsSection').bind('inview', function (event, visible, topOrBottomOrBoth) {
    // console.log("inview")

    $('.yearsSlider').slick('slickSetOption', {
        autoplay: true,
    }, true);
})


/***Data Slider ***/

function dataslider() {
  var $slider = $('.dataslider');
    $('.dataslider').slick({
        arrows: true,
        dots: false,
        infinite:  false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        fade:true,
        adaptiveHeight: true,
        asNavFor: '.contentSlider',
        prevArrow: $(".featuredSection__arrows>.slickPreviousBtn"),
        nextArrow: $(".featuredSection__arrows>.slickNextBtn"),
    });

    $('.contentSlider').slick({
      infinite:  false,
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: '.dataslider',
      dots: false,
      arrows:false,
      centerMode: true,
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            adaptiveHeight: true,
          },
        },
      ],
    }); 

    $($slider).on('afterChange', function(event, slick, currentSlide){
      $('#featuredSliderCounter .active').html(helpers.addZeros(currentSlide + 1));
    });

    var sliderItemsNum = $($slider).find('.slick-slide').not('.slick-cloned').length;
      $('#featuredSliderCounter .total').html(helpers.addZeros(sliderItemsNum));
};

dataslider();


/*** How it work slider ***/

function strategySlider() {
  var $slider = $('.strategySlider');
    $('.strategySlider').slick({
      speed:2000,
      arrows: false,
      dots: false,
      infinite:  true,
      autoplay:  false,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed:4000,
      draggable:false,
      pauseOnFocus:false,
      pauseOnHover:false,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 992,
          settings: {
            speed:1000,
            autoplay: true,
            autoplaySpeed:3000,
            slidesToShow: 2,
            slidesToScroll: 1,
            draggable: false,
            swipe:false,
          },
        },
        {
          breakpoint: 768,
          settings: {
            speed:1000,
            autoplay: true,
            autoplaySpeed:3000,
            slidesToShow: 1,
            slidesToScroll: 1,
            draggable: false,
            swipe:false,
          },
        },
      ],
    });

    $($slider).on('afterChange', function(event, slick, currentSlide){
      $('#strategySliderCounter .active').html(helpers.addZeros(currentSlide + 1));

      $(".strategySlider.slick-initialized.slick-slider").find('.slick-slide').addClass("slider-opacity");

    });

    $($slider).on('beforeChange', function (event, slick, currentSlide) {
      $(".strategySlider.slick-initialized.slick-slider").find('.slick-slide').removeClass("slider-opacity");
    });

    var sliderItemsNum = $($slider).find('.slick-slide').not('.slick-cloned').length;
      $('#strategySliderCounter .total').html(helpers.addZeros(sliderItemsNum));
};

strategySlider();

$('.strategySliderHolder').bind('inview', function (event, visible, topOrBottomOrBoth) {
  $('.strategySlider').slick('slickSetOption', {
      autoplay: true,
  }, true);
})


// Contact PopUp
jQuery(document).ready(function($) {
  //open popup
  $('.cd-popup-trigger').on('click', function(event) {
      event.preventDefault();
      $('body').toggleClass("scroll");
      $('.cd-popup').addClass('is-visible');
  });

  //close popup
  $('.cd-popup').on('click', function(event) {
      if ($(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popup')) {
          event.preventDefault();
          $('body').removeClass("scroll");
          $(this).removeClass('is-visible');
      }
  });

});


// Portfolio Slider
$('.portfolioItems__sliderHldr').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  speed: 1000,
  infinite: true,
  autoplay: false,
  autoplaySpeed: 2000,
  fade: true,
  adaptiveHeight: true,
  dots: true,

});
$('.portfolioSlider__lft').click(function() {
  $(".portfolioItems__sliderHldr").slick('slickPrev');
});
$('.portfolioSlider__right').click(function() {
  $(".portfolioItems__sliderHldr").slick('slickNext');
});

/*** Counter Up ***/

const requireCounter = document.querySelectorAll(".counter");
requireCounter.forEach((el) => {
  const elementWatcher = scrollMonitor.create(el);
  elementWatcher.fullyEnterViewport(function () {
    // if (!el.dataset.counter_done) { // Uncomment this to stop the counter after first run
      let numberOfDecimals = 0;
      let countTo = parseFloat(el.dataset.to);
      if (countTo % 1 > 0) {
        numberOfDecimals = countTo.toString().split(".")[1].length;
      }
      const countUp = new CountUp(el, countTo, {
        decimalPlaces: numberOfDecimals
      });
      countUp.start();
      el.dataset.counter_done = true;
    // } // Uncomment this to stop the counter after first run
  });
});


// Tabs Podcast

$(document).ready(function() {
  $('#filterOptions li a').click(function() {
      var ourClass = $(this).attr('class');

      $('#filterOptions li').removeClass('active');
      $(this).parent().addClass('active');

      if (ourClass == 'all') {
          $('#ourHolder').children('div.item').show();
      } else {
          $('#ourHolder').children('div:not(.' + ourClass + ')').hide();
          $('#ourHolder').children('div.' + ourClass).show();
      }
      return false;
  });
});

/*** Circle PieChart ***/

var circleChart1 = {
  easing: false,
  barColor: '#4A44E2',
  trackColor: 'false',
  scaleColor: false,
  scaleLength: 3,
  lineCap: 'circle',
  lineWidth: '50',
  size: 400,
  animate: 1000,
  onStep: function(from, to, percent) {
    $(this.el).find('.percent').text(Math.round(percent));

  }
}

var circleChart2 =  {
  easing: false,
  barColor: '#D9D9D9',
  lineCap: 'circle',
  lineWidth: '50',
  size: 400,
  animate: 1500,
}

if ($(".benefitSection").length > 0) {
  var triggerheight = $(".benefitSection").offset().top -400; 
}

$(window).scroll(function() {
	var $height = $(window).scrollTop();
  if($height > triggerheight) {
    $('.chartBar').easyPieChart(circleChart1);
    $('.chartTrack').easyPieChart(circleChart2);
    $('.percent').animate({'opacity':'1'},500);
	} 
});
