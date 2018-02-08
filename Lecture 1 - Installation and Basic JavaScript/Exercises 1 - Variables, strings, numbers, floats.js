//--------------------------------------
// Exercises 1 -  Variables, strings, numbers, floats
//--------------------------------------
//Exercise 1 - Console and variables

var firstName = "Anders";
var lastName = "Latif";
// EXERCISE
// show in the console
// My first name is Anders and my last name is Latif

console.log("Exercise 1:");
console.log("My first name is " + firstName + " and my last name is " + lastName);

//--------------------------------------
//Exercise 2 - Numbers and Strings

var year = "2017";
var number = 1;

// Add the year plus the number
// The result should be 2018
// You cannot touch line 1 or 2

console.log("Exercise 2:");
var newYear = parseInt(year) + number;
console.log(newYear);

//--------------------------------------

//--------------------------------------
//Exercise 3 - Add numbers from string to float

var numberOne = "1.10";
var numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2

console.log("Exercise 3:");
var firstAddition = Number(numberOne) + Number(numberTwo);
console.log(firstAddition);

//--------------------------------------
//Exercise 4 - Add the numbers and the total with 2 decimals

var numberOne = "1.10";
var numberTwo = "2.30";

console.log("Exercise 4:");
var sum = Number(numberOne) + Number(numberTwo);
var fixedSum = sum.toFixed(2);
console.log(fixedSum);

//--------------------------------------
//Exercise 5 - Decimals and average

var one = 10;
var two = 45;
var three = 98;

// Show in the console the avg. with 5 decimals

console.log("Exercise 5:");
var average = (one + two + three)/3;
var averageWithDecimals = average.toFixed(5);
console.log(averageWithDecimals);

//--------------------------------------
//Exercise 6 - Get the character by index

var letters = "abc"
// Get me the character "c"

console.log("Exercise 6:");
var thirdChar = letters.charAt(2);
console.log(thirdChar);

//--------------------------------------
//Exercise 7 - Replace

var fact = "You are learning javascript!";

// capitalize the J in Javascript

console.log("Exercise 7:");
var fact = fact.replace("j", "J");
console.log(fact);

//--------------------------------------
