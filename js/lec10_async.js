const btnStart = document.getElementById('start');
const btnStop = document.getElementById('stop');
const box = document.getElementById('box');

//store the intervalID;
let interval;

//handle clicks:
//start:
btnStart.addEventListener('click', () => {
    //store the intervalID;
    interval = setTimeout(() => {
        box.innerHTML = new Date();
    }, 1000);
});

//stop:
btnStop.addEventListener('click', () => {
    //stop interval (takes the id as a param)
    clearTimeout(interval);
});


