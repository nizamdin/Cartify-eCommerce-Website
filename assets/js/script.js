'use strict';

// modal variables
const modal = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('[data-modal-close]');
const modalCloseOverlay = document.querySelector('[data-modal-overlay]');

// modal function
const modalCloseFunc = function () { modal.classList.add('closed') }

// modal eventListener
modalCloseOverlay.addEventListener('click', modalCloseFunc);
modalCloseBtn.addEventListener('click', modalCloseFunc);





// notification toast variables
const notificationToast = document.querySelector('[data-toast]');
const toastCloseBtn = document.querySelector('[data-toast-close]');

// notification toast eventListener
toastCloseBtn.addEventListener('click', function () {
  notificationToast.classList.add('closed');
});





// mobile menu variables
const mobileMenuOpenBtn = document.querySelectorAll('[data-mobile-menu-open-btn]');
const mobileMenu = document.querySelectorAll('[data-mobile-menu]');
const mobileMenuCloseBtn = document.querySelectorAll('[data-mobile-menu-close-btn]');
const overlay = document.querySelector('[data-overlay]');

for (let i = 0; i < mobileMenuOpenBtn.length; i++) {

  // mobile menu function
  const mobileMenuCloseFunc = function () {
    mobileMenu[i].classList.remove('active');
    overlay.classList.remove('active');
  }

  mobileMenuOpenBtn[i].addEventListener('click', function () {
    mobileMenu[i].classList.add('active');
    overlay.classList.add('active');
  });

  mobileMenuCloseBtn[i].addEventListener('click', mobileMenuCloseFunc);
  overlay.addEventListener('click', mobileMenuCloseFunc);

}





// accordion variables
const accordionBtn = document.querySelectorAll('[data-accordion-btn]');
const accordion = document.querySelectorAll('[data-accordion]');

for (let i = 0; i < accordionBtn.length; i++) {

  accordionBtn[i].addEventListener('click', function () {

    const clickedBtn = this.nextElementSibling.classList.contains('active');

    for (let i = 0; i < accordion.length; i++) {

      if (clickedBtn) break;

      if (accordion[i].classList.contains('active')) {

        accordion[i].classList.remove('active');
        accordionBtn[i].classList.remove('active');

      }

    }

    this.nextElementSibling.classList.toggle('active');
    this.classList.toggle('active');

  });

}



// Banner slide show 


let slideIndex = 0;
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
  let slides = document.getElementsByClassName("banner-img");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";

  {
    let i;
    let slides = document.getElementsByClassName("banner-img");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 6000); // Change image every 6 seconds
  }

}


// Set the date we're counting down to for FEATURED PRODUCT 1

var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (600 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id=""
  document.getElementById("days-1").innerHTML = days + "d ";
  document.getElementById("hour-1").innerHTML = hours + "h ";
  document.getElementById("min-1").innerHTML = minutes + "m ";
  document.getElementById("sec-1").innerHTML = seconds + "s ";





  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days-1").innerHTML = "EXPIRED";
    document.getElementById("hour-1").innerHTML = "EXPIRED";
    document.getElementById("min-1").innerHTML = "EXPIRED";
    document.getElementById("sec-1").innerHTML = "EXPIRED";
  }
}, 1000);



// Set the date we're counting down to for FEATURED PRODUCT 2

var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (500 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id=""
  document.getElementById("days-2").innerHTML = days + "d ";
  document.getElementById("hour-2").innerHTML = hours + "h ";
  document.getElementById("min-2").innerHTML = minutes + "m ";
  document.getElementById("sec-2").innerHTML = seconds + "s ";





  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days-2").innerHTML = "EXPIRED";
    document.getElementById("hour-2").innerHTML = "EXPIRED";
    document.getElementById("min-2").innerHTML = "EXPIRED";
    document.getElementById("sec-2").innerHTML = "EXPIRED";
  }
}, 1000);

// Set the date we're counting down to for FEATURED PRODUCT 3

var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (700 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id=""
  document.getElementById("days-3").innerHTML = days + "d ";
  document.getElementById("hour-3").innerHTML = hours + "h ";
  document.getElementById("min-3").innerHTML = minutes + "m ";
  document.getElementById("sec-3").innerHTML = seconds + "s ";





  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days-3").innerHTML = "EXPIRED";
    document.getElementById("hour-3").innerHTML = "EXPIRED";
    document.getElementById("min-3").innerHTML = "EXPIRED";
    document.getElementById("sec-3").innerHTML = "EXPIRED";
  }
}, 1000);



// Set the date we're counting down to for FEATURED PRODUCT 4

var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (600 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id=""
  document.getElementById("days-4").innerHTML = days + "d ";
  document.getElementById("hour-4").innerHTML = hours + "h ";
  document.getElementById("min-4").innerHTML = minutes + "m ";
  document.getElementById("sec-4").innerHTML = seconds + "s ";





  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days-4").innerHTML = "EXPIRED";
    document.getElementById("hour-4").innerHTML = "EXPIRED";
    document.getElementById("min-4").innerHTML = "EXPIRED";
    document.getElementById("sec-4").innerHTML = "EXPIRED";
  }
}, 1000);
