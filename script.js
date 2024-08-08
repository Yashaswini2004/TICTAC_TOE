console.log("Welcome to Tic Tac Toe");

let music = new Audio("music.mp3");
let turnSound = new Audio("ting.mp3");
let gameOverSound = new Audio("gameover.mp3");
let turns = "X";
let gameOver = false;

// Function to change the turn
const changeTurn = () => {
    return turns === "X" ? "O" : "X";
}

// Function to check for a win
const checkWin = () => {
    let boxtexts = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(e => {
        if ((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) &&
            (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) &&
            (boxtexts[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxtexts[e[0]].innerText + " Won";
            gameOver = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="200px"
            gameOverSound.play();
        }
    })
}

// Game Logic
music.play()
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '' && !gameOver) {
            boxtext.innerText = turns;
            turns = changeTurn();
            turnSound.play();
            checkWin();
            if (!gameOver) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turns;
            }
        }
    })
})
reset.addEventListener('click',()=>{
   let boxtexts=document.querySelectorAll('.boxtext');
   Array.from(boxtexts).forEach(element=>{
        element.innerText=""

   });
   turns="X"
   isgameOver=false;
   document.getElementsByClassName("info")[0].innerText="Turn for"+turns;
   document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="0px"

})