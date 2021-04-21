// 1.	Write a JavaScript program to list the properties of a JavaScript object.
// Sample object:
const student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12
};
// Sample Output: name,sclass,rollno

const getProperty = () => {
  console.log(Object.keys(student));
}
getProperty();

// 2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.

// Sample object:
const student2 = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12
};

const deleteProperty = () => {
  console.log("before", student2);
  delete student2.rollno;
  console.log("after", student2);
}
deleteProperty();

// 3. Write a JavaScript program to get the length of a JavaScript object.

// Sample object :
const student3 = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12
};

const getLength = () => {
  console.log(Object.keys(student3).length);
  //alternative way
  console.log(Object.entries(student3).length);
}
getLength();

// 4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.

const library = [
  {
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true
  },
  {
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
    readingStatus: true
  },
  {
    author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book of The Hunger Games',
    readingStatus: false
  }];

const displayReadingStatus = () => {
  //just displaying one by one
  library.map((elem) => {
    console.log(`${elem.author}, ${elem.title}, ${elem.readingStatus}`);
  });
}
displayReadingStatus();

// 5. Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes.

// Volume of a cylinder :V = π*r*r*h
// where r is the radius and h is the height of the cylinder.
class Cylinder {
  constructor(height, radius) {
    this._height = height;
    this._radius = radius;
  }
  getVolume() {
    const V = Math.PI * this._radius * this._radius * this._height;
    return console.log("volume is ", V.toFixed(4));
  }
}
const cylinder = new Cylinder(5, 6);
cylinder.getVolume();

// 6. Write a JavaScript program to sort an array of JavaScript objects.Sample Object :
const library2 = [
  {
    title: 'The Road Ahead',
    author: 'Bill Gates',
    libraryID: 1254
  },
  {
    title: 'Walter Isaacson',
    author: 'Steve Jobs',
    libraryID: 4264
  },
  {
    title: 'Mockingjay: The Final Book of The Hunger Games',
    author: 'Suzanne Collins',
    libraryID: 3245
  }];


const sortObject = () => {
  const sortedLibrary2 = library2.sort((a, b) => a.libraryID - b.libraryID);
  console.log(sortedLibrary2);

}
sortObject();

//Expected Output:
// [[object Object] {
//   author: "Walter Isaacson",
//   libraryID: 4264,
//   title: "Steve Jobs"
// }, [object Object] {
//   author: "Suzanne Collins",
//   libraryID: 3245,
//   title: "Mockingjay: The Final Book of The Hunger Games"
// }, [object Object] {
//   author: "The Road Ahead",
//   libraryID: 1254,
//   title: "Bill Gates"
// }]
