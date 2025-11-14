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

// SET function named playGame 
function playGame(humanSelection) {
    //Create two new variables named humanScore and computerScore in the global scope. with the value of 0
    let humanScore = 0;
    let computerScore = 0;
    // SET function named playRound that uses humanChoice and computerChoice as parameters
    function playRound(humanChoice,computerChoice) {
        //if humanChoice is equal to computerChoice THEN
        console.log(humanChoice,computerChoice)
        if (humanChoice === computerChoice) {
            // DISPLAY "Nobody loses! Its a Tie".  
            console.log(`Nobody loses! Its a Tie`)
        } else if (
            (humanChoice === `rock` && computerChoice === `scissor`) || 
            (humanChoice === `paper` && computerChoice === `rock`) ||
            (humanChoice === `scissor` && computerChoice === `paper`) 
        ) {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`)
            return ++humanScore;
        } else {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
            return ++computerScore;
        }
    }
    //Create two new variables named humanSelection  and computerSelection in the global scope to serve as argument - put respective functions as values
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

    computerSelection = getComputerChoice();
    playRound(humanSelection,computerSelection);

    checkScore(computerScore,humanScore);
}
let cont = document.querySelector('#container')
    cont.addEventListener('click',(event) => {
        let userChoice = event.target.id
        playGame(userChoice);
        
})  

//Coloquei esse queryselector no container e coloquei um event listener pra pegar a escolha do usuario, passei como parametro na funcao. Chamei a funcao playGame
//Amn devo fzr um git commit disso e fazer a parte de colocar as mensagens de vitoria do playround e dps colcoar o sistema de 5 rounds e checar score e dps reiniciar
// colocar interface bonita dps com imagens e etc(css)