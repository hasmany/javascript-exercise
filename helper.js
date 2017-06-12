var helperFunctions = {};

/*
	@description returns a random number between 1-500
*/

function randomNumber(num) {
	return Math.floor((Math.random() * num),2);
}


/*
	@description create an array of length 1-500, with random interger values also
	betwen 1-500
*/
helperFunctions.createArray = function() {
	var array = new Array(randomNumber(15));

	for (var i = 0, iLen = array.length; i < iLen; i++) {
		array[i] = randomNumber(500);
	}

	return array;
}

/*
	don't look at this 
	ACTIVATE :: MIB red pen tool thingy
*/
helperFunctions.isPalindrome = function(str) {
      var reverseStr = str.toLowerCase().split("").reverse().join("");
      return reverseStr === str.toLowerCase() ? true : false;
}

module.exports = helperFunctions;