let request = require('request');

let apiKey = '4449f48e06a9d05954da3be07af79a4e';
let city = 'Detroit,us';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}&units=imperial`;

request(url, function(err, response, body) {
	if(err){
		console.log('error:', error);
	} else {
		let weather = JSON.parse(body)
		let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
		document.getElementById("weather").innerHTML = message;
	}
});
