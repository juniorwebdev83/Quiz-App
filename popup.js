// Wait for the DOM to be ready
document.addEventListener('DOMContentLoaded', function () {
    // Your existing code...

    // Show popup message every 20 seconds
    setInterval(function () {
        showPopupMessage();
    }, 40000); // 20 seconds in milliseconds
});

// Function to show the popup message with timestamp
function showPopupMessage() {
    const popupMessage = document.getElementById('popup-message');

    // Create a new Date object to get the current time
    const timestamp = new Date();

    // Format the timestamp (you can customize the format as needed)
    const formattedTimestamp = timestamp.toLocaleTimeString();

    // Set the popup message including the timestamp
    popupMessage.innerHTML = `An agent just finished a quiz at ${formattedTimestamp}`;
    popupMessage.style.display = 'block';

    // Hide the popup after 5 seconds (adjust as needed)
    setTimeout(function () {
        popupMessage.style.display = 'none';
    }, 5000); // 5 seconds in milliseconds
}
