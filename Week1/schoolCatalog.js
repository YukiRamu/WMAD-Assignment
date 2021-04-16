/* Parent class */
class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }
  get schoolInfo() {
    return this._name, this._level, this._numberOfStudents;
  }
  set schoolInfo(newNumberOfStudents) {
    if (!(isNaN(newNumberOfStudents))) {
      this._numberOfStudents = newNumberOfStudents;
    } else {
      return console.error("Invalid input numberOfStudents must be set to a Number.");
    }
  }
  quickFacts = () => {
    return console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`);
  }
  static pickSubstituteTeacher = (substituteTeachers) => {
    //generate random number
    let randomNum = Math.floor(Math.random() * substituteTeachers.length);
    return console.log(substituteTeachers[randomNum]);
  }
};

/* Child classes */
class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    super(name, "primary", numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }
  get primarySchoolInfo() {
    return this._pickupPolicy;
  }
};

class MiddleSchool extends School {
};

class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeams) { //order of param must be the same as the instance
    super(name, "high", numberOfStudents);
    this._sportsTeams = sportsTeams;
  }
  get highSchoolInfo() {
    return console.log(this._sportsTeams);
  }
};

/* Instances */
//primary school
//NOT working --> [object object], undefined
// const lorraineHansbury = new PrimarySchool({
//   Name: "Lorraine Hansbury",
//   NumberOfStudents: 514,
//   PickupPolicy: "Students must be picked up by a parent, guardian, or a family member over the age of 13"
// });

//OK
const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');

lorraineHansbury.quickFacts();

//high school
let param = ["Jamal Crawford", "Lou Williams", "J. R. Smith", "James Harden", "Jason Terry", "Manu Ginobli"];
School.pickSubstituteTeacher(param); //call static method -> use the name of Parent class

//NOT working --> undefined because passing just one object to the constructor in parent class
// const alSmith = new HighSchool({
//   Name: "Al E.Smith",+++++++
//   NumberOfStudents: 415,
//   SportsTeams: ["Baseball", "Basketball", "Volleyball", "Track and Field"]
// });

const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);

alSmith.highSchoolInfo; //call getter --> without parenthesis


/* Create a catalog class that holds a collection of School */
class SchoolCatalog {
  constructor() {
    this._primary = [];
    this._middle = [];
    this._high = [];
  }
  addPrimary(...school) {
    this._primary.push(...school);
    console.log(this._primary);
  }
  addHigh(...school) {
    this._high.push(...school);
    console.log(this._high);
  }
}

const VancouverPrimary = new PrimarySchool('Vancouver primary', 222, 'Students must be picked up by a parent');

const CICCC = new HighSchool('CICCC', 100, ['Web', 'mobile', 'hoslitality', 'marketing']);

//instance
const catalogItem = new SchoolCatalog();
catalogItem.addPrimary(lorraineHansbury, VancouverPrimary);
catalogItem.addHigh(alSmith, CICCC);



