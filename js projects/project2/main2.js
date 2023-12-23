document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    initApp();
  }
});
function initApp() {
  console.log("complete");
}
function Start() {
  initGame();
}
// Rock, Paper, Scissors: Refactored with Functions
const initGame = () => {
  const startGame = confirm("Shall we play rock, paper, or scissors?");
  startGame ? playGame() : alert("Ok, maybe next time.");
};

// Game flow function
const playGame = () => {
  while (true) {
    let playerChoice = getPlayerChoice();
    playerChoice = formatPlayerChoice(playerChoice);
    if (playerChoice === "") {
      invalidChoice();
      continue;
    }
    if (!playerChoice) {
      decidedNotToPlay();
      break;
    }
    playerChoice = evaluatePlayerChoice(playerChoice);
    if (!playerChoice) {
      invalidChoice();
      continue;
    }
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);
    displayResult(result);
    if (askToPlayAgain()) {
      continue;
    } else {
      thanksForPlaying();
      break;
    }
  }
};
const pointAdder = (result) => {
  let P = 0;
  let C = 0;
  let T = 0;
  if (result == "player wins!") {
    P++;

    document.getElementById("plyPoint").textContent = P;
  }
  if (result == "Computer wins!") {
    C++;

    document.getElementById("cmpPoint").textContent = C;
  }
  if (result == "Tie game!") {
    T++;

    document.getElementById("taiPoint").textContent = T;
  }
  console.log(P, T, C);
};

const getPlayerChoice = () => {
  return prompt("Please enter rock, paper, or scissors.");
};

const formatPlayerChoice = (playerChoice) => {
  if (playerChoice || playerChoice === "") {
    return playerChoice.trim().toLowerCase();
  } else {
    return false;
  }
};

const decidedNotToPlay = () => {
  alert("I guess you changed your mind. Maybe next time.");
};

const evaluatePlayerChoice = (playerChoice) => {
  if (
    playerChoice === "rock" ||
    playerChoice === "paper" ||
    playerChoice === "scissors"
  ) {
    return playerChoice;
  } else {
    return false;
  }
};

const invalidChoice = () => {
  alert("You didn't enter rock, paper, or scissors.");
};

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  const rpsArray = ["rock", "paper", "scissors"];
  return rpsArray[randomNumber];
};

const determineWinner = (player, computer) => {
  const winner =
    player === computer
      ? "Tie game!"
      : player === "rock" && computer === "paper"
      ? `Computer wins!`
      : player === "paper" && computer === "scissors"
      ? `Computer wins!`
      : player === "scissors" && computer === "rock"
      ? `Computer wins!`
      : `player wins!`;

  return winner;
};

const displayResult = (result) => {
  pointAdder(result);
  alert(result);
};

const askToPlayAgain = () => {
  return confirm("Play Again?");
};

const thanksForPlaying = () => {
  alert("Ok, thanks for playing.");
};
