
function isPalindrome(x){
    let lowerX = x.toString().toLowerCase();
    for(let i = 0; i < lowerX.length / 2; i++){
        if(lowerX[i] !== lowerX[lowerX.length - 1 - i]){
            return false;
        }
    }
    return true;
}

console.log(isPalindrome(121));
console.log(isPalindrome("Madam"));