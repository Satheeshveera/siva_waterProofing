/**
 * Template Name: Day - v4.3.0
 * Template URL: https://bootstrapmade.com/day-multipurpose-html-template-for-free/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */

(function () {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);
    if (selectEl) {
      if (all) {
        selectEl.forEach((e) => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  };

  /**
   * Easy on scroll event listener
   */
  const onscroll = (el, listener) => {
    el.addEventListener("scroll", listener);
  };

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select("#navbar .scrollto", true);
  const navbarlinksActive = () => {
    let position = window.scrollY + 200;
    navbarlinks.forEach((navbarlink) => {
      if (!navbarlink.hash) return;
      let section = select(navbarlink.hash);
      if (!section) return;
      if (
        position >= section.offsetTop &&
        position <= section.offsetTop + section.offsetHeight
      ) {
        navbarlink.classList.add("active");
      } else {
        navbarlink.classList.remove("active");
      }
    });
  };
  window.addEventListener("load", navbarlinksActive);
  onscroll(document, navbarlinksActive);

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select("#header");
    let offset = header.offsetHeight;

    if (!header.classList.contains("header-scrolled")) {
      offset -= 16;
    }

    let elementPos = select(el).offsetTop;
    window.scrollTo({
      top: elementPos - offset,
      behavior: "smooth",
    });
  };

  /**
   * Header fixed top on scroll
   */
  let selectHeader = select("#header");
  if (selectHeader) {
    let headerOffset = selectHeader.offsetTop;
    let nextElement = selectHeader.nextElementSibling;
    const headerFixed = () => {
      if (headerOffset - window.scrollY <= 0) {
        selectHeader.classList.add("fixed-top");
        nextElement.classList.add("scrolled-offset");
      } else {
        selectHeader.classList.remove("fixed-top");
        nextElement.classList.remove("scrolled-offset");
      }
    };
    window.addEventListener("load", headerFixed);
    onscroll(document, headerFixed);
  }

  /**
   * Back to top button
   */
  let backtotop = select(".back-to-top");
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add("active");
      } else {
        backtotop.classList.remove("active");
      }
    };
    window.addEventListener("load", toggleBacktotop);
    onscroll(document, toggleBacktotop);
  }

  /**
   * Mobile nav toggle
   */
  on("click", ".mobile-nav-toggle", function (e) {
    select("#navbar").classList.toggle("navbar-mobile");
    this.classList.toggle("bi-list");
    this.classList.toggle("bi-x");
  });

  /**
   * Mobile nav dropdowns activate
   */
  on(
    "click",
    ".navbar .dropdown > a",
    function (e) {
      if (select("#navbar").classList.contains("navbar-mobile")) {
        e.preventDefault();
        this.nextElementSibling.classList.toggle("dropdown-active");
      }
    },
    true
  );

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on(
    "click",
    ".scrollto",
    function (e) {
      if (select(this.hash)) {
        e.preventDefault();

        let navbar = select("#navbar");
        if (navbar.classList.contains("navbar-mobile")) {
          navbar.classList.remove("navbar-mobile");
          let navbarToggle = select(".mobile-nav-toggle");
          navbarToggle.classList.toggle("bi-list");
          navbarToggle.classList.toggle("bi-x");
        }
        scrollto(this.hash);
      }
    },
    true
  );

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener("load", () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash);
      }
    }
  });

  /**
   * Preloader
   */
  let preloader = select("#preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      preloader.remove();
    });
  }

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener("load", () => {
    let portfolioContainer = select(".portfolio-container");
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: ".portfolio-item",
      });

      let portfolioFilters = select("#portfolio-flters li", true);

      on(
        "click",
        "#portfolio-flters li",
        function (e) {
          e.preventDefault();
          portfolioFilters.forEach(function (el) {
            el.classList.remove("filter-active");
          });
          this.classList.add("filter-active");

          portfolioIsotope.arrange({
            filter: this.getAttribute("data-filter"),
          });
          portfolioIsotope.on("arrangeComplete", function () {
            AOS.refresh();
          });
        },
        true
      );
    }
  });

  /**
   * Initiate portfolio lightbox
   */
  const portfolioLightbox = GLightbox({
    selector: ".portfolio-lightbox",
  });

  /**
   * Portfolio details slider
   */
  new Swiper(".portfolio-details-slider", {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
  });

  /**
   * Animation on scroll
   */
  window.addEventListener("load", () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  });
})();

// ------------------open modal---------------------------

