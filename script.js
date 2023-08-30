const carousel = document.querySelector(".carousel");
const nextButton = document.querySelector(".right-btn");
const previousButton = document.querySelector(".left-btn")

const slides = [...carousel.children];

let slidewidth = slides[0].getBoundingClientRect().width;

      
      //loop and add funtion to the slide
function postionSlides(slides) {
    for(let i = 0; i < slides.length; i++){
        slides[i].style.left = slidewidth * i + "px";
      }  
}

postionSlides(slides);



//activate the right button


nextButton.addEventListener("click", function(){
    const currentSlide = carousel.querySelector(".active");
    const nextSlide = currentSlide.nextElementSibling;
    
    moveToSlide (carousel, currentSlide, nextSlide)
}) 

previousButton.addEventListener("click", function(){
    const currentSlide = carousel.querySelector(".active");
    const previousSlide = currentSlide.previousElementSibling;
    
    moveToSlide (carousel, currentSlide, previousSlide)
}) 



function moveToSlide (carousel, currentSlide, targetSlide){
    const position = targetSlide.style.left
    carousel.style.transform = `translatex(-${position})`;
    currentSlide.classList.remove("active");
    targetSlide.classList.add("active");
}