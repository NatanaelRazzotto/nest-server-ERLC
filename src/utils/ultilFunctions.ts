export function gerarCodigo5DigitosComDV() {
  const base = Array.from({ length: 5 }, () => Math.floor(Math.random() * 10));
  
  const soma = base
    .slice()
    .reverse()
    .map((n, i) => {
      let temp = n * (i % 2 === 0 ? 2 : 1);
      return temp > 9 ? temp - 9 : temp;
    })
    .reduce((acc, n) => acc + n, 0);

  const dv = (10 - (soma % 10)) % 10;

  return `${base.join('')}${dv}`;
}

export function gerarCodigoINPJ() {
  const base = Array.from({ length: 8 }, () => Math.floor(Math.random() * 10));

  // Pesos decrescentes de 2 a 9 (repetem se forem mais de 8 dígitos)
  const pesos = [9, 8, 7, 6, 5, 4, 3, 2];

  const soma = base.reduce((acc, num, i) => acc + num * pesos[i], 0);

  let resto = soma % 11;
  let dv = resto < 2 ? 0 : 11 - resto;

  return `${base.join('')}${dv}`;
}

