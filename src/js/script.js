import {
    getLocationFromSearch,
    getWeather,
    startWeather,
    fiveDay,
    startWeatherForFiveDays,
} from "./api.js";
import {
    placeData,
    initializeWebsite,
    createFiveDaysForecastElements,
    resetForecastDiv,
    createFavoriteElement,
} from "./domManipulation.js";

const daysOfWeekArr = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
let favoritesList = [];
let currentCityName = "Al-Qassim";
let currentCityLat = 26.769379;
let currentCityLon = 43.5899542;
const searchInp = document.getElementById("search");
const favoriteBtn = document.getElementById("favorite");

function getUserCurrentLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                currentCityLat = position.coords.latitude;
                currentCityLon = position.coords.longitude;
                firstEntryOnWebsite();
            },
            () => {
                firstEntryOnWebsite();
            }
        );
    } else {
        firstEntryOnWebsite();
    }
}

searchInp.addEventListener("keydown", async (e) => {
    if (e.key === "Enter") {
        const searchCity = searchInp.value;
        currentCityName = searchInp.value;
        searchInp.value = "";
        const cityObj = await getLocationFromSearch(searchCity);
        const cityLat = cityObj.latitude;
        const cityLon = cityObj.longitude;
        currentCityLat = cityObj.latitude;
        currentCityLon = cityObj.longitude;
        const searchedCityObj = await getWeather(cityLat, cityLon);
        const fiveDaysForecast = await fiveDay(cityLat, cityLon);
        placeData(
            searchedCityObj.cityName,
            searchedCityObj.currentTemperature,
            searchedCityObj.currentFeelsLikeTemperature,
            searchedCityObj.wind,
            searchedCityObj.clouds
        );
        resetForecastDiv();
        if (!("nightTemp" in fiveDaysForecast[0])) {
            fiveDaysForecast[0]["nightTemp"] =
                fiveDaysForecast[fiveDaysForecast.length - 1].nightTemp;
            fiveDaysForecast.pop();
        }
        const currentDate = new Date();
        let dayValue = currentDate.getDay();
        fiveDaysForecast.forEach((elem) => {
            if (dayValue > 6) {
                dayValue = 0;
            }
            const dayOfWeek = daysOfWeekArr[dayValue];
            dayValue++;
            createFiveDaysForecastElements(
                elem.dayTemp,
                elem.nightTemp,
                elem.dayDescription,
                elem.icon,
                dayOfWeek
            );
        });
    }
});

favoriteBtn.addEventListener("click", () => {
    if (
        favoritesList.find((elem) => elem.name === currentCityName) !==
        undefined
    ) {
        return;
    }
    favoritesList.push({
        name: currentCityName,
        latitude: currentCityLat,
        longitude: currentCityLon,
    });
    createFavoriteElement(currentCityName, currentCityLat, currentCityLon);
});

async function favoriteCityClickHandler(cityLat, cityLon) {
    const searchedCityObj = await getWeather(cityLat, cityLon);
    const fiveDaysForecast = await fiveDay(cityLat, cityLon);
    placeData(
        searchedCityObj.cityName,
        searchedCityObj.currentTemperature,
        searchedCityObj.currentFeelsLikeTemperature,
        searchedCityObj.wind,
        searchedCityObj.clouds
    );
    resetForecastDiv();
    if (!("nightTemp" in fiveDaysForecast[0])) {
        fiveDaysForecast[0]["nightTemp"] =
            fiveDaysForecast[fiveDaysForecast.length - 1].nightTemp;
        fiveDaysForecast.pop();
    }
    const currentDate = new Date();
    let dayValue = currentDate.getDay();
    fiveDaysForecast.forEach((elem) => {
        if (dayValue > 6) {
            dayValue = 0;
        }
        const dayOfWeek = daysOfWeekArr[dayValue];
        dayValue++;
        createFiveDaysForecastElements(
            elem.dayTemp,
            elem.nightTemp,
            elem.dayDescription,
            elem.icon,
            dayOfWeek
        );
    });
}

function removeFavoriteCity(cityName) {
    favoritesList = favoritesList.filter((elem) => elem.name !== cityName);
}

async function firstEntryOnWebsite() {
    const firstWeatherObj = await startWeather(currentCityLat, currentCityLon);
    currentCityName = firstWeatherObj.cityName;
    const fiveDaysForecast = await startWeatherForFiveDays(
        currentCityLat,
        currentCityLon
    );
    initializeWebsite(
        firstWeatherObj.cityName,
        firstWeatherObj.currentTemperature,
        firstWeatherObj.currentFeelsLikeTemperature,
        firstWeatherObj.wind,
        firstWeatherObj.clouds
    );
    if (!("nightTemp" in fiveDaysForecast[0])) {
        fiveDaysForecast[0]["nightTemp"] =
            fiveDaysForecast[fiveDaysForecast.length - 1].nightTemp;
        fiveDaysForecast.pop();
    }
    const currentDate = new Date();
    let dayValue = currentDate.getDay();
    fiveDaysForecast.forEach((elem) => {
        if (dayValue > 6) {
            dayValue = 0;
        }
        const dayOfWeek = daysOfWeekArr[dayValue];
        dayValue++;
        createFiveDaysForecastElements(
            elem.dayTemp,
            elem.nightTemp,
            elem.dayDescription,
            elem.icon,
            dayOfWeek
        );
    });
}

getUserCurrentLocation();

export { favoriteCityClickHandler, removeFavoriteCity };
