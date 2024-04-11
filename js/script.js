let slides1 = document.querySelector('.offers-slider');
let slides2 = document.querySelector('.news-slider');
let slideWidth1 = document.querySelector('.slide').offsetWidth;
let slideWidth2 = document.querySelector('.news-slide').offsetWidth;
let currentSlideIndex1 = 0;
let currentSlideIndex2 = 0;

function showSlide1(index) {
  if (index >= 0 && index < slides1.children.length) {
    for (let i = 0; i < slides1.children.length; i++) {
      if (i === index) {
        slides1.children[i].style.display = 'block';
      } else {
        slides1.children[i].style.display = 'none';
      }
    }
    currentSlideIndex1 = index;
    updateDots1();
  }
}

function showSlide2(index) {
  if (index >= 0 && index < slides2.children.length) {
    for (let i = 0; i < slides2.children.length; i++) {
      if (i === index) {
        slides2.children[i].style.display = 'flex';
      } else {
        slides2.children[i].style.display = 'none';
      }
    }
    currentSlideIndex2 = index;
    updateDots2();
  }
}

function nextSlide1() {
  if (currentSlideIndex1 < slides1.children.length - 1) {
    showSlide1(currentSlideIndex1 + 1);
  }
}

function nextSlide2() {
  if (currentSlideIndex2 < slides2.children.length - 1) {
    showSlide2(currentSlideIndex2 + 1);
  }
}

function prevSlide1() {
  if (currentSlideIndex1 > 0) {
    showSlide1(currentSlideIndex1 - 1);
  }
}

function prevSlide2() {
  if (currentSlideIndex2 > 0) {
    showSlide2(currentSlideIndex2 - 1);
  }
}

function currentSlide1(index) {
  showSlide1(index);
}

function currentSlide2(index) {
  showSlide2(index);
}

function updateDots1() {
  let dots = document.querySelectorAll('.offers-dot');
  dots.forEach((dot, index) => {
    if (index === currentSlideIndex1) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

function updateDots2() {
  let dots = document.querySelectorAll('.news-dot');
  dots.forEach((dot, index) => {
    if (index === currentSlideIndex2) {
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
    nextSlide1();
    nextSlide2();
  } else if (deltaX < -50) {
    prevSlide1();
    prevSlide2();
  }
}

slides1.addEventListener('touchstart', handleTouchStart, false);
slides1.addEventListener('touchend', handleTouchEnd, false);
slides2.addEventListener('touchstart', handleTouchStart, false);
slides2.addEventListener('touchend', handleTouchEnd, false);

showSlide1(currentSlideIndex1);
showSlide2(currentSlideIndex2);

