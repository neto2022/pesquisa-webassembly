#include <stdio.h>

long long fatorial(int n) {
    if (n < 0) return 0; // Fatorial não definido para negativos
    long long resultado = 1;
    for (int i = 1; i <= n; ++i) {
        resultado *= i;
    }
    return resultado;
}