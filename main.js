// main.js
import { fatorialJS } from "./fatorial.js";

let numero = document.getElementById("calcular");

// Função para carregar o módulo WASM
async function loadWasm() {
    try {
        const response = await fetch('fatorial.out.wasm');
        const bytes = await response.arrayBuffer();
        const wasmModule = await WebAssembly.instantiate(bytes, {});
        return wasmModule.instance.exports;
    } catch (error) {
        console.error('Erro ao carregar o WASM:', error);
    }
}

// Função para calcular o tempo de execução
function calcularTempoExecucao(funcao, ...args) {
    const start = performance.now();
    const resultado = funcao(...args);
    const end = performance.now();
    const tempoExecucao = end - start;
    return { resultado, tempoExecucao };
}

// Carregar o WASM e configurar o evento de clique
loadWasm().then((wasmExports) => {
    numero.addEventListener("click", () => {
        let numeroval = BigInt(document.getElementById("calcularval").value);
        console.log("Calculando..." + numeroval);

        // Calcular usando WASM
        const fatorialWASM = wasmExports.fatorial;
        
        // Converta para Number apenas para a chamada do WASM
        const resultadoWASM = fatorialWASM(Number(numeroval)); 
        console.log(`Resultado do WASM: ${resultadoWASM}`);

        // Calcular usando JavaScript
        const { resultado: resultadoJS, tempoExecucao: tempoExecucaoJS } =
            calcularTempoExecucao(fatorialJS, numeroval);
        console.log(`Resultado do fatorial.js: ${resultadoJS}`);
        console.log(`Tempo de execução do fatorial.js: ${tempoExecucaoJS} ms`);
    });
});