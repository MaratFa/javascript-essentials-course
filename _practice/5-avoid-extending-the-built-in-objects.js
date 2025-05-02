// Array.prototype.shuffle = function () {
//   // Implementation
//   console.log('shuffle');
// };

function shuffleArray(array) {
  // shuffle logic here
  return array;
}

const array = [2];
const shuffledArray = shuffleArray(array);

if (typeof Array.prototype.shuffle !== "function") {
  Array.prototype.shuffle = function () {
    // Implementation
    console.log("shuffle");
  };
}
