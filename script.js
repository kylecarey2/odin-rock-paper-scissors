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

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === undefined) {
        humanChoice = getComputerChoice();
        console.log("You did not choose a valid input. Picking an option for you...");
    }
    
    const informationalMessage = `You chose: ${humanChoice[0].toUpperCase() + humanChoice.slice(1)}` + `\nComputer chose: ${computerChoice[0].toUpperCase() + computerChoice.slice(1)}`;
    
    let outputMessage;
    if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")) {
        outputMessage = `You win! ${humanChoice[0].toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}.`;
        humanScore++;
    } else if ((humanChoice === "rock" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "rock")) {
        outputMessage = `You lose! ${computerChoice[0].toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}.`;
        computerScore++;
    } else {
        outputMessage = "It's a tie!";
    }

    console.log(informationalMessage)
    console.log(outputMessage);
}

function playGame() {
    for (i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    console.log("Final for the 5 rounds:");
    if (humanScore > computerScore) {
        console.log(`You win by a score of ${humanScore} - ${computerScore}`);
    } else if (humanScore < computerScore) {
        console.log(`You lose by a score of ${computerScore} - ${humanScore}`);
    } else {
        console.log(`It's a tie (${computerScore} - ${humanScore})`);
    }
}

