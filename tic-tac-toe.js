document.addEventListener("DOMContentLoaded", function () {
    let squares = document.querySelectorAll("div").className = "board";
    squares.forEach(function (square) {
        square.classList.add("square");
    });
});