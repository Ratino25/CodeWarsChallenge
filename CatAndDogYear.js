// https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b/train/javascript

// var humanYearsCatYearsDogYears = function(humanYears) {
//     // Your code here!
//     let catYear = 15;
//     let dogYear = 15;
//     // if(humanYears === 1){
//     //     return [humanYears, catYear, dogYear];
//     // } else if(humanYears === 2){
//     //     catYear += 9;
//     //     dogYear += 9;
//     //     return [humanYears, catYear, dogYear];
//     // } else {
//     //     catYear = 4 * (humanYears - 2) + 24;
//     //     dogYear = 5 * (humanYears - 2) + 24;
//     //     return [humanYears, catYear, dogYear];
//     // }

//     return humanYears === 1 ? [humanYears, catYear, dogYear] : humanYears === 2 ?  [humanYears, catYear+9, dogYear+9] : [humanYears, 4 * (humanYears - 2) + 24, 5 * (humanYears - 2) + 24];
//   }

var humanYearsCatYearsDogYears = function(y){
    if(y === 1) return [1,15,15];
    if(y === 2) return [2,24,24];
    return [y, (y-2) * 4 + 24, (y-2) * 5 + 24];
}

console.log(humanYearsCatYearsDogYears(1));
console.log(humanYearsCatYearsDogYears(2));
console.log(humanYearsCatYearsDogYears(10));
  