// Countdown Timer
const countdownElement = document.getElementById('countdown');

function updateCountdown() {
    const valentinesDay = new Date('2025-02-14T00:00:00');
    const currentTime = new Date();
    const timeDiff = valentinesDay - currentTime;
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    countdownElement.textContent = `${days} days remaining until Valentine's Day!`;
}

setInterval(updateCountdown, 1000); // Update every second
updateCountdown(); // Initial call to set the countdown

// You can also use the same script for other interactive features as needed.
