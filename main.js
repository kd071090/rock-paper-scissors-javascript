playAgain = true;
let round = 0;
let wins = 0;
let draws = 0;
let loses = 0;
let playerName = "";
let letters = /^[a-zA-Z\s]*$/;
let setWords = "rock"|| "paper" || "scissors" || "spock"|| "lizard";
/*
while (playerName.length > 10 || !letters.test(playerName)){
    alert("Maximum 10 characters or you are not using letters only! Try again...")
    playerName = prompt ("Enter your name") 
}
*/
while (true) {
  playerName = prompt("Enter your name");
  if (playerName.length < 10 && letters.test(playerName)) {
    if (playerName[0].toUpperCase() == playerName[0]) {
      break;
    }
  }

  if (playerName.length > 10)
    alert("You're username is too long! maximum of 10 characters");
  else if (letters.test(playerName) == false) alert("Use letters only!");
  else if (playerName[0].toUpperCase() != playerName[0])
    alert("Your first character must be upper case.");
} 


while (playAgain == true) {
  let playerMove = prompt("Enter your move to play - rock, paper, scissors, lizard or spock!");
  let computerChoice = ["rock", "paper", "scissors", "spock", "lizard"];

  let randomItem =
    computerChoice[Math.floor(Math.random() * computerChoice.length)];

  let computerMove = randomItem;

  function getWinner(playerMove, computerMove) {
    if (playerMove === "rock" && computerMove === "scissors") {
      return +1;
    }
    if (playerMove === "rock" && computerMove === "rock") {
      return 0;
    }
    if (playerMove === "rock" && (computerMove === "paper" || computerMove === "spock")) {
      return -1;
    }
    if (playerMove === "paper" && (computerMove === "scissors" || computerMove === "lizard")) {
      return -1;
    }
    if (playerMove === "paper" && computerMove === "rock") {
      return +1;
    }
    if (playerMove === "paper" && computerMove === "paper") {
      return 0;
    }
    if (playerMove === "scissors" && computerMove === "scissors") {
      return 0;
    }
    if (playerMove === "scissors" && (computerMove === "rock" || computerMove === "spock")) {
      return -1;
    }
    if (playerMove === "scissors" && computerMove === "paper") {
      return +1;
    }
    if (playerMove === "spock" &&(computerMove === "rock" || computerMove === "scissors")) {
      return +1;
    }
    if (
      playerMove === "spock" &&(computerMove === "paper" || computerMove === "lizard")) {
      return -1;
    }
    if (playerMove === "spock" && computerMove === "spock") {
      return 0;
    }
    if (playerMove === "lizard" && (computerMove === "paper" || computerMove === "spock")) {
      return +1;
    }

    if (playerMove === "lizard" &&(computerMove === "rock" || computerMove === "scissors")) {
      return -1;
    }
    if (playerMove === "lizard" && computerMove === "lizard") {
      return 0;
    }
  }

  let result = getWinner(playerMove, computerMove);

  if (result === 1) {
    alert(playerName + " you won " + " Computer chose " + computerMove);
    wins++;
  }
  if (result === 0) {
    alert("Computer chose " + computerMove + " you drew!");
    draws++;
  }
  if (result === -1) {
    alert("Computer chose " + computerMove + " you lost!");
    loses++;
  }
  if (playAgain == true) {
    round++;
    alert(`${playerName} you have played  ${round} round(s)
        Wins: ${wins} 
        Draws: ${draws} 
        Loses: ${loses}`);
  }
  playAgain = confirm("Press OK to play again");
  if (playAgain == false) {
    alert("Bye, Bye!");
  }
}

//counter games played
// track 1 0 -1
//display
