async function startWeather(cityLatitude, cityLongitude) {
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${cityLatitude}&lon=${cityLongitude}&appid=5b81f0d11c6be7a51dcf784becbd0145&units=metric`
    );
    const weatherData = await response.json();
    const currentTemp = parseInt(weatherData.main.temp);
    const currentFeelsLike = parseInt(weatherData.main.feels_like);
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

async function startWeatherForFiveDays(cityLatitude, cityLongitude) {
    const responseForFiveDays = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${cityLatitude}&lon=${cityLongitude}&appid=5b81f0d11c6be7a51dcf784becbd0145&units=metric`
    );
    const weatherForFiveDaysData = await responseForFiveDays.json();
    const weatherList = weatherForFiveDaysData.list;
    const fiveDaysForecast = {};
    weatherList.forEach((elem) => {
        const date = elem.dt_txt.split(" ")[0];
        if (elem.dt_txt.endsWith("00:00:00")) {
            if (!fiveDaysForecast[date]) {
                fiveDaysForecast[date] = {
                    nightTemp: parseInt(elem.main.temp),
                };
            } else {
                fiveDaysForecast[date].nightTemp = parseInt(elem.main.temp);
            }
        } else if (elem.dt_txt.endsWith("15:00:00")) {
            if (!fiveDaysForecast[date]) {
                fiveDaysForecast[date] = {
                    dayTemp: parseInt(elem.main.temp),
                    dayDescription: elem.weather[0].description,
                    icon: elem.weather[0].icon,
                    date: date,
                };
            } else {
                fiveDaysForecast[date].dayTemp = parseInt(elem.main.temp);
                fiveDaysForecast[date].dayDescription =
                    elem.weather[0].description;
                fiveDaysForecast[date].icon = elem.weather[0].icon;
                fiveDaysForecast[date].date = date;
            }
        }
    });
    return Object.values(fiveDaysForecast);
}

async function getWeather(cityLatitude, cityLongitude) {
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${cityLatitude}&lon=${cityLongitude}&appid=5b81f0d11c6be7a51dcf784becbd0145&units=metric`
    );
    const weatherData = await response.json();
    const currentTemp = parseInt(weatherData.main.temp);
    const todaysMinimum = parseInt(weatherData.main.temp_min);
    const currentFeelsLike = parseInt(weatherData.main.feels_like);
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
        "https://api.openweathermap.org/geo/1.0/direct?q=Cluj&limit=5&appid=5b81f0d11c6be7a51dcf784becbd0145"
    );
    const locationData = await response.json();
}

async function getLocationFromSearch(searchCity) {
    const response = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${searchCity}&limit=5&appid=5b81f0d11c6be7a51dcf784becbd0145`
    );
    const locationData = await response.json();
    return { latitude: locationData[0].lat, longitude: locationData[0].lon };
}

async function fiveDay(cityLatitude, cityLongitude) {
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${cityLatitude}&lon=${cityLongitude}&appid=5b81f0d11c6be7a51dcf784becbd0145&units=metric`
    );
    const weatherForFiveDaysData = await response.json();
    const weatherList = weatherForFiveDaysData.list;
    const fiveDaysForecast = {};
    weatherList.forEach((elem) => {
        const date = elem.dt_txt.split(" ")[0];
        if (elem.dt_txt.endsWith("00:00:00")) {
            if (!fiveDaysForecast[date]) {
                fiveDaysForecast[date] = {
                    nightTemp: parseInt(elem.main.temp),
                };
            } else {
                fiveDaysForecast[date].nightTemp = parseInt(elem.main.temp);
            }
        } else if (elem.dt_txt.endsWith("15:00:00")) {
            if (!fiveDaysForecast[date]) {
                fiveDaysForecast[date] = {
                    dayTemp: parseInt(elem.main.temp),
                    dayDescription: elem.weather[0].description,
                    icon: elem.weather[0].icon,
                    date: date,
                };
            } else {
                fiveDaysForecast[date].dayTemp = parseInt(elem.main.temp);
                fiveDaysForecast[date].dayDescription =
                    elem.weather[0].description;
                fiveDaysForecast[date].icon = elem.weather[0].icon;
                fiveDaysForecast[date].date = date;
            }
        }
    });
    return Object.values(fiveDaysForecast);
}

export {
    getLocationFromSearch,
    getWeather,
    startWeather,
    fiveDay,
    startWeatherForFiveDays,
};
