class Employee {
  constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
    this.emp_id = emp_id;
    this.emp_name = emp_name;
    this.emp_dept = emp_dept;
    this.emp_salary = emp_salary;
    this.emp_company = emp_company;
  }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

console.log(`=============================step 1 =======================`);
//Find out all the employees from 'TCS' using filter(), and thaen from the
//final array result traverse it and log company name & Employee name

const EmployeeArray = [
  emp_anil,
  emp_radha,
  emp_rishi,
  emp_sonali,
  emp_monika,
  emp_viny,
  emp_mahi,
];

const FinalArray = EmployeeArray.filter((element) => {
  return element.emp_company === "TCS";
});
FinalArray.forEach((element) => {
  console.log(
    `The Company Name: ${element.emp_company} and Employee Name: ${element.emp_name}`
  );
});

console.log(`=============================step 2 =======================`);
//Find the average salary of employee from company wipro.

const WiproAverage = EmployeeArray.filter((element) => {
  return element.emp_company === "Wipro";
});

const sumOfSalary = WiproAverage.reduce((runningTotal, element) => {
  return runningTotal + element.emp_salary;
}, 0);

console.log(
  `Total Salary is ${sumOfSalary}, and Number of Employees is: ${WiproAverage.length}`
);
console.log(`The Average Salary is: ${sumOfSalary / WiproAverage.length}`);

console.log(`=============================step 3 =======================`);
//Find the average salary of employee from companies Wipro or infy
const sumOfWiproandInfy = EmployeeArray.filter((element) => {
  return element.emp_company === "Wipro" || element.emp_company === "Infy";
});
const sumOfAllSalary = sumOfWiproandInfy.reduce((runningTotal, element) => {
  return runningTotal + element.emp_salary;
}, 0);
console.log(
  `Total salary is ${sumOfAllSalary} and Number of Employee is: ${sumOfWiproandInfy.length}`
);
console.log(
  `The Average Salary is ${sumOfAllSalary / sumOfWiproandInfy.length}`
);
