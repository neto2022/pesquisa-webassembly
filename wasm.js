let memoriaAntes, memoriaDepois;
let inicio, fim;

WebAssembly.instantiateStreaming(fetch("./fatorial.wasm"), {}).then(
  (result) => {
    inicio = performance.now();
    memoriaAntes = performance.memory.usedJSHeapSize;

    result.instance.exports.main();

    fim = performance.now();
    const tempoDeExecucaoWasm = fim - inicio;

    memoriaDepois = performance.memory.usedJSHeapSize;

    let resultado = document.getElementById("wasmjs");
    resultado.innerHTML = `Tempo de execução: ${tempoDeExecucaoWasm} MS WASM <br>
      Uso de memória: ${(memoriaDepois - memoriaAntes) / 1048576} MB WASM`;
  }
);
