function fatorial(n) {
  if (n === 0) return 1;
  return n * fatorial(n - 1);
}

function matrizMultiplicacao(a, b, result) {
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      result[i][j] = 0;
      for (let k = 0; k < 5; k++) {
        result[i][j] += a[i][k] * b[k][j];
      }
    }
  }
}

function main() {
  // Semente de números aleatórios
  const seed = Math.floor(Date.now() / 1000); // Semente baseada no tempo atual
  const random = () => Math.floor(Math.random() * seed);

  // Limite de números aleatórios de 0 a 8
  const limite = 8;

  // Matrizes 5x5
  let a = Array(5)
    .fill(0)
    .map(() => Array(5).fill(0));
  let b = Array(5)
    .fill(0)
    .map(() => Array(5).fill(0));
  let result = Array(5)
    .fill(0)
    .map(() => Array(5).fill(0));

  // Preenche as matrizes com fatoriais de números aleatórios
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      a[i][j] = fatorial(random() % limite);
      b[i][j] = fatorial(random() % limite);
    }
  }

  // Realiza a multiplicação das matrizes
  matrizMultiplicacao(a, b, result);

  // Imprime o resultado da multiplicação de matrizes
  console.log("Resultado da multiplicação das matrizes:");
  /*for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                console.log(`result[${i}][${j}] = ${result[i][j]}`);
            }
        }*/
}
const inicio = performance.now();
const memoriaAntes = process.memoryUsage().heapUsed;
main();
const fim = performance.now();
const memoriaDepois = process.memoryUsage().heapUsed;
const tempoDeExecucaoWasm = fim - inicio;
// 1048576 converter um valor em bytes para megabytes
console.log(`\nBENCHMARK JS Matriz 5x5`);
console.log(`Tempo de execução JS: ${tempoDeExecucaoWasm}ms`);
console.log(
  `Memória usada antes JS: ${(memoriaAntes / 1048576).toFixed(2)} MB`
);
console.log(
  `Memória usada depois JS: ${(memoriaDepois / 1048576).toFixed(2)} MB`
);
console.log(
  `Diferença no uso de memória JS: ${(
    (memoriaDepois - memoriaAntes) /
    1048576
  ).toFixed(2)} MB`
);
