//Note: please create the Employee class as it->
//while creating objects pass the values as it is->
//add all the created emp objects inside array namely as 'arrayEmployees'
//solove the below problem statements as & log result on console with meaningful msg

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
const emp_monika = new Employee(77, "MOnika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");
console.log(
  "=========================================step 1=========================================="
);
//Find all the employees working in 'TCS' and log only employee names and company name on console
const EmployeeArray = [
  emp_anil,
  emp_radha,
  emp_rishi,
  emp_sonali,
  emp_monika,
  emp_viny,
  emp_mahi,
];
for (const element of EmployeeArray) {
  if (element.emp_company == "TCS")
    console.log(
      `The Employee Name : ${element.emp_name} and Company Name ; ${element.emp_company}`
    );
}
console.log(
  "=========================================step 2=========================================="
);
//Find the 'Finance' department employees, log only departement and employee name on console
for (const element of EmployeeArray) {
  if (element.emp_dept == "Finance") {
    console.log(
      `The departement is: ${element.emp_dept}  and Employee Name is: ${element.emp_name}`
    );
  }
}
console.log(
  "=========================================step 3=========================================="
);
//Find the employee whose name starts with'R' and log complete employee details on console
for (const element of EmployeeArray) {
  if (element.emp_name.startsWith("R")) {
    console.log(element);
  }
}
console.log(
  "=========================================step 4=========================================="
);
//Find the employees whose salary is greater than 75000 and log on console emp name,company and salary
for (const element of EmployeeArray) {
  if (element.emp_salary > 75000) {
    console.log(
      `The Employee Name : ${element.emp_name} company Name is : ${element.emp_company} and salary is: ${element.emp_salary}`
    );
  }
}
console.log(
  "=========================================step 5=========================================="
);
//Find the emp's whose salary greater than or equal 50000 and from 'IT' departement ,log complete emp details on conslole
for (const element of EmployeeArray) {
  if (element.emp_salary >= 50000 && element.emp_dept == "IT") {
    console.log(element);
  }
}
console.log(
  "=========================================step 6=========================================="
);
//Find out all the employees from company 'infy' and log complete employee details on console
for (const element of EmployeeArray) {
  if (element.emp_company == "Infy") {
    console.log(element);
  }
}
