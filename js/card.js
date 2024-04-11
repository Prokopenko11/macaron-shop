let numberOfCardDescriptionClicks1 = 0;
function countCardClicks1() {
  numberOfCardDescriptionClicks1 += 1;
}

function openCardDescription1() {
  document.getElementById("card-description1").addEventListener("click", countCardClicks1);
  countCardClicks1()
  let cardCheckDown = document.querySelector('.card-menu-item-check1');
  let cardCheckUp = document.querySelector('.card-menu-item-check-up1');
  let cardInformation = document.querySelector('.card-menu-item-information1');
  if (numberOfCardDescriptionClicks1 % 2 === 0) {
    cardCheckDown.style.display = 'block';
    cardCheckUp.style.display = 'none';
    cardInformation.style.display = 'none'
  } else {
    cardCheckDown.style.display = 'none';
    cardCheckUp.style.display = 'block';
    cardInformation.style.display = 'block'
  }
}
document.getElementById("open-card-description1").addEventListener("click", openCardDescription1);

let numberOfCardDescriptionClicks2 = 0;
function countCardClicks2() {
  numberOfCardDescriptionClicks2 += 1;
}

function openCardDescription2() {
  document.getElementById("card-description2").addEventListener("click", countCardClicks2);
  countCardClicks2()
  let cardCheckDown = document.querySelector('.card-menu-item-check2');
  let cardCheckUp = document.querySelector('.card-menu-item-check-up2');
  let cardInformation = document.querySelector('.card-menu-item-information2');
  if (numberOfCardDescriptionClicks2 % 2 === 0) {
    cardCheckDown.style.display = 'block';
    cardCheckUp.style.display = 'none';
    cardInformation.style.display = 'none'
  } else {
    cardCheckDown.style.display = 'none';
    cardCheckUp.style.display = 'block';
    cardInformation.style.display = 'block'
  }
}
document.getElementById("open-card-description2").addEventListener("click", openCardDescription2);

let numberOfCardDescriptionClicks3 = 0;
function countCardClicks3() {
  numberOfCardDescriptionClicks3 += 1;
}

function openCardDescription3() {
  document.getElementById("card-description3").addEventListener("click", countCardClicks3);
  countCardClicks3()
  let cardCheckDown = document.querySelector('.card-menu-item-check3');
  let cardCheckUp = document.querySelector('.card-menu-item-check-up3');
  let cardInformation = document.querySelector('.card-menu-item-information3');
  if (numberOfCardDescriptionClicks3 % 2 === 0) {
    cardCheckDown.style.display = 'block';
    cardCheckUp.style.display = 'none';
    cardInformation.style.display = 'none'
  } else {
    cardCheckDown.style.display = 'none';
    cardCheckUp.style.display = 'block';
    cardInformation.style.display = 'block'
  }
}
document.getElementById("open-card-description3").addEventListener("click", openCardDescription3);

let slides = document.querySelector('.card-slider-wrapper');
let slideWidth = document.querySelector('.card-slide').offsetWidth;
let currentSlideIndex = 0;

function showSlide(index) {
  if (index >= 0 && index < slides.children.length) {
    for (let i = 0; i < slides.children.length; i++) {
      if (i === index) {
        slides.children[i].style.display = 'flex';
      } else {
        slides.children[i].style.display = 'none';
      }
    }
    currentSlideIndex = index;
    updateDots();
  }
}

function nextSlide() {
  if (currentSlideIndex < slides.children.length - 1) {
    showSlide(currentSlideIndex + 1);
  }
}

function prevSlide() {
  if (currentSlideIndex > 0) {
    showSlide(currentSlideIndex - 1);
  }
}

function currentSlide(index) {
  showSlide(index);
}

function updateDots() {
  let dots = document.querySelectorAll('.card-slider-dot');
  dots.forEach((dot, index) => {
    if (index === currentSlideIndex) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

let startX;
let endX;

function handleTouchStart(event) {
  startX = event.touches[0].clientX;
}

function handleTouchEnd(event) {
  endX = event.changedTouches[0].clientX;
  let deltaX = startX - endX;

  if (deltaX > 50) {
    nextSlide();
  } else if (deltaX < -50) {
    prevSlide();
  }
}

slides.addEventListener('touchstart', handleTouchStart, false);
slides.addEventListener('touchend', handleTouchEnd, false);

showSlide(currentSlideIndex);

