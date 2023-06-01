var prevScrollpos = window.pageYOffset;
var tocPosition = window.pageYOffset;

function translateTOC() {
  // if wide layout do nothing
  if (document.getElementsByClassName("wide").length > 0){
    return;
  }
  var attributes = {};
  var currentWindowOffset = window.pageYOffset;
  var tocOffset = currentWindowOffset+50;
  // if bottom reached adjust the toc position
  // if (window.innerHeight){
  //   tocOffset = tocOffset - 50;
  // }
  attributes["translateY"] = "translateY("+tocOffset+"px)";
  var toc = document.getElementsByClassName("sidebar__right ")[0];

  toc.style.transform=attributes.translateY;
  toc.style.transition=" all 2s";
  }

window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
    document.getElementsByClassName("masthead")[0].style.top = "0";
    } else {
    document.getElementsByClassName("masthead")[0].style.top = "-5em";
    }
    prevScrollpos = currentScrollPos;
    // translateTOC();
}

window.onload = function(e){ 
  e.preventDefault();
  var activeElement = document.querySelectorAll('.active, .active-title');
  if (activeElement!==null && activeElement.length > 0){
    // get the current element Y position
    var elYPosition = activeElement[0].getBoundingClientRect().y;
    var scrollThreshold = window.screen.availHeight - 150;
    if (elYPosition > scrollThreshold){
      activeElement[0].scrollIntoView({block: 'center', behavior: "smooth"});
    }
  }
}


var slideIndex = 0;
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
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  if (slides.length>0){
    slides[slideIndex-1].style.display = "block";
  }
  if (dots.length>0){
    dots[slideIndex-1].className += " active";
  }
  
}

showSlidesAutomatically();

function showSlidesAutomatically() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    if (slides.length>0){
      slides[slideIndex-1].style.display = "block";
    }
    if (dots.length>0){
      dots[slideIndex-1].className += " active";
    }
    setTimeout(showSlidesAutomatically, 2000); // Change image every 2 seconds
  }