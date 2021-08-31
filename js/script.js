$(window).on("load", function () {
  $(".loader").fadeOut(500, function () {
    $(".loader").fadeOut(750);
  });

  $(".items").isotope({
    filter: "*",
    animationOptions: {
      duration: 1500,
      easing: "linear",
      queue: false,
    },
  });
  g;
});

$(document).ready(function () {
  $("#slides").superslides({
    animation: "fade",
    play: 5000,
    pagination: false,
  });

  var typed = new Typed(".typed", {
    strings: [
      "Web Developer.",
      "Software Engineer.",
      "Musician.",
      "Life-long Learner.",
      "Actual Nerd.",
    ],
    typeSpeed: 70,
    loop: true,
    startDelay: false,
    showCursor: false,
  });

  $(".owl-carousel").owlCarousel({
    loop: true,
    items: 4,
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 2,
      },
      768: {
        items: 3,
      },
      938: {
        items: 4,
      },
    },
  });

  var skillsTopOffset = $(".skillsSection").offset().top;
  $(window).scroll(function () {
    if (window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
      $(".chart").easyPieChart({
        easing: "easeInOut",
        barColor: "#0984e3",
        trackColor: "#fdcb6e",
        scaleColor: false,
        lineWidth: 4,
        size: 152,
        onStep: function (from, to, percent) {
          $(this.el).find(".percent").text(Math.round(percent));
        },
      });
    }
  });

  $("filters a").click(function () {
    $("#filters .current").removeClass("current");
    $(this).addClass("current");

    // init Isotope
    var $items = $(".items").isotope({
      // options
    });
    // filter items on button click
    $(".filter-group").on("click", function () {
      var filterValue = $(this).attr("data-filter");
      $items.isotope({ filter: filterValue });
    });

    return false;
  });

  const nav = $("#navigation");
  const navTop = nav.offset().top;

  $(window).on("scroll", stickyNavigation);

  function stickyNavigation() {
    var body = $("body");

    if ($(window).scrollTop() >= navTop) {
      body.css("padding-top", nav.outerHeight() + "px");
      body.addClass("fixedNav");
    } else {
      body.css("padding-top", 0);
      body.removeClass("fixedNav");
    }
  }

  $("[data-fancybox]").fancybox({});
});
