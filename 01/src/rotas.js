// Rotas
import express from "express";
import {
  somar,
  subtrair,
  multiplicar,
  dividir,
} from "./controladores/calculadora.js";

const rotas = express();

rotas.get("/somar", somar);
rotas.get("/subtrair", subtrair);
rotas.get("/multiplicar", multiplicar);
rotas.get("/dividir", dividir);

export { rotas };
