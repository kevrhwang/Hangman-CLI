var Word = require("./word.js");
var inquirer = require("inquirer");
var wins = 0;
var losses = 0;
var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

newGame();

function restart() {
	inquirer.prompt([
		{
			type: "list",
			name: "restart",
			message: "Would you like to start a new game?",
			choices: ["Yes", "No"]
		}
	]).then(function(input) {
		if (input.restart === "Yes") {
			newGame();
		} else {
			console.log("Goodbye!");
			return;
		}
	})
}


function newGame() {
    var word = new Word();
    console.log("Welcome to Hangman!");
    console.log("You have " + wins + " total wins!");
    console.log("You have " + losses + " total losses!");
    console.log("Your word to guess is: ");
    word.getWord();
    word.showWord();
    word.guesses = 10;
    console.log(word.word);
    startGame();


    function startGame() {

        inquirer.prompt([
        	{
            type: "input",
            name: "guess",
            message: "Please pick a letter to guess"
        	}, 
        ]).then(function(input) {
            if (letters.indexOf(input.guess.toLowerCase()) > -1) {
                if (word.wrongGuesses.indexOf(input.guess.toLowerCase()) < 0) {
                    if (word.guesses > 1) {
                        word.showWord(input.guess.toLowerCase());
                        word.checkGuess(input.guess.toLowerCase());

                        if (word.wordGuessed()) {
                            console.log("Congrats! You guessed the word!");
                            wins++;

                            restart();
                        } else {

                            startGame();
                        }

                    } else if (word.guesses === 1) {
                    	word.showWord(input.guess.toLowerCase());
                      word.checkGuess(input.guess.toLowerCase());
                      if (word.guesses === 0) {
                      	console.log("Sorry, you lose. Out of guesses.");
                        console.log("The correct word was " + word.word + ".");
                        losses++;
                        restart();
                      } else if (word.wordGuessed()) {
                      	console.log("Congrats! You guessed the word!");
                            wins++;

                            restart();

                      } else {
                      	startGame();
                      }
                    }



                    // else {
                    //     console.log("Sorry, you lose. Out of guesses.");
                    //     console.log("The correct word was " + word.word + ".");
                    //     losses++;
                    //     restart();
                    // }
                } else {
                	console.log("You already guessed that letter!");
                	startGame();
                }

            } else {
                console.log("Please enter a letter to guess.");
                startGame();
            }
        })

		}
}

module.exports = newGame;