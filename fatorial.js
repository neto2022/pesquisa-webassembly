// Função de fatorial em JavaScript
function fatorialJS(n) {
    if (n < 0) return BigInt(0); // Fatorial não definido para negativos
    let resultado = BigInt(1);
    for (let i = BigInt(2); i <= BigInt(n); i++) {
        resultado *= i;
    }
    return resultado;
}

for (let index = 0; index <= 100000; index++) {
    
    console.log(fatorialJS(index));
}
export { fatorialJS };