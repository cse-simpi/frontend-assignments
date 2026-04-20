// console.log("good morning India");
// console.log("Hello");

// type inference
//automatically ts detects which type of variable based on alue which you store inside vairable
// let a = 10;
// a = 20;

// // type inference does not work for undefined and null(type any)
// let marks = undefined; // it can have any value

// marks = "abc"
// marks = 10

// let child = null;
// child = 1;
// child = "xyz"

//type annotation - expilicitly tell what we want to store

// let userName: string ='';

//not possible
//userName = 123;


//not possible
// let a : null= undefined;
// a  =20

// let a : undefined = undefined;

// console.log(a);

// //functions

// function add(a : number,b: number): number{
//     //console.log(a+b);
//     return a+b
// }

// const b = add(10,20)
// console.log("Addition : " ,b)

// let a : number = 25;
// console.log(a);

// //void function 
// function fun(): void{
//     console.log("This is a function");
    
// }

// fun()

// //arguments with functions

// function add1(a:number, b: number, c ?: number): number{
//     return a + b;
// }

// console.log(add1(1,2));

// //function accepting one parameter of n types 
// //union
// //type narrowing

// function userId(a : number| string | null) : void{
//     console.log(a);
    
//     if(typeof a === 'string'){
//         console.log(a.toUpperCase());
        
//     }else console.log(a);
    
// }

// userId("simpi")

//Array

// let arr = [10,'simpi',true]
// console.log(arr);

//gives error
// let arr : string[] = [10,20,"simpi"]


//array having single datatype
// let arr : string[] = ["Rishi","Bangalore"]
// console.log(arr);

// //array having multiple datatypes

// let arr1 : (string| number)[] = [12,"Rishi","Simpi"]
// console.log(arr1);


//readonly

// let arr2 : readonly string[] = ['a','b','v'];

// console.log(arr2);

//not possible
//arr2.push_back('e')


//tuple

//follows order, fixed in size
//let person : [string,number,boolean] = [23,"simpi",true]

// let person : [string,number,boolean] = ["simpi",23,true]
// console.log(person);

// console.log(typeof person);//object

//object

// let person = {
//     userName : 'simpi',
//     marks : 23
// }

// console.log(person);

//typesafety with objects

// let person : {
//     readonly name : string;
//     marks : number;
//     address : {
//         city : string;
//         pin? : number;
//     }
// }={
//     name : "Rishi",
//     marks : 100,
//     address : {
//         city : "Bangalore"
//     }
// }

//not possible
//person.name = "abc";
// console.log(person);


// type Alias

//type d = number;

//not possible
//let aadhar : d = "potato"


//union in type alias

// type order = 'pending' | 'accepted' | 'rejected' | 1234;

// let myOrder : order = 1234
// console.log(myOrder);


//alias in arrays

// type marksType = number[]

// let marks : marksType = [1,2,43]

//alias in object

// type student = {
//     username : string;
//     age : number;
//     isPass ?: boolean
// }

// let Rishi : student = {
//     username : "rishig",
//     age : 25,
//     isPass : true
// }

// console.log(Rishi);
 
// intersecton with alias

// type student = {
//     name : string
// }

// type intern = {
//     salary : number
// }

// type employee = student & intern;

// let newJoinee : employee = {
//     name :"Simpi",
//     salary : 25
// }

// console.log(newJoinee);

//unknown
// must do type narrowing before applyng specific functions

// let a : unknown;
//  a = 10;
//  a = 'potato'

//  if(typeof a === "string"){
//     console.log(a.toUpperCase());
    
//  }

//  //any
//  // it trusts us
//  let b : any;
// b = 10;

// // so it crashes at run time
// console.log(b.toUpperCase());


//interface => only for object
// cannot represent primitives
// can we declared multiple times will be merged automatically
//uses extends keyword to use another interface
// type alias use &

// interface person{
//     userName : string,
//     marks : number,
//     address : {
//         country : string,
//         pin : number
//     }
// }


// let employee : person= {
//     userName : 'Rishi',
//     marks : 45,
//     address : {
//         country : "India",
//         pin : 123456
//     }
// }

// console.log(employee);


// never

//it returns nothing, either throwing error or running infinite function
// void does return undefined