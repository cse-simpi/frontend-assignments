// console.log("Hello")

// variables

// // to declare - we use var,let, const keywords
// var a = 10;
// var userName = "Simpi";
// let b = 20;

// //declaration
// var a; // only declaration is possible

// a = 10; // initialization in diff lines is possible

// console.log(a)
// a = 20 // reinitialization is also possible
// console.log(a)

// var a = 50; // redeclaration is also possible
// console.log(a)


//let

// let a; // only declaration is possible
// a = 10; // initialization in diff line is possible
// console.log(a)

// a = 20; // reinitialization is possible
// console.log(a)

// let a = 30; // redeclaration is not possible
// console.log(a)

//const

// // const a; // only declaration is not possible
// const a = 5;

// // a = 6; // reinitialization is not possible
// console.log(a)

// // const a = 7; // redeclaration is not possible
// console.log(a)

//difference acc to scopes
// {
// var a = 10;
// let a = 10;
// }
// console.log(a)

// let b  =30;
// {console.log(b)}


// //functional scope

// function add(){
//     var a= 10;
// }
// console.log(a) // not acessible
// add()


//datatypes

//number

// var a = 10;

//string

// let username = 'Rishi';
// const company = "Habuild";
// let details = `I am ${username} from ${company}`

// console.log(details)


// let d = 'I am "simpi" from LPU';
// console.log(d);

//boolean

// let isMarried = true;
// console.log(isMarried)
// console.log(typeof isMarried)

// //undefined

// let a;
// console.log(a)
// console.log(typeof a);


// //null
// let b = null;
// console.log(null)
// console.log(typeof b);


// //bigInt
// let salary = 12345675889082308925098n;
// console.log(salary)
// console.log(typeof salary)

// //symbol
// var a = Symbol("abc");
// var c = Symbol("abc");
// console.log(a == c)

//Array

// let arr = ['abc',18,false]
// console.log(arr);
// console.log(typeof arr)


let a = 10;
let b = '10';
// 
console.log(a == b);
console.log(a ===b);

