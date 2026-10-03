/* Yubin Jang, site behaviour. Vanilla JS, no dependencies.
   Everything on the pages works without this file. It only adds the mobile
   menu, the "show all" control on long lists, and the tabs on /resources. */
(function () {
  'use strict';

  /* ---------- footer year ---------- */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- mobile menu ---------- */
  var toggle = document.getElementById('navToggle');
  var links = document.getElementById('navLinks');

  function closeMenu() {
    if (!links) return;
    links.classList.remove('is-open');
    if (toggle) toggle.setAttribute('aria-expanded', 'false');
  }

  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    links.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') closeMenu();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMenu();
    });
  }

  /* ---------- collapse long lists ----------
     Everything stays in the DOM. Only the display is trimmed, so the full list
     is still there for search engines, for print, and for anyone without JS. */
  Array.prototype.slice.call(document.querySelectorAll('[data-collapse]')).forEach(function (list) {
    var keep = parseInt(list.getAttribute('data-collapse'), 10) || 6;
    var items = Array.prototype.slice.call(list.querySelectorAll('.pub'));
    var btn = document.getElementById(list.id + 'More');
    if (!btn || items.length <= keep) return;

    var extra = items.slice(keep);
    function render(open) {
      extra.forEach(function (el) { el.classList.toggle('is-hidden', !open); });
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      btn.textContent = open ? 'Show fewer' : 'Show all ' + items.length;
    }
    render(false);
    btn.classList.add('is-ready');
    btn.addEventListener('click', function () {
      var open = btn.getAttribute('aria-expanded') === 'true';
      render(!open);
      if (open) list.scrollIntoView({ block: 'nearest' });
    });
  });

  /* ---------- tab panels (resources page) ---------- */
  var tabs = Array.prototype.slice.call(document.querySelectorAll('.tab'));

  function selectTab(tab) {
    tabs.forEach(function (t) {
      var panel = document.getElementById(t.getAttribute('aria-controls'));
      var active = t === tab;
      t.classList.toggle('is-active', active);
      t.setAttribute('aria-selected', active ? 'true' : 'false');
      if (panel) panel.hidden = !active;
    });
  }

  tabs.forEach(function (tab, i) {
    tab.addEventListener('click', function () { selectTab(tab); });
    tab.addEventListener('keydown', function (e) {
      var dir = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (!dir) return;
      e.preventDefault();
      var next = tabs[(i + dir + tabs.length) % tabs.length];
      selectTab(next);
      next.focus();
    });
  });

})();
