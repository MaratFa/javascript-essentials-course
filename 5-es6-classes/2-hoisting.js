// const dev = new Programmer("Steven", "JavaScript");

class Programmer {
  constructor(name, preferredLanguage) {
    this.name = name;
    this.preferredLanguage = preferredLanguage;
  }

  code() {
    console.log(`${this.name} is coding in ${this.preferredLanguage}.`);
  }
}

const programmer = new MyProgrammerClass("Steven", "JavaScript");
programmer.code();

const MyProgrammerClass = class {
  constructor(name, preferredLanguage) {
    this.name = name;
    this.preferredLanguage = preferredLanguage;
  }

  code() {
    console.log(`${this.name} is coding in ${this.preferredLanguage}.`);
  }
};

// greet();

function greet() {
  console.log("Hello World");
}

// sayGoodBye();

const sayGoodBye = function () {
  console.log("Goodbye");
};
