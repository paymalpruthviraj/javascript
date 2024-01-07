console.log("==============step 1======================");
function vowals(str) {
  var vowalcount = 0;
  for (let index = 0; index < str.length; index++) {
    let char = str.charAt(index).toLowerCase();
    if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u")
      vowalcount = vowalcount + 1;
  }
  console.log(`vowels count is: ${vowalcount}`);
}
vowals(" I am a very good It Developer");
console.log("================step 2 ====================");
function cube(number) {
  for (number = 1; number <= 5; number++) {
    let result = 1 * 1 * 1 + 2 * 2 * 2 + 3 * 3 * 3 + 4 * 4 * 4 + 5 * 5 * 5;
    console.log(`cube of number is 1 to 5 ${result}`);
  }
}
cube(1);
console.log("==========step 3==================================");

function oddPositionedChars(str) {
  let removeSpace = str.replaceAll(" ", "");

  for (index = 1; index <= removeSpace.length; index = index + 2) {
    console.log(removeSpace[index]);
  }
}

console.log("=====================string1 output=============");
oddPositionedChars("Hard Work always pays back");
console.log("=====================string2 output=============");
oddPositionedChars("Soon I Will be UI IT Champ");
