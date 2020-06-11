//require for .env 
require("dotenv").config();

//Link to Spotify Keys
var keys = require("./keys");

//Initialize spotify npm
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

//require moment
var moment = require("moment");

//require FS
var fs = require("fs");

//initialize axios
var axios = require("axios");

//user commands and query
var command = process.argv[2];
var userQuery = process.argv.slice(3).join(" ");

//CONDITIONALS FOR COMMANDS
function userCommands(command,userQuery){
    if(command == "spotify-this-song"){
        spotifySearch();
    }
    else if(command == "movie-this"){
        movieSearch();
    }
    else if(command == "concert-this"){
        concertSearch();
    }
    else if(command == "do-what-it-says"){
        doSay();
    }
};

userCommands(command,userQuery);

//SPOTIFY SEARCH

function spotifySearch(){
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
};

//OMDB SEARCH
function movieSearch(){
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

//BANDSINTOWN SEARCH
function concertSearch(){
        console.log("You searched for: " + userQuery);
        if (!userQuery){
            userQuery = "Celine Dion";
            console.log("If you dont know Celine Dion, you should!");
            console.log("----------------------");
            };
    
        axios.get("https://rest.bandsintown.com/artists/" + userQuery + "/events?app_id=codingbootcamp").then(
    
            function(response){
                // console.log(response.data);
                var concertArray = response.data;
                for(var i=0; i<concertArray.length; i++){
                    console.log("Venue Name: " + concertArray[i].venue.name);
                    console.log("Venue Location: " + concertArray[i].venue.location);
                    var concertDate = moment(concertArray[i].datetime).format("MM/DD/YYYY hh:00 A");
                    console.log("Date and Time: " + concertDate);
                    console.log("----------------------");
                }
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

//DO WHAT IT SAYS
function doSay(){

        fs.readFile("random.txt", "utf8", function(error,data){
            if (error){
                return console.log(error);
            }
            console.log(data);
    
            var dataArray = data.split(",");
    
            command = dataArray[0];
            userQuery = dataArray[1];

            userCommands(command,userQuery);
        });
    };

