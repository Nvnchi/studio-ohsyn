function sidereveal() {
  var reveals = document.querySelectorAll(".sidereveallocation");
  // blahblah
  var reveals2 = document.querySelectorAll(".sidereveallocation2");
  var reveals3 = document.querySelectorAll(".sidereveallocation3");
  var revealstest = document.querySelectorAll(".sidereveal");
  var revealsactive = document.querySelectorAll(".link")

  var windowHeight = window.innerHeight;
  var elementTop = reveals[0].getBoundingClientRect().top;
  var elementTop2 = reveals2[0].getBoundingClientRect().top;
  var elementTop3 = reveals3[0].getBoundingClientRect().top;
  var elementVisible = 600;

  if (elementTop3 < windowHeight - elementVisible) {
    revealstest[0].classList.add("active");
    document.getElementById('top').classList.add("active");
    revealsactive[0].classList.add("gradient");
    clear()
    document.getElementById("link-contact").classList.add("gradient")
    document.getElementById("link-contact").classList.add("active")
    document.getElementById("link-contact").children[0].src = "./images/sterretjes_gekleurd.svg"; // Change the image source to "sterretjes_gekleurd" in the if statement
  } else if (elementTop2 < windowHeight - elementVisible) {
    revealstest[0].classList.add("active");
    document.getElementById('top').classList.add("active");
    revealsactive[0].classList.add("gradient");
    clear()
    document.getElementById("link-projects").classList.add("gradient")
    document.getElementById("link-projects").classList.add("active")
    document.getElementById("link-projects").children[0].src = "./images/planeet_gekleurd.svg"; // Change the image source to "planeet_gekleurd" in the if statement
  } else if (elementTop < windowHeight - elementVisible) {
    revealstest[0].classList.add("active");
    document.getElementById('top').classList.add("active");
    revealsactive[0].classList.add("gradient");
    clear()
    document.getElementById("link-aboutme").classList.add("gradient")
    document.getElementById("link-aboutme").classList.add("active")
    document.getElementById("link-aboutme").children[0].src = "./images/hartje_gekleurd.svg"; // Change the image source to "hartje_gekleurd" in the if statement
  } else {
    revealstest[0].classList.remove("active");
    document.getElementById('top').classList.remove("active");
    revealsactive[0].classList.add("gradient");
    clear()
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
  document.getElementById("link-projects").children[0].src = "./images/planeet_zwart.svg";
  document.getElementById("link-contact").children[0].src = "./images/sterretjes_zwart.svg";
}
  
sidereveal()

window.addEventListener("scroll", sidereveal);

