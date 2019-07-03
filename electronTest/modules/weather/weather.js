let request = require('request');

let apiKey = 'X3LWLT8QoGZ1mh8NAFuH01icVANR9yGp';
let city = '20905_PC';
let url = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${city}?apikey=${apiKey}&language=en-us&details=true`;

function imagePicker(id, day) {
	let path = "./images/weather/";
	id = Number(id);
	if(id >= 15 && id <= 17) {path += "storm.svg";}
	if(id >= 12 && id <= 14) {path += "rainLight.svg";}
	if(id == 18) {path += "rainHeavy.svg";}
	if(id >= 19 && id <= 29) {path += "snowHeavy.svg";}
	if(id == 11) {path += "fog.svg";}
	if(id >= 1 && id <= 2) {path += "sun.svg";}
	if(id >= 3 && id <= 5) {path += "cloudPartly.svg";}
	if(id >= 6 && id <= 8) {path += "cloudFull.svg";}	
	return path;
}

function setWeather(day, weather) {
	let data = weather.DailyForecasts[day];
	let id = data.Day.Icon;
	let tempMin = data.Temperature.Minimum.Value;
	let tempMax = data.Temperature.Maximum.Value;
	var Day = document.createTextNode(getDays(day));
	var Min = document.createTextNode(tempMin);
	var Max = document.createTextNode(tempMax);
	var Img = document.createElement("IMG");
	var Br = document.createElement("BR");
	var TD = document.createElement("TD");
	var path = imagePicker(id, day);
	Img.setAttribute("src", path);
	Img.setAttribute("width", "150");
	Img.setAttribute("height", "150");
	var node = document.createElement("P");
	var node2 = document.createElement("P");
	node.appendChild(Max);
	node.appendChild(Br);
	node.appendChild(Min);
	node2.appendChild(Day);
	TD.appendChild(node2);
	TD.appendChild(Img);
	TD.appendChild(node);
	document.body.appendChild(TD);

}

function getDays (day) {
	let today = new Date();
	let currDay = today.getDay();
	let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
	return days[(currDay + day) % 7];
}

request(url, function(err, response, body) {
	if(err){
	} else {
		let weather = JSON.parse(body);
		let day = 0;
		for(day; day < 5; day++){
			setWeather(day, weather);
		}
		
	}
});

