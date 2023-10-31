// Get a reference to the aside element
//  const sideBar = document.getElementById("sidecontainer");

// Define the scroll point when you want the aside to become visible
//  const scrollPoint = "100px";

// Listen to the scroll event

//  window.addEventListener("scroll", () => {
//      if (window.scrollY >= scrollPoint) {
//          sideBar.classList.remove("hidden");
//          console.log("scrolling");
//      } else {
//          sideBar.classList.add("hidden");
//      }
//  });


//window.addEventListener("scroll", () => {
//    if (window.scrollY >= scrollPoint) {
//        sideBar.classList.remove("hidden");
//    } else {
//        sideBar.classList.add("hidden");
//    }
//});



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
  
  
  
  const scrollContainer = document.getElementById("scroll");
  const ugcContainer = document.getElementById("ugc");
  
  scrollContainer.addEventListener("wheel", (evt) => {
      var windowHeight = ugcContainer.getBoundingClientRect().width;
      var test = ugcContainer.getBoundingClientRect().left;
      console.log(windowHeight - test)
     if (windowHeight - test <= 2200) {
      evt.preventDefault();
      if (evt.deltaY >= -15 && evt.deltaY <= 15) {
        scrollContainer.scrollLeft += (evt.deltaY * 40);
      } else {
        scrollContainer.scrollLeft += (evt.deltaY * 5);
      }
     } 
  });

  const $bigBall = document.querySelector('.cursor__ball--big');
const $smallBall = document.querySelector('.cursor__ball--small');
const $hoverables = document.querySelectorAll('.hoverable');

// Listeners
document.body.addEventListener('mousemove', onMouseMove);
for (let i = 0; i < $hoverables.length; i++) {
  $hoverables[i].addEventListener('mouseenter', onMouseHover);
  $hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
}

// Move the cursor
function onMouseMove(e) {
  TweenMax.to($bigBall, .4, {
    x: e.pageX - 15,
    y: e.pageY - 15
  })
  TweenMax.to($smallBall, .1, {
    x: e.pageX - 5,
    y: e.pageY - 7
  })
}

// Hover an element
function onMouseHover() {
  TweenMax.to($bigBall, .3, {
    scale: 4
  })
}
function onMouseHoverOut() {
  TweenMax.to($bigBall, .3, {
    scale: 1
  })
}