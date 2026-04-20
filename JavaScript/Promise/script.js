//Promise
//it is an object
//which represents eventual compilation or failure of an asynchronous task

//3 states
//pending
//fulfilled
//rejected

let myPromise = new Promise((res,rej)=>{
    let pizzaReady = false;

    if(pizzaReady){
        res("Pizza is ready")
    }else{
        rej("Pizza not ready")
    }
})

console.log(myPromise);

myPromise.then(t=>console.log(t)).catch(c=>console.log(c)).finally(()=>console.log("finally"));

