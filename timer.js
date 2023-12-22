// timer.js

let seconds = 0;

function updateTimer() {
  const timerElement = document.getElementById('timer');
  seconds++;
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
  timerElement.textContent = display;
}

setInterval(updateTimer, 1000); // Update every second

// Add scrolling behavior
const timer = document.getElementById('timer');

// Add a scroll event listener
window.addEventListener('scroll', function() {
  // Calculate the new top position based on the scroll distance
  const newTop = Math.max(20, 20 - window.scrollY) + 'px';
  
  // Update the top property of the timer
  timer.style.top = newTop;
});
