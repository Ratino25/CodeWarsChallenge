//https://www.codewars.com/kata/57fb09ef2b5314a8a90001ed/train/javascript

function replace(s){
    const vowels = "aeiouAEIOU";
    let result = "";
    for(let char of s){
        if(vowels.includes(char)){
            result += "!";
        }else {
            result += char;
        }
    }
    return result;
}

console.log(replace("Hi!"));