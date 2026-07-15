// All Clear Mulching & Bush Hogging — shared site behavior

document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.navlinks');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { links.classList.remove('open'); });
    });
  }

  // Contact form (front-end only demo — wire to a form backend like Formspree before launch)
  var form = document.getElementById('quote-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var msg = document.getElementById('form-success');
      form.style.display = 'none';
      if (msg) msg.style.display = 'block';
    });
  }

  // Simple gallery lightbox
  var items = document.querySelectorAll('.gallery-item[data-full]');
  var lb = document.getElementById('lightbox');
  if (items.length && lb) {
    var lbImg = lb.querySelector('img');
    items.forEach(function (item) {
      item.addEventListener('click', function () {
        lbImg.src = item.getAttribute('data-full');
        lb.classList.add('open');
      });
    });
    lb.addEventListener('click', function () { lb.classList.remove('open'); });
  }
});
