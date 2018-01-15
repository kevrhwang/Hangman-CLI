function Letter(letter) {
	this.blank = "_";
	this.letter = letter;
	this.show = false;
	this.showLetter = function() {
		if (this.show) {
			return this.letter;
		} else {
			return this.blank;
		}
	}
	this.guess = function(guessedLtr) {
		if (guessedLtr === this.letter) {
			this.show = true;
		}
	}
}

module.exports = Letter;