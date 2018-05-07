document.onkeydown = checkKey;

function checkKey(e) {
    e = e || window.event;

    if (e.keyCode == '38') {
        plusSlides(1);
    }
    else if (e.keyCode == '40') {
        plusSlides(-1);
    }
    else if (e.keyCode == '37') {
       plusSlides(-1);
    }
    else if (e.keyCode == '39') {
       plusSlides(1);
    }
}

var slideIndex = 1;
showSlide(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlide(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlide(slideIndex = n);
}

function showSlide() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
    }
    if (slideIndex > slides.length) {slideIndex = 1}
    if (slideIndex < 1) {slideIndex = slides.length}
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}
