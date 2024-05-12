//https://www.codewars.com/kata/568dcc3c7f12767a62000038

// function setAlarm(employed, vacation){
//     if(employed){
//         if(vacation){
//             return false;
//         } else {
//             return true;
//         }
//     } else {
//         if(vacation){
//             return false;
//         } else {
//             return false;
//         }
//     }

// }

// cara 2
// function setAlarm(employed, vacation){
//     return employed && !vacation;
// }


// cara 3
const setAlarm = (employed, vacation) => (employed && !vacation);


console.log(setAlarm(true, false));
console.log(setAlarm(true,true));
console.log(setAlarm(false, true));
console.log(setAlarm(false, false));

// employed | vacation 
// true     | true     => false
// true     | false    => true
// false    | true     => false
// false    | false    => false