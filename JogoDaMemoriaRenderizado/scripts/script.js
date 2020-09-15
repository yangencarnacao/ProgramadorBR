const FRONT = "card_front";
const BACK = "card_back";
const CARD = "card";
const ICON = "icon";
const FLIP = "flip";


function startGame(){
    inicializeCards(game.createCards());
}

function inicializeCards() {
    let gameBoard = document.getElementById("gameBoard");
    gameBoard.innerHTML = '';
    
    game.cards.forEach(card => {
        let cardElement = document.createElement("div");
        cardElement.id = card.id;
        cardElement.classList.add(CARD);
        cardElement.dataset.icon = card.icon;

        createCardContent(card, cardElement);

        cardElement.addEventListener('click', flipCard);
        gameBoard.appendChild(cardElement);
    })
}

function createCardContent(card, cardElement) {

    createCardFace(FRONT, card, cardElement);
    createCardFace(BACK, card, cardElement);
}

function createCardFace(face, card, element){
    let cardElementFace = document.createElement("div");
    cardElementFace.classList.add(face);
    
    if (face === FRONT){
        let iconElement = document.createElement("img");
        iconElement.classList.add(ICON);
        iconElement.src = `./assets/img/${card.icon}.png`;
        cardElementFace.appendChild(iconElement);
    } else {
        cardElementFace.innerHTML = "&lt/&gt";
    }

    element.appendChild(cardElementFace);
}

function flipCard(){
    
    if(game.setCard(this.id)){
        this.classList.add(FLIP);
        if(game.secondCard){
            if (game.checkMatch()){
                game.clearCards(); 
                if (game.checkGameOver()) {
                    let gameOverLayer = document.querySelector("#gameOver");
                    gameOverLayer.style.display = 'flex';
                }   
            }else {
                setTimeout(() => {
                    let firstCardView = document.getElementById(game.firstCard.id);
                    let secondCardView = document.getElementById(game.secondCard.id);
            
                    firstCardView.classList.remove(FLIP);
                    secondCardView.classList.remove(FLIP);
    
                    game.unflipCards();
                    
                },800);
            }
        }        
    }
} 

function restart(){
    game.clearCards();
    startGame();
    let gameOverLayer = document.getElementById("gameOver");
    gameOverLayer.style.display = 'none';
}

startGame();