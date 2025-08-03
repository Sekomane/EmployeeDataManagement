var employee1 = {
    fullName: ["John", "Doe"],
    age: 30,
    department: "Engineering",
    skills: ["JavaScript", "Python", "C++"],
    isActive: true,
};
var employee2 = {
    fullName: ["Jane", "Smith"],
    age: 25,
    department: "Marketing",
    skills: ["SEO", "Social Media", "Content Creation"],
    isActive: false,
};
function logEmployee(employee) {
    var _a = employee.fullName, firstName = _a[0], lastName = _a[1];
    console.log("--- Employee Details ---");
    console.log("Name: ".concat(firstName, " ").concat(lastName));
    console.log("Age: ".concat(employee.age));
    console.log("Department: ".concat(employee.department));
    console.log("Skills: ".concat(employee.skills.join(", ")));
    console.log("Active: ".concat(employee.isActive ? "Yes" : "No"));
    console.log("------------------------");
}
logEmployee(employee1);
logEmployee(employee2);
