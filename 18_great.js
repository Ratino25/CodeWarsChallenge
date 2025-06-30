// function greet (name, owner) {
//     // Add code here
//     return (name === owner) ?  "Hello boss" :  "Hello guest";
//   }

const greet = (name, owner) => name === owner ? "Hello boss" : "Hello guest";

  console.log(greet("Bob", "Tom"));
  console.log(greet('Daniel', 'Daniel'));