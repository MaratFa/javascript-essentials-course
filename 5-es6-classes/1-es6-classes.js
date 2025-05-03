// function Programmer(name, preferredLanguage) {
//   this.name = name;
//   this.preferredLanguage = preferredLanguage;

//   this.code = function () {
//     console.log(`${this.name} is coding in ${this.preferredLanguage}.`);
//   };
// }

class Programmer {
  constructor(name, preferredLanguage) {
    this.name = name;
    this.preferredLanguage = preferredLanguage;
  }

  code() {
    console.log(`${this.name} is coding in ${this.preferredLanguage}.`);
  }
}

const programmer = new Programmer("Steven", "JavaScript");
programmer.code();

console.log(typeof Programmer);

// Exercise
class GroceryItem {
  constructor(name, quantity) {
    this.name = name;
    this.quantity = quantity;
  }

  display() {
    console.log(`${this.name} x ${this.quantity}`);
  }
}

const item = new GroceryItem("Apple", 4);
item.display();
