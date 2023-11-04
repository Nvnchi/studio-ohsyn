window.transitionToPage = function(href) {
  document.querySelector('body').style.opacity = 0
  setTimeout(function() { 
      window.location.href = href
  }, 500)
}

document.addEventListener('DOMContentLoaded', function(event) {
  document.querySelector('body').style.opacity = 1
})

function sidereveal() {
  var reveals = document.querySelectorAll(".sidereveallocation");
  var reveals2 = document.querySelectorAll(".sidereveallocation2");
  var reveals3 = document.querySelectorAll(".sidereveallocation2");
  var revealstest = document.querySelectorAll(".sidereveal");
  var revealsactive = document.querySelectorAll(".link")
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 600;

    if (elementTop < windowHeight - elementVisible) {
      revealstest[i].classList.add("active");
      revealsactive[i].classList.add("gradient");
      document.getElementById("hartje").src = "./images/hartje_gekleurd.svg"; // Change the image source to "hartje_gekleurd" in the if statement
    } else {
      revealstest[i].classList.remove("active");
      revealsactive[i].classList.add("gradient");
      document.getElementById("hartje").src = "./images/hartje_zwart.svg"; // Change the image source to "hartje_zwart" in the else statement
    }
  }
}
  
sidereveal()

window.addEventListener("scroll", sidereveal);


            