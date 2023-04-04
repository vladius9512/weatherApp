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
    return {
        currentTemperature: currentTemp,
        currentFeelsLikeTemperature: currentFeelsLike,
        wind: currentWind,
        clouds: clouds,
        cityName: city,
    };
}

async function getWeather(cityLatitude, cityLongitude) {
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${cityLatitude}&lon=${cityLongitude}&appid=5b81f0d11c6be7a51dcf784becbd0145&units=metric`
    );
    const weatherData = await response.json();
    const currentTemp = weatherData.main.temp;
    const todaysMinimum = weatherData.main.temp_min;
    const currentFeelsLike = weatherData.main.feels_like;
    const currentWind = weatherData.wind.speed;
    const clouds = weatherData.clouds.all;
    const city = weatherData.name;
    return {
        currentTemperature: currentTemp,
        currentFeelsLikeTemperature: currentFeelsLike,
        wind: currentWind,
        clouds: clouds,
        cityName: city,
        todaysMinimum: todaysMinimum,
    };
}

async function startingLocation() {
    const response = await fetch(
        "http://api.openweathermap.org/geo/1.0/direct?q=Cluj&limit=5&appid=5b81f0d11c6be7a51dcf784becbd0145"
    );
    const locationData = await response.json();
}

async function getLocationFromSearch(searchCity) {
    const response = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${searchCity}&limit=5&appid=5b81f0d11c6be7a51dcf784becbd0145`
    );
    const locationData = await response.json();
    return { latitude: locationData[0].lat, longitude: locationData[0].lon };
}

async function fiveDay(cityLatitude, cityLongitude) {
    const response = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?lat=${cityLatitude}&lon=${cityLongitude}&appid=5b81f0d11c6be7a51dcf784becbd0145&units=metric`
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
