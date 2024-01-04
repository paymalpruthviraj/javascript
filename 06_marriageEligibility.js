var marriageEligibility = function (gender, age) {
  var result = "";
  if (age < 0 || age > 100 || age == undefined || isNaN(age)) {
    console.log(`${age}==>Invalid Input...`);
  } else {
    if (age >= 21 && gender === "Male") {
      return "eligible";
    } else {
      if (age >= 18 && gender === "Female") {
        return "eligible";
      } else {
        return "not eligible";
      }
    }
  }
};
var result1 = marriageEligibility("Male", 17);
console.log(`Age 17 He is  ${result1} for marrage`);
var result2 = marriageEligibility("Male", 25);
console.log(`Age 25 He is ${result2} for marrage`);
var result3 = marriageEligibility("Female", 28);
console.log(`Age 28 She is ${result3} for marrage`);
var result4 = marriageEligibility("Feamle", 16);
console.log(`Age 16 She is ${result4} for marrage`);
var result5 = marriageEligibility("Other", 35);
console.log(`Age 35 other is ${result5} for marrage`);
var result6 = marriageEligibility("Other", 41);
console.log(`Age 41 other is ${result6}  for marrage`);
