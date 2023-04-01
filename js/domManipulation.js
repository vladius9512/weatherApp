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

function placeData(cityName, cityTemp, cityRealFeel, cityWind, citySky) {
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
}

export default placeData;
