//Global variables


//Time Variables
var now = moment().format('k');
console.log(now + " is the hour right now")
var date = moment().format('MMMM Do YYYY'); // Declare a variable 
console.log(date + " is today's date")

//Display current date and hour in the jumbotron section
document.getElementById("currentDay").innerHTML = date;

var textInput = [];

//An array if I want to make all time blocks DOMs later
//var agendaHourly = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
//Set up the style of the timeblocks upon the document opening
$(document).ready(function () {
    for (let i = 0; i < 9; i++) { //Loop thru the timeblocks to see what effect should style them
        $('.hourcell')[i].children[0].children[0].id;
        agendaHour = i + 9;
        if (agendaHour < Number(now)) {// If the timeblock is before what time it is now, make "past" styling take effect
            $($(".textfield")[i]).addClass("past");
        }
        else if (agendaHour > Number(now)) {// If the timeblock is after what time it is now, make "future" styling take effect
            $($(".textfield")[i]).addClass("future");
        }
        else if (agendaHour === Number(now)) {// If the timeblock is what time it is now, make "present" styling take effect
            $($(".textfield")[i]).addClass("present");
        }
    }
})

function plannerLoad() {
    for (let i = 0; i < 9; i++) { // Have the save button store the appropriate user input to the proper key(timeblock)
        $('.hourcell')[i].children[2].children[0].addEventListener('click', function () {//
            var userInputOrigin = $('.hourcell')[i].children[1].children[0].children[0].value;
            // var userInputOrigin = this.value;
            console.log(userInputOrigin + " is the userInputOrigin")
            var keyStorage = i + 9; // add to time if I need a refernce "UTC/GMT -5 hours"  
            const todo = {
                time: keyStorage,
                event: userInputOrigin
            };  
            textInput.push(todo);
            console.log(textInput);
            localStorage.setItem(keyStorage, userInputOrigin);//Store the user input into local storage
        })
    }
};

function toDoFill(todos = [], eventLoad) {
    eventLoad.innerHTML = todos.map((plate, i) => {
        
    })
}

function stored() {
    var storedTextInput = JSON.parse(localStorage.getItem(keyStorage, userInputOrigin));
    console.log(storedTextInput + " is the storedTextInput")
    console.log(textInput)
    if (storedTextInput !== null) {
        textInput = storedTextInput;
        console.log(textInput)
    }
}

plannerLoad()
