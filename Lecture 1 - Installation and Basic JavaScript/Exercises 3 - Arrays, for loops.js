//--------------------------------------
// Exercises 2 - Arrays, for loops
//--------------------------------------
//Exercise 1 - Array Positioning

var letters = ["a","b","c"];

// show b in the console

console.log("\nExercise 1:");
console.log(letters[1]);
console.log(letters[letters.indexOf("b")]);

//You can have any combination of data types in a JavaScript array

//--------------------------------------
//Exercise 2 - Array Positioning

var friends = [];

// What a lonely array. Add at least 3 friend objects to it.

console.log("\nExercise 2:");
for(var i = 0; i < 3; i++) {
    friends[i] = i;
}
console.log(friends);

//--------------------------------------
//Exercise 3 - Get the index of first occurance of that value. 

var significantMathNumbers = [0, 2.718, 3.14159, 1729]

// You want to programmatically find where the number 1729 is in the array.
// programmatically means that no finger counting allowed. There is a method for this (finding index based of value).

console.log("\nExercise 3:");
console.log(significantMathNumbers.indexOf(1729));

//--------------------------------------
//Exercise 4 - Inserting elements

var diet = ["tomato", "cucumber", "rucolla", "kale"]

// You are a programmer. In one line (one statement) insert hamburger, soda and pizza between the elements rocolla and kale

console.log("\nExercise 4:");
diet.splice(diet.indexOf("kale"), 0, "hamburger", "soda", "pizza");
console.log(diet);

//--------------------------------------
//Exercise 5 - Remove element

// You don't like kale at all. Remove the LAST element of the array.
// Don't remove by index. You know in advance that it's the last in the array because you are too full already.

console.log("\nExercise 5:");
diet.pop();
console.log(diet);

//--------------------------------------




//--------------------------------------
//Exercise 6 - Copy array

// You really like your daily diet from last exercise. Copy it to a new array called dinnerTray so you can give it to a friend.

console.log("\nExercise 6:");
var dinnerTray = diet.slice(0);
// dinneryTray = diet is a reference, not a copy.
console.log(dinnerTray);

//--------------------------------------

 //array.slice(start, end)  // start and end are optional

//--------------------------------------
// Exercise 7 - For loop

var letters = ["a","b","c", "d", "e", "f", "g", "h"];

// log every second char in the array starting from b

console.log("\nExercise 7:");
for (var index = 1; index < letters.length; index+=2) {
    console.log(letters[index]);
}

//--------------------------------------
//Exercise 8 - For loop and if statement

var numbers  = [5, 3, 2, 7, 11, 12, 0, -20, 6];

var discardedNumbers = [];

// log the element if the number is above 6 or below 0
// else push them to the array discardedNumbers

console.log("\nExercise 8:");
for (var index = 0; index < numbers.length; index++) {
    if (numbers[index] > 6 || numbers[index] < 0) {
        console.log(numbers[index]);
    } else {
        discardedNumbers.push(numbers[index]);
    }    
}
console.log("Discarded numbers: " + discardedNumbers);

//--------------------------------------