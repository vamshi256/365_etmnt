//slide show
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

// search box
const srch = document.getElementById('search')
var mvnms = document.getElementsByTagName('h3')
var mvblck = document.getElementsByClassName('actmvcd')
const notfound = document.getElementById('notfound')
notfound.style.display="none"

srch.addEventListener("keyup", event => {
  let temp=1;
  var search = event.target.value
  var gnstrlen = search.length
  for(i=0;i<mvnms.length;i++){
  var mvnm = mvnms[i].textContent
  if(search.toLowerCase() == mvnm.slice(0,gnstrlen).toLowerCase() ){
  mvblck[i].style.display = "inline-block"
  temp=0;
  }
  else{
  mvblck[i].style.display = "none"
  }
  }
  if(temp==1)
  {
    notfound.style.display="block"
  }
  else{
    notfound.style.display="none"
  }
});

// gener search
function genersearch(n){
  var gener=n
  var mvblck = document.querySelectorAll(gener)
  const generbtn = document.getElementsByClassName('dropbtn')
  var noncds = document.getElementsByClassName('actmvcd')
  for(i=0;i<noncds.length;i++)
  {
    noncds[i].style.display="none"
  }
  for(i=0;i<mvblck.length;i++)
  {
    mvblck[i].style.display="inline-block"
  }
  
}