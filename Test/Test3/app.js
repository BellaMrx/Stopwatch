// value of h, min, s, ms is set to 0(null) so that the countdown starts at 0(null)
let [milliseconds,seconds,minutes,hours] = [0,0,0,0];
// holds a reference to the HTML element displaying the stopwatch time
let timerRef = document.querySelector('.timerDisplay');
let int = null;

// countdown starts as soon as the "start" button is pressed
document.getElementById('startTimer').addEventListener('click', ()=>{
    if(int!==null){
        clearInterval(int);
    }
    // the countdown increases every millisecond
    int = setInterval(displayTimer,10);
});

// countdown stops/pauses as soon as the "Pause" button is pressed
document.getElementById('pauseTimer').addEventListener('click', ()=>{
    clearInterval(int);
});

// countdown is reset to null as soon as the "Reset" button is pressed
document.getElementById('resetTimer').addEventListener('click', ()=>{
    clearInterval(int);
    [milliseconds,seconds,minutes,hours] = [0,0,0,0];
    timerRef.innerHTML = '00 : 00 : 00 : 00 ';
});

// function for the stopwatch features
function displayTimer(){
    milliseconds+=10;
    // if the value of the milliseconds is equal to 1000, the number of seconds increases by 1 (1000 milliseconds = 1 second)
    if(milliseconds == 1000){
        milliseconds = 0;
        seconds++;
        // if the seconds value is at 60, it is reset to null and the minute is increased by 1
        if(seconds == 60){
            seconds = 0;
            minutes++;
            // if the minute value is at 60, it is reset to zero and the hour is increased by 1
            if(minutes == 60){
                minutes = 0;
                hours++;
            }
        }
    }

// if the value of the countdown time is less than ten, a 0 is added
// if the values are hour, minute, second and millisecond, then this time is transmitted in h, m, s, ms
 let h = hours < 10 ? "0" + hours : hours;
 let m = minutes < 10 ? "0" + minutes : minutes;
 let s = seconds < 10 ? "0" + seconds : seconds;
 // milliseconds consist of four numbers, i.e. there are three 0s
 let ms = milliseconds.toFixed(2) < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;;

 // output in HTML document
 timerRef.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`;
}