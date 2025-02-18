// https://www.codewars.com/kata/570a6a46455d08ff8d001002/train/javascript

function noBoringZeros(n){
    // let str = n.toString();

    // let lastNonZeroInde = str.length - 1;
    // while(lastNonZeroInde >= 0 && str[lastNonZeroInde] == '0'){
    //     lastNonZeroInde--;
    // }

    // let result = str.substring(0, lastNonZeroInde + 1);
    
    // return (result == '') ? 0 : parseInt(result)

    // cara 2
    // while(n %10 == 0 && n != 0){
    //     n /= 10;
    // }
    // return n;

    // Cara 3
    return + `${n}`.replace(/0*$/, "");
}

console.log(noBoringZeros(1450)); // 145
console.log(noBoringZeros(960000)); // 96
console.log(noBoringZeros(1050000)); // 105
console.log(noBoringZeros(-1050));
console.log(noBoringZeros(0));