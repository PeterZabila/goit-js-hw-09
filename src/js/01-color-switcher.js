const refs = {
    start: document.querySelector('button[data-start]'),
    stop: document.querySelector('button[data-stop]'),
    body: document.querySelector('body'),
};

let randomId = null;

refs.start.addEventListener('click', changeTheme);
refs.stop.addEventListener('click', onStopHandle);


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

function changeTheme() {

    randomId = setInterval(() => { refs.body.style.backgroundColor = getRandomHexColor() }, 1000);
    refs.start.disabled = true;
};

function onStopHandle() {
    clearInterval(randomId);
    refs.start.disabled = false;
};