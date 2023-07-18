//      `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${key}&q=${cityName}`
const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://dark-sky.p.rapidapi.com/%7Blatitude%7D,%7Blongitude%7D',
  params: {
    units: 'auto',
    lang: 'en'
  },
  headers: {
    'X-RapidAPI-Key': '1b0eae58eamsh93cebb8d01e0303p1cf89ejsnea9ec6d3328a',
    'X-RapidAPI-Host': 'dark-sky.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}