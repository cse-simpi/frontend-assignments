//DOM - Document Object Model api provided by browser


// document.getElementById("")

// if we are giving two elements same id -> it will choose the first one
// let h1 = document.getElementById("heading");
// h1.innerHTML = "Hi"
// console.log(h1);

// let para = document.getElementsByClassName("para") // return html collection
// console.log(para);


// let tag = document.getElementsByTagName("div")
// console.log(tag);


// let names = document.getElementsByName("start")// return node list 
// console.log(names);

//html collection vs node list
//-> only tag in html collection
// its live means sync with DOM

//querySelector()
// only gives first occrrence

// let para1 = document.querySelector(".para")
// console.log(para1);

// let head1 = document.querySelector("#heading")
// console.log("Child nodes ", h1.childNodes);

// console.log(head1);

// console.log(document.querySelectorAll(".para"))

//createElement

// let div = document.createElement("div")
// document.body.append(div)
// div.innerHTML = "<h1>Hello world</h1>"

// // div.innerText = "<h1>Hello World</h1>" // it will render tags as text

// let para = document.createElement("p");
// div.append(para);

// para.innerText = "hello i am a paragraph";
// console.log(div)

//css manipulation

// let main = document.createElement("main");
// let section = document.createElement("section")
// let article = document.createElement("article")
// document.body.append(main);
// main.append(section);
// main.append(article);

//append - multiple elements,
//append child - single element, do not accept strings, only nodes, it will move node if already exists

//class list = add(), remove(), toggle()

// let btn = document.getElementById("btn")

// btn.addEventListener("click",()=>{
//     document.body.classList.toggle("dark");

//     //class is present or not
//     console.log(document.body.classList.contains("dark"));
    
//     document.body.classList.contains("dark") ? (btn.innerText = "Light") : (btn.innerText = "Dark")
// })


let head = document.getElementById("heading")
console.log(head);

//head.innerText = "<div>hello</div>"
//head.innerHTML = "<div>Hello</div>"

// console.log(head.innerText)
// console.log(head.textContent)

// let h = document.getElementsByName("head")
// console.log(h);

let parent = document.querySelectorAll("#parent");
console.log(parent.children);
//console.log(parent[0].childNodes);


