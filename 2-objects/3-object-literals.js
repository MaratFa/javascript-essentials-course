/*
let programmer = {
  name: "Steven",
  preferredLanguage: "JavaScript",
  writeCode: function () {
    console.log(`${this.name} writes ${this.preferredLanguage} code.`);
  },
  drinkCoffe() {
    console.log(`$(this.name) drink coffee.`);
  },
};

programmer.writeCode();
*/

const groceryItem = {
  name: "Aplles",
  quantity: 4,
  display() {
    console.log(`${this.quantity} x ${this.name}`);
  },
};

groceryItem.display();
