"use strict";

var yourMethods = {};

/*
	@description this function should sum all the values in an array and return that value
	@paramter {Array}
	@return {Number} a number value
*/
yourMethods.findSum = function(array) {
	var sum = 0;
	var length = array.length;
	for (var i = 0, iLen = array.length; i < iLen; i++)	{
		sum+=array[i];
	}
	return sum;
}


/*
	@description Sort an array in ascending order(low->high)
	@paramter {Array}
	@return {Array{}
*/
yourMethods.sortAscn = function(array) {

}


/*
	@description Sort an array in descending order(low->high)
	@paramter {Array}
	@return {Array}
*/
yourMethods.sortDscn = function(array) {
	
	
}

module.exports = yourMethods;