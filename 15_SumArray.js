// https://www.codewars.com/kata/576b93db1129fcf2200001e6/train/javascript

// function sumArray(array) {
//     if(array === null || array.length <= 2) return 0;
//     const sorted = array.sort((a, b) => a - b);
//     let result = 0;
//     for(let i = 1; i < sorted.length-1; i++){
//         result += sorted[i];
//     }
//     return result;
    
// }

function sumArray(array) {
    if(array === null || array.length <= 2) return 0;
    return array.sort((a, b) => a - b).slice(1, -1).reduce((acc, curr) => acc + curr);
}

console.log(sumArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(sumArray([6,2,1,8,10]));
console.log(sumArray([ 0, 1, 6, 10, 10 ]))
console.log(sumArray([ -6, -20, -1, -10, -12]));
console.log(sumArray(null));
console.log(sumArray([ ]));
console.log(sumArray([3]));
console.log(sumArray([3,5]))
