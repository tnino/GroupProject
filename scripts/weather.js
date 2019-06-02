const url = "http://api.openweathermap.org/data/2.5/weather?q=";
const apiKey = "fc480c5aaec93162c2d8fd255dd1bfdb";


//event listener for activity button
document.querySelector("#activity-btn-run").addEventListener(
    "click",
    function(e) {
        //prevent default behavior (ie. page reload)
        e.preventDefault();
        //console.log for tracking/testing
        console.log("activity-btn-run click");
        //location variable for future purposes
        //const location = document.querySelector("#location").value;

        //document.querySelector("#location").value = "";

        //fetch data from openweathermap api
        fetch(url + "austin" + "&appid=" + apiKey) //replace Austin with location after testing complete
            .then(function(response) {
                console.log(response.json());
                return response.json();
            })
            .then(function(response) {
                updateUISuccess(response);
            })
            .catch(function() {
                updateUIFailure();
            });
    },
    false
);

//function to update the page if the api call is successful
function updateUISuccess() {
    console.log("updateUISuccess run");
};

//function to update the page if the api call returns an error
function updateUIFailure() {
    console.log("updateUIFailure run");
};