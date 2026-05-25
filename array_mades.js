// https://www.codewars.com/kata/56ff6a70e1a63ccdfa0001b1/train/javascript

function arrayMadness(a, b){
    // let sumA = 0;
    // let sumB = 0;

    // for(let i = 0; i < a.length; i++){
    //     sumA += a[i] ** 2;
    // }

    // for(let i = 0; i < b.length; i++){
    //     sumB += b[i] ** 3;
    // }

    // return sumA > sumB;

    // Cara 2
    const sumA = a.reduce((sum, num) => sum + num ** 2, 0);
    const sumB = b.reduce((sum, num) => sum + num ** 3, 0);
    return sumA > sumB;
}

// test cases
console.log(arrayMadness([4,5,6],[1,2,3])); // true
console.log(arrayMadness([1,2,3],[4,5,6])); // false



