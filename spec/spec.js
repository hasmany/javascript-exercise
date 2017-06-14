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
        actualValue.push(array[i]);
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
});

describe("Reverse a string", function() {
  var string;
  beforeEach(function(){
    string = "I am Kentucky Fried Chicken";
  });

  it("Reverse a string without using any native JS methods", function() {
    expect(helperFunctions.searchFunctionText(yourMethods.reverseString, ".reverse()")).toBe(false);
    expect(yourMethods.reverseString(string)).toBe("nekcihC deirF ykcutneK ma I");
  }); 

  it("Reverse a string using native JS methods", function() {
    expect(helperFunctions.searchFunctionText(yourMethods.reverseString, ".reverse()")).toBe(true);
    expect(yourMethods.reverseString(string)).toBe("nekcihC deirF ykcutneK ma I");
  });

  it("Adds a reverse string method called 'reverseString' for all primitive string types", function() {
    yourMethods.addStringFunction();
    expect(string.reverseString).toBeDefined();
    expect(string.reverseString(string)).toBe("nekcihC deirF ykcutneK ma I");
  });
});

describe("Prime Number", function() {

  it("Check if 1 is a prime number", function() {
    expect(yourMethods.isPrime(1)).toBe(true);
  });

  it("Check if 2 is a prime number", function() {
    expect(yourMethods.isPrime(2)).toBe(true);
  });

  it("Check if 9 is a prime number", function() {
    expect(yourMethods.isPrime(9)).toBe(false);
  });

  it("Check if 237 is a prime number", function(){
    expect(yourMethods.isPrime(237)).toBe(false);
  });

  it("Check if 137 is a prime number", function() {
    expect(yourMethods.isPrime(137)).toBe(true);
  })
  it("Check if -54 is a prime Number", function() {
    expect(yourMethods.isPrime(-54)).toBe(false);
  });

});



