let city = "Austin";

(function(city) {
	const url = "http://api.openweathermap.org/data/2.5/weather?q=";
    const apiKey = "fc480c5aaec93162c2d8fd255dd1bfdb";
    let weather = {};

	//event listener, run on window load
	window.addEventListener(
		"load", //TODO update to onload to limit delay when button is clicked (location.js too)
		function(e) {
			//prevent default behavior (ie. page reload)
			e.preventDefault();
			//location variable for future purposes
			//const location = document.querySelector("#location").value;


			//fetch data from openweathermap api
			fetch(url + city + "&appid=" + apiKey) //replace Austin with location after testing complete
				.then(function(response) {
                    let data = response.json();
                    return data;
				})
				.then(function(data) {
                    console.log(data);
                    const degF = Math.floor((data.main.temp - 273.15) * 1.8 + 32);
                    weather = {
                        condition: data.weather[0].main,
                        degF: degF,
                        city: data.name
                    };
                    console.log(weather);
                })
/*
				.catch(function(error) {
                    console.log("Weather information unavailable. Error: " + error.message);
                });
*/
		},
		false
	);
})(city);