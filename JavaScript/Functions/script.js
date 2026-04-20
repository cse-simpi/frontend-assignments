// //named functions
// function add(a=20,b=1){
//     console.log(a+b);
    
// }

// add(2,3)
// console.log(typeof add);

// //anonymous functions
// (function (a,b){
//     console.log(a+b);
    
// }(3,4))

//IIFE - immediate invoke function expression
// (function (a,b){
//     console.log(a/b);
    
// }) (20,30)

// //function expression

// let div = function(a,b){

//     console.log(a/b);
    
// }

// div(10,2)

//higher order function 
// function which accept another function as parameter

//callback function
//function which is passed as argument to another function

// function hof(name, clb){
//     console.log(name);
//     console.log(clb());
    
// }

// function callback(){
//     console.log("I am from callback function");
    
// }

// hof("simpi",callback)

// //arrow functions
// // shorter way to create functions
// // no need to use function keyword

// let multiply = (a,b)=>{
//     console.log(a*b);
    
// }
// multiply(3,4)

// if arrow function is accepting only one parameter, no need to write round braces
// if arrow function contains only one statement inside it we can keep paranthensis
//if arrow functions contain only 1 statement ans we should not use curly bracket then only arrow function can return values implicitly

// let mult = a=> console.log(a*2);

// mult(4)

// //explicit return
// function add(a,b){
//     return a+b;
// }

// console.log(add(4,5));

// //implicit return - only possible for arrow functions
// const mult = (a,b)=>(
//     a*b
// )
// console.log(mult(5,7));

// //nested function

// function parent(name,city){
//     console.log(name);

//     function child(){
//         console.log(city);
        
//     }
//     child()
    
// }

// parent('simpi','jalandhar')

//closures - it is object and its created only for those variable which are used inside the inner function, not all
// console.log("start");

// function p1(name,city){

//     console.log(name);
//     function c1(){
//         console.log(city);
        
//     }
//     c1()
// }

// p1("rishi","bangalore m hai mera pyaarrrrrrrrrrrrrrrr") 

// console.log("end");

// console.log("start");

// function outer(){
//     let outerVar = "I am from outer scope"

//     function inner(){
//         console.log(outerVar);
//         outerVar = "updated";
        
//     }
//     return inner;
// }

// const myClosure = outer();
// myClosure()
// myClosure()

// console.log("end")

// console.log("Start")
// //function curring
// function outer(a){
//     let name = "simpi";

//     return function inner(b){
//         console.log(name);
        
//         return function innerMost(c){
//             console.log("I am inner most function");
//             console.log(a +b + c);
//         }
//     }
// }

// outer(10)(20)(30)


//function curring in arrow functions

// let mult = (a)=>(b)=>(c)=> a*b*c;

// let res = mult(10)(20)(30)

// console.log(res);


