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
    const city = weatherData.name;
    return [currentTemp, currentFeelsLike, currentWind, clouds, city];
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
    const city = weatherData.name;
    return [currentTemp, currentFeelsLike, currentWind, clouds, city];
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

async function fiveDay() {
    const response = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?lat=${cityLat}&lon=${cityLon}&appid=5b81f0d11c6be7a51dcf784becbd0145&units=metric`
    );
    const weatherData = await response.json();
    const weatherList = weatherData.list;
    const daysListOfTempsNight = [];
    const daysListOfTempsDay = [];
    weatherList.forEach((elem) => {
        if (elem.dt_txt.endsWith("00:00:00")) {
            daysListOfTempsNight.push(elem);
        }
        if (elem.dt_txt.endsWith("15:00:00")) {
            daysListOfTempsDay.push(elem);
        }
    });
    console.log(daysListOfTempsNight);
    console.log(daysListOfTempsDay);
}

startingLocation();
startWeather();

export { getLocationFromSearch, getWeather, startWeather, fiveDay };
