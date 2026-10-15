document.addEventListener("DOMContentLoaded", function () {

    let squares = document.querySelectorAll("#board div");
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

            if (square.textContent === "") {

                square.textContent = currentPlayer;
                square.classList.add(currentPlayer);

                gameState[index] = currentPlayer;

                if (currentPlayer === "X") {
                    currentPlayer = "O";
                } else {
                    currentPlayer = "X";
                }
            }
        });

    });

});