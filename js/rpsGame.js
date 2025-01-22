// get computer choice with random number for each option
// get user choice from input
// score starts at zero
// increment score based on wins
// game ends at best 2 out of 3


let userScore = 0
let computerScore = 0
let computerChoice = Math.floor(Math.random() * 3)
let userChoice = prompt("Please choose Rock, Paper, or Scissors").toLowerCase()
console.log(userChoice)

// Computer Choice
function getComputerChoice() {
  if (computerChoice === 0) {
    computerChoice = "rock"
  }

  if (computerChoice === 1) {
    computerChoice = "scissors"
  }

  if (computerChoice === 2) {
    computerChoice = "paper"
  }
  return computerChoice
}
// console.log(getComputerChoice())
getComputerChoice()



// Game Logic
function playRound() {
  if (computerChoice === userChoice) {
    console.log("Tie")
  }

  if (computerChoice === "rock" && userChoice === "paper") {
    console.log("You win")
  }

  if (computerChoice === "paper" && userChoice === "scissors") {
    console.log("You win")
  }

  if (computerChoice === "scissors" && userChoice === "rock") {
    console.log("You win")
  }

  if (computerChoice === "paper" && userChoice === "rock") {
    console.log("Computer wins")
  }

  if (computerChoice === "rock" && userChoice === "scissors") {
    console.log("Computer wins")
  }

  if (computerChoice === "scissors" && userChoice === "paper") {
    console.log("Computer wins")
  }

  return
}
console.log(playRound())


// Keeping Score
for (let i = 0; i < 3; i++) {
  
}