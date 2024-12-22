// Function to open or close the mobile menu
function Open_Close_Menu() {
    const links = document.getElementById("links");
    const iconMenu = document.querySelector(".icon-menu");
    const closeMenu = document.querySelector(".close-menu");

    if (links.style.display === "flex") {
        links.style.display = "none"; // Close menu
        iconMenu.style.display = "block";
    } else {
        links.style.display = "flex"; // Open menu
        iconMenu.style.display = "none";
    }
}

// Function to toggle FAQ answers
function toggleAnswer(element) {
    const answer = element.nextElementSibling; // The corresponding answer element
    const allQuestions = document.querySelectorAll(".faqs .question");

    // Close other answers if any is open
    allQuestions.forEach((question) => {
        const questionAnswer = question.querySelector(".answer");
        if (questionAnswer !== answer) {
            questionAnswer.style.display = "none"; // Hide other answers
            question.querySelector("i").classList.remove("fa-chevron-up");
            question.querySelector("i").classList.add("fa-chevron-down");
        }
    });

    // Toggle the selected answer
    if (answer.style.display === "block") {
        answer.style.display = "none"; // Close current answer
        element.querySelector("i").classList.remove("fa-chevron-up");
        element.querySelector("i").classList.add("fa-chevron-down");
    } else {
        answer.style.display = "block"; // Open current answer
        element.querySelector("i").classList.remove("fa-chevron-down");
        element.querySelector("i").classList.add("fa-chevron-up");
    }
}

jQuery(document).ready(function($) {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});







