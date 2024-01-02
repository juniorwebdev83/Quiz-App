let seconds = 0;
let timerInterval; // Store the interval ID to manage it later

function startTimer() {
  timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
  const timerElement = document.getElementById('timer');
  
  // Update the timer
  seconds++;
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  
  // Format minutes and seconds as two digits
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(remainderSeconds).padStart(2, '0');
  
  // Update display to show minutes and seconds in HH:MM format
  const display = `${formattedMinutes}:${formattedSeconds}`;
  
  timerElement.textContent = display;
}

// Call startTimer to begin the countdown
startTimer();

// Rest of your code...
