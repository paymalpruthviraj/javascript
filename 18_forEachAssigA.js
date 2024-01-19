console.log(`==========================step 1 ===========================`);
const arrayNumbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];
//Log the array element with it's index using forEach()with arrow function
arrayNumbers.forEach((element, index) => {
  console.log(`The element is: ${element} and Its index is: ${index}`);
});
console.log(`==========================step 2 ===========================`);
//find the positive numbers and log on console
arrayNumbers.forEach((element) => {
  if (element > 0) {
    console.log(`The positive number is : ${element}`);
  }
});
console.log(`==========================step 3 ===========================`);
//find the negative numbers, add into new array and and log new array on consolw using arrow funciton
let newarray = [];
arrayNumbers.forEach((element) => {
  if (element < 0) {
    newarray.push(element);
  }
});
console.log(`The negative number is: ${newarray}`);
console.log(`==========================step 4 ===========================`);
//find the even numbers and log on console using forEach() with arrow function
arrayNumbers.forEach((element) => {
  if (element % 2 == 0) {
    console.log("The Even Number is :", element);
  }
});
console.log(`==========================step 5 ===========================`);
//Find the sum of all element from arrayNumbers and log sum value on console
let sum = 0;
arrayNumbers.forEach((element) => {
  sum = element + sum;
});
console.log("The sum of element is : ", sum);
console.log(`==========================step 6 ===========================`);
//log the only even indexed array values on console.forEach()with arrow function prefered
arrayNumbers.forEach((element, index) => {
  if (index % 2 === 0) {
    console.log(`Element at even position ${index} is: ${element}`);
  }
});
