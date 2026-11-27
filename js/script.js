
document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.getElementById("menuToggle");
    const navbar = document.getElementById("navbar");

    if (menuToggle && navbar) {

        menuToggle.addEventListener("click", function () {
            navbar.classList.toggle("show");

            if (navbar.classList.contains("show")) {
                menuToggle.textContent = "✕";
            } else {
                menuToggle.textContent = "☰";
            }
        });

        const links = navbar.querySelectorAll("a");

        links.forEach(function (link) {
            link.addEventListener("click", function () {
                navbar.classList.remove("show");
                menuToggle.textContent = "☰";
            });
        });
    }

});
