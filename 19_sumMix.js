//https://www.codewars.com/kata/57eaeb9578748ff92a000009/train/javascript

// function sumMix(x){
//     let result = 0;
//     for(let i = 0; i < x.length; i++){
//         result += parseInt(x[i]);
//     }
//     return result;
// }

// Cara 2
// function sumMix(x){
//     let result = 0;
//     for (let n of x) {
//       result += parseInt(n);
//     }
//     return result;
//   }

function sumMix(x){
   return x.reduce((acc, curr) => acc + parseInt(curr), 0);
}

console.log(sumMix([9,3,5,7,11]));
console.log(sumMix([9,3,'7','3']));