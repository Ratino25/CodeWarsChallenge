function multipleTable(number){
    let result = "";
    for(let i = 1; i <= 10; i++){
        result += `${i} * ${number} = ${i * number}`;
        if(i < 10) result += "\n";
    }
    return result;
}

// console.log(multipleTable(5));
console.log(multipleTable(1));