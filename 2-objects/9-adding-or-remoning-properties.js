// Lesson
const person = {
  name: "Steven",
};

console.log(person);

person.favoriteFood = "tacos";
console.log(person);

person["favoriteIceCream"] = "chocolate";
console.log(person);

delete person.favoriteIceCream;
console.log(person);

person.eat = function () {
  console.log(`${this.name} eats ${this.favoriteFood}`);
};
person.eat();

// Exercise
function GroceryItem(name, quantity) {
  this.name = name;
  this.quantity = quantity;
  this.display = () => console.log(`${quantity} x ${this.name}`);
}

const newItem = new GroceryItem("Banana", 4);
newItem.groceryAisle = "Produce";
console.log(newItem.display());
