const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];

const tempoRodada = (10 / jogadores.length);

console.log(`Cada jogador tera ${tempoRodada} segundos para fazer sua jogada.`)

let contagem = 0;
const exibirJogador = (jogador) => {
    let nome = jogador[contagem];
    contagem++;
    console.log(nome);
}

const tempo = setInterval(() => {
    exibirJogador(jogadores);
    if (contagem === jogadores.length) {
        clearInterval(tempo);
        console.log("Fim da rodada.");
    }
}, tempoRodada * 1000);

//exibirJogador(jogadores);

module.exports = { exibirJogador };

//console.log(jogadorAtual);