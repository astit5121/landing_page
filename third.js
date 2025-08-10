// Smooth scroll to tech section when "Explore Now" button is clicked
document.addEventListener("DOMContentLoaded", function () {
    const exploreBtn = document.querySelector(".cta");
    const techTable = document.querySelector(".tech-table");

    if (exploreBtn && techTable) {
        exploreBtn.addEventListener("click", () => {
            techTable.scrollIntoView({ behavior: "smooth" });
        });
    }
});

// Dropdown functionality for language button
document.addEventListener("DOMContentLoaded", function () {
    const langBtn = document.querySelector(".lang-btn");

    langBtn.addEventListener("click", () => {
        // Toggle button text between English and Hindi
        if (langBtn.textContent.includes("English")) {
            langBtn.textContent = "हिंदी ▼";
        } else {
            langBtn.textContent = "English ▼";
        }
    });
});

// Add a "click ripple effect" to all buttons
document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", function (e) {
        let ripple = document.createElement("span");
        ripple.classList.add("ripple");
        this.appendChild(ripple);

        // Set position of ripple
        ripple.style.left = `${e.clientX - this.offsetLeft}px`;
        ripple.style.top = `${e.clientY - this.offsetTop}px`;

        // Remove ripple after animation
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});
