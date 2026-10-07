document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.getElementById('carousel');
  const dots = document.querySelectorAll('#dots .dot');

  if (carousel && dots.length) {
    carousel.addEventListener(
      'scroll',
      () => {
        const index = Math.round(carousel.scrollLeft / carousel.clientWidth);
        dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
      },
      { passive: true }
    );
  }
});
