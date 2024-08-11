// main.js
//import { fatorialJS } from "./fatorial.js";
//import { Module } from './a.out.js';
// Função para calcular o tempo de execução
function calcularTempoExecucao(funcao, ...args) {
    const start = performance.now();
    const resultado = funcao(...args);
    const end = performance.now();
    const tempoExecucao = end - start;
    return { resultado, tempoExecucao };
}

function loadScript(src) {
    let script = document.createElement('script');
    script.src = src;
    document.head.append(script);
}

loadScript('a.out.js');
loadScript('fatorial.js')