window.addEventListener("load", main);

function main() {
    getId();
    setInterval(getId, 1000);
}

function getId() {
    let time = document.getElementById("time");
    let year = document.getElementById("year");
    let month = document.getElementById("month");
    let day = document.getElementById("day");

    let date = new Date();
    
    updateTime(time, date);
    updateDay(day, date);
    updateMonth(month, date);
    updateYear(year, date);
}


function updateTime(time, date){
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    if (hours<10) {
        hours = "0" + hours;
    }
    if (seconds<10) {
        seconds = "0" + seconds;
    }
    if (minutes<10){
        minutes = "0" + minutes;
    }

    time.innerHTML = hours + ":" + minutes + ":" + seconds
}

function updateDay(day, date){
    day.innerHTML = date.getDate();
}
function updateYear(year, date){
    year.innerHTML = date.getFullYear();
}
function updateMonth(month, date){
    month.innerHTML = date.getMonth();
    let currentMonth = date.getMonth()

    switch(currentMonth) {
        case 0:
            month.innerHTML = "Januari"
            break;
        case 1:
            month.innerHTML = "Februari"
            break;
        case 2:
            month.innerHTML = "Mars"
            break;
        case 3:
            month.innerHTML = "April"
            break;
        case 4:
            month.innerHTML = "Maj"
            break;
        case 5:
            month.innerHTML = "Juni"
            break;
        case 6:
            month.innerHTML = "Juli"
            break;
        case 7:
            month.innerHTML = "Augusti"
            break;
        case 8:
            month.innerHTML = "September"
            break;
        case 9:
            month.innerHTML = "Oktober"
            break;
        case 10:
            month.innerHTML = "November"
            break;
        case 11:
            month.innerHTML = "December"
            break;

    }
}