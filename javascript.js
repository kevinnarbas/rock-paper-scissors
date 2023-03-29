let choices = ['rock', 'paper', 'scissors']
let computerScore = 0
let playerScore = 0
console.log(playerScore, computerScore)
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1
    return choices[randomNumber - 1]
}
function playRound(playerChoice,computersChoice) {
    if (playerChoice === 'rock' && computersChoice === 'paper'){
        computerScore++
        document.getElementById('computer').innerHTML = computerScore
        document.getElementById('result').innerHTML = 'You Lose! Paper beats Rock'
    } else if (playerChoice === 'rock' && computersChoice === 'scissors'){
        playerScore++
        document.getElementById('player').innerHTML = playerScore
        document.getElementById('result').innerHTML = 'You win! Rock beats paper'
    } else if (playerChoice === 'paper' && computersChoice === 'scissors'){
        computerScore++
        document.getElementById('computer').innerHTML = computerScore
        document.getElementById('result').innerHTML = 'You Lose! Scissors beats Paper'
    } else if (playerChoice === 'paper' && computersChoice === 'rock'){
        playerScore++
        document.getElementById('player').innerHTML = playerScore
        document.getElementById('result').innerHTML = 'You Win! Paper beats Rock'
    } else if (playerChoice === 'scissors' && computersChoice === 'rock'){
        computerScore++
        document.getElementById('computer').innerHTML = computerScore
        document.getElementById('result').innerHTML = 'You Lose! Rock beats scissors'
    } else if (playerChoice === 'scissors' && computersChoice === 'paper'){
        playerScore++
        document.getElementById('player').innerHTML = playerScore
        document.getElementById('result').innerHTML = 'You Win! Scissors beats Paper'
    } else {
        document.getElementById('result').innerHTML = 'Tie Game'
    }
}
// let computersChoice = getComputerChoice()
// let playerChoice
// let choose = choice => playerChoice = choice
// console.log(playRound(playerChoice, computersChoice))
// document.addEventListener('click', playRound(playerChoice, computersChoice))
// for(let i = 0; i < 5; i++){
//     let computersChoice = getComputerChoice()
//     let playerChoice = prompt('Please type Rock, Paper, or Scissors').toLowerCase()
//     console.log(playRound(playerChoice,computersChoice))
// }