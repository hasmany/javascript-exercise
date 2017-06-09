

// describe("A suite", function() {
//   it("contains spec with an expectation", function() {
//     expect(true).toBe(true);
//   });
// });

// describe("A suite is just a function", function() {
//   var a;

//   it("and so is a spec", function() {
//     a = true;

//     expect(a).toBe(true);
//   });
// });



describe("Array Functions", function() {
  var helperFunctions = require("../helper.js")
  var arrayMethods = require("../main.js");
  var array;

  beforeEach(function() {
    // player = new Player();
    // song = new Song();
    array = helperFunctions.createArray(); 
    console.log(array);
  });

  /*
    create array of random length between 1-10
    in each index add in number -20 to 100
  */
  it("the findMin function will return the min value in an array", function() {
    var actualValue = Math.min.apply(Math,array);
    expect(arrayMethods.findMin(array)).toEqual(actualValue);
  });

  it("the findMax function will return the max value in an array", function() {
    var actualValue = Math.max.apply(Math,array);
    expect(arrayMethods.findMax(array)).toEqual(actualValue);
  });

  it("the findSum function will return the sum of all values in an array", function() {
    var actualValue =  array.reduce(function(acc,val) {
                         return acc + val;
                     },0);
   
    expect(arrayMethods.findSum(array)).toEqual(actualValue);
  }); 

});