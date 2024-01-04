function monthofYear(month) {
  switch (month) {
    case 1:
      console.log(` Month Number ${month} ==> January `);

      break;

    case 2:
      console.log(` Month  Number ${month} ==> February`);

      break;

    case 3:
      console.log(` Month  Number ${month} ==> March`);

      break;

    case 4:
      console.log(` Month  Number ${month} ==> April`);

      break;

    case 5:
      console.log(` Month  Number ${month} ==> May `);

      break;

    case 6:
      console.log(` Month  Number ${month} ==> June`);

      break;

    case 7:
      console.log(` Month  Number ${month} ==> July`);

      break;
    case 8:
      console.log(` Month  Number ${month} ==> August `);

      break;
    case 9:
      console.log(` Month  Number ${month} ==> September `);

      break;
    case 10:
      console.log(` Month Number ${month} ==> October `);

      break;
    case 11:
      console.log(` Month  Number ${month} ==> November `);

      break;
    case 12:
      console.log(` Month  Number ${month} ==> December`);

      break;

    default:
      console.log(` Invalid Input --> Month Number ${month}`);

      break;
  }
}

monthofYear(0);

monthofYear(2);

monthofYear(5);

monthofYear(12);

monthofYear(15);

monthofYear(100);

monthofYear(null);

monthofYear(undefined);
