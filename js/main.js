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

const flipCard = (e) => {
    var element = e.currentTarget;
    var cardId = element.getAttribute('cardindex');
    element.setAttribute('src', cards[cardId].cardImage);
    cardsInPlay.push(cards.rank)
    console.log(`The flipped card is ${cards.rank}.`)
    console.log(cards.cardImage)
    console.log(cards.suit)
    return checkMatch();
}

const createBoard = () => {
    for (i = 0; i < cards.length; i++) {
        var newCard = document.createElement('img');
        newCard.setAttribute('src', 'images/back.png');
        newCard.setAttribute('cardindex', i);
        newCard.addEventListener('click', flipCard);
        document.getElementById('game-board').appendChild(newCard);
    }
}

createBoard();


















