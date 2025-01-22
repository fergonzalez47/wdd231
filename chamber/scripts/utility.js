
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







