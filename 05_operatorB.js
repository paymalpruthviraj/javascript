function greaterNumber(num1, num2) {
    console.log("The Numbers are:", num1, num2);
  
    var result =
      num1 > num2
        ? "The greatest number is " + num1
        : "The greatest number is " + num2;
  
    console.log(result);
  }
  
  greaterNumber(10, -10);
  greaterNumber(800, 899);
  console.log("====================  Step 2 Even or Odd============");
  function isEvenOrOddNum(num1) {
    var result =
      num1 % 2 == 0 ? num1 + " is even number" : num1 + " is odd number";
    console.log(result);
  }
  
  isEvenOrOddNum(29);
  
  isEvenOrOddNum(44);
  
  isEvenOrOddNum(0);
  
  isEvenOrOddNum(101);
  console.log("====================  Step 3 ============");
  
  function wordLength(string) {
    var length = string.length;
  
    return length % 2 === 0 ? "even" : "odd";
  }
  
  var result = wordLength("javascript");
  console.log(`The length of javascript is ${result}.`);
  
  var result = wordLength("developer");
  console.log(`The length of Developer is ${result}.`);
  
  var result = wordLength("Google");
  console.log(`The length of Google is ${result}.`);
  