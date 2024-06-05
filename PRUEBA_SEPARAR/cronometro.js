function updateTimerDisplay(seconds) {
    if (seconds < 0){
        document.getElementById('timer').textContent = '00:00';
    }
    else{
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        document.getElementById('timer').textContent = `0${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    }
}

// Resetea el contador
function ResetTime() {
    const timeLimit = getTimeLimit();
    secondsLeft = timeLimit;
    updateTimerDisplay(secondsLeft);
    stopTime = false;
}

export function StopTime(){
    stopTime = true
}

// Inicia el contador
function StartTime(){
    let timer = setInterval(() => {
        secondsLeft--;
        updateTimerDisplay(secondsLeft);
        if (secondsLeft < 0) {
            clearInterval(timer);
            lose();
            MostrarPantalla('win-lose-screen');
        }
        else if (stopTime){
            clearInterval(timer);
            stopTime = false;
        }
    }, 1000);
}

// Animacion de -10 seg
function minusTemp() {
    const restaTiempo = document.getElementById('restaTiempo');
    const RestaTiempo = restaTiempo.cloneNode(true);
    const timer = document.getElementById('timer-buttons');
    timer.appendChild(RestaTiempo)
    RestaTiempo.style.display = 'block';
    setTimeout(() => {
        RestaTiempo.style.display = 'none';
        timer.removeChild(RestaTiempo);
    }, 1000); // Oculta el texto después de 2 segundos
}