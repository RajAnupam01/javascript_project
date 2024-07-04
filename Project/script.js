let btn = document.querySelector("#btn");

let result = document.querySelector("#result");

btn.addEventListener('click', function () {

   setTimeout(() => {
      let array = ['Head', 'Tail'];
      let random = Math.floor(Math.random() * array.length);
      result.innerHTML = array[random];
   }, 2000);

   result.innerHTML=""
});


