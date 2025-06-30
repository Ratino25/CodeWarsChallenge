// https://www.codewars.com/kata/57f24e6a18e9fad8eb000296/train/javascript
function howMuchILoveYou(nbPetals){
    let arr = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"];
    return arr[(nbPetals - 1) % 6];
}

console.log(howMuchILoveYou(7));
