//function
const greet = (name: string) : string =>{
    return `Hello ${name}`
}

//Basic Types 
//Number
let age : number = 25;
let price : number = 100.99;
let hex : number = 0xff;
let binary : number = 0b11010;

//String
let firstName : string = "Nokwanda"
let greeting : string = `Hello, ${firstName}`

//display variable
const showString = (name: string) : string =>{
    return `${name}`
}

// console.log(show(greeting));


//Boolean
let isLoggedIn : boolean = true;
let hasPermission : boolean = false;

//display variable
const showBoolean = (name: boolean) : boolean =>{
    return name
}

//console.log(showBoolean(hasPermission));


//Array 
//Two ways to define arrays

    //first
    let numbers : number[] = [1,2,3,4];
    let fruits: string[] = ["apple","orange","banana"];

    //display array variable
    const showArray = (name: string[]) : string[] =>{
         return name
    }

    // console.log(showArray(fruits));
    
    //second
    let scores: Array<number> = [100,10,25]


//Tuple
//Arrays with fixed length and types in specific position
let user : [string,number] = ["Nokwanda",25] 

//display tuple variable function
    const showTuple = (name: [string,number]) : [string,number] =>{
         return name
    }
    // console.log(showTuple(user));



//Objects 
// Basic Object type
let person : {firstName:string, age:number} = { firstName:"Nokwanda", age:25}

//display Object variable function
    // const showObject = (person: person) : [string,number] =>{
    //      return name
    // }

    // console.log("My name is " ,person.firstName );
    // console.log("I am " ,person.age );
    


//let Declares a variable. create a variable that holds a value, the value can change, you can specify the data type
// type : Declares a custom type alias, you custom object,tuple, assign value, helps define structure

type Student = {name:string, score:number};

let studentTut : Student = {name:"Nokwanda",score:80}

//display using function

function displayStudent(student:Student): void{
    // console.log(student.score);
    
}

displayStudent(studentTut)

// another example 
type Car ={ brand:string, year:number, isNew:boolean}

let myCar : Car = { brand:"Kwid",year:2012, isNew:true}

let myCar2 : Car = { brand:"Suzuki",year:2013, isNew:false}

function displayCarBrand(car :Car): string {
    if(car.isNew){
        return `My car ${car.brand} is of year ${car.year} it's a new car`
    }else {
        return `My car ${car.brand} is of year ${car.year} it's a not a new car`
    }
    
}

console.log(displayCarBrand(myCar));
