function getWeather() {
    fetch(
        "https://api.openweathermap.org/data/2.5/weather?lat=46.769379&lon=23.5899542&appid=5b81f0d11c6be7a51dcf784becbd0145"
    )
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            console.log(response);
        });
}

function getLocation() {
    fetch(
        "http://api.openweathermap.org/geo/1.0/direct?q=Cluj&limit=5&appid=5b81f0d11c6be7a51dcf784becbd0145"
    )
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            console.log(response);
            console.log(response[0].lat);
            console.log(response[0].lon);
        });
}

getLocation();
getWeather();
