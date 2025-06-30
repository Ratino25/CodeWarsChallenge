//https://www.codewars.com/kata/56530b444e831334c0000020/solutions/javascript

// function chromosomeCheck(sperm) {
// //   if(sperm === "XX"){
// //     return "Congratulations! You're going to have a daughter."
// //   } else {
// //     return "Congratulations! You're going to have a son."
// //   }

//  // cara 2
//  return `Congratulations! You're going to have a ${sperm === "XY" ? "son" : "daughter"}.`
// }

const chromosomeCheck = sperm => `Congratulations! You're going to have a ${sperm === "XY" ? "son" : "daughter"}.`

console.log(chromosomeCheck("XX"));
console.log(chromosomeCheck("XY"));