const colors = [
    'red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink', 'cyan',
    'red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink', 'cyan'
];

const memoryGame = document.querySelector('.memory-game');
const newGameButton = document.getElementById('newGameButton');
const winCounter = document.getElementById('winCounter');
const correctPairCounter = document.getElementById('correctPairCounter');
const incorrectPairCounter = document.getElementById('incorrectPairCounter');
let gamesWon = 0;
let correctPairs = 0;
let incorrectPairs = 0;
let flippedCards = [];
let matchedCards = [];

// Shuffle the colors array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Create and render the cards
function createCards() {
    shuffleArray(colors);

    for (let i = 0; i < colors.length; i++) {
        const card = document.createElement('div');
        card.classList.add('card');
        memoryGame.appendChild(card);

        const inner = document.createElement('div');
        inner.classList.add('inner');
        card.appendChild(inner);

        const front = document.createElement('div');
        front.classList.add('front');
        inner.appendChild(front);

        const back = document.createElement('div');
        back.classList.add('back');
        back.style.backgroundColor = colors[i];
        inner.appendChild(back);

        card.addEventListener('click', () => {
            if (!card.classList.contains('flipped') && flippedCards.length < 2) {
                card.classList.add('flipped');
                flippedCards.push(card);

                if (flippedCards.length === 2) {
                    setTimeout(checkForMatch, 500);
                }
            }
        });
    }
}

// Check if the flipped cards match
function checkForMatch() {
    const [card1, card2] = flippedCards;
    if (card1.querySelector('.back').style.backgroundColor === card2.querySelector('.back').style.backgroundColor) {
        matchedCards.push(card1, card2);
        flippedCards = [];

        if (matchedCards.length === colors.length) {
            gamesWon++;
            winCounter.textContent = `Games Won: ${gamesWon}`;
            winMessage.style.display = 'block';
        }

        correctPairs++;
        correctPairCounter.textContent = `Correct Pairs: ${correctPairs}`;
    } else {
        setTimeout(() => {
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
            flippedCards = [];

            incorrectPairs++;
            incorrectPairCounter.textContent = `Incorrect Pairs: ${incorrectPairs}`;
        }, 1000);
    }
}

newGameButton.addEventListener('click', () => {

    while (memoryGame.firstChild) {
        memoryGame.removeChild(memoryGame.firstChild);
    }

    matchedCards = [];
    flippedCards = [];
    winMessage.style.display = 'none';

    createCards();
});

createCards();