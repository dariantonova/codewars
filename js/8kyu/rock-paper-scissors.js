// ❓ DESCRIPTION
// Let's play! You have to return which player won! In case of a draw return Draw!.
//
// Examples(Input1, Input2 --> Output):
//
// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

// ✅ SOLUTION
const janken = (p1, p2) => {
    if (p1 === p2) return 'Draw!';

    let winner;
    if (p1 === 'rock' && p2 === 'scissors'
    || p1 === 'paper' && p2 === 'rock'
    || p1 === 'scissors' && p2 === 'paper') {
        winner = '1';
    }
    else {
        winner = '2';
    }

    return `Player ${winner} won!`;
};

console.log(janken("scissors", "paper"));
console.log(janken("scissors", "rock"));
console.log(janken("paper", "paper"));