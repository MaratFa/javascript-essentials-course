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

