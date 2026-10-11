// Soft floating hearts
const heartsContainer = document.getElementById('hearts-bg');
const heartChars = ['♡', '♥', '💕', '💖', '💗', '🌸'];

function createHearts() {
  const count = 20;

  for (let i = 0; i < count; i++) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.textContent = heartChars[Math.floor(Math.random() * heartChars.length)];

    heart.style.left = Math.random() * 100 + '%';

    const size = 12 + Math.random() * 18;
    heart.style.fontSize = size + 'px';

    const duration = 10 + Math.random() * 14;
    heart.style.animationDuration = duration + 's';

    heart.style.animationDelay = (Math.random() * -25) + 's';

    heartsContainer.appendChild(heart);
  }
}

// Smooth scroll for all links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Navbar soft effect on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    navbar.style.background = 'rgba(255, 245, 247, 0.88)';
    navbar.style.boxShadow = '0 4px 20px rgba(232, 90, 139, 0.12)';
  } else {
    navbar.style.background = 'rgba(255, 245, 247, 0.72)';
    navbar.style.boxShadow = 'none';
  }
});

createHearts();
