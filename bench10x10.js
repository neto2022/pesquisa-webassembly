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

// Função principal
function main() {
  // Semente de números aleatórios
  const seed = Math.floor(Date.now() / 1000); // Semente baseada no tempo atual
  const random = () => Math.floor(Math.random() * seed);
  // Limita o número aleatório de 0 a 8
  const limite = 8;

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
      a[i][j] = fatorial(random() % limite);
      b[i][j] = fatorial(random() % limite);
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
}

// Chama a função principal
main();
