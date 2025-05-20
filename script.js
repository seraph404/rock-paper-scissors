let playerSelection; 
    let playerScore = 0;
    let computerScore = 0;

    const buttons = document.querySelectorAll('.buttons button');
        buttons.forEach((button) => {
            button.addEventListener('click', getHumanChoice);
        });

    function getHumanChoice(e) {
        playerSelection = (e.target.textContent).toLowerCase();
        console.log(playerSelection);
        if (!checkForWinner()) {
            playRound(playerSelection, getComputerChoice());
        }
    }

     function getComputerChoice() {
        const choices = ["rock", "paper", "scissors"];
        return choices[Math.floor(Math.random() * 3)];
    }

    function displayResults(text) {
        const results = document.querySelector('#results');
        let playerScoreDiv = document.querySelector('#score #player-score');
        let computerScoreDiv = document.querySelector('#score #computer-score');
        results.textContent = '';
        results.textContent += text;
        playerScoreDiv.textContent = `Player: ${playerScore}`;
        computerScoreDiv.textContent =`Computer: ${computerScore}`;
    }

    function checkForWinner() {
        if (playerScore === 5) {
            displayResults("Game over. Human wins!");
            return true;
        } else if (computerScore === 5) {
            displayResults("Game over. Computer wins!");
            return true;
        }
    }


    function playRound(humanSays, computerSays) {
        console.log(humanSays);
        console.log(computerSays);
        if (humanSays === computerSays) {
            console.log("It's a tie!");
            displayResults("It's a tie!");
        } else if (humanSays === "rock") {
            switch(computerSays) {
                case "scissors":
                    console.log("You win! Rock beats scissors");
                    displayResults("You score! Rock beats scissors.");
                    playerScore += 1;
                    break;
                case "paper":
                    console.log("You lose! Paper beats rock");
                    displayResults("You lose! Paper beats rock")
                    computerScore += 1;
                    break;
            }
        } else if (humanSays === "paper") {
            switch(computerSays) {
                case "scissors":
                    console.log("You lose! Scissors beats paper");
                    displayResults("You lose! Scissors beats paper");
                    computerScore += 1;
                    break;
                case "rock":
                    console.log("You win! Rock beats paper");
                    displayResults("You win! Rock beats paper");
                    playerScore += 1;
                    break;
            }
        } else if (humanSays === "scissors") {
            switch(computerSays) {
                case "rock":
                    console.log("You lose! Rock beats scissors");
                    displayResults("You lose! Rock beats scissors");
                    computerScore += 1;
                    
                    break;
                case "paper":
                    console.log("You lose! Scissors beats paper");
                    displayResults("You lose! Scissors beats paper");
                    computerScore += 1;
                    break;
            }
        }

        console.log("Player score: " + playerScore);
        console.log("Computer score: " + computerScore);

    }
