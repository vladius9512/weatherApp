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

function initializeWebsite(
    cityName,
    cityTemp,
    cityRealFeel,
    cityWind,
    citySky
) {
    let dateOb = new Date();
    let date = createElement(
        "p",
        dateOb.getDate() +
            "/" +
            Number(dateOb.getMonth() + 1) +
            "/" +
            dateOb.getFullYear()
    );
    let locationName = createElement("p", cityName);
    let temp = createElement("p", cityTemp + "°C");
    let realFeel = createElement("p", "Real Feel is " + cityRealFeel + "°C");
    let sky = createElement("p", citySky);
    if (citySky <= 20) {
        sky.innerText = "Sky looks bright";
    } else if (citySky <= 60) {
        sky.innerText = "Little bit cloudy";
    } else {
        sky.innerText = "Cloudy day";
    }
    let wind = createElement("p", cityWind);
    dateDiv.appendChild(date);
    locationDiv.appendChild(locationName);
    tempDiv.appendChild(temp);
    realFeelDiv.appendChild(realFeel);
    skyDiv.appendChild(sky);
    windDiv.appendChild(wind);
}

function placeData(cityName, cityTemp, cityRealFeel, cityWind, citySky) {
    let locationName = createElement("p", cityName);
    let temp = createElement("p", cityTemp + "°C");
    let realFeel = createElement("p", "Real Feel is " + cityRealFeel + "°C");
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
    skyDiv.appendChild(sky);
    windDiv.appendChild(wind);
}

export { placeData, initializeWebsite };
