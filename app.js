function game(){
    let result = document.querySelector('.result');
    let h1 = document.createElement('h1');
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach((button)=>{
        button.addEventListener('click',()=>{
            let computerSelection = getComputerChoice();
            h1.textContent = playRound(button.id, computerSelection);
            h1.setAttribute('style','font-size:50px');
            result.appendChild(h1);
        });
    });
}
function playRound(playerSelection, computerSelection) {
    if(playerSelection == computerSelection){
        return "Tie!";
    }
    else if(playerSelection == "rock" && computerSelection == "paper" || playerSelection == "paper" && computerSelection == "scissors" || playerSelection == "scissors" && computerSelection == "rock"){
        return "Computer wins!";
    }
    else{
        return "You win!";
    }
}
function getComputerChoice(){
    const myArr = ["rock","paper","scissors"];
    let rand = myArr[(Math.random() * myArr.length) | 0]
    return rand;
}
game()
