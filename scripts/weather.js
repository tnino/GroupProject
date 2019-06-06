let weather = location => {
	const url = "http://api.openweathermap.org/data/2.5/weather?q=";
    const apiKey = "fc480c5aaec93162c2d8fd255dd1bfdb";
    const units = "&units=imperial";
    let weather = {};
    
	console.log(location);

    //fetch data from openweathermap api
    fetch(url + location.city + "&appid=" + apiKey+ units)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            // function  windCardinal(degree){
            //     if (degree>337.5) return 'North';
            //     if (degree>292.5) return 'Northwest';
            //     if(degree>247.5) return 'West';
            //     if(degree>202.5) return 'Southwest';
            //     if(degree>157.5) return 'South;
            //     if(degree>122.5) return 'Southeast';
            //     if(degree>67.5) return 'East';
            //     if(degree>22.5){return 'Northeast';}
            //     return 'North;
            // }
            weather = {
                city: data.name,
                condition: data.weather[0].main,
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

//variables 
var returnWeather;
console.log(weather);

// //Using this function to update the running modal. 
// //Here we tell the user if it is a good idea to go running or not. 
// $('#myModal1').on('shown.bs.modal', function (display) {

//     if (weather.temperature <= 40 ){
//     returnWeather = $("#modal-body-run").append(document.createTextNode ( `In ${weather.city} there is ${weather.condition} with a temperature of ${weather.temperature} degrees fahrenheit. The wind direction is ${weather.windDirection} with a speed of ${weather.windSpeed} MPH. Run another time!`));
//    // console.log(weather.city);
//     } if (weather.temperature >= 90 ){

//     returnWeather =  $("#modal-body-run").append(document.createTextNode (`In ${weather.city} there is ${weather.condition} with a temperature of ${weather.temperature} degrees fahrenheit. The wind direction is ${weather.windDirection} with a speed of ${weather.windSpeed} MPH. Run another time!`));
    
//     } else {
//        returnWeather = $("#modal-body-run").append(document.createTextNode (`In ${weather.city} there is  ${weather.condition} with a temperature of ${weather.temperature} degrees fahrenheit. The wind direction is ${weather.windDirection} with a speed of ${weather.windSpeed} MPH. Enjoy your run!`));
       
//        display();
//     }
//   });
 

  
// //simple textContent update for testing purposes
// const simpleSuccessUIUpdate = weather => {
//   // document.getElementById("modal-body-run").textContent = `In ${weather.city} there is ${weather.condition} with a temperature of ${weather.temperature} degrees fahrenheit. The wind direction is ${weather.windDirection} with a speed of ${weather.windSpeed}. Enjoy your run!`


// $('#myModal1').on('shown.bs.modal', function (display) {
// if (weather.temperature <= 40 ){
//     document.getElementById("modal-body-run").textContent = `In ${weather.city} there is ${weather.condition} with a temperature of ${weather.temperature} degrees fahrenheit. The wind direction is ${weather.windDirection} with a speed of ${weather.windSpeed}. Run another time!`
//     // console.log(weather.city);
//     } if (weather.temperature >= 90 ){

//         document.getElementById("modal-body-run").textContent = `In ${weather.city} there is ${weather.condition} with a temperature of ${weather.temperature} degrees fahrenheit. The wind direction is ${weather.windDirection} with a speed of ${weather.windSpeed}. Run another time!`
    
//     } else {
//         document.getElementById("modal-body-run").textContent = `In ${weather.city} there is ${weather.condition} with a temperature of ${weather.temperature} degrees fahrenheit. The wind direction is ${weather.windDirection} with a speed of ${weather.windSpeed}. Enjoy your run!`
       
//        display();
//     }
//   });

// }