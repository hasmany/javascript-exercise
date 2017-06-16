var helperFunctions = require("../helper.js");
var yourMethods = require("../string.js");

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


describe("Reverse a string:: ", function() {
  var string;
  beforeEach(function(){
    string = "I am Kentucky Fried Chicken";
  });

  it("Without using any native JS methods", function() {
    expect(helperFunctions.searchFunctionText(yourMethods.reverseString, ".reverse()")).toBe(false);
    expect(yourMethods.reverseString(string)).toBe("nekcihC deirF ykcutneK ma I");
  }); 

  it("Using native JS methods", function() {
    expect(helperFunctions.searchFunctionText(yourMethods.reverseString, ".reverse()")).toBe(true);
    expect(yourMethods.reverseString(string)).toBe("nekcihC deirF ykcutneK ma I");
  });

  it("Using a custom method called 'reverseString' for all primitive string types", function() {
    yourMethods.addStringFunction();
    expect(string.reverseString).toBeDefined();
    expect(string.reverseString(string)).toBe("nekcihC deirF ykcutneK ma I");
  });
});
