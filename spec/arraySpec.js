var helperFunctions = require("../helper.js");
var arrayMethods = require("../array.js");


describe("Array Functions:: ", function() {
	var array;

	beforeEach(function() {
		array = helperFunctions.createArray();
	});

  it("Sort the values in an array from lowest to highest", function() {
    var copyArray  = array.concat();
    expect(arrayMethods.sortAscn(copyArray)).toBe(helperFunctions.sortArrayAscending(array));
  });

  it("Sort the values of an array from highest to lowest", function() {
    var copyArray  = array.concat();
    expect(arrayMethods.sortDscn(copyArray)).toBe(helperFunctions.sortArrayDescending(array));
  });

});