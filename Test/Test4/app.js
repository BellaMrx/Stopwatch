var timeBegan = null, 
    timeStopped = null, 
    stoppedDuration = 0, 
    started = null;

function start() {
    if (timeBegan === null) {
        timeBegan = new Date();
    }else {
        clearInterval(started);
    };

    
    if (timeStopped !== null) {
        stoppedDuration += (new Date() - timeStopped);
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

function stop() {
    timeStopped = new Date();
    clearInterval(started);
}
 
function reset() {
    clearInterval(started);
    stoppedDuration = 0;
    timeBegan = null;
    timeStopped = null;
    document.getElementById("display-area").innerHTML = "00:00:00.000";
}

function clockRunning(){
    var currentTime = new Date(), 
        timeElapsed = new Date(currentTime - timeBegan - stoppedDuration), 
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