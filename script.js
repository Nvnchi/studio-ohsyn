function sidereveal() {
  var reveals = document.querySelectorAll(".sidereveallocation");
  var revealstest = document.querySelectorAll(".sidereveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 700;

    if (elementTop < windowHeight - elementVisible) {
      revealstest[i].classList.add("active");
    } else {
      revealstest[i].classList.remove("active");
    }
  }
}
  
sidereveal()

window.addEventListener("scroll", sidereveal);

const bigBall = document.querySelector('.cursor__ball--big');
const smallBall = document.querySelector('.cursor__ball--small');
const hoverables = document.querySelectorAll('.hoverable');

// Listeners
document.body.addEventListener('mousemove', onMouseMove);
hoverables.forEach((element) => {
  element.addEventListener('mouseenter', onMouseHover);
  element.addEventListener('mouseleave', onMouseHoverOut);
});

// Move the cursor
function onMouseMove(e) {
  gsap.to(bigBall, { duration: 0.4, x: e.pageX - 15, y: e.pageY - 15 });
  gsap.to(smallBall, { duration: 0.1, x: e.pageX - 5, y: e.pageY - 7 });
}

// Hover an element
function onMouseHover() {
  gsap.to(bigBall, { duration: 0.3, scale: 4 });
}

function onMouseHoverOut() {
  gsap.to(bigBall, { duration: 0.3, scale: 1 });
}