import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

let delay;
let state;
const formRef = document.querySelector('.form');

formRef.addEventListener('submit', onSubmit);

function onSubmit(ev) {
  ev.preventDefault();
  delay = +ev.target.elements.delay.value;
  state = ev.target.elements.state.value;

  createPromise(delay)
    .then(({ delay }) => {
      iziToast.success({
        message: `✅ Fulfilled promise in ${delay} ms`,
        position: 'center',
      });
    })
    .catch(({ delay }) => {
      iziToast.error({
        message: `❌ Rejected promise in ${delay} ms`,
        position: 'center',
      });
    });
  ev.target.reset();
}

function createPromise(delay) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        res({ delay });
      } else {
        rej({ delay });
      }
    }, delay);
  });
}
