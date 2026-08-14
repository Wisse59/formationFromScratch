// Créer la logique de compte à rebours
/*
choice.value = 5 minutes;

choice.value * 60 = totalSeconds;

let minutes = Math.floor(totalSeconds / 60);
let seconds = totalSeconds % 60
*/
// Créer un événement à la validation du form pour lancer le compte à rebours

const form = document.getElementById("form");
const choice = document.getElementById("choice");
const start = document.getElementById("start");

function timer(minutes, seconds) {
    countdownDisplay.innerHTML = `<p>${("0" + minutes).slice(-2)} : ${("0" + seconds).slice(-2)}</p>`;
    if (seconds <= 0 && minutes > -1) {
        minutes -= 1;
        seconds = 59;
    } else if (seconds <= 0 && seconds <= 0) {
    } else {
        seconds -= 1;
    }
    return [minutes, seconds];
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let val = choice.value * 60;
    let minutes = Math.floor(val / 60);
    let seconds = val % 60;
    choice.value = "";


    const boucleSecondes = setInterval(() => {
        if ((minutes > -1) && (seconds > -1)) {
            [minutes, seconds] = timer(minutes, seconds);
        }
        else {
            clearInterval(boucleSecondes);
        }
    }, 1000);
});