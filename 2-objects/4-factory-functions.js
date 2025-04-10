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
      
    }
  };
}

