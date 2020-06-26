let lat;
let lon;
const infoLocation = document.querySelector(".information-location");
const infoWeather = document.querySelector(".information-weather");

const APIKey = "359c4500a567ab39816e5612215bbcba";
const CELSIUS = "metric";

function success(pos) {
  lat = pos.coords.latitude;
  lon = pos.coords.longitude;
  let url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${CELSIUS}&appid=${APIKey}`;
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (myJson) {
      JSONFile = myJson;
      const city = myJson.name;
      const temperature = JSON.stringify(myJson.main.temp);
      infoWeather.innerHTML = `${temperature}&#8451`;
      infoLocation.innerHTML = `${city}`;
    });
}

function position() {
  navigator.geolocation.getCurrentPosition(success);
}

position();
