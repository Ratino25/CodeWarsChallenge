// https://www.codewars.com/kata/5f70c883e10f9e0001c89673/train/javascript

// const flip = (d, a) => {
//     // if (d === 'R'){
//     //     return a.sort((a, b) => a - b);     
//     // } else {
//     //     return a.sort((a, b) => b - a);
//     // }

//     return d === 'R' ? a.sort((a,b) => a - b) : a.sort((a,b) => b - a)
// }

const flip = (d, a) => a.sort((a,b) => d === 'R' ? a - b : b - a)

console.log(flip('R', [3, 2, 1, 2]));