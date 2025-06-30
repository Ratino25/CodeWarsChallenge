function position(letter) {
  //   return letter.charCodeAt(0) - 96;

  // cara 2
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  const index = alphabets.indexOf(letter);
  return "Position of alphabet: " + (index + 1);
}

console.log(position("a"));
console.log(position("b"));
console.log(position("c"));
console.log(position("d"));
console.log(position("e"));
console.log(position("f"));
console.log(position("g"));
console.log(position("h"));
console.log(position("i"));
console.log(position("j"));
console.log(position("k"));
console.log(position("l"));
console.log(position("m"));
console.log(position("n"));
console.log(position("o"));
console.log(position("p"));
