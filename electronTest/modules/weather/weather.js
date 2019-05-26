let request = require('request');

let apiKey = '4449f48e06a9d05954da3be07af79a4e';
let city = 'Detroit,us';
let url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${apiKey}&units=imperial`;

function imagePicker(id, day) {
	let element = "w" + day + "image";
	let path = "images/weather/";
	id = Number(id);
	if(id >= 200 && id <= 232) {path += "storm.svg";}
	if(id >= 300 && id <= 500) {path += "rainLight.svg";}
	if(id >= 501 && id <= 531) {path += "rainHeavy.svg";}
	if(id == 600 || id == 612 || id == 620 || id == 615) {path += "snowLight.svg";}
	else if(id >= 601 && id <= 622) {path += "snowHeavy.svg";}
	if(id == 701 || id == 741 || id == 711) {path += "fog.svg";}
	if(id == 800) {path += "sun.svg";}
	if(id >= 801 && id <= 802) {path += "cloudPartly.svg";}
	if(id > 802) {path += "cloudFull.svg";}	
	document.getElementById(element).src = path;
}

function setWeather(day, weather) {
	let data = weather.list[day];
	let id = data.weather[0].id;
	let temp = data.main.temp;
	let element = "w" + day + "temp";
	document.getElementById(element).innerHTML = temp;
	imagePicker(id, day);
}

request(url, function(err, response, body) {
	if(err){
		console.log('error:', error);
	} else {
		let weather = JSON.parse(body)
		let day = 0;
		//document.getElementById("w1image").src = "images/weather/storm.svg";
		for(day; day < 5; day++){
			setWeather(day, weather);
		}
	}
});
