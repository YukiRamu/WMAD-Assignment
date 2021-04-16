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
  constructor(director, title, runTime) {
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

/* Instance manipulation */
// ===== #1 create a book instance
const historyOfEverything = new Book("Bill Bryson", "A Short History of Nearly Everything", 544);

//call the method in Book class and log the values
console.log(historyOfEverything.toggleCheckOutStatus());

//method chaining (must write ONLY return this in the class)
//historyOfEverything.addRating(4).addRating(5).addRating(5); //worked

//instead of method chaining, go with the rest operator
historyOfEverything.addRating(4, 5, 5)

console.log(historyOfEverything.getAverageRating()); //undefined

//===== #2 create a movie instance
const speed = new Movie("Jan de Bont", "Speed", 116);

//call the method in Movie class and log the values
console.log(historyOfEverything.toggleCheckOutStatus());

//method chaining (must write return this in the class)
speed.addRating(1, 5, 5);

console.log(speed.getAverageRating());

// Create class called Catalog that holds all of the Media items in our library.
// Catalog which holds Array of book, cds and movies
// It can have methods as addBook,addMovie, addCD, getCD...

class Catalog {
  constructor() {
    this._bookArray = [];
    this._movieArray = [];
    this._cdArray = [];
  }
  addBook(...item) {
    console.log(...item)
    this._bookArray.push(...item);
    console.log(this._bookArray);
  }
  addMovie(...item) {
    this._movieArray.push(...item);
    console.log(this._movieArray);
  }
  addCD(...item) {
    this._cdArray.push(...item);
    console.log(this._cdArray);
  }
};

//test instances for Catalog class
const bookItem = new Book("Jon Park", "Gone with the wind", 555);
const bookItem2 = new Book("Mary Lynn", "Fast and Furious", 759);
const bookItem3 = new Book("Jon Park", "Chance", 555);

const cdItem = new CD("Jon Park", "album1", "song1");
const cdItem2 = new CD("Mary Lynn", "album2", "song2");
const cdItem3 = new CD("Jon Park", "album3", "song2");

const movieItem = new Movie("Jon Park", "Matrix", 120);
const movieItem2 = new Movie("Mary Lynn", "Jurassic Park", 190);
const movieItem3 = new Movie("Jon Park", "Taken", 75);

//call method in Catalog
//#1 create an instance for Catalog
//#2 call the method
const catalogItem = new Catalog();
catalogItem.addBook(bookItem, bookItem2, bookItem3);
catalogItem.addMovie(cdItem, cdItem2, cdItem3);
catalogItem.addCD(movieItem, movieItem2, movieItem3);
