let btn1 = document.getElementById("btn1");
let btn = document.getElementById("btn")
let inp = document.getElementById("text")
let list = document.getElementById("list")
let container = document.getElementById("container")

let editTarget = null;

btn1.addEventListener("click", () => {
    container.classList.remove("hide")
})
btn.addEventListener("click", () => {

    btn.textContent = "Add"
    const text = inp.value;
    if (text.length > 0) {
        if (editTarget == null) {
            
            const newItem = document.createElement("li");
            const removeItem = document.createElement("button");
            const updateItem = document.createElement("button");


            removeItem.innerText = "Remove Item";
            updateItem.innerHTML = "Update Item";

            removeItem.classList.add("btn")
            updateItem.classList.add("btn")

            newItem.innerText = text;
            newItem.append(removeItem)
            newItem.append(updateItem)

            list.append(newItem);

            removeItem.addEventListener("click", () => {
                // newItem.style.textDecoration="line-through"
                newItem.remove();
            })

            updateItem.addEventListener("click", () => {
                btn.textContent = "Update"
                inp.value = newItem.firstChild.textContent;

                editTarget = newItem;
            })
        }
        else {
            
            editTarget.firstChild.textContent = text
            
            editTarget = null
        }



        inp.value = ""

    }

})