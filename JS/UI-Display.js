const weatherSummary = document.getElementById("weather_summary");

const apiData = (data) => {

    console.log(data);
    const { cityDetails, weather } = data;

    const cityheading = document.getElementById("city_heading");
    cityheading.innerHTML = cityDetails.EnglishName;

    //Rewritten and updated HTML
    weatherSummary.innerHTML = `
        <h1 id="city_heading">${cityDetails.EnglishName}</h1>
        <div class="forecastContainer">
            <div id="temperature">${weather.Temperature.Imperial.Value + '°F'}</div>
            <p id="forecast_headline">${weather.WeatherText}</p>
        </div>
        <div class="currentConditions"></div>
    `;
};

