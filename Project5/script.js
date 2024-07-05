let slides = document.querySelectorAll(".slides");
let counter = 0;

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

function slider(){
  slides.forEach( slide => {
    slide.style.transform = `translateX(-${counter*100}%)`
  })
}

function nextbtn(){
  counter++;
  if(counter==slides.length){
    counter=0;
  }
  slider()
}

function prevbtn() {
  counter--;
  if(counter== -1){
    counter==slider.length-1
  }
  slider()
}

document.querySelectorAll("#next").onclick=nextbtn;
setInterval(nextbtn, 3000);