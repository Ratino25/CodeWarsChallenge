
//https://www.codewars.com/kata/57a0885cbb9944e24c00008e/train/javascript

// function removeExclamationMarks(s) {
//     for(let i = 0; i < s.length; i++){
//         if(s[i] === '!'){
//             return s.slice(0,i) + s.slice(i+1);
//         }
//     }
//     return s;
//   }


//   function removeExclamationMarks(s) {
//     result = '';
//     for(let i = 0; i < s.length; i++){
//           if(s[i] !== '!'){
//               result += s[i];
//           }
//       }
//       return result;
//   }

// Cara 2
// function removeExclamationMarks(s) {
//     return s.split('!').join('');
// }

// Cara 3
const removeExclamationMarks = (s) => s.split('!').join('');

  console.log(removeExclamationMarks("Hello World!"));
  console.log(removeExclamationMarks("Hello World!!!"));
  console.log(removeExclamationMarks("Hi! Hello!"))