// Função para calcular o fatorial de um número
function fatorial(n) {
  if (n === 0) return 1;
  return n * fatorial(n - 1);
}

// Função para multiplicar duas matrizes
function matrizMultiplicacao(a, b, result) {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      for (let k = 0; k < 10; k++) {
        result[i][j] += a[i][k] * b[k][j];
      }
    }
  }
}

// Limita o número aleatório de 0 a 8
const random = () => Math.floor(Math.random() * 15);

// Exemplo de multiplicação de matrizes 10x10
let a = Array(10)
  .fill(0)
  .map(() => Array(10).fill(0));
let b = Array(10)
  .fill(0)
  .map(() => Array(10).fill(0));
let result = Array(10)
  .fill(0)
  .map(() => Array(10).fill(0));
// Gera números aleatórios para as matrizes
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    a[i][j] = fatorial(random());
    b[i][j] = fatorial(random());
  }
}

// Realiza a multiplicação das matrizes
matrizMultiplicacao(a, b, result);

// Imprime o resultado da multiplicação de matrizes
/*console.log("Resultado da multiplicação das matrizes:");
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      process.stdout.write(`result[${i}][${j}] = ${result[i][j]} `);
    }
    console.log();
  }*/
