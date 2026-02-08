/*!
=========================================================
* JohnDoe Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function (e) {

    const href = this.getAttribute('href');

    // 👉 solo prevenir si es ancla local (#)
    if (href.startsWith('#')) {
      e.preventDefault();

      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
    // 👉 si NO empieza con #, deja navegar normal
  });
});


// protfolio filters
$(window).on("load", function() {
    var t = $(".portfolio-container");
    t.isotope({
        itemSelector: ".portfolio-container > [class*='col-']",
        layoutMode: "fitRows",
        percentPosition: true,
        transitionDuration: "0.4s",
        filter: ".new"
    }), $(".filters a").click(function() {
        $(".filters .active").removeClass("active"), $(this).addClass("active");
        var i = $(this).attr("data-filter");
        return t.isotope({
            filter: i,
            animationOptions: {
                duration: 750,
                easing: "linear",
                queue: !1
            }
        }), !1
    });
});

