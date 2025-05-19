const hamburger = document.getElementById('hamburger');
const menuOverlay = document.getElementById('menuOverlay');
const menuText = document.getElementById('menuText');
const menuIcon = document.getElementById('menuIcon');
const closeBtn = document.querySelector('.close-btn'); // Select the close button inside the overlay

// Toggle the menu visibility when hamburger is clicked
hamburger.addEventListener('click', () => {
  if (!menuOverlay.classList.contains('active')) {
    // Open the menu
    menuOverlay.classList.add('active');
    menuText.textContent = 'Close'; // Change text to Close
    menuIcon.src = 'images/close.png'; // Change to close icon
  } else {
    // Close the menu
    menuOverlay.classList.remove('active');
    menuText.textContent = 'Menu'; // Change text back to Menu
    menuIcon.src = 'images/horizontal-lines (1).png'; // Change back to hamburger icon
  }
});

// Close the menu when the close button inside the overlay is clicked
closeBtn.addEventListener('click', () => {
  menuOverlay.classList.remove('active');
  menuText.textContent = 'Menu'; // Change text back to Menu
  menuIcon.src = 'images/horizontal-lines (1).png'; // Change back to hamburger icon
});

// Smooth scroll for timeline sections (example)
document.querySelectorAll('.timeline-item').forEach((item, index) => {
  item.addEventListener('mouseover', () => {
    item.style.transform = 'scale(1.05)';
    item.style.transition = 'transform 0.3s ease-in-out';
  });

  item.addEventListener('mouseout', () => {
    item.style.transform = 'scale(1)';
  });
});

// Lightbox Effect for Certificates
document.querySelectorAll('.lightbox').forEach(item => {
  item.addEventListener('click', function (e) {
    e.preventDefault();

    const overlay = document.createElement('div');
    overlay.classList.add('lightbox-overlay');

    const img = document.createElement('img');
    img.src = this.href;
    img.alt = this.querySelector('img').alt;

    overlay.appendChild(img);
    document.body.appendChild(overlay);

    overlay.addEventListener('click', function () {
      overlay.remove();
    });
  });
});

// Animate certificates on scroll
function animateCertificates() {
  const certs = document.querySelectorAll('.gallery a');

  certs.forEach(cert => {
    const rect = cert.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {  // Trigger animation when almost visible
      cert.classList.add('animate');
    }
  });
}

window.addEventListener('scroll', animateCertificates);
window.addEventListener('load', animateCertificates);

