const arrayRollNumber = [113,45,56,11,32,45,109,799,56,45];

console.log(`======================step 1 =======================`);
//Reverse the array
const reverse = arrayRollNumber.reverse();
console.log(reverse);
console.log(`======================step 2 =======================`);
//Use the sort()method as it is without any custom sorting (without passing any argument )$ notice the issue
const sort = arrayRollNumber.sort();
console.log(sort);
console.log(`======================step 3 =======================`);
//sort the array in ascending order, by writing your custorm logic
const acending = arrayRollNumber.sort((a,b)=>{
return a>b ? 1:-1;;
});
console.log(acending);
console.log(`======================step 4 =======================`);
//Find the Greatest number from the array
const Greatest = arrayRollNumber.slice().sort((a,b)=>b-a )[0];
console.log(`Greatest Number : ${Greatest}`);
console.log(`======================step 5 =======================`);
//find the smallest number from the array
const smallest = arrayRollNumber.slice().sort((a,b)=>a-b)[0];
console.log(`Smallest Number : ${smallest}`);
console.log(`======================step 6 =======================`);
//remove the duplicates from array
const uniqueArray = [...new Set(arrayRollNumber)].sort((a,b)=>a-b);
console.log(`Remove duplicate Number : ${uniqueArray}`);


