const weatherSummary = document.getElementById("weather_summary");
const weatherPic = document.querySelector("body");
const icon = document.getElementById("icon");

const apiData = (data) => {

    console.log(data);

    const { cityDetails, weather } = data;

//Weather icon
const iconSrc = `SamplePng/${weather.WeatherIcon}.png`;
icon.setAttribute('src', iconSrc);

//Rewritten and updated HTML
weatherSummary.innerHTML = `
<h1 id="city_heading">${cityDetails.EnglishName}</h1>
<p id="temperature">${weather.Temperature.Imperial.Value + '°F/' + weather.Temperature.Metric.Value + '°C'}</p>
<p id="forecast_headline">${weather.WeatherText}</p>
<img id="icon" src="${iconSrc}" alt="">
`;

//Check if its day or night
let changeBackgroundColor = null;
    if (weather.IsDayTime) {
        changeBackgroundColor = 'linear-gradient(#87ceeb, white) no-repeat';
    } else {
        changeBackgroundColor = 'linear-gradient(#2b1055, #7597de) no-repeat';
    };
weatherPic.style.background = changeBackgroundColor;

//Remove displayNone class if anything appears
if (weatherSummary.classList.contains('displayNone')) {
    weatherSummary.classList.remove('displayNone')
};

};