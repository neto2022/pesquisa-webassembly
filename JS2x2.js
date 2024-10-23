// Função para calcular o fatorial
function fatorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * fatorial(n - 1);
}

// Função para multiplicação de matrizes 2x2
function matrizMultiplicacao(a, b, result) {
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
      result[i][j] = 0;
      for (let k = 0; k < 2; k++) {
        result[i][j] += a[i][k] * b[k][j];
      }
    }
  }
}

const random = () => Math.floor(Math.random() * 15);
// Exemplo de multiplicação de matrizes 2x2
let a = Array(2)
  .fill(0)
  .map(() => Array(2).fill(0));
let b = Array(2)
  .fill(0)
  .map(() => Array(2).fill(0));
let result = Array(2)
  .fill(0)
  .map(() => Array(2).fill(0));
// Gera números aleatórios para as matrizes
for (let i = 0; i < 2; i++) {
  for (let j = 0; j < 2; j++) {
    a[i][j] = fatorial(random());
    b[i][j] = fatorial(random());
  }
}

// Realiza a multiplicação das matrizes
matrizMultiplicacao(a, b, result);

// Imprime o resultado da multiplicação das matrizes
/*console.log("Resultado da multiplicação das matrizes:");
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
      process.stdout.write(`result[${i}][${j}] = ${result[i][j]} \n`);
    }
    console.log();
  }*/
