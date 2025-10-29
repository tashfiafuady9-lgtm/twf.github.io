// Toggle menu untuk mobile
const navToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.navbar ul');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Animasi progress bar saat halaman dimuat
window.addEventListener('load', () => {
  const progresses = document.querySelectorAll('.progress');
  progresses.forEach(p => {
    const target = p.getAttribute('data-width');
    setTimeout(() => {
      p.style.width = target;
    }, 300);
  });
});
