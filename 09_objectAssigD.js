console.log(
  "=========================================================step 1 =================================="
);
let professor = {
  name: "OmkarGhatge",
  age: 33,
  subject: "Python Programming",
  address: "Mumbai",
  designation: "SoftwareDeveloper",
  digree: {
    Bsc: "Computer Science",
    Mca: "Master of computer Application",
    PHD: "Adv Computing",
    Certificates: {
      Certificates: [
        "Hacker Rank Participation",
        "Certificate in IFE course",
        "Certificate in Adv Programming",
      ],
    },
  },
};

console.log(professor);
console.log(
  "=========================================================step 2 =================================="
);

console.log(professor.digree);
console.log(
  "=========================================================step 3 =================================="
);
console.log(professor.digree.Certificates.Certificates);
console.log(
  "=========================================================step 4 =================================="
);
professor.totalExperience = "14 years";
console.log("Total Experience:", professor.totalExperience);
console.log(
  "=========================================================step 5 =================================="
);
professor.age = 30;
console.log(professor);
console.log(
  "=========================================================step 6 =================================="
);
professor.digree.Certificates.Certificates.splice(2, 0, "oracale certificate"); // = "Oracle Certificate";
console.log(professor.digree.Certificates.Certificates);
console.log(
  "=========================================================step 7 =================================="
);
let lastCertificate =
  professor.digree.Certificates.Certificates[
    professor.digree.Certificates.Certificates.length - 1
  ];
console.log(lastCertificate);
console.log(
  "=========================================================step 8 =================================="
);
console.log(professor);
console.log(
  "=========================================================step 9 =================================="
);

for (const certificate of professor.digree.Certificates.Certificates) {
  console.log(`certificate: ${certificate}`);
}
