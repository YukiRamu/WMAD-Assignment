/* Parent class */
class Media {
  // create an object with a constructor function
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false; //default = false
    this._ratings = []; //defaut = empty array
  }
  //define getter and setter
  get mediaInfo() {
    return this._title, this._isCheckedOut, this._ratings;
  }
  set mediaInfo(param) {
    this._isCheckedOut = param._isCheckedOut;
  }
  //define the mothods
  toggleCheckOutStatus = () => {
    if (this._isCheckedOut) {
      this._isCheckedOut = false;
    } else {
      this._isCheckedOut = true;
    };
    return this._isCheckedOut;
  }
  getAverageRating = () => {
    let ave = this._ratings.reduce((a, b) => (a + b)) / this._ratings.length;//calc average
    return ave;
  }
  addRating = (...rate) => {
    this._ratings.push(...rate);
    //Validation check (rate between 1 and 5)
    if ((this._ratings.some((num) => {
      return num > 5 || num < 1
    })) === true) {
      alert("invalid rate value");
      return false;
    } else {
      return this;
    }
  }
};

/* Child classes */
//Book
class Book extends Media {
  constructor(author, title, pages) {
    super(title); // inheriting from parant class
    this._author = author; //specific for the child class
    this._pages = pages; //specific for the child class
  }
  //define getter only for the child class
  get bookInfo() {
    return this._author, this._pages;
  }
};

//Movie
class Movie extends Media {
  constructor(director, runTime, title) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }
  //define getter only for the child class
  get movieInfo() {
    return this._director, this._runTime;
  }
}

//CD
class CD extends Media {
  constructor(artist, title, songs) {
    super(title);
    this._artist = artist;
    this._songs = songs;
  }
  get cdInfo() {
    return this._artist, this._songs;
  }
  shuffle() {
    return this._songs.sort();
  }
}

//////// Under Construction///////////////
// Create class called Catalog that holds all of the Media items in our library.

/* Instance manipulation */
// ===== #1 create a book instance
const historyOfEverything = new Book({
  Author: "Bill Bryson",
  Title: "A Short History of Nearly Everything",
  Pages: 544
});

//call the method in Book class and log the values
console.log(historyOfEverything.toggleCheckOutStatus());

//method chaining (must write ONLY return this in the class)
//historyOfEverything.addRating(4).addRating(5).addRating(5); //worked

//instead of method chaining, go with the rest operator
historyOfEverything.addRating(4, 6, 5)

console.log(historyOfEverything.getAverageRating()); //undefined

//===== #2 create a movie instance
const speed = new Movie({
  Director: "Jan de Bont",
  Title: "Speed",
  Runtime: 116
});

//call the method in Movie class and log the values
console.log(historyOfEverything.toggleCheckOutStatus());

//method chaining (must write return this in the class)
speed.addRating(1, 5, 5);

console.log(speed.getAverageRating());