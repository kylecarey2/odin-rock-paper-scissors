// Number Correspondents: 0 - Rock, 1 - Paper, 2 - Scissors

function getComputerChoice() {
    let randomInt = Math.floor(Math.random() * 3);
    
    let computerChoice;
    if (randomInt === 0) {
        computerChoice = "rock";
    } else if (randomInt === 1) {
        computerChoice = "paper"
    } else {
        computerChoice = "scissors"
    }

    return computerChoice;
}

function getHumanChoice() {
    let userResponse = prompt("What would you like to pick? Rock, Paper, or Scissors?")

    let humanChoice;
    switch (userResponse.toLowerCase()) {
        default:
            humanChoice = undefined;
            break;
        case "rock":
            humanChoice = "rock";
            break;
        case "paper":
            humanChoice = "paper";
            break;
        case "scissors":
            humanChoice = "scissors";
            break;
    }

    return humanChoice;
}

// console.log(getComputerChoice() + " - " + getHumanChoice())
