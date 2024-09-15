let inicioWasm, fimWasm, tempoDeExecucaoWasm;
let inicio, fim;
let memoriaAntes, memoriaDepois;

// Start measuring WASM execution time
inicioWasm = performance.now();

WebAssembly.instantiateStreaming(fetch("fatorial.wasm"), {}).then((result) => {
    const instance = result.instance;

    // Measure memory before running the WASM main function
    if (performance.memory) {
        memoriaAntes = performance.memory.usedJSHeapSize;
    }

    // Call the main function
    instance.exports.main();

    // Measure time after running main
    fimWasm = performance.now();
    tempoDeExecucaoWasm = fimWasm - inicioWasm;

    // Measure memory after running the WASM main function
    if (performance.memory) {
        memoriaDepois = performance.memory.usedJSHeapSize;
    }

    // Update the HTML with results after WASM execution
    updateResults();
}).catch((error) => {
    console.error("Error loading WebAssembly module:", error);
});

// Function to calculate factorial in JS
function fatorialJS(n) {
    let fat = 1;
    for (let i = n; i > 1; i--) {
        fat *= i;
    }
    return fat;
}

// Start measuring JS execution time
inicio = performance.now();

for (let index = 0; index < 100000; index++) {
    fatorialJS(index);
}

fim = performance.now();
const tempoDeExecucao = fim - inicio;

// Measure memory after running JS code
if (performance.memory) {
    memoriaDepois = performance.memory.usedJSHeapSize;
}

// Function to update results in the HTML
function updateResults() {
    let resultado = document.getElementById("pwasm-js");
    resultado.innerHTML = `Tempo de execução: ${tempoDeExecucaoWasm.toFixed(2)} MS WASM <br>
    Tempo de execução: ${tempoDeExecucao.toFixed(2)} MS JS <br>
    Uso de memória: ${((memoriaDepois - memoriaAntes) / 1048576).toFixed(2)} MB JS+WASM`;
}