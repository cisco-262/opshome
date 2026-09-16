(() => {
  const nav = document.querySelector('body > nav, nav');
  if (!nav || !nav.querySelector('.navlinks')) return;

  const sourceList = nav.querySelector('.navlinks');
  const language = (document.documentElement.lang || 'en').toLowerCase();
  const labels = language.startsWith('zh-hant')
    ? { open: '開啟導覽', close: '關閉導覽', menu: '網站導覽' }
    : language.startsWith('zh')
      ? { open: '打开导航', close: '关闭导航', menu: '网站导航' }
      : language.startsWith('de')
        ? { open: 'Navigation öffnen', close: 'Navigation schließen', menu: 'Seitennavigation' }
        : { open: 'Open navigation', close: 'Close navigation', menu: 'Site navigation' };

  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'mobile-menu-toggle';
  button.setAttribute('aria-expanded', 'false');
  button.setAttribute('aria-label', labels.open);
  button.setAttribute('aria-controls', 'mobile-site-menu');
  button.innerHTML = '<span class="mobile-menu-icon" aria-hidden="true"></span>';

  const panel = document.createElement('div');
  panel.className = 'mobile-menu-panel';
  panel.id = 'mobile-site-menu';
  panel.setAttribute('aria-label', labels.menu);

  const clonedList = sourceList.cloneNode(true);
  clonedList.className = 'mobile-menu-list';
  panel.appendChild(clonedList);

  const sourceActions = Array.from(nav.querySelectorAll(':scope > .nav-cta-group > a, :scope > a.nav-cta'));
  if (sourceActions.length) {
    const actions = document.createElement('div');
    actions.className = 'mobile-menu-actions';
    sourceActions.forEach((link) => {
      const cloned = link.cloneNode(true);
      cloned.classList.remove('nav-cta');
      if (link.classList.contains('nav-console-cta') || /console\.opshome\.run/.test(link.href)) {
        cloned.classList.add('nav-console-cta');
      }
      actions.appendChild(cloned);
    });
    panel.appendChild(actions);
  }

  const lang = nav.querySelector(':scope > .lang');
  if (lang) nav.insertBefore(button, lang.nextSibling);
  else nav.appendChild(button);
  nav.appendChild(panel);

  const closeMenu = (returnFocus = false) => {
    panel.classList.remove('is-open');
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-label', labels.open);
    document.body.classList.remove('mobile-menu-open');
    if (returnFocus) button.focus();
  };

  const openMenu = () => {
    panel.classList.add('is-open');
    button.setAttribute('aria-expanded', 'true');
    button.setAttribute('aria-label', labels.close);
    document.body.classList.add('mobile-menu-open');
  };

  button.addEventListener('click', () => {
    if (button.getAttribute('aria-expanded') === 'true') closeMenu();
    else openMenu();
  });

  panel.addEventListener('click', (event) => {
    if (event.target.closest('a')) closeMenu();
  });

  document.addEventListener('click', (event) => {
    if (button.getAttribute('aria-expanded') !== 'true') return;
    if (!nav.contains(event.target)) closeMenu();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') closeMenu(true);
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 900 && button.getAttribute('aria-expanded') === 'true') closeMenu();
  }, { passive: true });
})();
