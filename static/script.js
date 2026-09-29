// ==========================================
// GAME VARIABLES
// ==========================================

let playerScore = 0;

let computerScore = 0;

let roundNumber = 0;

let gameHistory = [];

let gameOver = false;


// ==========================================
// GAME CHOICES
// ==========================================

const choices = [
    "rock",
    "paper",
    "scissors"
];


// ==========================================
// ICONS
// ==========================================

const icons = {

    rock: "🪨",

    paper: "📄",

    scissors: "✂️"

};


// ==========================================
// PLAY GAME
// ==========================================

function playGame(playerChoice) {

    // Don't allow game after 5 rounds
    if (gameOver) {

        return;
    }


    // ======================================
    // COMPUTER RANDOM CHOICE
    // ======================================

    const computerChoice =
        choices[
            Math.floor(
                Math.random() * choices.length
            )
        ];


    let result;


    // ======================================
    // DRAW
    // ======================================

    if (playerChoice === computerChoice) {

        result = "🤝 Draw!";

        // Draw counts as a round
        roundNumber++;

        // No score
    }


    // ======================================
    // PLAYER WIN
    // ======================================

    else if (

        (playerChoice === "rock" &&
         computerChoice === "scissors")

        ||

        (playerChoice === "paper" &&
         computerChoice === "rock")

        ||

        (playerChoice === "scissors" &&
         computerChoice === "paper")

    ) {

        result = "🎉 You Win!";

        playerScore++;

        roundNumber++;
    }


    // ======================================
    // COMPUTER WIN
    // ======================================

    else {

        result = "💻 Computer Wins!";

        computerScore++;

        roundNumber++;
    }


    // ======================================
    // UPDATE PLAYER CHOICE
    // ======================================

    document.getElementById(
        "player-choice"
    ).textContent =
        capitalize(playerChoice);


    // ======================================
    // UPDATE COMPUTER CHOICE
    // ======================================

    document.getElementById(
        "computer-choice"
    ).textContent =
        capitalize(computerChoice);


    // ======================================
    // UPDATE ICONS
    // ======================================

    document.getElementById(
        "player-icon"
    ).textContent =
        icons[playerChoice];


    document.getElementById(
        "computer-icon"
    ).textContent =
        icons[computerChoice];


    // ======================================
    // UPDATE RESULT
    // ======================================

    document.getElementById(
        "result"
    ).textContent =
        result;


    // ======================================
    // UPDATE SCORES
    // ======================================

    document.getElementById(
        "player-score"
    ).textContent =
        playerScore;


    document.getElementById(
        "computer-score"
    ).textContent =
        computerScore;


    // ======================================
    // UPDATE ROUND
    // ======================================

    document.getElementById(
        "round"
    ).textContent =
        roundNumber;


    // ======================================
    // ADD ROUND TO HISTORY
    // ======================================

    gameHistory.push({

        player: playerChoice,

        computer: computerChoice,

        result: result

    });


    // Update history
    updateHistory();


    // ======================================
    // CHECK 5 ROUNDS
    // ======================================

    if (roundNumber === 5) {

        gameOver = true;


        setTimeout(function () {

            let finalResult;


            // ==================================
            // PLAYER WINS
            // ==================================

            if (playerScore > computerScore) {

                finalResult =
                    `🏆 You won the match! ` +
                    `Final Score: ${playerScore} - ${computerScore}`;

            }


            // ==================================
            // COMPUTER WINS
            // ==================================

            else if (
                computerScore > playerScore
            ) {

                finalResult =
                    `🏆 Computer won the match! ` +
                    `Final Score: ${playerScore} - ${computerScore}`;

            }


            // ==================================
            // MATCH DRAW
            // ==================================

            else {

                finalResult =
                    `🤝 Match Draw! ` +
                    `Final Score: ${playerScore} - ${computerScore}`;

            }


            // ==================================
            // SHOW FINAL RESULT ON SCREEN
            // ==================================

            document.getElementById(
                "result"
            ).textContent =
                finalResult;


            // ==================================
            // ADD FINAL RESULT TO HISTORY
            // ==================================

            const history =
                document.getElementById(
                    "history"
                );


            const finalLi =
                document.createElement("li");


            finalLi.textContent =
                finalResult;


            finalLi.classList.add(
                "final-result"
            );


            history.appendChild(finalLi);


        }, 500);

    }

}


// ==========================================
// UPDATE HISTORY
// ==========================================

function updateHistory() {

    const history =
        document.getElementById(
            "history"
        );


    // Clear history
    history.innerHTML = "";


    // ======================================
    // NO HISTORY
    // ======================================

    if (gameHistory.length === 0) {

        history.innerHTML =
            '<li class="empty-history">' +
            'No games played yet.' +
            '</li>';

        return;
    }


    // ======================================
    // DISPLAY EACH ROUND
    // ======================================

    gameHistory.forEach(
        function (game, index) {

            const li =
                document.createElement("li");


            li.textContent =
                `${index + 1}. ` +
                `You: ${capitalize(game.player)} | ` +
                `Computer: ${capitalize(game.computer)} | ` +
                `${game.result}`;


            history.appendChild(li);

        }
    );

}


// ==========================================
// NEW GAME
// ==========================================

function newMatch() {

    // Reset player score
    playerScore = 0;


    // Reset computer score
    computerScore = 0;


    // Reset round
    roundNumber = 0;


    // Clear history
    gameHistory = [];


    // Start game again
    gameOver = false;


    // ======================================
    // RESET SCORE
    // ======================================

    document.getElementById(
        "player-score"
    ).textContent = "0";


    document.getElementById(
        "computer-score"
    ).textContent = "0";


    // ======================================
    // RESET ROUND
    // ======================================

    document.getElementById(
        "round"
    ).textContent = "0";


    // ======================================
    // RESET CHOICES
    // ======================================

    document.getElementById(
        "player-choice"
    ).textContent = "-";


    document.getElementById(
        "computer-choice"
    ).textContent = "-";


    // ======================================
    // RESET ICONS
    // ======================================

    document.getElementById(
        "player-icon"
    ).textContent = "❔";


    document.getElementById(
        "computer-icon"
    ).textContent = "❔";


    // ======================================
    // RESET RESULT
    // ======================================

    document.getElementById(
        "result"
    ).textContent =
        "Choose your move!";


    // ======================================
    // RESET HISTORY
    // ======================================

    updateHistory();

}


// ==========================================
// CAPITALIZE
// ==========================================

function capitalize(text) {

    return (
        text.charAt(0).toUpperCase() +
        text.slice(1)
    );

}
