const arrayNumber=[20,31,40,25,23,11,29,9,60,2,11];
console.log("=======================step 1 ==========================");
let arrayLength = arrayNumber.length;
console.log(` total element available is: ${arrayLength}`);
console.log("=======================step 2 ==========================");
let firstElement = arrayNumber[0];
let lastElement = arrayNumber[arrayNumber.length-1];
console.log(`The first element is: ${firstElement} and last element is ${lastElement}`);
console.log("=======================step 3 ==========================");
let lastThirdElement = arrayNumber[arrayNumber.length-3];
console.log(`Third last element is: ${lastThirdElement}`);
console.log("=======================step 4 ==========================");
let evenNumber=0;
for (const evenNumber of arrayNumber) {
    if(evenNumber%2==0){
        console.log(`The even number is:${evenNumber}`);
    }
    
}
console.log("=======================step 5 ==========================");
let oddNumber=0;
for (const oddNumber of arrayNumber) {
    if(oddNumber%2!=0){
        console.log(`The oddNumber is : ${oddNumber}`);
    }
    
}
console.log("=======================step 6 ==========================");

let sum=0;
for(let i=0; i<arrayNumber.length; i++){
   
   if(i%2==0){
    let evenNum=arrayNumber[i];
    
    sum = sum + evenNum;
    console.log(evenNum);
   }  
     }
     console.log(`Sum of even-positioned element is:${sum}`);
     console.log("=======================step 7 ==========================");
     let add=0;
     for(let i=0;i<arrayNumber.length;i++){
        if(i%2!=0){
           let oddNum=arrayNumber[i];
           add=add+oddNum;
           console.log(oddNum);
        }
     }
     console.log(`sum of odd-positioned element is:${add}`);
     console.log("=======================step 8 ==========================");
     let addition=0;
     for (const allElement of arrayNumber) {
        addition=addition+allElement;
        console.log(allElement);
     }
     console.log(`the sum of all element is ${addition}`);
     console.log("=======================step 9 ==========================");
     let multiplay =[];
     for (const num of arrayNumber) {
        if(num%5==0){
            multiplay.push(num);

        }
        
     }
console.log(multiplay);
console.log("=======================step 10 ==========================");
let word=0;
word=arrayNumber.includes(115);
console.log(`is Number 115 available in arrayNumbers:  ${word}`);
console.log("=======================step 11 ==========================");
let word1 =0;
word1=arrayNumber.includes(23);
console.log(`is Number 23 available in arrayNumbers:  ${word1}`);
console.log("=======================step 12 ==========================");
 arrayNumber.splice(3,0,55,66);
console.log(arrayNumber);
console.log("=======================step 13 ==========================");
arrayNumber.splice(4,3);
console.log(arrayNumber);


let sum=0;
for (const index in arrayNumber) {
  if(index%2!=0){
    console.log(`${arrayNumber[index]}`);
    sum=sum+arrayNumber[index];
  }
    
}
log









