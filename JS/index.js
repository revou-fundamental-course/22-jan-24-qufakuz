navDiv = document.querySelector(".navDiv");
menu = document.querySelector("#menu");

form = document.querySelector("form");
nameInput = document.querySelector("#nameTxt");
emailInput = document.querySelector("#email");
sendBtn = document.querySelector("#sendBtn");
error =document.querySelector("#error");
//Menu Click
menu.addEventListener("click",() => {
    navDiv.classList.toggle("active");
   
})

document.addEventListener("click", function(i){
    if(!menu.contains(i.target) && !navDiv.contains(i.target)){
        navDiv.classList.remove("active");
    }
})

//form req
form.addEventListener("submit", (e)=>{
    switch(true){
        case(nameInput.value === ""  &&
        emailInput.value === "" ) :
        error.textContent = "Form must fill";
        break;
        case(nameInput.value === "" ) :
        error.textContent = "name must fill";
        break;
        case(emailInput.value === "" ) :
        error.textContent = "email must fill";
        break;

    }
    

    e.preventDefault();
});


//slide
image1 = document.querySelector("#image1");
person1 = document.querySelector("#person1");
image2 = document.querySelector("#image2");
person2 = document.querySelector("#person2");
image3 = document.querySelector("#image3");
person3 = document.querySelector("#person3");


slideImageSimple();

function slideImageSimple(){
    setTimeout(kobo1Del, 0);
    setTimeout(kobo2Del, 3000);
    setTimeout(kobo3Del, 6000);
    setTimeout(slideImageSimple, 9000);
}



function kobo1Del(){
    
    image1.style.display = "flex";
    person1.style.display = "flex";

    image1.style.animation = "fade-in 2s";
    person1.style.animation = "fade-in 2s";
    
    image2.style.display = "none";
    person2.style.display = "none";
    
    image3.style.display = "none";
    person3.style.display = "none";
   
}

function kobo2Del(){

    image1.style.display = "none";
    person1.style.display = "none";
    
    image2.style.display = "flex";
    person2.style.display = "flex";

    image2.style.animation = "fade-in 2s";
    person2.style.animation = "fade-in 2s";
    
    image3.style.display = "none";
    person3.style.display = "none";
}

function kobo3Del(){

    image1.style.display = "none";
    person1.style.display = "none";
    
    image2.style.display = "none";
    person2.style.display = "none";
    
    image3.style.display = "flex";
    person3.style.display = "flex";

    image3.style.animation = "fade-in 2s";
    person3.style.animation = "fade-in 2s";
}

