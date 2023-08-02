const daySummary = document.getElementById("day_forecast");
const weatherPic = document.querySelector("body");
const icon = document.getElementById("icon");
const cityName = document.getElementById("city_heading");
const todayForcast = document.getElementById("weather_summary");

function formatDate(dateString) {
    const dateObject = new Date(dateString);
    const month = dateObject.getMonth() + 1;
    const date = dateObject.getDate();
    return `${month.toString().padStart(2, "0")}/${date.toString().padStart(2, "0")}`;
}

const apiData = (data) => {
    console.log(data);

    const { cityDetails, weather, currentWeather } = data;
    cityName.innerHTML = `${cityDetails.EnglishName}, ${cityDetails.AdministrativeArea.LocalizedName}`;

// Check if it's day or night
const changeBackgroundColor = currentWeather.IsDayTime
    ? "linear-gradient(#87ceeb, white) no-repeat"
    : "linear-gradient(#2b1055, #7597de) no-repeat";
weatherPic.style.background = changeBackgroundColor;

// Function to generate the HTML for each day's forecast
function generateForecastHTML(dayId, date, dayTemp, forecast, iconSrc) {
    return `
        <div id="${dayId}">
        <p class="date">${date}</p>
        <p class="temperature">${dayTemp}</p>
        <p class="forecastHeadline">${forecast}</p>
        <img class="icon" src="${iconSrc}">
        </div>
    `;
}

  // Format and generate data for each day
const dayForecasts = weather.DailyForecasts.map((day, index) => {
    const formattedDate = formatDate(day.Date);
    const dayTemp = `${day.Temperature.Maximum.Value}° / ${day.Temperature.Minimum.Value}°`;
    const forecast = day.Day.IconPhrase;
    const iconSrc = `SamplePng/${day.Day.Icon}.png`;
    const dayId = `day${index + 1}`;
    return generateForecastHTML(dayId, formattedDate, dayTemp, forecast, iconSrc);
});

// Rewrite and update HTML
todayForcast.innerHTML = `
    <p class="temperature">Currently: ${currentWeather.Temperature.Imperial.Value}°F</p>
    <p class="forecastHeadline">${currentWeather.WeatherText}</p>
    <img class="icon" src="SamplePng/${currentWeather.WeatherIcon}.png">
`;

daySummary.innerHTML = dayForecasts.join("");

// Change display to grid if anything appears
daySummary.style.display = "grid";
todayForcast.style.display = "contents";
};