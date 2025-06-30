// https://www.codewars.com/kata/5ce9c1000bab0b001134f5af/train/javascript


// const quarterOf = (month) => {
//     // Your code here
//     if(month <= 3) {
//         return 1;
//     } else if (month <= 6){
//         return 2;
//     } else if (month <= 9){
//         return 3;
//     } else {
//         return 4;
//     }
//   }

// cara 2
const quarterOf = (month) => Math.ceil(month/3);

  console.log(quarterOf(3));
  console.log(quarterOf(8));
  console.log(quarterOf(11));