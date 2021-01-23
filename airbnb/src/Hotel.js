import axios from "axios";
const options = {
  method: 'GET',
  url: 'https://best-booking-com-hotel.p.rapidapi.com/booking/best-accommodation',
  params: {cityName: 'Berlin', countryName: 'Germany'},
  headers: {
    'x-rapidapi-key': 'SIGN-UP-FOR-KEY',
    'x-rapidapi-host': 'best-booking-com-hotel.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
console.log(response.data);
}).catch(function (error) {
console.error(error);
});
