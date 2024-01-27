// Variables to keep track of timers and durations
var startTimer = null,           
    stopTimer = null, 
    durationTimer = 0,            // represents the current time in milliseconds(ms)
    interval = null;

// Start timer function
function start() {
    // Check if the timer is not already running
    if (startTimer === null) {
        // Record the start time when the start button is pressed
        startTimer = new Date();
    } else {
        // If the timer is already running, clear the existing interval
        clearInterval(interval);
    };


/* 

    // If there was a paused duration, add it to the total stopped duration
    if (stopTimer !== null) {
        durationTimer += (new Date() - stopTimer);
    };

    // Display the stopped duration in the console
    if (durationTimer < 1000){
        console.log(durationTimer +' ms');
    };    

    // Display the stopped duration in seconds if it's greater than 1000 milliseconds
    if (durationTimer > 1000){
        console.log(durationTimer / 1000 +' seconds');
    };

*/


    // Start the timer interval to update the clock every 10 milliseconds
    interval = setInterval(stopWatch, 10);

    // Return the total stopped duration
    return durationTimer;  
}

// Stop timer function
function stop() {
    // Record the stop time when the stop button is pressed
    stopTimer = new Date();

    // Clear the timer interval
    clearInterval(interval);
}
 
// Reset Button
function reset() {
    // Clear the timer interval
    clearInterval(interval);

    // Reset all variables and durations
    durationTimer = 0;
    startTimer = null;
    stopTimer = null;

    // Display "00:00:00.000" in the HTML document
    document.getElementById("display-area").innerHTML = "00:00:00.000";
}

// Function to update the clock display
function stopWatch(){
    // Get the current time
    var currentTime = new Date(), 

        // Calculate the time elapsed since the start, minus the paused duration
        passedTime = new Date(currentTime - startTimer - durationTimer), 

        // Extract hours, minutes, seconds, and milliseconds from the time elapsed
        hour = passedTime.getUTCHours(), 
        min = passedTime.getUTCMinutes(), 
        sec = passedTime.getUTCSeconds(), 
        ms = passedTime.getUTCMilliseconds();

    // Display the formatted time in the HTML document
    document.getElementById("display-area").innerHTML = 
        // Format hours, minutes, seconds, and milliseconds
        (hour > 9 ? hour : "0" + hour) + ":" + 
        (min > 9 ? min : "0" + min) + ":" + 
        (sec > 9 ? sec : "0" + sec) + "." + 
        // Format milliseconds with leading zeros
        (ms > 99 ? ms : ms > 9 ? "0" + ms : "00" + ms);
};
