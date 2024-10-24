function fat() {
  const memoriaAntes = performance.memory;
  const inicio = performance.now();
  function fatorialJS(n) {
    for (let fat = 1; n > 1; n -= 1) {
      fat *= n;
    }
  }
  fatorialJS(19);
  const fim = performance.now();
  
  const tempoDeExecucao = fim - inicio;
  
  const memoriaDepois = performance.memory;
  
  const resultado = document.getElementById('pjs');
  resultado.innerHTML = `Tempo de execução: ${tempoDeExecucao} MS JS <br>
  Uso de memória: ${
    (memoriaDepois.usedJSHeapSize - memoriaAntes.usedJSHeapSize) / 1048576
  } MB JS`;
  
}

const _fat = fat();
export { _fat as fat };