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
                    displayResults("You win the round! Rock beats scissors.");
                    playerScore += 1;
                    break;
                case "paper":
                    displayResults("You lose the round! Paper beats rock")
                    computerScore += 1;
                    break;
            }
        } else if (humanSays === "paper") {
            switch(computerSays) {
                case "scissors":
                    displayResults("You lose the round! Scissors beats paper");
                    computerScore += 1;
                    break;
                case "rock":
                    displayResults("You win the round! Rock beats paper");
                    playerScore += 1;
                    break;
            }
        } else if (humanSays === "scissors") {
            switch(computerSays) {
                case "rock":
                    displayResults("You lose the round! Rock beats scissors");
                    computerScore += 1;
                    
                    break;
                case "paper":
                    displayResults("You lose the round! Scissors beats paper");
                    computerScore += 1;
                    break;
            }
        }

        console.log("Player score: " + playerScore);
        console.log("Computer score: " + computerScore);

    }
