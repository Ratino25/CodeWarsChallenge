function xor(a, b) {
  return (a || b) && !(a && b);
}

console.log(xor(false, false)); //
console.log(xor(false, true)); //
console.log(xor(true, false)); //
console.log(xor(true, true));

// false or false = false
// false and false = false (not) = true
// false and true = false

// false or true = true
// false and true = false (not) true
// true and ture = true
