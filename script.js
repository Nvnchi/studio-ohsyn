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