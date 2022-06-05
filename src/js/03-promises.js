import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  submit: document.querySelector('.form'),
  inputDelay: document.querySelector('input[name="delay"]'),
  inputAmount: document.querySelector('input[name="amount"]'),
  inputStep: document.querySelector('input[name="step"]'),
};

refs.submit.addEventListener('submit', onSubmit)

function onSubmit(e) {
  e.preventDefault();
  
  const delay = Number(refs.inputDelay.value);
  const amount = Number(refs.inputAmount.value);
  const step = Number(refs.inputStep.value);
  console.log(delay, amount, step);

  for(let position = 0; position < amount; position += 1) {

   
    createPromise(position, delay).then(({ position, delay }) => {
        // console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        // console.log(`❌ Rejected promise ${position} in ${delay}ms`);
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
      const shouldResolve = Math.random() > 0.3;
      const step = Number(refs.inputStep.value);
      const stepDelay = position * step + delay;
    
    setTimeout(() => {
      if (shouldResolve) {      
        resolve({position, delay: stepDelay});
      } else {
        reject({position, delay: stepDelay});
      }
     
    }, stepDelay)
  });
};













