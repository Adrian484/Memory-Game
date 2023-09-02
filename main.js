const colors = [
    'red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink', 'cyan',
    'red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink', 'cyan'
];

const memoryGame = document.querySelector('.memory-game');
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
        card.style.backgroundColor = colors[i];
        card.dataset.color = colors[i];
        memoryGame.appendChild(card);

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
    if (card1.dataset.color === card2.dataset.color) {
        matchedCards.push(card1, card2);
        flippedCards = [];

        if (matchedCards.length === colors.length) {
            alert('Congratulations! You won!');
        }
    } else {
        setTimeout(() => {
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
            flippedCards = [];
        }, 1000);
    }
}

createCards();