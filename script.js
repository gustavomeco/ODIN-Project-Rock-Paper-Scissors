let humanScore = 0;
let computerScore = 0;
const log = document.createElement("div");
const userScore = document.querySelector('#userScore');
const machineScore = document.querySelector('#machineScore');
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
        } else if (computerpoint < humanpoint ) { //IF humanpoint is higher than computerpoint THEN
            log.textContent = ` You win!! with ${humanpoint} points!!! with vantage of ${humanpoint - computerpoint} points`
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
let cont = document.querySelector('#container')
    cont.addEventListener('click',(event) => {
        let userChoice = event.target.id
        playGame(userChoice);
        
})  

//Coloquei esse queryselector no container e coloquei um event listener pra pegar a escolha do usuario, passei como parametro na funcao. Chamei a funcao playGame- DONE
//Amn devo fzr um git commit disso e fazer a parte de colocar as mensagens de vitoria do playround e dps colcoar o sistema de 5 rounds e checar score e dps reiniciar- DONE

// colocar interface bonita dps com imagens e etc(css) <- sexta terminar amn css
