// https://www.codewars.com/kata/5ab6538b379d20ad880000ab/train/javascript
// const areaOrPerimeter = function(l , w) {
//     // Return your answer
//     if(l == w) {
//         return l * w;
//     } else {
//         return 2 * l + 2 * w;
//     }
//   };

// const areaOrPerimeter = function(l , w) {
//     return l == w ? l * w : 2 * (l + w);
//   };

  const areaOrPerimeter = (l , w) => (l == w) ? l * w : 2 * (l + w);

  console.log(areaOrPerimeter(3,  3));
  console.log(areaOrPerimeter(6, 10));
  console.log(areaOrPerimeter(4,  4));