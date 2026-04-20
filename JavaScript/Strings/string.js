// let userName = "abc";
// console.log(userName)


// //length
// console.log(userName.length)

// //toUpperCase()
// console.log("i".toLocaleUpperCase('tr-TR'));

// //toLowerCase()
// console.log("ABC".toLowerCase())

// //replace
// let loc = "punjab"

// let replace = loc.replace('p','y');
// console.log(replace);

// //replaceall

// let rep = "simpi".replaceAll("i","d");
// console.log(rep);

// //trimEnd

// let s = "i am from LPU  ";
// let removed = s.trimEnd();
// console.log(removed);

// //trimStart

// let j = "  i am from LPU";
// let rmStart = s.trimStart();
// console.log(rmStart);

// //trim

// let t = "   i am from LPU   ";
// let rm = t.trim();
// console.log(rm);


//substring

let info = "I am from.punjab";
console.log(info);

let sub = info.substring(5,9);
console.log(sub);

let sub1 = info.substring(10,234);
console.log(sub1);

//slice

let part1 = info.slice(5,9);
console.log("part1 " + part1);

//diff between slice and substring

let part2 = info.slice(-6,2);
console.log("part2 " + part2);

let part3 = info.substring(-2);
console.log("part3 " + part3);

//split

let res = info.split("");
console.log("splitted " + res);


//concat

let firstName = "Apple";
let secondName = "Banana";

console.log(firstName.concat(" ",secondName," " ,"Mango"));


