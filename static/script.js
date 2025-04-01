const apiKey = "282702613197a68200c665e50b99ca71"; // Your API Key

function getWeather() {
    const city = document.getElementById("city").value;
    if (city === "") {
        alert("Please enter a city name!");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === "404") {
                alert("City not found!");
                return;
            }

            // const weatherInfo = `
            //     <div class="weather-card">
            //         <h2>${data.name} <img src="https://openweathermap.org/images/flags/${data.sys.country.toLowerCase()}.png" alt="flag"></h2>
            //         <p><strong>${Math.round(data.main.temp)}°C</strong></p>
            //         <p>${data.weather[0].description.toUpperCase()}</p>
            //     </div>
            // `;
            const weatherInfo = `
                <div class="weather-card">
                   <h2>${data.name} <img src="https://openweathermap.org/images/flags/${data.sys.country.toLowerCase()}.png" alt="flag"></h2>
                   <p><strong>${Math.round(data.main.temp)}°C</strong></p>
                   <p>${data.weather[0].description.toUpperCase()}</p>
                </div>
            `;


            document.getElementById("weather-info").innerHTML = weatherInfo;
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
            alert("Failed to fetch weather data. Try again later.");
        });
}
