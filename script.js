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
  var reveals3 = document.querySelectorAll(".sidereveallocation3");
  var revealstest = document.querySelectorAll(".sidereveal");
  var revealsactive = document.querySelectorAll(".link")
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementTop2 = reveals2[i].getBoundingClientRect().top;
    var elementTop3 = reveals3[i].getBoundingClientRect().top;
    var elementVisible = 600;

    if (elementTop3 < windowHeight - elementVisible) {
      revealstest[i].classList.add("active");
      revealsactive[i].classList.add("gradient");
      clear()
      document.getElementById("link-contact").classList.add("gradient")
      document.getElementById("link-contact").classList.add("active")
      document.getElementById("link-contact").children[0].src = "./images/hartje_gekleurd.svg"; // Change the image source to "hartje_gekleurd" in the if statement
    } else if (elementTop2 < windowHeight - elementVisible) {
      revealstest[i].classList.add("active");
      revealsactive[i].classList.add("gradient");
      clear()
      document.getElementById("link-projects").classList.add("gradient")
      document.getElementById("link-projects").classList.add("active")
      document.getElementById("link-projects").children[0].src = "./images/hartje_gekleurd.svg"; // Change the image source to "hartje_gekleurd" in the if statement
    } else if (elementTop < windowHeight - elementVisible) {
      revealstest[i].classList.add("active");
      revealsactive[i].classList.add("gradient");
      clear()
      document.getElementById("link-aboutme").classList.add("gradient")
      document.getElementById("link-aboutme").classList.add("active")
      document.getElementById("link-aboutme").children[0].src = "./images/hartje_gekleurd.svg"; // Change the image source to "hartje_gekleurd" in the if statement
    } else {
      revealstest[i].classList.remove("active");
      revealsactive[i].classList.add("gradient");
      clear()
    }
  }
}

function clear() {
  document.getElementById("link-projects").classList.remove("gradient")
  document.getElementById("link-projects").classList.remove("active")
  document.getElementById("link-contact").classList.remove("gradient")
  document.getElementById("link-contact").classList.remove("active")
  document.getElementById("link-aboutme").classList.remove("gradient")
  document.getElementById("link-aboutme").classList.remove("active")
  document.getElementById("link-aboutme").children[0].src = "./images/hartje_zwart.svg";
  document.getElementById("link-projects").children[0].src = "./images/hartje_zwart.svg";
  document.getElementById("link-contact").children[0].src = "./images/hartje_zwart.svg";
}
  
sidereveal()

window.addEventListener("scroll", sidereveal);