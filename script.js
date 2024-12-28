function myMenuFunction() {
    var menuBth = document.getElementById("myNavMenu");

    if (menuBth.className === "nav-menu") {
        menuBth.className += " responsive";
    }else{

        menuBth.className = "nav-menu";
    }
}
const body = document.querySelector("body");
const toggleSwitch = document.querySelector("#toggle-switch");

toggleSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");
});

/*----typing effect----*/

var typingEffect = new Typed(".typedText", {
    strings: ["Web Developer", "Coder", "Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
    backDelay: 2000, // Fixed by adding a comma
});

document.addEventListener('DOMContentLoaded', function () {
    const sr = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 1500,  // Speed up animation by reducing duration
        reset: true,
    });

    // Revealing elements from top
    sr.reveal('.featured-name', { delay: 100 });
    sr.reveal('.text-info', { delay: 200 });
    sr.reveal('.text-btn', { delay: 300 });
    sr.reveal('.social-icons', { delay: 400 });
    sr.reveal('.featured-image', { delay: 500 });

    // Additional elements like projects
    sr.reveal('.project-box', { interval: 200 });
    sr.reveal('.about-info', { delay: 200 });
    sr.reveal('.contact-info', { delay: 200 });

    // Right scroll reveal (from left)
    const srRight = ScrollReveal({
        origin: 'left',
        distance: '80px',
        duration: 1500,  // Speed up animation by reducing duration
        reset: true,
    });

    // Revealing elements from left
    srRight.reveal('.skill', { delay: 200 });
    srRight.reveal('.skill-box', { delay: 200 }); // Corrected selector from '.skill.box' to '.skill-box'
});