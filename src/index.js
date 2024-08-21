
function whatCity(event) {
event.preventDefault();
let searchInput = document.querySelector("#search-input");
let query = searchInput.value.trim();
let apiKey = "65ae2e8ao4f01409ca53644a9atfcbed";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${query}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
console.log(apiUrl);}


function displayWeather(response) {
  let temperatureElement = document.querySelector("#current-temperature");
  let temperature = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = temperature;
}


  function formatDate(date) {
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let day = date.getDay();

    if (minutes < 10) {
      minutes = `0${minutes}`;
    }

    if (hours < 10) {
      hours = `0${hours}`;
    }

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let formattedDay = days[day];
    return `${formattedDay} ${hours}:${minutes}`;
  }

let form = document.querySelector("#city-form");
form.addEventListener("submit", whatCity);

let currentDateElement = document.querySelector("calendar");
let currentDate = new Date();

calendar.innerHTML = formatDate(currentDate);