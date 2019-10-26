//Global variables


//Time Variables
var now = moment().format('k'); 
console.log(now + " is the hour right now")
var date = moment().format('MMMM Do YYYY'); // Declare a variable 
console.log(date + " is today's date")

//Display current date and hour in the jumbotron section
document.getElementById("currentDay").innerHTML = date ;

var textInput = [];
//An array if I want to make all time blocks DOMs later
//var agendaHourly = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];

//stored();

//Set up the style of the timeblocks upon the document opening
$(document).ready(function() {
    for (let i = 0 ; i < 9 ; i++){ //Loop thru the timeblocks to see what effect should style them
        $('.row')[i].children[0].children[0].id;
            //console.log(i + " is the row selected at this time")
            //console.log(agendaColor + " is the row the button is selecting")
        //console.log(agendaRow + " is the agenda row number")
        agendaHour = i + 9;
        //console.log(agendaHour + " is the time for " + agendaRow)
        //console.log(now + " is the time right now")
        if (agendaHour < Number(now)) {// If the timeblock is before what time it is now, make "past" styling take effect
            //console.log(agendaHour < now)
            $($(".col-10")[i]).addClass("past");
        }
        else if (agendaHour > Number(now)) {// If the timeblock is after what time it is now, make "future" styling take effect
            //console.log(agendaHour > now)
            $($(".col-10")[i]).addClass("future");
        }
        else if (agendaHour === Number(now)) {// If the timeblock is what time it is now, make "present" styling take effect
            //console.log(agendaHour === now)
            $($(".col-10")[i]).addClass("present");
        }        
    }
})

for (let i = 0 ; i < 9 ; i++){ // Have the save button store the appropriate user input to the proper key(timeblock)
    $('.row')[i].children[2].children[0].addEventListener('click', function(){//
        var userInputOrigin = $('.row')[i].children[1].children[0].value;
        console.log(userInputOrigin)
        var keyStorage = i + 9; // add to time if I need a refernce "UTC/GMT -5 hours"
        console.log(agendaHour + " is the agenda row")
        localStorage.setItem( keyStorage, userInputOrigin);//Store the user input into local storage
    })
}

function stored() {
    var storedTextInput = JSON.parse(localStorage.getItem( keyStorage, userInputOrigin));

    if (storedTextInput !== null) {
        textInput = storedTextInput;
    }
}

// When form is submitted...
todoForm.addEventListener("click", function(event) {
    event.preventDefault();
  
    textInput = userTextInput.value.trim();
  
    // Return from function early if submitted todoText is blank
    if (textInput === "") {
      return;
    }
  
    // Add new todoText to todos array, clear the input
    textInput.push(storedTextInput);
    storedTextInput.value = "";

    stored();//repeat for each event added to Day Planner
});