console.log("===============revers string step 1============");
function reverseString(str) {
  let allSpacesRemoved = str.replaceAll(" ", "");

  for (let index = allSpacesRemoved.length; index >= 0; index--) {
    let reverse = allSpacesRemoved.charAt(index);
    console.log(reverse);
  }
}
reverseString("Hard Work always pays back");
console.log("===============revers string step 1============");

reverseString("Soon I will beAnguler IT Champ");
