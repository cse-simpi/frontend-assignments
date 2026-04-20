//objects

let person = {
    name : "Rishi",
    city : "Bangalore",
    age : 25,
    isMarried : false,
    skills : ['React','Node.js','Postgresql'],
    greet: ()=>{
        console.log(`Hello ${this.name}`);
        
    }
}

console.log(person);

person.greet();

// person.city = "U.P";
// // delete person.age;
// console.log(person);

//seal() -> we cannot add or delete new properties

// //Object.seal(person)
// person.age = 26;
// //delete person.name;
// console.log(person)

// //freeze()
// Object.freeze(person)

// person.name = "simpi"
// console.log(person);

// //isFrozen() && isSealed()
// console.log(Object.isFrozen(person));
// console.log(Object.isSealed(person));


//keys() && values()
let keys = Object.keys(person)
console.log(keys);

let values = Object.values(person)
console.log(values);

// entries()
let entries = Object.entries(person)
console.log(entries);
