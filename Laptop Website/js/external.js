//navigation bar clickable dropdown

let dropdownBtn = document.getElementById("dropdown");
let mydrop = document.querySelector(".dropdown-content");

dropdownBtn.addEventListener("click", () => {

    mydrop.classList.toggle("dropshow");

});

window.addEventListener("click", (event) => {

    if (!event.target.matches("#dropdown")) {



        if (mydrop.classList.contains("dropshow")) {
            mydrop.classList.remove("dropshow");

        }


    }

});


// navigation bar menu
let iconBar = document.querySelector(".icon");
let navigation = document.querySelector("header nav");

iconBar.addEventListener("click", () => {

    navigation.classList.toggle("menushow");


});


// slider gallery


const carouselSlide = document.querySelector(".carousel-slider");
const carouselImg = document.querySelectorAll(".carousel-slider img");

const prev = document.getElementById("prevBtn");
const next = document.getElementById("nextBtn");

let counter = 1;
const size = carouselImg[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

next.addEventListener("click", () => {
    if (counter >= carouselImg.length - 1)
        return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;

    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});


prev.addEventListener("click", () => {
    if (counter <= 0)
        return;

    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;

    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});


carouselSlide.addEventListener("transitionend", () => {

    if (carouselImg[counter].id === 'lastClone') {
        carouselSlide.style.transition = "none";
        counter = carouselImg.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if (carouselImg[counter].id === 'firstClone') {
        carouselSlide.style.transition = "none";
        counter = carouselImg.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }



});


let accordion = document.querySelectorAll(".tertiary-section .accordion");

for (let i = 0; i < accordion.length; i++) {

    accordion[i].addEventListener("click", function() {


        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }



    });


}

// var acc = document.querySelectorAll(".tertiary-section .accordion");
// var i;

// for (i = 0; i < acc.length; i++) {
//     acc[i].addEventListener("click", function() {
//         /* Toggle between adding and removing the "active" class,
//         to highlight the button that controls the panel */
//         this.classList.toggle("active");

//         /* Toggle between hiding and showing the active panel */
//         var panel = this.nextElementSibling;
//         if (panel.style.display === "block") {
//             panel.style.display = "none";
//         } else {
//             panel.style.display = "block";
//         }
//     });
// }