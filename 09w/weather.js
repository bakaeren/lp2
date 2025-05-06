// Simulated local weather database
const weatherData = {
    "pune": { temp: 31, humidity: 45, condition: "Sunny" },
    "mumbai": { temp: 28, humidity: 70, condition: "Cloudy" },
    "delhi": { temp: 35, humidity: 30, condition: "Dry" }
};

// Convert JS object to Blob and simulate fetch
const blob = new Blob([JSON.stringify(weatherData)], { type: 'application/json' }); //IMP
const fakeUrl = URL.createObjectURL(blob); //IMP


function getWeather() {
    const city = document.getElementById("cityInput").value.toLowerCase();
    fetch(fakeUrl)
        .then(res => res.json())
        .then(data => {
            const result = data[city];
            if (result) {
                document.getElementById("weatherResult").innerHTML =
                    `Temperature: ${result.temp}°C<br>Humidity: ${result.humidity}%<br>Condition: ${result.condition}`;
            } else {
                document.getElementById("weatherResult").innerText = "City not found.";
            }
        });
}
