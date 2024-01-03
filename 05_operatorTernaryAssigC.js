console.log(
  "============================= Step 1 ============================================="
);
function maleMarriageEligibility(gender, age, boyName) {
  var check =
    gender == "male" && age >= 21
      ? `Hey ${boyName} you are eligible for Marriage`
      : `Hey ${boyName} You are not eligible for Marriage, Please try next time. `;
  return check;
}
var result = maleMarriageEligibility("male", 25, "Billgates");
console.log(result);
var result = maleMarriageEligibility("male", 17, "stew jobs");
console.log(result);
console.log(
  "============================= Step 2 ============================================="
);
function femaleMarriageEligibility(gender, age, girlName) {
  var check =
    gender == "Female" && age >= 18
      ? `Hey ${girlName} you are eligible for Marriage`
      : `Hey ${girlName} You are not eligible for Marriage, Please try next time.`;
  return check;
}
var result = femaleMarriageEligibility("Female", 16, "Jenifer");
console.log(result);
var result = femaleMarriageEligibility("Female", 27, "Malinda Gates");
console.log(result);
