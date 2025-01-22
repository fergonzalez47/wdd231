const currentTemp = document.getElementById("current-temp");
const figcaption = document.querySelector("figcaption");
const weatherIcon = document.getElementById("weather-icon");

const url = `https://api.openweathermap.org/data/2.5/weather?lat=49.78751838737433&lon=6.673479084943825&units=metric&appid=c5cea22d51a8840ccb56f8a97e200db1`;



async function apiFetch(url) {
    try {
        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();

            displayResults(data);
            console.log("Fetched Data:", data); // Output the results to the console
        } else {
            const errorMessage = await response.text(); // Get the response text for errors
            throw new Error(`HTTP Error: ${response.status} - ${errorMessage}`);
        }
    } catch (error) {
        console.error("Fetch error:", error);
    }
}

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', "image of weather germany");
    figcaption.textContent = `${desc}`;
}



apiFetch(url);