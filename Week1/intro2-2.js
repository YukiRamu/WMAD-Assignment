//FACTORY FUNCTIONS
const monsterFactory = (name, age, energySource, catchPhrase) => {
  return {
    name: name,
    age: age,
    energySource: energySource,
    scare() {
      console.log(catchPhrase);
    }
  }
};

//In the monsterFactory function above, it has four parameters and returns an object that has the properties: name, age, energySource, and scare(). To make an object that represents a specific monster like a ghost, we can call monsterFactory with the necessary arguments and assign the return value to a variable:

const ghost = monsterFactory('Ghouly', 251, 'ectoplasm', 'BOO!');
ghost.scare(); // 'BOO!'

//Now we have a ghost object as a result of calling monsterFactory() with the needed arguments. With monsterFactory in place, we don’t have to create an object literal every time we need a new monster. Instead, we can invoke the monsterFactory function with the necessary arguments to take over the world make a monster for us!

//EXERCISE 
// 1)Instead of making individual robots like we’ve been doing, let’s make a factory function to make robots as we please!
// Create a factory function named robotFactory that has two parameters model and mobile. Make the function return an object. In the object, add a key of model with the value of the model parameter. Add another property that has a key of mobile with a value of the mobile parameter.
// Then add a method named beep without a parameter that will log 'Beep Boop' to the console.
//2)Use your factory function by declaring a const variable named tinCan. Assign to tinCan the value of calling robotFactory with the first argument of 'P-500' and the second argument of true.
//3)Let’s now check what tinCan can do! Call .beep() on tinCan.
// 

const robotFactory = (model, mobile) => {
  return {
    model: model,
    mobile: mobile,
    beep() {
      console.log('Beep Boop');
    }
  }
}

const tinCan = robotFactory('P-500', true);
tinCan.beep();


//NEW TOPIC: DESTRCUTURED ASSIGNMENT
//We often want to extract key-value pairs from objects and save them as variables. Take for example the following object:

const vampire = {
  name: 'Dracula',
  residence: 'Transylvania',
  preferences: {
    day: 'stay inside',
    night: 'satisfy appetite'
  }
};

//If we wanted to extract the residence property as a variable, we could using the following code:

// const residence = vampire.residence;
// console.log(residence); // Prints 'Transylvania' 

//However, we can also take advantage of a destructuring technique called destructured assignment to save ourselves some keystrokes. In destructured assignment we create a variable with the name of an object’s key that is wrapped in curly braces { } and assign to it the object. Take a look at the example below:

const { residence } = vampire; //put a key into a curly braces
console.log(residence); // Prints 'Transylvania'

//EXERCISE DESTRUCTURED ASSIGNMENT

const robot2 = {
  model: '1E78V2',
  energyLevel: 100,
  functionality: {
    beep() {
      console.log('Beep Boop');
    },
    fireLaser() {
      console.log('Pew Pew');
    },
  }
};

//1)Use destructured assignment to create a const variable named functionality that extracts the functionality property of robot.
//If you need a reminder on how to use destructured assignment, review the example in the narrative or check the hint.

const { functionality } = robot2;
console.log(functionality);

//2) Since functionality is referencing robot.functionality we can call the methods available to robot.functionality simply through functionality.
//Take advantage of this shortcut and call the .beep() method on functionality.

console.log(functionality.beep);

//BUILT-IN OBJECT METHODS
//Built-in Object Methods
//In the previous exercises we’ve been creating instances of objects that have their own methods. But, we can also take advantage of built-in methods for Objects!
//For example, we have access to object instance methods like: .hasOwnProperty(), .valueOf(), and many more! Practice your documentation reading skills and check out: MDN’s object instance documentation.
//There are also useful Object class methods such as Object.assign(), Object.entries(), and Object.keys() just to name a few. For a comprehensive list, browse: MDN’s object instance documentation.

const robot3 = {
  model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

// What is missing in the following method call? --> ans) name of the object
const robotKeys = Object.keys(robot3); // returns an array

console.log(robotKeys);

// Declare robotEntries below this line: --> convert object into array
const robotEntries = Object.entries(robot3); // returns an array
console.log("returning an array", robotEntries);

robotEntries.forEach(([key, value]) => {
  console.log(`returning a pair of key and value ->  ${key}: ${value}`);
});

robotEntries.map(([key, value]) => ({ key, value }));
console.log("returning an array of a pair of key and value", robotEntries);

// Declare newRobot below this line:
const newRobot = Object.assign({}, robot3); //create a new object called newRobot

console.log(newRobot);

//1) In main.js there is an object, robot. We’d like to grab the property names, otherwise known as keys, and save the keys in an array which is assigned to robotKeys. However, there’s something missing in the method call.
//Find out what we have to include by reading MDN’s Object.keys() documentation.

//2)Object.entries() will also return an array, but the array will contain more arrays that have both the key and value of the properties in an object.
//Declare a const variable named robotEntries and assign to it the entries of robot by calling Object.entries().
//To find how to use Object.entries(), read the documentation at MDN.

//3)Now what if we want another object that has the properties of robot but with a few additional properties. Object.assign() sounds like a great method to use, but like the previous examples we should check Object.assign() documentation at MDN.
//Declare a const variable named newRobot. newRobot will be a new object that has all the properties of robot and the properties in the following object: {laserBlaster: true, voiceRecognition: true}. Make sure that you are not changing the robot object!


//REVIEW
// Let’s review the concepts covered:

// The object that a method belongs to is called the calling object.
// The this keyword refers the calling object and can be used to access properties of the calling object.
// Methods do not automatically have access to other internal properties of the calling object.
// The value of this depends on where the this is being accessed from.
// We cannot use arrow functions as methods if we want to access other internal properties.
// JavaScript objects do not have built-in privacy, rather there are conventions to follow to notify other developers about the intent of the code.
// The usage of an underscore before a property name means that the original developer did not intend for that property to be directly changed.
// Setters and getter methods allow for more detailed ways of accessing and assigning properties.
// Factory functions allow us to create object instances quickly and repeatedly.
// There are different ways to use object destructuring: one way is the property value shorthand and another is destructured assignment.
// As with any concept, it is a good skill to learn how to use the documentation with objects!
// You’re ready to start leveraging more elegant code for creating and accessing objects in your code!


// If you want to challenge yourself:

// Find the value of this in a function inside of a method.
// Learn the outcome of using a property that has the exact same name as a setter/getter method.
// Create a new factory function that can create object instances of your choice.
// Read documentation on other destructuring techniques and apply it to your code.
// Try out other built-in object methods and learn what they do.