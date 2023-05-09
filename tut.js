// 1. Depost some money
// 2. Determine number of lines to be on
// 3. Collect a bet amount
// 4. spin the slot machine
// 5. check if the user won
// 6. give the user their winnings 
// 7. play again

// function is a reusebble block of code
//
const prompt = require("prompt-sync")();

const ROWS = 3;

const COLS = 3;



const deposit = ()=> {
  while (true){
 const depositAmount = prompt("Enter a deposit amount: ");
 const numberDepositAmount = parseFloat(depositAmount);
 if(isNaN(numberDepositAmount) || numberDepositAmount<=0){
  console.log("Invalid deposit amount, try again");
 } else {
  return numberDepositAmount;
 }
}
};


const getNumberOfLines = () =>{

  while (true){
    const lines = prompt("Enter the number of lines to bet on (1-3): ");
    const getNumberOfLines = parseFloat(lines);
    if(isNaN(getNumberOfLines) || getNumberOfLines<=0 || getNumberOfLines > 3) {
     console.log("Invalid deposit amount, try again");
    } else {
     return getNumberOfLines;
    }
   }

}


const getBet = (balance, lines) =>{
  while (true){
    const bet = prompt("Enter the bet per line: ");
    const numberBet = parseFloat(bet);

    if(isNaN(numberBet) || numberBet<=0 || numberBet > balance/lines){
     console.log("Invalid bet, try again. ");
    } else {
     return numberBet;
    }
   }
}



 let balance = deposit();
 

const numberOfLines =getNumberOfLines();

const bet = getBet(balance, numberOfLines);




