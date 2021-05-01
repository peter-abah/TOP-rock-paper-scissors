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

function game() {
    let playerSelection;
    let computerSelection;
    let scores = {
        player: 0,
        computer: 0
    };

    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Choose either 'rock', 'paper' or 'scissors'").
                toLowerCase();
        computerSelection = computerPlay();
        
        let result = playRound(playerSelection, computerSelection);
        console.log(result, playerSelection, computerSelection);
        scores[result]++;
    }

    if (scores.player === scores.computer) {
        return "draw";
    }
    return scores.player > scores.computer ? "player" : "computer";
}

console.log(game());