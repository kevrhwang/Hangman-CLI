# Hangman-CLI

## A walkthrough of the game can be found here: [Youtube](https://youtu.be/tztKagyyOrA)

## Technology used
* javascript
	* Constructors. The letter.js and word.js file each contain a constructor. 
	* The Letter constructor checks if the letter guessed by the user matches the letter of the word and will display that letter if it does, and a _ if it doesn't.
	* The Word constructor generates a random word from the npm package 'random-word' and displays the entire word as either the correctly guessed letter or _ . It also keeps track of incorrectly guessed letters and sets the number of guesses to 10 for each round.
	* The main.js file runs the logic of the game. It uses the npm package 'inquirer' in order to prompt the user to guess letters and passes that guess into the Word constructor functions. It will also tally the overall wins and losses of the user until they exit the game.

* node.js - We are using node.js in order to run javascript in a command line interface rather than webpage.

* npm packages - We are using 'inquirer' to prompt the user and passing the input into our functions. We are also using 'random-word' in order to generate a random Hangman word.

## Game Rules
* When the game is run, you will have 10 incorrect guesses per word.
* If you guess an incorrect letter more than once, it will alert you that you have already guessed that letter and will not count against you again.
* You must enter in a letter in order for the game to register a guess. It does not matter if the letter entered is upper or lower case. It can only be 1 letter at a time.
* Your wins and losses on each word will be tallied and displayed at the start of each new round.