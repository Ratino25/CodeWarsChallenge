//https://www.codewars.com/kata/56f6ad906b88de513f000d96

function bonusTime(salary, bonus) {
    // your code here

    if(bonus){
        return "$" + salary * 10;
    } else {
        return "$" + salary;
    }
}

console.log(bonusTime(10000, true));
console.log(bonusTime(25000, true));