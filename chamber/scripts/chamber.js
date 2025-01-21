const url = "./data/members.json";


const cards = document.querySelector('#cards');


async function getData(param) {
    const response = await fetch(param);

    if (response.ok) {
        const data = await response.json();
        // console.table(data.companies);
        displayBusiness(data.companies);
    }
}



const displayBusiness = (companies) => {

    companies.forEach(company => {
        const card = document.createElement("div");
        const name = document.createElement("h3");
        const imageContainer = document.createElement("div");
        imageContainer.classList.add("image-container");
        const image = document.createElement("img");
        const owner = document.createElement("p");
        const address = document.createElement("p");
        const phone = document.createElement("p");

        const website = document.createElement("p");
        const link = document.createElement("a");
        const membershipLevel = document.createElement("p");
        const description = document.createElement("p");

        name.textContent = `${company.name}`;
        owner.textContent = `Owner: ${company.owner}`;
        address.textContent = `Address: ${company.address}`;
        phone.textContent = `Phone: ${company.phone}`;
    
    
        description.textContent = `${company.description}`;


        link.href = company.website;
        link.textContent = company.website; 
        link.target = "_blank"; 

        website.appendChild(document.createTextNode("URL: ")); // Agregar el texto "URL: "
        website.appendChild(link);

        image.setAttribute("src", company.image);
        image.setAttribute("alt", `image of ${company.name} business`);
        image.setAttribute("loading", "lazy");
        // image.setAttribute("width", "340");
        // image.setAttribute("height", "400");


        image.classList.add("card");
        card.classList.add("card")
        imageContainer.appendChild(image);
        card.appendChild(imageContainer)
        card.appendChild(name);
        card.appendChild(owner);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(description);

        cards.appendChild(card);

    });
}



getData(url);
