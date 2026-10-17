/* Content remains readable and all links work without JavaScript. */
(() => {
  const root = document.documentElement;
  const themeButton = document.querySelector('.theme-toggle');
  const setTheme = theme => {
    root.dataset.theme = theme;
    themeButton.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`);
    document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#161923' : '#ffffff';
  };
  let initialTheme = 'light';
  try {
    if (localStorage.getItem('yonggang-theme') === 'dark') initialTheme = 'dark';
  } catch (_) { /* Storage may be unavailable in private browsing. */ }
  setTheme(initialTheme);
  themeButton.hidden = false;
  themeButton.addEventListener('click', () => {
    const theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    setTheme(theme);
    try { localStorage.setItem('yonggang-theme', theme); } catch (_) { /* Optional preference. */ }
  });

  const navLinks = [...document.querySelectorAll('nav a[href^="#"]')];
  const sections = navLinks.map(link => document.querySelector(link.getAttribute('href')));
  let scheduled = false;
  const updateNavigation = () => {
    const offset = document.querySelector('.site-header').offsetHeight + 55;
    let active = sections[0];
    for (const section of sections) {
      if (section.getBoundingClientRect().top <= offset) active = section;
    }
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 8) active = sections[sections.length - 1];
    for (const link of navLinks) {
      if (link.hash === `#${active.id}`) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    }
    scheduled = false;
  };
  window.addEventListener('scroll', () => {
    if (!scheduled) {
      scheduled = true;
      requestAnimationFrame(updateNavigation);
    }
  }, { passive: true });
  window.addEventListener('resize', updateNavigation);
  updateNavigation();
  document.querySelector('#copyright-year').textContent = new Date().getFullYear();
})();
