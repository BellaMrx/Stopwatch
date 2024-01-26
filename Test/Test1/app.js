var time = 0;               // represents the current time in milliseconds
var interval;               // stores the interval ID returned by setInterval(), enabling the script to manage the timer interval
var display = document.getElementById("display");       // holds a reference to the HTML element displaying the stopwatch time
var altBtns = document.getElementById("alt-btns");      // holds a reference to the HTML element for starting/stopping the stopwatch
var resetBtn = document.getElementById("reset");        // holds a reference to the HTML element for resetting the stopwatch

// Start timer function - starts the stopwatch with start button 
function startTimer() {
    // changes the button text to “Stop”
    altBtns.innerHTML = "Stop"
    // clears any previous interval, if present
    if(interval){
      clearInterval(interval);
    }
    // sets up an interval to update the time variable every second and updates the display element with the formatted time (HH:MM:SS)
    interval = setInterval(() => { 
      time += 1
      display.innerHTML = 
        Math.floor(time / 3600).toString().padStart(2, "0") + ":" + Math.floor((time % 3600) / 60).toString().padStart(2, "0") + ":" + Math.floor((time % 60)).toString().padStart(2, "0") + ":" + (time).toString().padStart(3, "0")
    });
}

// Stop timer function - stops the watch with stop button 
function stopTimer() {
    // Changes the button text back to “Start”
    altBtns.innerHTML = "Start"
    // clears the interval, pausing the timer
    clearInterval(interval);
    interval = null;
}

// Start/Stop button - handles button clicks for the “Start”/”Stop” button (altBtns)
altBtns.onclick = function(){
    // if the timer is running, it stops the timer; otherwise, it starts the timer
    if(interval){
        stopTimer();
    } else {
        startTimer();
    }
}

// Reset Button - handles button clicks for the “Reset” button (resetBtn)
resetBtn.onclick = function(){
    // changes the button text back to “Start”
    altBtns.innerHTML = "Start"
    // clears any previous interval, if present
    if(interval){
        clearInterval(interval);
    }
    // setting the interval to null to pause the timer
    interval = null;
    // resets the timer by setting time to 0 and updates the display element to show "00:00:00"
    time = 0;
    display.innerHTML = "00:00:00";
    }