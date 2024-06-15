// Varíavel de controle para indicar se o jogo está sendo executado/andamento ou parado.
let executando = false
let acertos = 0;

const startBotao = document.querySelector("#btn--start");
const sorteio = document.querySelector(".num--atual");

const placarVit = document.querySelector(".num--vit");
const placarDer = document.querySelector(".num--der");

// const start = document.getElementById("btn--start")

// addEventListener pede uma função como cancelIdleCallback, uma função que irá retornar/será executada quando o click acontecer
startBotao.addEventListener("click", startGame)

function startGame() {
    if (executando) {
        alert("jogo já está em andamento...")
        return
    } else {
        sorteio.textContent = Math.floor(Math.random()*20+1)
        executando = true
    }
}

function verificarResposta(palpite) {
    let numAnterior = Number(sorteio.textContent);
    sorteio.textContent = Math.floor(Math.random()*20+1)
    let numNovo = sorteio.textContent;
    if (palpite === "alto" && numNovo > numAnterior) {
        acertos++
        verificarVitoria()

    } else if (palpite ==="baixo" && numNovo < numAnterior) {
        acertos++
        verificarVitoria();

    } else {
        gameOver();   
    }
}

function sortearNum() {
    return sorteio.textContent = Math.floor(Math.random()*20+1)
}

function verificarVitoria() {
    if (acertos >=3) {
        placarVit.textContent++
        acertos = 0;
    }
}

function gameOver() {
    placarDer.textContent++
    executando = false;
    sorteio.textContent = "";
    acertos = 0
}