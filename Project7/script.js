const jokeContainer = document.querySelector("#joke")
const btn = document.querySelector("#btn")

const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious,political,racist,sexist,explicit&type=single"


btn.addEventListener('click',getJoke)

function getJoke(){
    jokeContainer.classList.remove("fade")
    fetch(url)
    .then(response => {
        return response.json();
    })
    .then(data =>{
        jokeContainer.textContent = `${data.joke}`
        jokeContainer.classList.add("fade")
    })
}


