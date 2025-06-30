// https://www.codewars.com/kata/5704aea738428f4d30000914/train/javascript

function tripleTrouble(one, two, three) {
  let result = "";
  for (let i = 0; i < one.length; i++) {
    result += one[i] + two[i] + three[i];
  }
  return result;
}

console.log(tripleTrouble("aa", "bb", "cc")); // "abcabc"
console.log(tripleTrouble("burn", "reds", "roll")); // "brrueord"
console.log(tripleTrouble("are", "you", "ready"));
