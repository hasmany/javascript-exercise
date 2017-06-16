var helperFunctions = require("../helper.js");
var yourMethods = require("../math.js");

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