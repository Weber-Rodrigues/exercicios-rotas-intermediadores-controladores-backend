// Controladores
const somar = (req, res) => {
  const { num1, num2 } = req.query;
  if (!isNaN(num1) && !isNaN(num2)) {
    return res.send(`${Number(num1) + Number(num2)}`);
  }
  return res.send("Número Invalido");
};

const subtrair = (req, res) => {
  const { num1, num2 } = req.query;
  if (!isNaN(num1) && !isNaN(num2)) {
    return res.send(`${num1 - num2}`);
  }
  return res.send("Número Invalido");
};

const multiplicar = (req, res) => {
  const { num1, num2 } = req.query;
  if (!isNaN(num1) && !isNaN(num2)) {
    return res.send(`${num1 * num2}`);
  }
  return res.send("Número Invalido");
};

const dividir = (req, res) => {
  const { num1, num2 } = req.query;
  if (!isNaN(num1) && !isNaN(num2)) {
    return res.send(`${num1 / num2}`);
  }
  return res.send("Número Invalido");
};

export { somar, subtrair, multiplicar, dividir };
