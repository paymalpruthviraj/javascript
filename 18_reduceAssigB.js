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

const arrayEmps = [
  emp_anil,
  emp_radha,
  emp_rishi,
  emp_sonali,
  emp_monika,
  emp_viny,
  emp_mahi,
];

console.log(`======================step 1 =========================`);
//Find all the employees from 'Wipro' company
const wiproEmployee = arrayEmps.filter((element) => {
  return element.emp_company === "Wipro";
});
wiproEmployee.forEach((element) => {
  console.log(
    `The Company Name: ${element.emp_company} and Employee Name: ${element.emp_name}`
  );
});
console.log(`=======================step 2===========================`);
//Find all the employees From 'IT' OR 'HR'
const itAndHr = arrayEmps.filter((element) => {
  return element.emp_dept === "IT" || element.emp_dept === "HR";
});
itAndHr.forEach((element) => {
  console.log(
    ` The Employee Name: ${element.emp_name}  , Department : ${element.emp_dept}`
  );
});
console.log(`=======================step 3===========================`);
//Find all the employees whose emp id's are grether than 50
const grether = arrayEmps.filter((element) => {
  return element.emp_id > 50;
});
grether.forEach((element) => {
  console.log(
    ` The Employee ID :${element.emp_id}   Employee Name :${element.emp_name}`
  );
});
console.log(`=======================step 4===========================`);
//Find all the employees whose names starts with letter 'A' or 'V' or'M'
const startWith = arrayEmps.filter((element) => {
  return (
    element.emp_name.startsWith("A") ||
    element.emp_name.startsWith("V") ||
    element.emp_name.startsWith("M")
  );
});
startWith.forEach((element) => {
  console.log(`${element.emp_name}`);
});
console.log(`=======================step 5===========================`);
//Find the average salary of the employee for all the department

const average = arrayEmps.reduce((runningTotal, element) => {
  return runningTotal + element.emp_salary;
}, 0);
console.log(
  `Total Salary  is ${average}, and Number of Employee is: ${arrayEmps.length}`
);
console.log(`The Average Salary is : ${average / arrayEmps.length}`);
console.log(`=======================step 6===========================`);
//Find the average salary for "IT department"
const itDept = arrayEmps.filter((element) => {
  return element.emp_dept === "IT";
});

const totalSalary = itDept.reduce((runningTotal, element) => {
  return runningTotal + element.emp_salary;
}, 0);

console.log(
  `Total IT department salary is ${totalSalary} and number of employees is: ${itDept.length}`
);
console.log(`The average Salary is: ${totalSalary / itDept.length}`);
