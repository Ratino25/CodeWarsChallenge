// function arrayPlusArray(arr1, arr2) {
//   let sum = 0;
//   for(let i = 0; i < arr1.length; i++){
//     sum += arr1[i] + arr2[i];
//   }

//   return sum;
// }

// function arrayPlusArray(arr1, arr2) {
//   let sum = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     for (let j = 0; j < arguments[i].length; j++) {
//       sum += arguments[i][j];
//     }
//   }

//   return sum;
// }

// Cara 3

function arrayPlusArray(arr1, arr2) {
  return [...arr1, ...arr2].reduce((acc, curr) => acc + curr);
}

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));
console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6]));
