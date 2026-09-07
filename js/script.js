// =========================================================
// COOKIE BUENO — script.js
// JavaScript puro, sem dependências externas.
// =========================================================

document.addEventListener('DOMContentLoaded', function () {
  initAccordion();
  initCtaTracking();
});

/* ---------------------------------------------------------
   FAQ ACCORDION
--------------------------------------------------------- */
function initAccordion() {
  const items = document.querySelectorAll('.accordion-item');

  items.forEach(function (item) {
    const trigger = item.querySelector('.accordion-trigger');

    trigger.addEventListener('click', function () {
      const isOpen = item.classList.contains('open');

      // Fecha os outros itens abertos (comportamento de acordeão single-open)
      items.forEach(function (other) {
        other.classList.remove('open');
      });

      if (!isOpen) {
        item.classList.add('open');
      }
    });
  });
}

/* ---------------------------------------------------------
   RASTREAMENTO DE CLIQUES NOS CTAs
   Por enquanto, apenas registra no console.
   Quando o Meta Pixel e o Google Analytics estiverem instalados,
   substitua os comentários abaixo pelas chamadas reais de evento.
--------------------------------------------------------- */
function initCtaTracking() {
  const ctaButtons = document.querySelectorAll('[data-cta]');

  ctaButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      const ctaId = button.getAttribute('data-cta');
      trackCtaClick(ctaId);
    });
  });
}

function trackCtaClick(ctaId) {
  console.log('CTA clicado:', ctaId);

  // GOOGLE ANALYTICS (gtag.js) — descomente quando a tag estiver instalada no <head>
  // if (typeof gtag === 'function') {
  //   gtag('event', 'click', {
  //     event_category: 'CTA',
  //     event_label: ctaId
  //   });
  // }

  // META PIXEL — descomente quando o pixel estiver instalado no <head>
  // if (typeof fbq === 'function') {
  //   fbq('trackCustom', ctaId);
  // }
}
