//API KEY//
const key = 'ie5qGmATFlKtN1FuIuseITyJgF5TrSH7';

//Current weather forecast//
const getCurrentWeather = async (id) => {

    const base = 'https://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
};

 //Weather Forecast//
const getWeather = async (id) => {

    const base = 'http://dataservice.accuweather.com/forecasts/v1/daily/5day/';
    const query = `${id}?apikey=${key}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data;
};

// Search city and city key//
const getCity = async (city) => {

    const base = 'https://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];

};