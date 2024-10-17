// Função para calcular o fatorial
function fatorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * fatorial(n - 1);
}

// Função para multiplicação de matrizes 2x2
function matrizMultiplicacao(a, b) {
  let result = [
    [0, 0],
    [0, 0],
  ];

  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
      result[i][j] = 0;
      for (let k = 0; k < 2; k++) {
        result[i][j] += a[i][k] * b[k][j];
      }
    }
  }
  return result;
}

function main() {
  // Inicializa o gerador de números aleatórios com a hora atual (JavaScript faz isso automaticamente)
  let limite = 8;

  // Função para gerar um número aleatório de 0 até 8
  function randomInt(max) {
    return Math.floor(Math.random() * max);
  }

  // Exemplo de multiplicação de matrizes
  let a = [
    [fatorial(randomInt(limite)), fatorial(randomInt(limite))],
    [fatorial(randomInt(limite)), fatorial(randomInt(limite))],
  ];

  let b = [
    [fatorial(randomInt(limite)), fatorial(randomInt(limite))],
    [fatorial(randomInt(limite)), fatorial(randomInt(limite))],
  ];

  // Realiza a multiplicação das matrizes
  let result = matrizMultiplicacao(a, b);

  // Imprime o resultado da multiplicação das matrizes
  /*console.log("Resultado da multiplicação das matrizes:");
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
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
console.log(`\nBENCHMARK JS Matriz 2x2`);
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
