import { places } from '../data/places.js';
console.log(places);



const placesContainer = document.querySelector('#places');



function displayPlaces(places) {

    places.forEach(place => {
        const card = document.createElement("div");
        const name = document.createElement("h3");
        const imageContainer = document.createElement("div");
        imageContainer.classList.add("image-container");
        const image = document.createElement("img");
        const address = document.createElement("p");
        const description = document.createElement("p");

        name.textContent = `${place.name}`;
        address.textContent = `Address: ${place.address}`;
        description.textContent = `${place.description}`;


        image.setAttribute("src", place.image_url);
        image.setAttribute("alt", `image of ${place.name}`);
        image.setAttribute("loading", "lazy");


        image.classList.add("place-image");
        card.classList.add("place-card");
        address.classList.add("place-address");
        description.classList.add("place-description");
        imageContainer.appendChild(image);
        card.appendChild(imageContainer);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(description);
        placesContainer.appendChild(card);

    });
}




document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.getElementById("sidebar-message"); 
    const lastVisit = localStorage.getItem("lastVisit");

    let message = "";

    if (!lastVisit) {
        message = "Welcome! Let us know if you have any questions.";
    } else {
        const lastVisitDate = new Date(lastVisit);
        const currentDate = new Date();

        const timeDiff = currentDate - lastVisitDate;
        const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

        if (daysDiff < 1) {
            message = "Back so soon! Awesome!";
        } else {
            message = `You last visited ${daysDiff} ${daysDiff === 1 ? "day" : "days"} ago.`;
        }
    }

    sidebar.textContent = message;
    localStorage.setItem("lastVisit", new Date().toISOString());
});










displayPlaces(places);







