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