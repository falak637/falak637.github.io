document.addEventListener("DOMContentLoaded", function () {

    const navbar = document.querySelector(".navbar");
    const scrollBtn = document.querySelector(".scroll-up-btn");
    const menu = document.querySelector(".navbar .menu");
    const menuBtn = document.querySelector(".menu-btn");
    const menuIcon = document.querySelector(".menu-btn i");

    // Scroll Event
    window.addEventListener("scroll", function () {

        // Sticky Navbar
        if (window.scrollY > 20) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }

        // Show Scroll Up Button
        if (window.scrollY > 500) {
            scrollBtn.classList.add("show");
        } else {
            scrollBtn.classList.remove("show");
        }
    });

    // Scroll to Top Button
    scrollBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "auto"
        });
    });

    // Smooth scroll on menu click
    document.querySelectorAll(".navbar .menu li a").forEach(link => {
        link.addEventListener("click", function () {
            document.documentElement.style.scrollBehavior = "smooth";
        });
    });

    // Mobile Menu Toggle
    menuBtn.addEventListener("click", function () {
        menu.classList.toggle("active");
        menuIcon.classList.toggle("active");
    });

    // Typing Animation (same library)
    new Typed(".typing", {
        strings: ["Developer", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    new Typed(".typing-2", {
        strings: ["Developer", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

});