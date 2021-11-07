function computerPlay(){
    // rock = 1
    // paper = 2
    // scissors = 3
    return Math.floor((Math.random() * 3) + 1);
}

function userPlay(){
    userchoice = prompt("Rock Paper Scissors Shoot! Type your choice: ");
    if(userchoice == "rock"){ return 1;}
    if(userchoice == "paper"){return 2;}
    if(userchoice == "scissors"){return 3;}
}

function gameResult(computerSelection, playerSelection){
    let game = computerSelection + playerSelection;
    // rock 1 paper 2 = 3 (paper wins)
    // rock 1 scissors 3 = 4 (rock wins)
    // paper 2 scissors 3 = 5 (scissors wins)
    if (computerSelection == playerSelection) return {
        playerWin: true,
        computerWin: true,
        message: `Its a Tie, both selected ${computerSelection}`
    }
    if( game == 1 && computerSelection == 1 || game == 2 && computerSelection == 0 || game == 3 && computerSelection == 2){
        return {
            playerWin: false,
            computerWin: true,
            message: `Computer Wins! computer selected: ${computerSelection} you selected: ${playerSelection}`
        }
    }
    else {
        return {
            playerWin: true,
            computerWin: false,
            message: `You Won! computer selected: ${computerSelection} you selected: ${playerSelection}`
        }
    }
}

function gameController(){
    computerChoice = computerPlay();
    userChoice = userPlay();
    console.log("comp: " + computerChoice + " user: " + userChoice)
    result = gameResult(computerChoice, userChoice);
    console.log(result);
    // evaluate game play
}

gameController();