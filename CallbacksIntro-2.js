// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  arr.forEach(function(name, index) { //second, looks through array for condition listed on line 4
    if (name === "Waldo") {
      found(index);   // third, once condition is met, iniciate found with index
    }
  });
}

function actionWhenFound(index) {
  console.log("Found him at index " + index + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound); // first, sends array and actionWhenFound