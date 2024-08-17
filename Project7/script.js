const jokeContainer = document.querySelector("#joke");
const btn = document.querySelector("#btn");

const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious,political,racist,sexist,explicit&type=single";

btn.addEventListener('click', getJoke);

function getJoke() {
    jokeContainer.classList.remove("fade");
    
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Check if the joke property exists in the response
            if (data.joke) {
                jokeContainer.textContent = data.joke;
            } else {
                throw new Error('Joke property is missing in the response');
            }
            jokeContainer.classList.add("fade");
        })
        .catch(error => {
            console.error('Error:', error);
            jokeContainer.textContent = 'Sorry, there was an error fetching the joke.';
            jokeContainer.classList.add("fade");
        });
}



