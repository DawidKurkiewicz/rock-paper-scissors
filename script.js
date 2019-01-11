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

function startHGame (){
    if(game.playerHand){
        alert("make your choice")
    }
}
hands.forEach(hand => hand.addEventListener("click", handSelection))

document.querySelector(".start").addEventListener("click", startGame)