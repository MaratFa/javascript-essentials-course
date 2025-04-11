// Lesson
function Programmer(name, preferredLanguage) {
  this.name = name;
  this.preferredLanguage = preferredLanguage;
  this.writeCode = function () {
    console.log(`${this.name} writes ${this.preferredLanguage} code.`);
  };
  this.drinksCoffee = function () {
    console.log(`${this.name} drinks coffee.`);
  };
}

const newProgrammer = new Programmer("Alice", "JavaScript");
newProgrammer.writeCode();

// Exercise
function GroceryItem(name, quantity) {
  this.name = name;
  this.quantity = quantity;
  this.display = function () {
    console.log(`${this.quantity} x ${this.name}s`);
  };
}

const item_1 = new GroceryItem("table", 4);
item_1.display();
