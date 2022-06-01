import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

const refs =  {
    input: document.querySelector("input#datetime-picker"),
    startBtn: document.querySelector("button[data-start]"),
};

flatpickr("input#datetime-picker", {enableTime: true,
    dateFormat: "Y-m-d H:i",});


    // refs.startBtn.addEventListener('click', startBtnHandler);
    refs.input.addEventListener('input', inputHandler)

function inputHandler(e) {

        const inputValue = e.target.value;
  
    if(inputValue) {
        console.log(inputValue);
        const currentTime = new Date();
        console.log(currentTime);
        const time = new Date(inputValue);
        console.log(time.getTime());
        console.log(time);
    }
};