function gooseFilter(birds) {
  const geese = [
    "African",
    "Roman Tufted",
    "Toulouse",
    "Pilgrim",
    "Steinbacher",
  ];
  //   return birds.filter((birds) => !goose.includes(birds));

  // Cara sederhana
  let result = [];
  for (let i = 0; i < birds.length; i++) {
    if (!geese.includes(birds[i])) {
      result.push(birds[i]);
    }
  }
  return result;
}
const birds = [
  "Mallard",
  "Hook Bill",
  "African",
  "Crested",
  "Pilgrim",
  "Toulouse",
  "Blue Swedish",
];
console.log(gooseFilter(birds));
