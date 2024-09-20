import { input } from "./global.js";
let inicioWasm, fimWasm, tempoDeExecucaoWasm;
let memoriaAntes, memoriaDepois;

// Start measuring WASM execution time
inicioWasm = performance.now();

WebAssembly.instantiateStreaming(fetch("fatorial.wasm"), {})
  .then((result) => {
    const instance = result.instance;

    memoriaAntes = performance.memory.usedJSHeapSize;

    instance.exports.fatorial(input);

    fimWasm = performance.now();
    memoriaDepois = performance.memory.usedJSHeapSize;
    tempoDeExecucaoWasm = fimWasm - inicioWasm;
    updateResults();
  })
  .catch((error) => {
    console.error("Erro WebAssembly:", error);
  });
function updateResults() {
  let resultado = document.getElementById("pwasm-js");
  resultado.innerHTML = `Tempo de execução: ${tempoDeExecucaoWasm} MS JS+WASM <br>
    Uso de memória: ${((memoriaDepois - memoriaAntes) / 1048576)} MB JS+WASM`;
}
