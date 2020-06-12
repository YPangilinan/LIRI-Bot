# LIRI-Bot

## Assignment Overview
<p>LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a _Language_ Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.</p>

<p>For this specific LIRI command line node app, the user can input the parameters, "spotify-this-song", "movie-this", "concert-this", and "do-what-it-says" and the app will provide the user the data they requested. </p>

### How was this app created?
LIRI was created with Node.JS and utilizes the following packages and API's:
  * [Node-Spotify-API](https://www.npmjs.com/package/node-spotify-api)
  * [Axios](https://www.npmjs.com/package/axios)
  * [Moment](https://www.npmjs.com/package/moment)
  * [DotEnv](https://www.npmjs.com/package/dotenv)
  * [OMDB API](http://www.omdbapi.com)
  * [Bands In Town API](http://www.artists.bandsintown.com/bandsintown-api)
  
### Want to see examples of how it works?
Because LIRI is a CLI app, it cannot be deployed on GitHub pages, but below you can find screenshots of the functioning app with the various parameters that can be used. 

**SPOTIFY-THIS-SONG**<br>
This command will utilize the Spotify package and output:
* Artist(s)
* The song's name
* A preview link of the song from Spotify
* The album that the song is from
<br>
Searching for the song "My Heart Will Go On":
<img src = "images/spotify.png">
If the user does not type in a movie name, it will automatically output data for "The Sign"
<img src = "images/spotifyError.png">

**MOVIE-THIS**<br>
This command will utilize the OMDB API and output:
* Title of the movie.
* Year the movie came out.
* IMDB Rating of the movie.
* Rotten Tomatoes Rating of the movie.
* Country where the movie was produced.
* Language of the movie.
* Plot of the movie.
* Actors in the movie.
<br>
Searching for the movie "50 First Dates":
<img src = "images/movie.png">
If the user does not type in a movie name, it will automatically output data for "Mr. Nobody"
<img src = "images/movieError.png">

**CONCERT-THIS**<br>
This command will utilize the Bands in Town API and output:
 * Name of the venue
 * Venue location
 * Date of the Event 
 <br>
Searching for a concert for "Boys II Men":
<img src = "images/concert.png"> 
If the user does not type in a movie name, it will automatically output data for "Celine Dion" 
<img src = "images/concertError.png">

**DO-WHAT-IT-SAYS**<br>
This command will read what is in the provded random.txt and perform the command that is listed within it.
*Do-what-it-says: Spotify-this-song*
<img src = "images/dothis.png">
*Do-what-it-says: Movie-this*
<img src = "images/dothismovie.png">
*Do-what-it-says: Concert-this*
<img src = "images/dothisconcert.png">
