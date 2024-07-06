const box = document.querySelector('.game-box')
const btn = document.querySelector('.btn')
const winnerBox = document.querySelector('.fill-data')
let turn = 'X'
let winner;
let Arr = Array(9).fill(null)
box.addEventListener('click', (e) => {
    if (e.target.classList.contains('col')) {
        if (Arr[e.target.id] == null) {
            e.target.textContent = turn
            Arr[e.target.id] = turn
            winner = turn
            turn == 'X' ? turn = 'O' : turn = 'X'
        }
    }

    if (!(Arr.includes(null))) {
        checkWinner()
    }
    else if (Arr.includes('X') || Arr.includes('O')) {
        checkWinner()
    }
})


function checkWinner() {
    if (
        (Arr[3] != null) && (Arr[3] == Arr[4] && Arr[3] == Arr[5]) ||
        (Arr[0] != null) && (Arr[0] == Arr[1] && Arr[0] == Arr[2]) ||
        (Arr[6] != null) && (Arr[6] == Arr[7] && Arr[6] == Arr[8]) ||
        (Arr[0] != null) && (Arr[0] == Arr[3] && Arr[0] == Arr[6]) ||
        (Arr[1] != null) && (Arr[1] == Arr[4] && Arr[1] == Arr[7]) ||
        (Arr[2] != null) && (Arr[2] == Arr[5] && Arr[2] == Arr[8]) ||
        (Arr[0] != null) && (Arr[0] == Arr[4] && Arr[0] == Arr[8]) ||
        (Arr[2] != null) && (Arr[2] == Arr[4] && Arr[2] == Arr[6])
    ) {
        showWinner(winner)
    }
    else if(!(Arr.includes(null))){
        drawGame()
    }
}


function showWinner(winner){
    winnerBox.textContent = `Winner is '${winner}'`
    btn.style.display = 'block'
    box.style.opacity = 0
}

function drawGame(){
    winnerBox.textContent = `Game Draw`
    btn.style.display = 'block'
    box.style.opacity = 0
}

function startNewGame(){
    btn.addEventListener('click',()=>{
        winnerBox.style.display = 'none'
        btn.style.display = 'none'
        box.style.opacity = 1
        location.reload()
    })
}

function toggleMenuBar(){
    const menuBar = document.querySelector('.menu-bar')
    const menu = document.querySelector('.menu')
    const container = document.querySelector('.container')
    const infoBox = document.querySelector('.info')
    let toggle = true
    menuBar.addEventListener('click',()=>{
        if(toggle){
            menu.style.transform = 'translate(0)'
            container.style.opacity = 0.3
            infoBox.style.opacity = 0.3
            toggle = false
        }
        else{
            menu.style.transform = 'translate(-100%)'
            container.style.opacity = 1
            infoBox.style.opacity = 1
            toggle = true
        }
    })
}

startNewGame()
toggleMenuBar()