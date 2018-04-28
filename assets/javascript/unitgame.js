/*  

1. Initialize Game 
1.1 Generate Random Number
1.2 Generate random values for buttons
1.3 Clear all numbers to 0
1.4 Display number for User to Match
2. Click on a crystal
3. Generate a number
4. Display number 
5. Continue to click crystals
6. Update total
7. win or lose
8. update win score
*/
 

$(document).ready(function() {
    var randomNumber;
    var WINS = 0;
    var LOSSES = 0;
    var SCORE = 0;
    var total = 0;
});

//set variables
var state = {
crystal1:"button1",
crystal2:"button2",
crystal3:"button3",
crystal4:"button4",
randomNumber: "",
WINS:0,
LOSSES:0,
SCORE:0,
total:0,

}


// Function to generate random number

function randomNumber(){
    var startingNumber= Math.floor(Math.random() * 60) +40;
    $("#randNumber").text("Match this number" + randomNumber);
}
randomNumber();

//lets make the buttons do stuff

