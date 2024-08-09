// Função de fatorial em JavaScript
function fatorialJS(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * fatorialJS(n - 1);
}