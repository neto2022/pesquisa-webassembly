const WASM = await import("./fatorial.out.js");
console.time("tempoExecucao WASM");

WASM.run;

console.timeEnd("tempoExecucao WASM");
if (performance.memory) {
  const memory = performance.memory;
  console.log(`Uso de memória: ${memory.usedJSHeapSize / 1048576} MB`);
}
