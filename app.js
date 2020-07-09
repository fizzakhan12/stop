

var msec=0
var sec=0
var min=0
var hour=0
var msecheading=document.getElementById("msec")
var secheading=document.getElementById("sec")
var minheading=document.getElementById("min")
var hourheading=document.getElementById("hour")
var interval
function timer(){
    msec++;
    msecheading.innerHTML = msec
    if(msec >= 100){
        sec++;
        msec=0
        secheading.innerHTML= sec
    }
    else if(sec >=60){
        min++;
        sec=0
        minheading.innerHTML= min
    }
  
}



function start(){
    interval = setInterval(timer,10)
    $("#btnTest").attr("disabled", true);
}

function stop(){
    clearInterval(interval)
    $("#btnTest").attr("disabled", false);
}

function reset(){
    min=0
    sec=0
    msec=0
    minheading.innerHTML=min
    secheading.innerHTML=sec
    msecheading.innerHTML= msec
    $("#btnTest").attr("disabled", false);
 
}