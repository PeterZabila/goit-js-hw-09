const refs = {
  submit: document.querySelector('.form'),
};

refs.submit.addEventListener('submit', onSubmit)


// function createPromise(position, delay) {
  
//   return new Promise((resolve, reject) => {
//     const shouldResolve = Math.random() > 0.3;
    
//     setTimeout(() => {
//       if (shouldResolve) {
//         resolve({position, delay});
//       } else {
//         reject({position, delay});
//       }
//     }, delay)
//   });
// };

// createPromise(2, 1500)
// .then(({ position, delay }) => {
//   console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
// })
// .catch(({ position, delay }) => {
//   console.log(`❌ Rejected promise ${position} in ${delay}ms`);
// });

let s = Number(step.value);

function onSubmit(e) {
  e.preventDefault;
  setTimeout(() => {
    for(let i = 0; i < amount.value; i += 1) {
    position = i;
    createPromise(position, s)
    .then(({position, delay}) => {
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    });
    const s = +delay.value + +step.value* i;
  }
}, delay.value);
  
};

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if(shouldResolve) {
        resolve({position, delay});
      } else {
        reject({position, delay})
      }
    }, delay)
  })
  return promise;
}