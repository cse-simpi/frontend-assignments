// console.log("start");

// for(let i = 0; i < 6000; i++)
// {
//     console.log(i);
    
// }

// console.log("end");

// console.log("start");
// //executes only once
// setTimeout(()=>{
//     console.log("hello");
    
// },1000) 

// setInterval(()=>{
//     console.log("hello from setInterval");
    
// },1000) 
// console.log("end");

// const greet = setInterval(()=>{
//     console.log("hello");
    
// },1000)

// setTimeout(()=>{
//     // clearInterval(greet);
//     clearTimeout(greet)
// },5000)

// async and await

// async function getData(){
//     const res =  await fetch("https://dummyjson.com/test");
//     console.log(res);
//     const data = await res.json();
//     console.log(data);
    
// }

// getData()

//json
//data types not allowed in json - bigint => throws error, functions, undefined => removed, NaN, Infinity => null
//NaN => type is number and Number.Nan() != Number.NaN()
//Infinity is also number


// const person = {
//     name:"abc",
//     age: 40,
//     isMarried: true,
//     skills : ['js','ts','java'],
//     greet : function(){
//         console.log("hello everyone i am abc");
        
//     },
//     address : {
//         pin : 123456,
//         country : 'Myanmar'
//     },
//     kids : undefined,
//     ex : null,
//     //salary : 987654321n

//     }

//     console.log(person);
//     const res = JSON.stringify(person)
//     console.log(res);

//     const backToObject = JSON.parse(res)
//     console.log(backToObject);
    
    