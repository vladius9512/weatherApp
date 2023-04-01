import { searchCity, cityLat, cityLon } from "./script.js";

async function startWeather() {
    const response = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?lat=46.769379&lon=23.5899542&appid=5b81f0d11c6be7a51dcf784becbd0145&units=metric"
    );
    const weatherData = await response.json();
    const currentTemp = weatherData.main.temp;
    const currentFeelsLike = weatherData.main.feels_like;
    const currentWind = weatherData.wind.speed;
    const clouds = weatherData.clouds.all;
    return [currentTemp, currentFeelsLike, currentWind, clouds];
}

async function getWeather() {
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${cityLat}&lon=${cityLon}&appid=5b81f0d11c6be7a51dcf784becbd0145&units=metric`
    );
    const weatherData = await response.json();
    const currentTemp = weatherData.main.temp;
    const currentFeelsLike = weatherData.main.feels_like;
    const currentWind = weatherData.wind.speed;
    const clouds = weatherData.clouds.all;
    console.log(weatherData);
    return [currentTemp, currentFeelsLike, currentWind, clouds];
}

async function startingLocation() {
    const response = await fetch(
        "http://api.openweathermap.org/geo/1.0/direct?q=Cluj&limit=5&appid=5b81f0d11c6be7a51dcf784becbd0145"
    );
    const locationData = await response.json();
}

async function getLocationFromSearch() {
    const response = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${searchCity}&limit=5&appid=5b81f0d11c6be7a51dcf784becbd0145`
    );
    const locationData = await response.json();
    return [locationData[0].lat, locationData[0].lon];
}

startingLocation();
startWeather();

export { getLocationFromSearch, getWeather };
