let weather = location => {
	const url = "http://api.openweathermap.org/data/2.5/weather?q=";
	const apiKey = "fc480c5aaec93162c2d8fd255dd1bfdb";
	let weather = {};
	console.log(location);

    //fetch data from openweathermap api
    fetch(url + location.city + "&appid=" + apiKey) //replace Austin with location after testing complete
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            const degF = Math.floor((data.main.temp - 273.15) * 1.8 + 32);
            weather = {
                condition: data.weather[0].main,
                degF: degF,
                city: data.name
            };
            console.log(weather);
            simpleSuccessUIUpdate(weather);
            //successUpdateUI(weather);
        })
        .catch(error => {
            console.log("Weather information unavailable. Error: " + error.message);
        });
}

//simple textContent update for testing purposes
const simpleSuccessUIUpdate = weather => {
    document.getElementById("modal-body-run").textContent = `It is ${weather.degF} and ${weather.condition} in ${weather.city}. Enjoy your run!`
}