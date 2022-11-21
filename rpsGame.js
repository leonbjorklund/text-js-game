const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return options[Math.floor(Math.random() * options.length)];
}

let optionRock = options[0];
let optionPaper = options[1];
let optionScissors = options[2];

let youChoseText = document.getElementById("you-chose-text");
let placeText = document.getElementById("result");
let placeScore = document.getElementById("score");
let rpsOptions = document.getElementById("rps-options");
let playAgainButton = document.getElementById("play-again");
let wonRPSMessage = document.getElementById("won-rps");
let rpsGoNext = document.getElementById("rps-finish");

/** playRound takes in option rock, paper or scissors from user, and,
* takes in a random of the three for the "computer choice".
* a message is displayed who chose what and who won. results are  are stored using object-data,
* as a bolean didWin for true or false, null for draw.
* @param {HTMLButtonElement} optionChosen - string-value for rock, paper or scissors */
function playRound(optionChosen) {
  const playerSelection = optionChosen;
  const computerSelection = getComputerChoice();
  youChoseText.innerHTML = "You chose: " + optionChosen + ". Computer chose: " + computerSelection + ".";

  if (playerSelection === computerSelection) {
    return { text: "Draw!", didWin: null };
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return { text: "You Lose! Paper beats Rock", didWin: false };
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return { text: "You win! Rock beats Scissors", didWin: true };
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return { text: "You win! Paper beats Rock", didWin: true };
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return { text: "You lose! Paper beats Scissors", didWin: false };
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return { text: "You lose! Scissors beats Rock", didWin: false };
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return { text: "You win! Scissors beat Paper", didWin: true };
  }
}
/** rounds-counter */
let roundsPlayed = 0;
/** playerscore-counter */
let playerScore = 0;
/** computerscore-counter */
let computerScore = 0;

/** playGame takes in option rock, paper or scissors from user, displays two text-elements where result and score will be shown,
*  adds + 1 to roundsPlayed and runs function playRound with same option chosen, result is created and takes what playRound returns,
* one text-element shows the result through result.text. if the result is not null,
* and didWin is true, playerScore gets 1+, if didWin is false computerscore gets 1+.
* 3 rounds are played, then playerScore and computerScore gets compared and results are displayed.
* if player won, a button is shown that loads the next scene and message that displays passcode-digit is shown.
* @param {HTMLButtonElement} optionChosen - string-value for rock, paper or scissors */
function playGame(optionChosen) {
  placeText.style.display = "block";
  placeScore.style.display = "block";
  roundsPlayed++;
  let result = playRound(optionChosen);
  placeText.innerHTML = result.text;

  if (result.didWin !== null) {
    if (result.didWin) {
      playerScore++;
    } else {
      computerScore++;
    }
  }
  placeScore.innerHTML = "Score: " + playerScore + " - " + computerScore;

  if (roundsPlayed === 3) {
    if (playerScore > computerScore) {
      placeScore.innerHTML =
        "You won! Final score: " + playerScore + " - " + computerScore;
      loadNextScene(rpsOptions, wonRPSMessage);
      rpsGoNext.style.display = "block";
    } else if (playerScore < computerScore) {
      placeScore.innerHTML =
        "You lost! Score: " + playerScore + " - " + computerScore;
      loadNextScene(rpsOptions, playAgainButton);
    } else {
      placeScore.innerHTML =
        "It's a draw, score: " + playerScore + " - " + computerScore;
      loadNextScene(rpsOptions, playAgainButton);
    }
  }
}

/** playAgain resets rounds played and score and then re-renders rock-paper-scissors scene */
function playAgain() {
  roundsPlayed = 0;
  playerScore = 0;
  computerScore = 0;
  youChoseText.innerHTML = "Best of 3. Choose wisely:";
  placeText.style.display = "none";
  placeScore.style.display = "none";
  loadNextScene(playAgainButton, rpsOptions);
}
