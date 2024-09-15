let memoriaAntes, memoriaDepois;
let inicio, fim;

const WASM = await import("./fatorial.js");

inicio = performance.now();

WASM.run;

fim = performance.now();

const tempoDeExecucaoWasm = fim - inicio;
if (performance.memory) {
  memoriaAntes = performance.memory.usedJSHeapSize;
  WASM.run;
  memoriaDepois = performance.memory.usedJSHeapSize;
}
let resultado = document.getElementById("wasm");
resultado.innerHTML = `Tempo de execução: ${tempoDeExecucaoWasm} MS WASM <br>
Uso de memória: ${((memoriaDepois - memoriaAntes) / 1048576).toFixed(
  2
)} MB WASM`;
console.log(`Memória antes: ${memoriaAntes}, Memória depois: ${memoriaDepois}`);