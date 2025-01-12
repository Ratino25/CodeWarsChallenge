// https://www.codewars.com/kata/5ae62fcf252e66d44d00008e/train/javascript

function expressionMatter(a, b, c){
    var result = [];
    result[0] = a * (b + c);
    result[1] = a * b * c;
    result[2] = a + b * c;
    result[3] = (a + b) * c;
    result[4] = a + b + c;

    return Math.max(...result);
    
}

// console.log(expressionMatter(1, 2, 3)); // 9
// console.log(expressionMatter(2, 1, 2)); // 6
 console.log(expressionMatter(1, 1, 1)); // 10