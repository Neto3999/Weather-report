const daySummary = document.getElementById("day_forecast");
const weatherPic = document.querySelector("body");
const icon = document.getElementById("icon");
const cityName = document.getElementById("city_heading");

const apiData = (data) => {

    console.log(data);

    const { cityDetails, weather } = data;


//Weather icon
const iconSrc1 = `SamplePng/${weather.DailyForecasts[0].Day.Icon}.png`;
const iconSrc2 = `SamplePng/${weather.DailyForecasts[1].Day.Icon}.png`;
const iconSrc3 = `SamplePng/${weather.DailyForecasts[2].Day.Icon}.png`;
const iconSrc4 = `SamplePng/${weather.DailyForecasts[3].Day.Icon}.png`;
const iconSrc5 = `SamplePng/${weather.DailyForecasts[4].Day.Icon}.png`;


//Formatting the date
function formatDate(dateString) {
    const dateObject = new Date(dateString);
    const month = dateObject.getMonth() + 1;
    const date = dateObject.getDate();
    return `${month.toString().padStart(2, "0")}/${date.toString().padStart(2, "0")}`;
};

//Getting the date
const formattedDate1 = formatDate(weather.DailyForecasts[0].Date);
const formattedDate2 = formatDate(weather.DailyForecasts[1].Date);
const formattedDate3 = formatDate(weather.DailyForecasts[2].Date);
const formattedDate4 = formatDate(weather.DailyForecasts[3].Date);
const formattedDate5 = formatDate(weather.DailyForecasts[4].Date);


//Getting the day temperature
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

//Forecast
const forecast1 = weather.DailyForecasts[0].Day.IconPhrase;
const forecast2 = weather.DailyForecasts[1].Day.IconPhrase;
const forecast3 = weather.DailyForecasts[2].Day.IconPhrase;
const forecast4 = weather.DailyForecasts[3].Day.IconPhrase;
const forecast5 = weather.DailyForecasts[4].Day.IconPhrase;

//Rewritten and updated HTML
cityName.innerHTML = `${cityDetails.EnglishName}`;
daySummary.innerHTML = `
<li>
<p>${formattedDate1}</p>
<p>${dayTemp1}</p>
<p>${forecast1}</p>
<img src="${iconSrc1}">
</li>
<li>
<p>${formattedDate2}</p>
<p>${dayTemp2}</p>
<p>${forecast2}</p>
<img src="${iconSrc2}">
</li>
<li>
<p>${formattedDate3}</p>
<p>${dayTemp3}</p>
<p>${forecast3}</p>
<img src="${iconSrc3}">
</li>
<li>
<p>${formattedDate4}</p>
<p>${dayTemp4}</p>
<p>${forecast4}</p>
<img src="${iconSrc4}">
</li>
<li>
<p>${formattedDate5}</p>
<p>${dayTemp5}</p>
<p>${forecast5}</p>
<img src="${iconSrc5}">
</li>
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
if (daySummary.classList.contains("displayNone")) {
    daySummary.classList.remove("displayNone")
};

};