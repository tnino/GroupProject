//global variables

//OMDb API set up
var apiMov = "http://www.omdbapi.com/?apikey=4aba871a&t=";

//Giphy API set up
var apiGiphy = "http://api.giphy.com/v1/gifs/search?&api_key=jhXRfz62s0WM7lE63bU7AidiTF6ROBnx&q=";
//here we are setting up our variables to associate with its designated ID 
var input = document.querySelector("#movie-input");
var movieTitle = document.querySelector("#title");
var movieYear = document.querySelector("#year");
var movieGenre = document.querySelector("#genre");
var movieActors = document.querySelector("#actors");
var movieGiphy = document.querySelector("#movie-giphy");

//Functions

//In this function we are getting the movie data from the OMDb API and returning each aspect of the movie to the page
//Each aspect of the movie will show in it's designated spot
      function getMovieData() {
          axios.get(apiMov + input.value + "&?plot=long")
          .then(function (movieResponse) {
              movieTitle.innerHTML = "Movie Title: " + movieResponse.data.Title;
              movieYear.innerHTML = "Year: " + movieResponse.data.Year;
              movieGenre.innerHTML = "Genre: " + movieResponse.data.Genre;
              movieActors.innerHTML = "Actors: " + movieResponse.data.Actors;
          })
          .catch(function (error) {
              movieTitle.innerHTML = "An error has occured.";
              console.log(error.message);
          });
      }
//Here, we are running the function to return the giphy for the movie that is searched
      function getMovieGiphy() {
          console.log(getMovieGiphy);
          axios.get (apiGiphy + input.value)
          .then(function (giphyResponse){
              console.log(giphyResponse);
              let gif = document.createElement("img");
                    gif.className = "gif";
                    gif.src = giphyResponse.data.data[0].images.original.url;
              //movieGiphy.innerHTML = giphyResponse.data.data[0].images.orginal.url;
          })
          .catch(function(error){
            movieGiphy.innerHTML = "An error has occured.";
            console.log(error.message);
        });
      }

      var button = document.querySelector(".movieBtn");
      button.addEventListener("click", function(){
        // prevent default will keep the page from reloading so your data persists after the event
          event.preventDefault();
        // moved this function inside of another function call so that you could prevent the page from loading
        getMovieData();
        getMovieGiphy();
      });