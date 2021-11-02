function digitalClock() {
    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let milliSeconds = date.getMilliseconds();
    let clockFormat = 'AM';
/*
    if (hours == 0) {
        hours = 12;
    } else if (hours > 12) {
        hours = hours - 12;
        clockFormat = 'PM';
    }*/
    //hours = hours < 10 ? '0' + hours : hours;               // write a zero in front if the hour is not 2 digits, that is < 10
    minutes = minutes < 10 ? '0' + minutes : minutes;       // same thing works for minutes
    seconds = seconds < 10 ? '0' + seconds : seconds;       // and seconds*/
    milliSeconds = milliSeconds < 10 ? '00' + milliSeconds : milliSeconds;
    milliSeconds = milliSeconds < 100 ? '0' + milliSeconds : milliSeconds;

    let finalTime = `${hours}:${minutes}:${seconds}:${milliSeconds}`;
    document.querySelector('#time').innerText = finalTime;
    //document.querySelector('small').innerText = clockFormat;
}

setInterval(digitalClock, 100);
