function showprevious(id) {
  document.getElementById(id).scrollBy({
    left: -500,
    behavior: "smooth"
  });
}

function shownext(id) {
  document.getElementById(id).scrollBy({
    left: 500,
    behavior: "smooth"
  });
}

let index = 0;
const bgImages = ["url(front1.jpg)", "url(front2.jpg)", "url(front3.jpg)", "url(front4.jpg)", "url(front5.jpg)"];
let box = document.querySelector('.hero-section');
box.style.backgroundImage = "linear-gradient(to bottom, transparent 50%, #e2e7e6 100%)," + bgImages[index];

function previous() {
  if (index === 0) {
    index = 5;
    box.style.backgroundImage = "linear-gradient(to bottom, transparent 50%, #e2e7e6 100%)," + bgImages[index];
  }
  index--;
  box.style.backgroundImage = "linear-gradient(to bottom, transparent 50%, #e2e7e6 100%)," + bgImages[index];
}

function next() {
  if (index === 5) {
    index = 0;
    box.style.backgroundImage = "linear-gradient(to bottom, transparent 50%, #e2e7e6 100%)," + bgImages[index];
  }
  else {
    index++;
    box.style.backgroundImage = "linear-gradient(to bottom, transparent 50%, #e2e7e6 100%)," + bgImages[index];
  }
}

function showcostume(showimage) {
  document.getElementById("main-costume").src = showimage;
  if (showimage == 'costume1.jpg') {
    document.querySelector('.price-name').innerHTML = 'Melissa & Doug Doctor Role Play Costume Dress-Up Set (7 pcs) Frustration-Free Packaging';
    document.querySelector('.main').innerHTML = '6807';
    document.querySelector('.decimal').innerHTML = '16';
    document.querySelector('.old').innerHTML = 'List: PKR11,914.66';
  }
  else if (showimage == 'costume2.jpg') {
    document.querySelector('.price-name').innerHTML = 'Melissa & Doug Dress-Up Tiaras for Costume Role Play (4 pcs)';
    document.querySelector('.main').innerHTML = '3958';
    document.querySelector('.decimal').innerHTML = '31';
    document.querySelector('.old').innerHTML = '';
  }
  else if (showimage == 'costume3.jpg') {
    document.querySelector('.price-name').innerHTML = 'Liberty Imports 10 PCs Fireman Gear Firefighter Costume Role Play Career Dress U…';
    document.querySelector('.main').innerHTML = '6807';
    document.querySelector('.decimal').innerHTML = '16';
    document.querySelector('.old').innerHTML = '';
  }
  else if (showimage == 'costume4.jpg') {
    document.querySelector('.price-name').innerHTML = 'PJ Masks Gecko Costume for Toddlers, Official PJ Masks Costume Jumpsuit';
    document.querySelector('.main').innerHTML = '9417';
    document.querySelector('.decimal').innerHTML = '66';
    document.querySelector('.old').innerHTML = 'List: PKR11,630.91';
  }
}

document.getElementById("topBtn").addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
