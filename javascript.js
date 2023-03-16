let choices = ['rock', 'paper', 'scissors']
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1
    return choices[randomNumber - 1]
}
function playRound(playerChoice,computersChoice) {
    if (playerChoice === 'rock' && computersChoice === 'paper'){
        return 'You Lose! Paper beats Rock'
    } else if (playerChoice === 'rock' && computersChoice === 'scissors'){
        return 'You win! Rock beats paper'
    } else if (playerChoice === 'paper' && computersChoice === 'scissors'){
        return 'You Lose! Scissors beats Paper'
    } else if (playerChoice === 'paper' && computersChoice === 'rock'){
        return 'You Win! Paper beats Rock'
    } else if (playerChoice === 'scissors' && computersChoice === 'rock'){
        return 'You Lose! Rock beats scissors'
    } else if (playerChoice === 'scissors' && computersChoice === 'paper'){
        return 'You Win! Scissors beats Paper'
    } else {
        return 'Tie Game'
    }
}
for(let i = 0; i < 5; i++){
    let computersChoice = getComputerChoice()
    let playerChoice = prompt('Please type Rock, Paper, or Scissors').toLowerCase()
    console.log(playRound(playerChoice,computersChoice))
}