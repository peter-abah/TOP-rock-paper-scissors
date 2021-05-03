"use strict";

function computerPlay() {
    let n = Math.random();
    if (n > 0 && n < 0.33) {
        return "rock";
    } else if (n > 0.33 && n < 0.67) {
        return "scissors";
    } else {
        return "paper";
    }
}

const winningCombination = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
};

function playRound(playerSelection, computerSelection) {
    if (winningCombination[playerSelection] === computerSelection) {
        return "player";
    } else if (winningCombination[computerSelection] === playerSelection) {
        return "computer";
    } else {
        return "draw";
    }
}

function playChoice(e) {
    if (scores.computer == 5 || scores.player == 5) {
        let message = "RELOAD TO PLAY AGAIN";
        updateMessage(message);
        return;
    }
    let playerSelection = this.getAttribute("data-choice");
    let computerSelection = computerPlay();
    let result = playRound(playerSelection, computerSelection);
    scores[result]++;
    updateDom(playerSelection, computerSelection, result);
}

function changeClass(dom, className) {
    let classList = dom.classList;
    if (classList.length > 1) {
        classList.remove(classList.item(1));
    }
    classList.add(className);
}

function updateMessage(message) {
    document.querySelector(".message").textContent = message;
}

function showResultMessage(result) {
    let message;
    if (result == "computer") {
        message = 'You lost this round';
    } else if (result == "player") {
        message = 'You won this round';
    } else {
        message = "DRAW!"
    }

    updateMessage(message)
}

function updateDom(playerSelection, computerSelection, result) {
    changeClass(document.querySelector(".computer-choice"), computerSelection);
    changeClass(document.querySelector(".player-choice"), playerSelection);

    document.querySelector(".computer-score").textContent = scores.computer;
    document.querySelector(".player-score").textContent = scores.player;

    showResultMessage(result);
}

const scores = {
    player: 0,
    computer: 0
};

const buttons = document.querySelectorAll('.choice-button');
buttons.forEach(button => button.addEventListener("click", playChoice));