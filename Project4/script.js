

let btnOn = document.querySelector("#btnOn");
btnOn.addEventListener('click',function(){
      document.querySelector(".img").src="on.jpg"
      document.querySelector(".text").innerHTML="The bulb is On"

})



let btnOff = document.querySelector("#btnOff");
btnOff.addEventListener('click',function(){
    document.querySelector(".img").src="off.jpg"
    document.querySelector(".text").innerHTML="The bulb is Off"

})