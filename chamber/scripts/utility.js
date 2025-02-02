
 export async function apiFetch(url) {
    try {
        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            return data;
            // displayResults(data);
            console.log("Fetched Data:", data); // Output the results to the console
        } else {
            const errorMessage = await response.text(); // Get the response text for errors
            throw new Error(`HTTP Error: ${response.status} - ${errorMessage}`);
        }
    } catch (error) {
        console.error("Fetch error:", error);
    }
}


const url = window.location.href;
const fullUrl = url.split("?");
console.log(urlFirstPart);

const urlSecondtPart = fullUrl[1].split("&");
console.log(urlSecondtPart);


const displayResult = document.getElementById("display-result");


function show(cup) {
    urlSecondtPart.forEach((element) => {
        if (element.startsWith(cup)) {
            result = element.split("=")[1];
            result = result.replace("%40", "@"); // esto reempleza el simbolo de arroba correo por arroba
        }
    })
    return (result);


}









