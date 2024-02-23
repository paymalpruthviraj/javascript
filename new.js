const arrayNumber = [20,11,40,25,37,49,9,90,60,2,19];

const greather = arrayNumber.filter((element)=>{
  return element>50;
})
console.log(greather);

const even = arrayNumber.filter((element)=>{
  return element%2==0;
})
console.log(even);

const odd = arrayNumber.filter((element)=>{
  return element%2!=0;
})
console.log(odd);


const mult = arrayNumber.filter((element)=>{
  return element%5==0;
})
console.log(mult);

const between = arrayNumber.filter((element)=>{
  return element>20 && element<50;
})
console.log(between);

