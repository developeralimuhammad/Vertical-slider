const sliderContainer = document.querySelector(".slider-container");

const slideRight = document.querySelector(".right-slide");
const slideLeft = document.querySelector(".left-slide");

const upBtn = document.querySelector(".up-btn");
const downBtn = document.querySelector(".down-btn");

const SlidesLegth = slideLeft.querySelectorAll("div").length;

let activeSliderIndex = 0;

slideLeft.style.top = `-${(SlidesLegth - 1) * 100}vh`

//Add EventListener to the buttons//

upBtn.addEventListener('click', ()=> changeSlide("up"));
downBtn.addEventListener('click', ()=> changeSlide("down"));

const changeSlide = (direction) =>{
    const sliderHeight = sliderContainer.clientHeight;
    if(direction === "up"){
        activeSliderIndex++
        if(activeSliderIndex > SlidesLegth -1){
            activeSliderIndex = 0;
        }
    
    }else if(direction === "down"){
        activeSliderIndex--;
        if(activeSliderIndex < 0){
            activeSliderIndex = SlidesLegth - 1
        }
    }

    slideRight.style.transform = `translateY(-${activeSliderIndex * sliderHeight}px)`

    slideLeft.style.transform = `translateY(${activeSliderIndex * sliderHeight}px)`
}



