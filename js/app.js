
    

function getComputerChoice() {
    let compChoice=Math.floor(Math.random()*3)+1;
    if(compChoice==1)  {
        return "rock";
      } else if(compChoice==2) {
        return "paper" ;
    } else {
        return "scissor";
    }
}

function playerChoice() {
    let playerChoice=prompt("enter your choice").toLowerCase();
    let compChoice=getComputerChoice();
    if(compChoice=="rock" && playerChoice=="paper" || compChoice=="paper" && playerChoice=="scissor" || compChoice=="scissor" && playerChoice=="rock") {
        return `you win! ${playerChoice} beats ${compChoice}`
    } else if (compChoice=="paper" && playerChoice=="rock" || compChoice=="scissor" && playerChoice=="paper" || compChoice=="rock" && playerChoice=="scissor") {
        return `you lose! ${compChoice} beats ${playerChoice}`
    } else if (playerChoice==compChoice) {
        return "it is a draw"
    }

}

 let playerSelection=playerChoice();
 let computerSelection=getComputerChoice();

function game(playerSelection,computerSelection) {
     return `${playerSelection},${computerSelection}`
}

console.log(game(playerSelection,computerSelection));
    

    