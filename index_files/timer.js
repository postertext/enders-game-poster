function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        
        for (i = 0; i < display.length; ++i) {
            display[i].textContent = minutes + ":" + seconds;
        }

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var fiveMinutes = 60 * 5;
    var display = document.querySelectorAll('.time'), i;
    
    startTimer(fiveMinutes, display);
};