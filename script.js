'use strict';

// Progressive enhancement: without JavaScript the navigation and all projects stay visible.
const nav = document.querySelector('.nav');
const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('#nav-links');
const mobileLayout = window.matchMedia('(max-width: 900px)');

function closeMenu({ restoreFocus = false } = {}) {
  navLinks.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
  if (restoreFocus) menuButton.focus();
}

menuButton.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') === 'true';
  navLinks.classList.toggle('is-open', !expanded);
  menuButton.setAttribute('aria-expanded', String(!expanded));
});
navLinks.addEventListener('click', (event) => {
  const link = event.target.closest('a');
  if (!link) return;
  closeMenu();
  // Transfer keyboard focus to the destination rather than leave it in a hidden menu.
  if (mobileLayout.matches) {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
      target.addEventListener('blur', () => target.removeAttribute('tabindex'), { once: true });
    }
  }
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    closeMenu({ restoreFocus: true });
  }
});
document.addEventListener('click', (event) => {
  if (!nav.contains(event.target)) closeMenu();
});
mobileLayout.addEventListener('change', () => closeMenu());
menuButton.hidden = false;
nav.classList.add('nav-enhanced');

const filterButtons = [...document.querySelectorAll('[data-filter]')];
const projects = [...document.querySelectorAll('[data-category]')];
const projectCount = document.querySelector('#project-count');
filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    filterButtons.forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
    let visibleCount = 0;
    projects.forEach((project) => {
      const visible = button.dataset.filter === 'all' || project.dataset.category === button.dataset.filter;
      project.hidden = !visible;
      if (visible) visibleCount += 1;
    });
    projectCount.textContent = `${visibleCount} ${visibleCount === 1 ? 'proyecto' : 'proyectos'}`;
  });
});
document.querySelector('.project-toolbar').hidden = false;

if ('IntersectionObserver' in window) {
  const sectionObserver = new IntersectionObserver((entries) => {
    const active = entries.filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!active) return;
    navLinks.querySelectorAll('a').forEach((link) => {
      if (link.getAttribute('href') === `#${active.target.id}`) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }, { rootMargin: '-15% 0px -55% 0px', threshold: 0 });
  document.querySelectorAll('main > section').forEach((section) => sectionObserver.observe(section));
}
