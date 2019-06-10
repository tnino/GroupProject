const simpleSuccessUIUpdate = weather => {
  
//Run
      $("#myModal1").on("show.bs.modal", function() {

         //below freezing
    if (weather.temperature < 30 && weather.wind <=20) {
        document.getElementById("modal-body-run").textContent = `The temperature is  ${weather.temperature} degrees fahrenheit. 
        The wind direction is ${weather.windDirection} with a speed of ${weather.windSpeed}. 
        It's freezing outside! Be careful if you go running or pick another activity.`;

      //mid-temperature
      } if (weather.temperature <= 45) {
      document.getElementById("modal-body-run").textContent = `The temperature is ${weather.temperature} degrees fahrenheit. 
      The wind direction is ${weather.windDirection} with a speed of ${weather.windSpeed}. Wear some layers!`;

    //hot
    } if (weather.temperature >= 90) {
      document.getElementById("modal-body-run").textContent = `The temperature is ${weather.temperature} degrees fahrenheit. 
      The wind direction is ${weather.windDirection} with a speed of ${weather.windSpeed}. It's hot out! Wear some sunscreen and bring extra water!`;

      //everything else
    } else {
      document.getElementById("modal-body-run").textContent = `The temperature is ${weather.temperature} degrees fahrenheit. The wind direction is 
      ${weather.windDirection} with a speed of ${weather.windSpeed}. Enjoy your run!`;
    }
  });

  //Swim
  $("#myModal2").on("show.bs.modal", function() {

//mid-temperature
    if (weather.temperature <= 55) {
        document.getElementById("modal-body-swim").textContent = `The temperature is ${weather.temperature} degrees fahrenheit. 
        The wind direction is ${weather.windDirection} with a speed of ${weather.windSpeed}. 
        It's a little chilly outside. Swim another time!`;

//below freezing
    } if (weather.wind >= 20) {
      document.getElementById("modal-body-swim").textContent = `The temperature is ${weather.temperature} degrees fahrenheit. 
      The wind direction is ${weather.windDirection} with a speed of ${weather.windSpeed}. It's super windy outside! Swim another time!`;

//hot
    }   if (weather.temperature >= 90) {
        document.getElementById("modal-body-swim").textContent = `The temperature is ${weather.temperature} degrees fahrenheit. 
        The wind direction is ${weather.windDirection} with a speed of ${weather.windSpeed}. It's hot outside! Wear sunscreen and bring extra water!`;
  
  //everything else
      } else {
      document.getElementById("modal-body-swim").textContent = `The temperature is ${weather.temperature} degrees fahrenheit. 
      The wind direction is ${weather.windDirection} with a speed of ${weather.windSpeed}. Enjoy your swim!`;
    }
  });

  //Rock Climb
  $("#myModal3").on("shown.bs.modal", function() {

//mid-temperature
    if (weather.temperature <= 40) {
      document.getElementById("modal-body-climb").textContent = `The temperature is ${weather.temperature} degrees fahrenheit. 
      The wind direction is ${weather.windDirection} with a speed of ${weather.windSpeed}. Climb another time!`;

//hot
    } if (weather.temperature >= 90) {
      document.getElementById("modal-body-climb").textContent = `The temperature is ${weather.temperature} degrees fahrenheit. 
      The wind direction is ${weather.windDirection} with a speed of ${weather.windSpeed}. It's hot out! Wear sunscreen and bring extra water!`;

    //everything else
    } else {
      document.getElementById("modal-body-climb").textContent = `The temperature is ${weather.temperature} degrees fahrenheit. 
      The wind direction is ${weather.windDirection} with a speed of ${weather.windSpeed}. Enjoy your climb!`;
    }
  });

  //Snowboard
  $("#myModal4").on("shown.bs.modal", function() {

    //cold
    if (weather.temperature <= 0) {
        document.getElementById("modal-body-board").textContent = `The temperature is ${weather.temperature} degrees fahrenheit. The wind direction is 
        ${weather.windDirection} with a speed of ${weather.windSpeed}. It's in the negatives! Pick another activity`;

//mid-temperature
    }if (weather.temperature <= 50) {
      document.getElementById("modal-body-board").textContent = `The temperature is ${weather.temperature} degrees fahrenheit. 
      The wind direction is ${weather.windDirection} with a speed of ${weather.windSpeed}. Go snowboarding!`;

    //warmer weather
    } if (weather.temperature > 55) {
      document.getElementById("modal-body-board").textContent = `The temperature is ${weather.temperature} degrees fahrenheit. 
      The wind direction is ${weather.windDirection} with a speed of ${weather.windSpeed}. 
      Is there even snow on the ground? Pick another activity!`;

//everything else
    } else {
      document.getElementById("modal-body-board").textContent = `The temperature is ${weather.temperature} degrees fahrenheit. 
      The wind direction is ${weather.windDirection} with a speed of ${weather.windSpeed}. Enjoy snowboarding!`;
    }
  });

  //Kayaking
  $("#myModal5").on("shown.bs.modal", function() {

//below freezing
    if (weather.temperature <= 30) {
      document.getElementById("modal-body-kayak").textContent = `The temperature is ${weather.temperature} degrees fahrenheit. 
      The wind direction is ${weather.windDirection} with a speed of ${weather.windSpeed}. It's chilly! Kayak another time.`;

     //windy 
    } if (weather.wind >= 20) {
      document.getElementById("modal-body-kayak").textContent = `The temperature is ${weather.temperature} degrees fahrenheit. 
      The wind direction is ${weather.windDirection} with a speed of ${weather.windSpeed}. It's windy outside! Kayak another time.`;

    //everything else 
    } else {
      document.getElementById("modal-body-kayak").textContent = `The temperature is ${weather.temperature} degrees fahrenheit. 
      The wind direction is ${weather.windDirection} with a speed of ${weather.windSpeed}. Enjoy Kayaking!`;
    }
  });

  //CrossFit
  $("#myModal6").on("shown.bs.modal", function() {
    
   //mid-temperature 
    if (weather.temperature <= 40) {
      document.getElementById("modal-body-cross").textContent = `The temperature is ${weather.temperature} degrees fahrenheit. 
      The wind direction is ${weather.windDirection} with a speed of ${weather.windSpeed}. 
      It's chilly outside! Wear some layers for your work out.`;

      //hot
    } if (weather.temperature >= 90) {
      document.getElementById("modal-body-cross").textContent = `The temperature is ${weather.temperature} degrees fahrenheit. 
      The wind direction is ${weather.windDirection} with a speed of ${weather.windSpeed}. 
      It's hot outside! Wear some sunscreen and bring some extra water for your workout.`;

      //everything else
    } else {
      document.getElementById("modal-body-cross").textContent = `The temperature is ${weather.temperature} degrees fahrenheit. 
      The wind direction is ${weather.windDirection} with a speed of ${weather.windSpeed}. Enjoy your work out!`;
    }
  });

  //Skating
  $("#myModal7").on("shown.bs.modal", function() {

    //mid-temperature
    if (weather.temperature <= 40) {
      document.getElementById("modal-body-skate").textContent = `The temperature is ${weather.temperature} degrees fahrenheit. 
      The wind direction is ${weather.windDirection} with a speed of ${weather.windSpeed}. It's a little chilly outside! Wear some layers.`;

      //freezing
    } if (weather.temperature <= 30) {
        document.getElementById("modal-body-skate").textContent = `The temperature is ${weather.temperature} degrees fahrenheit. 
        The wind direction is ${weather.windDirection} with a speed of ${weather.windSpeed}. It's freezing outside! Pick another activity.`;
    
      //hot
    } if (weather.temperature >= 90) {
      document.getElementById("modal-body-skate").textContent = `The temperature is ${weather.temperature} degrees fahrenheit. 
      The wind direction is ${weather.windDirection} with a speed of ${weather.windSpeed}. 
      It's hot outside! Wear some sunscreen and bring extra water. `;

      //everything else
    } else {
      document.getElementById("modal-body-skate").textContent = `The temperature is ${weather.temperature} degrees fahrenheit. 
      The wind direction is ${weather.windDirection} with a speed of ${weather.windSpeed}. Enjoy skating!`;
    }
  });

  //Yoga
  $("#myModal8").on("shown.bs.modal", function() {

//mid-temperature
    if (weather.temperature <= 40) {
      document.getElementById("modal-body-yoga").textContent = `The temperature is ${weather.temperature} degrees fahrenheit. 
      The wind direction is ${weather.windDirection} with a speed of ${weather.windSpeed}. 
      It's chilly outside! Wear some layers or practice inside.`;
    
      //hot
    } if (weather.temperature >= 90) {
      document.getElementById("modal-body-yoga").textContent = `The temperature is ${weather.temperature} degrees fahrenheit. 
      The wind direction is ${weather.windDirection} with a speed of ${weather.windSpeed}. 
      It's hot out! Wear sunscreen and bring extra water.`;

      //everything else
    } else {
      document.getElementById("modal-body-yoga").textContent = `The temperature is ${weather.temperature} degrees fahrenheit. 
      The wind direction is ${weather.windDirection} with a speed of ${weather.windSpeed}. Enjoy yoga!`;
    }
  });

  //Boxing
  $("#myModal9").on("shown.bs.modal", function() {

//mid-temperture
    if (weather.temperature <= 40) {
      document.getElementById("modal-body-box").textContent = `The temperature is ${weather.temperature} degrees fahrenheit. 
      The wind direction is ${weather.windDirection} with a speed of ${weather.windSpeed}. It's chilly outside! Wear some layers.`;

    //hot
    } if (weather.temperature >= 90) {
      document.getElementById("modal-body-box").textContent = `The temperature is ${weather.temperature} degrees fahrenheit. The wind direction is 
      ${weather.windDirection} with a speed of ${weather.windSpeed}. It's hot outside! Wear sunscreen and bring extra water.`;

      //everything else
    } else {
      document.getElementById("modal-body-box").textContent = `The temperature is ${weather.temperature} degrees fahrenheit. 
      The wind direction is ${weather.windDirection} with a speed of ${weather.windSpeed}. Enjoy boxing!`;
    }
  });
};


