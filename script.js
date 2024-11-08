let hourDiv = document.querySelector(".hour");
let minuteDiv = document.querySelector(".minute");
let secondDiv = document.querySelector(".second");
let sessionDiv = document.querySelector(".session");

// we make a funciton which will be called on 1 sec as the 
// clock is being updated each second on the ui

function clockUpdate(){
    let currTime = new Date();
    let hour = currTime.getHours();
    let minute = currTime.getMinutes();
    let second = currTime.getSeconds();


    // managing the session
    
    let session = "AM";
    if(hour >= 12){
        session = "PM";
    }
    if(hour > 12){
        hour = hour - 12;
    }else if(hour === 0){
        hour = 12;
    }
        if(hour < 10){
        hour = "0" +hour;
    }
    if(minute < 10){
        minute = "0" +minute;
    }
    if(second < 10){
        second = "0" +second;
    }

    hourDiv.innerText = hour;
    minuteDiv.innerText = minute;
    secondDiv.innerText = second;
    sessionDiv.innerText = session;
}

//  we will use settimeout to call this funciton each second..
    setInterval(clockUpdate , 1000);
    clockUpdate();
