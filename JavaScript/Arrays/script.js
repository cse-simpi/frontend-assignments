// // Array

// let subjects = ["java","OS","Cloud",100,80,30]
// console.log(subjects);
// console.log(subjects[3]);

// subjects[4] = "400";
// console.log(subjects);


// //length
// console.log("Length " + subjects.length);

//methods

// let marks = [10,20,20,50];
// console.log(marks);

// //push()
// marks.push("simpi");
// console.log(marks);

// //shift()
// marks.shift();
// console.log("Shifted " + marks);


// //unshift()

// marks.unshift("Rishi","Simpi");
// console.log("unshift " + marks);

// //pop()
// marks.pop();
// console.log("Popped " + marks);


// //slice()
// let modifiedMarks = marks.slice(-5,-1);
// console.log("Sliced " + modifiedMarks);

// //splice()

// let spliced = marks.splice(-4,2,"56","abc","yes",true);
// console.log("spliced " + spliced);
// console.log("marks " + marks);//modifies the original array 

//concat()
// let students = ["Sham","Ram","Ramesh","Abhishek"]
// let marks = [12,45,6,4];

// let allData = students.concat(marks);
// console.log("All data: " + allData);

//reverse a string
// let userName = "simpi";
// let reversed = userName.split("").reverse().join("");

// console.log(reversed);


//map()
// let marks = [40,50,6,30,23]

// let a = marks.map(mark=>{
//     return mark*2
// }
//     )

//     console.log(a)

//filter()

// let marks = [10,40,30,20,50]

// console.log(marks);

// let topperMarks = marks.filter((mark)=> mark >= 30)

// console.log(topperMarks);
// console.log(marks);


//reduce()

// let marks = [10,20,30,40,50]

// let totalMarks = marks.reduce((acc,curr)=>{
//     return acc+curr;
// })

// console.log(totalMarks);


//typeof array

let marks = [10,20,30,40,50]

console.log(typeof marks);

let res = Array.isArray(marks)
console.log(res);



