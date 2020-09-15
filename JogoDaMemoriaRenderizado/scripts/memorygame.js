let game = {

    stacks: ["bootstrap",
        "nodejs",
        "javascript",
        "html",
        "css",
        "reactjs"
    ],

    cards: null,
    firstCard: null,
    secondCard: null,
    lockMode: false,

    setCard: function(id) {
        let card = this.cards.filter(card => card.id === id)[0];
        
        if (card.flipped || this.lockMode){
            return false;
        }

        if (!this.firstCard){
            this.firstCard = card;
            this.firstCard.flipped = true;
            return true;
        } else {
            this.secondCard = card;
            this.secondCard.flip = true;
            this.lockMode = true;
            return true;
        }

    },

    createCards: function(){

        this.cards = [];
    
        this.stacks.forEach((stack) => {
            this.cards.push(this.createPair(stack));
        });

        this.cards = this.cards.flatMap(pair => pair);
        this.shuffleCards();

        return this.cards;
    },
    
    createPair: function(stack){
        return [{
            id: this.createIdStack(stack),
            icon: stack,
            flipped: false,
            },
            {
            id: this.createIdStack(stack),
            icon: stack,
            flipped: false,
            }];
    },
    
    createIdStack: function(stack) {
        return stack + parseInt(Math.random()*1000);
    },

    shuffleCards: function(){
        let currentIndex = this.cards.length;
        let randomIndex = 0;
    
        while (currentIndex !== 0){
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [this.cards[randomIndex], this.cards[currentIndex]] = [this.cards[currentIndex], this.cards[randomIndex]];
        }
    },

    checkMatch: function() {
        if(!this.firstCard || !this.secondCard){
            return false;
        }
        return this.firstCard.icon === this.secondCard.icon;
    },

    clearCards: function() {
        this.firstCard = null;
        this.secondCard = null;
        this.lockMode = false;
    },

    unflipCards() {
        this.firstCard.flipped = false;
        this.secondCard.flipped = false;
        this.clearCards();
    },

    checkGameOver() {
        return this.cards.filter(card => !card.flipped).length == 6;
    },

}