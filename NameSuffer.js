function nameSuffler(str){
    // const words = str.split(' ');
    // const reverseWords = words.reverse();
    // return reverseWords.join(' ');

    // Cara 2
    return str.split(' ').reverse().join(' ');
}

console.log(nameSuffler("John Doe")); // should return "Doe John"

console.log(nameSuffler("Jane Smith")); // should return "Smith Jane"