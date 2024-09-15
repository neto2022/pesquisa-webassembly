let memoriaAntes, memoriaDepois;
let inicio, fim;

inicio = performance.now();

WebAssembly.instantiateStreaming(fetch("fatorial.wasm"), {}).then((result) => {
  const instance = result.instance;

  memoriaAntes = performance.memory.usedJSHeapSize;

  instance.exports.main();

  fim = performance.now();
  const tempoDeExecucaoWasm = fim - inicio;

  memoriaDepois = performance.memory.usedJSHeapSize;

  let resultado = document.getElementById("wasm");
  resultado.innerHTML = `Tempo de execução: ${tempoDeExecucaoWasm.toFixed(
    2
  )} MS WASM <br>
    Uso de memória: ${((memoriaDepois - memoriaAntes) / 1048576).toFixed(
      2
    )} MB WASM`;
});
