function firstNonConsecutive(arr){
    if(arr.length < 2){
        return null;
    }

    for(let i = 1; i < arr.length; i++){
        if(arr[i] !== arr[i - 1] + 1){
            return arr[i];
        }
    }

    return null;
}

console.log(firstNonConsecutive([1,2,3,4,6,7,8]));
console.log(firstNonConsecutive([1, 2, 3, 4, 5])); 