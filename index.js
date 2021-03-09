


let experience_info = document.getElementById("experience_info");
let studies_container = document.getElementById("studies_container");
let button = document.querySelector(".primary_btn");

let myName = function(){
  for(i=0; i < 100; i++){
    console.log("JulianaGonzalez");
  }
}

function   verEstudios(){
    experience_info.classList.toggle("hidde");
    studies_container.classList.toggle("hidde");    
    myName();
  }

