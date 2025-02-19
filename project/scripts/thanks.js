const url = window.location.href;
const fullUrl = url.split("?");



const displayResult = document.getElementById("received-inf");

function show(cup) {
    let result;
    
    if (fullUrl.length > 1) {
        const urlSecondtPart = fullUrl[1].split("&");
        urlSecondtPart.forEach((element) => {
            if (element.startsWith(cup)) {
                result = element.split("=")[1];
                result = decodeURIComponent(result);
            }
        });

        // Si el parámetro es 'timestamp', intenta convertirlo a una fecha
        if (cup === "timestamp" && result) {
            const date = new Date(parseInt(result, 10));
            if (isNaN(date)) {
                console.error("Invalid timestamp:", result);
                return "Invalid timestamp";
            }
            return date.toLocaleString();
        }
        return result;
    }
    return null;
}


export function displayInf() {
    if (!displayResult) return;

    displayResult.innerHTML = "";

    displayResult.innerHTML += "<h1>Thank You!</h1>";
    const showInf = `
        <div class="custom-div">
            <p><strong>First Name:</strong> <i>${show("firstName")}</i></p>
            <p><strong>Last Name:</strong> <i>${show("lastName")}</i></p>
            <p><strong>Email:</strong> <i>${show("email")}</i></p>
            <p><strong>Phone:</strong> <i>${show("phone")}</i></p>
            <p><strong>Business/Organization's Name: </strong> <i>${show("businessName")}</i></p>
            <p><strong>Time:</strong> <i>${show("timestamp")}</i></p>
        </div>
        <p>Your message has been successfully sent.</p>
    `;

    displayResult.innerHTML += showInf;
}
