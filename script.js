//SET function named getComputerChoice
function getComputerChoice() {
//Generate a random number in the range of 1 - 3 and put the asnwer in randomnum
    let randomnum = Math.floor(Math.random() * 3) + 1;
//IF randomnum equal one THEN
    if (randomnum === 1 ) {
        return `rock`; //return 'rock'
    } else if (randomnum === 2 ) { //IF randomnum equal two THEN
        return `paper`; //return 'paper'
    } else if (randomnum === 3 ) { //IF randomnum equal three THEN
        return `scissor`;  //return 'scissor'
    }//ENDIF
}
//SET function named getHumanChoice
function getHumanChoice() {
//GET the user option for the game and put the answer in userchoice
    let userchoice = prompt("Enter your option for the game(rock,paper or scissor): ")
//RETURN user choice for the game in lowercase
    return userchoice.toLowerCase();
}

// SET function named playGame 
function playGame() {
    //Create two new variables named humanScore and computerScore in the global scope. with the value of 0
    let humanScore = 0;
    let computerScore = 0;
    // SET function named playRound that uses humanChoice and computerChoice as parameters
    function playRound(humanChoice,computerChoice) {
    // IF humanChoice is equal to `rock` and computerChoice is equal to `paper` THEN
        if (humanChoice === `rock` && computerChoice === `paper`) { 
            // DISPLAY "You lose! Paper beats Rock".
            console.log(`You lose! Paper beats Rock`)
            // return ++computerScore
            return ++computerScore;
        } else if (humanChoice === `rock` && computerChoice === `scissor`) { // IF humanChoice is equal to `rock` and computerChoice is equal to `scissor` THEN
            // DISPLAY "You win! Rock beats Scissor".
            console.log(`You win! Rock beats Scissor`)
            // return ++humanScore
            return ++humanScore;
        } else if (humanChoice === `paper` && computerChoice === `rock`) { // IF humanChoice is equal to `paper` and computerChoice is equal to `rock` THEN
            // DISPLAY "You win! Paper beats Rock".
            console.log(`You win! Paper beats Rock`)
            // return ++humanScore
            return ++humanScore;
        } else if (humanChoice === `paper` && computerChoice === `scissor`){// IF humanChoice is equal to `paper` and computerChoice is equal to `scissor` THEN
            // DISPLAY "You lose! Scissor beats Paper".
            console.log(`You lose! Scissor beats Paper`)
            // return ++computerScore
            return ++computerScore;
        } else if (humanChoice === `scissor` && computerChoice === `paper`) { // IF humanChoice is equal to `scissor` and computerChoice is equal to `paper` THEN
            // DISPLAY "You win! Scissor beats Paper".
            console.log(`You win! Scissor beats Paper`)
            // return ++humanScore
            return ++humanScore;
        } else if (humanChoice === `scissor` && computerChoice === `rock`) { // IF humanChoice is equal to `scissor` and computerChoice is equal to `rock` THEN
            // DISPLAY "You lose! Rock beats Scissor".
            console.log(`You lose! Rock beats Scissor`)
            // return ++computerScore
            return ++computerScore;
        } else { // ELSE THEN
            console.log(`Nobody loses! Its a Tie`) // DISPLAY "Nobody loses! Its a Tie".   
        }
    }
    //Create two new variables named humanSelection  and computerSelection in the global scope to serve as argument - put respective functions as values
    let humanSelection;
    let computerSelection;
    //SET function named checkScore that uses computerpoint and humanpoint as parameters
    function checkScore(computerpoint,humanpoint) {
        //IF computerpoints is higher than humanpoint THEN
        if (computerpoint > humanpoint) {
            //DISPLAY "Computer wins! with X points!!"
            console.log(`Computer wins!! with ${computerpoint} points!!! with vantage of ${computerpoint - humanpoint} points`)
        } else if (computerpoint < humanpoint ) { //IF humanpoint is higher than computerpoint THEN
            //DISPLAY "You win! with X points!!" 
            console.log(`You win!! with ${humanpoint} points!!! with vantage of ${humanpoint - computerpoint} points`)
        } else {
            console.log(`It's a tie?`)
        }   //ENDIF
    }
    //Create a for loop that calls five times
    for (let i= 0; i < 5; i++) {
        //Assign to humanSelection and computerSelection their respective functions
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        //calls playround
        playRound(humanSelection,computerSelection);
    }//end loop
    //call checkScore and use both score as arguments
    checkScore(computerScore,humanScore);
}
    playGame();