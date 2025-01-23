import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

let userSelectedDate;
let startTime;
let timerID;

const refs = {
  input: document.querySelector('#datetime-picker'),
  start: document.querySelector('button'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

refs.start.addEventListener('click', onStart);
refs.start.setAttribute('disabled', true);

function onStart() {
  refs.input.setAttribute('disabled', true);
  timerID = setInterval(() => {
    const startTime = Date.now();
    const TIME = userSelectedDate - startTime;
    const timerTime = convertMs(TIME);

    refs.days.textContent = padTime(timerTime.days);
    refs.hours.textContent = padTime(timerTime.hours);
    refs.minutes.textContent = padTime(timerTime.minutes);
    refs.seconds.textContent = padTime(timerTime.seconds);

    if (TIME < 1000) {
      clearInterval(timerID);
      refs.input.removeAttribute('disabled');
    }
  }, 1000);
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    startTime = Date.now();
    userSelectedDate = selectedDates[0];

    if (startTime > userSelectedDate) {
      refs.start.setAttribute('disabled', true);
      iziToast.error({
        title: 'Error!',
        message: 'Please choose a date in the future',
        position: 'center',
      });
    }

    if (startTime < userSelectedDate) {
      refs.start.removeAttribute('disabled');
    }
  },
};

flatpickr(refs.input, options);

function convertMs(ms) {
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

function padTime(value) {
  return String(value).padStart(2, '0');
}
