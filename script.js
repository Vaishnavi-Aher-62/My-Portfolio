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
