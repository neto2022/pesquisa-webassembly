// main.js
import { fatorialJS } from "./fat.js";

async function main() {
  const aOut = await import("./fatorial.out.js");
  //const { resultado: resultadoAOut, tempoExecucao: tempoExecucaoAOut } = medirTempoDeExecucao(aOut.run);
  console.time("tempoExecucao WASM");

  // Código cuja execução você quer medir
  for (let i = 0; i < 1000000; i++) {
    aOut.run
  }

  console.timeEnd("tempoExecucao WASM");
  console.time("tempoExecucao JS");

  // Código cuja execução você quer medir
  for (let i = 0; i < 10000n; i++) {
    fatorialJS(100000)
  }

  console.timeEnd("tempoExecucao JS");
  
}

main();
