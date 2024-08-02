let milisec = 00;
let sec = 00;
let min = 00;

const startTimer = () => {
    milisec++;
    if(milisec <= 9) { document.querySelector("#milisec").innerText="0"+milisec; }
    if(milisec > 9) { document.querySelector("#milisec").innerText=milisec; }
    if(milisec > 99)
    {
        sec++;
        milisec=00;
        document.querySelector("#milisec").innerText="00";
    }
    if(sec <= 9) { document.querySelector("#sec").innerText="0"+sec; }
    if(sec > 9) { document.querySelector("#sec").innerText=sec; }
    if(sec > 59)
    {
        min++;
        sec=00;
        document.querySelector("#sec").innerText="00";
    }
    if(min <= 9) { document.querySelector("#min").innerText="0"+min; }
    if(min > 9) { document.querySelector("#min").innerText=min; }
};

document.querySelector("#start").addEventListener("click",function () {
    timeid = setInterval(startTimer, 10);
});

document.querySelector("#stop").addEventListener("click",function () {
    clearInterval(timeid);
});

document.querySelector("#addlapse").addEventListener("click",function () {
    if(document.querySelector("#l1").innerText=="00:00:00")
    { document.querySelector("#l1").innerText=min+":"+sec+":"+milisec; }
    else if((document.querySelector("#l2").innerText=="00:00:00"))
    { document.querySelector("#l2").innerText=min+":"+sec+":"+milisec; }
    else if((document.querySelector("#l3").innerText=="00:00:00"))
    { document.querySelector("#l3").innerText=min+":"+sec+":"+milisec; }
    else
    {
        document.querySelector("#l1").innerText=min+":"+sec+":"+milisec;
        document.querySelector("#l2").innerText="00:00:00";
        document.querySelector("#l3").innerText="00:00:00";
    }
});

document.querySelector("#reset").addEventListener("click",function () {
    milisec = 00;
    sec = 00;
    min = 00;
    clearInterval(timeid);
    document.querySelector("#milisec").innerText="00";
    document.querySelector("#sec").innerText="00";
    document.querySelector("#min").innerText="00";
    document.querySelector("#l1").innerText="00:00:00";
    document.querySelector("#l2").innerText="00:00:00";
    document.querySelector("#l3").innerText="00:00:00";
});