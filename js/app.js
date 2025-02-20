$(function () {
  // *SEARCH BUTTON
  $(".searchIcon").click(function () {
    $("#search").addClass("search_popup_active");
  });

  $(".cross").click(function () {
    $("#search").removeClass("search_popup_active");
  });

  $(".search_icon_sm").click(function () {
    $("#search").addClass("search_popup_active");
  });
  // *SEARCH BUTTON END

  // *BANNER SLIDER
  $(".bannerSlider").slick({
    arrows: false,
    dots: true,
    dotsClass: "bannerDots container",
    autoplay: true,
    autoplaySpeed: 2000,
  });
  $(".bannerSliderSm").slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  // *BOOTSTRAP TOOLTIP
  const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
  );
  const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
  );

  // *NEW ARRIVAL PRODUCT SLIDER
  $(".productSlider").slick({
    slidesToShow: 4,
    nextArrow:
      '<span class="next"><i class="fa-solid fa-chevron-right"></i></span>',
    prevArrow:
      '<span class="prev"><i class="fa-solid fa-chevron-left"></i></span>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });

  // *DEALS OF THE DAY SLIDER
  $(".productDeals").slick({
    arrows: false,
    dots: true,
    dotsClass: "dealsDots container",
  });

  // *FINAL COUNTDOWN JS
  $(".timer").countdown("2025/06/01", function (event) {
    // $(this).html(event.strftime("%w weeks %d days %H:%M:%S"));
    $('.days').html(event.strftime("%D"));
    $('.hours').html(event.strftime("%H"));
    $('.mins').html(event.strftime("%M"));
    $('.secs').html(event.strftime("%S"));
  });


  // *LATEST NEWS SLIDER
  $(".newsWrapper").slick({
    slidesToShow: 4,
    arrows: false,
    dots: true,
    dotsClass: 'newsSliderDots container',
    responsive: [
      {
        breakpoint: 993,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  })

  // *LEADERSHIP EXPERT TEAM SLIDER 
  $('.leadershipSlider').slick({
    slidesToShow: 4,
    autoplay: true,
    prevArrow: '<span class="prevArrow"><i class="fa-solid fa-caret-left"></i></span>',
    nextArrow: '<span class="nextArrow"><i class="fa-solid fa-caret-right"></i></span>',
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 577,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  })

  // *CUSTOMER SLIDER
  $('.customerSlider').slick({
    arrows: false,
    dots: true,
    dotsClass: 'customerDots container'
  })


  // *AYTOR INSTAGRAM SLIDER
  $('.instagramSlider').slick({
    slidesToShow: 6,
    arrows: false,
    autoplay: true,
    dots: true,
    dotsClass: 'instagramDots container',
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 577,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  })

  // *SHOP DETAILS PAGE PRODUCT SLIDER
  $('.topSlider').slick({
    arrows: false,
    asNavFor: '.bottomSlider',
    fade: true,
  })
  $('.bottomSlider').slick({
    slidesToShow: 5,
    asNavFor: '.topSlider',
    focusOnSelect: true,
    centerMode: true,
    centerPadding: '0px',
    prevArrow: '<span class="prevIcon"><i class="fa-solid fa-chevron-left"></i></span>',
    nextArrow: '<span class="nextIcon"><i class="fa-solid fa-chevron-right"></i></span>',
    responsive: [
      {
        breakpoint: 993,
        settings: {
          slidesToShow: 3,
        }
      }
    ]
  })


  // *RELATED PRODUCTS SLIDER
  $('.relatedProductSlider').slick({
    slidesToShow: 4,
    prevArrow: '<span class="prevArrow"><i class="fa-solid fa-chevron-left"></i></span>',
    nextArrow: '<span class="nextArrow"><i class="fa-solid fa-chevron-right"></i></span>',
    responsive: [
      {
        breakpoint: 993,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  })

  // *BLOG CLASSIC WITH SIDEBAR SLIDER
  $('.blogCardSlider').slick({
    prevArrow: '<span class="previos"><i class="fa-solid fa-chevron-left"></i></span>',
    nextArrow: '<span class="next"><i class="fa-solid fa-chevron-right"></i></span>'
  })

  // *BLOG DETAILS SLIDER
  $('.blogDetailsSlider').slick({
    prevArrow: '<span class="prev"><i class="fa-solid fa-chevron-left"></i></span>',
    nextArrow: '<span class="next"><i class="fa-solid fa-chevron-right"></i></span>'
  })
});




