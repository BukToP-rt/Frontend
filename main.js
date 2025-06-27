let timerId = null;
let isRunning = false;

function updateClock() {
    const hourArrow = document.querySelector('.hour');
    const minuteArrow = document.querySelector('.minute');
    const secondArrow = document.querySelector('.second');
    const deg = 6;

    const day = new Date();
    const hours = day.getHours() * 30;
    const minutes = day.getMinutes() * deg;
    const seconds = day.getSeconds() * deg;

    hourArrow.style.transform = `rotate(${hours + (minutes / 12)}deg)`;
    minuteArrow.style.transform = `rotate(${minutes}deg)`;
    secondArrow.style.transform = `rotate(${seconds}deg)`;
}

function startClock() {
    if (!isRunning) {
        isRunning = true;
        updateClock();
        timerId = setInterval(updateClock, 1000); 
    }
}

function stopClock() {
    if (isRunning) {
        isRunning = false;
        clearInterval(timerId);
    }
}

function toggleClock() {
    if (isRunning) {
        stopClock();
    } else {
        startClock();
    }
    updateButtonText();
}

function updateButtonText() {
    const button = document.querySelector('button');
    button.textContent = isRunning ? 'Пауза' : 'Старт';
}

startClock();