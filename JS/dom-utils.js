const cityForm = document.querySelector('form');

const updateCity = async (city) => {

    const cityDetails = await getCity(city);
    const weather = await getWeather(cityDetails.Key);
    const currentWeather = await getCurrentWeather(cityDetails.Key)

    return { cityDetails, weather, currentWeather };

};

cityForm.addEventListener('submit', e => {

//Prevent default action//
    e.preventDefault();

//Get city value//
    const city = cityForm.city.value.trim();
    cityForm.reset();

//Update UI with new city//
updateCity(city)
    .then(data => apiData(data))
    .catch(err => console.log(err));
});