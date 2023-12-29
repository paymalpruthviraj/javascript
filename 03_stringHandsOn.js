function stringHandsOn() {
  var GivenString = "   Hey you are doing good, keep it up    ";
  console.log(`1. Given string is:${GivenString}`);
  var totallength = GivenString.length;
  console.log(`2. Total length of String: ${totallength}  `);
  var trimResult = GivenString.trim();
  console.log(
    `3. After Removing extra spaces: ${trimResult}, It's length is: ${trimResult.length} `
  );
  var totallength = GivenString.length - trimResult.length;
  console.log(`4. Total  Spaces Removed Is: ${totallength}`);

  var result = trimResult.split(" ");

  console.log(`5. Total words in string is: ${result.length}`);
  var indexOfgood = trimResult.indexOf("good");
  console.log(`6. Index of world  good is: ${indexOfgood} `);
  console.log(
    `7. Substring starting from index  Is:  ${trimResult.substring(22)}`
  );
  console.log(`7. Slice starting from index  Is:  ${trimResult.slice(22)}`);
  console.log(`8. End With Word "up" : ${trimResult.includes("up")}`);
  console.log(`9. Starting With Word "Hey" : ${trimResult.includes("Hey")}`);
}
stringHandsOn();
