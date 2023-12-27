// Encouraging messages array
const encouragingMessages = [
  "You can see the training material.",
  "Don't worry about the time.",
  "Believe in yourself!",
  "Stay positive!",
  "Keep going!",
  "Don't give up!",
  "You're stronger than you think!",
  "Every step counts!",
  "Success is a journey, not a destination!",
  "Embrace the journey!",
  "Your potential is limitless!",
  "Dream big, work hard!",
  "You're resilient!",
  "You're making progress!",
  "You're capable of amazing things!",
  "Focus on progress, not perfection!",
  "Your effort matters!",
  "You're on the right path!",
  "Trust the process!",
  "Celebrate small victories!",
  "Challenges make you stronger!",
  "You inspire others!",
  "Your best is yet to come!"
];

// Function to create and animate encouraging messages
function createEncouragingMessage() {
  // Create a new <div> element for the message
  const messageElement = document.createElement('div');
  messageElement.className = 'encouraging-message';

  // Randomly select a message from the array
  const randomIndex = Math.floor(Math.random() * encouragingMessages.length);
  const messageText = encouragingMessages[randomIndex];

  // Set the message text
  messageElement.textContent = messageText;

  // Append the message element to the body
  document.body.appendChild(messageElement);

  // Apply animation styles
  messageElement.style.animation = 'drop 10s linear'; // Adjust the duration to slow down the animation

  // Remove the message element after the animation is complete
  setTimeout(() => {
    messageElement.remove();
  }, 10000); // Adjust the timeout based on the animation duration
}

// Function to continuously create encouraging messages
function startEncouragingMessages(interval) {
setInterval(() => {
  createEncouragingMessage();
}, interval);
}

// Start the encouraging messages every 10 minutes (600,000 milliseconds)
startEncouragingMessages(600000);
