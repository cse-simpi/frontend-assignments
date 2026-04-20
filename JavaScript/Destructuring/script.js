// Array destructuring
//Extracting elements from array and storing inside variables
// we can give any variable name

// let marks = [10,20,30,30,40];

// let [a,b,c] = marks;

// console.log(b);

// let [,x,y,,z] = marks;
// console.log(x);


//Object destructuring
//Extracting the properties from an object and storing inside variable
//we need to give same name for variable which we use in object properties

// let person = {
//     name : "Simpi",
//     city : "Punjab"
// }

// let {name,city} = person;
// console.log(city);

// let name = "simpi" // it will reflect in name property of window
// console.log(window);

//spread and rest(...) in arrays
//spread -> already array we are just expanding the array into other array
//rest -> we are collecting values into the array

// let week1 = [20,30,40];
// let week2 = [30,50,40];

// let combine = [...week1,...week2];
// console.log(combine);

// let marks = [10,30,40,40,20,29,50,6010,40,60];

// let [a,b,...c] = marks;
// console.log(c);


//spread and rest(...) in objects


// let person = {
//     name : "simpi",
//     city : "jalandhar"
// }

// let updatedPerson = {
//     ...person,
//     country : "India"
// }

// console.log(updatedPerson.name);


// let user = {
//     userName : "simpi",
//     role : "admin",
//     salary : 8765432
// }

// let {userName,...extra} = user;

// console.log(extra);


// rest in functions

// function add(a,b,c,...d){
//     console.log(a+d);
//     console.log(d[2]);
// }

// add(10,20,3,0,7,80,34,56,67,78);

//spread in functions

// let marks = [10,30,40,50,60,78,12,56];

// function add(a,b,c,d,e){
//     console.log(a + b + c + d + e);
    
// }

// //it will take the required elements and skips anything extra
// add(...marks)

let marks1 = [10,30,40,50,60,78,12,56];

function add(...a){
    console.log(a);
    
}

//it will take the required elements and skips anything extra
add(...marks1)