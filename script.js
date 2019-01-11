const summary = {
    number: 0,
    wins: 0,
    losses: 0,
    draws: 0
}

const game = {
    playerHand: null,
    aiHand: null
}

const hands = [...document.querySelectorAll(".select img")]

function handSelection() {
    game.playerHand = this.dataset.option
    hands.forEach(hand => hand.style.boxShadow = "")
    this.style.boxShadow = "0 0 0 4px black"
}

function computerChoice() {
    return hands[Math.floor(Math.random() * 3)].dataset.option
}
function checkResult(player, ai) {
    if (player === ai) {
        return "draw"
    } else if ((player === "paper" && ai === "rock") ||
        (player === "rock" && ai === "scissors") ||
        (player === "scissors" && ai === "paper")) {
        return "win"
    } else {
        return "loss"
    }
}
function publishResult(player, ai, result) {
    document.querySelector('[data-summary="your-choice"]')
        .innerHTML = player

    document.querySelector('[data-summary="ai-choice"]')
        .innerHTML = ai

    document.querySelector("p.numbers span")
        .innerHTML = ++summary.number

    if (result === "win") {
        document.querySelector("p.wins span")
            .innerHTML = ++summary.wins;
        document.querySelector('[data-summary="who-win"]')
        .innerHTML = "player won"
    } else if (result === "loss") {
        document.querySelector("p.losses span")
            .innerHTML = ++summary.losses;
        document.querySelector('[data-summary="who-win"]')
        .innerHTML = "computer won"
    } else {
        document.querySelector("p.draws span")
            .innerHTML = ++summary.draws;
        document.querySelector('[data-summary="who-win"]')
        .innerHTML = "draw"
    }
}
function startGame() {
    if (!game.playerHand) {
        return alert("make your choice")
    }
    game.aiHand = computerChoice()
    const gameResult = checkResult(game.playerHand, game.aiHand)
    publishResult(game.playerHand, game.aiHand, gameResult)
}
hands.forEach(hand => hand.addEventListener("click", handSelection))

document.querySelector(".start").addEventListener("click", startGame)