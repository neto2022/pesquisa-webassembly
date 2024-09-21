let memoriaAntes;
let memoriaDepois;
let inicio, fim;
let memoriaAntes, memoriaDepois;

memoriaAntes = performance.memory;

function fatorialJS(n) {
  for (let fat = 1; n > 1; n = n - 1) {
    fat = fat * n;
  }
}

inicio = performance.now();

fatorialJS(100000);
const fim = performance.now();
for (let index = 0; index <= 100000; index++) {
  fatorialJS(index);
}
fim = performance.now();

const tempoDeExecucao = fim - inicio;

memoriaDepois = performance.memory;

let resultado = document.getElementById("pjs");
if (performance.memory) {
  memoriaDepois = performance.memory;
}
const resultado = document.getElementById('pjs');
resultado.innerHTML = `Tempo de execução: ${tempoDeExecucao} MS JS <br>
Uso de memória: ${
  (memoriaDepois.usedJSHeapSize - memoriaAntes.usedJSHeapSize) / 1048576
} MB JS`;
Uso de memória: ${
  (memoriaDepois.usedJSHeapSize - memoriaAntes.usedJSHeapSize) / 1048576
} MB JS`;
