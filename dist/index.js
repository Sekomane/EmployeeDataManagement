"use strict";
//function
const greet = (name) => {
    return `Hello ${name}`;
};
//Basic Types 
//Number
let age = 25;
let price = 100.99;
let hex = 0xff;
let binary = 0b11010;
//String
let firstName = "Nokwanda";
let greeting = `Hello, ${firstName}`;
//display variable
const showString = (name) => {
    return `${name}`;
};
// console.log(show(greeting));
//Boolean
let isLoggedIn = true;
let hasPermission = false;
//display variable
const showBoolean = (name) => {
    return name;
};
//console.log(showBoolean(hasPermission));
//Array 
//Two ways to define arrays
//first
let numbers = [1, 2, 3, 4];
let fruits = ["apple", "orange", "banana"];
//display array variable
const showArray = (name) => {
    return name;
};
// console.log(showArray(fruits));
//second
let scores = [100, 10, 25];
//Tuple
//Arrays with fixed length and types in specific position
let user = ["Nokwanda", 25];
//display tuple variable function
const showTuple = (name) => {
    return name;
};
// console.log(showTuple(user));
//Objects 
// Basic Object type
let person = { firstName: "Nokwanda", age: 25 };
let studentTut = { name: "Nokwanda", score: 80 };
//display using function
function displayStudent(student) {
    // console.log(student.score);
}
displayStudent(studentTut);
let myCar = { brand: "Kwid", year: 2012, isNew: true };
let myCar2 = { brand: "Suzuki", year: 2013, isNew: false };
function displayCarBrand(car) {
    if (car.isNew) {
        return `My car ${car.brand} is of year ${car.year} it's a new car`;
    }
    else {
        return `My car ${car.brand} is of year ${car.year} it's a not a new car`;
    }
}
console.log(displayCarBrand(myCar));
