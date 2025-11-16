// SET area
let humanScore = 0;
let computerScore = 0;
let cont = document.querySelector('#container')
const log = document.createElement("div");
const userScore = document.querySelector('#userScore');
const machineScore = document.querySelector('#machineScore');
const gameImage = document.querySelector('#image');
userScore.textContent = `USER SCORE: ${humanScore}`
machineScore.textContent = `COMPUTER SCORE: ${computerScore}`

function getComputerChoice() {
//Generate a random number in the range of 1 - 3 and put the asnwer in randomnum
    let randomnum = Math.floor(Math.random() * 3) + 1;
//IF randomnum equal one THEN
    if (randomnum === 1 ) {
        return `rock`; //return 'rock'
    } else if (randomnum === 2 ) { //IF randomnum equal two THEN
        return `paper`; //return 'paper'
    } else if (randomnum === 3 ) { //IF randomnum equal three THEN
        return `scissors`;  //return 'scissors'
    }//ENDIF
}

function playGame(humanSelection) {
    gameImage.src = 'img/matrix.png'; // altera a imagem para a primeira sempre que eu clico 

    function playRound(humanChoice,computerChoice) {
        console.log(humanChoice,computerChoice)
        if (humanChoice === computerChoice) {
            log.textContent = `Nobody loses! Its a Tie`;
        } else if (
            (humanChoice === `rock` && computerChoice === `scissors`) || 
            (humanChoice === `paper` && computerChoice === `rock`) ||
            (humanChoice === `scissors` && computerChoice === `paper`) 
        ) {
            log.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
            return ++humanScore;
        } else {
            log.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
            return ++computerScore;
        }
    }

    function checkScore(computerpoint,humanpoint) {
        if (computerpoint > humanpoint) {
            log.textContent = `Computer wins!! with ${computerpoint} points!!! with vantage of ${computerpoint - humanpoint} points`
            gameImage.setAttribute('src', 'img/happyAgent.png');
        } else if (computerpoint < humanpoint ) { //IF humanpoint is higher than computerpoint THEN
            log.textContent = ` You win!! with ${humanpoint} points!!! with vantage of ${humanpoint - computerpoint} points`
            gameImage.setAttribute('src', 'img/happyNeo.png');
        } else {
            log.textContent = `It's a tie?`
        }   
    }

    let computerSelection;
    computerSelection = getComputerChoice();
    playRound(humanSelection,computerSelection);
    cont.appendChild(log);

    //se humanScore ou computerScore eh igual a 5, coloca o ganhador de text content no log e depois zera os scores
    if (computerScore === 5 || humanScore === 5) {
        checkScore(computerScore,humanScore);
        humanScore = 0;
        computerScore = 0;
    } 
    userScore.textContent = `USER SCORE: ${humanScore}`
    machineScore.textContent = `COMPUTER SCORE: ${computerScore}`
}

let choice = document.querySelector('.selection')
    choice.addEventListener('click',(event) => { //comeca o codigo quando eu clico
        let userChoice = event.target.id
        playGame(userChoice);
        
})  

cont.setAttribute("style","color: white");
userScore.style.color = "#ffa1a1ff"
machineScore.style.color = "#a1afff"
log.setAttribute("style","display: flex; justify-content: center")
