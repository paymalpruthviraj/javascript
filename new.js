const array = [34,56,78,90,45,95,76,60];
let arrayLength= array.length;


let sum=0;
for (const element of array) {
   sum=sum+element;
}
let average=sum/arrayLength;
console.log(average);