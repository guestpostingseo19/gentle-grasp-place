/*
 * RankBridge — lightweight interactions.
 * Scroll reveal, sticky header state, mobile navigation and services dropdown.
 * No dependencies, no framework, ~2 KB.
 */
(function () {
  'use strict';

  function ready(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }

  ready(function () {
    /* ---------- Scroll reveal ---------- */
    var revealEls = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(
        function (entries, observer) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.setAttribute('data-visible', 'true');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
      );
      revealEls.forEach(function (el) {
        io.observe(el);
      });
    } else {
      revealEls.forEach(function (el) {
        el.setAttribute('data-visible', 'true');
      });
    }

    /* ---------- Sticky header ---------- */
    var header = document.getElementById('rb-header');
    var bar = document.getElementById('rb-header-bar');
    if (header && bar) {
      var onScroll = function () {
        var scrolled = window.scrollY > 12;
        header.classList.toggle('py-2', scrolled);
        header.classList.toggle('py-4', !scrolled);
        bar.classList.toggle('glass-panel', scrolled);
        bar.classList.toggle('shadow-2xl', scrolled);
        bar.classList.toggle('border', !scrolled);
        bar.classList.toggle('border-transparent', !scrolled);
      };
      onScroll();
      window.addEventListener('scroll', onScroll, { passive: true });
    }

    /* ---------- Mobile menu ---------- */
    var toggle = document.getElementById('rb-menu-toggle');
    var panel = document.getElementById('rb-mobile-panel');
    if (toggle && panel) {
      toggle.addEventListener('click', function () {
        var open = panel.classList.toggle('max-h-[70vh]');
        panel.classList.toggle('mt-2', open);
        panel.classList.toggle('max-h-0', !open);
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
        var icons = toggle.querySelectorAll('[data-icon]');
        icons.forEach(function (icon) {
          icon.classList.toggle('hidden', icon.getAttribute('data-icon') !== (open ? 'x' : 'menu'));
        });
      });
    }

    /* ---------- Services dropdown ---------- */
    var dropdownRoot = document.getElementById('rb-services-menu');
    if (dropdownRoot) {
      var flyout = dropdownRoot.querySelector('[data-flyout]');
      var chevron = dropdownRoot.querySelector('[data-chevron]');
      var setOpen = function (open) {
        if (!flyout) return;
        flyout.classList.toggle('pointer-events-auto', open);
        flyout.classList.toggle('translate-y-0', open);
        flyout.classList.toggle('opacity-100', open);
        flyout.classList.toggle('pointer-events-none', !open);
        flyout.classList.toggle('-translate-y-1', !open);
        flyout.classList.toggle('opacity-0', !open);
        if (chevron) chevron.classList.toggle('rotate-180', open);
      };
      dropdownRoot.addEventListener('mouseenter', function () {
        setOpen(true);
      });
      dropdownRoot.addEventListener('mouseleave', function () {
        setOpen(false);
      });
      dropdownRoot.addEventListener('focusin', function () {
        setOpen(true);
      });
      dropdownRoot.addEventListener('focusout', function (e) {
        if (!dropdownRoot.contains(e.relatedTarget)) setOpen(false);
      });
    }
  });
})();
