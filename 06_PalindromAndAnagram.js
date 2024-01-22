console.log(`========================step 1==================`);

//Write a function to check whether given string is Palindrome or not. EX-madam,dad,hello

function isPalindrome(str) {
  let rev = str.split("").reverse().join("");
  if (rev == str) {
    return "The String is Palindrome";
  }
  return "The String is Not a Plindrome";
}
let str1 = isPalindrome("madam");
console.log(`The String madam :- ${str1}`);

let str2 = isPalindrome("dad");
console.log(`The String dad :- ${str2}`);

let str3 = isPalindrome("hello");
console.log(`The String hello :- ${str3}`);

console.log(`=========================step 2==================`);
//Write a function to check wheather given function is anagram or not
//a)Slient,Listen
//b)Hello,World
//C)Such,much

function checkAnagram(a, b) {
  if (a.length !== b.length) {
    return false;
  }
  let str1 = a.split("").sort().join("");
  let str2 = b.split("").join("");

  if (str1 === str2) {
    return "Strings are anagrams.";
  } else {
    return "Strings are not anagrams.";
  }
}

let finalresult1 = checkAnagram("Silent", "Listen");
console.log(`The Strings Silent and Listen: ${finalresult1}`);

let finalresult2 = checkAnagram("Hello", "World");
console.log(`The Strings Hello and World: ${finalresult2}`);

let finalresult3 = checkAnagram("Such", "much");
console.log(`The Strings Such and much: ${finalresult3}`);
