// https://www.codewars.com/kata/56f69d9f9400f508fb000ba7/train/javascript

// function monkeyCount(n) {
//     // your code here
//     const result = [];
//         for(let i = 1; i <= n; i++){
//             result.push(i); 
//         }
//         return result;
//     }

// Cara 2
// function monkeyCount(n) {
//     return Array.from({length: n}, (_, i) => i+1);
// }

// Cara 3
// const monkeyCount = (n) => Array.from({length: n}, (_, i) => i+1);

// Cara 4
// function monkeyCount(n) {
//     for(var i = 0, arr = []; i < n; arr.push(++i));
//     return arr;
// }

// Cara 5
function monkeyCount(n){
    return [...Array(n).keys()].map(a => a +1);
}


console.log(monkeyCount(10));
console.log(monkeyCount(1));
console.log(monkeyCount(3));