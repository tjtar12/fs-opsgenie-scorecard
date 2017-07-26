var Client             = require('node-rest-client').Client;
var client             = new Client();
var fs                 = require('fs');
var request            = require('request');
var cheerio            = require('cheerio');


//  FUNCTION CALL FOR
exports.get = function(req, res) {
    var returnList = [];
    var numMovies = listMovies.length;

    listMovies.forEach(function(m){
      var returnMovie = {};

/*
      getIMDB(m,function(data) {
        returnMovie['title'] = m;
        returnMovie['imdb'] = data;

        console.log(returnMovie);
        returnList.push(returnMovie);
        console.log(returnList);
        console.log(returnList.length);
        return res.json(returnList);
      });
*/

      getBoxOfficeMojo(m, function(data) {

      });

      //var rottentomato = getRottenTomato(m);


    })

    //while(returnList.length != listMovies.length) {
    //  console.log(returnList.length + " " + listMovies.length);
    //}
    //return res.json(returnList);

}

//  FUNCTION CALL FOR
exports.getOne = function(req, res) {
    var returnList = [];
    //var numMovies = listMovies.length;
    var movie =req.query.movie;

    var returnMovie = {};
    /*
    getIMDB(movie,function(data) {
        console.log('movie='+movie);
        returnMovie['title'] = movie;
        returnMovie['imdb'] = data;

        console.log(returnMovie);
        returnList.push(returnMovie);
        console.log(returnList);
        console.log(returnList.length);
        return res.json(returnList);
    });
*/
        var boxofficemojo = getBoxOfficeMojo(movie);
        //var rottentomato = getRottenTomato(m);


    //while(returnList.length != listMovies.length) {
    //  console.log(returnList.length + " " + listMovies.length);
    //}
    //return res.json(returnList);

}

//  PRIVATE FUNCTIONS
function getIMDB(m, callback) {
  client.get("http://www.omdbapi.com/?t="+m, function (data, response) {
    //console.log(data);
    callback(data);
  });
  //callback();
}



function getBoxOfficeMojo(m) {

  //  PASS MOVIE TITLE TO SEARCH URL OF BOM TO GET MOVIE ID
  //  TODO:  variable passed is coming back undefined
  url = 'http://www.boxofficemojo.com/search/?q=boss%20baby';

  //  START SCRAPING SEARCH PAGE FOR MOVIE ID
  request(url, function(error, response, html){
    if(!error){
      var $ = cheerio.load(html);

      //console.log($('a').attr(''));

      var links = [];

      $('a').each(function(i, elem) {
        if( $(this).attr().href.includes("/movies/?id=")) {
          var
          links[i] = $(this).attr();

        }
      });
      console.log(links);

      //console.log(links())

      $('a').filter(function(){
        var data = $(this);
        //console.log(data);
      })
    }
  });

}

function getRottenTomato() {

}
