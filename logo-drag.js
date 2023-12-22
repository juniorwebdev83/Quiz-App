// Add this code for logo dragging functionality


let offsetX, offsetY;

const logo = document.getElementById('logo');

logo.addEventListener('mousedown', (e) => {
  isDragging = true;
  offsetX = e.clientX - logo.getBoundingClientRect().left;
  offsetY = e.clientY - logo.getBoundingClientRect().top;
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
});
