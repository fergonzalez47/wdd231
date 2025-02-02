const membershipLevels = [
    {
        title: "Non Profit Membership Level",
        description: "Membership for non-profit organizations with no membership fee. This level offers access to basic resources and support."
    },
    {
        title: "Bronze Membership Level",
        description: "Ideal for small businesses. This entry-level membership includes access to basic networking events, limited promotional opportunities, and some business resources."
    },
    {
        title: "Silver Membership Level",
        description: "For growing businesses, the Silver Membership provides enhanced promotional benefits, priority access to events, and additional resources to help businesses expand."
    },
    {
        title: "Gold Membership Level",
        description: "Premium membership for established businesses, offering full access to exclusive events, marketing opportunities, and a wide range of business resources and support."
    }
];

const membershipSection = document.getElementById("membership-section");
const membershipDescription = document.getElementById("membership-description");



// function DisplayCards(array) {
//     membershipSection.innerHTML = "";

//     const h2Title = document.createElement("h2");
//     h2Title.textContent = "Membership Level";
//     h2Title.classList.add("membership-container-title");
//     membershipSection.appendChild(h2Title);

//     array.forEach((item, index) => {
//         setTimeout(() => {
//             const div = document.createElement("div");
//             const h2 = document.createElement("h2");
//             const readMoreBtn = document.createElement("button");


//             div.classList.add("membership-card");
//             h2.classList.add("membership-card-title");
//             readMoreBtn.classList.add("membership-card-btn", "button-56");


//             h2.textContent = `${item.title}`;
//             readMoreBtn.textContent = "Learn more";


//             readMoreBtn.addEventListener("click", () => {
//                 displayModal(item);
//             });


//             div.appendChild(h2);
//             div.appendChild(readMoreBtn);


//             membershipSection.appendChild(div);


//             div.style.animation = `fadeInUp 0.5s ease-out forwards`;
//         }, index * 400);
//     });
// }



function DisplayCards(array) {
    membershipSection.innerHTML = "";

    const h2Title = document.createElement("h2");
    h2Title.textContent = "Membership Level";
    h2Title.classList.add("membership-container-title");
    membershipSection.appendChild(h2Title);

    array.forEach((item, index) => {
     
            const div = document.createElement("div");
            const h2 = document.createElement("h2");
            const readMoreBtn = document.createElement("button");


            div.classList.add("membership-card");
            h2.classList.add("membership-card-title");
            readMoreBtn.classList.add("membership-card-btn", "button-56");


            h2.textContent = `${item.title}`;
            readMoreBtn.textContent = "Learn more";


            readMoreBtn.addEventListener("click", () => {
                displayModal(item);
            });


            div.appendChild(h2);
            div.appendChild(readMoreBtn);


            membershipSection.appendChild(div);

    });
}





function displayModal(card) {
    membershipDescription.innerHTML = "";
    membershipDescription.innerHTML = `
    <button id="closeModal">❌</button>
    <h2>${card.title}</h2>
    <p>${card.description}</p>
    `;

    membershipDescription.showModal();

    document.getElementById("closeModal").addEventListener("click", () => {
        membershipDescription.classList.add("closing");
        setTimeout(() => {
            membershipDescription.close();
            membershipDescription.classList.remove("closing");
        }, 350);
    });


}







document.addEventListener("DOMContentLoaded", () => {
    DisplayCards(membershipLevels);
});
