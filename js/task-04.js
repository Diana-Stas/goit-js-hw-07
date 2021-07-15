// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const ref = {
  btnDecrementValue: document.querySelector('[data-action="decrement"]'),
  btnIncrementValue: document.querySelector('[data-action="increment"]'),
  valueEl: document.querySelector('#value'),
};

let counterValue = 0;

ref.btnIncrementValue.addEventListener('click', increment);
ref.btnDecrementValue.addEventListener('click', decrement);

function increment() {
  counterValue += 1;
  renewalValue();
}

function decrement() {
  counterValue -= 1;
  renewalValue();
}

function renewalValue() {
  ref.valueEl.textContent = counterValue;
}

// Пример Репеты 

// const counter = {
//     value: 0,
//     increment() {
//         console.log('increment -> this', this);
//         this.value += 1;
//     },
//     decrement() {
//         console.log('decrement -> this', this);
//         this.value -= 1;
//     },
// };

// const decrementBtn = document.querySelector('.js-decrement');
// const incrementBtn = document.querySelector('.js-increment');
// const valueEl = document.querySelector('.js-value');

// decrementBtn.addEventListener('click', function () {
//     console.log('Кликнули на декремент');

//     counter.decrement();
//     console.log(counter);
//     valueEl.textContent = counter.value;
// });

// incrementBtn.addEventListener('click', function () {
//     console.log('Кликнули на инкремент');

//     counter.increment();
//     console.log(counter);
//     valueEl.textContent = counter.value;
// });
