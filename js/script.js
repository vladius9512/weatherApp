import { getLocationFromSearch, getWeather, startWeather } from "./api.js";

const searchInp = document.getElementById("search");
let searchCity = "";
let cityLat, cityLon;
let cityTemp, cityRealFeel, cityWind, citySky, cityName;

searchInp.addEventListener("keydown", async (e) => {
    if (e.key === "Enter") {
        searchCity = searchInp.value;
        searchInp.value = "";
        let cityArray = await getLocationFromSearch();
        cityLat = cityArray[0];
        cityLon = cityArray[1];
        getWeather();
        modifyValuesAfterSearch();
        placeData();
    }
});

async function firstEntry() {
    let firstWeatherArray = await startWeather();
    cityTemp = firstWeatherArray[0];
    cityRealFeel = firstWeatherArray[1];
    cityWind = firstWeatherArray[2];
    citySky = firstWeatherArray[3];
    cityName = firstWeatherArray[4];
}

firstEntry();

async function modifyValuesAfterSearch() {
    let searchedCityArray = await getWeather();
    cityTemp = searchedCityArray[0];
    cityRealFeel = searchedCityArray[1];
    cityWind = searchedCityArray[2];
    citySky = searchedCityArray[3];
    cityName = searchedCityArray[4];
}

const dateDiv = document.getElementById("date");
const locationDiv = document.getElementById("location");
const tempDiv = document.getElementById("temp");
const realFeelDiv = document.getElementById("real-feel");
const skyDiv = document.getElementById("sky");
const windDiv = document.getElementById("wind");

function createElement(elemType, elemText) {
    const newElem = document.createElement(elemType);
    newElem.innerText = elemText;
    return newElem;
}

async function placeData() {
    let locationName = createElement("p", cityName);
    let temp = createElement("p", cityTemp);
    let realFeel = createElement("p", "Real Feel is " + cityRealFeel);
    let sky = createElement("p", citySky);
    let wind = createElement("p", cityWind);
    if (locationDiv.firstChild) {
        locationDiv.removeChild(locationDiv.firstChild);
    }
    if (tempDiv.firstChild) {
        tempDiv.removeChild(tempDiv.firstChild);
    }
    if (realFeelDiv.firstChild) {
        realFeelDiv.removeChild(realFeelDiv.firstChild);
    }
    if (skyDiv.firstChild) {
        skyDiv.removeChild(skyDiv.firstChild);
    }
    if (windDiv.firstChild) {
        windDiv.removeChild(windDiv.firstChild);
    }
    locationDiv.appendChild(locationName);
    tempDiv.appendChild(temp);
    realFeelDiv.appendChild(realFeel);
    skyDiv.appendChild(sky);
    windDiv.appendChild(wind);
    await firstEntry();
}

placeData();

export {
    searchCity,
    cityLat,
    cityLon,
    cityTemp,
    cityRealFeel,
    cityWind,
    citySky,
    cityName,
};
