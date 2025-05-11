// Simulation for calling site_1 API
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async operation 1...");
    // reject(new Error("Async operation 1 failed"));
    resolve(1);
  }, 2000);
});

// Simulation for calling site_2 API
const p2 = new Promise((resolve) => {
  setTimeout(() => {
    console.log("Async operation 2...");
    resolve(2);
  }, 2000);
});

// Running both asynchronous operations
Promise.race([p1, p2])
  .then((result) => console.log(result))
  .catch((err) => console.log("Error: ", err.message));
