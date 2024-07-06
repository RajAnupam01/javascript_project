let containers = document.querySelectorAll(".container");
let showsitem = document.querySelectorAll(".show");
let hideitem  = document.querySelectorAll('.hide');


containers.forEach((contanier,index)=>{
     contanier.addEventListener('click',function(){
     let isActive = contanier.classList.toggle('active');

        if(isActive == true){
            showsitem[index].style.display="none";
            hideitem[index].style.display="block"
        }
        else{
            showsitem[index].style.display="block";
            hideitem[index].style.display="none";
        }
     })
   
})












