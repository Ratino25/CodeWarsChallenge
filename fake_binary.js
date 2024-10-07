// function fakeBin(x){
//     let result = "";
//     for(let i = 0; i < x.length; i++){
//         if(x[i] >= 5 ){
//             result += "1";
//         } else{
//             result += "0";
//         }
//     }
//     return result;
// }

function fakeBin(x){
    let result = "";
    for(let i = 0; i < x.length; i++){
        x[i] >= 5 ? result += "1" : result += "0";
    }
    return result;
}

console.log(fakeBin("45385593107843568"));
console.log(fakeBin("509321967506747"));