var alphabet = ["a", "b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var compIndex = Math.floor(Math.random() * alphabet.length);
// console.log("CompIndex" + compIndex);
var compChoice = alphabet[compIndex];
// console.log("Secret Answer: " + compChoice);
var wins = 0;
var loses = 0;
var guesses = 10;

document.onkeyup = function(event) {
    var letter = event.key.toLowerCase();
    console.log(letter);
    if(letter === compChoice) {
        alert("You Win!");
        wins++;
        updateScore();

    } else {
        alert("You Lost!");
        loses++;
        guesses--;
        updateScore();
        
    }
}

function updateScore() {
    document.querySelector("#wins").innerHTML = "Wins: " + wins;
    document.querySelector("#loses").innerHTML = "Loses: " + loses;
    document.querySelector("#guesses").innerHTML = "Guesses: " + guesses;
    // document.querySelector("#attempts").innerHTML = "Attempts: " + letter;
    
}

updateScore();

