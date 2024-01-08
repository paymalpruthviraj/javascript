console.log(
  "===========================step 1 =========================================="
);
const fruits_seasonal = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
let firstElement = fruits_seasonal[0];
let lastElement = fruits_seasonal[fruits_seasonal.length - 1];
console.log(
  `The first element is ${firstElement} and last element is ${lastElement}`
);
console.log(
  "===========================step 2 =========================================="
);
let fruits = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log("Before Adding Array is:", fruits);
fruits.unshift("Papaya");
console.log("After adding Array element is:", fruits);
console.log(
  "===========================step 3 =========================================="
);
const remove = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log("Before remove Array element is:", remove);
remove.splice(3, 1);
console.log("After remove Array element is:", remove);
console.log(
  "===========================step 4 =========================================="
);
const addElement = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log("Before adding Array element is:", addElement);
addElement.push("Pineapple");
console.log("After adding Array element is:", addElement);
console.log(
  "===========================step 5 =========================================="
);
const array = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log("Before adding Array element is:", array);
array.splice(4, 0, "DragonFruit");
console.log("After Adding Array element is:", array);
console.log(
  "===========================step 6 =========================================="
);
const replace = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log("Before replacing Array element is:", array);
replace.splice(1, 1, "Kiwi");
console.log("After replacing Array element is:", replace);
console.log(
  "===========================step 7 =========================================="
);
const index = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
let string = index.slice(1, 4);
console.log("The element index 1 to 4 is:", string);
console.log(
  "===========================step 8 =========================================="
);
const lastStr = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
let result = lastStr.slice(-3);
console.log("last 3 element is:", result);
