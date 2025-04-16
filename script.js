// Your OpenWeatherMap API key
const apiKey = '095ced10b64a8a9916ed2be3418e63c9'; // Replace with your own API key
const city = 'Cancun';
const country = 'MX';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${apiKey}`;

// Fetch the weather data
fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const temperature = data.main.temp;
        const weatherDescription = data.weather[0].description;
        const weatherElement = document.getElementById('weather');
        
        // Update the weather section with the fetched data
        weatherElement.innerHTML = `Weather: ${temperature}°C, ${weatherDescription.charAt(0).toUpperCase() + weatherDescription.slice(1)} (Cancun, Mexico)`;
    })
    .catch(error => {
        console.error('Error fetching weather data:', error);
        document.getElementById('weather').innerHTML = 'Unable to fetch weather data';
    });

    
