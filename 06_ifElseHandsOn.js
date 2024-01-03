console.log("============ step 1================");
var isEvenOrOdd = function (num) {
  var result = "";
  if (num % 2 == 0) {
    return "Even";
  } else {
    return "odd";
  }
};
var result = isEvenOrOdd(45);
console.log(`The Number 45 is ${result}`);
var result = isEvenOrOdd(70);
console.log(`The Number 70 is ${result}`);
var result = isEvenOrOdd(67);
console.log(`The Number 67 is ${result}`);
var result = isEvenOrOdd(98);
console.log(`The Number 98 is ${result}`);
console.log("============ step 2================");
var isEligibleOrNOt = function (age) {
  // var result = "";
  if (age >= 18) {
    console.log(`Age ${age} Eligible for Vote`);
  } else {
    console.log(`Age ${age} not Eligible for Vote`);
  }
};
isEligibleOrNOt(18);
isEligibleOrNOt(20);
isEligibleOrNOt(17);
isEligibleOrNOt(40);
console.log("============ step 3================");
var display = function (string) {
  var count = string.length;
  // console.log(count);
  if (count >= 10) {
    console.log("Given String contains more than 10 charaters");
  } else {
    console.log("Given String does not contain more than 10 charaters");
  }
};

display("JavaScript - ES6");
console.log("============ step 4================");
var program = function (string) {
  if (string.startsWith("Java")) {
    console.log(`The word ${string} Starts with "Java"`);
  } else {
    console.log(`The word does not ${string} Starts with "Java"`);
  }
};
program("JavaScript Language");
