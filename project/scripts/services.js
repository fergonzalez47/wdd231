import { displayModal } from "./utils.js";

const services = [
    {
        title: "Carpet Cleaning",
        description: "Expert carpet cleaning to remove dirt, stains, and odors, using eco-friendly products.",
        icon: "../public/images/icon1.svg"
    },
    {
        title: "Carpet Removal",
        description: "Removal of old carpets and installation of new ones to refresh your space.",
        icon: "../public/images/icon1.svg"
    },
    {
        title: "Water Damage Restoration",
        description: "Available 24/7 to provide fast and efficient water damage restoration services.",
        icon: "../public/images/icon1.svg"
    },
    {
        title: "Wall Cleaning",
        description: "Specialized in mold, water, and moisture damage cleaning for walls and surfaces.",
        icon: "../public/images/icon1.svg"
    },
    {
        title: "Floor Cleaning & Polishing",
        description: "Cleaning and polishing services for hardwood, tile, and other types of floors.",
        icon: "../public/images/icon1.svg"
    },
    {
        title: "Eco-Friendly Solutions",
        description: "Using green, non-toxic cleaning products to protect your home and the environment.",
        icon: "../public/images/icon1.svg"
    },
    {
        title: "Affordable Pricing",
        description: "Competitive rates for high-quality cleaning services that suit any budget.",
        icon: "../public/images/icon1.svg"
    },
    {
        title: "Customized Cleaning Plans",
        description: "Tailored cleaning schedules designed to meet your specific needs and preferences.",
        icon: "../public/images/icon1.svg"
    },
    {
        title: "Satisfaction Guarantee",
        description: "We promise a re-clean at no additional cost if you're not satisfied with the service.",
        icon: "../public/images/icon1.svg"
    }
];



export function renderServices() {
    const servicesContainer = document.getElementById('services');
    const dialog = document.getElementById('service-description');

    services.forEach(service => {
        const serviceCard = document.createElement('div');
        serviceCard.classList.add('service-card');

        serviceCard.innerHTML = `
            <div class="service-content">
                <img src="${service.icon}" alt="${service.title} icon">
                <h3>${service.title}</h3>
            </div>
            <button class="see-service-btn button-56">See</button>
        `;

        serviceCard.querySelector(".see-service-btn").addEventListener("click", () => {
            displayModal(service, dialog);
        });

        servicesContainer.appendChild(serviceCard);
    });
}
