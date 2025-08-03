
//Create a Custom Type: Create a custom type called Employee with the following properties:
type Employee = {
  fullName: [string, string];
  age: number;
  department: string;
  skills: string[];
  isActive: boolean;
};

//Create Employee Objects: Create at least two employee objects using the Employee type.
const employee1: Employee = {
  fullName: ["John", "Doe"],
  age: 30,
  department: "Engineering",
  skills: ["JavaScript", "Python", "C++"],
  isActive: true,
};

const employee2: Employee = {
  fullName: ["Jane", "Smith"],
  age: 25,
  department: "Marketing",
  skills: ["SEO", "Social Media", "Content Creation"],
  isActive: false,
};


//Write a Function: Write a function called logEmployee() that:
//Takes an Employee as a parameter.
//Logs all the employee’s details to the console, nicely formatted.

function logEmployee(employee: Employee): void {
  const [firstName, lastName] = employee.fullName;
  console.log(`--- Employee Details ---`);
  console.log(`Name: ${firstName} ${lastName}`);
  console.log(`Age: ${employee.age}`);
  console.log(`Department: ${employee.department}`);
  console.log(`Skills: ${employee.skills.join(", ")}`);
  console.log(`Active: ${employee.isActive ? "Yes" : "No"}`);
  console.log(`------------------------`);
}

//Call the Function: Call the logEmployee() function for each employee object you created.
logEmployee(employee1);
logEmployee(employee2)
