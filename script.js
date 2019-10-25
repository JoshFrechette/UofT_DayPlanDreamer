//Global variables
//Time Variables
var rightNow = moment().format('h'); 
console.log(rightNow)
var now = moment().format('MMMM Do YYYY'); // Declare a variable 
console.log(now)

document.getElementById("currentDay").innerHTML = now ;
//Display current date and hour in the jumbotron section
var agendaColor = 0; //Colour of bar responds to past, present, or future styling 
var i =0;

var agendaInput = document.querySelector("agendaInput");

var agendaHourly = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];


$(document).ready(function() {
//var hourly = agendaHourly[i++];
for (i = 0; i < agendaHourly.length; i++){
document.getElementById("hour").innerHTML = agendaHourly;
}

});