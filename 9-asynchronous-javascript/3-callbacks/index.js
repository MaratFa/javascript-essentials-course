// Incorrect Synchronous Code
/*
console.log("before");

// CANNOT get grocery item like this
const groceryItem = getGroceryItem(1);
console.log(groceryItem); // undefined

console.log("after");

function getGroceryItem(id) {
  setTimeout(() => {
    // Simulate a call to the database
    console.log("Reading a grocery item from a database...");
    return { id: id, name: "Apples" };
  }, 2000);
}
*/

// Callbacks
console.log("before");

getGroceryList(1, (groceryList) => {
  console.log("Grocery List:", groceryList);

  // get the grocery list items
  getGroceryItem(groceryList.id, (items) => {
    console.log("Items:", items);
  });
});

console.log("after");

function getGroceryList(id, callback) {
  setTimeout(() => {
    // simulate a call to the database
    console.log("Fetching grocery list from the database...");
    callback({ id: id, items: ["apples", "bananas", "bread"] });
  }, 2000);
}

function getGroceryItem(id, callback) {
  setTimeout(() => {
    console.log("Fetching a grocery item from the grocery list...");
    callback(["apples", "bananas", "bread"]);
  }, 2000);
}
