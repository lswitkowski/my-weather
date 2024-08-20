
function whatCity(event) {
event.preventDefault();
let searchInput = document.querySelector("#search-input");
let h1 = document.querySelector("h1");

if (searchInput.value) {
  h1.innerHTML = searchInput.value;
} else {
  h1.innerHTML = null;
  alert("Please type a city");
}
}
function displayWeather(response) {
  let temperature = "response.data.temperature.current";
  let todayTemp = document.querySelector("#current-temperature-value");
  todayTemp.innerHTML = (Math.round(temperature));
}
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let days = ["Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",];

let day = days[now.getDay()];
let calendar = document.querySelector("#calendar");
calendar.innerHTML=`${day} ${hours}:${minutes}`;

let form = document.querySelector("#city-form");
form.addEventListener("submit", whatCity);

let query = "#search-input";
let apiKey = "665ae2e8ao4f01409ca53644a9atfcbed";
let apiUrl =
  ("https://api.shecodes.io/weather/v1/current?query=" +
  query +
  "&key=" +
  apiKey);

console.log(apiUrl);  