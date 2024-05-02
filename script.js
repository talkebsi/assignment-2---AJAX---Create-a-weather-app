document.getElementById("searchBtn").addEventListener("click", async function() {
    const longitude = document.getElementById("lon").value;
    const latitude = document.getElementById("lat").value;
    const resultDiv = document.getElementById("result");
    const apiKey = 'd270ae9b02882499344574839ac69bc7'; 
    
    const weatherUrl = 
`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(weatherUrl);
        const weatherData = await response.json();

        if (response.ok) {
            const temperature = weatherData.main.temp;
            const description = weatherData.weather[0].description;
            const cityName = weatherData.name;
            const displayText = `The city name is ${cityName}. current temperature: ${temperature}°C, weather: ${description}`;

            resultDiv.innerHTML = ''; 
            resultDiv.appendChild(document.createElement("p")).textContent = displayText;
        } else {
            throw new Error(weatherData.message);
        }
    } catch (error) {
        resultDiv.textContent = `Error: ${error.message}`;
    }
});
