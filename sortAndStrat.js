function twoSort(s){
    // let result = '';
    // const sortData = s.sort();
    // const firstArray = sortData[0];
    // for(let i = 0; i < firstArray.length; i++){
    //     result += firstArray[i];
    //     if( i < firstArray.length - 1){
    //         result += '***';
    //     }
    // }
    // return result;

    // Cara 2
    return s.sort()[0].split('').join('***');
}

console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]));
console.log(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]));