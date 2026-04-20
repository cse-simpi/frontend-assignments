function greet(){
            alert("Button clicked")
        }

let form = document.getElementById("form");
let userName = document.getElementById("userName")
let email = document.getElementById("email");
let pass = document.getElementById("password")
//let container = document.getElementById("container")
let content = document.getElementById("content")

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    confirm("Are you sure you want to submit the page")
    //container.innerText = `UserName: ${userName.value} Email: ${email.value} Password: ${pass.value}`
    content.innerText = userName.value;
})

content.addEventListener("click",()=>{
    content.style.textDecoration= "line-through"
})
