let person = {
  name: "John",
};

Object.defineProperty(person, "name", {
  writable: false,
  enumerable: false,
  configurable: true,
});

for (let key in person) console.log(key);

let objectBase = Object.getPrototypeOf(person);
const propertyDescriptor = Object.getOwnPropertyDescriptor(
  objectBase,
  "toString"
);
console.log(propertyDescriptor);
