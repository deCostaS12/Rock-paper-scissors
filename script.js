function computerPlay() {
    const rand = ["rock","paper","scissor"];
    return rand[Math.floor(Math.random() * rand.length)]
}

let playerWins = 0;
let computerWins = 0;

function playRound() {

    const computerSelection = computerPlay();
    const playerSelection = prompt("Choose rock, paper or scissor").toLowerCase();


    if ((computerSelection == "rock") && (playerSelection == "scissor")) {
        console.log("Computer chose rock, you lose")
        return computerWins += 1
    }
    else  if ((computerSelection == "paper") && (playerSelection == "scissor")) {
        console.log("Computer chose paper, you win")
        return playerWins += 1 
    }
    else  if  ((computerSelection == "scissor") && (playerSelection == "scissor")) {
        console.log("Computer chose scissor, it's a tie")
    }
    else  if  ((computerSelection == "rock") && (playerSelection == "rock")) {
        console.log("Computer chose rock, it's a tie")
        
    }
    else  if  ((computerSelection == "paper") && (playerSelection == "rock")) {
        console.log("Computer chose paper, you lose")
        return computerWins += 1
    }
    else  if  ((computerSelection == "scissor") && (playerSelection == "rock")) {
        console.log("Computer chose scissor, you win")
        return playerWins += 1 
    }
    else  if ((computerSelection == "paper") && (playerSelection == "paper")) {
        console.log("Computer chose paper, it's a tie")
    }
    else  if ((computerSelection == "rock") && (playerSelection == "paper")) {
        console.log("Computer chose rock, you win")
        return playerWins += 1 
    }
    else  if  ((computerSelection == "scissor") && (playerSelection == "paper")) {
        console.log("Computer chose scissor, you lose")
        return computerWins += 1
    }
    else  if  ((playerSelection != "rock") || (playerSelection != "paper") || (playerSelection != "scissor")){
        console.log("Input is wrong, please select rock, papaer or scissor")
    
    }
    else {
        console.log("Something went wrong")
        return 
    }
}

function game() {
    while ((playerWins <= 4) && (computerWins <= 4)){
        playRound()
        console.log("The player has won " + playerWins + " rounds.");
        console.log("The computer has won " + computerWins + " rounds")
    }
}

game()


