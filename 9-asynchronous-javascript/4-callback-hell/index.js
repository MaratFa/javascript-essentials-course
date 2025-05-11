// Callbacks
console.log("before");

// getGroceryList(1, (groceryList) => {
//   getGroceryItem(groceryList.id, (items) => {
//     checkItemAvailability([items[0]]);
//   });
// });

// getGroceryList(1)
//   .then((list) => getGroceryItem(list.id))
//   .then((items) => checkItemAvailability(items[0]))
//   .then((availability) => console.log("Availability", availability))
//   .catch((err) => console.log(err));

displayAvailability(1);

console.log("after");

async function displayAvailability() {
  try {
    const list = await getGroceryList(1);
    const items = await getGroceryItem(list.id);
    const availability = await checkItemAvailability(items[0]);
    console.log("Availability", availability);
  } catch (err) {
    console.error(err);
  }
}

function getGroceryList(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      // simulate a call to the database
      console.log("Fetching grocery list from the database...");
      resolve({ id: id, items: ["apples", "bananas", "bread"] });
    }, 2000);
  });
}

function getGroceryItem(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Fetching a grocery item from the grocery list...");
      resolve(["apples", "bananas", "bread"]);
    }, 2000);
  });
}

function checkItemAvailability(item) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Checking availability");
      resolve(true);
    }, 2000);
  });
}
