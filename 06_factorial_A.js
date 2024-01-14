let factorial = function (num) {
  if (num === 0 || num === 1) {
    return 1;
  }
  if (num < 0) {
    return `Invalid Input: ${num}`;
  }
  if (num === null || num === undefined) {
    return ` Invalid Input:${num}`;
  }

  let result = 1;

  for (let index = 1; index <= num; index++) {
    result = result * index;
  }

  return result;
};

let result1 = factorial(5);
console.log(`The factorial of Number  5 is: ${result1}`);
let result2 = factorial(3);
console.log(`The factorial of Number  3 is: ${result2}`);
let result3 = factorial(null);
console.log(`The factorial of Num  null is: ${result3}`);
let result4 = factorial(8);
console.log(`The factorial of Number  8 is: ${result4}`);
let result5 = factorial(undefined);
console.log(`The factorial of undefined is: ${result5}`);
let result6 = factorial(9);
console.log(`The factorial of Number  9 is: ${result6}`);
let result7 = factorial(0);
console.log(`The factorial of Number  0 is: ${result7}`);
