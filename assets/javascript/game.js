//array of words that can be solutions 
var solutions = ["avengers", "gotham", "thor", "kryptonite", "thanos", "shazam", "venom", "rorschach", "deadpool", "nightwing"]

//array of wrong answers
var userGuessedThese = []

var guessesLeft = document.getElementById("guesses-left")
var guessedLetters = document.getElementById("guessed-letters")
var currentWord = document.getElementById("current-word")
var x = 10
var lives = "Guesses Left:" + x

guessesLeft.innerHTML = lives

console.log(currentWord)

//function to choose a random word from the array and split into another array of each character in generated word
function generateWord(array){
    var random = Math.floor(Math.random() * array.length ); 
    var randomWord = array[random];
    return randomWord.split("");
}

//array for characters of generated word
let chosenWord = generateWord(solutions)

//displays chosenWord as dashes
for (let i of chosenWord) {
    let babyNode = document.createElement('p')
    babyNode.innerHTML = '-'
    currentWord.appendChild(babyNode)
}

console.log(currentWord.childNodes)

console.log(chosenWord)



//fills out dashes with guessed characters if correct, adds letters to guessed letters if not and lowers guesses left
document.onkeyup = function(event) {
    var guess = event.key.toLowerCase();
    if (userGuessedThese.includes(guess) === false) {
        if  (chosenWord.includes(guess) ) {
            console.log("yes")
            for (let i = 0; i < chosenWord.length; i++) {
                if (chosenWord[i] === guess) {
                    currentWord.childNodes[i].innerHTML = guess
                }
            }
        }
        else {
            let guessed = document.createElement("p")
            guessed.innerHTML = guess
            guessedLetters.appendChild(guessed)
            console.log("nope")
            x--
            guessesLeft.innerHTML = ("Guesses left:" + x)
        }
        userGuessedThese.push(guess)
    }
    if (x<1){
        document.onkeyup = function (event) {
            null
        }
    }
};
