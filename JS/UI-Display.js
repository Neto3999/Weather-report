const daySummary = document.getElementById("day_forecast");
const weatherPic = document.querySelector("body");
const icon = document.getElementById("icon");
const cityName = document.getElementById("city_heading");
const todayForcast = document.getElementById("weather_summary");

const apiData = (data) => {

    console.log(data);

    const { cityDetails, weather, currentWeather } = data;

//Formatting the date//
function formatDate(dateString) {
    const dateObject = new Date(dateString);
    const month = dateObject.getMonth() + 1;
    const date = dateObject.getDate();
    return `${month.toString().padStart(2, "0")}/${date.toString().padStart(2, "0")}`;
};

//Getting the date//
const formattedDate1 = formatDate(weather.DailyForecasts[0].Date);
const formattedDate2 = formatDate(weather.DailyForecasts[1].Date);
const formattedDate3 = formatDate(weather.DailyForecasts[2].Date);
const formattedDate4 = formatDate(weather.DailyForecasts[3].Date);
const formattedDate5 = formatDate(weather.DailyForecasts[4].Date);

//Getting the day temperature//
const dayTemp0 = currentWeather.Temperature.Imperial.Value + "°F"
const dayTemp1 = weather.DailyForecasts[0].Temperature.Maximum.Value + "° / " + 
weather.DailyForecasts[0].Temperature.Minimum.Value + "°";
const dayTemp2 = weather.DailyForecasts[1].Temperature.Maximum.Value + "° / " + 
weather.DailyForecasts[1].Temperature.Minimum.Value + "°";
const dayTemp3 = weather.DailyForecasts[2].Temperature.Maximum.Value + "° / " + 
weather.DailyForecasts[2].Temperature.Minimum.Value + "°";
const dayTemp4 = weather.DailyForecasts[3].Temperature.Maximum.Value + "° / " + 
weather.DailyForecasts[3].Temperature.Minimum.Value + "°";
const dayTemp5 = weather.DailyForecasts[4].Temperature.Maximum.Value + "° / " + 
weather.DailyForecasts[4].Temperature.Minimum.Value + "°";

//Getting the Forecast//
const forecast0 = currentWeather.WeatherText;
const forecast1 = weather.DailyForecasts[0].Day.IconPhrase;
const forecast2 = weather.DailyForecasts[1].Day.IconPhrase;
const forecast3 = weather.DailyForecasts[2].Day.IconPhrase;
const forecast4 = weather.DailyForecasts[3].Day.IconPhrase;
const forecast5 = weather.DailyForecasts[4].Day.IconPhrase;

//Weather icon//
const iconSrc0 = `SamplePng/${currentWeather.WeatherIcon}.png`;
const iconSrc1 = `SamplePng/${weather.DailyForecasts[0].Day.Icon}.png`;
const iconSrc2 = `SamplePng/${weather.DailyForecasts[1].Day.Icon}.png`;
const iconSrc3 = `SamplePng/${weather.DailyForecasts[2].Day.Icon}.png`;
const iconSrc4 = `SamplePng/${weather.DailyForecasts[3].Day.Icon}.png`;
const iconSrc5 = `SamplePng/${weather.DailyForecasts[4].Day.Icon}.png`;

//Rewritten and updated HTML//
cityName.innerHTML = `${cityDetails.EnglishName}`;
todayForcast.innerHTML = `
<p class="temperature">Currently: ${dayTemp0}</p>
<p class="forecastHeadline">${forecast0}</p>
<img class="icon" src="${iconSrc0}">
`;

daySummary.innerHTML = `
<div id="day1">
<p class="date">${formattedDate1}</p>
<p class="temperature">${dayTemp1}</p>
<p class="forecastHeadline">${forecast1}</p>
<img class="icon" src="${iconSrc1}">
</div>
<div id="day2">
<p class="date">${formattedDate2}</p>
<p class="temperature">${dayTemp2}</p>
<p class="forecastHeadline">${forecast2}</p>
<img class="icon" src="${iconSrc2}">
</div>
<div id="day3">
<p class="date">${formattedDate3}</p>
<p class="temperature">${dayTemp3}</p>
<p class="forecastHeadline">${forecast3}</p>
<img class="icon" src="${iconSrc3}">
</div>
<div id="day4">
<p class="date">${formattedDate4}</p>
<p class="temperature">${dayTemp4}</p>
<p class="forecastHeadline">${forecast4}</p>
<img class="icon" src="${iconSrc4}">
</div>
<div id="day5">
<p class="date">${formattedDate5}</p>
<p class="temperature">${dayTemp5}</p>
<p class="forecastHeadline">${forecast5}</p>
<img class="icon" src="${iconSrc5}">
</div>
`;

//Check if its day or night, doesnt function for 7 days of the week//
let changeBackgroundColor = null;
    if (currentWeather.IsDayTime) {
        changeBackgroundColor = 'linear-gradient(#87ceeb, white) no-repeat';
    } else {
        changeBackgroundColor = 'linear-gradient(#2b1055, #7597de) no-repeat';
    };
weatherPic.style.background = changeBackgroundColor;

//Change display to grid if anything appears//
daySummary.style.display = "grid";
todayForcast.style.display = "contents";

};