"use strict";

var yourMethods = {};

/*
	@description this function should find the smallest value in an array and return that value
	@paramter {Array}
	@return {Number} a number value
*/
yourMethods.findMin = function(array) {
	var min = array[0];
	for (var i = 0, iLen = array.length; i < iLen; i++)	{
		if (min > array[i]) {
			min = array[i];
		}
	}
	return min; 
}

/*
	@description this function should find the largest value in an array and return that value
	@paramter {Array}
	@return {Number} a number value
*/
yourMethods.findMax = function(array) {
	var max = array[0];
	for (var i = 0, iLen = array.length; i < iLen; i++)	{
		if (max < array[i]) {
			max = array[i];
		}
	}
	return max; 	
}

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
yourMethods.sortDsc = function(array) {
	
	
}

/*
	@description Create an array with the following corresponding values::
		- if the current index is a multiple of 3 use "Fizz"
		- if it's a multiple of  5, use "Buzz"
		- if it's divisilbe by both 3 and 5, use "FizzBuzz"
		- If it's not divibible by either 3 or 5, use Null
	@paramter {Array}
	@return {Array}
*/

yourMethods.fizzBuzz = function(array) {
	
}

/*
	@description checks if a string is a palindrome
	@paramter {String}
	@return {Boolean}
*/
yourMethods.isPalindrome = function(str) {

}

/*
	@description reverse a string without native js methods
	@paramter {String}
	@return {String}
*/
yourMethods.reverseString = function(str) {

}

/*
	@description reverse a string using native js methods
	@parameter {String}
	@return {String}
*/
yourMethods.reverseNativeString = function(str) {

}

/*
	@description add a reverse string method called "reverseString" to all Primitive String types
*/
yourMethods.addStringFunction = function() {

}

/*
	@description checks if a number is a prime number
	@paramter {}
*/	
yourMethods.isPrime = function(num) {

}

/*
 TO DO: 
*/

module.exports = yourMethods;