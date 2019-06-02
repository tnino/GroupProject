//ipStack API url 
var ipUrl = "http://api.ipstack.com/check?";
var locationKey = "&access_key=8055339b7e1902b5583fe7b534566309";
//run requester ip lookup

//event listener for activity button
document.querySelector("#activity-btn-run").addEventListener(
"click",
function(e) {
    //prevent default behavior (ie. page reload)
    e.preventDefault();
    
    //location variable for future purposes
    //const location = document.querySelector("#location").value;

    //document.querySelector("#location").value = "";

    //fetch data from openweathermap api
    fetch(ipUrl + "austin" + "&appid=" + locationKey) //replace Austin with location after testing complete
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