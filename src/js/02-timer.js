import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const refs =  {
    input: document.querySelector("input#datetime-picker"),
    startBtn: document.querySelector("button[data-start]"),
    spanDay: document.querySelector('span[data-days]'),
    spanHour: document.querySelector('span[data-hours]'),
    spanMinute: document.querySelector('span[data-minutes]'),
    spanSecond: document.querySelector('span[data-seconds]'),
};

let targetDate = null;

flatpickr("input#datetime-picker", {
        enableTime: true,
        time_24hr: true,
        defaultDate: new Date(),
        minuteIncrement: 1,
        onClose(selectedDates) {
            if(selectedDates && selectedDates[0] > new Date()) {
                refs.startBtn.disabled = false;
                targetDate = (selectedDates[0]);
                // console.log((targetDate).getTime());
            } else {
                alert("Please choose a date in the future");
            }
        },
    }
  );

const inputData = new Date(refs.input.value);

//   console.log((inputData).getTime());

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }

function renderTime() {
    const currentTime = new Date();
    const currentTimetoMil = currentTime.getTime();
    const timeLeft = currentTimetoMil - ((inputData).getTime());
    console.log(timeLeft);

    const time = convertMs(timeLeft);
    // console.log(time);
    const { days, hours, minutes, seconds } = time;
       
        refs.spanDay.textContent = days;
        refs.spanHour.textContent = hours;
        refs.spanMinute.textContent = minutes;
        refs.spanSecond.textContent = seconds;
};

refs.startBtn.addEventListener('click', renderTime);

  
//   console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
//   console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
//   console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}


//     refs.startBtn.addEventListener('click', inputHandler);
//     // refs.input.addEventListener('input', inputHandler)

// function inputHandler() {
//         const inputValue = refs.input.value;
  
//     if(inputValue) {

//         targetDate = inputValue;
//         toMilisec = targetDate.getTime();
//         console.log(toMilisec);
//         // const currentTime = new Date();
//         //     // console.log(currentTime);
//         // const time = new Date(inputValue);
//             // console.log(time.getTime());
//             // console.log(time);
//     }
// };