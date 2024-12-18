// https://www.codewars.com/kata/57202aefe8d6c514300001fd/train/javascript

function saleHotDog(n) {
  //   var result = 0;
  //   if (n < 5) result = n * 100;
  //   else if (n >= 5 && n < 10) result = n * 95;
  //   else result = n * 90;
  //   return result;

  // cara 2
  //   return n < 5 ? n * 100 : n >= 5 && n < 10 ? n * 95 : n * 95;

  // cara 3
  return n * (n < 5 ? 100 : n < 10 ? 95 : 90);
}

console.log(saleHotDog(5));
console.log(saleHotDog(1));
