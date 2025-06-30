// https://www.codewars.com/kata/596c6eb85b0f515834000049/train/javascript

// var replaceDots = function(str) {
//     return str.replace(/\./g, '-');
// }

// caraa 2
// var replaceDots = s=>s.replace(/\./g, '-');
// atau 
var replaceDots = s=>s.split('.').join("-");

console.log(replaceDots("one.two.three"));

