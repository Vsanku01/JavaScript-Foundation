// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();
var open_api = "https://dog.ceo/api/breeds/list/all"
var cors_string =
  'https://cors-anywhere.herokuapp.com/https://api.domainsdb.info/v1/domains/search?domain=facebook&zone=com';

var weather_string =
  'http://api.openweathermap.org/data/2.5/weather?q=London&appid=542e586f3930012e57f2c6a08a4317b2';
// xhr.open("GET", "https://cors-anywhere.herokuapp.com/https://maximum.blog/@shalvah/posts");

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', open_api);
request.send();

request.onload = function () {
  // Begin accessing JSON data here
  //console.log(this.response);
  var data = JSON.parse(this.response);
  console.log(data);
};
