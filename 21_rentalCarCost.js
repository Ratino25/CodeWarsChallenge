//https://www.codewars.com/kata/568d0dd208ee69389d000016/train/javascript
// function rentalCarCost(d) {
//     // Your solution here
//     let result = 0;
//   if(d >= 7){
//     result = d * 40 - 50;
//   } else if (d >= 3){
//     result = d * 40 - 20;
//   } else {
//     result = d * 40;
//   }
//     return result;
//   }

// cara 2
// function rentalCarCost(d) {
//   return d * 40 - (d >= 7 ? 50 : d >= 3 ? 20 : 0);
// }

// Cara 3
const rentalCarCost = (d) => d * 40 - (d >= 7 ? 50 : d >= 3 ? 20 : 0);

  console.log(rentalCarCost(1));
  console.log(rentalCarCost(2));
  console.log(rentalCarCost(3));
  console.log(rentalCarCost(5));
  console.log(rentalCarCost(30));
