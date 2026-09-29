(() => {
  'use strict';

  // Replace unavailable remote photos with a branded category treatment.
  document.querySelectorAll('.category-card img, .project-card img, .product-card > img, .product-feature-card > img, .plain-image').forEach((image) => {
    image.addEventListener('error', () => {
      const placeholder = document.createElement('div');
      placeholder.className = 'image-placeholder';
      placeholder.setAttribute('role', 'img');
      placeholder.setAttribute('aria-label', image.alt || 'BlindsXpert image');
      const label = document.createElement('span');
      label.textContent = image.alt || 'BlindsXpert image';
      placeholder.append(label);
      image.replaceWith(placeholder);
    }, { once: true });
  });

  const quoteForm = document.getElementById('quoteForm');

  // Reveal content progressively only when motion is allowed and the API exists.
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduceMotion && 'IntersectionObserver' in window) {
    const revealTargets = document.querySelectorAll(
      '.section-title, .category-card, .product-card, .product-feature-card, .project-card, .info-card, .segment-card, .plain-image, .page-hero .container, .social-follow .container, .contact-social'
    );
    revealTargets.forEach((element) => {
      element.classList.add('reveal');
      if (element.matches('.category-card, .product-card, .product-feature-card, .project-card, .segment-card')) {
        element.classList.add('reveal-scale');
      } else if (element.matches('.plain-image')) {
        element.classList.add('reveal-left');
      }
    });

    document.querySelectorAll('.row').forEach((row) => {
      const items = row.querySelectorAll(':scope > [class*="col"] .reveal');
      items.forEach((item, index) => {
        item.style.setProperty('--reveal-delay', `${Math.min(index, 4) * 65}ms`);
      });
    });

    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -6% 0px' });

    revealTargets.forEach((element) => observer.observe(element));
    document.documentElement.classList.add('reveal-ready');
  }

  // Stagger the mobile menu on open; Bootstrap retains its native keyboard behavior.
  document.querySelectorAll('.navbar-collapse .nav-link, .navbar-collapse .navbar-nav > .btn').forEach((link, index) => {
    link.style.setProperty('--menu-stagger', `${Math.min(index, 6) * 35}ms`);
  });
  // Lightweight catalogue category filter.
  const filterButtons = document.querySelectorAll('[data-filter]');
  const productCards = document.querySelectorAll('.product-item');
  const filterStatus = document.getElementById('filter-status');
  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;
      filterButtons.forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
      let visible = 0;
      productCards.forEach((card) => {
        const matches = filter === 'all' || card.dataset.category.split(' ').includes(filter);
        card.hidden = !matches;
        if (matches) visible += 1;
      });
      if (filterStatus) filterStatus.textContent = `${visible} products shown.`;
    });
  });

  // This prepares a draft email. There is no website submission endpoint.
  const form = document.getElementById('quoteForm');
  if (form) {
    const params = new URLSearchParams(window.location.search);
    const productField = document.getElementById('product');
    if (productField && params.has('product')) productField.value = params.get('product');
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      form.classList.add('was-validated');
      const status = document.getElementById('formStatus');
      if (!form.checkValidity()) {
        if (status) {
          status.hidden = false;
          status.textContent = 'Please check the required fields and email address.';
        }
        form.querySelector(':invalid')?.focus();
        return;
      }
      const data = new FormData(form);
      const lines = [
        `Name: ${data.get('name')}`,
        `Phone: ${data.get('phone')}`,
        `Email: ${data.get('email') || 'Not provided'}`,
        `Customer type: ${data.get('customerType') || 'Not provided'}`,
        `Product / solution: ${data.get('product') || 'Not provided'}`,
        `Location: ${data.get('location') || 'Not provided'}`,
        '',
        String(data.get('message') || '')
      ];
      const subject = encodeURIComponent('BlindsXpert quotation enquiry');
      const body = encodeURIComponent(lines.join('\n'));
      window.location.href = `mailto:sales.blindsXpert@gmail.com?subject=${subject}&body=${body}`;
      if (status) {
        status.hidden = false;
        status.textContent = 'Your email application should open with a draft enquiry. The request has not been sent by this website; please review and send it in your email application, or use the contact options on this page.';
      }
    });
  }

  const topButton = document.querySelector('.to-top');
  if (topButton) {
    const updateTopButton = () => { topButton.style.display = window.scrollY > 450 ? 'block' : 'none'; };
    window.addEventListener('scroll', updateTopButton, { passive: true });
    updateTopButton();
    topButton.addEventListener('click', () => window.scrollTo({ top: 0, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' }));
  }
})();
