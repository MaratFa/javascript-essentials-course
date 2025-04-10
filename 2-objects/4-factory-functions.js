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

function createProgrammer(name, preferredLanguage) {
  return {
    name,
    preferredLanguage,
    writeCode() {
      console.log(`${this.name} writes ${this.preferredLanguage} code.`);
    },
    drinkCoffe() {
      console.log(`$(this.name) drink coffee.`);
    },
  };
}

const newProgrammer = createProgrammer("Alice", "JavaScript");
newProgrammer.writeCode();

// Exercise
const groceryItem = {
  name: "Apples",
  quantity: 4,
  display() {
    console.log(`${this.quantity} x ${this.name}`);
  },
};

function createGroceryItem(name, quantity) {
  return {
    name,
    quantity,
    display() {
      console.log(`${this.quantity} x ${this.name}`);
    },
  };
}

const newItem = createGroceryItem("Bananas", 5);
newItem.display();