function openmodal(id) {
  if (id == 1) {
    $("#largeModal").removeClass("d-none");
    $("#largeModal").addClass("d-block");
    $(".ModalLabel").html("Terrace Waterproofing Treatment");
    $(".modalpara").html("  Siva WaterProofing is a customer oriented company engaged in offering Quality water treatment services, Waterproofing is the process of making an object or structure waterproof or water-resistant so that it remains relatively unaffected by water or resisting the ingress of water under specified conditions. Such items may be used in wet environments or under water to specified depths.");

    $("#imginner1").attr("src","assets/img/1.terrace/tr-inner1.jpg");
    $("#imginner2").attr("src","assets/img/1.terrace/tr-inner2.jpg");
    $("#imginner3").attr("src","assets/img/1.terrace/tr-inner3.jpg");
    $("#imginner4").attr("src","assets/img/1.terrace/tr-inner4.jpg");
    $("#imginner5").attr("src","assets/img/1.terrace/tr-inner5.jpg");
  } else if (id == 2) {
    $("#largeModal").removeClass("d-none");
    $("#largeModal").addClass("d-block");
    $(".ModalLabel").html("Heat Insulations Coating");
    $(".modalpara").html("  Siva WaterProofing is the pioneer company engaged in offering services of Commercial Heat Insulations Coating.Thermal insulation is the reduction of heat transfer (the transfer of thermal energy between objects of differing temperature) between objects in thermal contact or in range of radiative influence. Thermal insulation can be achieved with specially engineered methods or processes, as well as with suitable object shapes and materials.");

    $("#imginner1").attr("src","assets/img/2.heat-insulations/ht-inner1.jpg");
    $("#imginner2").attr("src","assets/img/2.heat-insulations/ht-inner2.jpg");
    $("#imginner3").attr("src","assets/img/2.heat-insulations/heat-profile.jpg");
    $("#imginner4").attr("src","assets/img/2.heat-insulations/ht-inner1.jpg");
    $("#imginner5").attr("src","assets/img/2.heat-insulations/ht-inner2.jpg");

  } else if (id == 3) {
    $("#largeModal").removeClass("d-none");
    $("#largeModal").addClass("d-block");
    $(".ModalLabel").html("External Protective Coating");
    $(".modalpara").html("  A protective finishing coat is a substance or chemical composition applied to the surface of an object that provides a barrier of protection from external elements. Polishes use a highly refined abrasive (generally finer than 4,000 grit) that is suspended in a liquid carrier. The polish wears away the surface to create a smooth surface. The smoother the surface the higher the resulting gloss or perceived shine");

    $("#imginner1").attr("src","assets/img/3.external-protective/ep-inner1.jpg");
    $("#imginner2").attr("src","assets/img/3.external-protective/ep-inner2.jpg");
    $("#imginner3").attr("src","assets/img/3.external-protective/ep-profile.jpg");
    $("#imginner4").attr("src","assets/img/3.external-protective/ep-inner1.jpg");
    $("#imginner5").attr("src","assets/img/3.external-protective/ep-inner2.jpg");
  } else if (id == 4) {
    $("#largeModal").removeClass("d-none");
    $("#largeModal").addClass("d-block");
    $(".ModalLabel").html("Structural Repairs & Rehabilitation");
    $(".modalpara").html("  In construction, structural repairs are a technical term, contrasted to renovations or non-structural repairs. They are changes to a property to bring it up to local health and safety standards. Unlike renovations, they add relatively little value to a property.");

    $("#imginner1").attr("src","assets/img/4.structural-repairs/st-inner1.jpg");
    $("#imginner2").attr("src","assets/img/4.structural-repairs/st-inner2.jpg");
    $("#imginner3").attr("src","assets/img/4.structural-repairs/st-inner3.jpg");
    $("#imginner4").attr("src","assets/img/4.structural-repairs/st-inner4.jpg");
    $("#imginner5").attr("src","assets/img/4.structural-repairs/st-inner5.jpg");
  } else if (id == 5) {
    $("#largeModal").removeClass("d-none");
    $("#largeModal").addClass("d-block");
    $(".ModalLabel").html("PU Injection for Concrete Seepage");
    $(".modalpara").html("  Concrete slabs can be susceptible to settlement from a wide variety of factors. In some areas of the United States, naturally occurring soils can consolidate over time, including areas ranging from Texas up through to Wisconsin. Soil erosion also contributes to concrete settlement, which is very common for locations with improper drainage. Concrete slabs built upon filled-in land can excessively settle as well.");

    $("#imginner1").attr("src","assets/img/5.pu-injection/pu-inner1.jpg");
    $("#imginner2").attr("src","assets/img/5.pu-injection/pu-inner2.jpg");
    $("#imginner3").attr("src","assets/img/5.pu-injection/pu-inner3.jpg");
    $("#imginner4").attr("src","assets/img/5.pu-injection/pu-inner4.jpg");
    $("#imginner5").attr("src","assets/img/5.pu-injection/pu-inner5.jpg");
  } else if (id == 6) {
    $("#largeModal").removeClass("d-none");
    $("#largeModal").addClass("d-block");
    $(".ModalLabel").html("Water Proofing Coatings");
    $(".modalpara").html("  Waterproofing is the process of making an object or structure waterproof or water-resistant, so that it remains relatively unaffected by water or resisting the ingress of water under specified conditions. Such items may be used in wet environments or under water to specified depths.");

    $("#imginner1").attr("src","assets/img/6.waterproofing-coatings/wc-inner1.jpg");
    $("#imginner2").attr("src","assets/img/6.waterproofing-coatings/wc-inner2.jpg");
    $("#imginner3").attr("src","assets/img/6.waterproofing-coatings/wc-inner3.jpg");
    $("#imginner4").attr("src","assets/img/6.waterproofing-coatings/wc-inner4.jpg");
    $("#imginner5").attr("src","assets/img/6.waterproofing-coatings/wc-inner5.jpg");
  } else if (id == 7) {
    $("#largeModal").removeClass("d-none");
    $("#largeModal").addClass("d-block");
    $(".ModalLabel").html("Tank Waterproofing Treatment");
    $(".modalpara").html("  Basement waterproofing involves techniques and materials used to prevent water from penetrating the basement of a house or a building. Waterproofing a basement that is below ground level can require the application of sealant materials, the installation of drains and sump pumps, and more.");

    $("#imginner1").attr("src","assets/img/7.tankwaterproofing-treatment/twt-inner1.jpg");
    $("#imginner2").attr("src","assets/img/7.tankwaterproofing-treatment/twt-inner2.jpg");
    $("#imginner3").attr("src","assets/img/7.tankwaterproofing-treatment/twt-inner3.jpg");
    $("#imginner4").attr("src","assets/img/7.tankwaterproofing-treatment/tank-profile.jpeg");
    $("#imginner5").attr("src","assets/img/7.tankwaterproofing-treatment/twt-inner2.jpg");
  } else if (id == 8) {
    $("#largeModal").removeClass("d-none");
    $("#largeModal").addClass("d-block");
    $(".ModalLabel").html("Epoxy Polyurethane Coating Terrace Treatment");
    $(".modalpara").html("  Epoxy grouting is done based on the type of crack, width and depth of crack in concrete structure. Grouting of wide cracks requires large quantity of grout materials. In such cases fillers are used to fill the cracks before epoxy grouting.");

    $("#imginner1").attr("src","assets/img/8.epoxy-polyurethane/epy-inner1.png");
    $("#imginner2").attr("src","assets/img/8.epoxy-polyurethane/epy-inner2.png");
    $("#imginner3").attr("src","assets/img/8.epoxy-polyurethane/epy-inner3.png");
    $("#imginner4").attr("src","assets/img/8.epoxy-polyurethane/epy-inner4.png");
    $("#imginner5").attr("src","assets/img/8.epoxy-polyurethane/epy-inner5.png");
  } else if (id == 9) {
    $("#largeModal").removeClass("d-none");
    $("#largeModal").addClass("d-block");
    $(".ModalLabel").html("Epoxy Tile Grouts for Bathroom");
    $(".modalpara").html("  A bathroom is a room in the home for personal hygiene activities, generally containing a sink (basin) and either a bathtub, a shower, or both. In some countries, the toilet is included in this room, for ease of plumbing, whereas other cultures consider this insanitary, and give that fixture a room of its own.");

    $("#imginner1").attr("src","assets/img/9.epoxy-tile/et-inner1.jpg");
    $("#imginner2").attr("src","assets/img/9.epoxy-tile/et-inner2.jpg");
    $("#imginner3").attr("src","assets/img/9.epoxy-tile/et-inner3.jpg");
    $("#imginner4").attr("src","assets/img/9.epoxy-tile/et-inner4.jpg");
    $("#imginner5").attr("src","assets/img/9.epoxy-tile/et-inner5.jpg");
  } else if (id == 10) {
    $("#largeModal").removeClass("d-none");
    $("#largeModal").addClass("d-block");
    $(".ModalLabel").html("Building Renovation");
    $(".modalpara").html("  Renovation (also called remodeling) is the process of improving a broken, damaged, or outdated structure. Renovations are typically either commercial or residential.[citation needed] Additionally, renovation can refer to making something new, or bringing something back to life and can apply in social contexts.");

    $("#imginner1").attr("src","assets/img/10.building-renovation/br-inner1.jpg");
    $("#imginner2").attr("src","assets/img/10.building-renovation/br-inner2.jpg");
    $("#imginner3").attr("src","assets/img/10.building-renovation/br-inner3.jpg");
    $("#imginner4").attr("src","assets/img/10.building-renovation/br-inner4.jpg");
    $("#imginner5").attr("src","assets/img/10.building-renovation/br-inner5.jpg");
  }
}
function hide() {
  $("#largeModal").removeClass("d-block");
  $("#largeModal").addClass("d-none");
}
