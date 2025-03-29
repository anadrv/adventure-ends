document.getElementById('set-timer').addEventListener('click', function() {

    document.querySelector('.timer-form').style.display = 'block';
    document.querySelector('.set-timer').style.display = 'none';
    document.querySelector('.name-timer').style.display = 'none';
});

document.getElementById('submit-timer').addEventListener('click', function() {

    const timerName = document.getElementById('timer-name').value;
    const timerDate = document.getElementById('timer-date').value;


    if (timerName && timerDate) {

        const targetDate = new Date(timerDate).getTime();
        document.querySelector('.name-timer').innerHTML = timerName;
        document.querySelector('.timer-form').style.display = 'none';
        document.querySelector('.set-timer').style.display = 'block';
        
        startTimer(targetDate);

        document.querySelector('.name-timer').style.display = 'block';

    } else {
        alert('Por favor, preencha todos os campos.');
    }
});

function startTimer(targetDate) {
    function timer() {
        const currentDate = new Date().getTime();
        const distance = targetDate - currentDate;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((distance / (1000 * 60)) % 60);
        const seconds = Math.floor((distance / 1000) % 60);

        document.getElementById('days').innerHTML = days < 10 ? `0${days}:` : `${days}:`;
        document.getElementById('hours').innerHTML = hours < 10 ? `0${hours}:` : `${hours}:`;
        document.getElementById('minutes').innerHTML = minutes < 10 ? `0${minutes}:` : `${minutes}:`;
        document.getElementById('seconds').innerHTML = seconds < 10 ? `0${seconds}` : `${seconds}`;

        if (distance < 0) {
            document.getElementById('days').innerHTML = "00:";
            document.getElementById('hours').innerHTML = "00:";
            document.getElementById('minutes').innerHTML = "00:";
            document.getElementById('seconds').innerHTML = "00";
        }
    }

    setInterval(timer, 1000); 
}
