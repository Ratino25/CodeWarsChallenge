
//https://www.codewars.com/kata/57f6ad55cca6e045d2000627/train/javascript
function squareOrSquareRoot(array){
    return array.map(x => Math.sqrt(x) % 1 === 0? Math.sqrt(x) : x * x);
    let result = [];
    for(let i = 0; i < array.length; i++){
        let num = array[i];
        let sqrt = Math.sqrt(num);
        if(sqrt % 1 === 0){ 
            result.push(sqrt);
        } else {
            result.push(num * num);
        }
    }
    return result;
}

console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 121])); // [2, 9, 3, 7, 4, 144]
// console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1])); // 2, 9, 3, 49, 4, 1 