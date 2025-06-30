// https://www.codewars.com/kata/563e320cee5dddcf77000158/train/javascript

// function getAverage(marks){
//     //TODO : calculate the downward rounded average of the marks array
//     let total = 0;
//     for(let i = 0; i < marks.length; i++) {
//         total += marks[i];
//     }
//     return Math.floor(total / marks.length);
//   }

// Cara 2
function getAverage(marks){
    return Math.floor(marks.reduce((acc, curr) => acc + curr) / marks.length);
  }

  // Cara 3
  const gerAverage = (marks) => Math.floor(marks.reduce((acc, curr) => acc + curr) / marks.length);

console.log(getAverage([2, 2, 2, 2]));
console.log(getAverage([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))