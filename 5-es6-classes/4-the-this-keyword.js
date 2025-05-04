// "use strict";

// function Programmer(name) {
//   this.name = name;
//   this.code = function () {
//     console.log(this);
//   };
// }

class Programmer {
  constructor(name) {
    this.name = name;
  }

  code() {
    console.log(this);
  }
}

const programmer = new Programmer("John");
programmer.code();

const detachedCode = programmer.code;
detachedCode();
