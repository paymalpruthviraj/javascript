//addition
const submitButton = document.querySelector('#addition');
const fieldOne = document.querySelector('#field-one');
const fieldTwo = document.querySelector('#field-two');

const resultValue = document.querySelector('#resultValue');

submitButton.addEventListener('click', () => {
  
    const valueOne = +fieldOne.value;
    const valueTwo = +fieldTwo.value;
    const result = valueOne + valueTwo;
    console.log(valueOne + valueTwo);
     resultValue.innerHTML = result;
} );
//substraction
const submitButton2 = document.querySelector('#substraction');
const fieldOne2 = document.querySelector('#field-one');
const fieldTwo2 = document.querySelector('#field-two');

const resultValue2 = document.querySelector('#resultValue');

submitButton2.addEventListener('click', () => {
    const one = +fieldOne.value;
    const two = +fieldTwo.value;
    const result = one - two;
    console.log(one - two);
    resultValue2.innerHTML = result;
});
//multplication
const submitButton3 = document.querySelector('#multiplaction');
const fieldOne3 = document.querySelector('#field-one');
const fieldTwo3 = document.querySelector('#field-two');

const resultValue3 = document.querySelector('#resultValue');

submitButton3.addEventListener('click', () => {
    const one = +fieldOne.value;
    const two = +fieldTwo.value;
    const result = one * two;
    console.log(one * two);
    resultValue3.innerHTML = result;
});
//division

const submitButton4 = document.querySelector('#division');
const fieldOne4 = document.querySelector('#field-one');
const fieldTwo4 = document.querySelector('#field-two');

const resultValue4 = document.querySelector('#resultValue');

submitButton4.addEventListener('click', () => {
    const one = +fieldOne.value;
    const two = +fieldTwo.value;
    const result = one / two;
    console.log(one / two);
    resultValue4.innerHTML = result;
});
