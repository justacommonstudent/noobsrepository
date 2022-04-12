const backgroundSlide = document.querySelector(".background-slide");
const backgroundImages = document.querySelectorAll(".background-slide img");

const prevbtn = document.querySelector("#prevbtn");
const nextbtn = document.querySelector("#nextbtn");

let counter = 1;
const size = backgroundImages[0].clientWidth;

backgroundSlide.style.transform = "translateX(" + (-size * counter) + "px)";

nextbtn.addEventListener("click", ()=>{
    if(counter >= backgroundImages.length -1) return;
    backgroundSlide.style.transition = "transform 1s ease-in-out";
    counter++;
    backgroundSlide.style.transform = "translateX(" + (-size * counter) + "px)";
});

prevbtn.addEventListener("click", ()=>{
    if (counter <= 0) return;
    backgroundSlide.style.transition = "transform 1s ease-in-out";
    counter--;
    backgroundSlide.style.transform = "translateX(" + (-size * counter) + "px)";
});

backgroundSlide.addEventListener("transitionend", () => {
    if (backgroundImages[counter].id === "lastClone") {
        backgroundSlide.style.transition = "none";
        counter = backgroundImages.length -2 ;
        backgroundSlide.style.transform = "translateX(" + (-size * counter) + "px)";
    }
});

backgroundSlide.addEventListener("transitionend", () => {
    if (backgroundImages[counter].id === "firstClone") {
        backgroundSlide.style.transition = "none";
        counter = backgroundImages.length - counter ;
        backgroundSlide.style.transform = "translateX(" + (-size * counter) + "px)";
    }
});

var clic = 1;

function seeMoreLess(){ 

   if(clic==1){

   document.getElementById("container").style.display="block";

   clic = clic + 1;

   } else{

       document.getElementById("container").style.display = "none";      

    clic = 1;

   }   
}

function seeMoreLess2(){ 

   if(clic==1){

   document.getElementById("container2").style.display="block";

   clic = clic + 1;

   } else{

       document.getElementById("container2").style.display = "none";      

    clic = 1;

   }   
}

function seeMoreLess3(){ 

   if(clic==1){

   document.getElementById("container3").style.display="block";

   clic = clic + 1;

   } else{

       document.getElementById("container3").style.display = "none";      

    clic = 1;

   }   
}

function seeMoreLess4(){ 

    if(clic==1){
 
    document.getElementById("container4").style.display="block";
 
    clic = clic + 1;
 
    } else{
 
        document.getElementById("container4").style.display = "none";      
 
     clic = 1;
 
    }   
 }

 function seeMoreLess5(){ 

    if(clic==1){
 
    document.getElementById("container5").style.display="block";
 
    clic = clic + 1;
 
    } else{
 
        document.getElementById("container5").style.display = "none";      
 
     clic = 1;
 
    }   
 }

