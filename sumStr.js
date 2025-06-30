// https://www.codewars.com/kata/5966e33c4e686b508700002d/solutions/javascript

function sumStr(a,b){
    // let result = 0;
    // result =  Number(a) + Number(b);
    // return result.toString();

    // cara 2
    return String(Number(a) + Number(b));
}

console.log(sumStr("4","5"));
console.log(sumStr("34","5"));