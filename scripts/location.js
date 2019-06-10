//ipStack API url
const ipUrl = "http://api.ipstack.com/check?";
const locationKey = "&access_key=8055339b7e1902b5583fe7b534566309";

//event listener for activity button
window.addEventListener(
	"load",
	function(e) {
		//prevent default behavior (ie. page reload)
		e.preventDefault();

		//fetch data from ipStack api
		fetch(ipUrl + locationKey) //replace Austin with location after testing complete
			.then(function(response) {
				return response.json();
			})
			.then(function(response) {
				console.log(response);
				let location = {
					city: response.city,
					lat: response.latitude,
					long: response.longitude
				};
				weather(location);
			})
			.catch(function() {
				console.log("Location information unavailable. Error: " + error.message);
			});
	},
	false
);