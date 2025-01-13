function findMultiples(integer, limit){
    // let result = [];
    // for(let i=1; i<=limit; i++){
    //     if(i % integer == 0){
    //         result.push(i);
    //     }
    // }
    // return result;

    // cara 2
    // let result = [];
    // for(let i = integer; i <= limit; i+=integer){
    //     result.push(i);
    // }
    // return result;

    // cara 3
    return Array(Math.floor(limit/integer)).fill(1).map((x,i)=>integer*(i+1));

}

console.log(findMultiples(3, 10)); // [3, 6, 9]
console.log(findMultiples(5, 25));