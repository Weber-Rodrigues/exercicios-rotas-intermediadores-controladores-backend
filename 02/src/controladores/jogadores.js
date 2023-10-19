import { jogadores } from "../bancodedados.js";

let jogadorDaVez = 0;
const vezDoJogador = (req, res) => {
  const nomeJogador = jogadores[jogadorDaVez];
  jogadorDaVez++;

  if (jogadorDaVez >= jogadores.length) {
    jogadorDaVez = 0;
  }
  return res.send(`é a vez de ${nomeJogador} jogar!`);
};

const consultar = (req, res) => {
  return res.send(jogadores);
};

const removerJogador = (req, res) => {
  const { indice } = req.query;
  const indiceDoArray = Number(indice);

  if (indiceDoArray >= jogadores.length) {
    return res.send(
      `Não existe jogador no índice informado (${indiceDoArray}) para ser removido`
    );
  }
  jogadores.splice(indiceDoArray, 1);
  return res.send(jogadores);
};

const adicionarJogador = (req, res) => {
  const { nome, indice } = req.query;
  const indiceDoArray = Number(indice);
  //   let primeiraLetra = nome.slice(0, 1).toUpperCase();
  //   let restante = nome.slice(1);
  const nomeJogador = nome.slice(0, 1).toUpperCase() + nome.slice(1);

  if (indiceDoArray >= jogadores.length) {
    return res.send(
      `O índice informado (${indiceDoArray}) não existe no array. Novo jogador não foi adicionado.`
    );
  }

  if (nome && indice) {
    jogadores.splice(indiceDoArray, 0, nomeJogador);
    return res.send(jogadores);
  }

  //Poderia ser utilizado o método push
  jogadores.splice(jogadores.length, 0, nomeJogador);
  return res.send(jogadores);
};

export { vezDoJogador, removerJogador, consultar, adicionarJogador };
