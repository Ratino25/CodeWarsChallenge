// const rps = (p1, p2) => {
//     if(p1 === p2) return "Draw!";
//     if(p1 === 'rock' && p2 == 'scissors'){
//         return "Player 1 won!";
//     } else if(p1 === 'scissors' && p2 === 'paper'){
//         return "player 1 won!";
//     } else if(p1 === 'paper' && p2 === 'rock'){
//         return "Player 1 won!";
//     } else {
//         return "Player 2 won!";
//     }

// };

// const rps = (p1, p2) => {
//     if(p1 === p2) return "Draw!";
//     if(p1 === 'rock' && p2 == 'scissors' || p1 === 'scissors' && p2 === 'paper' || p1 === 'paper' && p2 === 'rock'){
//         return "Player 1 won!";
//     } else {
//         return "Player 2 won!";
//     }

// };

const rps = (p1, p2) => {
  const rules = {
    rock: "scissors",
    scissors: "paper",
    paper: "rock",
  };
  // if(p1 === p2) {
  //     return "Draw!"
  // } else {
  //     return `Player ${rules[p1] === p2 ? '1' : '2'} won!`;
  // }

  return p1 === p2 ? "Draw!" : `Player ${rules[p1] === p2 ? "1" : "2"} won!`;
};

console.log(rps("rock", "scissors"));
console.log(rps("scissors", "paper"));
console.log(rps("paper", "rock"));

console.log(rps("paper", "paper"));
