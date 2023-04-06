import { favoriteCityClickHandler, removeFavoriteCity } from "./script.js";

const dateDiv = document.getElementById("date");
const locationDiv = document.getElementById("location");
const tempDiv = document.getElementById("temp");
const realFeelDiv = document.getElementById("real-feel");
const skyDiv = document.getElementById("sky");
const windDiv = document.getElementById("wind");
const minTempDiv = document.getElementById("min-temp");
const forecastDiv = document.getElementById("forecast-container");
const favoritesContainerDiv = document.getElementById("favorites");

function resetForecastDiv() {
    forecastDiv.innerHTML = "";
}

function createElement(elemType, elemText) {
    const newElem = document.createElement(elemType);
    if (elemText) {
        newElem.innerText = elemText;
    }
    return newElem;
}

function createFavoriteElement(cityName, cityLat, cityLon) {
    const buttonDiv = createElement("div");
    buttonDiv.className = "button-container";
    buttonDiv.id = cityName;
    const favButton = createElement("button");
    const removeButton = createElement("button");
    removeButton.className = "removeBtn";
    removeButton.innerText = "R";
    favButton.innerText = cityName;
    buttonDiv.append(favButton, removeButton);
    favButton.id = cityName;
    favoritesContainerDiv.appendChild(buttonDiv);
    favButton.addEventListener("click", () => {
        favoriteCityClickHandler(cityLat, cityLon);
    });
    removeButton.addEventListener("click", () => {
        favoritesContainerDiv.removeChild(
            favoritesContainerDiv.children[cityName]
        );
        removeFavoriteCity(cityName);
    });
}

function createFiveDaysForecastElements(
    dayTemp,
    nightTemp,
    weatherDescription,
    icon,
    weekday
) {
    const dayDiv = createElement("div");
    dayDiv.className = "day-container";
    const dayOfWeekDiv = createElement("div");
    dayOfWeekDiv.className = "weekday";
    const tempsDiv = createElement("div");
    tempsDiv.className = "forecastDayTemp";
    const dayDescriptionDiv = createElement("div");
    dayDescriptionDiv.className = "forecastDayDescription";
    const dayTempElem = createElement("p", dayTemp + "°C");
    const nightTempElem = createElement("p", nightTemp + "°C");
    const imgDescribingDay = createElement("img");
    imgDescribingDay.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    const dayWeatherDescription = createElement("p", weatherDescription);
    const weekdayElem = createElement("p", weekday);
    dayOfWeekDiv.appendChild(weekdayElem);
    tempsDiv.append(dayTempElem, nightTempElem);
    dayDescriptionDiv.append(imgDescribingDay, dayWeatherDescription);
    dayDiv.append(dayOfWeekDiv, tempsDiv, dayDescriptionDiv);
    forecastDiv.appendChild(dayDiv);
}

function initializeWebsite(
    cityName,
    cityTemp,
    cityRealFeel,
    cityWind,
    citySky
) {
    const dateOb = new Date();
    const date = createElement(
        "p",
        dateOb.getDate() +
            "/" +
            Number(dateOb.getMonth() + 1) +
            "/" +
            dateOb.getFullYear()
    );
    const locationName = createElement("p", cityName);
    const temp = createElement("p", cityTemp + "°C");
    const realFeel = createElement("p", "Real Feel is " + cityRealFeel + "°C");
    const sky = createElement("p", citySky);
    if (citySky <= 20) {
        sky.innerText = "Sky looks bright";
    } else if (citySky <= 60) {
        sky.innerText = "Little bit cloudy";
    } else {
        sky.innerText = "Cloudy day";
    }
    const wind = createElement("p", cityWind);
    dateDiv.appendChild(date);
    locationDiv.appendChild(locationName);
    tempDiv.appendChild(temp);
    realFeelDiv.appendChild(realFeel);
    skyDiv.appendChild(sky);
    windDiv.appendChild(wind);
}

function placeData(
    cityName,
    cityTemp,
    cityRealFeel,
    cityWind,
    citySky,
    minTempOfDay
) {
    const locationName = createElement("p", cityName);
    const temp = createElement("p", cityTemp + "°C");
    const realFeel = createElement("p", "Real Feel is " + cityRealFeel + "°C");
    const sky = createElement("p", citySky);
    const wind = createElement("p", cityWind);
    const minTemp = createElement("p", minTempOfDay + "°C");
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
    if (minTempDiv.firstChild) {
        minTempDiv.removeChild(minTempDiv.firstChild);
    }
    if (citySky <= 20) {
        sky.innerText = "Sky looks bright";
    } else if (citySky <= 60) {
        sky.innerText = "Little bit cloudy";
    } else {
        sky.innerText = "Cloudy day";
    }
    locationDiv.appendChild(locationName);
    tempDiv.appendChild(temp);
    realFeelDiv.appendChild(realFeel);
    minTempDiv.appendChild(minTemp);
    skyDiv.appendChild(sky);
    windDiv.appendChild(wind);
}

export {
    placeData,
    initializeWebsite,
    createFiveDaysForecastElements,
    resetForecastDiv,
    createFavoriteElement,
};
