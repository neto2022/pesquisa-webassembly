let inicio, fim;
let memoriaAntes, memoriaDepois;
let resultt = document.getElementById("tes");

WebAssembly.instantiateStreaming(fetch("fatorial.wasm"), {}).then((result) => {
  inicio = performance.now();
  memoriaAntes = performance.memory.usedJSHeapSize;
  for (let index = 0; index <= 100000; index++) {
    resultt.innerHTML = result.instance.exports.fatorial();
  }
  fim = performance.now();
  memoriaDepois = performance.memory.usedJSHeapSize;
  console.log(`true`, true);
  console.log(`memoriaAntes`, memoriaAntes);
  console.log(`memoriaDepois`, memoriaDepois);
  console.log(`fim, inicio`, fim, inicio);
  let resultado = document.getElementById("pwasm+js");
  resultado.innerHTML = `Tempo de execução: ${fim - inicio} MS JS+WASM <br>
    Uso de memória: ${(memoriaDepois - memoriaAntes) / 1048576} MB JS+WASM`;
});
