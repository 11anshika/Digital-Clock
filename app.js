window.onload = () => {
    function buildClock() {
        const date = new Date();

        let hours = date.getHours(); // 0 - 23
        let minutes = date.getMinutes(); // 0 - 59
        let seconds = date.getSeconds(); // 0 - 59
        let day = date.toLocaleString('en-us', { weekday: 'long' }); // Full name of the day

        // Add leading zeros if necessary
        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        // Display day, date, and time
        document.querySelector('#clock-day').innerText = day;
        document.querySelector('#clock-date').innerText = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
        document.querySelector('#clock-hours').innerText = hours;
        document.querySelector('#clock-minutes').innerText = minutes;
        document.querySelector('#clock-seconds').innerText = seconds;

        // Update every second
        setTimeout(buildClock, 1000);
    }
    buildClock();

    const goodMessages = [
        "Have a great day!",
        "Keep up the good work!",
        "You're doing awesome!",
        "Stay positive!",
        "Keep smiling!"
    ];

    function displayGoodMessage() {
        const messageIndex = Math.floor(Math.random() * goodMessages.length);
        const goodMessage = goodMessages[messageIndex];
        const goodMessageElement = document.getElementById('good-message');
        goodMessageElement.innerText = goodMessage;
        goodMessageElement.style.display = 'block'; // Show message
        setTimeout(() => {
            goodMessageElement.style.display = 'none'; // Hide message after 5 seconds
        }, 5000);
    }

    displayGoodMessage(); // Initial message display

    setInterval(displayGoodMessage, 60000); // Update message every minute
}
