const daySummary = document.getElementById("day_forecast");
const weatherPic = document.querySelector("body");
const icon = document.getElementById("icon");

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
    return `${month.toString().padStart(2, "0")}-${date.toString().padStart(2, "0")}`;
};

//Getting the date
const formattedDate1 = formatDate(weather.DailyForecasts[0].Date);
const formattedDate2 = formatDate(weather.DailyForecasts[1].Date);
const formattedDate3 = formatDate(weather.DailyForecasts[2].Date);
const formattedDate4 = formatDate(weather.DailyForecasts[3].Date);
const formattedDate5 = formatDate(weather.DailyForecasts[4].Date);


//Getting the day temperature
const dayTemp1 = weather.DailyForecasts[0].Temperature.Maximum.Value;
const dayTemp2 = weather.DailyForecasts[1].Temperature.Maximum.Value;
const dayTemp3 = weather.DailyForecasts[2].Temperature.Maximum.Value;
const dayTemp4 = weather.DailyForecasts[3].Temperature.Maximum.Value;
const dayTemp5 = weather.DailyForecasts[4].Temperature.Maximum.Value;

//Rewritten and updated HTML
daySummary.innerHTML = `
<li>
<p>${formattedDate1}</p>
<p>${dayTemp1}</p>
<img src="${iconSrc1}">
</li>
<li>
<p>${formattedDate2}</p>
<p>${dayTemp2}</p>
<img src="${iconSrc2}">
</li>
<li>
<p>${formattedDate3}</p>
<p>${dayTemp3}</p>
<img src="${iconSrc3}">
</li>
<li>
<p>${formattedDate4}</p>
<p>${dayTemp4}</p>
<img src="${iconSrc4}">
</li>
<li>
<p>${formattedDate5}</p>
<p>${dayTemp5}</p>
<img src="${iconSrc5}">
</li>
<h1 id="city_heading">${cityDetails.EnglishName}</h1>
<p id="temperature">${weather.DailyForecasts[0].Temperature.Maximum.Value + '°F/'}</p>
<p id="forecast_headline">${weather.DailyForecasts[0].Day.IconPhrase}</p>
<img id="icon" src="${iconSrc3}" alt="">;
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
if (daySummary.classList.contains('displayNone')) {
    daySummary.classList.remove('displayNone')
};

};