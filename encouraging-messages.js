// Encouraging messages array
// Encouraging messages array
const encouragingMessages = [
    "You Can Do It!",
    "Believe in Yourself!",
    "Stay Positive!",
    "Keep Going!",
    "Don't Give Up!",
    "You're Stronger Than You Think!",
    "Every Step Counts!",
    "Success is a Journey, Not a Destination!",
    "Embrace the Journey!",
    "Your Potential is Limitless!",
    "Dream Big, Work Hard!",
    "You're Resilient!",
    "You're Making Progress!",
    "You're Capable of Amazing Things!",
    "Focus on Progress, Not Perfection!",
    "Your Effort Matters!",
    "You're on the Right Path!",
    "Trust the Process!",
    "Celebrate Small Victories!",
    "Challenges Make You Stronger!",
    "You Inspire Others!",
    "Your Best is Yet to Come!",
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
  function startEncouragingMessages() {
    setInterval(() => {
      createEncouragingMessage();
    }, 20000); // Adjust the interval based on how often you want a new message to appear
  }
  
  // Start the encouraging messages
  startEncouragingMessages();