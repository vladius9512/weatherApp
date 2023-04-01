import { getLocationFromSearch, getWeather, startWeather } from "./api.js";
import placeData from "./domManipulation.js";

const searchInp = document.getElementById("search");
let searchCity = "";
let cityLat, cityLon;

searchInp.addEventListener("keydown", async (e) => {
    if (e.key === "Enter") {
        searchCity = searchInp.value;
        searchInp.value = "";
        let cityArray = await getLocationFromSearch();
        cityLat = cityArray[0];
        cityLon = cityArray[1];
        let searchedCityArray = await getWeather();
        placeData(
            searchedCityArray[4],
            searchedCityArray[0],
            searchedCityArray[1],
            searchedCityArray[2],
            searchedCityArray[3]
        );
    }
});

async function firstEntry() {
    let firstWeatherArray = await startWeather();
    placeData(
        firstWeatherArray[4],
        firstWeatherArray[0],
        firstWeatherArray[1],
        firstWeatherArray[2],
        firstWeatherArray[3]
    );
}

firstEntry();

export { searchCity, cityLat, cityLon };
