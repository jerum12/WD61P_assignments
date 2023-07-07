const userId = 1;
const computerId = 2;
let currentRound = 1;
let userScore = 0;
let computerScore = 0;
let roundWinner;

const generateComputerAnswer = () => {
  // Generate computer's answer
  const computerAnswer = Math.floor(Math.random() * 3) + 1;
  return computerAnswer;
};

const getUserInput = async () => {
  // Get user's input
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    rl.question('Enter your answer (1, 2, or 3): ', (answer) => {
      rl.close();
      resolve(parseInt(answer));
    });
  });
};

const scoreRound = (userAnswer, computerAnswer) => {
  // Score the round and determine the winner
  if (userAnswer === computerAnswer) {
    return null; // Tie, no winner
  } else if (
    (userAnswer === 1 && computerAnswer === 3) ||
    (userAnswer === 2 && computerAnswer === 1) ||
    (userAnswer === 3 && computerAnswer === 2)
  ) {
    return userId; // User wins
  } else {
    return computerId; // Computer wins
  }
};

const addWin = (winnerId) => {
  // Update the scores and round winner
  if (winnerId === userId) {
    userScore++;
    roundWinner = 'User';
  } else {
    computerScore++;
    roundWinner = 'Computer';
  }
};

const checkForOverallWinner = () => {
  // Check if there's an overall winner
  if (userScore === 3) {
    console.log('User wins the game!');
  } else if (computerScore === 3) {
    console.log('Computer wins the game!');
  } else {
    // Continue playing
    currentRound++;
    startGame();
  }
};

const startGame = async () => {
  console.log(`Round ${currentRound}`);
  const computerAnswer = generateComputerAnswer();
  const userAnswer = await getUserInput();
  const roundWinnerId = scoreRound(userAnswer, computerAnswer);
  if (roundWinnerId) {
    addWin(roundWinnerId);
  } else {
    console.log('It\'s a tie!');
  }
  console.log(`User Score: ${userScore}`);
  console.log(`Computer Score: ${computerScore}`);
  checkForOverallWinner();
};

// Start the game
startGame();


