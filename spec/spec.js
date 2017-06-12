var helperFunctions = require("../helper.js")
var yourMethods = require("../main.js");

describe("Array Functions:: ", function() {
  var array;

  beforeEach(function() {
    array = helperFunctions.createArray(); 
  });

  /*
    create array of random length between 1-10
    in each index add in number -20 to 100
  */
  it("The findMin function will return the min value in an array", function() {
    var actualValue = Math.min.apply(Math,array);
    expect(yourMethods.findMin(array)).toEqual(actualValue);
  });

  it("The findMax function will return the max value in an array", function() {
    var actualValue = Math.max.apply(Math,array);
    expect(yourMethods.findMax(array)).toEqual(actualValue);
  });

  it("The findSum function will return the sum of all values in an array", function() {
    var actualValue =  array.reduce(function(acc,val) {
                         return acc + val;
                     },0);
    expect(yourMethods.findSum(array)).toEqual(actualValue);
  }); 

  it("Sort the values in an array from lowest to highest", function() {
    var copyArray  = array.concat();

    var actualValue = array.sort(function(a,b) {
      if (a>b) {
        return 1;
      } else if (a<b) {
        return -1;
      } else {
        return 0;
      }
    });
   
    expect(yourMethods.sortAscn(copyArray)).toBe(actualValue);
  });

  it("Sort the values of an array from highest to lowest", function() {
    var copyArray  = array.concat();

    var actualValue = array.sort(function(a,b) {
      if (a>b) {
        return -1;
      } else if (a<b) {
        return 1;
      } else {
        return 0;
      }
    });

    expect(yourMethods.sortDsc(copyArray)).toBe(actualValue);
  });

  it("Create an array with the value Fizz if the value in the current index is divisible by 3, Buzz if it's divisible by 5, and FizzBuzz if it's divisible by both", function() {
    var actualValue = []
    for (var i = 0, iLen = array.length; i < iLen; i++) {
      if (array[i]%3 === 0 && array[i]%5 === 0 ) {
          actualValue.push("FizzBuzz");
      } else if (array[i]*3 === 0) {
          actualValue.push("Fizz");
      } else if (array[i]*5===0) {
          actualValue.push("Buzz");
      } else {
        actualValue.push(null);
      }
    }
    console.log(array);
    expect(yourMethods.fizzBuzz(array)).toBe(actualValue);

  });

});


describe("Check if a string is a palindrome:: ", function() {
 
  it("madam is a palindrome",function() {
    expect(yourMethods.isPalindrome("madam")).toBe(helperFunctions.isPalindrome("madam"));
  });

  it("anna is a palindrome",function() {
    expect(yourMethods.isPalindrome("anna")).toBe(helperFunctions.isPalindrome("anna"))
  });

  it("volusion is not a palindrome",function() {
    expect(yourMethods.isPalindrome("volusion")).toBe(helperFunctions.isPalindrome("volusion"))
  });

  it("car is not a palindrome",function() {
    expect(yourMethods.isPalindrome("car")).toBe(helperFunctions.isPalindrome("car"))

  });

  it("$f$ is a plaindrome",function() {
    expect(yourMethods.isPalindrome("$f$")).toBe(helperFunctions.isPalindrome("$f$"))
  });

  it("Anna is a palindrome",function() {
    expect(yourMethods.isPalindrome("AnNa")).toBe(helperFunctions.isPalindrome("AnNa"))
  });  
})




