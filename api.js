// main.js
//import { fatorialJS } from "./fat.js";
const os = require('node:os');
function fatorialJS(n) {
  for (let fat = 1; n > 1; n = n - 1) {
    fat = fat * n;
  }
}

async function main() {
  //const WASM = await import("./fatorial.out.js");
  //console.time("tempoExecucao WASM");

  //WASM.run

  //console.timeEnd("tempoExecucao WASM");

  console.time("tempoExecucao JS");

  fatorialJS(100000);

   console.timeEnd("tempoExecucao JS");
  
  if (performance.memory) {
    const memory = performance.memory;
    console.log(`Uso de memória: ${memory.usedJSHeapSize / 1048576} MB`);
    console.log(`Memória total: ${memory.totalJSHeapSize / 1048576} MB`);
    console.log(`Memória máxima: ${memory.jsHeapSizeLimit / 1048576} MB`);
} else {
    console.log("A API performance.memory não é suportada neste navegador.");
}

// Obter informações da CPU
//const cpus = os.cpus();
console.log('Informações da CPU:', version());

// Obter uso médio da CPU em todos os núcleos
//const avgCPUUsage = os.loadavg();
//console.log('Uso médio da CPU (1 min):', avgCPUUsage[0]);

}

main();
