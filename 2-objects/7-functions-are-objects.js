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

function add(num1, num2) {
  return num1 + num2;
}

const n = add;
console.log(n(2, 2));
console.log(add.length);

const ProgrammerFunc = new Function('name', `
  this.name = name;
  this.writeCode = function() {
    console.log('Code in JavaScript');
  }  
`);

const programmer = new ProgrammerFunc('Steven');
console.log(programmer);