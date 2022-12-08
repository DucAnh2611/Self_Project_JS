window.onload = async () => {
	let UrlLinkInfor = {
		url: 'http://api.weatherstack.com/',
		mode: "current",
		accessKey: '?access_key=741dc3b7b24b896e299c78af0d6ad8a0',
		place: '&query=Hanoi,viet_nam',
	}
	var informationWeather = await getDataFromURL(UrlLinkInfor);
	console.log(informationWeather);

	let displaceInformationPlace = document.querySelectorAll(".informationLocation");
	
	let temperatureDisplay = displaceInformationPlace[0];
	let windDirection = displaceInformationPlace[1];
	let windSpeed = displaceInformationPlace[2];

	temperatureDisplay.innerHTML = informationWeather.temperature;
	windDirection.innerHTML = informationWeather.wind_dir;
	windSpeed.innerHTML = informationWeather.wind_speed;

	let iconWeather = document.querySelector(".iconWeather");
	iconWeather.innerHTML += "<img class='testWeather' src='" +  informationWeather.weather_icons + "'>";
	
}

async function getDataFromURL(urlLinkInfor) {
	let urlLink = urlLinkInfor.url + urlLinkInfor.mode +urlLinkInfor.accessKey +urlLinkInfor.place;
	let returnObj = await fetch(urlLink)
	.then(response => response.json())
	.then((response) => {
		informationWeather = response;
		let [currentKey, currentKeyValue] = Object.entries(informationWeather)[Object.keys(informationWeather).length-1]
		return currentKeyValue;
	})
	.catch(err => console.error(err));
	return returnObj;
}
