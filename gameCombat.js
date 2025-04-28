// https://www.codewars.com/kata/586c1cf4b98de0399300001d/train/javascript

function combat(health, damage){
    // let result = 0;
    // if(health <= damage){
    //     return result;
    // } else {
    //     result = health - damage;
    // }
    // return result;

    // Cara 2
    return health <= damage ? 0 : health - damage;
}

console.log(combat(100,5));
console.log(combat(92,8));
console.log(combat(20,30));