// //rain
// } if (weather.condition === 'rain' || weather.condition === 'moderate rain' || weather.condition === 'heavy intensity rain'
// || weather.condition === 'very heavy rain'|| weather.condition === 'extreme rain' || weather.condition === 'freezing rain' 
// || weather.condition === 'light intensity shower rain' || weather.condition === 'shower rain' || weather.condition === 'heavy intensity shower rain' 
// || weather.condition === 'ragged shower rain') {
//   document.getElementById("modal-body-run").textContent = `In ${weather.city} there is 
//   ${weather.condition} with a temperature of ${weather.temperature} degrees fahrenheit. 
//   The wind direction is ${weather.windDirection} with a speed of ${weather.windSpeed}. 
//   It's raining outside! Pick another activity.`;

// //thunderstorm
// }  if (weather.condition === 'thunderstorm with light rain' || weather.condition === 'thunderstorm with rain' || weather.condition === 'thunderstorm heavy rain'
// || weather.condition === 'light thunderstorm'|| weather.condition === 'thunderstorm' || weather.condition === 'heavy thunderstorm' 
// || weather.condition === 'ragged thunderstorm' || weather.condition === 'thunderstrom with drizzle' || weather.condition === 'thunderstrom with heavy drizzle') {
// document.getElementById("modal-body-run").textContent = `In ${weather.city} there is 
// ${weather.condition} with a temperature of ${weather.temperature} degrees fahrenheit. 
// The wind direction is ${weather.windDirection} with a speed of ${weather.windSpeed}. 
// There's a thunderstorm! Pick another activity.`;

