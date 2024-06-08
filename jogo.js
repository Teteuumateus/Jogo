// Varíavel de controle para indicar se o jogo está sendo executado/andamento ou parado.
let executando = false
const startBotao = document.querySelector("#btn--start");
const sorteio = document.querySelector(".num--atual");

// const start = document.getElementById("btn--start")

// addEventListener pede uma função como cancelIdleCallback, uma função que irá retornar/será executada quando o click acontecer
startBotao.addEventListener("click", startGame)

function startGame() {
    if (executando) {
        alert("jogo já está em andamento...")
        return
    } else {
        let numAleatorio = Math.floor(Math.random()*20+1)
        sorteio.textContent = numAleatorio
        executando = true
    }
}

function verificarResposta(palpite) {
    alert(`O palpite foi ${palpite}`)
}