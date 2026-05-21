// https://www.codewars.com/kata/58dbdccee5ee8fa2f9000058/train/javascript


// function spEng(sentence){
//     // let text = sentence.toLowerCase();
//     // if(text.indexOf("english") !== -1){
//     //     return true;
//     // } else {
//     //     return false;
//     // }

//     // Cara 2
//     return sentence.toLowerCase().includes("english");
// }

const spEng = (sentence) => sentence.toLowerCase().includes("english");

// console.log(spEng("english")) // true
// console.log(spEng("egnlish")) // false
console.log(spEng("Do you speak English?")) // true