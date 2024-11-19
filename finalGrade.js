// https://www.codewars.com/kata/5ad0d8356165e63c140014d4/train/javascript/

function finalGrade(exam, projects){
    if(exam > 90 || projects > 10) return 100;
    if(exam > 75 && projects >= 5) return 90;
    if(exam > 50 && projects >= 2) return 75;
    return 0;
}

console.log(finalGrade(100, 5));
console.log(finalGrade(100, 0));
console.log(finalGrade(65, 5));
console.log(finalGrade(55, 0));