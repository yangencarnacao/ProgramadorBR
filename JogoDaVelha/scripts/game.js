let board = ["", "", "", "", "", "", "", "", ""];
let playerTime = 0; // assume 0 ou 1 para identificar o jogador que está jogando no momento
let symbols = ["o", "x"];
let gameOver = false;
let players = [];


function handleMove(position, player1, player2){

    if (gameOver) {
        winnerName(player1, player2);
        return;
    }

    if (board[position] == "") {
        board[position] = symbols[playerTime];

        gameOver = isWinner();

        if (!gameOver){
            playerTime = (playerTime == 0) ? 1 : 0;
        }
        
    }

    return gameOver;

}

function isWinner() {

    let winnerPositions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i=0; i < winnerPositions.length; i++) {
        let seq = winnerPositions[i];
        let pos0 = seq[0];
        let pos1 = seq[1];
        let pos2 = seq[2];

        if ((board[pos0] !== "") && (board[pos0] == board[pos1]) && (board[pos1] == board[pos2])){
            return true;
        } 
    
    }

    return false;

}

setTimeout(() =>{
    alert("Bem-vindes ao Jogo da Velha!");
    player1 = prompt("Jogador 1, digite seu nome: ");
    player2 = prompt("Jogador 2, digite seu nome: ");
    players.push(player1, player2);
},50);