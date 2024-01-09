import bancodedados from "../bancodedados.js";

const listarImoveis = (req, res) => {
  res.send(bancodedados);
};

const obterImovel = (req, res) => {
  const { id } = req.params;

  const imovelObtido = bancodedados.find((imovel) => {
    return imovel.id === Number(id);
  });

  res.send(imovelObtido);
};

export { listarImoveis, obterImovel };
