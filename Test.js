function lembarPecahan(num){
  const mataUang = [
    100000,
    50000,
    20000,
    10000,
    5000,
    2000,
    1000,
    500,
    200,
    100
  ];
  let result = [];
  for(i in mataUang){
    if(num + 99>= mataUang[i]){
      const lembar = Math.floor((num + 99)/mataUang[i]);
      num = num - mataUang[i] * lembar;
      result[`Rp ${mataUang[i]}`] = lembar;
    }
  }
  return result;
}

console.log(lembarPecahan(145000));
console.log(lembarPecahan(145090));