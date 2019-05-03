const cards = [
    {
        rank: "queen",
        suit: "hearts",
        cardImage: "images/queen-of-hearts.png"
    },
    {
        rank: "queen",
        suit: "diamonds",
        cardImage: "images/queen-of-diamonds.png"
    },
    {
        rank: "king",
        suit: "hearts",
        cardImage: "images/king-of-hearts.png"
    },
    {
        rank: "king",
        suit: "diamonds",
        cardImage: "images/king-of-diamonds.png"
    }
];

const cardsInPlay = [];

const checkMatch = () => {
    if (cardsInPlay.length === 2) {
        if (cardsInPlay[0] === cardsInPlay[1]) {
            alert("You found a match!")
        } else {
            alert("Keep looking for a match!")
        }
    }
}

const flipCard = () => {
    cardsInPlay.push(cardId.rank)
    console.log(`The flipped card is ${cardId.rank}.`)
    console.log(cardId.cardImage)
    console.log(cardId.suit)
    return checkMatch();
}

const createBoard = () => {
    for (i = 0; i < cards.length; i++) {
        let newCard = document.createElement('img');
        newCard.setAttribute('src', 'memory-game/images/back.png');
        newCard.setAttribute('data-id', i);
        newCard.addEventListener('click', flipCard);
        document.getElementById('game-board').appendChild(newCard);
    }
}

createBoard();
















