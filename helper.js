var helperFunctions = {};

/*
	@description returns a random number between 1-500
*/

helperFunctions.randomNumber = function(num) {
	return Math.floor((Math.random() * num),2);
}


/*
	@description create an array of length 1-500, with random interger values also
	betwen 1-500
*/
helperFunctions.createArray = function() {
	var array = new Array(helperFunctions.randomNumber(15));

	for (var i = 0, iLen = array.length; i < iLen; i++) {
		array[i] = helperFunctions.randomNumber(500);
	}

	return array;
}

/*
	don't look at this
	ACTIVATE :: MIB red pen tool thingy
*/
helperFunctions.sortArrayAscending = function(array) {
 	var actualValue = array.sort(function(a,b) {
      if (a>b) {
        return 1;
      } else if (a<b) {
        return -1;
      } else {
        return 0;
      }
    }); 

    return actualValue;
}

/*
	don't look at this
	ACTIVATE :: MIB red pen tool thingy
*/
helperFunctions.sortArrayDescending = function(array) {
	var actualValue = array.sort(function(a,b) {
		if (a > b) {
			return -1
		} else if (a < b) {
			return 1;
		} else {
			return 0;
		}
	});

	return actualValue;
}

/*
	don't look at this 
	ACTIVATE :: MIB red pen tool thingy
*/
helperFunctions.isPalindrome = function(str) {
      var reverseStr = str.toLowerCase().split("").reverse().join("");
      return reverseStr === str.toLowerCase() ? true : false;
}

/*
	don't look at this
	ACTIVATE :: MIB red pen tool thingy
*/
helperFunctions.reverseString = function(str) {
	var reverseStr = str.split("").reverse().join("");
	return reverseStr;
}

/*
	don't look at this
	ACTIVATE :: MIB red pen tool thingy	
*/
helperFunctions.searchFunctionText = function(func,str) {
	var functionText = func.toString();
	return functionText.match(str) ? true : false;
};

module.exports = helperFunctions;