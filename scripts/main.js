const kilogramInput = document.querySelector("#kilogram");
const selectInput = document.querySelector("#planet-input");
const inputButton = document.querySelector("#input-btn");
const errorSection = document.querySelector(".error-section");
const errorText = document.querySelector(".error-section__text");
const imageSection = document.querySelector(".image-section");
const imageInfoSec = document.querySelector(".image-info__section");
const planetName = document.querySelector(".planet-name");
const weightText = document.querySelector(".weight-number");
const planetImg = document.querySelector(".planet-img");



inputButton.addEventListener('click',function(event){
  event.preventDefault();

  if(isNaN(parseFloat(kilogramInput.value)) || parseFloat(kilogramInput.value)<0 || !parseFloat(kilogramInput.value)){
    imageSection.style.display = 'none';
    errorSection.style.display = 'block';
    errorText.textContent = 'Enter correct value!!!'
  }

  if(selectInput.value === 'empty'){
    imageSection.style.display = 'none';
    errorSection.style.display = 'block';
    errorText.textContent = 'Select one planet!!!'
  }

  else if(kilogramInput.value>0 && selectInput.value !== 'empty'){
    imageSection.style.display = 'flex';
    errorSection.style.display = 'none';
    imageInfoSec.style.display = 'flex';

    planetImg.src = `./images/${selectInput.value}.png`;

    planetName.textContent = selectInput.value.toUpperCase();

    if(selectInput.value === 'mercury'){
      weightText.textContent = kilogramInput.value*3.7;
    }

    if(selectInput.value === 'venus'){
      weightText.textContent = kilogramInput.value*8.9;
    }

    if(selectInput.value === 'earth'){
      weightText.textContent = kilogramInput.value*9.81;
    }

    if(selectInput.value === 'mars'){
      weightText.textContent = kilogramInput.value*	3.73;
    }

    if(selectInput.value === 'jupiter'){
      weightText.textContent = kilogramInput.value*	25.92;
    }

    if(selectInput.value === 'saturn'){
      weightText.textContent = kilogramInput.value*	10.44;
    }

    if(selectInput.value === 'uranus'){
      weightText.textContent = kilogramInput.value*	8.69;
    }

    if(selectInput.value === 'neptune'){
      weightText.textContent = kilogramInput.value*	13.3;
    }

    if(selectInput.value === 'pluto'){
      weightText.textContent = kilogramInput.value*	0.63;
    }

    if(selectInput.value === 'moon'){
      weightText.textContent = kilogramInput.value*	1.625;
    }

  }


})