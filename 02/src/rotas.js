import express from "express";
import {
  adicionarJogador,
  consultar,
  removerJogador,
  vezDoJogador,
} from "./controladores/jogadores.js";

const rotas = express();

rotas.get("/home", vezDoJogador);

rotas.get("/consulta", consultar);

rotas.get("/remover", removerJogador);

rotas.get("/adicionar", adicionarJogador);

export { rotas };
