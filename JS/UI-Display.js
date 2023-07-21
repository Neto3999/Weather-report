const weatherSummary = document.getElementById("weather_summary");
const weatherPic = document.querySelector("body");
const icon = document.getElementById("icon");

const apiData = (data) => {

    console.log(data);

    const { cityDetails, weather } = data;

//Rewritten and updated HTML
weatherSummary.innerHTML = `
<h1 id="city_heading">${cityDetails.EnglishName}</h1>
<div class="forecastContainer">
    <div id="temperature">${weather.Temperature.Imperial.Value + '°F'}</div>
    <p id="forecast_headline">${weather.WeatherText}</p>
</div>
<div class="currentConditions">
    <img src="" alt="">
</div>
`;

//Check if its day or night
let changeBackgroundColor = null;
    if (weather.IsDayTime) {
        changeBackgroundColor = 'red';
    } else {
        changeBackgroundColor = 'linear-gradient(#2b1055, #7597de) no-repeat';
    };
weatherPic.style.background = changeBackgroundColor;

//Weather icon
const iconSrc = `SamplePng/${weather.WeatherIcon}.png`;
icon.setAttribute('src', iconSrc);

};