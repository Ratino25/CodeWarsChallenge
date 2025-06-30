// function stringy(size){
//     let result = "";
//     for(let i = 0; i < size; i++){
//         if(i % 2 === 0){
//             result += "1";
//         } else {
//             result += "0";
//         }
//     }
//     return result;
// }

// Cara 2
// function stringy(size){
//     return Array.from({length: size}, (_, i) => i % 2).join('');
// }

// Cara 3s
function stringy(size){
    let result = "";
    for(let i = 0; i < size; i++){
        result += i % 2 === 0 ? "1" : "0";
    }
    return result;
}

console.log(stringy(6));