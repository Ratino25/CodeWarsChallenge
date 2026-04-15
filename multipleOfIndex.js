function multipleOfIndex(array) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    if ((i === 0 && array[i] === 0) || (i !== 0 && array[i] % i === 0)) {
      result.push(array[i]);
    }
  }

  return result;
}

// Test
console.log(multipleOfIndex([22, -6, 32, 82, 9, 25])); // [-6, 32, 25]