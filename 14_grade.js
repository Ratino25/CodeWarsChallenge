// https://www.codewars.com/kata/55cbd4ba903825f7970000f5/train/javascript

function getGrade(...s) {
  //   let avg = (s1 + s2 + s3) / 3; // CARA 1
  const avg = s.reduce((acc, curr) => acc + curr) / 3; // CARA 2
  if (avg < 60) return "F";
  if (avg < 70) return "D";
  if (avg < 80) return "C";
  if (avg < 90) return "B";

  return "A";
}

console.log(getGrade(95, 90, 93));

console.log(getGrade(100, 85, 96));
console.log(getGrade(92, 93, 94));
console.log(getGrade(70, 70, 100));
console.log(getGrade(82, 85, 87));
