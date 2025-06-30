// https://www.codewars.com/kata/56170e844da7c6f647000063/train/javascript

function peopleWithAgeDrink(old){
    // let result = "";
    // if(old < 14){
    //     result = "drink toddy";
    // } else if(old < 18){
    //     result = "drink coke";
    // } else if(old < 21){
    //     result = "drink beer";
    // } else {
    //     result = "drink whisky";
    // }
    // return result;

    // Cara 2
    // return old < 14 ? "drink toddy" : old < 18 ? "drink coke" : old < 21 ? "drink beer" : "drink whisky";

    // Cara 3
    if (old < 14) return "drink toddy"
    if (old < 18) return "drink coke"
    if (old < 21) return "drink beer"
    return "drink whisky";
}

console.log(peopleWithAgeDrink(13));
console.log(peopleWithAgeDrink(17));
console.log(peopleWithAgeDrink(20));
console.log(peopleWithAgeDrink(25));