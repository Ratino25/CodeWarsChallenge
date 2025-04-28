function addLength(str){
    // let words = str.split(" ");
    // let result = [];
    // for(let i = 0; i < words.length; i++){
    //     result.push(words[i] + " " + words[i].length);
    // }
    // return result;

    // cara  2
    return str.split(" ").map(word => `${word} ${word.length}` );
}

console.log(addLength("apple ban")); // Apple 5 , ban 3
