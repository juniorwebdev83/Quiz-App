// Timer function
function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration; // Reset the timer or take any action when the timer reaches 0
        }
    }, 1000);
}

// Run the timer when the page loads
window.onload = function () {
    const fiveMinutes = 5 * 60; // 5 minutes in seconds
    const display = document.querySelector('#timer');
    startTimer(fiveMinutes, display);
};
