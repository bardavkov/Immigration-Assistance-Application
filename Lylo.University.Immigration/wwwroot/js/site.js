// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

const links = document.querySelectorAll("nav a");

links.forEach(link => {
    link.addEventListener("mouseenter", () => {
        link.style.transform = "scale(1.1)";
    });
    link.addEventListener("mouseleave", () => {
        link.style.transform = "scale(1)";
    });
});

