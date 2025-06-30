// function arrayLeader(arr, n){
//     let leaders = [];
//     for(let i = 0; i < n; i++){
//         let j;
//         for(j = i +1; j < n; j++){
//             if(arr[i] <= arr[j]){
//                 break;
//             }
//         }
//         if(j == n){
//             console.log(arr[i] + " ");
//             // return arr[i] + " "
//             leaders.push(arr[i]);
//         }
//     }
//     return leaders;
    
// }

// cara 2
function arrayLeader(arr, n){
    let leaders = [];
    let tempX = arr[n - 1];
    leaders.push(tempX);
    for(let i = n - 2; i >= 0; i--){
        if(tempX <= arr[i]){
            tempX = arr[i];
            leaders.push(arr[i]);
        }
    }
    leaders.sort((a,b) => b - a);
    return leaders;
}

let arr = [9,21,8,13,3,7,5];
let n = arr.length;
// arrayLeader(arr, n);
console.log(arrayLeader(arr, n));

// Output yang diharapkan adalah 21 13 7 5