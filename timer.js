let seconds = 0;
let mins = 0;
let hours = 0;

let addLeadingZero = (val) => {
    if(val < 10){
        val = val.toString().padStart(2, "0");
    }
    return val;
}

function timer(){
    seconds++;

    if(seconds == 60){
        seconds = 0;
        mins++;        
    }else if(mins == 60){
        mins = 0;
        hours++;
    }

    let time_ouput = addLeadingZero(hours) + " : " + addLeadingZero(mins) + " : " + addLeadingZero(seconds)
    postMessage(time_ouput);
    setTimeout(timer, 1000);
}

timer();