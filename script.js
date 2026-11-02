'use strict';

const menu = document.getElementById('menu');
const nav = document.getElementById('nav');

if (menu && nav) {
  menu.hidden = false;
  nav.classList.add('collapsible');

  function closeMenu() {
    nav.classList.remove('open');
    menu.setAttribute('aria-expanded', 'false');
  }

  menu.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(open));
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && nav.classList.contains('open')) {
      closeMenu();
      menu.focus();
    }
  });

  window.matchMedia('(min-width: 651px)').addEventListener('change', closeMenu);
}

const year = document.getElementById('year');
if (year) year.textContent = String(new Date().getFullYear());
