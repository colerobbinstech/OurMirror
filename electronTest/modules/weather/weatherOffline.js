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

function setWeather(day) {
	let id = 1;
	let tempMin = 60;
	let tempMax = 80;
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

let day = 0;
for(day; day < 5; day++){
	setWeather(day);
}

