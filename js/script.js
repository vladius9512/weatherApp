import { getLocationFromSearch, getWeather } from "./api.js";

const searchInp = document.getElementById("search");
let searchCity = "";
let cityLat, cityLon;

searchInp.addEventListener("keydown", async (e) => {
    if (e.key === "Enter") {
        searchCity = searchInp.value;
        searchInp.value = "";
        let x = await getLocationFromSearch();
        cityLat = x[0];
        cityLon = x[1];
        getWeather();
    }
});

export { searchCity, cityLat, cityLon };
