// Função de fatorial em JavaScript
function fatorialJS(n) {
    if (n < 0) return BigInt(0); // Fatorial não definido para negativos
    let resultado = BigInt(1);
    for (let i = BigInt(2); i <= BigInt(n); i++) {
        resultado *= i;
    }
    return resultado;
}

for (let index = 0; index <= 1000; index++) {
    
    fatorialJS(index);
    console.log(index)
}
//export { fatorialJS };