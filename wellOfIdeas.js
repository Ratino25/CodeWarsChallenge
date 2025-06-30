// https://www.codewars.com/kata/57f222ce69e09c3630000212/train/javascript

function well(x){
    // let count = 0;
    // for(let i = 0; i < x.length; i++){
    //     if(x[i] === "good"){
    //         count++;
    //     }
    // }
    // if(count <= 2 && count >0){
    //     result = "Publish!";
    // } else if(count > 2) {
    //     result = "I smell a series!";
    // }

    // return result;

    // return (count <= 2 && count >0) ? "Publish!" : (count == 0) ? "Fail!" : "I smell a series!";

    // cara 2
    // switch(x.filter(x => x === "good" ).length){
    //     case 0: return "Fail!"
    //     case 1:
    //     case 2: 
    //         return "Publish!"
    //     default:
    //         return "I smell series!"
    // }

    // Cara 3
    const good_count = x.filter(x => x === "good").length;
    return good_count < 1 ? "Fail!" :
            good_count <= 2 ? "publish!" : "I smell series!";
}

// Test Cases

console.log(well(["good", "bad", "great"])); // "publish!"
console.log(well(['bad', 'bad', 'bad'])); // Fail
console.log(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']));