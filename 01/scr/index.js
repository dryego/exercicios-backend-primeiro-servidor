const express = require("express");
const jogadores = require("./jogadores");
const app = express();

app.get('/', (requisicao, resposta) => {
    resposta.send(`Rodada inicializada.`);
});
app.get('/jogadas', (requisicao, resposta) => {
    resposta.send(`É a vez de ${jogadores} jogar!`);
});


app.listen(3000);