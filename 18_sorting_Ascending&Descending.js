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
  const arrayEmployees = [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];

  console.log(`========================================step 1 =========================================`);
  //sort the arrayEmployees in descending order of Employee id's and log employee details-->id,Name,Department
  const decending = arrayEmployees.sort((a,b)=>b.emp_id-a.emp_id );
  decending.forEach((element)=>{
    console.log(`Id : ${element.emp_id} , Name : ${element.emp_name},Department : ${element.emp_dept}`);
  })
  console.log(`========================================step 2 =========================================`);
  //Sort the 'arrayEmployee ' in ascending order of employee department and log id,dept, & company
  const acending = arrayEmployees.sort((a,b)=>a.emp_dept.localeCompare(b.emp_dept));
  acending.forEach((element)=>{
console.log(`Id : ${element.emp_id}, Depertment : ${element.emp_dept}, Company Name : ${element.emp_company}`);

})
console.log(`========================================step 3 =========================================`);
//sort the employee array in descending order of employee salarys and log Name,salary & companyl
const salaryDecending = arrayEmployees.sort((a,b)=>b.emp_salary-a.emp_salary);
salaryDecending.forEach((element)=>{
    console.log(`Name : ${element.emp_name}, Salary : ${element.emp_salary}, Company : ${element.emp_company}`);
})
