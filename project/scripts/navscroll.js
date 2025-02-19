export function handleNavbarScroll(navbarSelector = ".navbar") {
    let lastScrollTop = 0;
    const navbar = document.querySelector(navbarSelector);

    if (!navbar) return; // Evita errores si el navbar no está presente

    window.addEventListener("scroll", () => {
        let currentScroll = window.scrollY;

        if (currentScroll > lastScrollTop) {
            // Scroll hacia abajo: ocultar navbar
            navbar.classList.add("hidden");
        } else {
            // Scroll hacia arriba: mostrar navbar
            navbar.classList.remove("hidden");
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Evita valores negativos
    });
}
