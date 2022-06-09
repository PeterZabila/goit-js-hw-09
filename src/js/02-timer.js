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

refs.startBtn.disabled = true;

const options = {
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
};


flatpickr("input#datetime-picker", options);

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

   const timer = setInterval(() => {
        const inputData = new Date(refs.input.value);
        const currentTime = Date.now();
            const timeLeft = ((inputData).getTime()) - currentTime;

        const time = convertMs(timeLeft);
     
        const { days, hours, minutes, seconds } = time;
        refs.spanDay.textContent = addLeadingZero(days);
        refs.spanHour.textContent = addLeadingZero(hours);
        refs.spanMinute.textContent = addLeadingZero(minutes);
        refs.spanSecond.textContent = addLeadingZero(seconds);

        if(Date.now() >= new Date(refs.input.value)) {
            clearInterval(timer);
            refs.startBtn.disabled = false;
            refs.spanDay.textContent = '00';
             refs.spanHour.textContent = '00';
             refs.spanMinute.textContent = '00';
             refs.spanSecond.textContent = '00';
         }

    }, 1000);  
    refs.startBtn.disabled = true;    

    
};

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}

refs.startBtn.addEventListener('click', renderTime);
