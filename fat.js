let memoriaAntes;
let memoriaDepois;

if (performance.memory) {
  memoriaAntes = performance.memory;
}

function fatorialJS(numero) {
  let num = BigInt(1);
  for (let i = BigInt(2); i <= numero; i += BigInt(1)) {
    num *= i;
  }
  return num;
}

const inicio = performance.now();

console.log(fatorialJS(10));
const fim = performance.now();

const tempoDeExecucao = fim - inicio;

if (performance.memory) {
  memoriaDepois = performance.memory;
}
const resultado = document.getElementById('pjs');
resultado.innerHTML = `Tempo de execução: ${tempoDeExecucao} MS JS <br>
Uso de memória: ${
  (memoriaDepois.usedJSHeapSize - memoriaAntes.usedJSHeapSize) / 1048576
} MB JS`;
