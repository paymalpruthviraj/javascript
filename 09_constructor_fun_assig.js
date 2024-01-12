function Bank(bankName, location, ifscCode, branchCode) {
  this.bankName = bankName;
  this.location = location;
  this.ifscCode = ifscCode;
  this.branchCode = branchCode;
  // this.display= function(){
  //     console.log(`Bank Details:  Bank Name: ${this.bankName},   Location: ${ this.location},   IFSC CODE:${this.ifscCode}   BRANCH CODE:${this.branchCode}`);
  // }
}
const sbiBank = new Bank("SBI Bank", "Kolhapur", "SBIF45DF", 4545654);
console.log(
  `Bank Name: ${sbiBank.bankName},    Location:${sbiBank.location},    IFSC CODE: ${sbiBank.ifscCode},  Branch Code:${sbiBank.branchCode}`
);

const yesBank = new Bank("Yes Bank", "Pune", "YES5748HF", 8574858);
console.log(
  `Bank Name: ${yesBank.bankName},    Location:${yesBank.location},    IFSC CODE: ${yesBank.ifscCode},  Branch Code:${yesBank.branchCode}`
);

const pnbbank = new Bank("PNB Bank", "Mumbai", "MAH6748HF", 9065858);
console.log(
  `Bank Name: ${pnbbank.bankName},    Location:${pnbbank.location},    IFSC CODE: ${pnbbank.ifscCode},  Branch Code:${pnbbank.branchCode}`
);

const axisBank = new Bank("Axis Bank", "Satara", "AXIS748HF", 1274858);
console.log(
  `Bank Name: ${axisBank.bankName},    Location:${axisBank.location},    IFSC CODE: ${axisBank.ifscCode},  Branch Code:${axisBank.branchCode}`
);

console.log(
  `=========================================================================================================`
);
Bank.prototype.openTime = "9 AM IST";
Bank.prototype.closeTime = "6 PM IST";
console.log(
  `Bank Name: ${sbiBank.bankName},    Location:${sbiBank.location},    IFSC CODE: ${sbiBank.ifscCode},  Branch Code:${sbiBank.branchCode}    Open Time:${sbiBank.openTime}    Close Time:${sbiBank.closeTime}`
);

console.log(
  `Bank Name: ${axisBank.bankName},    Location:${axisBank.location},    IFSC CODE: ${axisBank.ifscCode},  Branch Code:${axisBank.branchCode}   Open Time:${axisBank.openTime}     Close Time:${axisBank.closeTime}`
);

console.log(
  `Bank Name: ${yesBank.bankName},    Location:${yesBank.location},    IFSC CODE: ${yesBank.ifscCode},  Branch Code:${yesBank.branchCode}    Open Time:${yesBank.openTime}     Close Time:${yesBank.closeTime}`
);
