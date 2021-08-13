
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

//Loader JS
const loader = document.querySelector('#loader');
const navbar = document.querySelector('nav');
navbar.style.display = 'none';
 
const main = document.querySelector("main");
main.style.display = 'none';

function unHide() {
    navbar.style.display = 'block';
    main.style.display = 'block';
    loader.style.display = 'none';
}

function timeOut() {
    setTimeout(unHide, 3000)
}
timeOut();

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