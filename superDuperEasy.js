// https://www.codewars.com/kata/55a5bfaa756cfede78000026/train/javascript

function problem(x) {
  if (typeof x === "string") {
    return "Error";
  }
  return x * 50 + 6;
}

console.log(problem(1)); // 56
console.log(problem(5)); // 256
console.log(problem(0)); // 6
console.log(problem("hello")); // error
