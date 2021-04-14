/* Parent class */
class Media {
  // create an object with a constructor function
  constructor(param) {
    this._title = param._title;
    this._isCheckedOut = param._isCheckedOut; //default = false
    this._ratings = param._ratings; //defaut = empty array
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
    if (_isCheckedOut) {
      _isCheckedOut = false;
    } else {
      _isCheckedOut = true;
    };
    return this, _isCheckedOut;
  }
  getAverageRating = () => {
    return this, ratings.reduce((a, b) => { (a + b) / ratings.length, 0 }); //calc average
  }
  addRating = (rate) => {
    ratings.push(rate);
    return this, ratings;
  }
};

/* Child classes */
//Book
class Book extends Media {
  constructor(author, title, pages) {
    super(bookData); // inheriting from parant class
    this._title = bookData._title;
    this._author = author._author; //specific for the child class
    this.pages = pages._pages; //specific for the child class
  }
  //define getter only for the child class
  get bookInfo() {
    return this._author, this._pages;
  }
};

//Movie
class Movie extends Media {
  constructor(director, runTime) {
    this._director = director._director;
    this._runTime = runTime._runTime;
  }
  //define getter only for the child class
  get movieInfo() {
    return this._director, this._runTime;
  }
}

/* Instance manipulation */
//create a book instance
const historyOfEverything = new Book({
  Author: "Bill Bryson",
  Title: "A Short History of Nearly Everything",
  Pages: 544
});

//call the method in Book class and log the values
console.log(historyOfEverything.toggleCheckOutStatus());

historyOfEverything.addRating(4).addRating(5).addRating(5); //method chaning (must write return this in the class)

console.log(historyOfEverything.getAverageRating());

//create a movie instance
const speed = new Movie({
  Director: "Jan de Bont",
  Title: "Speed",
  Runtime: 116
});

//call the method in Movie class and log the values
console.log(historyOfEverything.toggleCheckOutStatus());

speed.addRating(1).addRating(1).addRating(5); //method chaning (must write return this in the class)

console.log(speed.getAverageRating());