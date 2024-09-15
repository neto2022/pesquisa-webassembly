let inicioWasm, fimWasm, tempoDeExecucaoWasm;
let inicio, fim;
let memoriaAntes, memoriaDepois;

inicioWasm = performance.now();

WebAssembly.instantiateStreaming(fetch("fatorial.wasm"), {}).then((result) => {
  const instance = result.instance;

  memoriaAntes = performance.memory.usedJSHeapSize;

  instance.exports.main();

  fimWasm = performance.now();

  tempoDeExecucaoWasm = fimWasm - inicioWasm;

  let resultado = document.getElementById("wasm");
  resultado.innerHTML = `Tempo de execução: ${tempoDeExecucaoWasm.toFixed(
    2
  )} MS WASM <br>
    Uso de memória: ${((memoriaDepois - memoriaAntes) / 1048576).toFixed(
      2
    )} MB WASM`;
});

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

memoriaDepois = performance.memory;

let resultado = document.getElementById("pwasm-js");
resultado.innerHTML = `Tempo de execução: ${tempoDeExecucaoWasm} MS WASM <br>
Tempo de execução: ${tempoDeExecucao} MS JS <br>
Uso de memória: ${(memoriaDepois - memoriaAntes) / 1048576} MB JS+WASM`;
