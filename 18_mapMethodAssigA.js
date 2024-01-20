const arrayNumbers = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];
console.log(`=========================step 1 ===================`);

const arrayTrans = arrayNumbers.map((currentValue) => {
  return currentValue + 10;
});
console.log(arrayTrans);
console.log(`=========================step 2 ===================`);
//Cube the each array element and log on console
const arrayNew = arrayNumbers.map((currentValue) => {
  return currentValue * currentValue * currentValue;
});
console.log(arrayNew);
console.log(`=========================step 3 ===================`);
//Add the index value into its correspoing each array element and log new array result on colole
const newArray = arrayNumbers.map((index, value) => {
  return value + index;
});
console.log(newArray);
