//Instruction:
//Meal Maker Project
//In this project, you’ll use JavaScript to randomly create a three-course meal 
//based on what is available on a menu. We’ll keep running it until we’re satisfied with the generated meal!

/* Menu Object */
const menuObj = {
  //#1,2,3: _course property
  _courses: {
    appetizer: [],
    main: [],
    dessert: []
  },
  //#4: getter and setter
  get appetizerGetSet() {
    return this._courses.appetizer;
  },
  get mainGetSet() {
    return this._courses.main;
  },
  get dessertGetSet() {
    return this._courses.dessert;
  },
  set appetizerGetSet(item) {
    this._courses.appetizer = item;
  },
  set mainGetSet(item) {
    this._courses.main = item;
  },
  set dessertGetSet(item) {
    this._courses.dessert = item;
  },
  // #5, 6 return an course object created based on getter and setter
  get allCourse() {
    return {
      appetizers: this.appetizerGetSet, //get value from getter
      main: this.mainGetSet, //get value from getter
      dessert: this.dessertGetSet //get value from getter
    };
  },
  //methods
  //# 7, 8 adds the dish object to courses with name and price of dish
  addDishToCourse: (courseName, dishName, dishPrice) => {
    const dishObj = {
      _dishname: dishName,
      _dishprice: dishPrice
    }
    //add dishObj i.e) if the parameter, courseName = "appetizer", add dishObj into the key "appetizer"
    menuObj._courses[courseName].push(dishObj);
  },
  //#9,10
  getRandomDishFromCourse: (courseName) => {
    const dishes = menuObj._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  //#11
  generateRandomMeal: () => {
    const appetizer = menuObj.getRandomDishFromCourse("appetizer");
    const main = menuObj.getRandomDishFromCourse("main");
    const dessert = menuObj.getRandomDishFromCourse("dessert");

    //Calculate total price
    const total = appetizer._dishprice + main._dishprice + dessert._dishprice

    return console.log(`Toatl price is $${total}. Meal contains ${appetizer._dishname}, ${main._dishname}, and ${dessert._dishname}`)
  }
};

//#12 - test items
menuObj.addDishToCourse('appetizer', 'Caesar Salad', 4.5);
menuObj.addDishToCourse('appetizer', 'Ceviche', 8);
menuObj.addDishToCourse('appetizer', 'Pea Soup', 6.5);
menuObj.addDishToCourse('main', 'Entrecote', 18.8);
menuObj.addDishToCourse('main', 'Sea bass', 20.5);
menuObj.addDishToCourse('main', 'Risotto', 13);
menuObj.addDishToCourse('dessert', 'Tiramisu', 7);
menuObj.addDishToCourse('dessert', 'Cheese Plate', 12.5);
menuObj.addDishToCourse('dessert', 'Ice Cream', 5);

//#13 - log the result
menuObj.generateRandomMeal();



