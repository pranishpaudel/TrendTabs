// Variables
const myCity = document.getElementById('city');
const image = document.getElementById('weatherImage');
const weather = document.getElementById('weatherMain');
const temp = document.querySelector('.temp');
let date = new Date();

// Function to fetch weather data for Pokhara
function getWeather() {
    const city = 'Pokhara';
    const apiID = '04ec08d613f0dd92ee02e63e9dd2cb38';
    const myWeatherContainer = document.querySelector('.weatherContainer');
    
    // API URL
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiID}`;

    // Fetching data from the weather API
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const tempValue = Math.round(data.main.temp);
            const weatherMain = data.weather[0].main;
            weather.innerHTML = weatherMain;

            // Updating the DOM
            myCity.innerHTML = city;
            temp.innerHTML = `${tempValue}<span><sup>o</sup>C</span>`;

            // Updating the Images according to the weather
            if (weatherMain == 'Clear') {
                image.src = `./img/sun.png`
                myWeatherContainer.style.backgroundColor = '#ec6e4c'
            }
            
            if (weatherMain == 'Clouds') {
                image.src = `./img/clouds.png`
                myWeatherContainer.style.backgroundColor = '#86d3d3'
            }
            if (weatherMain == 'Rain') {
                image.src = `./img/rain.png`
                myWeatherContainer.style.backgroundColor = '#494bcf'
            }
            if (weatherMain == 'Drizzle') {
                image.src = `./img/drizzle.png`
                myWeatherContainer.style.backgroundColor = '#8ecfcf'
            }
            if (weatherMain == 'Haze') {
                image.src = `./img/haze.png`
                myWeatherContainer.style.backgroundColor = '#d8ced2'
            }

            

            setInterval(leftInterval, 1000);
        })
        // .catch(error => {
        //     console.error('Error fetching weather data:', error);
        //     alert('An error occurred while fetching weather data. Please try again later.');
        // });
}

// Call the getWeather function when the page loads
window.addEventListener('DOMContentLoaded', getWeather);
