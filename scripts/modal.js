
// //simple textContent update for testing purposes
const simpleSuccessUIUpdate = weather => {
  //Run
  $("#myModal1").on("shown.bs.modal", function() {

    if (weather.temperature < 30) {
        document.getElementById("modal-body-run").textContent = `In ${
          weather.city
        } there is ${weather.condition} with a temperature of ${
          weather.temperature
        } degrees fahrenheit. The wind direction is ${
          weather.windDirection
        } with a speed of ${weather.windSpeed}. It's freezing outside! Be careful if you go running or pick another activity.`;

      } if (weather.temperature <= 45) {
      document.getElementById("modal-body-run").textContent = `In ${
        weather.city
      } there is ${weather.condition} with a temperature of ${
        weather.temperature
      } degrees fahrenheit. The wind direction is ${
        weather.windDirection
      } with a speed of ${weather.windSpeed}. Wear some layers!`;

    } if (weather.temperature >= 90) {
      document.getElementById("modal-body-run").textContent = `In ${
        weather.city
      } there is ${weather.condition} with a temperature of ${
        weather.temperature
      } degrees fahrenheit. The wind direction is ${
        weather.windDirection
      } with a speed of ${weather.windSpeed}. Wear some sunscreen and bring some water!`;

    } else {
      document.getElementById("modal-body-run").textContent = `In ${
        weather.city
      } there is ${weather.condition} with a temperature of ${
        weather.temperature
      } degrees fahrenheit. The wind direction is ${
        weather.windDirection
      } with a speed of ${weather.windSpeed}. Enjoy your run!`;
    }
  });

  //Swim
  $("#myModal2").on("shown.bs.modal", function() {
    if (weather.temperature <= 55) {
        document.getElementById("modal-body-swim").textContent = `In ${
          weather.city
        } there is ${weather.condition} with a temperature of ${
          weather.temperature
        } degrees fahrenheit. The wind direction is ${
          weather.windDirection
        } with a speed of ${weather.windSpeed}. It's a little chilly outside. Swim another time!`;
  
      }if (weather.temperature <= 55 && weather.condition = 'cloudy') {
      document.getElementById("modal-body-swim").textContent = `In ${
        weather.city
      } there is ${weather.condition} with a temperature of ${
        weather.temperature
      } degrees fahrenheit. The wind direction is ${
        weather.windDirection
      } with a speed of ${weather.windSpeed}. It's a little chilly outside. Swim another time!`;

    } if (weather.wind >= 20) {
      document.getElementById("modal-body-swim").textContent = `In ${
        weather.city
      } there is ${weather.condition} with a temperature of ${
        weather.temperature
      } degrees fahrenheit. The wind direction is ${
        weather.windDirection
      } with a speed of ${weather.windSpeed}. It's super windy outside! Swim another time!`;

    } else {
      document.getElementById("modal-body-swim").textContent = `In ${
        weather.city
      } there is ${weather.condition} with a temperature of ${
        weather.temperature
      } degrees fahrenheit. The wind direction is ${
        weather.windDirection
      } with a speed of ${weather.windSpeed}. Enjoy your swim!`;
    }
  });

  //Rock Climb
  $("#myModal3").on("shown.bs.modal", function() {

    if (weather.temperature <= 40) {
      document.getElementById("modal-body-climb").textContent = `In ${
        weather.city
      } there is ${weather.condition} with a temperature of ${
        weather.temperature
      } degrees fahrenheit. The wind direction is ${
        weather.windDirection
      } with a speed of ${weather.windSpeed}. Climb another time!`;

    } if (weather.temperature >= 90) {
      document.getElementById("modal-body-climb").textContent = `In ${
        weather.city
      } there is ${weather.condition} with a temperature of ${
        weather.temperature
      } degrees fahrenheit. The wind direction is ${
        weather.windDirection
      } with a speed of ${weather.windSpeed}. Climb another time!`;

    } else {
      document.getElementById("modal-body-climb").textContent = `In ${
        weather.city
      } there is ${weather.condition} with a temperature of ${
        weather.temperature
      } degrees fahrenheit. The wind direction is ${
        weather.windDirection
      } with a speed of ${weather.windSpeed}. Enjoy your climb!`;
    }
  });
  //Snowboard
  $("#myModal4").on("shown.bs.modal", function() {

    if (weather.temperature <= 0 && weather.wind <=20) {
      document.getElementById("modal-body-board").textContent = `In ${
        weather.city
      } there is ${weather.condition} with a temperature of ${
        weather.temperature
      } degrees fahrenheit. The wind direction is ${
        weather.windDirection
      } with a speed of ${weather.windSpeed}. It's storming outside! Pick another activity`;

    }if (weather.temperature <= 50) {
      document.getElementById("modal-body-board").textContent = `In ${
        weather.city
      } there is ${weather.condition} with a temperature of ${
        weather.temperature
      } degrees fahrenheit. The wind direction is ${
        weather.windDirection
      } with a speed of ${weather.windSpeed}. Go snowboarding!`;

    } if (weather.temperature > 55) {
      document.getElementById("modal-body-board").textContent = `In ${
        weather.city
      } there is ${weather.condition} with a temperature of ${
        weather.temperature
      } degrees fahrenheit. The wind direction is ${
        weather.windDirection
      } with a speed of ${weather.windSpeed}. Is there even snow on the ground? Pick another activity!`;

    } else {
      document.getElementById("modal-body-board").textContent = `In ${
        weather.city
      } there is ${weather.condition} with a temperature of ${
        weather.temperature
      } degrees fahrenheit. The wind direction is ${
        weather.windDirection
      } with a speed of ${weather.windSpeed}. Enjoy snowboarding!`;
    }
  });

  //Kayaking
  $("#myModal5").on("shown.bs.modal", function() {

    if (weather.temperature <= 40) {
      document.getElementById("modal-body-kayak").textContent = `In ${
        weather.city
      } there is ${weather.condition} with a temperature of ${
        weather.temperature
      } degrees fahrenheit. The wind direction is ${
        weather.windDirection
      } with a speed of ${weather.windSpeed}. It's chilly! Kayak another time.`;

    } if (weather.wind >= 20) {
      document.getElementById("modal-body-kayak").textContent = `In ${
        weather.city
      } there is ${weather.condition} with a temperature of ${
        weather.temperature
      } degrees fahrenheit. The wind direction is ${
        weather.windDirection
      } with a speed of ${weather.windSpeed}. It's windy outside! Kayak another time.`;

    } else {
      document.getElementById("modal-body-kayak").textContent = `In ${
        weather.city
      } there is ${weather.condition} with a temperature of ${
        weather.temperature
      } degrees fahrenheit. The wind direction is ${
        weather.windDirection
      } with a speed of ${weather.windSpeed}. Enjoy Kayaking!`;
    }
  });

  //CrossFit
  $("#myModal6").on("shown.bs.modal", function() {
    if (weather.temperature <= 40) {
      document.getElementById("modal-body-cross").textContent = `In ${
        weather.city
      } there is ${weather.condition} with a temperature of ${
        weather.temperature
      } degrees fahrenheit. The wind direction is ${
        weather.windDirection
      } with a speed of ${weather.windSpeed}. It's chilly outside! Wear some layers for your work out.`;
    }
    if (weather.temperature >= 90) {
      document.getElementById("modal-body-cross").textContent = `In ${
        weather.city
      } there is ${weather.condition} with a temperature of ${
        weather.temperature
      } degrees fahrenheit. The wind direction is ${
        weather.windDirection
      } with a speed of ${weather.windSpeed}. It's hot outside! Bring some extra water and sunscrean for your work out.`;
    } else {
      document.getElementById("modal-body-cross").textContent = `In ${
        weather.city
      } there is ${weather.condition} with a temperature of ${
        weather.temperature
      } degrees fahrenheit. The wind direction is ${
        weather.windDirection
      } with a speed of ${weather.windSpeed}. Enjoy your work out!`;
    }
  });
  //skating
  $("#myModal7").on("shown.bs.modal", function() {

    if (weather.temperature <= 40) {
      document.getElementById("modal-body-skate").textContent = `In ${
        weather.city
      } there is ${weather.condition} with a temperature of ${
        weather.temperature
      } degrees fahrenheit. The wind direction is ${
        weather.windDirection
      } with a speed of ${weather.windSpeed}. It's a little chilly outside! Wear some layers.`;

    } if (weather.temperature >= 90) {
      document.getElementById("modal-body-skate").textContent = `In ${
        weather.city
      } there is ${weather.condition} with a temperature of ${
        weather.temperature
      } degrees fahrenheit. The wind direction is ${
        weather.windDirection
      } with a speed of ${weather.windSpeed}. It's hot outside! Wear some sunscreen and bring some water. `;

    } else {
      document.getElementById("modal-body-skate").textContent = `In ${
        weather.city
      } there is ${weather.condition} with a temperature of ${
        weather.temperature
      } degrees fahrenheit. The wind direction is ${
        weather.windDirection
      } with a speed of ${weather.windSpeed}. Enjoy skating!`;
    }
  });

  //yoga
  $("#myModal8").on("shown.bs.modal", function() {
    if (weather.temperature <= 40) {
      document.getElementById("modal-body-yoga").textContent = `In ${
        weather.city
      } there is ${weather.condition} with a temperature of ${
        weather.temperature
      } degrees fahrenheit. The wind direction is ${
        weather.windDirection
      } with a speed of ${weather.windSpeed}. It's chilly outside! Wear some layers or practice inside.`;
    }
    if (weather.temperature >= 90) {
      document.getElementById("modal-body-yoga").textContent = `In ${
        weather.city
      } there is ${weather.condition} with a temperature of ${
        weather.temperature
      } degrees fahrenheit. The wind direction is ${
        weather.windDirection
      } with a speed of ${weather.windSpeed}. It's hot out! Wear sunscreen and bring extra water.`;
    } else {
      document.getElementById("modal-body-yoga").textContent = `In ${
        weather.city
      } there is ${weather.condition} with a temperature of ${
        weather.temperature
      } degrees fahrenheit. The wind direction is ${
        weather.windDirection
      } with a speed of ${weather.windSpeed}. Enjoy yoga!`;
    }
  });

  //boxing
  $("#myModal9").on("shown.bs.modal", function() {

    if (weather.temperature <= 40) {
      document.getElementById("modal-body-box").textContent = `In ${
        weather.city
      } there is ${weather.condition} with a temperature of ${
        weather.temperature
      } degrees fahrenheit. The wind direction is ${
        weather.windDirection
      } with a speed of ${weather.windSpeed}. It's chilly outside! Wear some layers.`;

    } if (weather.temperature >= 90) {
      document.getElementById("modal-body-box").textContent = `In ${
        weather.city
      } there is ${weather.condition} with a temperature of ${
        weather.temperature
      } degrees fahrenheit. The wind direction is ${
        weather.windDirection
      } with a speed of ${weather.windSpeed}. It's hot outside! Wear sunscreen and bring extra water.`;

    } else {
      document.getElementById("modal-body-box").textContent = `In ${
        weather.city
      } there is ${weather.condition} with a temperature of ${
        weather.temperature
      } degrees fahrenheit. The wind direction is ${
        weather.windDirection
      } with a speed of ${weather.windSpeed}. Enjoy boxing!`;
    }
  });
};
