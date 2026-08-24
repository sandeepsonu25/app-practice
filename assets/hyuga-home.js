(function () {
  function ready(fn) {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn);
    else fn();
  }

  ready(function () {
    document.querySelectorAll('[data-hyuga-hero]').forEach(function (hero) {
      var track = hero.querySelector('.hyuga-hero__track');
      var slides = hero.querySelectorAll('.hyuga-hero__slide');
      var dots = hero.querySelectorAll('.hyuga-hero__dots button');
      if (!track || !slides.length) return;
      var i = 0;
      function go(n) {
        i = (n + slides.length) % slides.length;
        track.style.transform = 'translateX(' + -i * 100 + '%)';
        dots.forEach(function (d, idx) {
          d.classList.toggle('is-active', idx === i);
        });
      }
      dots.forEach(function (d, idx) {
        d.addEventListener('click', function () {
          go(idx);
        });
      });
      setInterval(function () {
        go(i + 1);
      }, 4500);
    });

    document.querySelectorAll('[data-hyuga-burger]').forEach(function (burger) {
      var drawer = document.querySelector('[data-hyuga-drawer]');
      if (!drawer) return;
      burger.addEventListener('click', function () {
        drawer.classList.add('is-open');
      });
    });

    document.querySelectorAll('[data-hyuga-drawer]').forEach(function (drawer) {
      drawer.querySelectorAll('[data-hyuga-close]').forEach(function (el) {
        el.addEventListener('click', function () {
          drawer.classList.remove('is-open');
        });
      });
    });
  });
})();
