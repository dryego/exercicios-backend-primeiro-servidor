const express = require("express");

const app = express();

const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];

let contador = 0;
app.get('/', (req, res) => {
    let = nomeJogador = jogadores[contador];
    contador++
    if (contador >= jogadores.length) {
        contador = 0;
    }
    res.send(`É a vez de ${nomeJogador} jogar!`)
});


app.listen(3000);