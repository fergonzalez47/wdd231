export async function apiFetch(url) {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            const errorMessage = await response.text();
            throw new Error(`HTTP Error: ${response.status} - ${errorMessage}`);
        }

        const data = await response.json();
        return data;

    } catch (error) {
        console.error("Fetch error:", error);
    }
}



export function createServiceElement(service) {
    const div = document.createElement("div");
    div.classList.add("key-feature-item");

    const title = document.createElement("h3");
    title.textContent = service.title;

    const iconContainer = document.createElement("div");
    iconContainer.classList.add("icon-container");

    const icon = document.createElement("img");
    icon.setAttribute("src", service.icon);
    icon.setAttribute("alt", `image of ${service.name}`);
    icon.setAttribute("loading", "lazy");
    icon.classList.add("main-icon");

    const description = document.createElement("p");
    description.textContent = service.description;

    iconContainer.appendChild(icon);
    div.appendChild(iconContainer);
    div.appendChild(title);
    div.appendChild(description);

    return div;
}

export function displayServices(services, container) {
    services.forEach(function (service) {
        const serviceElement = createServiceElement(service);
        container.appendChild(serviceElement);
    });
}



export function inputPhoneNumber() {

    document.getElementById('phone').addEventListener('input', function (e) {
        let value = e.target.value.replace(/\D/g, ''); // delete excess of characters
        if (value.length > 10) value = value.slice(0, 10); // Máx 10 dígits

        let formattedValue = '';
        if (value.length > 6) {
            formattedValue = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6)}`;
        } else if (value.length > 3) {
            formattedValue = `(${value.slice(0, 3)}) ${value.slice(3)}`;
        } else if (value.length > 0) {
            formattedValue = `(${value}`;
        }

        e.target.value = formattedValue;
    });

}




export function displayModal(card, htmlElement) {
    htmlElement.innerHTML = "";
    htmlElement.innerHTML = `
    <button id="closeModal">❌</button>
    <h2>${card.title}</h2>
    <p>${card.description}</p>
    `;

    htmlElement.showModal();

    document.getElementById("closeModal").addEventListener("click", () => {
        htmlElement.classList.add("closing");
        setTimeout(() => {
            htmlElement.close();
            htmlElement.classList.remove("closing");
        }, 350);
    });


}