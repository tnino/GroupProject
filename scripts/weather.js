let weather = location => {
	const url = "http://api.openweathermap.org/data/2.5/weather?q=";
    const apiKey = "fc480c5aaec93162c2d8fd255dd1bfdb";
    const units = "&units=imperial";
    let weather = {};
    

    //fetch data from openweathermap api
    fetch(url + location.city + "&appid=" + apiKey+ units)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            weather = {
                city: data.name,
                condition: data.weather[0].description,
                temperature: data.main.temp,
                windDirection: data.wind.deg,
                windSpeed: data.wind.speed,
            
            };
            console.log(weather);
            simpleSuccessUIUpdate(weather);
            //successUpdateUI(weather);
        })
        .catch(error => {
            console.log("Weather information unavailable. Error: " + error.message);
        });
}




