"use strict";
let myTime;

function startTimer(){
    if(typeof(myTime) == "undefined"){
        myTime = new Worker("timer.js");
    }
    myTime.onmessage = function(event){
        document.getElementById("time").innerHTML = event.data;
    }
}

function stopTimer(){
    myTime.terminate();
    myTime = undefined;
    document.getElementById("time").innerHTML = "00 : 00 : 00";
}