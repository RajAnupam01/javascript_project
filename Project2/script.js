let btn = document.querySelector(".btn")
let inpt = document.querySelector(".inpt")
let txt = document.querySelector(".text")

btn.addEventListener('click', handleFunc);

function handleFunc() {
    if (inpt.value == "") {
        alert("empty")
    }
    else {

        let newElement = document.createElement("ul");
        newElement.innerHTML = `${inpt.value} <i class="fa-solid fa-trash"></i>`;
        inpt.value = "";
        txt.append(newElement)

        let trash = newElement.querySelector(".fa-trash")
        trash.addEventListener('click', function () {
            txt.removeChild(newElement)
        })
    }
}





