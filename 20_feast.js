// https://www.codewars.com/kata/5aa736a455f906981800360d

// function feast(beast, dish) {
//     //your function here
//         return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length -1];
//     }

// Cara 2
// function feast(beast, dish) {
//     //your function here
//         return beast.charAt(0) === dish.charAt(0) && beast.at(-1)=== dish.at(-1);
//     }

// Cara 3
const feast = (beast, dish) => beast.charAt(0) === dish.charAt(0) && beast.at(-1)=== dish.at(-1);
    console.log(feast("great blue heron", "garlic naan"));
    console.log(feast("chickadee", "chocolate cake"));
    console.log(feast("brown bear", "bear claw"));