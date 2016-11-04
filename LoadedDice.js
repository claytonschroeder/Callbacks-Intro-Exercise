var loadedDie = (function () {
 var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  var nextDie = -1
  return function() {
    nextDie += 1
    return list[nextDie];
  }

})();

console.log(loadedDie());
console.log(loadedDie());
console.log(loadedDie());
console.log(loadedDie());
console.log(loadedDie());
console.log(loadedDie());
console.log(loadedDie());
console.log(loadedDie());
console.log(loadedDie());
console.log(loadedDie());
