const bankSbi = {
  name: "State Bank of India",
  Branch: "Kolhapur",
  AccountType: "Saving",
  AccountNumber: 506048526545,
};
console.log(
  "=====================================step 1 ============================================"
);
console.log(bankSbi);
console.log(
  "=====================================step 2 ============================================"
);
const bankLocation = {
  street: "wakad",
  city: "pune",
  pin: 416005,
};
console.log(bankLocation);
console.log(
  "=====================================step 3 ============================================"
);
const newBank = Object.assign({}, bankSbi, bankLocation);
console.log(newBank);
console.log(
  "=====================================step 4 ============================================"
);
const rateOfInterst = {
  homeLoanInterst: "11% p.a",
  personalLoanInterst: "8% p.a",
  dueInterst: "9% p.a",
};
console.log(rateOfInterst);
console.log(
  "=====================================step 5 ============================================"
);
const sbiDetails = Object.assign({}, bankSbi, bankLocation, rateOfInterst);
console.log(sbiDetails);
console.table(sbiDetails);
console.log(
  "=====================================step 6 ============================================"
);
for (const key in sbiDetails) {
  if (Object.hasOwnProperty.call(sbiDetails, key)) {
    const element = sbiDetails[key];
    console.log(`${key}==>${element}`);
  }
}
