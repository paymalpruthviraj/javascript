const arrayRollNumber = [113,45,56,11,32,45,109,799,56,45];

const reverse = arrayRollNumber.reverse();
console.log(reverse);

//use the sort() method as it is without any custom sorting (without passing any argument) and notice the issue

const sort = arrayRollNumber.sort();
console.log(sort);

//sort the array in ascending order by writing your custorm logic

const acending = arrayRollNumber.sort((a,b)=>{return a>b ? 1: -1});
console.log(acending);

//find the Greatest number from the array
const 