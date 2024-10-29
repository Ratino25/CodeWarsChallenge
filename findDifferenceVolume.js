function findDifference(a,b){
    let result1 = a[0] * a[1] * a[2];
    let result2 = b[0] * b[1] * b[2];
    return Math.abs(result1 - result2); 

    // cara 2


}

console.log(findDifference([3, 2, 5], [1, 4, 4]));