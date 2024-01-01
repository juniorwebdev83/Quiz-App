let seconds = 0;

function updateTimer() {
  const timerElement = document.getElementById('timer');
  
  // Update the timer
  seconds++;
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  
  // Update display to show only numeric values
  const display = `${minutes}m ${remainderSeconds}s`;
  
  timerElement.textContent = display;
}

// Function to format the date as 'Day, Year'
function formatDayAndYear(date) {
  const dayOptions = { weekday: 'long' };
  const yearOptions = { year: 'numeric' };

  const day = new Intl.DateTimeFormat('en-US', dayOptions).format(date);
  const year = new Intl.DateTimeFormat('en-US', yearOptions).format(date);
  
  return `${day}, ${year}`;
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
