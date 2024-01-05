var interview = function (gradScore, hscScore, sscScore, candidateName) {
  if (gradScore >= 70 || hscScore >= 80 || sscScore > 90) {
    console.log(
      `Congrates ${candidateName} you are eligible for TCS interview`
    );
  } else {
    console.log(
      `${candidateName} Unfortunately you are not eligible for interview`
    );
  }
};

interview(80, 86, 90, "Pruthviraj");
interview(70, 65, 55, "Rohit");
interview(60, 79, 88, "Aditya");
