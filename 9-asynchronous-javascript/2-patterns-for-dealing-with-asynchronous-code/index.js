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

/*
// Callbacks
console.log("before");
getGroceryItem(1, (groceryIten) => {console.log(groceryIten)});

console.log('after');

function getGroceryItem(id, callback) {
  setTimeout(() => {
    console.log("Reading a grocery item from a database...");
    callback({ id: id, name: "Apples" });
  }, 2000);
}
*/

/*
// Promise
console.log("before");

getGroceryItem(1)
  .then((item) => {
    console.log(item);
  })
  .catch((err) => console.error(err));

console.log("after");

function getGroceryItem(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Reading a grocery item from a database...");
      resolve({ id: id, name: "Apples" });
    }, 2000);
  });
}
*/

// Async/Await
console.log("before");

async function displayGroceryItem() {
  const groceryItem = await getGroceryItem(1);
  console.log(groceryItem);
}

displayGroceryItem(1);
console.log("after");

function getGroceryItem(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Reading a grocery item from a database...");
      resolve({ id: id, name: "Apples" });
    }, 2000);
  });
}
