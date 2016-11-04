var countdownGenerator = function(start) {
  start = start + 1;
  var countdown = function () {
    start = start - 1
    if (start > 0) {
      return "T-minus " + start + "..."
    } else if (start === 0) {
      return "Blast Off!"
    } else {
    return "Rockets already gone, bub!";
    }
  };
  return countdown
};/* your code here */

var countdown = countdownGenerator(3);
console.log(countdown()); // T-minus 3...
console.log(countdown());
console.log(countdown());
console.log(countdown());
console.log(countdown());
console.log(countdown());
console.log(countdown());
console.log(countdown());// Rockets already gone, bub!