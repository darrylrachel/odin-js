let humanScore = 0
let computerScore = 0

// Computer Choice
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"]
  return choices[Math.floor(Math.random() * 3)]
}
console.log(getComputerChoice())

function getHumanChoice() {
  let humanChoice = prompt("Choose rock, paper, or scissors human").toLowerCase()

  // if (humanChoice !== "rock" | "paper" | "scissors") {
  //   prompt("Enter a valid playing option!")
  // }
  return humanChoice
}
// getHumanChoice()
console.log(getHumanChoice())

function playRound(humanChoice, computerChoice) {
   computerChoice = getComputerChoice()
   humanChoice = getHumanChoice()

   if (humanChoice === computerChoice) {
    console.log("It's a tie")
   }

}
console.log(playRound(getHumanChoice()))









// let humanChoice = prompt("Choose a rock, paper, or scissors human: ")

// console.log(humanChoice)

// function getHumanChoice(choice) {
//   humanChoice
// }