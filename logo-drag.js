let isDragging = false;
let offsetX, offsetY;

const logoContainer = document.getElementById('logo-container'); // Added logo container
const logo = document.getElementById('logo');
const goBackElement = document.getElementById('goBack');

logo.addEventListener('mousedown', (e) => {
  isDragging = true;
  offsetX = e.clientX - logo.getBoundingClientRect().left;
  offsetY = e.clientY - logo.getBoundingClientRect().top;

  // Show the "GO BACK" word when dragging starts
  goBackElement.style.opacity = 1;

  // Add 'dragging' class to logo container when dragging starts
  logoContainer.classList.add('dragging');
});

document.addEventListener('mousemove', (e) => {
  if (isDragging) {
    const x = e.clientX - offsetX;
    const y = e.clientY - offsetY;

    logo.style.left = `${x}px`;
    logo.style.top = `${y}px`;
  }
});

document.addEventListener('mouseup', () => {
  isDragging = false;

  // Hide the "GO BACK" word when dragging ends
  goBackElement.style.opacity = 0;

  // Remove 'dragging' class from logo container when dragging ends
  logoContainer.classList.remove('dragging');
});
