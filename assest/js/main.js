
let navlist = document.getElementById("navlist");
navlist.style.maxHeight = "0px";

function togglemenu() {
    if (navlist.style.maxHeight == "0px") {
        navlist.style.maxHeight = "180px";
    }
    else {
        navlist.style.maxHeight = "0px";
    }
}

// -----------------------------------------------
window.addEventListener("scroll", function(){
var navScroll = document.getElementById("nav");
navScroll.classList.toggle("fixed", window.scrollY > 20)
})
// ----------------------------------------------
// var slideIndex = 1;
// showDivs(slideIndex);

// function plusDivs(n) {
//   showDivs(slideIndex += n);
// }

// function showDivs(n) {
//   var i;
//   var x = document.getElementsByClassName("cards");
//   if (n > x.length) {slideIndex = 2}
//   if (n < 1) {slideIndex = x.length}
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";  
//   }
//   x[slideIndex-1].style.display = "block";  
// }

const aboutfood = document.querySelector('.aboutfood');
const content_box = document.querySelector('.content_box');
const iconClose = document.querySelector(".close_about");
const box = document.querySelector(".box");

// aboutfood.addEventListener('click', () => {
//   box.style.transform = "rotateY(180deg)";
// });

// iconClose.addEventListener('click', () => {
//   box.classList.add('active');
// });
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 