const summary = {
    number: 0,
    wins: 0,
    loses: 0,
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
        console.log("draw")
    } else if ((player === "paper" && ai === "rock") ||
        (player === "rock" && ai === "scissors") ||
        (player === "scissors" && ai === "paper")) {
        console.log("win")
    } else {
        console.log ("lose")
    }
}

function startGame() {
    if (!game.playerHand) {
        return alert("make your choice")
    }
    game.aiHand = computerChoice()
    const gameResult = checkResult(game.playerHand, game.aiHand)
}
hands.forEach(hand => hand.addEventListener("click", handSelection))

document.querySelector(".start").addEventListener("click", startGame)