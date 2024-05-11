// https://www.codewars.com/kata/56b1f01c247c01db92000076

// function doubleChar(str) {
//     // Your code here
//     let result = "";
//     for(let i = 0; i < str.length; i++){
//       result += str[i] + str[i];
//     }
//     return result;
//   }

//Cara 2
// function doubleChar(str){
//     return str.split('').map((el) => el + el).join('');
// }
//Cara 3
function doubleChar(str) {
    return str.replace(/(.)/g, "$1$1")
  }
  
  console.log(doubleChar("The"));
  console.log(doubleChar("Adidas"));