document.addEventListener("DOMContentLoaded", function () {

    let btn = document.querySelector(".btn");
    let squares = document.querySelectorAll("#board div");
    let status = document.getElementById("status");
    let msg = status.textContent;
    let gameState = [];
    let currentPlayer = "X";

    squares.forEach(function (square, index) {

        square.classList.add("square");

        square.addEventListener("mouseover", function () {
            square.classList.add("hover");
        });
        
        square.addEventListener("mouseout", function () {
            square.classList.remove("hover");
        });

        square.addEventListener("click", function () {

            if (square.textContent !== "") {
                return;
            }

                square.textContent = currentPlayer;
                square.classList.add(currentPlayer);

                gameState[index] = currentPlayer;

                 if (
                        (gameState[0] === currentPlayer && gameState[1] === currentPlayer && gameState[2] === currentPlayer) ||
                        (gameState[0] === currentPlayer && gameState[3] === currentPlayer && gameState[6] === currentPlayer) ||
                        (gameState[0] === currentPlayer && gameState[4] === currentPlayer && gameState[8] === currentPlayer) ||
                        (gameState[1] === currentPlayer && gameState[4] === currentPlayer && gameState[7] === currentPlayer) ||
                        (gameState[2] === currentPlayer && gameState[5] === currentPlayer && gameState[8] === currentPlayer) ||
                        (gameState[2] === currentPlayer && gameState[4] === currentPlayer && gameState[6] === currentPlayer) ||
                        (gameState[3] === currentPlayer && gameState[4] === currentPlayer && gameState[5] === currentPlayer) ||
                        (gameState[6] === currentPlayer && gameState[7] === currentPlayer && gameState[8] === currentPlayer) 
                    ) {

                        status.textContent =
                            "Congratulations! " + currentPlayer + " is the Winner!";

                        status.classList.add("you-won");
                    }

                if (currentPlayer === "X") {
                    currentPlayer = "O";
                } else {
                    currentPlayer = "X";
                }
        });
    });    
        btn.addEventListener("click", function () {
            gameState = [];
            currentPlayer = "X";
            squares.forEach(function (square) {
                square.textContent = "";    
                square.classList.remove("X", "O", "hover");
            });
            status.textContent = msg;
            status.classList.remove("you-won")
        });
});