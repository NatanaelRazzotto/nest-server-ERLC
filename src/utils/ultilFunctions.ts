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

