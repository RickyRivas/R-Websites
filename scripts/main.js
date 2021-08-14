
const navSlide = () => {
    const burger = document.querySelector(".hamburger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");

    burger.addEventListener("click", () => {
        //Toggle Nav
        nav.classList.toggle("is-active");
        //Animate Links

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `navLinkFade .1s ease-in forwards`;
            }
        });
        //burger animation
        burger.classList.toggle("is-active");
    });
};
navSlide();
// Video
var vid = document.querySelector("video");
vid.playbackRate = 0.6;
//Loader JS

// document.onreadystatechange = function() {
//     if (document.readyState !== "complete") {
//         document.querySelector("#nav").style.display = "none";
//         document.querySelector("#main").style.display = "none";
//         document.querySelector("#loader").style.visibility = "block";
//     } else {
//         document.querySelector("#loader").style.display = "none";
//         document.querySelector("#main").style.display = "block";
//         document.querySelector("#nav").style.display = "block"; 
//     }
// };
// JS for reverse navSlide for when user clicks on nav link item to redirect to section on same page and automatically closes the 
// nav for them

const reverseSlide = () => {
  const burger = document.querySelector(".hamburger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
    //Toggle Nav
    nav.classList.toggle("is-active");
    //Animate Links

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade .1s ease-in forwards`;
      }
    });
    //burger animation
    burger.classList.toggle("is-active");


};

const navLink2 = document.querySelector('.nav-links');
navLink2.addEventListener("click", reverseSlide);;

// Set a variable for our button element.
const scrollToTopButton = document.getElementById("js-top");

// Let's set up a function that shows our scroll-to-top button if we scroll beyond the height of the initial window.
const scrollFunc = () => {
    // Get the current scroll value
    let y = window.scrollY;

    // If the scroll value is greater than the window height, let's add a class to the scroll-to-top button to show it!
    if (y > 0) {
        scrollToTopButton.className = "top-link show";
    } else {
        scrollToTopButton.className = "top-link hide";
    }
};

window.addEventListener("scroll", scrollFunc);