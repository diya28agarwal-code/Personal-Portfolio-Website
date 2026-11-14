// ==================================
// 1. MOBILE NAVIGATION MENU
// ==================================

let menuToggle = document.getElementById("menuToggle");

let navLinks = document.getElementById("navLinks");


// Open and close menu

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


// Close menu after clicking a link

let links = document.querySelectorAll(".nav-links a");

links.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


// ==================================
// 2. CONTACT FORM
// ==================================

let contactForm = document.getElementById("contactForm");

let formMessage = document.getElementById("formMessage");


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    let name = document.getElementById("name").value;

    let email = document.getElementById("email").value;

    let subject = document.getElementById("subject").value;

    let message = document.getElementById("message").value;


    // Check if all fields are filled

    if (
        name === "" ||
        email === "" ||
        subject === "" ||
        message === ""
    ) {

        formMessage.innerText = "Please fill all the fields.";

        formMessage.style.color = "red";

    } else {

        formMessage.innerText = "Thank you! Your message has been received.";

        formMessage.style.color = "green";

        contactForm.reset();

    }

});


// ==================================
// 3. CURRENT YEAR
// ==================================

let currentYear = document.getElementById("currentYear");

currentYear.innerText = new Date().getFullYear();