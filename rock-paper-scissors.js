function computerPlay(){
    // rock = 1
    // paper = 2
    // scissors = 3
    return Math.random(Math.floor(Math.random() * 3) + 1);
}

function userPlay(){
    usershoice = prompt("Rock Paper Scissors Shoot! Type your choice: ");
    if(userchoice == "rock"){ return 1;}
    if(userchoice == "paper"){return 2;}
    if(userchoice == "scissors"){return 3;}
}

function gameController(){
    computerChoice = computerPlay();
    userChoice = userPlay();
    // evaluate game play
    
}