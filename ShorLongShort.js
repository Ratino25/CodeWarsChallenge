
// https://www.codewars.com/kata/50654ddff44f800200000007/train/javascript

function solution(a, b){
    // your code here
    return (a.length < b.length) ? a + b + a : b + a + b;
}

console.log(solution("1", "22"));
console.log(solution("11", "2"));
