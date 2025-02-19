// Stopwatch JavaScript

window.onload = function() {
let hr = '00';
let min = '00';
let sec = '00';

let appendHr = document.getElementById("hr");
let appendMin = document.getElementById("min");
let appendSec = document.getElementById("sec");

let buttonStart = document.getElementById("start");
let buttonPause = document.getElementById("pause");
let buttonReset = document.getElementById("reset");

let Interval;

buttonStart.onclick = function (){
    Interval = setInterval(startTimer, 1000);
}

buttonPause.onclick = function (){
    clearInterval(Interval);
}

buttonReset.onclick = function (){
    clearInterval(Interval);
    sec = "00";
    min = "00";
    hr = "00";
    appendHr.innerHTML = hr;
    appendMin.innerHTML = min;
    appendSec.innerHTML = sec;
}


function startTimer(){
    sec++;

    // First Condition
    if(sec <= 9){
        appendSec.innerHTML = "0" + sec;
        console.log(sec);
    }

    // Second Condition 
    if(sec > 9){
        appendSec.innerHTML = sec;
        console.log(sec);
    }

    // Third Condition
    if(sec > 59){
        console.log(sec);
        min++;
        appendMin.innerHTML = "0" + min;
        sec = 0;
        appendSec.innerHTML = "0" + 0;
    }

    // Fourth Condition
    if(min > 9){
        appendMin.innerHTML = min;
        console.log(min);
    }

    // Fifth Condition
    if(min > 59){
        console.log(sec);
        hr++;
        appendHr.innerHTML = "0" + hr;
        min = 0;
        appendMin.innerHTML = "0" + 0;
    }

    // Sixth Condition
    if(hr > 9){
        appendHr.innerHTML = hr;
        console.log(hr);
    }

    // Seventh Condition
    if(hr > 24){
        console.log(hr);
        hr++;
        appendHr.innerHTML = "0" + hr;
        hr = 0;
        appendHr.innerHTML = "0" + 0;
    }
}

}