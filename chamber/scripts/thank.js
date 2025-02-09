const url = window.location.href;
const fullUrl = url.split("?");
console.log(fullUrl);

const urlSecondtPart = fullUrl[1].split("&");
console.log(urlSecondtPart);

const displayResult = document.getElementById("display-result");

function show(cup) {
    let result;
    urlSecondtPart.forEach((element) => {
        if (element.startsWith(cup)) {
            result = element.split("=")[1];
            result = decodeURIComponent(result);
        }
    });

   
    if (cup === "timestamp" && result) {
        const date = new Date(result); 
        return date.toLocaleString(); 
    }

    return result;
}



function createTable() {

    displayResult.innerHTML = "";

    displayResult.innerHTML += "<h2>✅Your registration was completed successfully. We are glad to have you!</h2>";
    const table = `
        <table class="custom-table">
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Business Name</th>
                    <th>Timestamp </th>
                </tr>
            </thead>
            <tbody>
                    <tr>
                        <td>${show("firstName")}</td>
                        <td>${show("lastName")}</td>
                        <td>${show("phone")}</td>
                        <td>${show("email")}</td>
                        <td>${show("orgTitle")}</td>
                        <td>${show("timestamp")}</td>
                        
                    </tr>
            </tbody>
        </table>
    `;

    displayResult.innerHTML += table;
}


createTable();
