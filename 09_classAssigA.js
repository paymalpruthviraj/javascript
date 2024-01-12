console.log(
    `=========================================step 1======================`
  );
  
  class Vehicles {
    constructor(manufacturer, model, year, color, mileage) {
      this.manufacturer = manufacturer;
      this.model = model;
      this.year = year;
      this.color = color;
      this.mileage = mileage;
    }
    Details() {
      console.log(
        `The manufacturer:${this.manufacturer}     model:${this.model}    year:${this.year}     Color:${this.color}    mileage:${this.mileage}`
      );
    }
  }
  const Toyota = new Vehicles("Toyota", "Camry", 2022, "Silver", 15000);
  
  const Honda = new Vehicles("Honda", "Civic", 2021, "Blue", 20000);
  
  const Ford = new Vehicles("Ford", "F-150", 2020, "Black", 30000);
  
  const Chevrolet = new Vehicles("Chevrolet", "Malibu", 2022, "Red", 18000);
  
  const Nissan = new Vehicles("Nissan", "Altima", 2021, "White", 25000);
  
  const arrayOfVehicles = [Toyota, Honda, Ford, Chevrolet, Nissan];
  for (const element of arrayOfVehicles) {
    element.Details();
  }
  console.log(
    `================================step 2==================================`
  );
  
  class College {
    constructor(name, location, studentsCount, estabilishedYear) {
      this.name = name;
      this.location = location;
      this.studentsCount = studentsCount;
      this.estabilishedYear = estabilishedYear;
    }
    display() {
      console.log(`College Details:  College Name : ${this.name}    College Location : ${this.location}     College Student count :${this.studentsCount}     College EstabilishedYear:${this.estabilishedYear}
          
          `);
    }
  }
  const college1 = new College(
    "D Y Patil Agiculture And Technical University",
    "Kolhapur",
    5000,
    2021
  );
  const college2 = new College("Delhi University", "Delhi", 30000, 1958);
  const college3 = new College(
    "Indian Institute of Technology",
    "Mumbai",
    10000,
    1958
  );
  const college4 = new College("Anna University", "Chennai", 25000, 1978);
  
  college1.display();
  college2.display();
  college3.display();
  college4.display();
  console.log(
    `=======================================step 3================================================`
  );
  function traverseObject(obj) {
    for (const key in obj) {
      if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(`${key} ${element}`);
      }
    }
  }
  traverseObject(college1);
  console.log(`============================================`);
  traverseObject(college2);
  console.log(`============================================`);
  traverseObject(college3);
  console.log(`============================================`);
  traverseObject(college4);
  