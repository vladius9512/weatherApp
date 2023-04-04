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
} from "./domManipulation.js";

const searchInp = document.getElementById("search");

searchInp.addEventListener("keydown", async (e) => {
    if (e.key === "Enter") {
        const searchCity = searchInp.value;
        searchInp.value = "";
        const cityObj = await getLocationFromSearch(searchCity);
        const cityLat = cityObj.latitude;
        const cityLon = cityObj.longitude;
        const searchedCityObj = await getWeather(cityLat, cityLon);
        const fiveDaysForecast = await fiveDay(cityLat, cityLon);
        placeData(
            searchedCityObj.cityName,
            searchedCityObj.currentTemperature,
            searchedCityObj.currentFeelsLikeTemperature,
            searchedCityObj.wind,
            searchedCityObj.clouds,
            searchedCityObj.todaysMinimum
        );
        resetForecastDiv();
        fiveDaysForecast.forEach((elem) => {
            createFiveDaysForecastElements(
                elem.dayTemp,
                elem.nightTemp,
                elem.dayDescription,
                elem.icon
            );
        });
    }
});

async function firstEntryOnWebsite() {
    const firstWeatherObj = await startWeather();
    const fiveDaysForecast = await startWeatherForFiveDays();
    initializeWebsite(
        firstWeatherObj.cityName,
        firstWeatherObj.currentTemperature,
        firstWeatherObj.currentFeelsLikeTemperature,
        firstWeatherObj.wind,
        firstWeatherObj.clouds
    );
    fiveDaysForecast.forEach((elem) => {
        createFiveDaysForecastElements(
            elem.dayTemp,
            elem.nightTemp,
            elem.dayDescription,
            elem.icon
        );
    });
}

firstEntryOnWebsite();
