console.log(`==========================step 1 ========================`);
//with no args and no return values, log message on conslole inside arrow function
//
const display = () => {
  console.log(`Good Morning, Today is Thursday`);
};
display();
console.log(`==========================step 2 ========================`);
//with 3 args and no return values, for received 3 parameters perform the multiplication
//values to be passed ==>5,5,2
//invoke the same arrow function for values=> 10,4[Note: assign default value to 3rd arg as 1]
const show = (n1, n2, n3 = 1) => {
  let Multiplication = n1 * n2 * n3;
  console.log(`The multiplication is: ${Multiplication}`);
};
show(5, 5, 2);
show(10, 4);
console.log(`==========================step 3 ========================`);
//with 5 args and return values such as, for reveived params it should do the addtion
//a) values to be passed => 100,100,200,349,756
//b) Log the returned result on console with meaningful meassage for both setep 3 a and 3.c
//c) invoke the same arrow function for values: "Iam","learining","ES6",'features',"in depth"

const addition = (n1, n2, n3, n4, n5) => {
  let add = n1 + n2 + n3 + n4 + n5;
  return add;
};
var result1 = addition(100, 100, 200, 349, 756);
var result2 = addition("Iam", "learning", "ES6", "features", "in depth");
console.log(`The addition is : ${result1}`);
console.log(`The addition is : ${result2}`);
