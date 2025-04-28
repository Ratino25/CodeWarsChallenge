function remove(string){

    // if(string.substring(string.length -1) == "!"){
    //     return string.substring(0, string.length -1);
    // } else {
    //     return string;
    // }

    // return string.substring(string.length - 1) == "!" ? string.substring(0, string.length -1) : string;
    
    return string.endsWith("!") ? string.slice(0, -1) : string;
    
}

console.log(remove("Hi!"));
console.log(remove("Hi!!!"));