export function initIntersectionObserver() {

        const objectsToTransition = document.querySelectorAll(".IOO");

        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible"); // Activamos la visibilidad

                        // Seleccionar y animar los elementos hijos con la clase "hidden-content"
                        const hiddenContents = entry.target.querySelectorAll(".hidden-content");
                        hiddenContents.forEach(content => {
                            content.classList.add("visible-content");

                            content.addEventListener("transitionend", () => {
                                content.classList.remove("hidden-content");
                            }, { once: true });
                        });

                        entry.target.addEventListener("transitionend", () => {
                            entry.target.classList.remove("hidden");
                        }, { once: true });

                        observer.unobserve(entry.target); // Deja de observar después de la primera aparición
                    }
                });
            },
            { threshold: 0.3 } // Este valor representa el porcentaje del elemento mostrándose en pantalla
        );

        objectsToTransition.forEach(obj => observer.observe(obj)); // Observamos todos los elementos
}
