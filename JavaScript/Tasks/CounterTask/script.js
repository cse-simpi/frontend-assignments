let count = 0;

let counter = document.getElementById("heading")

counter.innerText = "Count " + count;

function increment(){
    count = count+1;
    counter.innerText = "Count " + count;
}

function decrement(){
    count = count-1;
    counter.innerText = "Count " + count;
}

function reset(){
    count = 0;
    counter.innerText = "Count " + count;
}