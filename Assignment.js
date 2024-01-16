console.log(
  `==============================================step1========================================`
);
const arrayNum = [11, 3, 4, 11, 4, 7, 3];
let uniqueArray = [];
for (let num of arrayNum) {
  if (!uniqueArray.includes(num)) {
    uniqueArray.push(num);
  }
}
console.log(uniqueArray);
console.log(
  `==============================================step2========================================`
);

function strFirstAndLastElementCapital(str) {
  //first split string
  let words = str.split(" ");

  let emptyArray = [];

  for (const word of words) {
    let firstElement = word.charAt(0).toUpperCase();

    let lastElement = word.slice(-1).toUpperCase();

    let addelement = firstElement + word.slice(1, -1) + lastElement;

    emptyArray.push(addelement);
  }
  let joinStr = emptyArray.join(" ");
  return joinStr;
}
let result = strFirstAndLastElementCapital("how are you mate");
console.log(result);
