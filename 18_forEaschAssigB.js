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
//Find out the 'TCS' employee details and log only name & company on console
console.log(
  `====================================step 1 =====================================`
);
const arrayName = [
  emp_anil,
  emp_radha,
  emp_rishi,
  emp_sonali,
  emp_monika,
  emp_viny,
  emp_mahi,
];

arrayName.forEach((currentValue) => {
  if (currentValue.emp_company == "TCS") {
    console.log(
      `The Name of Employee : ${currentValue.emp_name} and Company Name is: ${currentValue.emp_company}`
    );
  }
});
console.log(
  `====================================step 2 =====================================`
);
// Find the employee with salary greater than or equal 50000 (Log all employee details on console)
arrayName.forEach((currentValue) => {
  if (currentValue.emp_salary >= 50000) {
    console.log(
      `The ID is: ${currentValue.emp_id}, Employee Name: ${currentValue.emp_name},Employee Salary : ${currentValue.emp_salary},Employee Company Name : ${currentValue.emp_company}`
    );
  }
});
console.log(
  `====================================step 3 =====================================`
);
//Find the sum of all employees salary and log on console
sum = 0;
arrayName.forEach((currentValue) => {
  sum = currentValue.emp_salary + sum;
});
console.log(`The sum of Salary : ${sum}`);
console.log(
  `====================================step 4 =====================================`
);
//Find the average salary and log on console
sum = 0;
arrayName.forEach((currentValue) => {
  sum = currentValue.emp_salary + sum;
});
//console.log(sum);

const averageSalary = sum / arrayName.length;
console.log(`The Average salary is: ${averageSalary}`);
console.log(
  `=============================step 5 =============================`
);
//Find the 'IT' OR 'HR' department employees whose salary is greater than or equal to 75000 and log complete employee details on console
arrayName.forEach((currentValue) => {
  if (
    currentValue.emp_salary >= 75000 ||
    currentValue.emp_dept == "IT" ||
    currentValue.emp_dept == "HR"
  ) {
    console.log(
      `The ID is: ${currentValue.emp_id}, Employee Name: ${currentValue.emp_name}, Employee Deparment: ${currentValue.emp_dept} ,Employee Salary : ${currentValue.emp_salary},Employee Company Name : ${currentValue.emp_company}`
    );
  }
});