// //snow
// } if (weather.condition === 'snow' || weather.condition === 'heavy snow' || weather.condition === 'light snow') {
//   document.getElementById("modal-body-run").textContent = `In ${weather.city} there is 
//   ${weather.condition} with a temperature of ${weather.temperature} degrees fahrenheit. 
//   The wind direction is ${weather.windDirection} with a speed of ${weather.windSpeed}. 
//   It's snowing outside! Pick another activity.`;

// //sleet
// } if (weather.condition === 'sleet' || weather.condition === 'light shower sleet' || weather.condition === 'shower sleet') {
//   document.getElementById("modal-body-run").textContent = `In ${weather.city} there is 
//   ${weather.condition} with a temperature of ${weather.temperature} degrees fahrenheit. 
//   The wind direction is ${weather.windDirection} with a speed of ${weather.windSpeed}. 
//   It's sleeting outside! Pick another activity.`;

// //rain and snow
// } if (weather.condition === 'light rain and snow' || weather.condition === 'rain and snow') {
//   document.getElementById("modal-body-run").textContent = `In ${weather.city} there is 
//   ${weather.condition} with a temperature of ${weather.temperature} degrees fahrenheit. 
//   The wind direction is ${weather.windDirection} with a speed of ${weather.windSpeed}. 
//   It's snowing and raining outside! Pick another activity.`;

// //atmosphere
// } if (weather.condition === 'smoke' || weather.condition === 'Haze' || weather.condition === 'sand/dust whirls'
// || weather.condition === 'sand'|| weather.condition === 'dust' || weather.condition === 'volcanic ash' 
// || weather.condition === 'squalls' || weather.condition === 'tornado') {
//   document.getElementById("modal-body-run").textContent = `In ${weather.city} there is 
//   ${weather.condition} with a temperature of ${weather.temperature} degrees fahrenheit. 
//   The wind direction is ${weather.windDirection} with a speed of ${weather.windSpeed}. 
//   There's a thunderstorm! Pick another activity.`;