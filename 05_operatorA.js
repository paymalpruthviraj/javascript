console.log("================Step 1====================");
function squareOfWordLength(lengthofworld) {
  var squareOfWordLength = lengthofworld.length;

  var result = squareOfWordLength * squareOfWordLength;
  return result;
}
//squareOfWordLength("JavaScript");
var resultvalue1 = squareOfWordLength("Javascript");
var resultvalue2 = squareOfWordLength("google chrome");
var resultvalue3 = squareOfWordLength("Developer Smart");

console.log(` The Square of world length is: ${resultvalue1} `);
console.log(` The Square of world length is: ${resultvalue2} `);
console.log(` The Square of world length is: ${resultvalue3} `);
console.log("================Step 2====================");
function string() {
  var inputstring = "I am Angular Developer";
  var stringlength = inputstring.length;
  console.log(`Length of string is: ${stringlength}`);
  var word = inputstring.split(" ");
  var total = word.length;
  console.log("Total number of words in the string: ", total);
  var divisionby = inputstring.length / total;
  console.log(
    `Division of string length and total number of words is :${divisionby}`
  );
  var multiply = stringlength * total;
  console.log(`The String multiplication is: ${multiply}`);
}
string();
