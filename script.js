
const apiKey = '095ced10b64a8a9916ed2be3418e63c9';  
const city = 'Cancun';
const country = 'MX';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${apiKey}`;


fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const temperature = data.main.temp;
        const weatherDescription = data.weather[0].description;
        const weatherElement = document.getElementById('weather');
        
        weatherElement.innerHTML = `Weather: ${temperature}°C, ${weatherDescription.charAt(0).toUpperCase() + weatherDescription.slice(1)} (Cancun, Mexico)`;
    })
    .catch(error => {
        console.error('Error fetching weather data:', error);
        document.getElementById('weather').innerHTML = 'Unable to fetch weather data';
    });

    
