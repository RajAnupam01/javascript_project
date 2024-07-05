let item = document.querySelector("#items")
let ybtn = document.querySelector("#yesbtn");
let nbtn = document.querySelector("#nobtn");



ybtn.addEventListener('click',function(){
    item.style.visibility ='hidden'
    
})


nbtn.addEventListener('click',function() {
    if (item.style.flexDirection === 'column') {
        item.style.flexDirection = 'column-reverse';
    } else {
        item.style.flexDirection = 'column';
    }
    
})