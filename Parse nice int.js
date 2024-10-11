// function getAge(inputString) {
//     return parseInt(inputString);
// }

function getAge(inputString) {
    return +inputString.split(" ")[0];
}
console.log(getAge("4 years old"));
console.log(getAge("9 years old"));
