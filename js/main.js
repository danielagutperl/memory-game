const cards = ["queen", "queen", "king", "king"];
const cardsInPlay =[];

const checkMatch = () => {
    if (cardsInPlay.length === 2) {
        if (cardsInPlay[0] === cardsInPlay[1]) {
            alert("You found a match!")
        } else {
            alert("Keep looking for a match!")
        }
        }
    }

const flipCard = (cardId) => {
    cardsInPlay.push(cardId)
    console.log(`The flipped card is ${cardId}.`)
    return checkMatch();
}

flipCard(cards[0]);
flipCard(cards[2]);

console.log(cardsInPlay)
















