var userChoiceImg = document.getElementById("user-choice");
var computerChoiceImg = document.getElementById("computer-choice");
var resultsH2 = document.getElementById("results-h2");
var userScoreDom = document.getElementById("user-score");
var computerScoreDom = document.getElementById("computer-score");

var userChoice = "";
var userScore = 0;
var computerScore = 0;

var rpsButtons = document.getElementsByClassName("far");
Array.from(rpsButtons).forEach(rpsButton => {
    rpsButton.addEventListener("click", function () {
        userChoice = rpsButton.id;
        console.log("Click: " + userChoice)
        gameController()
    })
});

function computerPlay() {
    // rock = 1
    // paper = 2
    // scissors = 3
    return Math.floor((Math.random() * 3) + 1);
}

function userPlay(userchoice) {
    //userchoice = prompt("Rock Paper Scissors Shoot! Type your choice: ");
    if (userchoice == "rock") return 1;
    if (userchoice == "paper") return 2;
    if (userchoice == "scissors") return 3;
}

function intToStringRps(rpsInt){
    if(rpsInt == 1) return "Rock";
    if(rpsInt == 2) return "Paper";
    if(rpsInt == 3) return "Scissors";
}

function gameResult(computerSelection, playerSelection) {
    let game = computerSelection + playerSelection;
    // rock 1 paper 2 = 3 (paper wins)
    // rock 1 scissors 3 = 4 (rock wins)
    // paper 2 scissors 3 = 5 (scissors wins)
    if (computerSelection == playerSelection) return {
        playerWin: true,
        computerWin: true,
        message: `Its a Tie`
    }
    if (game == 3 && computerSelection == 2 || game == 4 && computerSelection == 1 || game == 5 && computerSelection == 3) {
        return {
            playerWin: false,
            computerWin: true,
            message: `Computer Wins!`
        }
    } else {
        return {
            playerWin: true,
            computerWin: false,
            message: `You Won!`
        }
    }
}

function populateResultIcons() {
    console.log("populate: "+ "u: " + intToStringRps(userChoice) + " c: " + intToStringRps(computerChoice));
    userChoiceImg.removeAttribute('class')
    computerChoiceImg.removeAttribute('class')

    userChoiceImg.classList.add("fas")
    if (userChoice == 1) userChoiceImg.classList.add("fa-hand-rock")
    if (userChoice == 2) userChoiceImg.classList.add("fa-hand-paper")
    if (userChoice == 3) userChoiceImg.classList.add("fa-hand-scissors")
    
    computerChoiceImg.classList.add("fas");
    if (computerChoice == 1) computerChoiceImg.classList.add("fa-hand-rock")
    if (computerChoice == 2) computerChoiceImg.classList.add("fa-hand-paper")
    if (computerChoice == 3) computerChoiceImg.classList.add("fa-hand-scissors")
}

function updateScore(score){
    console.log(userScoreDom);
    console.log(computerScoreDom)
    if(score.playerWin) userScoreDom.innerText = ++userScore;
    if(score.computerWin) computerScoreDom.innerText = ++computerScore;
}

function gameController() {
    computerChoice = computerPlay();
    userChoice = userPlay(userChoice);
    console.log("user: " + intToStringRps(userChoice) + " comp: " + intToStringRps(computerChoice))
    result = gameResult(computerChoice, userChoice);
    resultsH2.innerText = result.message;
    updateScore(result);
    populateResultIcons();
}