let user;
let computer;
let computerString;

function userChoice() {
    user = prompt("Please type your selection (Rock / Paper/ Scissors)")

    if ((user === "rock") || (user === "Rock")) {
        user = "Rock"
    } else if ((user === "paper") || (user === "paper")) {
        user = "Paper"
    } else if ((user === "scissors") || (user === "Scissors")) {
        user = "Scissors"
    } 
}
    
function computerChoice(max = 3) {
    computer = Math.floor(Math.random() * max);
    
    if(computer == 0) {
        computerString = "Rock"
    } else if (computer === 1) {
        computerString = "Paper"
    } else if (computer === 2) {
        computerString = "Scissors"
    } 
}

function init () {
    do {
        userChoice()
        if ((user === 'Rock') || (user === 'Paper') || (user === 'Scissors') ) {
            break;
        } else {
            alert('Please insert the correct selection (Rock / Paper / Scissors)')
        }
    } while (true)

    computerChoice()

    if (user === computerString) {
        alert(`It's a tie! You selected ${user} and the Computer selected ${computerString}`);
        init();
    } else if (
        ((user === "Scissors") && (computerString === "Rock")) ||
        ((user === "Rock") && (computerString === "Paper")) ||
        ((user === "Paper") && (computerString === "Scissors")))  {
        alert(`Computer wins! You selected ${user} and the Computer selected ${computerString}`);
    }  else if (
        ((user === "Scissors") && (computerString === "Paper")) ||
        ((user === "Rock") && (computerString === "Scissors")) ||
        ((user === "Paper") && (computerString === "Rock")))  {
        alert(`You win! You selected ${user} and the Computer selected ${computerString}`);
    } 
}
init();
