function fatorialJS(n) {
  console.log(`n`, n);
  for (let fat = 1; n > 1; n = n - 1) {
    fat = fat * n;
  }
}

console.time("tempoExecucao JS");

fatorialJS(100000);

console.timeEnd("tempoExecucao JS");

if (performance.memory) {
  const memory = performance.memory;
  console.log(`Uso de memória: ${memory.usedJSHeapSize / 1048576} MB`);
}
