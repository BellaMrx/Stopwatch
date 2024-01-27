var startTimer = null,           
    stopTimer = null, 
    stoppedDuration = 0,            // represents the current time in milliseconds(ms)
    started = null;

// Start timer function - starts the stopwatch with start button
function start() {
    if (startTimer === null) {
        startTimer = new Date();
    }else {
        clearInterval(started);
    };

    
    if (stopTimer !== null) {
        stoppedDuration += (new Date() - stopTimer);
    };
    if (stoppedDuration < 1000){
        console.log(stoppedDuration +' ms');
    };    
    if (stoppedDuration > 1000){
        console.log(stoppedDuration / 1000 +' seconds');
    };
    started = setInterval(clockRunning, 10);
        
    return stoppedDuration;  
}

// Stop timer function - stops the watch with stop button
function stop() {
    stopTimer = new Date();
    clearInterval(started);
}
 
// Reset Button - handles button click for the “Reset” button
function reset() {
    clearInterval(started);
    stoppedDuration = 0;
    startTimer = null;
    stopTimer = null;
    // output in HTML document
    document.getElementById("display-area").innerHTML = "00:00:00.000";
}

function clockRunning(){
    var currentTime = new Date(), 
        timeElapsed = new Date(currentTime - startTimer - stoppedDuration), 
        hour = timeElapsed.getUTCHours(), 
        min = timeElapsed.getUTCMinutes(), 
        sec = timeElapsed.getUTCSeconds(), 
        ms = timeElapsed.getUTCMilliseconds();

    // output in HTML document
    document.getElementById("display-area").innerHTML = 
        // if the value of the countdown time is greater than nine, a 0 is added
        (hour > 9 ? hour : "0" + hour) + ":" + 
        (min > 9 ? min : "0" + min) + ":" + 
        (sec > 9 ? sec : "0" + sec) + "." + 
        // milliseconds consist of four numbers, i.e. there are three 0s
        (ms > 99 ? ms : ms > 9 ? "0" + ms : "00" + ms);
};