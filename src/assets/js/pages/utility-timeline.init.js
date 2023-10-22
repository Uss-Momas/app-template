//initializing
(function ($) {
  "use strict";
  $(".horizontal-timeline-owl .owl-carousel").owlCarousel({
    items: 1,
    loop: !1,
    margin: 0,
    nav: !0,
    navText: ["<span class='avatar avatar-xs me-2 text-primary bg-soft-primary carousel-right-trigger waves-effect'><i class='bx bx-chevron-left'></i></span>", "<span class='avatar avatar-xs me-0 text-primary bg-soft-primary carousel-right-trigger waves-effect'><i class='bx bx-chevron-right'></i></span>"],
    dots: !1,
    responsive: {
      576: { items: 2 },
      768: { items: 4 }
    }
  });
} (jQuery));