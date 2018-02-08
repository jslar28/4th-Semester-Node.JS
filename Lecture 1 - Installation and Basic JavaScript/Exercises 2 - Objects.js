//--------------------------------------
// Exercises 2 - Objects
//--------------------------------------
//Exercise 1 - Retrieve value from object by key

var myObj = {"message": "Hello, earthling! I bring peace."};

// Log the message 

console.log("\nExercise 1:");
console.log(myObj.message);

//--------------------------------------
//Exercise 2 - Defining an object. 

// Create an object that has your name and age. 

console.log("\nExercise 2:");
var myObj = {"name" : "Jakob Støttrup Larsen", "age" : 23};
console.log(myObj);

//--------------------------------------
//Exercise 3 - Add a property 

var stackOverflow = {};

// make a rule called isAllowed and let the value be true

console.log("\nExercise 3:");
stackOverflow.isAllowed = true;
console.log(stackOverflow);

//--------------------------------------
//Exercise 4 - Remove a property 

var thisSong = {"description": "The best song in the world."}

// remove the property "description" and add a property called "about" that should say "Just a tribute." 

console.log("\nExercise 4:");
delete thisSong["description"];
thisSong.about = "Just a tribute.";
console.log(thisSong);

//--------------------------------------