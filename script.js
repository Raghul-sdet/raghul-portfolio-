(function () {
  var root = document.documentElement;
  var buttons = document.querySelectorAll('[data-theme-choice]');
  var mql = window.matchMedia('(prefers-color-scheme: dark)');

  function resolve(pref) {
    if (pref === 'system') return mql.matches ? 'dark' : 'light';
    return pref;
  }

  function apply(pref) {
    root.setAttribute('data-theme-pref', pref);
    root.setAttribute('data-theme', resolve(pref));
    buttons.forEach(function (btn) {
      btn.setAttribute('aria-current', btn.getAttribute('data-theme-choice') === pref ? 'true' : 'false');
    });
  }

  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var choice = btn.getAttribute('data-theme-choice');
      localStorage.setItem('theme-preference', choice);
      apply(choice);
    });
  });

  // Keep in sync with OS changes while the user hasn't made an explicit choice.
  mql.addEventListener('change', function () {
    if (root.getAttribute('data-theme-pref') === 'system') {
      root.setAttribute('data-theme', resolve('system'));
    }
  });

  // Initialize button states to match what the inline head script already set.
  apply(root.getAttribute('data-theme-pref') || 'system');
})();
