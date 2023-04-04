import {
    getLocationFromSearch,
    getWeather,
    startWeather,
    fiveDay,
} from "./api.js";
import { placeData, initializeWebsite } from "./domManipulation.js";

const searchInp = document.getElementById("search");

searchInp.addEventListener("keydown", async (e) => {
    if (e.key === "Enter") {
        let searchCity = searchInp.value;
        searchInp.value = "";
        let cityArray = await getLocationFromSearch(searchCity);
        let cityLat = cityArray.latitude;
        let cityLon = cityArray.longitude;
        let searchedCityArray = await getWeather(cityLat, cityLon);
        fiveDay(cityLat, cityLon);
        placeData(
            searchedCityArray.cityName,
            searchedCityArray.currentTemperature,
            searchedCityArray.currentFeelsLikeTemperature,
            searchedCityArray.clouds,
            searchedCityArray.wind,
            searchedCityArray.todaysMinimum
        );
    }
});

async function firstEntryOnWebsite() {
    let firstWeatherArray = await startWeather();
    initializeWebsite(
        firstWeatherArray.cityName,
        firstWeatherArray.currentTemperature,
        firstWeatherArray.currentFeelsLikeTemperature,
        firstWeatherArray.clouds,
        firstWeatherArray.wind
    );
}

firstEntryOnWebsite();
