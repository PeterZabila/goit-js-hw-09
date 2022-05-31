const refs = {
    start: document.querySelector('button[data-start]'),
    stop: document.querySelector('button[data-stop]'),
    body: document.querySelector('body'),
};


refs.start.addEventListener('click', changeTheme);


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

function changeTheme() {

    setInterval(() => { refs.body.style.backgroundColor = getRandomHexColor() }, 1000)  
};