var slideIndex = 0;
showSlides(slideIndex);

function prvsslide(n) {
  showSlides(slideIndex += n);
}

function nextslide(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
const slides=document.getElementsByClassName('slides')
if(slideIndex < 0){slideIndex=(slides.length-1)}
if(slideIndex > (slides.length-1)){slideIndex=0}
for(i=0;i<slides.length;i++){
  slides[i].style.display="none"
}
slides[slideIndex].style.display="block"
}

