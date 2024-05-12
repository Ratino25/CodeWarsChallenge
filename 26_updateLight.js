// https://www.codewars.com/kata/58649884a1659ed6cb000072/

// function updateLight(current) {
  
//     switch (current) {
//         case 'green' : return 'yellow';
//         case 'yellow' : return 'red';
//         case 'red' : return 'green';
//     }
  
//   }

//Cara 2
// function updateLight(current){
//     return current === 'green' ? 'yellow' : current === 'yellow' ? 'red' : 'green';
// }

//Cara 3
// const updateLight = (current) => (current === 'green' ? 'yellow' : current === 'yellow' ? 'red' : 'green');

//Cara 4
const updateLight = (current) => ({
    green : 'yello',
    yellow : 'red',
    red : 'green'
})[current];


  console.log(updateLight('green'));
  console.log(updateLight('yellow'));
  console.log(updateLight('red'));