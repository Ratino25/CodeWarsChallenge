String.prototype.isUpperCase = function () {
  //   return this === this.toUpperCase();
  //   for (let i = 0; i < this.length; i++) {
  //     if (this[i].match(/[a-z]/)) {
  //       return false;
  //     }
  //   }
  //   return true;

  // cara 2
  return this.toUpperCase() === this.toString();
};

console.log("c".isUpperCase());
console.log("C".isUpperCase());
console.log("HELLO I AM DONALD".isUpperCase()); // true
console.log("BOB WALKS HIS DOG EVERY DAY.".isUpperCase()); // true
console.log("BOB WALKs HIS DOG EVERY DAY.".isUpperCase()); // false
