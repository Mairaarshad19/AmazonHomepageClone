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
box.style.backgroundImage = "linear-gradient(to bottom, transparent 50%, #e2e7e6 100%),"+bgImages[index];

function previous() {
    if(index===0)
    {
        index=5;
        box.style.backgroundImage = "linear-gradient(to bottom, transparent 50%, #e2e7e6 100%),"+bgImages[index];
    }
    index--;
    box.style.backgroundImage = "linear-gradient(to bottom, transparent 50%, #e2e7e6 100%),"+bgImages[index];
}

function next() {
    if(index===5)
    {
        index=0;
        box.style.backgroundImage = "linear-gradient(to bottom, transparent 50%, #e2e7e6 100%),"+bgImages[index];
    }
    else{
    index++;
    box.style.backgroundImage = "linear-gradient(to bottom, transparent 50%, #e2e7e6 100%),"+bgImages[index];
    }
}
