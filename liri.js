//require for .env 
require("dotenv").config();

//Link to Spotify Keys
var keys = require("./keys");

//Initialize spotify npm
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

//initialize axios
var axios = require("axios");

var command = process.argv[2];
var userQuery = process.argv.slice(3).join(" ");

//Conditionals for commands

if (command == "spotify-this-song"){
    console.log("You searched for: " + userQuery);

    if (!userQuery){
    userQuery = "the sign ace of base";
    };

   spotify
   .search({
       type: 'track',
       query: userQuery,
       limit: 1
   }, function(error,response){
        if(error){
            return console.log("Error: " + error);
        }
        var spotifyArray = response.tracks.items;
        for (var i=0; i<spotifyArray.length; i++){
            console.log("Artist:" + response.tracks.items[i].album.artists[0].name);
            console.log ("Song: " + response.tracks.items[i].name);
            console.log("Album: " + response.tracks.items[i].album.name);
            console.log("Spotify Link: " + response.tracks.items[i].external_urls.spotify);
        };
   });
}

if (command == "movie-this"){

    console.log("You searched for: " + userQuery);

    if (!userQuery){
    userQuery = "mr nobody";
    console.log("If you havent, watched 'Mr. Nobody', then you should: http://www.imdb.com/title/tt0485947/");
    console.log("It's on Netflix!");
    };
    
    axios.get("http://www.omdbapi.com/?t=" + userQuery + "&y=&plot=short&apikey=trilogy").then(
        function(response) {
          console.log("Title: " + response.data.Title);
          console.log("Year: " + response.data.Year);
          console.log("IMDB Rating: " + response.data.imdbRating);

          var rottenTomatoes = response.data.Ratings;
          if(rottenTomatoes.length >2){
              console.log((rottenTomatoes[1].Source) + " Rating:" + (rottenTomatoes[1].Value));
          };
          console.log("Country: " + response.data.Country);
          console.log("Language: " + response.data.Language);
          console.log("Plot: " + response.data.Plot);
          console.log("Actors: " + response.data.Actors); 
        })
        .catch(function(error) {
          if (error.response) {
            console.log("---------------Data---------------");
            console.log(error.response.data);
            console.log("---------------Status---------------");
            console.log(error.response.status);
            console.log("---------------Status---------------");
            console.log(error.response.headers);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log("Error", error.message);
          }
          console.log(error.config);
        });      
};