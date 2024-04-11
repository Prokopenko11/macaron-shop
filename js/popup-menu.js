let popup = document.querySelector('.menu-popup-wrapper');
let mask = document.querySelector('.menu-popup');
function openMenu() {
  popup.style.display = 'block';
  mask.style.display = 'block'
}
document.getElementById("open-button").addEventListener("click", openMenu);

function closeMenu() {
  popup.style.display = 'none';
  mask.style.display = 'none'
}
document.getElementById("close-button").addEventListener("click", closeMenu);

let numberOfClicks = 0;
function countAdressClicks() {
  numberOfClicks += 1;
}

function openAdress() {
  document.getElementById("adress").addEventListener("click", countAdressClicks);
  countAdressClicks();
  let adress = document.querySelector('.popup-adress-wrapper');
  if (numberOfClicks % 2 === 1) {
    adress.style.display = 'block';
  } else if (numberOfClicks % 2 === 0) {
    adress.style.display = 'none';
  }
}
document.getElementById("openAdress").addEventListener("click", openAdress);

let adresses = document.querySelectorAll('.popup-adress');
adresses.forEach(function(element) {
    element.addEventListener('click', function() {
        let adress = document.querySelector('.popup-adress-wrapper');
        let clickedId = element.id;
        let oldAdress = document.getElementById('main-adress');
        oldAdress.innerHTML = document.getElementById(clickedId).innerHTML;
        adress.style.display = 'none';
    });
});

let numberOfCatalogClicks = 0;
function countCatalogClicks() {
  numberOfCatalogClicks += 1;
}

function openCatalog() {
  document.getElementById("catalog").addEventListener("click", countCatalogClicks);
  countCatalogClicks();
  let catalog = document.querySelector('.menu-popup-catalog');
  if (numberOfCatalogClicks % 2 === 1) {
    catalog.style.display = 'block';
  } else if (numberOfCatalogClicks % 2 === 0) {
    catalog.style.display = 'none';
  }
}document.getElementById("openCatalog").addEventListener("click", openCatalog);