let inicioWasm, fimWasm;
let inicio, fim;
let memoriaAntes, memoriaDepois;

if (performance.memory) {
  memoriaAntes = performance.memory;
}

const WASM = await import("./fatorial.js");
inicioWasm = performance.now();

WASM.run;

fimWasm = performance.now();
const tempoDeExecucaoWasm = fimWasm - inicioWasm;

function fatorialJS(n) {
  for (let fat = 1; n > 1; n = n - 1) {
    fat = fat * n;
  }
}

inicio = performance.now();

for (let index = 0; index < 100000; index++) {
  fatorialJS(index);
}

fim = performance.now();

const tempoDeExecucao = fim - inicio;

if (performance.memory) {
  memoriaDepois = performance.memory;
}

let resultado = document.getElementById("pwasm-js");
resultado.innerHTML = `Tempo de execução: ${tempoDeExecucaoWasm} MS WASM <br>
Tempo de execução: ${tempoDeExecucao} MS JS <br>
Uso de memória: ${memoriaDepois.usedJSHeapSize - memoriaAntes.usedJSHeapSize / 1048576} MB JS+WASM`;
