//#include <gmp.h>
#include <stdio.h>
#include <emscripten.h>

emmscripten_KEEPALIVE
unsigned long long int fatorial(int n) {
    if (n == 0 || n == 1) {
        return 1;
    }
    unsigned long long int resultado = 1;
    for (int i = 2; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}

