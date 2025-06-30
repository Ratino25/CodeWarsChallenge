// https://www.codewars.com/kata/56efc695740d30f963000557/solutions/javascript
String.prototype.toAlternatingCase = function () {
    // Define your method here :)
    // return this.split('')
    // .map(function (char){
    //     if(char === char.toUpperCase()){
    //         return char.toLowerCase();
    //     } else {
    //         return char.toUpperCase();
    //     }
    // }).join('');

    // Cara 2
    new_str = '';
    for(let i = 0; i < this.length; i++){
        if(this[i] === this[i].toLowerCase()){
            new_str += this[i].toUpperCase();
        } else {
            new_str += this[i].toLowerCase();
        }
    }
    return new_str;
  }

console.log("Hello World".toAlternatingCase());
console.log("hello world".toAlternatingCase());
console.log("HELLO WORLD".toAlternatingCase());