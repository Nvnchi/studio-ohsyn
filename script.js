// Get a reference to the aside element
const sideBar = document.getElementById("sidecontainer");

// Define the scroll point when you want the aside to become visible
const scrollPoint = "100px";

// Listen to the scroll event

window.addEventListener("scroll", () => {
    if (window.scrollY >= scrollPoint) {
        sideBar.classList.remove("hidden");
        console.log("scrolling");
    } else {
        sideBar.classList.add("hidden");
    }
});


//window.addEventListener("scroll", () => {
//    if (window.scrollY >= scrollPoint) {
//        sideBar.classList.remove("hidden");
//    } else {
//        sideBar.classList.add("hidden");
//    }
//});