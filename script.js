//SET function named getComputerChoice
function getComputerChoice() {
//Generate a random number in the range of 1 - 3 and put the asnwer in randomnum
    let randomnum = Math.floor(Math.random() * 3) + 1
//IF randomnum equal one THEN
    if (randomnum === 1 ) {
        return `rock`; //return 'rock'
    } else if (randomnum === 2 ) { //IF randomnum equal two THEN
        return `paper`; //return 'paper'
    } else if (randomnum === 3 ) { //IF randomnum equal three THEN
        return `scissors`;  //return 'scissors'
    }//ENDIF
}
//SET function named getHumanChoice
function getHumanChoice() {
//GET the user option for the game and put the answer in userchoice
    let userchoice = prompt("Enter your option for the game(rock,paper or scissor): ")
//RETURN user choice for the game in lowercase
    return userchoice.toLowerCase();
}
