// Reveal elements as they enter the viewport.
(function () {
  var items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window) || !items.length) {
    items.forEach(function (el) { el.classList.add('in'); });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  items.forEach(function (el) { observer.observe(el); });
})();

// Theme switcher logic
document.addEventListener("DOMContentLoaded", function () {
  var html = document.documentElement;
  var themeBtns = document.querySelectorAll('.theme-btn');

  // Prevent transition on initial load
  setTimeout(function () {
    html.classList.add('theme-transition');
  }, 100);

  function getSavedTheme() {
    return localStorage.getItem('theme-preference') || 'system';
  }

  function applyTheme(theme) {
    if (theme === 'dark') {
      html.setAttribute('data-theme', 'dark');
    } else if (theme === 'light') {
      html.setAttribute('data-theme', 'light');
    } else {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        html.setAttribute('data-theme', 'dark');
      } else {
        html.setAttribute('data-theme', 'light');
      }
    }

    // Update active state on buttons
    themeBtns.forEach(function (btn) {
      if (btn.getAttribute('data-theme-btn') === theme) {
        btn.classList.add('is-active');
      } else {
        btn.classList.remove('is-active');
      }
    });
  }

  // Initialize button states
  applyTheme(getSavedTheme());

  themeBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var selectedTheme = btn.getAttribute('data-theme-btn');
      if (selectedTheme === 'system') {
        localStorage.removeItem('theme-preference');
      } else {
        localStorage.setItem('theme-preference', selectedTheme);
      }
      applyTheme(selectedTheme);
    });
  });

  // Listen for system theme changes
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function () {
      if (!localStorage.getItem('theme-preference')) {
        applyTheme('system');
      }
    });
  }
});

