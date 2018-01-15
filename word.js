var Letter = require ("./letter.js");
const randomWord = require('random-word');



function Word() {
	this.word ='';
	this.guesses = 10;
	var letters = [];
	this.wrongGuesses = [];

	this.getWord = function() {
		this.word = randomWord();
	}
	this.showWord = function(letterGuessed) {

		for (var i = 0; i < this.word.length; i++) {
			var newLetter = new Letter(this.word[i]);
			newLetter.guess(letterGuessed);

			if(newLetter.show) {
				letters[i] = newLetter.showLetter();
			} else {
				if (letters[i] !== newLetter.letter) {
					letters[i] = newLetter.blank;
				}
			}
		}
		console.log(letters.join(' '));
	}
	this.checkGuess = function(letterGuessed) {
		if (letters.indexOf(letterGuessed) < 0) {
			this.wrongGuesses.push(letterGuessed);
			console.log("Sorry, that letter isn't in the word.")
			this.guesses--;
			console.log("You have " + this.guesses + " guesses left.")
			console.log("Your wrong guesses so far are: " + this.wrongGuesses.join(' '));
			console.log(letters.join(' '));
		} else {
			this.wordGuessed();
		}
	}
	this.wordGuessed = function() {
		if (letters.join('') === this.word) {
			return true;

		}
	}
}

module.exports = Word;