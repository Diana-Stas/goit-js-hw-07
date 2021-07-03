// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input),
//     подставляет его текущее значение в span#name - output.
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const refs = {
  input: document.querySelector('#name-input'),
  textSpan: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
  if (event.currentTarget.value === '') {
    refs.textSpan.textContent = 'незнакомец';
  } else refs.textSpan.textContent = event.currentTarget.value;
}

// 2 вариант 
// const refs = {
//   input: document.querySelector('#name-input'),
//   output: document.querySelector('#name-output'),
// };
// const onInput = () => {
//   refs.output.textContent = refs.input.value ? refs.input.value : 'незнакомец';
// };
// refs.input.addEventListener('input', onInput);