let playerSelection; 
    let playerScore = 0;
    let computerScore = 0;

    const buttons = document.querySelectorAll('.buttons button');
        buttons.forEach((button) => {
            button.addEventListener('click', getHumanChoice);
        });

    function getHumanChoice(e) {
        playerSelection = (e.target.className);
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
                    playerScore += 1;
                    displayResults("You win the round! Rock beats scissors.");
                    break;
                case "paper":
                    computerScore += 1;
                    displayResults("You lose the round! Paper beats rock")
                    break;
            }
        } else if (humanSays === "paper") {
            switch(computerSays) {
                case "scissors":
                    computerScore += 1;
                    displayResults("You lose the round! Scissors beats paper");
                    break;
                case "rock":
                    playerScore += 1;
                    displayResults("You win the round! Rock beats paper");
                    break;
            }
        } else if (humanSays === "scissors") {
            switch(computerSays) {
                case "rock":
                    computerScore += 1;
                    displayResults("You lose the round! Rock beats scissors");
                    
                    break;
                case "paper":
                    computerScore += 1;
                    displayResults("You lose the round! Scissors beats paper");
                    break;
            }
        }

        console.log("Player score: " + playerScore);
        console.log("Computer score: " + computerScore);

    }
