$(window).on("load", function () {
  $("body").removeClass("overflow");
});
$(document).ready(function () {
  lazyLoad();
  /************************************ Navbar ************************************/
  $(".menu-btn").on("click", function (e) {
    $("header").addClass("active");
    $(".main-nav").addClass("active");
    $("body").addClass("overflow");
  });
  $(".close-btn").on("click", function (e) {
    $("header").removeClass("active");
    $(".main-nav").removeClass("active");
    $("body").removeClass("overflow");
  });
  if ($(window).width() <= 767) {
    $(".has-children>a").click(function (e) {
      e.preventDefault();
      e.stopPropagation();
      $(".has-children>a").not(this).removeClass("active");
      $(this).toggleClass("active");
      if ($(this).siblings().css("display") == "none") {
        $(this).siblings().slideDown(500);
      } else {
        $(this).siblings().slideUp(500);
      }
      $(".has-children>a").not(this).siblings().slideUp(500);
    });
  }
  /************************************ Hero Slider ************************************/
  var heroSwiper = new Swiper(".hero-slider .swiper", {
    spaceBetween: 10,
    loop: true,
    speed: 500,
    autoplay: {
      delay: 5000,
    },
    // effect: "fade",
    pagination: {
      el: ".hero-slider .swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">0' + (index + 1) + "</span>";
      },
    },
    navigation: {
      nextEl: ".hero-slider .swiper-btn-next",
      prevEl: ".hero-slider .swiper-btn-prev",
    },
    on: {
      init: function (swiper) {
        lazyLoad();
        toSvg();
      },
    },
  });

  /************************************ Blog Slider ************************************/
  var blogSwiper = new Swiper(".blog-slider .swiper", {
    loop: true,
    // autoplay: {
    //   delay: 5000,
    // },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 7,
      },
      1199: {
        slidesPerView: 3,
        spaceBetween: 16,
      },
    },
    navigation: {
      nextEl: ".blog-slider .swiper-btn-next",
      prevEl: ".blog-slider .swiper-btn-prev",
    },
    on: {
      init: function (swiper) {
        lazyLoad();
        toSvg();
      },
    },
  });

  /************************************ Show Password ************************************/
  $(".password-eye").click(function (e) {
    if (e.isDefaultPrevented()) return;
    e.preventDefault();
    e.stopPropagation();
    let eye = $(this);
    let input = $(this).parents(".password-content").find("input.form-control");
    if ($(input).attr("type") == "password") {
      $(input).attr("type", "text");
      eye.addClass("active");
    } else {
      $(input).attr("type", "password");
      eye.removeClass("active");
    }
  });


  toastr.options = {
    closeButton: true,
    newestOnTop: false,
    progressBar: true,
    positionClass: document.dir == "rtl" ? "toast-top-left" : "toast-top-right",
    preventDuplicates: false,
    onclick: null,
    showDuration: "300",
    hideDuration: "1000",
    timeOut: "5000",
    extendedTimeOut: "1000",
    showEasing: "swing",
    hideEasing: "linear",
    showMethod: "fadeIn",
    hideMethod: "fadeOut",
  };
});
