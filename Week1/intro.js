// EXERCISE NUMBER 1

//1)Let’s use the dot operator to access the value of numCrew from the spaceship object in the code editor. 
//Create a variable crewCount and assign the spaceship‘s numCrew property to it.
//2)Again using the dot operator, create a variable planetArray and assign the spaceship‘s flightPath property to it.

let spaceship = {
  homePlanet: 'Earth',
  color: 'silver',
  'Fuel Type': 'Turbo Fuel',
  numCrew: 5,
  flightPath: ['Venus', 'Mars', 'Saturn']
};
let crewCount = spaceship.numCrew;
let planetArray = spaceship.flightPath;
console.log(`#1: crewCount is ${crewCount}. planetArray is ${planetArray}`);


//*******************************************************
// EXERCISE NUMBER 2

let spaceship = {
  'Fuel Type': 'Turbo Fuel',
  'Active Mission': true,
  homePlanet: 'Earth',
  numCrew: 5
};

let propName = 'Active Mission';

//let isActive = spaceship["Active Mission"];
let isActive = spaceship[propName];
console.log(isActive);

//1)Let’s use bracket notation to access the value of 'Active Mission' from the spaceship object in the code editor. 
//Create a variable isActive and assign the spaceship‘s 'Active Mission' property to it.
//2)Using bracket notation and the propName variable provided, console.log() the value of the 'Active Mission' property.


// //*******************************************************
// EXERCISE NUMBER 3

let spaceship = {
  'Fuel Type': 'Turbo Fuel',
  homePlanet: 'Earth',
  color: 'silver',
  'Secret Mission': 'Discover life outside of Earth.'
};

spaceship.color = 'glorious gold';

spaceship.numEngines = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

delete spaceship["Secret Mission"];

console.log(spaceship);

//Reassign the color property of the spaceship object to have a value of 'glorious gold'
//Without changing lines 1 - 6, add a numEngines property with a numeric value between 1 and 10 to the spaceship object.
//Use the delete operator to remove the 'Secret Mission' property from the spaceship object.


//*******************************************************
// EXERCISE NUMBER 4

let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

const alienShip = {
  retreat: () => {
    return retreatMessage;
  },
  takeOff: () => {
    return 'Spim... Borp... Glix... Blastoff!';
  }
}
console.log(alienShip.retreat(), alienShip.takeOff());

//1)Below the retreatMessage variable in the code editor, create an alienShip object. 
//It should contain a method .retreat() which will console.log() the retreatMessage.
//2)Add another method to your object literal. 
//This method, .takeOff(), should console.log() the string 'Spim... Borp... Glix... Blastoff!'.
//3) Invoke your two methods: first .retreat() then .takeOff().


//*******************************************************
// EXERCISE NUMBER 5

let spaceship = {
  passengers: [{ name: 'Space Dog' }, { name: 'Space Cowboy' }],
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032
  },
  crew: {
    captain: {
      name: 'Sandra',
      degree: 'Computer Engineering',
      encourageTeam() { console.log('We got this!') },
      'favorite foods': ['cookies', 'cakes', 'candy', 'spinach']
    }
  },
  engine: {
    model: "Nimbus2000"
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD"
    },
    'back-up': {
      battery: "Lithium",
      terabytes: 50
    }
  }
};

let capFave = spaceship.crew.captain["favorite foods"][0];
let firstPassenger = spaceship.passengers[0].name;

console.log(capFave, firstPassenger);

//1) Create a variable capFave and assign the captain‘s favorite food (the element in the 0th index of her 'favorite foods' array) to it. 
//Make sure to use bracket and dot notation to get the value of the food through nested access (don’t just copy the value into the variable!)
//2)Right now the passengers property has a value of null. Instead, assign as its value an array of objects. These objects should represent the spaceship‘s passengers as individual objects. 
//Make at least one passenger object in the array that has at least one key-value pair on it.
//3) Create a variable firstPassenger and assign the first passenger as its value (the element in the 0th index of the spaceship.passengers array you just made). 
//Make sure to use bracket and dot notation to get the passenger object through nested access (don’t just copy the object into the variable!)
//*******************************************************