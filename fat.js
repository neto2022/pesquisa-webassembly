import { input } from "./global.js";
let inicio, fim;
let memoriaAntes, memoriaDepois;

if (performance.memory) {
  memoriaAntes = performance.memory;
}

function fatorialJS(n) {
  for (let fat = 1; n > 1; n = n - 1) {
    fat = fat * n;
  }
}

inicio = performance.now();

fatorialJS(input);

fim = performance.now();

const tempoDeExecucao = fim - inicio;

memoriaDepois = performance.memory;

let resultado = document.getElementById("pjs");

resultado.innerHTML = `Tempo de execução: ${tempoDeExecucao} MS JS <br>
Uso de memória: ${
  (memoriaDepois.usedJSHeapSize - memoriaAntes.usedJSHeapSize) / 1048576
} MB JS`;
