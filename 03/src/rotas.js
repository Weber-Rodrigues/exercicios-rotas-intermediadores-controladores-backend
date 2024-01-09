import express from "express";

import { listarImoveis, obterImovel } from "./controladores/imoveis.js";

const rotas = express();

rotas.get("/imoveis", listarImoveis);

rotas.get("/imoveis/:id", obterImovel);

export { rotas };
