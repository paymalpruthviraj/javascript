console.log("===================  Step 1 ==========================");
function one() {
  var para = "Function one with no arguments and no return type";
  console.log(para);
}
one();
console.log("=======================================================");
function two() {
  var para = " Function two with no arguments and no return type";
  console.log(para);
}
two();
console.log("===================  Step 2 ==========================");
function personalDetails(firstName, lastName, collegeName) {
  console.log(
    "First Name:",
    firstName,
    ",",
    "Last Name:",
    lastName,
    ",",
    "College Name:",
    collegeName
  );
}
personalDetails(
  "Pruthviraj",
  "Paymal",
  "D Y Patil Agriculture and Technical University"
);
console.log("===================  Step 3 ==========================");
function swapValues(n1, n2) {
  console.log("Before Swap", "n1 -->", n1, "n2 -->", n2);
  var temp = n1;
  n1 = n2;
  n2 = temp;
  console.log("After  Swap", "n1 -->", n1, "n2 -->", n2);
}
swapValues("Virat", "Anushka");
swapValues(1000, 2000);
console.log("===================  Step 4 ==========================");
function addThreeValues(n1, n2, n3) {
  var result = n1 + n2 + n3;
  console.log("Addition =", result);
}
addThreeValues(10.23, 600, 40);
addThreeValues("Hello", "Good", "Morning");
