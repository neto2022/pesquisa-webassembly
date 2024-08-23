// main.js
import { fatorialJS } from "./fat.js";

async function main() {
  const WASM = await import("./fatorial.out.js");
  console.time("tempoExecucao WASM");

  WASM.run

  console.timeEnd("tempoExecucao WASM");

  console.time("tempoExecucao JS");

  fatorialJS(100000)

  console.timeEnd("tempoExecucao JS");
  
}

main();
