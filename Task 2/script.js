const daysElement = document.querySelector('.days');
const hoursElement = document.querySelector('.hours');
const minutesElement = document.querySelector('.minutes');
const secondsElement = document.querySelector('.seconds');
const startButton = document.getElementById('start-timer');

let targetDate = new Date('2024-01-01T00:00:00'); // Set your target date here

function timerCountdown() {
    const now = new Date();
    const remainingTime = targetDate - now;

    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    daysElement.textContent = days.toString().padStart(2, '0');
    hoursElement.textContent = hours.toString().padStart(2, '0');
    minutesElement.textContent = minutes.toString().padStart(2, '0');
    secondsElement.textContent = seconds.toString().padStart(2, '0');

    if (remainingTime <= 0) {
        clearInterval(countdownInterval);
        startButton.textContent = 'Restart Timer';
    }
}

let countdownInterval = setInterval(timerCountdown, 1000);

startButton.addEventListener('click', function() {
    if (startButton.textContent === 'Start Timer') {
        targetDate = new Date('2024-01-01T00:00:00'); // Set your target date here
        countdownInterval = setInterval(timerCountdown, 1000);
        startButton.textContent = 'Stop Timer';
    } else {
        clearInterval(countdownInterval);
        startButton.textContent = 'Start Timer';
    }
});