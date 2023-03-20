function openNav() {
    var x = document.getElementById("links");
    var y = document.getElementById("open");
    var z =document.getElementById("close")
    if (x.style.display === "block") {
        x.style.display = "none";
       
    } 
    else {
        x.style.display = "block";
        y.style.display = "none";
        z.style.display = "block";
    }
}
function closeNav() {
    var x = document.getElementById("links");
    var y = document.getElementById("open");
    var z =document.getElementById("close")
    if (x.style.display === "block") {
        x.style.display = "none";
        z.style.display = "none";
        y.style.display = "block";
    } 
}



var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
    }
    x[slideIndex-1].style.display = "block";  
}




//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
