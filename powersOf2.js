function powerOfTwo(n){
    // let result = [];
    // for(let i = 0; i <= n; i++){
    //     result.push(Math.pow(2, i));
    // }
    // return result;

    // cara 2
    return Array.from({length: n + 1}, (v,k) => 2 ** k);
}

console.log(powerOfTwo(4));